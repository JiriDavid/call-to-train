"use server";

import { revalidatePath } from "next/cache";
import { bookingSchema, type BookingInput } from "@/lib/validations";
import { connectToDatabase } from "@/lib/mongodb";
import { Booking } from "@/lib/models/Booking";
import { isAdminAuthenticated } from "@/actions/admin";
import { createStripeCheckoutSession } from "@/lib/stripe";
import type { BookingRow } from "@/lib/types";

export type ActionResult = {
  success: boolean;
  message: string;
  checkoutUrl?: string;
};

export async function createBookingAction(
  payload: BookingInput,
): Promise<ActionResult> {
  const parsed = bookingSchema.safeParse(payload);

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.issues[0]?.message ?? "Invalid booking details.",
    };
  }

  try {
    await connectToDatabase();

    const existingBooking = await Booking.findOne({
      phone: parsed.data.phone,
      trainingDate: parsed.data.trainingDate,
    });

    if (existingBooking?.paymentStatus === "paid") {
      return {
        success: false,
        message: "This booking has already been paid for.",
      };
    }

    const booking =
      existingBooking ??
      (await Booking.create({
        ...parsed.data,
        status: "pending",
        paymentStatus: "unpaid",
      }));

    const checkoutSession = await createStripeCheckoutSession({
      bookingId: String(booking._id),
      fullName: parsed.data.fullName,
      phone: parsed.data.phone,
      trainingDate: parsed.data.trainingDate,
    });

    await Booking.findByIdAndUpdate(booking._id, {
      fullName: parsed.data.fullName,
      phone: parsed.data.phone,
      trainingDate: parsed.data.trainingDate,
      checkoutSessionId: checkoutSession.id,
    });

    revalidatePath("/");
    revalidatePath("/admin");

    return {
      success: true,
      message: "Redirecting you to Stripe checkout...",
      checkoutUrl: checkoutSession.url,
    };
  } catch (error) {
    const duplicateError =
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      (error as { code?: number }).code === 11000;

    if (duplicateError) {
      return {
        success: false,
        message: "You already booked this date with the same phone number.",
      };
    }

    return {
      success: false,
      message: "Unable to start Stripe checkout right now. Please try again.",
    };
  }
}

export async function getBookingsAction(): Promise<BookingRow[]> {
  await connectToDatabase();

  const bookings = await Booking.find({})
    .sort({ createdAt: -1 })
    .lean<Array<BookingRow & { createdAt: Date }>>();

  return bookings.map((booking) => ({
    ...booking,
    _id: String(booking._id),
    paymentStatus: booking.paymentStatus ?? "unpaid",
    createdAt: new Date(booking.createdAt).toISOString(),
  }));
}

export async function updateBookingStatusAction(
  bookingId: string,
  status: "pending" | "confirmed",
): Promise<ActionResult> {
  const isAuthenticated = await isAdminAuthenticated();

  if (!isAuthenticated) {
    return { success: false, message: "Unauthorized request." };
  }

  if (!bookingId) {
    return { success: false, message: "Invalid booking selected." };
  }

  await connectToDatabase();

  await Booking.findByIdAndUpdate(bookingId, { status });

  revalidatePath("/admin");

  return {
    success: true,
    message: `Booking marked as ${status}.`,
  };
}
