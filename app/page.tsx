import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { TrainingOverview } from "@/components/training-overview";
import { PricingSection } from "@/components/pricing-section";
import { FinalCtaSection } from "@/components/final-cta-section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "CALL2TRAIN LTD | Healthcare Training for Individuals and Teams",
  description:
    "Healthcare Assistant training in Leicester for individual learners and company teams, with theory and practical sessions.",
};

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/care-1.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/22 to-black/28" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="space-y-10">
          <div
            className="interactive-panel animate-fade-up"
            style={{ animationDelay: "40ms" }}
          >
            <HeroSection />
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "120ms" }}>
            <TrainingOverview />
          </div>

          <section
            className="animate-fade-up rounded-3xl border border-rose-100 bg-white/75 p-5 shadow-xl shadow-rose-100/45 backdrop-blur-sm sm:p-8"
            style={{ animationDelay: "180ms" }}
          >
            <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-rose-700">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  NHS Approved Training
                </p>
                <h2 className="font-display mt-3 text-2xl font-bold text-zinc-900 sm:text-3xl">
                  Transform Your Healthcare Career or Team
                </h2>
                <p className="mt-3 max-w-xl text-zinc-600">
                  Join thousands of healthcare professionals who have advanced
                  their careers through our comprehensive Healthcare Assistant
                  training. Whether you&apos;re starting your journey or
                  upskilling your entire care team, we provide the knowledge,
                  skills, and certification you need to deliver exceptional
                  patient care.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/teams">
                    <Button variant="outline">Corporate Team Training</Button>
                  </Link>
                  <Link href="/experience">
                    <Button className="gap-2">
                      Start Your Journey
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Button>
                  </Link>
                  <Link href="/training">
                    <Button variant="outline">Course Curriculum</Button>
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-2xl border border-rose-200 bg-rose-50">
                  <Image
                    src="/images/training-scene.svg"
                    alt="Healthcare professional learning essential care skills and procedures"
                    width={1200}
                    height={900}
                    className="h-52 w-full object-cover sm:h-full"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl border border-rose-200 bg-rose-50">
                  <Image
                    src="/images/care-team.svg"
                    alt="Dedicated healthcare team providing compassionate patient care"
                    width={1200}
                    height={900}
                    className="h-52 w-full object-cover sm:h-full"
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="animate-fade-up" style={{ animationDelay: "480ms" }}>
            <PricingSection />
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "540ms" }}>
            <FinalCtaSection />
          </div>
        </div>
      </div>
    </div>
  );
}
