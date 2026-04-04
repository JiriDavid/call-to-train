import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | CALL2TRAIN LTD",
  description: "Privacy policy for CALL2TRAIN LTD.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="font-display text-3xl font-bold text-zinc-900">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-zinc-700">
          CALL2TRAIN LTD collects only the information needed to process
          training bookings and contact learners regarding sessions. Personal
          details are handled responsibly and are not sold to third parties.
        </p>
      </section>
    </div>
  );
}
