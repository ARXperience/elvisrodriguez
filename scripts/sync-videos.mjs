/**
 * Sincroniza y ANALIZA los videos copiados en public/videos/elvis/.
 *
 * Corre automáticamente antes de `npm run dev` y `npm run build`
 * (también manual: `npm run sync-videos`). No importa cómo se llamen
 * los archivos: los detecta, lee su resolución real del contenedor MP4
 * (sin dependencias externas) y los clasifica para que la web coloque
 * cada video donde mejor luce:
 *
 * - Orientación: 16:9 (horizontal) → bloques anchos cinematográficos;
 *   9:16 (vertical) → cards tipo reel.
 * - Contenido (por palabras del nombre):
 *   · "hero"/"portada"/"principal" → video de fondo del hero
 *   · producto/campaña/shampoo/molecular… → secciones de tienda y cuidado
 *   · salon/reception/interior… → hero (si no hay uno explícito)
 *   · el resto (estilista, modelo, cabello…) → autoridad, banner y galería
 */

import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname, extname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const videosDir = join(root, "public", "videos", "elvis");
const outFile = join(root, "data", "videos.generated.ts");

const VIDEO_EXTENSIONS = new Set([".mp4", ".webm", ".mov", ".m4v"]);
const POSTER_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

const HERO_PATTERN = /hero|portada|principal/i;
const PRODUCT_PATTERN = /product|campaign|campa|shampoo|bottle|molecular|advert|packag|cosmetic|kit/i;
const SALON_PATTERN = /salon|salón|reception|recepcion|interior|local|estudio|transition/i;

if (!existsSync(videosDir)) {
  mkdirSync(videosDir, { recursive: true });
}

/**
 * Lee ancho/alto reales de un MP4/MOV recorriendo las cajas del contenedor
 * (moov > trak > tkhd), incluyendo la matriz de rotación de videos de
 * celular. Devuelve null si el formato no se puede leer (ej. webm).
 */
function mp4Dimensions(filePath) {
  let buf;
  try {
    buf = readFileSync(filePath);
  } catch {
    return null;
  }

  let dims = null;

  function walk(start, end) {
    let off = start;
    while (off + 8 <= end && !dims) {
      let size = buf.readUInt32BE(off);
      const type = buf.toString("latin1", off + 4, off + 8);
      let header = 8;
      if (size === 1) {
        if (off + 16 > end) return;
        size = Number(buf.readBigUInt64BE(off + 8));
        header = 16;
      } else if (size === 0) {
        size = end - off;
      }
      if (size < header) return;
      const boxEnd = Math.min(off + size, end);

      if (["moov", "trak", "mdia", "minf", "stbl"].includes(type)) {
        walk(off + header, boxEnd);
      } else if (type === "tkhd" && boxEnd - off >= header + 84) {
        const version = buf.readUInt8(off + header);
        // FullBox: version(1) + flags(3); luego campos según versión.
        const base = off + header + 4 + (version === 1 ? 32 : 20);
        const matrixOff = base + 16; // reserved(8) layer(2) altGroup(2) volume(2) reserved(2)
        const widthOff = matrixOff + 36;
        if (widthOff + 8 <= boxEnd) {
          const w = buf.readUInt32BE(widthOff) / 65536;
          const h = buf.readUInt32BE(widthOff + 4) / 65536;
          // Rotación 90°/270°: matriz [0 ±1; ∓1 0] en punto fijo 16.16.
          const a = buf.readInt32BE(matrixOff);
          const b = buf.readInt32BE(matrixOff + 4);
          const rotated = a === 0 && Math.abs(b) === 65536;
          if (w > 0 && h > 0) {
            dims = rotated ? { width: h, height: w } : { width: w, height: h };
          }
        }
      }
      off = boxEnd;
    }
  }

  walk(0, buf.length);
  return dims;
}

function classifyKind(name) {
  if (PRODUCT_PATTERN.test(name)) return "product";
  if (SALON_PATTERN.test(name)) return "salon";
  return "people";
}

const allFiles = readdirSync(videosDir);
const videoFiles = allFiles
  .filter((f) => VIDEO_EXTENSIONS.has(extname(f).toLowerCase()))
  .sort((a, b) => a.localeCompare(b, "es", { numeric: true }));

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

const entries = videoFiles.map((file) => {
  const isMp4Like = [".mp4", ".mov", ".m4v"].includes(extname(file).toLowerCase());
  const dims = isMp4Like ? mp4Dimensions(join(videosDir, file)) : null;
  const orientation = dims
    ? dims.width >= dims.height
      ? "horizontal"
      : "vertical"
    : "unknown";
  const poster = findPoster(file);
  return {
    name: file,
    src: toSrc(file),
    poster: poster ? toSrc(poster) : null,
    orientation,
    width: dims?.width ?? null,
    height: dims?.height ?? null,
    kind: classifyKind(file),
    isHero: HERO_PATTERN.test(file),
  };
});

const banner = `/**
 * ARCHIVO GENERADO AUTOMÁTICAMENTE por scripts/sync-videos.mjs — no editar a mano.
 * Se regenera en cada \`npm run dev\` / \`npm run build\` según los archivos
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

export const generatedVideoEntries: GeneratedVideoEntry[] = `;

writeFileSync(outFile, banner + JSON.stringify(entries, null, 2) + ";\n");

console.log(`[sync-videos] ${entries.length} video(s) en public/videos/elvis/`);
for (const e of entries) {
  const size = e.width ? `${e.width}x${e.height}` : "resolución desconocida";
  console.log(
    `[sync-videos]  · ${e.name} → ${e.orientation} (${size}), tipo: ${e.kind}${e.isHero ? ", HERO" : ""}`,
  );
}
if (!entries.length) {
  console.log(
    "[sync-videos] Sin videos aún — la web mostrará placeholders. Copia tus archivos a public/videos/elvis/ y vuelve a correr npm run dev.",
  );
}
const movs = entries.filter((e) => [".mov", ".m4v"].includes(extname(e.name).toLowerCase()));
if (movs.length) {
  console.warn(
    `[sync-videos] Aviso: ${movs.map((e) => e.name).join(", ")} — los .mov/.m4v pueden no reproducirse en todos los navegadores; conviértelos a .mp4 (H.264) si es posible.`,
  );
}
