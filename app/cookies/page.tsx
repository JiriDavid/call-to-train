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
        <div className="mt-6 space-y-6 text-sm leading-relaxed text-zinc-700">
          <h2 className="font-semibold text-lg text-zinc-900">
            How Do You Use Cookies?
          </h2>
          <p>
            A cookie is a small file of letters and numbers that we store on
            your browser or the hard drive of your computer if you agree.
            Cookies contain information that is transferred to your computer's
            hard drive.
          </p>
          <p>
            Please note that third parties (including, for example, advertising
            networks and providers of external services like web traffic
            analysis services) may also use cookies, over which we have no
            control. These cookies are likely to be analytical/performance
            cookies or targeting cookies.
          </p>
          <p>
            You block cookies by activating the setting on your browser that
            allows you to refuse the setting of all or some cookies. However, if
            you use your browser settings to block all cookies (including
            essential cookies) you may not be able to access all or parts of
            this site.
          </p>

          <h2 className="font-semibold text-lg text-zinc-900">
            What Cookies Do You Use?
          </h2>
          <p>We use the following cookies:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Strictly necessary cookies. These are cookies that are required
              for the operation of this site. They include, for example, cookies
              that enable you to log into secure areas of this site, use a
              shopping cart or make use of e-billing services.
            </li>
            <li>
              Analytical/performance cookies. They allow us to recognise and
              count the number of visitors and to see how visitors move around
              this site when they are using it. This helps us to improve the way
              our site works, for example, by ensuring that users are finding
              what they are looking for easily.
            </li>
            <li>
              Functionality cookies. These are used to recognise you when you
              return to this site. This enables us to personalise our content
              for you, greet you by name and remember your preferences (for
              example, your choice of language or region).
            </li>
            <li>
              Targeting cookies. These cookies record your visit to this site,
              the pages you have visited and the links you have followed. We
              will use this information to make our site and the advertising
              displayed on it more relevant to your interests. We may also share
              this information with third parties for this purpose.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
