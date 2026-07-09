import { waLink, WA_MESSAGES } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons";

export default function TopBar() {
  return (
    <div className="bg-noir text-ivory-100">
      <div className="container-content flex items-center justify-between gap-4 py-2 text-xs">
        <p className="truncate tracking-wide">
          <span className="text-gold-300">✦</span> Agenda tu valoración
          capilar en Cota
        </p>
        <div className="flex shrink-0 items-center gap-4">
          <a href="#servicios" className="hidden text-ivory-100/80 transition-colors hover:text-gold-300 sm:inline">
            Servicios
          </a>
          <a href="#tienda" className="hidden text-ivory-100/80 transition-colors hover:text-gold-300 sm:inline">
            Tienda
          </a>
          <a href="#ubicacion" className="hidden text-ivory-100/80 transition-colors hover:text-gold-300 md:inline">
            Ubicación
          </a>
          <a
            href={waLink(WA_MESSAGES.agendarValoracion)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#1faa53] px-3 py-1 font-semibold text-white transition-colors hover:bg-[#178a43]"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
