import { ImagenLugar } from "@/components/ui/imagen-lugar";
import type { LugarDetalle } from "@/types/colombia";

/**
 * Platos típicos de Antioquia (api-colombia): tarjetas pequeñas con
 * imagen, nombre y descripción breve ya truncada en la capa de datos.
 */
export function SeccionPlatos({ lugar }: { lugar: LugarDetalle }) {
  return (
    <section
      aria-labelledby="platos-heading"
      className="bg-surface py-12 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <h2
          id="platos-heading"
          className="text-2xl font-bold text-pine-800 md:text-4xl"
        >
          Platos típicos de Antioquia
        </h2>
        <p className="mt-2 text-sm text-ink-500">
          Sabores de la región para completar el viaje.
        </p>
        <div className="mt-8 grid gap-6 md:mt-12 sm:grid-cols-3">
          {lugar.platos.map((plato) => (
            <article key={plato.id}>
              <ImagenLugar
                src={plato.imageUrl}
                alt={`Plato típico: ${plato.name}`}
                aspect="aspect-[4/3]"
              />
              <h3 className="mt-3 text-base font-semibold text-ink-800 md:text-lg">
                {plato.name}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-500">
                {plato.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
