import Link from "next/link";
import Image from "next/image";
import type { Route } from "next";
import {
  BookOpenCheck,
  CalendarCheck2,
  Home,
  Sparkles,
  Users2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { policyLinks } from "@/lib/constants";
import logo from "@/app/library/logo.png";

const productLinks = [
  { href: "/training", label: "Training" },
  { href: "/teams", label: "Teams" },
  { href: "/book", label: "Book" },
] as const satisfies ReadonlyArray<{ href: Route; label: string }>;

const resourceLinks = [
  {
    href: "/experience",
    label: "Experience",
  },
  {
    href: "/privacy-policy",
    label: "Privacy Policy",
  },
  {
    href: "/cookies",
    label: "Cookies",
  },
] as const satisfies ReadonlyArray<{ href: Route; label: string }>;

const companyLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/admin",
    label: "Admin",
  },
] as const satisfies ReadonlyArray<{ href: Route; label: string }>;

const shortcutLinks = [
  { href: "/", label: "Home", Icon: Home },
  { href: "/training", label: "Training", Icon: BookOpenCheck },
  { href: "/teams", label: "Teams", Icon: Users2 },
  { href: "/book", label: "Book", Icon: CalendarCheck2 },
  { href: "/experience", label: "Experience", Icon: Sparkles },
] as const satisfies ReadonlyArray<{
  href: Route;
  label: string;
  Icon: LucideIcon;
}>;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto mt-14 w-full max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-zinc-200 bg-zinc-100/70 p-8 text-zinc-600 shadow-sm sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.45fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-zinc-900 p-1.5 shadow-sm">
                <Image
                  src={logo}
                  alt="CALL2TRAIN LTD logo"
                  className="h-6 w-auto rounded-md"
                />
              </span>
              <p className="text-2xl font-semibold tracking-tight text-zinc-900">
                CALL2TRAIN
              </p>
            </div>

            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-zinc-500">
              CALL2TRAIN empowers individual learners, care agencies, and
              employers to build practical healthcare skills with focused
              training sessions, fast booking, and clear outcomes.
            </p>

            <div className="mt-6 flex items-center gap-4">
              {shortcutLinks.map(({ href, label, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-zinc-300 bg-white text-zinc-900 transition hover:-translate-y-0.5 hover:border-rose-300 hover:text-rose-700"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xl font-semibold text-zinc-900">Product</p>
            <div className="mt-4 space-y-3 text-[15px]">
              {productLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block transition hover:text-zinc-900"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xl font-semibold text-zinc-900">Resources</p>
            <div className="mt-4 space-y-3 text-[15px]">
              {resourceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block transition hover:text-zinc-900"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xl font-semibold text-zinc-900">Company</p>
            <div className="mt-4 space-y-3 text-[15px]">
              {companyLinks.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className="block transition hover:text-zinc-900"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-6 text-sm text-zinc-500 sm:flex sm:items-center sm:justify-between">
          <p>© {currentYear} CALL2TRAIN. All rights reserved.</p>
          <div className="mt-3 flex flex-wrap items-center gap-6 sm:mt-0">
            {policyLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="underline-offset-4 transition hover:text-zinc-900 hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
