import { z } from "zod";

export const bookingSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number.")
    .max(20, "Phone number is too long."),
  trainingDate: z.string().min(1, "Please choose a training date."),
});

export type BookingInput = z.infer<typeof bookingSchema>;

export const adminLoginSchema = z.object({
  password: z.string().min(1, "Password is required."),
});
