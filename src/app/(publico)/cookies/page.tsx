import type { Metadata } from "next";
import { BotonConfiguracionCookies } from "@/components/cookies/boton-configuracion-cookies";
import { DocumentoLegal } from "@/components/legal/documento-legal";
import { COOKIES } from "@/data/legal/cookies";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Cookies que usa Destino Paisa: solo las estrictamente necesarias para tu sesión. Consulta y configura tus preferencias de analíticas y marketing.",
  alternates: { canonical: "/cookies" },
  openGraph: {
    title: "Política de cookies",
    description:
      "Qué cookies y almacenamiento local usa Destino Paisa, y cómo decides sobre ellas.",
    type: "website",
  },
};

export default function CookiesPage() {
  return (
    <DocumentoLegal
      documento={COOKIES}
      acciones={
        <div className="mt-6">
          <BotonConfiguracionCookies texto="Configuración de cookies" />
        </div>
      }
    />
  );
}
