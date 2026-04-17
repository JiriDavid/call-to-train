import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarDays,
  CheckCircle2,
  CreditCard,
  Users2,
} from "lucide-react";
import { BookingForm } from "@/components/booking-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { availableTrainingDates } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Book Training | CALL2TRAIN LTD",
  description:
    "Book Healthcare Assistant training for yourself or your team and pay deposits securely with Stripe.",
};

export default function BookPage() {
  const upcomingDates = availableTrainingDates.slice(0, 4);

  return (
    <div className="relative overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/care-4.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/22 to-black/28" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-6">
            <div className="rounded-3xl border border-rose-100 bg-white/80 p-6 shadow-xl shadow-rose-100/50 backdrop-blur-sm sm:p-8">
              <p className="text-sm uppercase tracking-wide text-rose-600">
                Booking
              </p>
              <h1 className="font-display mt-2 text-3xl font-bold text-zinc-900 sm:text-4xl">
                Secure Individual or Team Training in Minutes
              </h1>
              <p className="mt-3 text-zinc-700">
                Submit your details as an individual learner or team contact,
                choose a date, and complete your deposit securely with Stripe.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <Card className="border-zinc-200 bg-white/85">
                  <CardContent className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-rose-700">
                      Step 1
                    </p>
                    <p className="mt-2 flex items-center gap-2 text-sm font-medium text-zinc-800">
                      <Users2 className="h-4 w-4 text-rose-600" />
                      Add learner or team contact
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-zinc-200 bg-white/85">
                  <CardContent className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-rose-700">
                      Step 2
                    </p>
                    <p className="mt-2 flex items-center gap-2 text-sm font-medium text-zinc-800">
                      <CalendarDays className="h-4 w-4 text-rose-600" />
                      Pick your training date
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-zinc-200 bg-white/85">
                  <CardContent className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-rose-700">
                      Step 3
                    </p>
                    <p className="mt-2 flex items-center gap-2 text-sm font-medium text-zinc-800">
                      <CreditCard className="h-4 w-4 text-rose-600" />
                      Pay deposit and confirm
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm sm:p-8">
              <h2 className="font-display text-2xl font-bold text-zinc-900">
                Upcoming Dates
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {upcomingDates.map((date) => (
                  <span
                    key={date}
                    className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700"
                  >
                    {new Date(date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-rose-200 bg-rose-50/70 p-4">
                <p className="flex items-start gap-2 text-sm text-zinc-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-rose-600" />
                  Booking for multiple staff? Use the same form with your main
                  team contact, then message us on WhatsApp for cohort planning.
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <WhatsAppButton message="Hi, I want to arrange booking for a team and discuss cohort planning." />
                  <Link href="/teams">
                    <Button variant="outline" className="w-full sm:w-auto">
                      View Team Training
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <BookingForm trainingDates={availableTrainingDates} />
          </div>
        </section>
      </div>
    </div>
  );
}
