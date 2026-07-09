import { waLink, WA_MESSAGES } from "@/lib/whatsapp";
import Reveal from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/icons";

export default function HomeCareSection() {
  return (
    <section className="bg-gradient-to-b from-ivory-100 to-ivory-200 py-20 sm:py-28">
      <div className="container-content">
        <div className="overflow-hidden rounded-3xl border border-gold-200/60 bg-ivory-50 shadow-card">
          <div className="grid lg:grid-cols-2">
            <div
              className="relative hidden min-h-[280px] bg-gradient-to-br from-gold-200 via-copper-400 to-gold-600 lg:block"
              aria-hidden="true"
            >
              <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_70%_30%,white,transparent_55%)]" />
              <span className="absolute bottom-8 left-8 font-display text-6xl text-ivory-50/70">
                ❋
              </span>
            </div>
            <Reveal className="px-7 py-12 sm:px-12 sm:py-16">
              <span className="section-eyebrow">Mantenimiento</span>
              <h2 className="section-title !text-3xl sm:!text-4xl">
                Lleva el cuidado profesional a casa
              </h2>
              <p className="section-subtitle">
                Después de un servicio de color o tratamiento capilar, el
                mantenimiento en casa es clave. Por eso, Elvis Rodríguez puede
                recomendar productos según tu tipo de cabello, color y
                necesidad.
              </p>
              <a
                href={waLink(WA_MESSAGES.rutinaCasa)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Consultar rutina recomendada
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
