import Reveal from "@/components/Reveal";
import { CheckIcon } from "@/components/icons";

const trustPoints = [
  "Diagnóstico personalizado",
  "Atención profesional",
  "Resultados visibles",
  "Cuidado posterior recomendado",
];

export default function TestimonialsSection() {
  return (
    <section className="bg-ivory-100 py-20 sm:py-28">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Confianza</span>
          <h2 className="section-title">Lo que dicen nuestros clientes</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Reveal key={i} delay={i * 110}>
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-dashed border-gold-300/70 bg-ivory-50 p-7">
                <div className="font-display text-4xl text-gold-300" aria-hidden="true">
                  “
                </div>
                <blockquote className="mt-2 flex-1 text-sm italic leading-relaxed text-noir-muted">
                  Espacio reservado para testimonios reales de clientes.
                </blockquote>
                <figcaption className="mt-5 text-xs uppercase tracking-[0.18em] text-noir-muted/70">
                  Próximamente
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="grid gap-4 rounded-2xl bg-ivory-50 p-6 shadow-card sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-50 text-gold-600">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-noir">{point}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
