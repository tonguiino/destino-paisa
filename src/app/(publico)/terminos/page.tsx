import type { Metadata } from "next";
import { DocumentoLegal } from "@/components/legal/documento-legal";
import { TERMINOS } from "@/data/legal/terminos";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description:
    "Condiciones de uso de Destino Paisa: plataforma informativa que conecta viajeros con proveedores de tours y transporte en Antioquia. Sin pagos ni reservas en el sitio.",
  alternates: { canonical: "/terminos" },
  openGraph: {
    title: "Términos y condiciones",
    description:
      "Condiciones de uso de la plataforma informativa Destino Paisa.",
    type: "website",
  },
};

export default function TerminosPage() {
  return <DocumentoLegal documento={TERMINOS} />;
}
