import { ListaChecks } from "@/components/ui/lista-checks";

interface IncluyeTourProps {
  incluye: string[];
  noIncluye: string[];
}

/**
 * "Incluye / No incluye" en dos columnas (guía §4.5 y mockup
 * guatape_desk.png): checks verdes hunter-700 y X paprika-500, el único
 * acento cálido de la vista.
 */
export function IncluyeTour({ incluye, noIncluye }: IncluyeTourProps) {
  return (
    <section
      aria-labelledby="incluye-tour-heading"
      className="bg-pine-50 py-12 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <h2
          id="incluye-tour-heading"
          className="text-2xl font-bold text-pine-800 md:text-4xl"
        >
          Qué incluye el tour
        </h2>
        <div className="mt-8 grid gap-10 md:mt-12 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-ink-800">Incluye</h3>
            <div className="mt-4">
              <ListaChecks items={incluye} />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-ink-800">No incluye</h3>
            <div className="mt-4">
              <ListaChecks items={noIncluye} icono="x" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
