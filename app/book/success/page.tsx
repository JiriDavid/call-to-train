import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "Payment Successful | CALL2TRAIN LTD",
  description:
    "Your Stripe payment was successful. Your training booking deposit has been received for individual or team training.",
};

type BookingSuccessPageProps = {
  searchParams: {
    session_id?: string;
  };
};

export default function BookingSuccessPage({
  searchParams,
}: BookingSuccessPageProps) {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm sm:p-8">
        <p className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
          <CheckCircle2 className="h-4 w-4" />
          Payment Received
        </p>
        <h1 className="font-display mt-4 text-3xl font-bold text-zinc-900">
          Your booking deposit is confirmed
        </h1>
        <p className="mt-3 text-zinc-700">
          Thank you. We have received your Stripe payment and your booking is
          now reserved.
        </p>
        {searchParams.session_id ? (
          <p className="mt-3 text-xs text-zinc-500">
            Reference: {searchParams.session_id}
          </p>
        ) : null}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/training">
            <Button size="lg" className="w-full sm:w-auto">
              View Training Details
            </Button>
          </Link>
          <WhatsAppButton message="Hi, I have completed my deposit payment and want to confirm next steps for training." />
        </div>
      </div>
    </div>
  );
}
