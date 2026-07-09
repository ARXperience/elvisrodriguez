/**
 * Subcarpeta donde vivirá la web en el hosting.
 * En Hostinger el sitio va en public_html/elvis → se sirve bajo /elvis.
 * Si algún día se mueve a la raíz del dominio, cambiar a "".
 */
const basePath = "/elvis";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Exportación estática: `npm run build` genera la carpeta `out/` con
  // HTML/CSS/JS puros, lista para subir a cualquier hosting (Hostinger,
  // cPanel, etc.) sin necesidad de servidor Node.js.
  output: "export",
  basePath,
  // El optimizador de imágenes de Next requiere servidor; en export
  // estático las imágenes se sirven tal cual (ya están comprimidas).
  images: {
    unoptimized: true,
  },
  // Expone el basePath al código cliente para prefijar imágenes y videos.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
