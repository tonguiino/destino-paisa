"use client";

import { AnimatedNumber } from "@/components/motion/animated-number";
import { formatNumber } from "@/lib/i18n";
import type { AntioquiaSummary } from "@/types/colombia";

const esCO = (n: number) => formatNumber(n, "es-CO");

interface EstadisticasHeroProps {
  summary: AntioquiaSummary;
}

/**
 * Línea de cifras del hero de la home con AnimatedNumber de beUI.
 *
 * Trade-off documentado: en el HTML prerenderizado los números leen "0" y
 * cuentan hasta el valor real al hidratar. El subtítulo no es contenido SEO
 * objetivo, así que el intercambio se acepta (decisión del plan, Fase 3).
 * min-w + tabular-nums evitan que la línea centrada baile durante el conteo.
 */
export function EstadisticasHero({ summary }: EstadisticasHeroProps) {
  return (
    <>
      <AnimatedNumber
        value={summary.municipalities}
        format={esCO}
        className="inline-block min-w-[3ch]"
      />
      {" municipios, "}
      <AnimatedNumber
        value={summary.population}
        format={esCO}
        className="inline-block min-w-[9ch]"
      />
      {" habitantes y "}
      <AnimatedNumber
        value={summary.surface}
        format={esCO}
        className="inline-block min-w-[6ch]"
      />
      {" km² por descubrir."}
    </>
  );
}
