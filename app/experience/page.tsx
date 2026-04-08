import type { Metadata } from "next";
import { AboutSection } from "@/components/about-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { WhatYouLearn } from "@/components/what-you-learn";
import { WhoItsFor } from "@/components/who-its-for";
import { WhyChooseUs } from "@/components/why-choose-us";

export const metadata: Metadata = {
  title: "Learning Experience | CALL2TRAIN LTD",
  description:
    "Explore who the training is for, what you will learn, why learners choose CALL2TRAIN, and real learner testimonials.",
};

export default function ExperiencePage() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="home-bg home-bg-top motion-safe:animate-float-slow"
      />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-rose-100 bg-white/90 p-6 shadow-xl shadow-rose-100/50 sm:p-10">
          <p className="text-sm uppercase tracking-wide text-rose-600">
            Learning Experience
          </p>
          <h1 className="font-display mt-2 text-3xl font-bold text-zinc-900 sm:text-4xl">
            A Closer Look At CALL2TRAIN
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-600">
            This page gives you the full picture: skills covered, who the course
            is designed for, what makes our sessions effective, and feedback
            from people who trained with us.
          </p>
        </section>

        <div className="mt-10 space-y-10">
          <WhatYouLearn />
          <WhoItsFor />
          <WhyChooseUs />
          <AboutSection />
          <TestimonialsSection />
        </div>
      </div>
    </div>
  );
}
