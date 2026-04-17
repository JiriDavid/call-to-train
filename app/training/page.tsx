import type { Metadata } from "next";
import Link from "next/link";
import {
  HeartPulse,
  MessageSquareHeart,
  Move,
  ShieldCheck,
  Siren,
  Stethoscope,
} from "lucide-react";
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

const courseModuleMeta = [
  {
    icon: ShieldCheck,
    eyebrow: "Safety Foundation",
    summary: "Learn practical habits that prevent contamination in daily care routines.",
  },
  {
    icon: Stethoscope,
    eyebrow: "Duty of Care",
    summary: "Recognise risk, report concerns correctly, and protect vulnerable people.",
  },
  {
    icon: Move,
    eyebrow: "Hands-On Technique",
    summary: "Use safer body mechanics and support movement with confidence.",
  },
  {
    icon: Siren,
    eyebrow: "Rapid Response",
    summary: "Understand immediate actions in urgent situations before escalation.",
  },
  {
    icon: HeartPulse,
    eyebrow: "Compliance Mindset",
    summary: "Apply health and safety standards consistently during real shift tasks.",
  },
  {
    icon: MessageSquareHeart,
    eyebrow: "Compassionate Communication",
    summary: "Build trust with clear, respectful communication in care settings.",
  },
] as const;

const outcomeMeta = [
  {
    icon: ShieldCheck,
    label: "Verified Capability",
    tone: "from-rose-100 to-white",
  },
  {
    icon: HeartPulse,
    label: "Work-Ready Confidence",
    tone: "from-pink-100 to-white",
  },
  {
    icon: Stethoscope,
    label: "Care Compliance Focus",
    tone: "from-red-100 to-white",
  },
] as const;

export default function TrainingPage() {
  return (
    <div className="relative overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/care-2.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/22 to-black/28" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-zinc-200 bg-white/75 p-6 shadow-sm backdrop-blur-sm sm:p-10">
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
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-bold text-white">
              Course Content
            </h2>
            <p className="hidden text-sm text-rose-100 sm:block">
              6 practical modules in one focused day
            </p>
          </div>

          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trainingPageCourseContent.map((item, index) => {
              const moduleMeta = courseModuleMeta[index];
              const Icon = moduleMeta.icon;

              return (
              <li
                key={item}
                className="group relative overflow-hidden rounded-2xl border border-white/45 bg-white/70 p-4 backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/80"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-rose-200/45 transition group-hover:bg-rose-300/45" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 text-rose-700 ring-1 ring-rose-200/70">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="rounded-full border border-rose-200 bg-white px-2 py-0.5 text-xs font-semibold text-rose-700">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-rose-700">
                    {moduleMeta.eyebrow}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-zinc-900">
                    {item}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {moduleMeta.summary}
                  </p>
                </div>
              </li>
              );
            })}
          </ul>
        </section>

        <section className="mt-12 overflow-hidden rounded-3xl border border-zinc-200 bg-white/75 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-display text-2xl font-bold text-zinc-900">
              Outcome
            </h2>
            <p className="text-sm text-zinc-600">
              What you leave with after this 1-day training
            </p>
          </div>

          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {trainingOutcomePoints.map((item, index) => {
              const meta = outcomeMeta[index] ?? outcomeMeta[outcomeMeta.length - 1];
              const Icon = meta.icon;

              return (
                <li
                  key={item}
                  className={`relative rounded-2xl border border-zinc-200 bg-gradient-to-br ${meta.tone} p-4`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white text-rose-700 ring-1 ring-rose-200">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="rounded-full border border-rose-200 bg-white px-2 py-0.5 text-xs font-semibold text-rose-700">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-rose-700">
                    {meta.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-700 sm:text-base">
                    {item}
                  </p>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50/70 p-4 sm:flex sm:items-center sm:justify-between">
            <p className="text-sm font-medium text-zinc-700">
              Ready to turn these outcomes into stronger care performance?
            </p>
            <div className="mt-3 flex flex-col gap-3 sm:mt-0 sm:flex-row">
              <Link href="/book">
                <Button size="lg" className="w-full sm:w-auto">
                  Book Individual or Team Training
                </Button>
              </Link>
              <WhatsAppButton message="Hi, I want to book Healthcare Assistant training in Leicester for myself or my team." />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
