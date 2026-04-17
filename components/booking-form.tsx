"use client";

import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { createBookingAction } from "@/actions/booking";
import { bookingSchema, type BookingInput } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type BookingFormProps = {
  trainingDates: string[];
};

export function BookingForm({ trainingDates }: BookingFormProps) {
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const searchParams = useSearchParams();
  const paymentCancelled = searchParams.get("cancelled") === "1";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      trainingDate: trainingDates[0] ?? "",
    },
  });

  const onSubmit = (values: BookingInput) => {
    startTransition(async () => {
      const result = await createBookingAction(values);

      if (!result.success) {
        toast.error(result.message);
        return;
      }

      toast.success(result.message);
      setSubmitted(true);

      if (!result.checkoutUrl) {
        toast.error("Stripe checkout could not be started.");
        return;
      }

      reset({
        fullName: "",
        phone: "",
        trainingDate: trainingDates[0] ?? "",
      });

      window.location.assign(result.checkoutUrl);
    });
  };

  return (
    <Card className="border-rose-100 shadow-lg shadow-rose-100/50">
      <CardHeader>
        <CardTitle>Book Individual or Team Training</CardTitle>
        <CardDescription>
          Fill in this short form as a learner or team contact and continue to
          secure Stripe payment.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {paymentCancelled ? (
          <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-700">
            Payment was cancelled. Your booking is not secured until payment is
            completed.
          </div>
        ) : null}

        {submitted ? (
          <div className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
            Redirecting you to secure Stripe checkout.
          </div>
        ) : null}

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <Label htmlFor="fullName">Full name or team contact</Label>
            <Input
              id="fullName"
              placeholder="Enter your name or organisation contact"
              {...register("fullName")}
            />
            {errors.fullName ? (
              <p className="text-xs text-rose-600">{errors.fullName.message}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              placeholder="e.g. +44..."
              {...register("phone")}
            />
            {errors.phone ? (
              <p className="text-xs text-rose-600">{errors.phone.message}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="trainingDate">Training date</Label>
            <select
              id="trainingDate"
              className="flex h-11 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2"
              {...register("trainingDate")}
            >
              {trainingDates.map((date) => (
                <option key={date} value={date}>
                  {new Date(date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </option>
              ))}
            </select>
            {errors.trainingDate ? (
              <p className="text-xs text-rose-600">
                {errors.trainingDate.message}
              </p>
            ) : null}
          </div>

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Starting payment..." : "Pay Deposit and Confirm"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
