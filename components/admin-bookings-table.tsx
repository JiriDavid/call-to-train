"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { updateBookingStatusAction } from "@/actions/booking";
import type { BookingRow, BookingStatus } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type AdminBookingsTableProps = {
  bookings: BookingRow[];
};

export function AdminBookingsTable({ bookings }: AdminBookingsTableProps) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const updateStatus = (bookingId: string, status: BookingStatus) => {
    startTransition(async () => {
      const result = await updateBookingStatusAction(bookingId, status);

      if (!result.success) {
        toast.error(result.message);
        return;
      }

      toast.success(result.message);
      router.refresh();
    });
  };

  if (!bookings.length) {
    return (
      <p className="rounded-xl border border-dashed border-zinc-300 p-6 text-sm text-zinc-600">
        No bookings yet.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-zinc-50 text-xs uppercase tracking-wide text-zinc-600">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Phone</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Payment</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => {
            const isConfirmed = booking.status === "confirmed";
            const isPaid = booking.paymentStatus === "paid";

            return (
              <tr key={booking._id} className="border-t border-zinc-100">
                <td className="px-4 py-3 font-medium text-zinc-900">
                  {booking.fullName}
                </td>
                <td className="px-4 py-3 text-zinc-700">{booking.phone}</td>
                <td className="px-4 py-3 text-zinc-700">
                  {new Date(booking.trainingDate).toLocaleDateString("en-GB")}
                </td>
                <td className="px-4 py-3">
                  <Badge variant={isPaid ? "success" : "muted"}>
                    {booking.paymentStatus}
                  </Badge>
                </td>
                <td className="px-4 py-3">
                  <Badge variant={isConfirmed ? "success" : "muted"}>
                    {booking.status}
                  </Badge>
                </td>
                <td className="px-4 py-3">
                  <Button
                    size="sm"
                    onClick={() =>
                      updateStatus(
                        booking._id,
                        isConfirmed ? "pending" : "confirmed",
                      )
                    }
                    disabled={isPending || !isPaid}
                    variant={isConfirmed ? "outline" : "default"}
                  >
                    {isPending
                      ? "Saving..."
                      : !isPaid
                        ? "Awaiting Payment"
                      : isConfirmed
                        ? "Mark Pending"
                        : "Confirm"}
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
