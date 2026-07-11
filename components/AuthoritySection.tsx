import { craftVideo } from "@/data/videos";
import Reveal from "@/components/Reveal";
import SmartVideo from "@/components/SmartVideo";
import { MapPinIcon } from "@/components/icons";

const highlights = [
  {
    title: "Colorimetría profesional",
    text: "Diagnóstico y técnica para rubios, balayage y correcciones de color responsables.",
    icon: <span className="font-display text-2xl text-gold-500">✦</span>,
  },
  {
    title: "Atención personalizada",
    text: "Cada proceso se diseña según tu tipo de cabello, historial y resultado deseado.",
    icon: <span className="font-display text-2xl text-gold-500">◈</span>,
  },
  {
    title: "Ubicación en Cota",
    text: "Un espacio tranquilo en la Variante Cota, pensado para tu cuidado y bienestar.",
    icon: <MapPinIcon className="h-7 w-7 text-gold-500" />,
  },
];

export default function AuthoritySection() {
  return (
    <section className="bg-ivory-50 py-20 sm:py-28">
      <div className="container-content">
        {craftVideo ? (
          /* Diseño editorial: video del trabajo real junto al mensaje */
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <Reveal direction="left">
              <div className="relative mx-auto w-full max-w-[340px] overflow-hidden rounded-3xl border border-noir/5 shadow-card sm:max-w-[380px] lg:mx-0">
                <SmartVideo
                  src={craftVideo.src}
                  poster={craftVideo.poster}
                  className="aspect-[9/16] w-full"
                  fallbackGradient={craftVideo.gradient}
                  ambient
                />
                <span className="absolute bottom-4 left-5 rounded-full bg-noir/70 px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-200 backdrop-blur-sm">
                  Trabajo real del salón
                </span>
              </div>
            </Reveal>

            <div>
              <Reveal direction="right">
                <span className="section-eyebrow">
                  Elvis Rodríguez Peluquería
                </span>
                <h2 className="section-title">
                  Expertos en color, técnica y cuidado capilar
                </h2>
                <p className="section-subtitle">
                  Elvis Rodríguez Peluquería combina diagnóstico, técnica
                  profesional y productos especializados para lograr resultados
                  de colorimetría que respetan la salud del cabello.
                </p>
                <p className="mt-6 font-display text-lg italic text-gold-600">
                  “Trabajamos para tu embellecimiento, conservación y cuidado
                  capilar y estético.”
                </p>
              </Reveal>

              <div className="mt-9 space-y-4">
                {highlights.map((item, i) => (
                  <Reveal key={item.title} delay={i * 110} direction="right">
                    <div className="flex items-start gap-4 rounded-2xl border border-noir/5 bg-ivory-100 px-5 py-4 shadow-card transition-shadow hover:shadow-card-hover">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-50">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-medium text-noir">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-noir-muted">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Sin video: diseño centrado con cards */
          <>
            <Reveal className="mx-auto max-w-3xl text-center">
              <span className="section-eyebrow">Elvis Rodríguez Peluquería</span>
              <h2 className="section-title">
                Expertos en color, técnica y cuidado capilar
              </h2>
              <p className="section-subtitle mx-auto">
                Elvis Rodríguez Peluquería combina diagnóstico, técnica
                profesional y productos especializados para lograr resultados
                de colorimetría que respetan la salud del cabello.
              </p>
              <p className="mt-6 font-display text-lg italic text-gold-600">
                “Trabajamos para tu embellecimiento, conservación y cuidado
                capilar y estético.”
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {highlights.map((item, i) => (
                <Reveal key={item.title} delay={i * 120}>
                  <div className="flex h-full flex-col items-center rounded-2xl border border-noir/5 bg-ivory-100 px-7 py-9 text-center shadow-card transition-shadow hover:shadow-card-hover">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-50">
                      {item.icon}
                    </div>
                    <h3 className="mt-5 font-display text-xl font-medium text-noir">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-noir-muted">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
