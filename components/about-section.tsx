import Link from "next/link";
import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { companyOverview } from "@/lib/constants";

export function AboutSection() {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white/75 p-6 shadow-sm backdrop-blur-sm sm:p-8">
      <p className="text-sm uppercase tracking-wide text-rose-600">About Us</p>
      <h2 className="font-display mt-2 text-2xl font-bold text-zinc-900 sm:text-3xl">
        {companyOverview.title}
      </h2>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <Card className="border-zinc-200">
          <CardHeader>
            <CardTitle className="text-lg">Who We Are</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-relaxed text-zinc-700">
            {companyOverview.description}
          </CardContent>
        </Card>
        <Card className="border-zinc-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Building2 className="h-5 w-5 text-rose-600" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-relaxed text-zinc-700">
            {companyOverview.mission}
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link href="/book">
          <Button size="lg" className="w-full sm:w-auto">
            Book Individual or Team Training
          </Button>
        </Link>
        <WhatsAppButton message="Hi, I want to learn more about CALL2TRAIN for individual or team training." />
      </div>
    </section>
  );
}
