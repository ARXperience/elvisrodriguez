import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elvis Rodríguez Peluquería | Colorimetría y cuidado capilar en Cota",
  description:
    "Expertos en colorimetría, balayage, rubios, tratamientos capilares, cortes, spa, manicure y belleza integral en Cota, Cundinamarca.",
  openGraph: {
    title:
      "Elvis Rodríguez Peluquería | Colorimetría y cuidado capilar en Cota",
    description:
      "Expertos en colorimetría, balayage, rubios, tratamientos capilares, cortes, spa, manicure y belleza integral en Cota, Cundinamarca.",
    type: "website",
    locale: "es_CO",
    siteName: "Elvis Rodríguez Peluquería",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
