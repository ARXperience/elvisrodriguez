export interface Service {
  id: string;
  name: string;
  description: string;
  /** Ruta de video opcional en /public (ej. /videos/elvis/balayage.mp4) */
  video?: string;
  /** Clases de gradiente para el placeholder visual premium */
  gradient: string;
  /** Emoji/símbolo decorativo del placeholder */
  symbol: string;
}

export const services: Service[] = [
  {
    id: "balayage",
    name: "Balayage",
    description:
      "Técnica de iluminación personalizada para lograr transiciones suaves, luminosas y naturales.",
    gradient: "from-gold-200 via-copper-400 to-gold-600",
    symbol: "✦",
  },
  {
    id: "rubios",
    name: "Rubios",
    description:
      "Diseño de rubios con diagnóstico previo, cuidado capilar y mantenimiento profesional.",
    gradient: "from-gold-100 via-gold-300 to-gold-500",
    symbol: "◈",
  },
  {
    id: "correccion-color",
    name: "Corrección de color",
    description:
      "Procesos técnicos para recuperar, equilibrar o transformar el tono del cabello de forma responsable.",
    gradient: "from-copper-400 via-gold-500 to-noir-soft",
    symbol: "◐",
  },
  {
    id: "tratamientos",
    name: "Tratamientos capilares",
    description:
      "Rutinas de reparación, hidratación y conservación para mantener el cabello saludable.",
    gradient: "from-ivory-300 via-gold-200 to-copper-400",
    symbol: "❋",
  },
  {
    id: "cortes",
    name: "Cortes de cabello",
    description:
      "Cortes personalizados según rostro, estilo y movimiento natural del cabello.",
    gradient: "from-noir-soft via-noir-muted to-gold-400",
    symbol: "✂",
  },
  {
    id: "manicure",
    name: "Manicure",
    description:
      "Cuidado estético de manos con acabados limpios, elegantes y modernos.",
    gradient: "from-ivory-200 via-copper-400 to-gold-300",
    symbol: "❖",
  },
  {
    id: "spa",
    name: "Spa y estética",
    description:
      "Servicios complementarios de bienestar y belleza integral.",
    gradient: "from-gold-100 via-ivory-300 to-copper-400",
    symbol: "✧",
  },
  {
    id: "productos",
    name: "Productos profesionales",
    description:
      "Recomendaciones para cuidar el color, proteger la fibra capilar y mantener resultados en casa.",
    gradient: "from-gold-300 via-gold-500 to-noir-soft",
    symbol: "◆",
  },
];
