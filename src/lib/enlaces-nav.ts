/**
 * Datos de los enlaces del navbar global.
 *
 * Centralizado aquí —mismo criterio que lib/enlaces-footer.ts— para que
 * cualquier cambio de enlaces se haga en un solo archivo sin tocar el
 * componente.
 */

export type EnlaceNav = {
  /** Texto visible del enlace, en español. */
  texto: string;
  /**
   * Ruta interna ("/", "/#tours") o URL externa completa. En el componente:
   * las que empiezan por "/" van con next/link; las que empiezan por "http",
   * con <a> externo.
   */
  href: string;
};

/**
 * Enlaces provisionales del menú principal: Tours y Blog apuntan a las
 * secciones de la home (#tours, #blog) hasta que existan sus vistas propias;
 * entonces se sustituyen aquí, sin tocar el componente.
 */
export const ENLACES_NAV: EnlaceNav[] = [
  { texto: "Inicio", href: "/" },
  { texto: "Tours", href: "/#tours" },
  { texto: "Transporte", href: "/transporte" },
  { texto: "Blog", href: "/#blog" },
];
