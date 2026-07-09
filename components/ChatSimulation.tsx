"use client";

import { useEffect, useRef, useState } from "react";

const chatMessages = [
  {
    from: "cliente",
    text: "Hola, quiero un balayage.",
  },
  {
    from: "asistente",
    text: "Claro, para orientarte mejor, ¿tu cabello está natural o tiene procesos anteriores?",
  },
  {
    from: "cliente",
    text: "Está tinturado.",
  },
  {
    from: "asistente",
    text: "Perfecto. Por favor envíanos una foto actual con luz natural y una referencia del resultado que deseas. Luego podemos revisar disponibilidad para tu valoración.",
  },
] as const;

/**
 * Simulación de chat animada: al entrar en pantalla, los mensajes
 * aparecen uno a uno con indicador de "escribiendo…", como una
 * conversación real de WhatsApp. Con prefers-reduced-motion se
 * muestra la conversación completa de inmediato.
 */
export default function ChatSimulation() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typingFrom, setTypingFrom] = useState<"cliente" | "asistente" | null>(
    null,
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleCount(chatMessages.length);
      return;
    }

    const schedule = (fn: () => void, ms: number) => {
      timers.current.push(setTimeout(fn, ms));
    };

    const playFrom = (index: number) => {
      if (index >= chatMessages.length) {
        setTypingFrom(null);
        return;
      }
      setTypingFrom(chatMessages[index].from);
      // El "asistente" tarda un poco más en escribir que el cliente.
      const typingTime = chatMessages[index].from === "asistente" ? 1300 : 800;
      schedule(() => {
        setTypingFrom(null);
        setVisibleCount(index + 1);
        schedule(() => playFrom(index + 1), 700);
      }, typingTime);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          observer.disconnect();
          schedule(() => playFrom(0), 500);
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      timers.current.forEach(clearTimeout);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="mx-auto max-w-md overflow-hidden rounded-3xl border border-noir/10 bg-ivory-200 shadow-card"
    >
      <div className="flex items-center gap-3 bg-noir px-5 py-4 text-ivory-50">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500 font-display text-sm font-semibold">
          ER
        </div>
        <div>
          <p className="text-sm font-semibold">Elvis Rodríguez Peluquería</p>
          <p className="text-xs text-gold-300">
            Responde rápido por WhatsApp
          </p>
        </div>
      </div>

      {/* Altura fija para que la card no salte mientras aparecen mensajes */}
      <div className="flex min-h-[340px] flex-col justify-end gap-3 px-4 py-6">
        {chatMessages.slice(0, visibleCount).map((msg, i) => (
          <div
            key={i}
            className={`animate-chat-pop max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
              msg.from === "cliente"
                ? "self-end rounded-br-md bg-[#d7f5e2] text-noir"
                : "self-start rounded-bl-md bg-ivory-50 text-noir"
            }`}
          >
            {msg.text}
          </div>
        ))}

        {typingFrom && (
          <div
            className={`animate-chat-pop flex items-center gap-1.5 rounded-2xl px-4 py-3 shadow-sm ${
              typingFrom === "cliente"
                ? "self-end rounded-br-md bg-[#d7f5e2]"
                : "self-start rounded-bl-md bg-ivory-50"
            }`}
            aria-label="Escribiendo…"
          >
            <span className="typing-dot h-2 w-2 rounded-full bg-noir/40" />
            <span className="typing-dot h-2 w-2 rounded-full bg-noir/40" />
            <span className="typing-dot h-2 w-2 rounded-full bg-noir/40" />
          </div>
        )}
      </div>

      <p className="border-t border-noir/5 bg-ivory-100 px-5 py-3 text-center text-[0.65rem] uppercase tracking-[0.18em] text-noir-muted">
        Simulación de conversación orientativa
      </p>
    </div>
  );
}
