/**
 * Sincroniza los videos copiados en public/videos/elvis/ con la web.
 *
 * Corre automáticamente antes de `npm run dev` y `npm run build`
 * (también manual: `npm run sync-videos`). No importa cómo se llamen
 * los archivos: los detecta y genera data/videos.generated.ts, que la
 * web usa para conectar cada video a las secciones.
 *
 * Reglas:
 * - Un archivo cuyo nombre contenga "hero" (o "portada"/"principal")
 *   se usa como video de fondo del hero.
 * - El resto se asigna, en orden alfabético, a las cards de
 *   "Transformaciones reales".
 * - Si no hay videos, la web muestra sus placeholders premium.
 */

import { readdirSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname, extname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const videosDir = join(root, "public", "videos", "elvis");
const outFile = join(root, "data", "videos.generated.ts");

const VIDEO_EXTENSIONS = new Set([".mp4", ".webm", ".mov", ".m4v"]);
const HERO_PATTERN = /hero|portada|principal/i;
const POSTER_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

if (!existsSync(videosDir)) {
  mkdirSync(videosDir, { recursive: true });
}

const allFiles = readdirSync(videosDir);
const videoFiles = allFiles
  .filter((f) => VIDEO_EXTENSIONS.has(extname(f).toLowerCase()))
  .sort((a, b) => a.localeCompare(b, "es", { numeric: true }));

const heroFile = videoFiles.find((f) => HERO_PATTERN.test(f)) ?? null;
const galleryFiles = videoFiles.filter((f) => f !== heroFile);

/** Busca una imagen con el mismo nombre base para usar como poster. */
function findPoster(videoFile) {
  const base = videoFile.slice(0, -extname(videoFile).length);
  for (const ext of POSTER_EXTENSIONS) {
    const candidate = allFiles.find(
      (f) => f.toLowerCase() === `${base.toLowerCase()}${ext}`,
    );
    if (candidate) return candidate;
  }
  return null;
}

const toSrc = (f) => `/videos/elvis/${encodeURIComponent(f)}`;

const generated = {
  hero: heroFile
    ? { src: toSrc(heroFile), poster: findPoster(heroFile) ? toSrc(findPoster(heroFile)) : null }
    : null,
  gallery: galleryFiles.map((f) => ({
    src: toSrc(f),
    poster: findPoster(f) ? toSrc(findPoster(f)) : null,
  })),
};

const banner = `/**
 * ARCHIVO GENERADO AUTOMÁTICAMENTE por scripts/sync-videos.mjs — no editar a mano.
 * Se regenera en cada \`npm run dev\` / \`npm run build\` según los archivos
 * presentes en public/videos/elvis/.
 */

export interface GeneratedVideoSource {
  src: string;
  poster: string | null;
}

export interface GeneratedVideos {
  hero: GeneratedVideoSource | null;
  gallery: GeneratedVideoSource[];
}

export const generatedVideos: GeneratedVideos = `;

writeFileSync(outFile, banner + JSON.stringify(generated, null, 2) + ";\n");

console.log(`[sync-videos] ${videoFiles.length} video(s) en public/videos/elvis/`);
if (heroFile) console.log(`[sync-videos] hero: ${heroFile}`);
if (galleryFiles.length) {
  console.log(`[sync-videos] galería: ${galleryFiles.join(", ")}`);
}
if (!videoFiles.length) {
  console.log(
    "[sync-videos] Sin videos aún — la web mostrará placeholders. Copia tus archivos a public/videos/elvis/ y vuelve a correr npm run dev.",
  );
}
const movs = videoFiles.filter((f) => [".mov", ".m4v"].includes(extname(f).toLowerCase()));
if (movs.length) {
  console.warn(
    `[sync-videos] Aviso: ${movs.join(", ")} — los .mov/.m4v pueden no reproducirse en todos los navegadores; conviértelos a .mp4 (H.264) si es posible.`,
  );
}
