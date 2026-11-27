import type { Tour } from "@/data/tours";
import { TarjetaTour } from "./tarjeta-tour";

/**
 * Catálogo del listado /toures: grid de tarjetas enlazadas (guía §4.1).
 * Título alineado a la izquierda: página de contenido, no marketing.
 */
export function CatalogoToures({ tours }: { tours: Tour[] }) {
  return (
    <section
      id="catalogo-toures"
      aria-labelledby="catalogo-toures-heading"
      className="bg-surface py-12 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <h2
          id="catalogo-toures-heading"
          className="text-2xl font-bold text-pine-800 md:text-4xl"
        >
          Nuestros tours
        </h2>
        <p className="mt-4 max-w-2xl text-base text-ink-500 md:text-lg">
          Experiencias acompañadas de principio a fin: transporte, guía y los
          detalles resueltos para que solo te preocupes por disfrutar.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
          {tours.map((tour) => (
            <TarjetaTour key={tour.slug} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}
