/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Exportación estática: `npm run build` genera la carpeta `out/` con
  // HTML/CSS/JS puros, lista para subir a cualquier hosting (Hostinger,
  // cPanel, etc.) sin necesidad de servidor Node.js.
  output: "export",
  // El optimizador de imágenes de Next requiere servidor; en export
  // estático las imágenes se sirven tal cual (ya están comprimidas).
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
