"use client";

import { AnimatedNumber } from "@/components/motion/animated-number";
import { formatNumber } from "@/lib/i18n";
import type { AntioquiaSummary } from "@/types/colombia";

/**
 * Redondea cada frame del conteo: sin esto Intl.NumberFormat agrega decimales
 * a los valores fraccionales intermedios (ej. "6.306.297,435") y la cifra
 * crece más que el valor final durante la animación.
 */
const esCO = (n: number) => formatNumber(Math.round(n), "es-CO");

interface CifraProps {
  value: number;
}

/**
 * Cifra animada sin re-flujo: un fantasma invisible reserva el ancho exacto
 * del valor final y el número animado se superpone encima. Así la línea del
 * hero no se desplaza ni envuelve mientras los números cuentan.
 * tabular-nums en ambos hace que cada dígito ocupe lo mismo en fantasma y
 * número animado.
 */
function Cifra({ value }: CifraProps) {
  return (
    <span className="relative inline-block tabular-nums">
      <span aria-hidden className="invisible whitespace-nowrap">
        {esCO(value)}
      </span>
      <AnimatedNumber
        value={value}
        format={esCO}
        className="absolute left-0 top-0 whitespace-nowrap"
      />
    </span>
  );
}

interface EstadisticasHeroProps {
  summary: AntioquiaSummary;
}

/**
 * Línea de cifras del hero de la home con AnimatedNumber de beUI.
 *
 * Trade-off documentado: en el HTML prerenderizado los números leen "0" y
 * cuentan hasta el valor real al hidratar. El subtítulo no es contenido SEO
 * objetivo, así que el intercambio se acepta (decisión del plan, Fase 3).
 */
export function EstadisticasHero({ summary }: EstadisticasHeroProps) {
  return (
    <>
      <Cifra value={summary.municipalities} />
      {" municipios, "}
      <Cifra value={summary.population} />
      {" habitantes y "}
      <Cifra value={summary.surface} />
      {" km² por descubrir."}
    </>
  );
}
