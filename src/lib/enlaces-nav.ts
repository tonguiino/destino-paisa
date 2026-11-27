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
   * Ruta interna ("/", "/toures") o URL externa completa. En el componente:
   * las que empiezan por "/" van con next/link; las que empiezan por "http",
   * con <a> externo.
   */
  href: string;
};

/**
 * Blog apunta a la sección de la home (#blog) hasta que exista su vista
 * propia; entonces se sustituye aquí, sin tocar el componente. Tours ya
 * tiene vista propia (/toures).
 */
export const ENLACES_NAV: EnlaceNav[] = [
  { texto: "Inicio", href: "/" },
  { texto: "Tours", href: "/toures" },
  { texto: "Transporte", href: "/transporte" },
  { texto: "Blog", href: "/#blog" },
];
