"use client";

import { PillButton } from "@/components/ui/pill";
import { abrirPreferenciasCookies } from "@/lib/consentimiento-cookies";

type Props = {
  texto?: string;
  /** "pill" para el hero de /cookies; "enlace" hereda las clases del footer. */
  apariencia?: "pill" | "enlace";
  /** Variante del pill (se ignora con apariencia "enlace"). */
  variante?: "primary" | "outline";
  className?: string;
};

/**
 * Abre el panel de preferencias del BannerCookies (montado en el layout raíz).
 * Existe como componente de cliente porque el footer y las páginas legales son
 * server components y no pueden pasar onClick a un botón.
 */
export function BotonConfiguracionCookies({
  texto = "Configuración de cookies",
  apariencia = "pill",
  variante = "outline",
  className,
}: Props) {
  if (apariencia === "enlace") {
    return (
      <button
        type="button"
        onClick={abrirPreferenciasCookies}
        className={className}
      >
        {texto}
      </button>
    );
  }
  return (
    <PillButton
      variant={variante}
      onClick={abrirPreferenciasCookies}
      className={className}
    >
      {texto}
    </PillButton>
  );
}
