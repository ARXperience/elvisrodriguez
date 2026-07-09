const words = [
  "Colorimetría",
  "Balayage",
  "Rubios",
  "Cuidado capilar",
  "Conservación",
  "Corrección de color",
  "Belleza integral",
  "Cota · Cundinamarca",
];

interface MarqueeProps {
  /** Variante clara (marfil) u oscura (negro con dorado) */
  variant?: "dark" | "light";
}

/**
 * Cinta editorial de desplazamiento horizontal infinito con las
 * especialidades del salón. El contenido se duplica para lograr un
 * loop continuo; la copia extra queda oculta para lectores de pantalla.
 */
export default function Marquee({ variant = "dark" }: MarqueeProps) {
  const strip = (ariaHidden: boolean) => (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={ariaHidden || undefined}
    >
      {words.map((word) => (
        <span key={word} className="flex items-center">
          <span
            className={`whitespace-nowrap px-6 font-display text-2xl italic sm:text-3xl ${
              variant === "dark" ? "text-ivory-100/90" : "text-noir/85"
            }`}
          >
            {word}
          </span>
          <span
            className={variant === "dark" ? "text-gold-400" : "text-gold-500"}
            aria-hidden="true"
          >
            ✦
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`overflow-hidden border-y py-5 ${
        variant === "dark"
          ? "border-gold-500/20 bg-noir"
          : "border-noir/10 bg-ivory-200"
      }`}
    >
      <div className="marquee-track">
        {strip(false)}
        {strip(true)}
      </div>
    </div>
  );
}
