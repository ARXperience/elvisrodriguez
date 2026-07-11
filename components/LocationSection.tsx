import Image from "next/image";
import { waLink, WA_MESSAGES } from "@/lib/whatsapp";
import { withBase } from "@/lib/paths";
import Reveal from "@/components/Reveal";
import { MapPinIcon, WhatsAppIcon } from "@/components/icons";

export const SALON_ADDRESS =
  "Vereda Pueblo Viejo, Km 18 más 970 mts, Variante Cota, Cota, Cundinamarca";

/**
 * URL de búsqueda en Google Maps basada en la dirección.
 * Cuando el cliente comparta el enlace exacto del negocio en Google Maps,
 * reemplazar este valor (y opcionalmente MAPS_EMBED_URL para el mapa embebido).
 */
const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SALON_ADDRESS)}`;

/**
 * Enlace de embed exacto de Google Maps (opcional). Mientras sea null, la
 * card muestra la imagen estática del mapa (/images/mapa-cota.jpg, generada
 * con tiles de © OpenStreetMap contributors) y abre Google Maps al tocarla.
 */
const MAPS_EMBED_URL: string | null = null;

export default function LocationSection() {
  return (
    <section id="ubicacion" className="scroll-mt-24 bg-ivory-50 py-20 sm:py-28">
      <div className="container-content">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="left">
            <span className="section-eyebrow">Ubicación</span>
            <h2 className="section-title">Visítanos en Cota</h2>
            <p className="section-subtitle">
              Te esperamos en un espacio tranquilo, pensado para tu cuidado
              capilar y estético.
            </p>
            <address className="mt-7 flex items-start gap-3 not-italic">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-50 text-gold-600">
                <MapPinIcon className="h-5 w-5" />
              </span>
              <p className="text-base leading-relaxed text-noir">
                Vereda Pueblo Viejo, Km 18 más 970 mts,
                <br />
                Variante Cota, Cota, Cundinamarca
              </p>
            </address>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MapPinIcon className="h-4 w-4" />
                Cómo llegar
              </a>
              <a
                href={waLink(WA_MESSAGES.agendarValoracion)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Escribir por WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={150} direction="right">
            {MAPS_EMBED_URL ? (
              <div className="overflow-hidden rounded-3xl border border-noir/10 shadow-card">
                <iframe
                  src={MAPS_EMBED_URL}
                  title="Ubicación de Elvis Rodríguez Peluquería en Google Maps"
                  className="h-80 w-full lg:h-96"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            ) : (
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-80 items-end justify-center overflow-hidden rounded-3xl border border-noir/10 shadow-card lg:h-96"
              >
                <Image
                  src={withBase("/images/mapa-cota.jpg")}
                  alt="Mapa de Cota, Cundinamarca, con la ubicación del salón en la Variante Cota"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="relative mb-6 flex flex-col items-center gap-1.5 rounded-2xl bg-ivory-50/90 px-6 py-4 text-center shadow-card backdrop-blur-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-noir text-gold-300 transition-transform group-hover:scale-110">
                    <MapPinIcon className="h-5 w-5" />
                  </span>
                  <p className="font-display text-lg text-noir">
                    Variante Cota, Km 18 + 970 mts
                  </p>
                  <p className="text-sm text-noir-muted">
                    Toca para abrir en Google Maps
                  </p>
                </div>
              </a>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
