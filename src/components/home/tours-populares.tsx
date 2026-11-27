import { TOURS } from "@/data/tours";
import { PillLink } from "@/components/ui/pill";
import { TarjetaTour } from "@/components/toures/tarjeta-tour";

/**
 * Tours populares de la home: consume la curaduría real de data/tours.ts y
 * enlaza cada tarjeta a su detalle en /toures/[slug].
 */
export function ToursPopulares() {
  return (
    <section id="tours" aria-labelledby="tours-heading" className="bg-surface py-12 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <h2
          id="tours-heading"
          className="text-center text-2xl font-bold text-pine-800 md:text-4xl"
        >
          Tours populares
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
          {TOURS.map((tour) => (
            <TarjetaTour key={tour.slug} tour={tour} />
          ))}
        </div>
        <div className="mt-8 text-center md:mt-12">
          <PillLink variant="outline" href="/toures">
            Ver todos los tours
          </PillLink>
        </div>
      </div>
    </section>
  );
}
