import Link from "next/link";
import { Medal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { whyChooseUsPoints } from "@/lib/constants";

export function WhyChooseUs() {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white/75 p-6 shadow-sm backdrop-blur-sm sm:p-8">
      <p className="text-sm uppercase tracking-wide text-rose-600">
        Why Choose Us
      </p>
      <h2 className="font-display mt-2 text-2xl font-bold text-zinc-900 sm:text-3xl">
        Built for real care work outcomes and team readiness
      </h2>
      <ul className="mt-5 grid gap-3 text-sm text-zinc-700 sm:grid-cols-2 sm:text-base">
        {whyChooseUsPoints.map((point) => (
          <li key={point} className="flex items-start gap-2">
            <Medal className="mt-0.5 h-4 w-4 text-rose-600" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link href="/book">
          <Button size="lg" className="w-full sm:w-auto">
            Book or Enquire for Team Training
          </Button>
        </Link>
        <WhatsAppButton message="Hi, I want to know why CALL2TRAIN is right for me or my care team." />
      </div>
    </section>
  );
}
