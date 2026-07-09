"use client";

import { useEffect, useRef, useState } from "react";

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
}

/**
 * Video HTML5 con carga diferida y degradación elegante: si el archivo
 * no está disponible (aún no se copian los videos a /public/videos/elvis),
 * muestra un placeholder visual premium en lugar de romperse.
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
      src={src}
      poster={poster}
      preload="metadata"
      playsInline
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      controls={controls}
      onError={() => setFailed(true)}
    >
      Tu navegador no soporta video HTML5.
    </video>
  );
}
