import { Card, CardContent } from "@/components/ui/card";

type TestimonialCardProps = {
  name: string;
  role: string;
  quote: string;
};

export function TestimonialCard({ name, role, quote }: TestimonialCardProps) {
  return (
    <Card className="h-full border-rose-100 shadow-md shadow-rose-100/40">
      <CardContent className="space-y-4 p-6">
        <p className="text-sm leading-relaxed text-zinc-700">“{quote}”</p>
        <div>
          <p className="font-semibold text-zinc-900">{name}</p>
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            {role}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
