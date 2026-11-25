import Image from "next/image";
import { Clock, MapPin } from "lucide-react";
import { PillLink } from "@/components/ui/pill";
import { enlaceWhatsapp } from "@/lib/contacto";
import type { Tour } from "@/data/tours";

/**
 * Hero full-bleed del detalle de tour (guía §4.3, mockup guatape_desk.png).
 * Espejo del hero de transporte (components/transporte/hero-transporte.tsx)
 * con la fila de meta del tour y el CTA grande de reserva (guía §3.4,
 * pine-800: el azul del mockup está prohibido por §1.4).
 * Con heroImage null queda el fondo pine-950 liso.
 */
export function HeroTour({ tour }: { tour: Tour }) {
  return (
    <section
      aria-labelledby="tour-hero-heading"
      className="relative isolate flex min-h-[520px] items-center justify-center overflow-hidden bg-pine-950"
    >
      {tour.heroImage && (
        <Image
          src={tour.heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          aria-hidden
        />
      )}
      {/* Overlay para contraste del texto (guía §4.3) */}
      <div className="absolute inset-0 bg-pine-950/50" aria-hidden />
      <div className="relative z-10 mx-auto max-w-2xl px-4 py-16 text-center">
        <h1
          id="tour-hero-heading"
          className="text-3xl font-bold text-white md:text-5xl lg:text-[56px] lg:leading-[1.1]"
        >
          {tour.titulo}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
          {tour.resumen}
        </p>
        <p className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/90">
          <span className="inline-flex items-center gap-2">
            <Clock aria-hidden className="h-4 w-4" />
            Duración: {tour.duracion}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin aria-hidden className="h-4 w-4" />
            Salida desde {tour.salidaDesde}
          </span>
        </p>
        <PillLink
          href={enlaceWhatsapp(tour.mensajeWhatsapp)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 px-8 uppercase tracking-wide"
        >
          Reservar ahora
        </PillLink>
      </div>
    </section>
  );
}
