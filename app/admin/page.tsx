import type { Metadata } from "next";
import { getBookingsAction } from "@/actions/booking";
import { isAdminAuthenticated } from "@/actions/admin";
import { AdminLoginForm } from "@/components/admin-login-form";
import { AdminBookingsTable } from "@/components/admin-bookings-table";
import { AdminLogoutButton } from "@/components/admin-logout-button";

export const metadata: Metadata = {
  title: "Admin Dashboard | CALL2TRAIN LTD",
  description: "Manage CALL2TRAIN bookings and confirmations.",
};

export default async function AdminPage() {
  const authenticated = await isAdminAuthenticated();

  if (!authenticated) {
    return (
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <AdminLoginForm />
      </div>
    );
  }

  const bookings = await getBookingsAction();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-wide text-rose-600">
            Admin Dashboard
          </p>
          <h1 className="font-display mt-1 text-3xl font-bold text-zinc-900">
            Booking Management
          </h1>
        </div>
        <AdminLogoutButton />
      </div>

      <AdminBookingsTable bookings={bookings} />
    </div>
  );
}
