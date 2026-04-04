import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TestimonialCard } from "@/components/testimonial-card";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { testimonials } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
      <p className="text-sm uppercase tracking-wide text-rose-600">
        Testimonials
      </p>
      <h2 className="font-display mt-2 text-2xl font-bold text-zinc-900 sm:text-3xl">
        What learners say
      </h2>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} {...testimonial} />
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link href="/book">
          <Button size="lg" className="w-full sm:w-auto">
            Book Training Today
          </Button>
        </Link>
        <WhatsAppButton message="Hi, I saw your testimonials and want to book a seat." />
      </div>
    </section>
  );
}
