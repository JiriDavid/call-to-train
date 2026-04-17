import { createHmac, timingSafeEqual } from "node:crypto";
import { pricing } from "@/lib/constants";

type StripeCheckoutSession = {
  id: string;
  url: string;
};

type StripeWebhookEvent = {
  type: string;
  data: {
    object: Record<string, unknown>;
  };
};

const STRIPE_API_BASE = "https://api.stripe.com/v1";

function getStripeSecretKey() {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    throw new Error("Please define STRIPE_SECRET_KEY in your environment variables.");
  }

  return secretKey;
}

function getStripeWebhookSecret() {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    throw new Error(
      "Please define STRIPE_WEBHOOK_SECRET in your environment variables.",
    );
  }

  return webhookSecret;
}

export function getAppBaseUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (configuredUrl) {
    return configuredUrl.replace(/\/$/, "");
  }

  return "http://localhost:3000";
}

export async function createStripeCheckoutSession(input: {
  bookingId: string;
  fullName: string;
  phone: string;
  trainingDate: string;
}) {
  const params = new URLSearchParams();
  const baseUrl = getAppBaseUrl();

  params.append("mode", "payment");
  params.append(
    "success_url",
    `${baseUrl}/book/success?session_id={CHECKOUT_SESSION_ID}`,
  );
  params.append("cancel_url", `${baseUrl}/book?cancelled=1`);
  params.append("payment_method_types[0]", "card");
  params.append("line_items[0][quantity]", "1");
  params.append("line_items[0][price_data][currency]", "gbp");
  params.append(
    "line_items[0][price_data][unit_amount]",
    String(Math.round(pricing.deposit * 100)),
  );
  params.append(
    "line_items[0][price_data][product_data][name]",
    "Healthcare Assistant Training Deposit",
  );
  params.append(
    "line_items[0][price_data][product_data][description]",
    `Deposit for training date ${new Date(input.trainingDate).toLocaleDateString("en-GB")}`,
  );
  params.append("metadata[bookingId]", input.bookingId);
  params.append("metadata[fullName]", input.fullName);
  params.append("metadata[phone]", input.phone);
  params.append("metadata[trainingDate]", input.trainingDate);
  params.append("client_reference_id", input.bookingId);

  const response = await fetch(`${STRIPE_API_BASE}/checkout/sessions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getStripeSecretKey()}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });

  if (!response.ok) {
    throw new Error(`Stripe checkout session creation failed: ${await response.text()}`);
  }

  const session = (await response.json()) as StripeCheckoutSession;

  if (!session.url || !session.id) {
    throw new Error("Stripe checkout session response is missing required fields.");
  }

  return session;
}

function parseSignature(signatureHeader: string) {
  const values = signatureHeader.split(",").map((part) => part.trim());
  const timestampValue = values.find((part) => part.startsWith("t="));
  const signatureValues = values
    .filter((part) => part.startsWith("v1="))
    .map((part) => part.slice(3));

  if (!timestampValue || signatureValues.length === 0) {
    return null;
  }

  const timestamp = timestampValue.slice(2);

  if (!timestamp) {
    return null;
  }

  return { timestamp, signatures: signatureValues };
}

export function constructStripeWebhookEvent(
  payload: string,
  signatureHeader: string | null,
): StripeWebhookEvent {
  if (!signatureHeader) {
    throw new Error("Missing Stripe signature header.");
  }

  const parsed = parseSignature(signatureHeader);

  if (!parsed) {
    throw new Error("Invalid Stripe signature header format.");
  }

  const signedPayload = `${parsed.timestamp}.${payload}`;
  const expectedSignature = createHmac("sha256", getStripeWebhookSecret())
    .update(signedPayload)
    .digest("hex");

  const expectedBuffer = Buffer.from(expectedSignature, "utf8");
  const valid = parsed.signatures.some((signature) => {
    const receivedBuffer = Buffer.from(signature, "utf8");

    if (receivedBuffer.length !== expectedBuffer.length) {
      return false;
    }

    return timingSafeEqual(receivedBuffer, expectedBuffer);
  });

  if (!valid) {
    throw new Error("Stripe webhook signature verification failed.");
  }

  return JSON.parse(payload) as StripeWebhookEvent;
}
