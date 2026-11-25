import { PillLink } from "@/components/ui/pill";
import { ImagenLugar } from "@/components/ui/imagen-lugar";
import { enlaceWhatsapp } from "@/lib/contacto";
import type { ImagenMosaico } from "@/types/colombia";
import type { Tour } from "@/data/tours";
import { precioLegible } from "./precio";

/** El mosaico siempre se compone de 4 slots (guía §4.6). */
const GALERIA_SLOTS = 4;

/**
 * Bloque inferior del detalle de tour (mockup guatape_desk.png): galería
 * 2×2 a la izquierda y "Información adicional" con el CTA de reserva a la
 * derecha.
 */
export function GaleriaInformacionTour({ tour }: { tour: Tour }) {
  const slots: ImagenMosaico[] = [...tour.galeria];
  while (slots.length < GALERIA_SLOTS) slots.push({ src: null, alt: "" });

  const filas: [string, string][] = [
    ["Dificultad", tour.dificultad],
    ["Edad mínima", tour.edadMinima],
    ["Recomendaciones", tour.recomendaciones.join(", ")],
    ["Clima", tour.clima],
    ["Precio", precioLegible(tour)],
  ];

  return (
    <section
      aria-labelledby="galeria-tour-heading"
      className="bg-surface py-12 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <h2
              id="galeria-tour-heading"
              className="text-2xl font-bold text-pine-800 md:text-3xl"
            >
              Galería
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-3 md:gap-4">
              {slots.map((imagen, index) => (
                <ImagenLugar
                  key={imagen.src ?? `placeholder-${index}`}
                  src={imagen.src}
                  alt={imagen.alt}
                  aspect="aspect-square"
                />
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-pine-800 md:text-3xl">
              Información adicional
            </h2>
            <dl className="mt-6 space-y-4">
              {filas.map(([termino, valor]) => (
                <div key={termino}>
                  <dt className="text-sm text-ink-500">{termino}</dt>
                  <dd className="text-base text-ink-800">{valor}</dd>
                </div>
              ))}
            </dl>
            <PillLink
              href={enlaceWhatsapp(tour.mensajeWhatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 px-8 uppercase tracking-wide"
            >
              Reservar este tour
            </PillLink>
          </div>
        </div>
      </div>
    </section>
  );
}
