import Link from "next/link";
import { ImagenLugar } from "@/components/ui/imagen-lugar";
import type { BlogEntry } from "@/types/colombia";

/**
 * Entrada del blog según el mockup: imagen arriba con radio 12px
 * y el texto debajo, sin caja de tarjeta (guía §4.7 galería).
 * Toda la tarjeta es enlace a la vista de detalle del lugar; el hover
 * usa el verde de marca como affordance y zoom sutil de la imagen.
 */
export function TarjetaBlog({ entry }: { entry: BlogEntry }) {
  return (
    <Link
      href={`/lugares/${entry.id}`}
      className="group block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hunter-300"
    >
      <article>
        <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-pine-100">
          {/* alt vacío a propósito: el nombre accesible del enlace es el
              texto de la tarjeta (ciudad, título, excerpt). */}
          <ImagenLugar
            src={entry.imageUrl}
            alt=""
            aspect={null}
            className="h-full w-full transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
        <div className="mt-4">
          {entry.city && <p className="text-sm text-ink-500">{entry.city}</p>}
          <h3 className="mt-1 text-xl font-semibold text-ink-800 transition-colors group-hover:text-hunter-700">
            {entry.title}
          </h3>
          <p className="mt-2 text-base leading-relaxed text-ink-800">{entry.excerpt}</p>
        </div>
      </article>
    </Link>
  );
}
