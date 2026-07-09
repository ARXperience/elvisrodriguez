"use client";

import { useState } from "react";
import type { Product } from "@/data/products";
import { waLink, waQuoteMessage } from "@/lib/whatsapp";
import { WhatsAppIcon, CloseIcon, BagIcon } from "@/components/icons";

interface QuoteCartProps {
  items: Product[];
  onRemove: (id: string) => void;
}

/**
 * Mini resumen flotante "Mi cotización": muestra los productos agregados,
 * permite quitarlos y envía la lista por WhatsApp. Sin pagos reales.
 */
export default function QuoteCart({ items, onRemove }: QuoteCartProps) {
  const [open, setOpen] = useState(false);

  if (items.length === 0) return null;

  return (
    <div className="fixed bottom-24 right-5 z-50 flex flex-col items-end gap-3 sm:right-6">
      {open && (
        <div className="w-[calc(100vw-2.5rem)] max-w-sm overflow-hidden rounded-2xl border border-noir/10 bg-ivory-50 shadow-card-hover">
          <div className="flex items-center justify-between border-b border-noir/5 bg-noir px-5 py-3.5 text-ivory-50">
            <h3 className="font-display text-base font-medium">
              Mi cotización
            </h3>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar cotización"
              className="rounded-full p-1 transition-colors hover:text-gold-300"
            >
              <CloseIcon className="h-4 w-4" />
            </button>
          </div>

          <ul className="max-h-64 overflow-y-auto px-5 py-3">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between gap-3 border-b border-noir/5 py-2.5 last:border-none"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-noir">
                    {item.name}
                  </p>
                  <p className="text-xs text-noir-muted">{item.category}</p>
                </div>
                <button
                  type="button"
                  onClick={() => onRemove(item.id)}
                  aria-label={`Quitar ${item.name} de la cotización`}
                  className="shrink-0 rounded-full p-1.5 text-noir-muted transition-colors hover:bg-ivory-200 hover:text-noir"
                >
                  <CloseIcon className="h-3.5 w-3.5" />
                </button>
              </li>
            ))}
          </ul>

          <div className="px-5 pb-5 pt-1">
            <p className="mb-3 text-xs text-noir-muted">
              Cotización sin compromiso — sin pagos en línea.
            </p>
            <a
              href={waLink(waQuoteMessage(items.map((i) => i.name)))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full !text-sm"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Enviar cotización por WhatsApp
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="btn-primary !gap-2.5 shadow-card-hover"
        aria-expanded={open}
      >
        <BagIcon className="h-4 w-4" />
        Mi cotización
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-500 text-xs font-bold text-ivory-50">
          {items.length}
        </span>
      </button>
    </div>
  );
}
