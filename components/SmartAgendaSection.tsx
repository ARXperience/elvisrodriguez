import { waLink, WA_MESSAGES } from "@/lib/whatsapp";
import Reveal from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/icons";

const flowSteps = [
  "Servicio de interés",
  "Foto / referencia",
  "Disponibilidad",
  "Confirmación de cita",
];

const chatMessages = [
  {
    from: "cliente",
    text: "Hola, quiero un balayage.",
  },
  {
    from: "asistente",
    text: "Claro, para orientarte mejor, ¿tu cabello está natural o tiene procesos anteriores?",
  },
  {
    from: "cliente",
    text: "Está tinturado.",
  },
  {
    from: "asistente",
    text: "Perfecto. Por favor envíanos una foto actual con luz natural y una referencia del resultado que deseas. Luego podemos revisar disponibilidad para tu valoración.",
  },
] as const;

export default function SmartAgendaSection() {
  return (
    <section id="agenda" className="scroll-mt-24 bg-ivory-50 py-20 sm:py-28">
      <div className="container-content">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
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

          {/* Simulación visual de chat */}
          <Reveal delay={150}>
            <div className="mx-auto max-w-md overflow-hidden rounded-3xl border border-noir/10 bg-ivory-200 shadow-card">
              <div className="flex items-center gap-3 bg-noir px-5 py-4 text-ivory-50">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500 font-display text-sm font-semibold">
                  ER
                </div>
                <div>
                  <p className="text-sm font-semibold">
                    Elvis Rodríguez Peluquería
                  </p>
                  <p className="text-xs text-gold-300">
                    Responde rápido por WhatsApp
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 px-4 py-6">
                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
                      msg.from === "cliente"
                        ? "self-end rounded-br-md bg-[#d7f5e2] text-noir"
                        : "self-start rounded-bl-md bg-ivory-50 text-noir"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>
              <p className="border-t border-noir/5 bg-ivory-100 px-5 py-3 text-center text-[0.65rem] uppercase tracking-[0.18em] text-noir-muted">
                Simulación de conversación orientativa
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
