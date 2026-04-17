import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "@/lib/mongodb";
import { Booking } from "@/lib/models/Booking";
import { constructStripeWebhookEvent } from "@/lib/stripe";

export const runtime = "nodejs";

type StripeCheckoutObject = {
  id?: string;
  metadata?: {
    bookingId?: string;
  };
  client_reference_id?: string;
  payment_intent?: string;
};

export async function POST(request: Request) {
  try {
    const payload = await request.text();
    const signature = request.headers.get("stripe-signature");
    const event = constructStripeWebhookEvent(payload, signature);

    await connectToDatabase();

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as StripeCheckoutObject;
      const bookingId =
        session.metadata?.bookingId ?? session.client_reference_id;

      const update = {
        paymentStatus: "paid",
        stripePaymentIntentId: session.payment_intent,
        paidAt: new Date(),
      };

      if (bookingId) {
        await Booking.findByIdAndUpdate(bookingId, update);
      } else if (session.id) {
        await Booking.findOneAndUpdate({ checkoutSessionId: session.id }, update);
      }

      revalidatePath("/admin");
    }

    return NextResponse.json({ received: true });
  } catch {
    return NextResponse.json(
      { received: false, message: "Invalid Stripe webhook request." },
      { status: 400 },
    );
  }
}
