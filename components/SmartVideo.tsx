"use client";

import { useEffect, useRef, useState } from "react";
import { withBase } from "@/lib/paths";

interface SmartVideoProps {
  src: string;
  poster?: string;
  className?: string;
  /** Gradiente Tailwind del placeholder si el archivo no existe */
  fallbackGradient: string;
  /** Contenido superpuesto en el placeholder (título, símbolo, etc.) */
  fallbackContent?: React.ReactNode;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  /**
   * Modo ambiente: video decorativo en loop silencioso que solo se
   * reproduce mientras está visible en pantalla (ahorra batería/datos
   * cuando hay varios videos en la página).
   */
  ambient?: boolean;
}

/**
 * Video HTML5 con carga diferida y degradación elegante: si el archivo
 * no está disponible, muestra un placeholder visual premium en lugar
 * de romperse.
 */
export default function SmartVideo({
  src,
  poster,
  className = "",
  fallbackGradient,
  fallbackContent,
  autoPlay = false,
  loop = true,
  muted = true,
  controls = false,
  ambient = false,
}: SmartVideoProps) {
  const [failed, setFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // El video empieza a cargar antes de la hidratación de React, así que un
  // error temprano (archivo inexistente) puede dispararse antes de que el
  // onError esté conectado. Al montar, revisamos si ya falló y seguimos
  // escuchando por si falla después.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const markFailed = () => setFailed(true);
    if (video.error || video.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) {
      markFailed();
      return;
    }
    video.addEventListener("error", markFailed);
    return () => video.removeEventListener("error", markFailed);
  }, []);

  // Modo ambiente: reproducir solo mientras el video está en viewport.
  useEffect(() => {
    if (!ambient || failed) return;
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [ambient, failed]);

  if (failed) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${fallbackGradient} ${className}`}
        aria-hidden="true"
      >
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_30%_20%,white,transparent_55%)]" />
        {fallbackContent}
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      className={`object-cover ${className}`}
      src={withBase(src)}
      poster={poster ? withBase(poster) : undefined}
      preload="metadata"
      playsInline
      autoPlay={autoPlay}
      loop={ambient ? true : loop}
      muted={ambient ? true : muted}
      controls={ambient ? false : controls}
      onError={() => setFailed(true)}
    >
      Tu navegador no soporta video HTML5.
    </video>
  );
}
