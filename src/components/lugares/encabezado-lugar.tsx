import { ImagenLugar } from "@/components/ui/imagen-lugar";
import type { LugarDetalle } from "@/types/colombia";

/**
 * Encabezado de la vista de detalle: título, meta del municipio, imagen
 * hero y textos (intro curada + descripción de la API). El retorno al
 * inicio lo resuelve el navbar global.
 */
export function EncabezadoLugar({ lugar }: { lugar: LugarDetalle }) {
  return (
    <section className="bg-surface py-12 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <h1 className="text-3xl font-bold text-pine-800 md:text-5xl">
          {lugar.title}
        </h1>
        {lugar.city && <p className="mt-2 text-sm text-ink-500">{lugar.city}</p>}
        <ImagenLugar
          src={lugar.heroImage}
          alt={lugar.heroAlt}
          aspect="aspect-[16/9] md:aspect-[21/9]"
          eager
          className="mt-6 md:mt-8"
        />
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink-800 md:mt-8 md:text-lg">
          {lugar.intro}
        </p>
        {lugar.description && (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-800">
            {lugar.description}
          </p>
        )}
      </div>
    </section>
  );
}
