import { ImagenLugar } from "@/components/ui/imagen-lugar";
import type { ImagenMosaico } from "@/types/colombia";

/**
 * Mosaico 2×2 del lugar (guía §4.6: grid 2×2, gap 12–16px, radio 12px).
 * Siempre recibe 4 slots: los sin foto propia renderizan el tile
 * "Foto próximamente" hasta que el propietario sume sus fotografías.
 */
export function MosaicoImagenes({ imagenes }: { imagenes: ImagenMosaico[] }) {
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
        <div className="mt-8 grid grid-cols-2 gap-3 md:mt-12 md:gap-4">
          {imagenes.map((imagen, index) => (
            <ImagenLugar
              key={imagen.src ?? `placeholder-${index}`}
              src={imagen.src}
              alt={imagen.alt}
              aspect="aspect-square"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
