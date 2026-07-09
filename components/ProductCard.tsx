"use client";

import type { Product } from "@/data/products";
import { waLink, waProductMessage } from "@/lib/whatsapp";
import { WhatsAppIcon, CheckIcon, BagIcon } from "@/components/icons";

interface ProductCardProps {
  product: Product;
  inQuote: boolean;
  onToggleQuote: (product: Product) => void;
}

export default function ProductCard({
  product,
  inQuote,
  onToggleQuote,
}: ProductCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-noir/5 bg-ivory-50 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      {/* Imagen del producto o placeholder visual premium */}
      <div className="relative aspect-square overflow-hidden">
        <div
          className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${product.gradient} transition-transform duration-500 group-hover:scale-105`}
          aria-hidden="true"
        >
          <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_30%_25%,white,transparent_50%)]" />
          {/* Silueta minimalista de envase */}
          <div className="relative flex flex-col items-center">
            <div className="h-4 w-7 rounded-t-md bg-ivory-50/70" />
            <div className="h-24 w-16 rounded-xl bg-ivory-50/50 shadow-inner backdrop-blur-[1px]" />
          </div>
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-noir/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-gold-200 backdrop-blur-sm">
          {product.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold-600">
          {product.category}
        </span>
        <h3 className="mt-1.5 font-display text-lg font-medium leading-snug text-noir">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-noir-muted">
          {product.description}
        </p>
        <p className="mt-3 text-sm font-semibold text-noir">
          {product.priceLabel}
        </p>

        <div className="mt-4 flex flex-col gap-2">
          <a
            href={waLink(waProductMessage(product.name))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp !py-2.5 !text-xs"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            Consultar por WhatsApp
          </a>
          <button
            type="button"
            onClick={() => onToggleQuote(product)}
            aria-pressed={inQuote}
            className={`btn !py-2.5 !text-xs ${
              inQuote
                ? "bg-gold-100 text-gold-700 hover:bg-gold-200"
                : "border border-noir/20 text-noir hover:border-gold-500 hover:text-gold-600"
            }`}
          >
            {inQuote ? (
              <>
                <CheckIcon className="h-3.5 w-3.5" />
                En cotización — quitar
              </>
            ) : (
              <>
                <BagIcon className="h-3.5 w-3.5" />
                Agregar a cotización
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
