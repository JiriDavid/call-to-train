import type { Metadata } from "next";
import Link from "next/link";
import { Building2, CalendarClock, ClipboardCheck, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "Team Training | CALL2TRAIN LTD",
  description:
    "Healthcare Assistant team training for care homes, agencies, and providers with practical, compliance-focused delivery.",
};

const teamBenefits = [
  {
    title: "Faster Onboarding",
    description:
      "Bring new starters up to a consistent baseline quickly with focused practical training.",
    Icon: Users2,
  },
  {
    title: "Compliance-Aligned Delivery",
    description:
      "Training content aligns with CQC and NHS-style expectations for everyday care practice.",
    Icon: ClipboardCheck,
  },
  {
    title: "Flexible Team Scheduling",
    description:
      "Coordinate dates that fit your rotas and operational needs with support via WhatsApp.",
    Icon: CalendarClock,
  },
];

export default function TeamsPage() {
  return (
    <div className="relative overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/care-3.mp4"
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
          <p className="text-sm uppercase tracking-wide text-rose-600">Team Training</p>
          <h1 className="font-display mt-2 text-3xl font-bold text-zinc-900 sm:text-4xl">
            Workforce Training for Care Providers
          </h1>
          <p className="mt-4 max-w-3xl text-zinc-700">
            We support care homes, agencies, and care providers who want to
            train multiple staff members with practical, standards-focused
            sessions that improve confidence and consistency.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/book">
              <Button size="lg" className="w-full sm:w-auto">
                Book Team Places
              </Button>
            </Link>
            <WhatsAppButton message="Hi, I want to arrange team training for our staff." />
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Why Organisations Choose CALL2TRAIN
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {teamBenefits.map(({ title, description, Icon }) => (
              <Card key={title} className="border-zinc-200 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg text-zinc-900">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-rose-100 text-rose-700">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-zinc-700">{description}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-rose-200 bg-rose-50/75 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-rose-700 ring-1 ring-rose-200">
            <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
            Team Enquiries
          </p>
          <h2 className="font-display mt-3 text-2xl font-bold text-zinc-900 sm:text-3xl">
            Need a plan for multiple staff members?
          </h2>
          <p className="mt-3 text-zinc-700">
            Share your approximate team size and preferred dates on WhatsApp, and
            we will help you plan the right training setup.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton message="Hi, we are a care provider and need team training support." />
            <Link href="/training">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View Training Content
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
