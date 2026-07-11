/**
 * Distribución de los videos de Elvis Rodríguez en el diseño.
 *
 * scripts/sync-videos.mjs analiza los archivos de public/videos/elvis/
 * (resolución real + tipo de contenido por nombre) y este módulo los
 * reparte en los bloques de la web:
 *
 * - hero          → video horizontal de salón (o el que se llame "hero…")
 * - craft         → horizontal de estilista/colorista, sección de autoridad
 * - banner        → horizontal cinematográfico (cabello en movimiento)
 * - homeCare      → video de producto en "Lleva el cuidado a casa"
 * - storeBanner   → video de campaña en la cabecera de la tienda
 * - galería       → todo lo demás: 9:16 como reels, 16:9 como cards anchas
 *
 * Si falta un video para un bloque, ese bloque usa su fondo visual premium.
 */

import {
  generatedVideoEntries,
  type GeneratedVideoEntry,
} from "./videos.generated";

export interface VideoItem {
  id: string;
  src: string;
  poster?: string;
  title: string;
  subtitle?: string;
  orientation: "vertical" | "horizontal";
  /** Gradiente del placeholder si el archivo no está disponible */
  gradient: string;
}

export const heroGradient = "from-noir via-noir-soft to-gold-700";

function toItem(
  entry: GeneratedVideoEntry,
  meta: { id: string; title: string; subtitle?: string; gradient: string },
): VideoItem {
  return {
    id: meta.id,
    src: entry.src,
    poster: entry.poster ?? undefined,
    title: meta.title,
    subtitle: meta.subtitle,
    orientation: entry.orientation === "vertical" ? "vertical" : "horizontal",
    gradient: meta.gradient,
  };
}

/* ------------------------------------------------------------------ */
/* Asignación de videos a bloques de diseño                            */
/* ------------------------------------------------------------------ */

const pool = [...generatedVideoEntries];

/** Saca del pool el primer video que cumpla el criterio. */
function take(
  predicate: (e: GeneratedVideoEntry) => boolean,
): GeneratedVideoEntry | null {
  const index = pool.findIndex(predicate);
  if (index === -1) return null;
  return pool.splice(index, 1)[0];
}

const isHorizontal = (e: GeneratedVideoEntry) => e.orientation === "horizontal";

// 1. Hero: nombre explícito > video de salón horizontal > video de salón.
const heroEntry =
  take((e) => e.isHero) ??
  take((e) => e.kind === "salon" && isHorizontal(e)) ??
  take((e) => e.kind === "salon");

// 2. Autoridad: estilista/colorista trabajando. Se muestra en formato
// vertical 9:16, así que se prefiere una versión vertical si existe.
const craftEntry =
  take((e) => e.orientation === "vertical" && /colorist|stylist|estilista|colorista/i.test(e.name)) ??
  take((e) => e.kind === "people" && e.orientation === "vertical") ??
  take((e) => isHorizontal(e) && /colorist|stylist|estilista|colorista/i.test(e.name)) ??
  take((e) => e.kind === "people" && isHorizontal(e));

// 3. Banner cinematográfico: cabello en movimiento / cámara lenta.
const bannerEntry =
  take((e) => isHorizontal(e) && /slow|woman|touch|motion|movimiento/i.test(e.name)) ??
  take((e) => e.kind === "people" && isHorizontal(e));

// 4. Cuidado en casa y cabecera de tienda: videos de producto/campaña.
const homeCareEntry = take((e) => e.kind === "product");
const storeBannerEntry = take((e) => e.kind === "product");

/* ------------------------------------------------------------------ */
/* Exports por bloque                                                  */
/* ------------------------------------------------------------------ */

export const heroVideo: VideoItem | null = heroEntry
  ? toItem(heroEntry, {
      id: "hero",
      title: "Elvis Rodríguez Peluquería",
      gradient: heroGradient,
    })
  : null;

export const craftVideo: VideoItem | null = craftEntry
  ? toItem(craftEntry, {
      id: "craft",
      title: "Técnica y diagnóstico en el salón",
      gradient: "from-noir-soft via-copper-500 to-gold-400",
    })
  : null;

export const bannerVideo: VideoItem | null = bannerEntry
  ? toItem(bannerEntry, {
      id: "banner",
      title: "Cabello saludable en movimiento",
      gradient: "from-noir via-copper-600 to-gold-500",
    })
  : null;

export const homeCareVideo: VideoItem | null = homeCareEntry
  ? toItem(homeCareEntry, {
      id: "homecare",
      title: "Cuidado profesional en casa",
      gradient: "from-gold-200 via-copper-400 to-gold-600",
    })
  : null;

export const storeBannerVideo: VideoItem | null = storeBannerEntry
  ? toItem(storeBannerEntry, {
      id: "store-banner",
      title: "Tienda de cuidado profesional",
      gradient: "from-gold-300 via-copper-400 to-noir-soft",
    })
  : null;

/* ------------------------------------------------------------------ */
/* Galería "Transformaciones reales" con el resto de videos            */
/* ------------------------------------------------------------------ */

const galleryTitles: Array<{
  id: string;
  title: string;
  subtitle: string;
  gradient: string;
}> = [
  {
    id: "rubio-luminoso",
    title: "Rubio luminoso",
    subtitle: "Diseño de rubio con cuidado capilar",
    gradient: "from-gold-200 via-gold-400 to-copper-500",
  },
  {
    id: "balayage-natural",
    title: "Balayage natural",
    subtitle: "Transiciones suaves y luminosas",
    gradient: "from-copper-400 via-gold-300 to-ivory-300",
  },
  {
    id: "correccion-tono",
    title: "Corrección de tono",
    subtitle: "Equilibrio y recuperación del color",
    gradient: "from-noir-soft via-copper-500 to-gold-400",
  },
  {
    id: "corte-movimiento",
    title: "Corte y movimiento",
    subtitle: "Forma según rostro y estilo",
    gradient: "from-gold-500 via-noir-soft to-noir",
  },
  {
    id: "color-cuidado",
    title: "Color con cuidado capilar",
    subtitle: "Resultados que respetan la fibra",
    gradient: "from-ivory-300 via-gold-300 to-copper-500",
  },
  {
    id: "transformacion-personalizada",
    title: "Transformación personalizada",
    subtitle: "Diagnóstico, técnica y resultado",
    gradient: "from-gold-300 via-copper-400 to-noir-soft",
  },
];

const extraGradients = [
  "from-gold-200 via-copper-400 to-gold-600",
  "from-noir-soft via-gold-500 to-gold-300",
  "from-copper-400 via-ivory-300 to-gold-400",
];

function buildGallery(): VideoItem[] {
  // Sin videos: cards placeholder con los títulos curados.
  if (generatedVideoEntries.length === 0) {
    return galleryTitles.map((t, i) => ({
      ...t,
      src: `/videos/elvis/transformacion-0${i + 1}.mp4`,
      orientation: "vertical" as const,
    }));
  }

  // El pool contiene lo que no se asignó a bloques destacados.
  return pool.map((entry, i) => {
    const curated = galleryTitles[i];
    return toItem(entry, {
      id: curated?.id ?? `transformacion-${i + 1}`,
      title: curated?.title ?? "Transformación personalizada",
      subtitle: curated?.subtitle ?? "Color, técnica y cuidado capilar",
      gradient: curated?.gradient ?? extraGradients[i % extraGradients.length],
    });
  });
}

export const transformationVideos: VideoItem[] = buildGallery();
