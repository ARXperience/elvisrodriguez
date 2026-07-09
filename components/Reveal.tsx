"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealDirection = "up" | "left" | "right" | "zoom";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Retardo en ms para escalonar animaciones dentro de una misma sección */
  delay?: number;
  /** Dirección de entrada: vertical (up), lateral (left/right) o zoom */
  direction?: RevealDirection;
}

const directionClass: Record<RevealDirection, string> = {
  up: "",
  left: "reveal-left",
  right: "reveal-right",
  zoom: "reveal-zoom",
};

/** Envuelve contenido y lo revela con una animación suave al entrar en viewport. */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add("is-visible");
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${directionClass[direction]} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
