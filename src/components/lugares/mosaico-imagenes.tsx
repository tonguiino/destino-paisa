import { GaleriaLightbox } from "@/components/ui/galeria-lightbox";
import type { ImagenMosaico } from "@/types/colombia";

interface MosaicoImagenesProps {
  imagenes: ImagenMosaico[];
  /** Id del lugar: prefijo de los ids del visor para no colisionar con otras galerías. */
  lugarId: number;
}

/**
 * Mosaico 2×2 del lugar (guía §4.6: grid 2×2, gap 12–16px, radio 12px) con
 * visor morphing de beUI. Los slots sin foto renderizan el tile
 * "Foto próximamente" hasta que el propietario sume sus fotografías.
 */
export function MosaicoImagenes({ imagenes, lugarId }: MosaicoImagenesProps) {
  return (
    <section
      aria-labelledby="mosaico-heading"
      className="bg-pine-50 py-12 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <h2
          id="mosaico-heading"
          className="text-2xl font-bold text-pine-800 md:text-4xl"
        >
          Galería
        </h2>
        <div className="mt-8 md:mt-12">
          <GaleriaLightbox
            slots={imagenes}
            contexto={`lugar-${lugarId}`}
            label="Galería del lugar"
          />
        </div>
      </div>
    </section>
  );
}
