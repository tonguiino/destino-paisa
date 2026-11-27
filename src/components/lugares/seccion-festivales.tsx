import type { LugarDetalle } from "@/types/colombia";

/**
 * Festivales y ferias tradicionales del municipio (api-colombia).
 * El mes en paprika-700 es el único acento cálido de la vista (guía §1.4).
 * La API no trae imágenes para festivales, solo nombre y mes.
 */
export function SeccionFestivales({ lugar }: { lugar: LugarDetalle }) {
  return (
    <section
      aria-labelledby="festivales-heading"
      className="bg-pine-50 py-12 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <h2
          id="festivales-heading"
          className="text-2xl font-bold text-pine-800 md:text-4xl"
        >
          Festivales y tradiciones
        </h2>
        <ul className="mt-8 grid gap-6 md:mt-12 md:grid-cols-3">
          {lugar.festivales.map((festival) => (
            <li
              key={festival.id}
              className="rounded-2xl bg-surface p-6 shadow-sm"
            >
              {festival.month && (
                <p className="text-sm font-medium text-paprika-700">
                  {festival.month}
                </p>
              )}
              <h3 className="mt-1 text-lg font-semibold text-ink-800 md:text-xl">
                {festival.name}
              </h3>
              {festival.city && festival.city !== lugar.city && (
                <p className="mt-1 text-sm text-ink-500">{festival.city}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
