import { TarjetaTour } from "./tarjeta-tour";

// Placeholder estático: pendiente backend de tours (sin precios aún)
const TOURS_PLACEHOLDER = [
  { title: "Tour a Guatapé" },
  { title: "Tour a Comuna 13" },
  { title: "Tour de Discotecas" },
];

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
          {TOURS_PLACEHOLDER.map((tour) => (
            <TarjetaTour key={tour.title} title={tour.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
