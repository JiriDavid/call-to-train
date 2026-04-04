import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type TrainingCardProps = {
  title: string;
  description: string;
};

export function TrainingCard({ title, description }: TrainingCardProps) {
  return (
    <Card className="h-full border-zinc-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-zinc-600">{description}</p>
      </CardContent>
    </Card>
  );
}
