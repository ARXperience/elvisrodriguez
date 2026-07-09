"use client";

import { useRef } from "react";
import { transformationVideos, type VideoItem } from "@/data/videos";
import Reveal from "@/components/Reveal";
import SmartVideo from "@/components/SmartVideo";
import { PlayIcon } from "@/components/icons";

function GalleryCard({ video }: { video: VideoItem }) {
  const isVertical = video.orientation === "vertical";

  return (
    <figure
      className={`group relative shrink-0 snap-center overflow-hidden rounded-3xl border border-noir/5 shadow-card transition-shadow hover:shadow-card-hover ${
        isVertical
          ? "aspect-[9/16] w-[240px] sm:w-[280px]"
          : "aspect-video w-[85vw] max-w-[560px] sm:w-[520px]"
      }`}
    >
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
        ambient
      />
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-noir/80 via-noir/35 to-transparent p-5 pt-14">
        <h3 className="font-display text-lg font-medium text-ivory-50">
          {video.title}
        </h3>
        {video.subtitle && (
          <p className="mt-1 text-xs text-ivory-100/75">{video.subtitle}</p>
        )}
      </figcaption>
    </figure>
  );
}

export default function VideoGallery() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * track.clientWidth * 0.7, behavior: "smooth" });
  };

  return (
    <section
      id="transformaciones"
      className="scroll-mt-24 overflow-hidden bg-ivory-50 py-20 sm:py-28"
    >
      <div className="container-content">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal direction="left" className="max-w-xl">
            <span className="section-eyebrow">Resultados</span>
            <h2 className="section-title">Transformaciones reales</h2>
            <p className="section-subtitle">
              Color, técnica y cuidado capilar en el trabajo real del salón.
              Desliza para ver los resultados.
            </p>
          </Reveal>

          <Reveal direction="right" className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollByAmount(-1)}
              aria-label="Deslizar galería hacia atrás"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-noir/15 text-noir transition-all hover:border-gold-500 hover:bg-gold-50 hover:text-gold-600"
            >
              <span aria-hidden="true" className="text-lg">←</span>
            </button>
            <button
              type="button"
              onClick={() => scrollByAmount(1)}
              aria-label="Deslizar galería hacia adelante"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-noir/15 text-noir transition-all hover:border-gold-500 hover:bg-gold-50 hover:text-gold-600"
            >
              <span aria-hidden="true" className="text-lg">→</span>
            </button>
          </Reveal>
        </div>
      </div>

      {/* Carrusel horizontal con snap; el padding lateral alinea la primera
          card con el contenido y deja ver un asomo de la siguiente. */}
      <Reveal direction="zoom">
        <div
          ref={trackRef}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-5 pb-4 sm:px-[max(2rem,calc((100vw-76rem)/2+2rem))]"
        >
          {transformationVideos.map((video) => (
            <GalleryCard key={video.id} video={video} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
