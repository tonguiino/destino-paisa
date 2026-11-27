"use client";

import { Check, X } from "lucide-react";
import {
  BouncyAccordion,
  type BouncyAccordionClassNames,
  type BouncyAccordionItem,
} from "@/components/motion/bouncy-accordion";
import { ListaChecks } from "@/components/ui/lista-checks";

/**
 * La guía gana sobre beUI (§9): filas como tarjetas de radio 16px (§5) con
 * borde sutil ink-100 (§5), títulos H3 de la escala tipográfica (§2) y
 * chevron hunter. El `!` pisa el radio de 28px que beUI anima inline.
 */
const CLASES: BouncyAccordionClassNames = {
  item: "rounded-2xl! border border-ink-100 bg-surface",
  trigger: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-hunter-300",
  title: "text-lg font-semibold text-ink-800 md:text-xl",
  chevron: "text-hunter-700",
};

interface AcordeonIncluyeProps {
  incluye: string[];
  noIncluye: string[];
}

/**
 * "Qué incluye el tour" como acordeón de dos filas: check hunter-700 en la
 * fila de incluidos y X paprika-500 en la de excluidos (guía §4.5), el único
 * acento cálido de la vista. "Incluye" abre por defecto para que el contenido
 * clave sea visible sin interacción y esté en el HTML prerenderizado.
 */
export function AcordeonIncluye({ incluye, noIncluye }: AcordeonIncluyeProps) {
  const items: BouncyAccordionItem[] = [
    {
      id: "incluye",
      title: "Incluye",
      icon: <Check className="h-5 w-5 text-hunter-700" aria-hidden />,
      description: <ListaChecks items={incluye} />,
    },
    {
      id: "no-incluye",
      title: "No incluye",
      icon: <X className="h-5 w-5 text-paprika-500" aria-hidden />,
      description: <ListaChecks items={noIncluye} icono="x" />,
    },
  ];

  return (
    <BouncyAccordion
      items={items}
      defaultValue="incluye"
      classNames={CLASES}
    />
  );
}
