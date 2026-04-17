export type BookingStatus = "pending" | "confirmed";
export type PaymentStatus = "unpaid" | "paid";

export type BookingRow = {
  _id: string;
  fullName: string;
  phone: string;
  email?: string;
  trainingDate: string;
  status: BookingStatus;
  paymentStatus: PaymentStatus;
  checkoutSessionId?: string;
  createdAt: string;
};
