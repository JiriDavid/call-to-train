import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WhatsAppButton } from "@/components/whatsapp-button";
import {
  trainingOutcomePoints,
  trainingPageCourseContent,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Training Details | CALL2TRAIN LTD",
  description:
    "Full Healthcare Assistant training breakdown in Leicester: course content, delivery format, and outcomes.",
};

export default function TrainingPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-10">
        <p className="text-sm uppercase tracking-wide text-rose-600">
          Training Breakdown
        </p>
        <h1 className="font-display mt-2 text-3xl font-bold text-zinc-900 sm:text-4xl">
          Healthcare Assistant Training in Leicester
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-600">
          A focused 1-day refresher and intensive pathway that combines
          essential theory with practical care-based learning.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <p className="text-sm text-zinc-500">Duration</p>
              <p className="mt-1 text-lg font-semibold text-zinc-900">1 Day</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <p className="text-sm text-zinc-500">Format</p>
              <p className="mt-1 text-lg font-semibold text-zinc-900">
                Theory + Practical
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <p className="text-sm text-zinc-500">Location</p>
              <p className="mt-1 text-lg font-semibold text-zinc-900">
                Leicester
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-bold text-zinc-900">
          Course Content
        </h2>
        <ul className="mt-5 grid gap-3 text-sm text-zinc-700 sm:grid-cols-2 sm:text-base">
          {trainingPageCourseContent.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-zinc-200 bg-white px-4 py-3"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="font-display text-2xl font-bold text-zinc-900">
          Outcome
        </h2>
        <ul className="mt-5 space-y-3 text-sm text-zinc-700 sm:text-base">
          {trainingOutcomePoints.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-zinc-100 px-4 py-3"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/book">
            <Button size="lg" className="w-full sm:w-auto">
              Book Your Seat
            </Button>
          </Link>
          <WhatsAppButton message="Hi, I want to book Healthcare Assistant training in Leicester." />
        </div>
      </section>
    </div>
  );
}
