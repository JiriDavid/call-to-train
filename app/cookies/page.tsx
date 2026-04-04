import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies | CALL2TRAIN LTD",
  description: "Cookie policy for CALL2TRAIN LTD website.",
};

export default function CookiesPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="font-display text-3xl font-bold text-zinc-900">
          Cookies
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-zinc-700">
          This site may use essential cookies to support core website
          functionality and improve user experience. By continuing to browse,
          you consent to necessary cookie usage.
        </p>
      </section>
    </div>
  );
}
