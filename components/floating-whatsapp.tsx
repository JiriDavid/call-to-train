import { MessageCircleMore } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export function FloatingWhatsApp() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20I%20want%20to%20book%20training`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-rose-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-400/40 transition hover:-translate-y-0.5 hover:bg-rose-700"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircleMore className="h-5 w-5" />
      WhatsApp
    </a>
  );
}
