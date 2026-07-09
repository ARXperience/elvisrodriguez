/**
 * Prefijo de subcarpeta del hosting (ver basePath en next.config.mjs).
 * Next.js prefija automáticamente sus propios chunks y rutas, pero las
 * referencias manuales a /images y /videos deben pasar por withBase().
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Antepone el basePath a una ruta pública (ej. /images/foto.jpg). */
export function withBase(path: string): string {
  if (!path.startsWith("/") || path.startsWith(`${BASE_PATH}/`)) return path;
  return `${BASE_PATH}${path}`;
}
