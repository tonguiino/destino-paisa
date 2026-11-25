/**
 * Datos de los enlaces del footer global.
 *
 * Centralizado aquí —mismo criterio que lib/contacto.ts— para que cualquier
 * cambio de enlaces se haga en un solo archivo sin tocar el componente.
 */

export type EnlaceFooter = {
  /** Texto visible del enlace, en español. */
  texto: string;
  /**
   * Ruta interna ("/", "/toures") o URL externa completa. En el componente:
   * las que empiezan por "/" van con next/link; las que empiezan por "http",
   * con <a> externo.
   */
  href: string;
  /**
   * El destino aún no existe (dará 404). No se renderiza: sirve de
   * documentación para saber qué hay que crear antes de lanzar.
   */
  pendiente?: boolean;
};

export type GrupoEnlacesFooter = {
  titulo: string;
  enlaces: EnlaceFooter[];
};

export const GRUPOS_ENLACES_FOOTER: GrupoEnlacesFooter[] = [
  {
    titulo: "Explorar",
    enlaces: [
      { texto: "Inicio", href: "/" },
      { texto: "Tours populares", href: "/toures" },
      { texto: "Transporte turístico", href: "/transporte" },
      { texto: "Blog", href: "/#blog" },
    ],
  },
  {
    titulo: "Legal",
    enlaces: [
      { texto: "Términos y condiciones", href: "/terminos", pendiente: true },
      {
        texto: "Política de privacidad",
        href: "/politica-de-privacidad",
        pendiente: true,
      },
    ],
  },
];

export type RedSocial = {
  /** Clave del logo inline en components/logos-marca.tsx. */
  logo: "instagram" | "facebook";
  nombre: string;
  url: string;
  /** Cuenta placeholder hasta definir las redes reales del proyecto. */
  pendiente: boolean;
};

export const REDES_SOCIALES: RedSocial[] = [
  {
    logo: "instagram",
    nombre: "Instagram",
    url: "https://www.instagram.com/destinopaisa",
    pendiente: true,
  },
  {
    logo: "facebook",
    nombre: "Facebook",
    url: "https://www.facebook.com/destinopaisa",
    pendiente: true,
  },
];
