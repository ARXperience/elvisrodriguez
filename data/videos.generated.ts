/**
 * ARCHIVO GENERADO AUTOMÁTICAMENTE por scripts/sync-videos.mjs — no editar a mano.
 * Se regenera en cada `npm run dev` / `npm run build` según los archivos
 * presentes en public/videos/elvis/ (incluye análisis de resolución real).
 */

export type VideoOrientation = "horizontal" | "vertical" | "unknown";
export type VideoKind = "product" | "salon" | "people";

export interface GeneratedVideoEntry {
  name: string;
  src: string;
  poster: string | null;
  orientation: VideoOrientation;
  width: number | null;
  height: number | null;
  kind: VideoKind;
  isHero: boolean;
}

export const generatedVideoEntries: GeneratedVideoEntry[] = [];
