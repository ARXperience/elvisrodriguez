import { waLink, WA_MESSAGES } from "@/lib/whatsapp";
import { heroGradient, heroVideo } from "@/data/videos";
import SmartVideo from "@/components/SmartVideo";
import { WhatsAppIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-noir text-ivory-50">
      {/* Video o fondo visual */}
      <div className="absolute inset-0 -z-10">
        {heroVideo ? (
          <SmartVideo
            src={heroVideo.src}
            poster={heroVideo.poster}
            className="h-full w-full"
            fallbackGradient={heroVideo.gradient}
            autoPlay
            loop
            muted
          />
        ) : (
          <div
            className={`h-full w-full bg-gradient-to-br ${heroGradient}`}
            aria-hidden="true"
          >
            <div className="h-full w-full opacity-20 [background-image:radial-gradient(circle_at_30%_20%,white,transparent_55%)]" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-noir/85 via-noir/60 to-noir/30" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-noir/70 to-transparent" />
      </div>

      <div className="container-content flex min-h-[82vh] flex-col justify-center py-24 sm:py-32">
        <div className="max-w-2xl animate-fade-up">
          <p className="mb-5 inline-block rounded-full border border-gold-300/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-200">
            Cota · Cundinamarca
          </p>
          <h1 className="font-display text-4xl font-medium leading-[1.1] sm:text-5xl lg:text-6xl">
            Colorimetría profesional para transformar y cuidar tu cabello
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory-100/85 sm:text-lg">
            Especialistas en rubios, balayage, conservación capilar y belleza
            integral en Cota.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={waLink(WA_MESSAGES.agendarValoracion)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold !px-8 !py-3.5 !text-base"
            >
              Agenda tu valoración
            </a>
            <a href="#transformaciones" className="btn-outline-light !px-8 !py-3.5 !text-base">
              Ver transformaciones
            </a>
          </div>
          <p className="mt-5 flex items-center gap-2 text-sm text-ivory-100/70">
            <WhatsAppIcon className="h-4 w-4 text-gold-300" />
            Respuesta rápida por WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
}
