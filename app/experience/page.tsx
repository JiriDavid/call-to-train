import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseMedical,
  CheckCircle2,
  Sparkles,
  Users2,
} from "lucide-react";
import { TestimonialCard } from "@/components/testimonial-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WhatsAppButton } from "@/components/whatsapp-button";
import {
  testimonials,
  trainingOverviewPoints,
  whatYouWillLearnPoints,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Learning Experience | CALL2TRAIN LTD",
  description:
    "Explore the CALL2TRAIN experience for individual learners and care teams, including structure, delivery style, and outcomes.",
};

export default function ExperiencePage() {
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
        <div className="space-y-10">
          <section className="rounded-3xl border border-rose-100 bg-white/75 p-6 shadow-xl shadow-rose-100/50 backdrop-blur-sm sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-rose-700">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  Learning Experience
                </p>
                <h1 className="font-display mt-3 text-3xl font-bold text-zinc-900 sm:text-4xl">
                  Training designed for people and care organisations
                </h1>
                <p className="mt-4 max-w-2xl text-zinc-700">
                  Whether you are building personal confidence for care work or
                  developing a stronger team standard, our sessions combine
                  practical delivery, compliance clarity, and real workplace
                  relevance.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/book">
                    <Button className="gap-2">
                      Book Training
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Button>
                  </Link>
                  <Link href="/teams">
                    <Button variant="outline">Explore Team Training</Button>
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-2xl border border-rose-200 bg-rose-50">
                  <Image
                    src="/care-5.jpg"
                    alt="Illustration of practical healthcare training modules"
                    width={1200}
                    height={900}
                    className="h-52 w-full object-cover sm:h-full"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl border border-rose-200 bg-rose-50">
                  <Image
                    src="/care-3.jpg"
                    alt="Illustration of care team training and collaboration"
                    width={1200}
                    height={900}
                    className="h-52 w-full object-cover sm:h-full"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-4 md:grid-cols-2">
            <Card className="border-rose-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-zinc-900">
                  <Users2 className="h-5 w-5 text-rose-600" />
                  Individual Learners
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-600">
                  Ideal for new healthcare assistants, returners, and support
                  workers building practical confidence quickly.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                  {trainingOverviewPoints.slice(0, 3).map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-rose-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-rose-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-zinc-900">
                  <BriefcaseMedical className="h-5 w-5 text-rose-600" />
                  Care Teams and Employers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-600">
                  Built for care homes, agencies, and providers who need
                  consistent standards across multiple staff members.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-rose-600" />
                    <span>Team cohort scheduling support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-rose-600" />
                    <span>Practical, compliance-focused delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-rose-600" />
                    <span>WhatsApp-first coordination for quick planning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="rounded-3xl border border-zinc-200 bg-white/75 p-6 shadow-sm backdrop-blur-sm sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h2 className="font-display text-2xl font-bold text-zinc-900 sm:text-3xl">
                Inside the Learning Journey
              </h2>
              <p className="text-sm text-zinc-600">
                One day. Six practical modules.
              </p>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {whatYouWillLearnPoints.map((point, index) => (
                <div
                  key={point}
                  className="rounded-2xl border border-zinc-200 bg-white/80 p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-rose-700">
                    Module 0{index + 1}
                  </p>
                  <p className="mt-2 text-sm font-medium text-zinc-800">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Voices from Learners and Teams
            </h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-rose-200 bg-rose-100/70 p-6 shadow-sm backdrop-blur-sm sm:p-8">
            <h2 className="font-display text-2xl font-bold text-zinc-900 sm:text-3xl">
              Ready to train yourself or your team?
            </h2>
            <p className="mt-3 max-w-2xl text-zinc-700">
              Tell us your goal, preferred dates, and whether this is for an
              individual or organisation. We will help you choose the best next
              step.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/book">
                <Button size="lg" className="w-full sm:w-auto">
                  Book Training
                </Button>
              </Link>
              <WhatsAppButton message="Hi, I want to plan training for myself or my care team." />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
