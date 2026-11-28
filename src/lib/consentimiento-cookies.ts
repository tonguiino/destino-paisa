/**
 * Estado y utilidades del consentimiento de cookies (solo cliente).
 *
 * No importar ni invocar desde server components: localStorage no existe
 * durante el prerender (cacheComponents). La analítica futura debe consultar
 * tieneConsentimiento() antes de inyectar su script y mantenerse al día con
 * suscribirseConsentimiento(); el banner no necesita cambios para eso.
 */

export const CLAVE_CONSENTIMIENTO = "destino-paisa:consentimiento-cookies";

/**
 * Subir este número cuando cambie la forma del estado: los consentimientos
 * viejos se tratan como no emitidos y el banner vuelve a preguntar.
 */
export const VERSION_CONSENTIMIENTO = 1;

/** Evento interno para que el footer y /cookies (server components) reabran el panel. */
export const EVENTO_ABRIR_PREFERENCIAS =
  "destino-paisa:abrir-preferencias-cookies";

/** Evento interno emitido al guardar; lo consumen los suscriptores. */
export const EVENTO_CONSENTIMIENTO = "destino-paisa:consentimiento-cambiado";

/** Categorías que el usuario puede permitir o rechazar. Las necesarias no se preguntan. */
export type CategoriaOpcional = "analiticas" | "marketing";

export interface EstadoConsentimiento {
  version: number;
  analiticas: boolean;
  marketing: boolean;
  /** ISO del guardado: acredita la fecha de la autorización (Decreto 1377 de 2013). */
  guardadoEn: string;
}

/**
 * Valor crudo de localStorage, seguro en servidor (devuelve null). Snapshot
 * primitivo: estable por valor, pensado para useSyncExternalStore.
 */
export function leerCrudo(): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(CLAVE_CONSENTIMIENTO);
}

/**
 * Interpreta el valor crudo. Devuelve null si no hay decisión, si es de otra
 * versión o si el dato está corrupto (JSON roto, modo privado, cuota llena).
 */
export function parsearConsentimiento(
  crudo: string | null,
): EstadoConsentimiento | null {
  if (!crudo) return null;
  try {
    const dato = JSON.parse(crudo) as EstadoConsentimiento;
    if (dato?.version !== VERSION_CONSENTIMIENTO) return null;
    if (typeof dato.analiticas !== "boolean") return null;
    if (typeof dato.marketing !== "boolean") return null;
    return dato;
  } catch {
    return null;
  }
}

/** Lee el consentimiento persistido; null si aún no hay decisión válida. */
export function leerConsentimiento(): EstadoConsentimiento | null {
  return parsearConsentimiento(leerCrudo());
}

/**
 * Persiste la decisión y avisa a los suscriptores. Si el navegador bloquea
 * localStorage (modo privado, cuota), la decisión vale solo para esta sesión.
 */
export function guardarConsentimiento(
  preferencias: Record<CategoriaOpcional, boolean>,
): EstadoConsentimiento {
  const estado: EstadoConsentimiento = {
    version: VERSION_CONSENTIMIENTO,
    analiticas: preferencias.analiticas,
    marketing: preferencias.marketing,
    guardadoEn: new Date().toISOString(),
  };
  try {
    window.localStorage.setItem(CLAVE_CONSENTIMIENTO, JSON.stringify(estado));
  } catch {
    // Persistir es un problema propio del navegador, no de la decisión tomada.
  }
  window.dispatchEvent(
    new CustomEvent<EstadoConsentimiento>(EVENTO_CONSENTIMIENTO, {
      detail: estado,
    }),
  );
  return estado;
}

/** Olvida la decisión; el banner vuelve a aparecer. Útil para pruebas. */
export function borrarConsentimiento(): void {
  window.localStorage.removeItem(CLAVE_CONSENTIMIENTO);
  window.dispatchEvent(new CustomEvent(EVENTO_CONSENTIMIENTO));
}

/** Gate para la analítica futura: preguntar antes de inyectar cualquier script. */
export function tieneConsentimiento(categoria: CategoriaOpcional): boolean {
  return leerConsentimiento()?.[categoria] === true;
}

/** Abre el panel de preferencias desde cualquier parte del sitio. */
export function abrirPreferenciasCookies(): void {
  window.dispatchEvent(new CustomEvent(EVENTO_ABRIR_PREFERENCIAS));
}

/**
 * Se suscribe a los cambios de consentimiento (esta pestaña y otras, vía el
 * evento storage). Devuelve la función para cancelar la suscripción.
 */
export function suscribirseConsentimiento(
  cb: (estado: EstadoConsentimiento | null) => void,
): () => void {
  const notificar = () => cb(leerConsentimiento());
  const alCambiarOtraPestana = (evento: StorageEvent) => {
    // key === null borra todo el storage; también reintenta.
    if (evento.key === CLAVE_CONSENTIMIENTO || evento.key === null) notificar();
  };
  window.addEventListener(EVENTO_CONSENTIMIENTO, notificar);
  window.addEventListener("storage", alCambiarOtraPestana);
  return () => {
    window.removeEventListener(EVENTO_CONSENTIMIENTO, notificar);
    window.removeEventListener("storage", alCambiarOtraPestana);
  };
}
