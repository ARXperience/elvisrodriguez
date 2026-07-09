export type ProductCategory =
  | "Cuidado del color"
  | "Matizadores"
  | "Hidratación"
  | "Reparación capilar"
  | "Protección térmica"
  | "Control de frizz"
  | "Styling"
  | "Manicure y belleza";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  tag: string;
  priceLabel: string;
  /** Ruta de imagen opcional; si no existe se usa placeholder premium */
  image?: string;
  /** Gradiente del placeholder visual */
  gradient: string;
}

export const productCategories: ProductCategory[] = [
  "Cuidado del color",
  "Matizadores",
  "Hidratación",
  "Reparación capilar",
  "Protección térmica",
  "Control de frizz",
  "Styling",
  "Manicure y belleza",
];

export const products: Product[] = [
  {
    id: "shampoo-matizador",
    image: "/images/producto-shampoo-matizador.jpg",
    name: "Shampoo matizador para rubios",
    category: "Matizadores",
    description: "Ayuda a mantener tonos rubios fríos y luminosos.",
    tag: "Para rubios",
    priceLabel: "Consultar precio",
    gradient: "from-gold-100 via-ivory-200 to-gold-300",
  },
  {
    id: "mascarilla-reparadora",
    image: "/images/producto-mascarilla.jpg",
    name: "Mascarilla reparadora intensiva",
    category: "Reparación capilar",
    description: "Tratamiento de nutrición profunda para cabellos procesados.",
    tag: "Reparación",
    priceLabel: "Consultar precio",
    gradient: "from-copper-400 via-gold-300 to-ivory-200",
  },
  {
    id: "protector-termico",
    image: "/images/producto-protector-termico.jpg",
    name: "Protector térmico profesional",
    category: "Protección térmica",
    description: "Ideal antes de blower, plancha o herramientas de calor.",
    tag: "Recomendado",
    priceLabel: "Consultar precio",
    gradient: "from-gold-400 via-copper-400 to-noir-soft",
  },
  {
    id: "aceite-brillo",
    image: "/images/producto-aceite-brillo.jpg",
    name: "Aceite capilar de brillo",
    category: "Styling",
    description: "Aporta brillo, suavidad y control de frizz.",
    tag: "Brillo",
    priceLabel: "Consultar precio",
    gradient: "from-gold-200 via-gold-400 to-copper-500",
  },
  {
    id: "tratamiento-post-color",
    image: "/images/producto-post-color.jpg",
    name: "Tratamiento post color",
    category: "Cuidado del color",
    description:
      "Recomendado para conservar resultados después de balayage o tintura.",
    tag: "Post color",
    priceLabel: "Consultar precio",
    gradient: "from-ivory-200 via-gold-200 to-copper-400",
  },
  {
    id: "kit-rubios",
    image: "/images/producto-kit-rubios.jpg",
    name: "Kit mantenimiento de rubios",
    category: "Cuidado del color",
    description: "Rutina sugerida para mantener el rubio entre citas.",
    tag: "Post balayage",
    priceLabel: "Consultar precio",
    gradient: "from-gold-100 via-gold-300 to-gold-500",
  },
  {
    id: "crema-hidratante",
    image: "/images/producto-crema-hidratante.jpg",
    name: "Crema hidratante capilar",
    category: "Hidratación",
    description: "Para cabellos secos, opacos o sensibilizados.",
    tag: "Hidratación",
    priceLabel: "Consultar precio",
    gradient: "from-ivory-300 via-gold-200 to-gold-400",
  },
  {
    id: "serum-antifrizz",
    image: "/images/producto-serum-antifrizz.jpg",
    name: "Serum antifrizz",
    category: "Control de frizz",
    description: "Ayuda a controlar el volumen y mejorar el acabado.",
    tag: "Antifrizz",
    priceLabel: "Consultar precio",
    gradient: "from-noir-soft via-gold-500 to-gold-300",
  },
  {
    id: "esmalte-profesional",
    image: "/images/producto-esmalte.jpg",
    name: "Esmalte profesional",
    category: "Manicure y belleza",
    description: "Producto de belleza para acabado de manos.",
    tag: "Belleza",
    priceLabel: "Consultar precio",
    gradient: "from-copper-400 via-ivory-200 to-gold-300",
  },
  {
    id: "kit-rutina-personalizada",
    image: "/images/producto-kit-personalizado.jpg",
    name: "Kit de rutina capilar personalizada",
    category: "Cuidado del color",
    description:
      "Selección de productos sugerida según diagnóstico capilar.",
    tag: "Personalizado",
    priceLabel: "Consultar precio",
    gradient: "from-gold-300 via-copper-400 to-noir-soft",
  },
];
