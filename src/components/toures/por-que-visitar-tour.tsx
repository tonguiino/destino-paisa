interface PorQueVisitarTourProps {
  /** Lugar de la experiencia: "Guatapé", "la Comuna 13", … */
  destino: string;
  parrafos: string[];
}

/**
 * Sección "¿Por qué visitar X?" del detalle de tour (mockup
 * guatape_desk.png): título del lugar + párrafos de venta, texto
 * a una columna con medida de lectura.
 */
export function PorQueVisitarTour({ destino, parrafos }: PorQueVisitarTourProps) {
  return (
    <section
      aria-labelledby="por-que-visitar-heading"
      className="bg-surface py-12 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <h2
          id="por-que-visitar-heading"
          className="text-2xl font-bold text-pine-800 md:text-4xl"
        >
          ¿Por qué visitar {destino}?
        </h2>
        {parrafos.map((parrafo) => (
          <p
            key={parrafo}
            className="mt-4 max-w-3xl text-base leading-relaxed text-ink-800 md:text-lg"
          >
            {parrafo}
          </p>
        ))}
      </div>
    </section>
  );
}
