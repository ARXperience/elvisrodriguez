import { waLink, WA_MESSAGES } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons";

/** Botón flotante de WhatsApp visible en toda la página. */
export default function WhatsAppFloat() {
  return (
    <a
      href={waLink(WA_MESSAGES.agendarValoracion)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp para agendar una valoración"
      className="animate-pulse-ring fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1faa53] text-white shadow-card-hover transition-all duration-300 hover:scale-110 hover:bg-[#178a43] sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
