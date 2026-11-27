"use client";

import { TextReveal } from "@/components/motion/text-reveal";

interface TituloHeroProps {
  /** Texto del H1: un string, o un array para partirlo en renglones. */
  texto: string | string[];
  /** Id del heading, lo referencia el aria-labelledby de la sección. */
  id: string;
}

/**
 * H1 de los heroes con TextReveal de beUI: reveal palabra por palabra al
 * montar (el hero es above the fold, sin whileInView). El wrapper es dueño
 * del <h1> porque TextReveal no reenvía props extra como el id.
 *
 * SEO: el texto queda como nodos de texto planos en el DOM; en el HTML
 * prerenderizado los spans leen opacity 0 y se revelan al hidratar, igual
 * que cualquier componente con animación de entrada.
 * Clases de la guía §2/§4.3: H1 blanco sobre el overlay pine-950 del hero.
 */
export function TituloHero({ texto, id }: TituloHeroProps) {
  return (
    <h1
      id={id}
      className="text-3xl font-bold text-white md:text-5xl lg:text-[56px] lg:leading-[1.1]"
    >
      <TextReveal text={texto} split="word" />
    </h1>
  );
}
