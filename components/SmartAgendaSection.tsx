import { waLink, WA_MESSAGES } from "@/lib/whatsapp";
import Reveal from "@/components/Reveal";
import ChatSimulation from "@/components/ChatSimulation";
import { WhatsAppIcon } from "@/components/icons";

const flowSteps = [
  "Servicio de interés",
  "Foto / referencia",
  "Disponibilidad",
  "Confirmación de cita",
];

export default function SmartAgendaSection() {
  return (
    <section id="agenda" className="scroll-mt-24 bg-ivory-50 py-20 sm:py-28">
      <div className="container-content">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="left">
            <span className="section-eyebrow">Agenda inteligente</span>
            <h2 className="section-title">
              Agenda tu cita sin esperar respuesta manual
            </h2>
            <p className="section-subtitle">
              Cuéntanos qué servicio buscas y nuestro equipo te orientará para
              avanzar hacia tu valoración.
            </p>

            {/* Flujo visual */}
            <ol className="mt-8 flex flex-wrap items-center gap-y-3">
              {flowSteps.map((step, i) => (
                <li key={step} className="flex items-center">
                  <span className="rounded-full border border-gold-300 bg-gold-50 px-3.5 py-1.5 text-xs font-semibold text-gold-700">
                    {step}
                  </span>
                  {i < flowSteps.length - 1 && (
                    <span className="mx-2 text-gold-400" aria-hidden="true">
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>

            <a
              href={waLink(WA_MESSAGES.agendarCita)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-9"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Agendar por WhatsApp
            </a>
          </Reveal>

          {/* Simulación de chat animada */}
          <Reveal delay={150} direction="right">
            <ChatSimulation />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
