import type { ActividadLugar } from "@/types/colombia";

/**
 * Sección "Cosas por hacer": lista curada localmente por lugar.
 * El número es texto dentro de un círculo tintado (no es ícono; la
 * librería de íconos está pendiente de instalación, guía §8).
 */
export function ListaActividades({
  actividades,
}: {
  actividades: ActividadLugar[];
}) {
  return (
    <section
      aria-labelledby="actividades-heading"
      className="bg-surface py-12 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <h2
          id="actividades-heading"
          className="text-2xl font-bold text-pine-800 md:text-4xl"
        >
          Cosas por hacer
        </h2>
        <ol className="mt-8 grid gap-6 md:mt-12 md:gap-8">
          {actividades.map((actividad, index) => (
            <li key={actividad.titulo} className="flex gap-4 md:gap-6">
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pine-50 text-sm font-semibold text-pine-800"
              >
                {index + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-ink-800 md:text-xl">
                  {actividad.titulo}
                </h3>
                <p className="mt-1 text-base leading-relaxed text-ink-800">
                  {actividad.descripcion}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
