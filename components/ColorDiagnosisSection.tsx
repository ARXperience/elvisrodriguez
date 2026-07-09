import { waLink, WA_MESSAGES } from "@/lib/whatsapp";
import Reveal from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/icons";

const steps = [
  {
    number: "01",
    title: "Envía foto actual de tu cabello",
    text: "Con luz natural, para ver el estado y tono real de tu cabello.",
  },
  {
    number: "02",
    title: "Comparte tu referencia de color",
    text: "Una imagen del resultado que te gustaría lograr.",
  },
  {
    number: "03",
    title: "Recibe orientación inicial",
    text: "Te contamos qué proceso sería recomendable para tu caso.",
  },
  {
    number: "04",
    title: "Agenda tu valoración",
    text: "Coordinamos la cita para el diagnóstico presencial.",
  },
];

export default function ColorDiagnosisSection() {
  return (
    <section id="colorimetria" className="scroll-mt-24 bg-noir py-20 text-ivory-50 sm:py-28">
      <div className="container-content">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="section-eyebrow !text-gold-300">Colorimetría</span>
            <h2 className="font-display text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
              Antes de cambiar tu color, hacemos diagnóstico
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory-100/80 sm:text-lg">
              Cada cabello tiene una historia: procesos anteriores, porosidad,
              tono de base. Para servicios de color te recomendamos enviarnos
              una foto actual de tu cabello y una referencia del resultado que
              deseas. Así podemos orientarte de forma honesta antes de tu
              valoración.
            </p>
            <a
              href={waLink(WA_MESSAGES.colorimetria)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-8 !px-8"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Enviar fotos por WhatsApp
            </a>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 110}>
                <div className="h-full rounded-2xl border border-ivory-50/10 bg-ivory-50/5 p-6 backdrop-blur-sm transition-colors hover:border-gold-300/40">
                  <span className="font-display text-3xl text-gold-300">
                    {step.number}
                  </span>
                  <h3 className="mt-3 font-medium text-ivory-50">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ivory-100/70">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
