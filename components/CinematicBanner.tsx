import { waLink, WA_MESSAGES } from "@/lib/whatsapp";
import { bannerVideo } from "@/data/videos";
import SmartVideo from "@/components/SmartVideo";
import { WhatsAppIcon } from "@/components/icons";

/**
 * Banner cinematográfico de ancho completo con video horizontal de fondo.
 * Solo se renderiza si hay un video asignado para este bloque.
 */
export default function CinematicBanner() {
  if (!bannerVideo) return null;

  return (
    <section className="relative isolate overflow-hidden bg-noir text-ivory-50">
      <div className="absolute inset-0 -z-10">
        <SmartVideo
          src={bannerVideo.src}
          poster={bannerVideo.poster}
          className="h-full w-full"
          fallbackGradient={bannerVideo.gradient}
          ambient
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir/85 via-noir/45 to-noir/30" />
      </div>

      <div className="container-content flex min-h-[52vh] flex-col items-center justify-center py-24 text-center sm:min-h-[60vh]">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">
          Conservación capilar
        </p>
        <h2 className="max-w-3xl font-display text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
          El color solo es el comienzo: el cuidado lo hace durar
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory-100/85 sm:text-lg">
          Cada proceso termina con recomendaciones de mantenimiento para que tu
          resultado se conserve saludable y luminoso en casa.
        </p>
        <a
          href={waLink(WA_MESSAGES.rutinaCasa)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold mt-8"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Consultar mi rutina
        </a>
      </div>
    </section>
  );
}
