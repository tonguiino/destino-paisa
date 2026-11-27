"use client";

import {
  ImageViewer,
  ImageViewerCaption,
  ImageViewerClose,
  ImageViewerContent,
  ImageViewerCounter,
  ImageViewerGallery,
  ImageViewerNext,
  ImageViewerPrevious,
  ImageViewerThumbnail,
} from "@/components/motion/morphing-lightbox";
import { ImagenLugar } from "@/components/ui/imagen-lugar";
import { aLightboxImages, completarSlots } from "@/lib/imagenes-lightbox";
import { LABELS_VISOR } from "@/lib/labels-es";
import type { ImagenMosaico } from "@/types/colombia";

interface GaleriaLightboxProps {
  /** Slots de la galería; los de src null renderizan el placeholder. */
  slots: ImagenMosaico[];
  /** Prefijo único de ids del visor (ej. "tour-guatape-piedra-del-penol"). */
  contexto: string;
  /** Nombre accesible de la galería y del visor. */
  label: string;
}

/**
 * Galería 2×2 de la marca (guía §4.6: gap 12–16px, radio 12px) sobre el visor
 * morphing de beUI. Los tiles con foto abren el visor; los tiles sin foto son
 * estáticos con ImagenLugar ("Foto próximamente"), nunca un botón sin acción.
 * Sin fotos reales no se monta el visor: la cuadrícula queda como siempre.
 */
export function GaleriaLightbox({ slots, contexto, label }: GaleriaLightboxProps) {
  const cuadrilla = completarSlots(slots);
  const imagenes = aLightboxImages(slots, contexto);

  if (imagenes.length === 0) {
    return (
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {cuadrilla.map((imagen, index) => (
          <ImagenLugar
            key={`placeholder-${index}`}
            src={imagen.src}
            alt={imagen.alt}
            aspect="aspect-square"
          />
        ))}
      </div>
    );
  }

  return (
    <ImageViewer images={imagenes} label={label} labels={LABELS_VISOR}>
      {/*
        El default de beUI es grid-cols-2 sm:grid-cols-3; la guía exige 2×2
        fijo, por eso se fuerza sm:grid-cols-2 (tailwind-merge lo pisa).
      */}
      <ImageViewerGallery className="grid-cols-2 gap-3 sm:grid-cols-2 md:gap-4">
        {cuadrilla.map((imagen, index) =>
          imagen.src ? (
            <ImageViewerThumbnail
              key={imagen.src}
              imageId={`${contexto}-${index}`}
              className="aspect-square rounded-xl"
              imageClassName="h-full w-full object-cover"
            />
          ) : (
            <ImagenLugar
              key={`placeholder-${index}`}
              src={imagen.src}
              alt={imagen.alt}
              aspect="aspect-square"
            />
          ),
        )}
      </ImageViewerGallery>
      {/*
        Header/footer explícitos para pisaar el focus ring blanco de beUI por
        el hunter-300 de la guía (§9: gana la guía). El caption hereda el
        text-white del contenedor del visor.
      */}
      <ImageViewerContent
        header={
          <>
            <ImageViewerCounter className="text-white" />
            <ImageViewerClose className="focus-visible:ring-hunter-300" />
          </>
        }
      >
        <ImageViewerPrevious className="focus-visible:ring-hunter-300" />
        <ImageViewerCaption />
        <ImageViewerNext className="focus-visible:ring-hunter-300" />
      </ImageViewerContent>
    </ImageViewer>
  );
}
