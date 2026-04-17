import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { whatYouWillLearnPoints } from "@/lib/constants";

export function WhatYouLearn() {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white/75 p-6 shadow-sm backdrop-blur-sm sm:p-8">
      <h2 className="font-display text-2xl font-bold text-zinc-900 sm:text-3xl">
        What You Will Learn
      </h2>
      <ul className="mt-5 grid gap-3 text-sm text-zinc-700 sm:grid-cols-2 sm:text-base">
        {whatYouWillLearnPoints.map((point) => (
          <li
            key={point}
            className="flex items-start gap-2 rounded-xl border border-zinc-200 bg-white/65 px-3 py-2 backdrop-blur-sm"
          >
            <Check className="mt-0.5 h-4 w-4 text-rose-600" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link href="/book">
          <Button size="lg" className="w-full sm:w-auto">
            Start Individual or Team Booking
          </Button>
        </Link>
        <WhatsAppButton message="Hi, I want to ask about learning outcomes for me or my team." />
      </div>
    </section>
  );
}
