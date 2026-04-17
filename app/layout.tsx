import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Toaster } from "sonner";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://call2train.co.uk"),
  title: "CALL2TRAIN LTD | Healthcare Assistant Training Leicester",
  description:
    "Healthcare Assistant training in Leicester for individual learners and care teams, with theory and practical sessions and easy WhatsApp booking.",
  openGraph: {
    title: "CALL2TRAIN LTD",
    description:
      "Healthcare Assistant training in Leicester for individuals and company teams.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} bg-zinc-50 text-zinc-900 antialiased`}
      >
        <div className="relative min-h-screen">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[500px] bg-[radial-gradient(circle_at_20%_10%,rgba(225,29,72,0.22),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(244,63,94,0.12),transparent_38%)]" />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <Toaster richColors position="top-right" />
        </div>
      </body>
    </html>
  );
}
