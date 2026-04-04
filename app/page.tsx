import { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { TrainingOverview } from "@/components/training-overview";
import { WhatYouLearn } from "@/components/what-you-learn";
import { WhoItsFor } from "@/components/who-its-for";
import { WhyChooseUs } from "@/components/why-choose-us";
import { AboutSection } from "@/components/about-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { PricingSection } from "@/components/pricing-section";
import { FinalCtaSection } from "@/components/final-cta-section";

export const metadata: Metadata = {
  title: "CALL2TRAIN LTD | Become a Certified Healthcare Assistant in 1 Day",
  description:
    "Healthcare Assistant training in Leicester with theory and practical sessions. Book quickly and continue via WhatsApp.",
};

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="space-y-10">
        <HeroSection />
        <TrainingOverview />
        <WhatYouLearn />
        <WhoItsFor />
        <WhyChooseUs />
        <AboutSection />
        <TestimonialsSection />
        <PricingSection />
        <FinalCtaSection />
      </div>
    </div>
  );
}
