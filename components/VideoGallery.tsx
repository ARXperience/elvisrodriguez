"use client";

import { useState } from "react";
import { transformationVideos } from "@/data/videos";
import Reveal from "@/components/Reveal";
import SmartVideo from "@/components/SmartVideo";
import { PlayIcon } from "@/components/icons";

const INITIAL_VISIBLE = 3;

export default function VideoGallery() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll
    ? transformationVideos
    : transformationVideos.slice(0, INITIAL_VISIBLE);

  return (
    <section
      id="transformaciones"
      className="scroll-mt-24 bg-ivory-50 py-20 sm:py-28"
    >
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Resultados</span>
          <h2 className="section-title">Transformaciones reales</h2>
          <p className="section-subtitle mx-auto">
            Color, técnica y cuidado capilar en el trabajo real del salón.
            Desliza y mira los resultados.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((video, i) => (
            <Reveal key={video.id} delay={(i % 3) * 110}>
              <figure className="group relative aspect-[9/16] overflow-hidden rounded-3xl border border-noir/5 shadow-card transition-shadow hover:shadow-card-hover">
                <SmartVideo
                  src={video.src}
                  poster={video.poster}
                  className="h-full w-full"
                  fallbackGradient={video.gradient}
                  fallbackContent={
                    <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center text-ivory-50">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ivory-50/20 backdrop-blur-sm">
                        <PlayIcon className="h-6 w-6 translate-x-0.5" />
                      </span>
                      <span className="text-xs uppercase tracking-[0.2em] text-ivory-50/80">
                        Video próximamente
                      </span>
                    </div>
                  }
                  controls
                  loop
                  muted
                />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-noir/80 via-noir/40 to-transparent p-5 pt-14">
                  <h3 className="font-display text-lg font-medium text-ivory-50">
                    {video.title}
                  </h3>
                  {video.subtitle && (
                    <p className="mt-1 text-xs text-ivory-100/75">
                      {video.subtitle}
                    </p>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {!showAll && transformationVideos.length > INITIAL_VISIBLE && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="btn-outline"
            >
              Ver más transformaciones
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
