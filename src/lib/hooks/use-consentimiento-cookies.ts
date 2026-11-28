"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";
import {
  guardarConsentimiento,
  leerCrudo,
  parsearConsentimiento,
  suscribirseConsentimiento,
  type CategoriaOpcional,
} from "@/lib/consentimiento-cookies";

/** Snapshot del servidor: sin localStorage, nadie ha decidido todavía. */
const obtenerCrudoServidor = () => null;

/**
 * Estado de consentimiento del navegador actual.
 *
 * Se lee con useSyncExternalStore (no con useState + useEffect): localStorage
 * es un sistema externo que no existe durante el prerender, y esta vía da el
 * valor real apenas termina la hidratación, sin setState en efectos (regla
 * react-hooks/set-state-in-effect del React Compiler). El snapshot crudo es
 * un string, estable por valor.
 *
 * `estado === null` significa que el usuario aún no decide.
 */
export function useConsentimientoCookies() {
  const crudo = useSyncExternalStore(
    suscribirseConsentimiento,
    leerCrudo,
    obtenerCrudoServidor,
  );
  const estado = useMemo(() => parsearConsentimiento(crudo), [crudo]);

  // Las acciones solo escriben en el sistema externo (localStorage + evento):
  // la suscripción del store es la que refresca `estado`.
  const aceptarTodas = useCallback(
    () => guardarConsentimiento({ analiticas: true, marketing: true }),
    [],
  );

  const rechazarTodo = useCallback(
    () => guardarConsentimiento({ analiticas: false, marketing: false }),
    [],
  );

  const guardar = useCallback(
    (preferencias: Record<CategoriaOpcional, boolean>) =>
      guardarConsentimiento(preferencias),
    [],
  );

  return {
    estado,
    decidido: estado !== null,
    aceptarTodas,
    rechazarTodo,
    guardar,
  } as const;
}
