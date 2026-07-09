import { waLink, WA_MESSAGES } from "@/lib/whatsapp";
import Reveal from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/icons";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-noir py-24 text-ivory-50 sm:py-32">
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
