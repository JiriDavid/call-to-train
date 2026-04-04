import Link from "next/link";
import Image from "next/image";
import {
  BUSINESS_EMAIL,
  policyLinks,
  PRIMARY_PHONE,
  SECONDARY_PHONE,
} from "@/lib/constants";
import logo from "@/app/library/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-rose-200 bg-gradient-to-b from-zinc-50 to-rose-50/40">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-10 text-sm text-zinc-600 sm:grid-cols-2 sm:px-6 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-xl bg-zinc-900/90 p-1.5 shadow-md ring-1 ring-zinc-700/50">
              <Image
                src={logo}
                alt="CALL2TRAIN LTD logo"
                className="h-8 w-auto rounded-md"
              />
            </span>
            <p className="text-base font-semibold text-zinc-900">
              CALL2TRAIN LTD
            </p>
          </div>
          <p className="mt-2">
            Healthcare Assistant and care-focused training in Leicester.
          </p>
          <p className="mt-3">
            WhatsApp-first support for fast booking and confirmation.
          </p>

          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            {policyLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-rose-600 hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="sm:text-right">
          <p className="font-semibold text-zinc-900">Contact</p>
          <p className="mt-2">WhatsApp: {PRIMARY_PHONE}</p>
          <p>Phone: {SECONDARY_PHONE}</p>
          <p>Email: {BUSINESS_EMAIL}</p>
        </div>
      </div>
    </footer>
  );
}
