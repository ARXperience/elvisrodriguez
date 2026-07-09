# Elvis Rodríguez Peluquería — Landing premium

Web de conversión para **Elvis Rodríguez Peluquería**, centro de estética
experto en colorimetría, conservación y cuidado capilar en Cota, Cundinamarca.

Incluye: hero con video, servicios, bloque de diagnóstico de colorimetría,
galería de transformaciones (reels 9:16), tienda simulada de productos con
cotización por WhatsApp, agenda inteligente, testimonios (placeholders),
ubicación, blog de tips y CTAs de WhatsApp en toda la página.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router) + TypeScript
- Tailwind CSS 3
- Sin librerías pesadas adicionales

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Otros comandos:

```bash
npm run build      # build de producción
npm run start      # servir el build
npm run typecheck  # verificación de TypeScript
```

## Integrar los videos de Elvis

Los videos **no están incluidos en el repositorio** (pesan demasiado para git).
Cópialos desde tu carpeta local — **con cualquier nombre, sin renombrar**:

```powershell
Copy-Item "C:\Users\LENOVO\Downloads\VIDEOS-ELVIS\*" -Destination "public\videos\elvis\" -Recurse
npm run dev
```

Al iniciar, `scripts/sync-videos.mjs` detecta los videos automáticamente:
el que contenga `hero` en el nombre va de fondo del hero y el resto a la
galería "Transformaciones reales". Detalles y compresión recomendada en
[`public/videos/elvis/README.md`](public/videos/elvis/README.md).
Mientras los videos no existan, la web muestra placeholders visuales premium
y no se rompe.

## Estructura

```
app/
  layout.tsx            # Metadata SEO + Open Graph + fuentes
  page.tsx              # Composición de la landing
  globals.css           # Tailwind + estilos base premium
components/
  TopBar, Header, Hero, AuthoritySection, ServicesSection, ServiceCard,
  ColorDiagnosisSection, VideoGallery, HomeCareSection, ProductStore,
  ProductCard, QuoteCart, SmartAgendaSection, TestimonialsSection,
  LocationSection, BlogSection, FinalCTA, Footer, WhatsAppFloat,
  Reveal (animaciones scroll), SmartVideo (video con fallback), icons
data/
  services.ts           # Servicios del salón
  products.ts           # Productos simulados de la tienda
  videos.ts             # Manifest de videos (rutas, títulos, orientación)
lib/
  whatsapp.ts           # Construcción de enlaces wa.me con mensajes
```

## Notas importantes

- **La tienda es una simulación**: no integra pagos reales. Los botones
  "Consultar por WhatsApp" y "Enviar cotización por WhatsApp" abren
  `https://wa.me/573053007872` con el mensaje prearmado.
- **Testimonios**: son placeholders honestos a la espera de testimonios
  reales del cliente. No hay opiniones inventadas.
- **Mapa**: el botón "Cómo llegar" abre una búsqueda de Google Maps con la
  dirección. Cuando el cliente comparta el enlace exacto del negocio,
  actualizar `MAPS_DIRECTIONS_URL` / `MAPS_EMBED_URL` en
  `components/LocationSection.tsx`.
- **Marcas**: los productos usan nombres genéricos; no se usa contenido,
  imágenes ni marca de Kevin Murphy ni de terceros.

## Personalización rápida

- WhatsApp y mensajes: `lib/whatsapp.ts`
- Colores de marca (dorados/cobrizos, marfil, negro): `tailwind.config.ts`
- Productos de la tienda: `data/products.ts`
- Servicios: `data/services.ts`
- Videos y títulos de transformaciones: `data/videos.ts`
