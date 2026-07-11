import { waLink, WA_MESSAGES } from "@/lib/whatsapp";
import Reveal from "@/components/Reveal";
import SmartVideo from "@/components/SmartVideo";
import { WhatsAppIcon } from "@/components/icons";

export default function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-noir py-24 text-ivory-50 sm:py-32">
      {/* Video de fondo (stock libre de Mixkit, salón de belleza) */}
      <div className="absolute inset-0 -z-10">
        <SmartVideo
          src="/videos/stock/valoracion-salon.mp4"
          poster="/videos/stock/valoracion-salon.jpg"
          className="h-full w-full"
          fallbackGradient="from-noir via-noir-soft to-gold-700"
          ambient
        />
        <div className="absolute inset-0 bg-noir/75" />
      </div>
      <div
        className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_80%_20%,rgba(176,127,63,0.35),transparent_55%),radial-gradient(circle_at_15%_85%,rgba(179,113,74,0.25),transparent_50%)]"
        aria-hidden="true"
      />
      <div className="container-content relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow !text-gold-300">
            Agenda tu cita
          </span>
          <h2 className="font-display text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
            Tu próximo cambio empieza con una valoración
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ivory-100/80 sm:text-lg">
            Escríbenos, cuéntanos qué resultado quieres lograr y recibe
            orientación para agendar tu cita.
          </p>
          <a
            href={waLink(WA_MESSAGES.agendarValoracion)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-9 !px-9 !py-4 !text-base"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Agendar por WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
