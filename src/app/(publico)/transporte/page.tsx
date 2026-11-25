import type { Metadata } from "next";
import { TRANSPORTE } from "@/data/transporte";
import { enlaceWhatsapp } from "@/lib/contacto";
import { HeroTransporte } from "@/components/transporte/hero-transporte";
import { IntroServicio } from "@/components/transporte/intro-servicio";
import { OpcionesContratacion } from "@/components/transporte/opciones-contratacion";
import { PorQueElegirnos } from "@/components/transporte/por-que-elegirnos";
import { TrasladosAeropuerto } from "@/components/transporte/traslados-aeropuerto";
import { CtaFinal } from "@/components/transporte/cta-final";
import { BotonWhatsappFlotante } from "@/components/boton-whatsapp";

export const metadata: Metadata = {
  title: "Transporte turístico",
  description:
    "Transporte turístico privado en Antioquia: recorridos a tu medida, traslados al aeropuerto, conductor experto y guía básica de turismo incluida.",
};

/**
 * Vista estática del servicio de transporte: el copy vive en
 * data/transporte.ts y los CTAs abren WhatsApp con mensaje prellenado.
 */
export default function TransportePage() {
  const { hero, servicio, opciones, beneficios, traslados, ctaFinal } =
    TRANSPORTE;

  return (
    <main>
      <HeroTransporte
        titulo={hero.titulo}
        subtitulo={hero.subtitulo}
        cta={hero.cta}
        hrefCta={enlaceWhatsapp(hero.mensajeWhatsapp)}
        imagen={hero.imagen}
      />
      <IntroServicio
        heading={servicio.heading}
        bajada={servicio.bajada}
        parrafos={servicio.parrafos}
        imagen={servicio.imagen}
        imagenAlt={servicio.imagenAlt}
        etiquetaImagen={servicio.etiquetaImagen}
      />
      <OpcionesContratacion
        heading={opciones.heading}
        bajada={opciones.bajada}
        items={opciones.items}
      />
      <PorQueElegirnos
        heading={beneficios.heading}
        items={beneficios.items}
        cta={beneficios.cta}
        hrefCta={enlaceWhatsapp(beneficios.mensajeWhatsapp)}
      />
      <TrasladosAeropuerto
        heading={traslados.heading}
        parrafos={traslados.parrafos}
        items={traslados.items}
        cta={traslados.cta}
        hrefCta={enlaceWhatsapp(traslados.mensajeWhatsapp)}
      />
      <CtaFinal
        heading={ctaFinal.heading}
        parrafo={ctaFinal.parrafo}
        cta={ctaFinal.cta}
        hrefCta={enlaceWhatsapp(ctaFinal.mensajeWhatsapp)}
      />
      <BotonWhatsappFlotante />
    </main>
  );
}
