import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function FinalCtaSection() {
  return (
    <section className="rounded-3xl border border-rose-300 bg-gradient-to-r from-rose-200/80 via-rose-100/75 to-rose-200/80 p-6 shadow-sm backdrop-blur-sm sm:p-10">
      <p className="text-sm uppercase tracking-wide text-rose-700">
        Limited Seats and Team Slots
      </p>
      <h2 className="font-display mt-2 text-2xl font-bold text-zinc-900 sm:text-4xl">
        Ready to upskill yourself or your care team?
      </h2>
      <p className="mt-3 flex items-start gap-2 text-sm text-zinc-700 sm:text-base">
        <AlertCircle className="mt-0.5 h-4 w-4 text-rose-600" />
        Book now to secure your preferred training date, or contact us for team scheduling support.
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link href="/book">
          <Button size="lg" className="w-full sm:w-auto">
            Book or Enquire Now
          </Button>
        </Link>
        <WhatsAppButton message="Hi, I want to book now for myself or discuss team training options." />
      </div>
    </section>
  );
}
