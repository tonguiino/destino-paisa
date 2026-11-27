import type { Metadata } from "next";
import { TOURS } from "@/data/tours";
import { enlaceWhatsapp } from "@/lib/contacto";
import { HeroToures } from "@/components/toures/hero-toures";
import { CatalogoToures } from "@/components/toures/catalogo-toures";
import { CtaToures } from "@/components/toures/cta-toures";
import { BotonWhatsappFlotante } from "@/components/boton-whatsapp";

export const metadata: Metadata = {
  title: "Tours en Antioquia",
  description:
    "Tours saliendo desde Medellín: Guatapé y la Piedra del Peñol, Comuna 13, noches de discotecas y más experiencias acompañadas por Antioquia.",
  alternates: { canonical: "/toures" },
  openGraph: {
    title: "Tours en Antioquia",
    description:
      "Tours saliendo desde Medellín: Guatapé y la Piedra del Peñol, Comuna 13, noches de discotecas y más experiencias acompañadas por Antioquia.",
    type: "website",
    images: [
      {
        url: "/images/lugares/guatape/represa-aerea.jpg",
        alt: "Embalse de Peñol-Guatapé con la Piedra del Peñol vista desde el aire",
      },
    ],
  },
};

/**
 * Vista estática del catálogo de tours: el copy y los datos viven en
 * data/tours.ts y las reservas abren WhatsApp con mensaje prellenado.
 */
export default function TouresPage() {
  return (
    <main>
      <HeroToures
        titulo="Tours en Antioquia"
        subtitulo="Experiencias organizadas de principio a fin: transporte, guía y los destinos más emblemáticos saliendo desde Medellín."
        cta="Ver los tours"
        hrefCta="#catalogo-toures"
        imagen="/images/lugares/guatape/represa-aerea.jpg"
      />
      <CatalogoToures tours={TOURS} />
      <CtaToures
        heading="¿Listo para tu próxima aventura?"
        parrafo="Cuéntanos qué experiencia quieres vivir y la organizamos contigo, con transporte y guía incluidos."
        cta="Escríbenos por WhatsApp"
        hrefCta={enlaceWhatsapp(
          "Hola, quiero información sobre los tours de Destino Paisa",
        )}
      />
      <BotonWhatsappFlotante />
    </main>
  );
}
