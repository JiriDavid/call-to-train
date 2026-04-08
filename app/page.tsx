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
  title: "CALL2TRAIN LTD | Become a Certified Healthcare Assistant in 1 Day",
  description:
    "Healthcare Assistant training in Leicester with theory and practical sessions. Book quickly and continue via WhatsApp.",
};

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="home-bg home-bg-top motion-safe:animate-float-slow"
      />
      <div
        aria-hidden="true"
        className="home-bg home-bg-bottom motion-safe:animate-float-slower"
      />

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
            className="animate-fade-up rounded-3xl border border-rose-100 bg-white/90 p-5 shadow-xl shadow-rose-100/45 sm:p-8"
            style={{ animationDelay: "180ms" }}
          >
            <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-rose-700">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  New Layout
                </p>
                <h2 className="font-display mt-3 text-2xl font-bold text-zinc-900 sm:text-3xl">
                  Shorter homepage, richer visual story
                </h2>
                <p className="mt-3 max-w-xl text-zinc-600">
                  We moved detailed learning journey content into a focused page
                  so this homepage stays fast and clear. View who the training
                  is for, what you will learn, and learner stories in one place.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/experience">
                    <Button className="gap-2">
                      Explore Learning Experience
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Button>
                  </Link>
                  <Link href="/training">
                    <Button variant="outline">
                      View Full Training Breakdown
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-2xl border border-rose-200 bg-rose-50">
                  <Image
                    src="/images/training-scene.svg"
                    alt="Illustration of healthcare training checklist and learner profile"
                    width={1200}
                    height={900}
                    className="h-52 w-full object-cover sm:h-full"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl border border-rose-200 bg-rose-50">
                  <Image
                    src="/images/care-team.svg"
                    alt="Illustration representing collaborative care team readiness"
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
