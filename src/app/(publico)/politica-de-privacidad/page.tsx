import type { Metadata } from "next";
import { DocumentoLegal } from "@/components/legal/documento-legal";
import { PRIVACIDAD } from "@/data/legal/privacidad";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Cómo tratamos tus datos personales conforme a la Ley 1581 de 2012: datos de contacto por WhatsApp, sesión con Google y tus derechos como titular ante la SIC.",
  alternates: { canonical: "/politica-de-privacidad" },
  openGraph: {
    title: "Política de privacidad",
    description:
      "Qué datos tratamos en Destino Paisa, para qué, y cómo ejercer tus derechos como titular.",
    type: "website",
  },
};

export default function PoliticaDePrivacidadPage() {
  return <DocumentoLegal documento={PRIVACIDAD} />;
}
