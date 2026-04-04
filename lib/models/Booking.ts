import { Schema, model, models, type InferSchemaType } from "mongoose";

const bookingSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: false,
      trim: true,
      lowercase: true,
    },
    trainingDate: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed"],
      default: "pending",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  },
);

bookingSchema.index({ phone: 1, trainingDate: 1 }, { unique: true });

export type BookingDocument = InferSchemaType<typeof bookingSchema> & {
  _id: string;
};

export const Booking = models.Booking || model("Booking", bookingSchema);
