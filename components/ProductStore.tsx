"use client";

import { useMemo, useState } from "react";
import {
  productCategories,
  products,
  type Product,
  type ProductCategory,
} from "@/data/products";
import { waLink, WA_MESSAGES } from "@/lib/whatsapp";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import QuoteCart from "@/components/QuoteCart";
import { WhatsAppIcon } from "@/components/icons";

type Filter = "Todos" | ProductCategory;

/**
 * Tienda simulada de cuidado profesional. Demo visual y funcional:
 * filtros por categoría + cotización por WhatsApp. No integra pagos reales.
 */
export default function ProductStore() {
  const [activeCategory, setActiveCategory] = useState<Filter>("Todos");
  const [quote, setQuote] = useState<Product[]>([]);

  const filtered = useMemo(
    () =>
      activeCategory === "Todos"
        ? products
        : products.filter((p) => p.category === activeCategory),
    [activeCategory],
  );

  const toggleQuote = (product: Product) => {
    setQuote((prev) =>
      prev.some((p) => p.id === product.id)
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product],
    );
  };

  const removeFromQuote = (id: string) => {
    setQuote((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <section id="tienda" className="scroll-mt-24 bg-ivory-100 py-20 sm:py-28">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Tienda · Demo</span>
          <h2 className="section-title">Tienda de cuidado profesional</h2>
          <p className="section-subtitle mx-auto">
            Productos recomendados para conservar el color, proteger el cabello
            y mantener tus resultados en casa.
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-noir-muted">
            Catálogo demostrativo — cotiza por WhatsApp, sin pagos en línea
          </p>
        </Reveal>

        {/* Filtro por categorías */}
        <Reveal className="mt-10">
          <div className="flex flex-wrap justify-center gap-2">
            {(["Todos", ...productCategories] as Filter[]).map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-noir text-ivory-50 shadow-card"
                    : "border border-noir/15 bg-ivory-50 text-noir-muted hover:border-gold-500 hover:text-gold-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid de productos */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product, i) => (
            <Reveal key={product.id} delay={(i % 4) * 90}>
              <ProductCard
                product={product}
                inQuote={quote.some((p) => p.id === product.id)}
                onToggleQuote={toggleQuote}
              />
            </Reveal>
          ))}
        </div>

        {/* Bloque de asesoría */}
        <Reveal className="mt-14">
          <div className="rounded-3xl bg-noir px-7 py-12 text-center text-ivory-50 sm:px-12">
            <h3 className="font-display text-2xl font-medium sm:text-3xl">
              ¿No sabes qué producto elegir?
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ivory-100/75 sm:text-base">
              Escríbenos por WhatsApp, envía una foto de tu cabello y te
              ayudamos a elegir una rutina de cuidado personalizada.
            </p>
            <a
              href={waLink(WA_MESSAGES.recomendacionTienda)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-7"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Pedir recomendación por WhatsApp
            </a>
          </div>
        </Reveal>
      </div>

      <QuoteCart items={quote} onRemove={removeFromQuote} />
    </section>
  );
}
