import type { Tour } from "@/data/tours";

/**
 * Formato del precio de la tarjeta y de "Información adicional".
 * Sin precio publicado (precioDesde null): "Sujeto a cotización".
 */
const FORMATO_COP = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

export function precioLegible(tour: Tour): string {
  return tour.precioDesde === null
    ? "Sujeto a cotización"
    : `Desde ${FORMATO_COP.format(tour.precioDesde)}`;
}
