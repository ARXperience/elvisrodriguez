/**
 * Videos de Elvis Rodríguez.
 *
 * Integración automática: copia tus videos (con cualquier nombre) a
 * public/videos/elvis/ y corre `npm run dev` o `npm run sync-videos`.
 * El script scripts/sync-videos.mjs los detecta y los conecta aquí:
 *
 * - Un archivo con "hero" en el nombre → video de fondo del hero.
 * - Los demás → cards de "Transformaciones reales", en orden alfabético.
 * - Una imagen con el mismo nombre que un video se usa como poster.
 *
 * Si no hay videos, la web muestra placeholders visuales premium:
 * la página nunca se rompe por un video faltante.
 */

import { generatedVideos } from "./videos.generated";

export interface VideoItem {
  id: string;
  /** Ruta pública del archivo, ej: /videos/elvis/mi-video.mp4 */
  src: string;
  /** Poster opcional (imagen de portada) */
  poster?: string;
  title: string;
  subtitle?: string;
  orientation: "vertical" | "horizontal";
  /** Gradiente del placeholder si el archivo no está disponible */
  gradient: string;
}

/** Video destacado del hero (se usa como fondo si existe). */
export const heroVideo: VideoItem = {
  id: "hero",
  src: generatedVideos.hero?.src ?? "/videos/elvis/hero.mp4",
  poster: generatedVideos.hero?.poster ?? undefined,
  title: "Elvis Rodríguez trabajando color",
  orientation: "horizontal",
  gradient: "from-noir via-noir-soft to-gold-700",
};

/** Títulos curados para las cards de la galería, en orden de asignación. */
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

/** Gradientes rotativos para videos extra más allá de los títulos curados. */
const extraGradients = [
  "from-gold-200 via-copper-400 to-gold-600",
  "from-noir-soft via-gold-500 to-gold-300",
  "from-copper-400 via-ivory-300 to-gold-400",
];

function buildGallery(): VideoItem[] {
  const files = generatedVideos.gallery;

  // Sin videos detectados: cards placeholder con los títulos curados.
  if (files.length === 0) {
    return galleryTitles.map((t, i) => ({
      ...t,
      src: `/videos/elvis/transformacion-0${i + 1}.mp4`,
      orientation: "vertical" as const,
    }));
  }

  // Con videos: cada archivo real recibe un título curado (o genérico si
  // hay más videos que títulos).
  return files.map((file, i) => {
    const curated = galleryTitles[i];
    return {
      id: curated?.id ?? `transformacion-${i + 1}`,
      src: file.src,
      poster: file.poster ?? undefined,
      title: curated?.title ?? "Transformación personalizada",
      subtitle: curated?.subtitle ?? "Color, técnica y cuidado capilar",
      orientation: "vertical" as const,
      gradient:
        curated?.gradient ?? extraGradients[i % extraGradients.length],
    };
  });
}

/** Reels para la galería "Transformaciones reales". */
export const transformationVideos: VideoItem[] = buildGallery();
