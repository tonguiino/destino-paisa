import type { OpcionContratacion } from "@/data/transporte";

interface OpcionesContratacionProps {
  heading: string;
  bajada: string;
  items: OpcionContratacion[];
}

/**
 * Opciones de contratación: tarjetas blancas sobre pine-50 (guía §4.1/§4.2),
 * sin botón por tarjeta: la conversión se resuelve con los CTAs de WhatsApp
 * de las demás secciones.
 *
 * Pendiente: íconos decorativos por tarjeta (en el mockup: ubicación, reloj y
 * calendario) cuando se instale la librería de íconos (guía §8).
 */
export function OpcionesContratacion({
  heading,
  bajada,
  items,
}: OpcionesContratacionProps) {
  return (
    <section
      aria-labelledby="opciones-heading"
      className="bg-pine-50 py-12 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <h2
          id="opciones-heading"
          className="text-center text-2xl font-bold text-pine-800 md:text-4xl"
        >
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-ink-800">
          {bajada}
        </p>
        <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-3">
          {items.map((opcion) => (
            <article
              key={opcion.id}
              className="rounded-2xl bg-surface p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-ink-800 md:text-xl">
                {opcion.titulo}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-800">
                {opcion.descripcion}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
