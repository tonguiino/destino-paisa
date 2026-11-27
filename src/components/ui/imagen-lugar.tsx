"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImagenLugarProps {
  src: string | null;
  alt: string;
  /**
   * Clases de aspecto del contenedor (ej. "aspect-square" o
   * "aspect-[16/9] md:aspect-[21/9]"). Con null, el contenedor llena
   * al padre (el padre debe definir altura y overflow-hidden).
   */
  aspect?: string | null;
  className?: string;
  /** Texto del tile de marca cuando no hay imagen o está rota. */
  etiqueta?: string;
  /** Cargar sin lazy (para la imagen hero, que compite por el LCP). */
  eager?: boolean;
}

/**
 * Imagen de lugar con fallback de marca: si la URL falta o falla en runtime
 * (onError), renderiza un tile "Foto próximamente" en vez de una imagen rota.
 *
 * Pendiente: cuando se instale la librería de íconos (guía §8), el tile puede
 * incorporar el ícono de imagen; hoy va solo con texto.
 */
export function ImagenLugar({
  src,
  alt,
  aspect = "aspect-[16/10]",
  className,
  etiqueta = "Foto próximamente",
  eager = false,
}: ImagenLugarProps) {
  const [rota, setRota] = useState(false);
  const mostrarTile = !src || rota;

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl bg-pine-100",
        aspect === null ? "h-full" : aspect,
        className,
      )}
    >
      {mostrarTile ? (
        <div className="flex h-full w-full items-center justify-center bg-pine-50">
          <span className="text-sm text-ink-500">{etiqueta}</span>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element -- hosts arbitrarios de api-colombia.com (blobs de platos) y assets locales
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onError={() => setRota(true)}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
}
