/**
 * Manifest de videos de Elvis Rodríguez.
 *
 * Los archivos de video viven en /public/videos/elvis/ y NO se versionan en git
 * (ver .gitignore). Para integrarlos:
 *
 *   1. Copia los videos de C:\Users\LENOVO\Downloads\VIDEOS-ELVIS
 *      a la carpeta public/videos/elvis/ del proyecto.
 *   2. Renómbralos según los `src` de este manifest (o actualiza los `src`
 *      con los nombres reales de tus archivos).
 *   3. Opcional: agrega un poster .jpg con el mismo nombre del video.
 *
 * Si un archivo no existe, la web muestra automáticamente un placeholder
 * visual premium en su lugar — la página nunca se rompe por un video faltante.
 */

export interface VideoItem {
  id: string;
  /** Ruta pública del archivo, ej: /videos/elvis/transformacion-01.mp4 */
  src: string;
  /** Poster opcional (imagen de portada) */
  poster?: string;
  title: string;
  subtitle?: string;
  orientation: "vertical" | "horizontal";
  /** Gradiente del placeholder si el archivo no está disponible */
  gradient: string;
}

/** Video destacado del hero (horizontal, se usa como fondo si existe). */
export const heroVideo: VideoItem = {
  id: "hero",
  src: "/videos/elvis/hero.mp4",
  poster: "/videos/elvis/hero.jpg",
  title: "Elvis Rodríguez trabajando color",
  orientation: "horizontal",
  gradient: "from-noir via-noir-soft to-gold-700",
};

/** Reels verticales para la galería "Transformaciones reales". */
export const transformationVideos: VideoItem[] = [
  {
    id: "rubio-luminoso",
    src: "/videos/elvis/transformacion-01.mp4",
    title: "Rubio luminoso",
    subtitle: "Diseño de rubio con cuidado capilar",
    orientation: "vertical",
    gradient: "from-gold-200 via-gold-400 to-copper-500",
  },
  {
    id: "balayage-natural",
    src: "/videos/elvis/transformacion-02.mp4",
    title: "Balayage natural",
    subtitle: "Transiciones suaves y luminosas",
    orientation: "vertical",
    gradient: "from-copper-400 via-gold-300 to-ivory-300",
  },
  {
    id: "correccion-tono",
    src: "/videos/elvis/transformacion-03.mp4",
    title: "Corrección de tono",
    subtitle: "Equilibrio y recuperación del color",
    orientation: "vertical",
    gradient: "from-noir-soft via-copper-500 to-gold-400",
  },
  {
    id: "corte-movimiento",
    src: "/videos/elvis/transformacion-04.mp4",
    title: "Corte y movimiento",
    subtitle: "Forma según rostro y estilo",
    orientation: "vertical",
    gradient: "from-gold-500 via-noir-soft to-noir",
  },
  {
    id: "color-cuidado",
    src: "/videos/elvis/transformacion-05.mp4",
    title: "Color con cuidado capilar",
    subtitle: "Resultados que respetan la fibra",
    orientation: "vertical",
    gradient: "from-ivory-300 via-gold-300 to-copper-500",
  },
  {
    id: "transformacion-personalizada",
    src: "/videos/elvis/transformacion-06.mp4",
    title: "Transformación personalizada",
    subtitle: "Diagnóstico, técnica y resultado",
    orientation: "vertical",
    gradient: "from-gold-300 via-copper-400 to-noir-soft",
  },
];
