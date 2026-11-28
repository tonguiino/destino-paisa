/** Fila de tabla legal, p. ej. el inventario de cookies de /cookies. */
export interface TablaLegal {
  encabezados: string[];
  filas: string[][];
}

/** Enlace interno de referencia, renderizado bajo los párrafos de una sección. */
export interface EnlaceLegal {
  texto: string;
  href: string;
}

/** Sub-bloque con h3 dentro de una sección, p. ej. "Desde tu navegador". */
export interface SubseccionLegal {
  titulo: string;
  parrafos?: string[];
  lista?: string[];
  listaOrdenada?: boolean;
}

/** Sección numerada de un documento legal, con ancla estable en `id`. */
export interface SeccionLegal {
  /** Anchor para el índice y los enlaces internos: "objeto", "derechos". */
  id: string;
  titulo: string;
  parrafos?: string[];
  /** Párrafos de cierre, después de lista/tabla/nota (intro y conclusión). */
  parrafosFinales?: string[];
  lista?: string[];
  listaOrdenada?: boolean;
  tabla?: TablaLegal;
  /** Párrafo destacado sobre bg-pine-50 (avisos y advertencias). */
  nota?: string;
  enlaces?: EnlaceLegal[];
  subsecciones?: SubseccionLegal[];
}

/**
 * Documento legal completo (/terminos, /politica-de-privacidad, /cookies).
 * fechaActualizacion es un string constante a propósito: cacheComponents
 * bloquea new Date() durante el prerender (mismo criterio que sitemap.ts).
 */
export interface DocumentoLegal {
  /** H1 de la página. */
  titulo: string;
  /** Bajada de 1-2 líneas bajo el H1. */
  bajada?: string;
  /** Fecha legible ("28 de noviembre de 2026"), nunca new Date(). */
  fechaActualizacion: string;
  secciones: SeccionLegal[];
  /** Bloque final de contacto, sin número de sección. */
  cierre?: {
    titulo: string;
    parrafos: string[];
  };
}
