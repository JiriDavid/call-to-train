import { MessageCircleMore } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { getWhatsAppBookingLink } from "@/lib/constants";

type WhatsAppButtonProps = {
  message: string;
  label?: string;
  className?: string;
  buttonVariant?: ButtonProps["variant"];
  buttonSize?: ButtonProps["size"];
};

export function WhatsAppButton({
  message,
  label = "WhatsApp",
  className,
  buttonVariant = "outline",
  buttonSize = "lg",
}: WhatsAppButtonProps) {
  const whatsappLink = getWhatsAppBookingLink(message);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      <Button
        variant={buttonVariant}
        size={buttonSize}
        className="w-full gap-2 sm:w-auto"
      >
        <MessageCircleMore className="h-4 w-4" />
        {label}
      </Button>
    </a>
  );
}
