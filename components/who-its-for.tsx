import Link from "next/link";
import { ArrowRightCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { whoItsForPoints } from "@/lib/constants";

export function WhoItsFor() {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white/75 p-6 shadow-sm backdrop-blur-sm sm:p-8">
      <h2 className="font-display text-2xl font-bold text-zinc-900 sm:text-3xl">
        Who This Is For
      </h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {whoItsForPoints.map((point) => (
          <Card key={point} className="border-zinc-200">
            <CardContent className="flex items-center gap-2 p-4 text-sm text-zinc-700">
              <ArrowRightCircle className="h-4 w-4 text-rose-600" />
              <span>{point}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link href="/book">
          <Button size="lg" className="w-full sm:w-auto">
            Check Available Dates
          </Button>
        </Link>
        <WhatsAppButton message="Hi, I want to know if this training is suitable for me or my team." />
      </div>
    </section>
  );
}
