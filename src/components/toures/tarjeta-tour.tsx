import Link from "next/link";
import { Clock } from "lucide-react";
import { ImagenLugar } from "@/components/ui/imagen-lugar";
import type { Tour } from "@/data/tours";
import { precioLegible } from "./precio";

/**
 * Tarjeta de tour enlazada al detalle (guía §4.1): móvil en lista con thumb
 * 96×96 a la izquierda y desktop en bloque con imagen arriba. Evolución de
 * la antigua components/home/tarjeta-tour.tsx con el patrón de tarjeta
 * enlace de tarjeta-blog.tsx (todo clicable, sin botón interior).
 */
export function TarjetaTour({ tour }: { tour: Tour }) {
  return (
    <Link
      href={`/toures/${tour.slug}`}
      className="group block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hunter-300"
    >
      <article className="flex items-center gap-4 rounded-2xl bg-surface p-3 shadow-sm transition-shadow group-hover:shadow-md sm:block sm:p-0">
        <ImagenLugar
          src={tour.heroImage}
          // El nombre accesible del enlace lo da el texto de la tarjeta.
          alt=""
          aspect="aspect-square sm:aspect-[4/3]"
          className="w-24 shrink-0 sm:w-full sm:rounded-none transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <div className="min-w-0 flex-1 sm:p-5 sm:pt-4">
          <p className="text-sm text-ink-500">{tour.ubicacion}</p>
          <h3 className="mt-1 text-xl font-semibold text-ink-800 transition-colors group-hover:text-hunter-700">
            {tour.titulo}
          </h3>
          <p className="mt-2 hidden text-base leading-relaxed text-ink-800 sm:block">
            {tour.resumen}
          </p>
          <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-500">
            <span className="inline-flex items-center gap-1.5">
              <Clock aria-hidden className="h-4 w-4" />
              {tour.duracion}
            </span>
            <span>{precioLegible(tour)}</span>
          </p>
        </div>
      </article>
    </Link>
  );
}
