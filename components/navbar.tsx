"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, MessageCircleMore, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import logo from "@/app/library/logo.png";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20I%20want%20to%20book%20training%20for%20myself%20or%20my%20team`;

  const navItems = [
    { href: "/training", label: "Training" },
    { href: "/teams", label: "Teams" },
    { href: "/experience", label: "Experience" },
    { href: "/book", label: "Book" },
  ];

  const closeMenu = () => setMenuOpen(false);
  const isActivePath = (href: string) => pathname === href;

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (!headerRef.current) {
        return;
      }

      const target = event.target;
      if (target instanceof Node && !headerRef.current.contains(target)) {
        closeMenu();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 border-b border-white/50 bg-white/60 shadow-[0_10px_30px_-20px_rgba(225,29,72,0.45)] backdrop-blur-xl backdrop-saturate-150"
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-extrabold tracking-tight text-zinc-900 sm:text-lg"
          onClick={closeMenu}
        >
          <span className="rounded-xl bg-zinc-900/90 p-1.5 shadow-md ring-1 ring-zinc-700/50 px-2">
            <Image
              src={logo}
              alt="CALL2TRAIN LTD logo"
              className="h-9 w-auto rounded-md"
              priority
            />
          </span>
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium text-zinc-700 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative rounded-md px-2 py-1 transition ${
                isActivePath(item.href)
                  ? "bg-rose-50 text-rose-700"
                  : "text-zinc-700 hover:text-rose-600"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-0.5 left-2 h-0.5 rounded-full bg-rose-600 transition-all duration-300 ease-out ${
                  isActivePath(item.href)
                    ? "w-[calc(100%-1rem)]"
                    : "w-0 group-hover:w-[calc(100%-1rem)]"
                }`}
              />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href={whatsappLink} target="_blank" rel="noreferrer">
            <Button className="gap-2" size="sm">
              <MessageCircleMore className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </Button>
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 text-zinc-700 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      <button
        type="button"
        aria-label="Close mobile menu backdrop"
        onClick={closeMenu}
        className={`fixed inset-0 z-30 bg-zinc-900/30 backdrop-blur-[1px] transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <div
        id="mobile-nav-menu"
        className={`relative z-40 overflow-hidden border-t border-white/60 bg-white/70 backdrop-blur-xl transition-all duration-300 ease-out md:hidden ${
          menuOpen
            ? "max-h-80 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div
          className={`mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-3 transition duration-300 sm:px-6 ${
            menuOpen ? "translate-y-0" : "-translate-y-2"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                isActivePath(item.href)
                  ? "bg-rose-100 text-rose-700"
                  : "text-zinc-700 hover:bg-rose-50 hover:text-rose-700"
              }`}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/book" onClick={closeMenu}>
            <Button className="mt-1 w-full">Book Now</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
