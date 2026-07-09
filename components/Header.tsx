"use client";

import { useState } from "react";
import { waLink, WA_MESSAGES } from "@/lib/whatsapp";
import { CloseIcon, MenuIcon } from "@/components/icons";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#colorimetria", label: "Colorimetría" },
  { href: "#transformaciones", label: "Transformaciones" },
  { href: "#tienda", label: "Tienda" },
  { href: "#agenda", label: "Agenda" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-noir/5 bg-ivory-50/90 backdrop-blur-md">
      <div className="container-content flex items-center justify-between py-3.5">
        <a href="#" className="group leading-none">
          <span className="block font-display text-xl font-semibold tracking-[0.12em] text-noir transition-colors group-hover:text-gold-600 sm:text-2xl">
            ELVIS RODRÍGUEZ
          </span>
          <span className="mt-1 block text-[0.65rem] uppercase tracking-[0.35em] text-gold-600">
            Asesor de imagen
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-noir-muted transition-colors hover:text-gold-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={waLink(WA_MESSAGES.agendarValoracion)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden !py-2.5 sm:inline-flex"
          >
            Agendar
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 text-noir transition-colors hover:text-gold-600 lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-noir/5 bg-ivory-50 lg:hidden"
          aria-label="Navegación móvil"
        >
          <div className="container-content flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-noir transition-colors hover:bg-gold-50 hover:text-gold-600"
              >
                {link.label}
              </a>
            ))}
            <a
              href={waLink(WA_MESSAGES.agendarValoracion)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2 w-full"
            >
              Agendar
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
