import Image from "next/image";
import { TituloHero } from "@/components/ui/titulo-hero";
import { PillLink } from "@/components/ui/pill";

interface HeroTransporteProps {
  titulo: string;
  subtitulo: string;
  cta: string;
  /** Enlace ya construido con enlaceWhatsapp(mensaje). */
  hrefCta: string;
  /** Foto de fondo temporal; con null queda solo el fondo pine-950. */
  imagen: string | null;
}

/**
 * Hero del servicio de transporte, sobre foto con overlay (guía §4.3).
 * Espejo del hero de la home (components/home/hero.tsx). El retorno al
 * inicio lo resuelve el navbar global, no este hero.
 */
export function HeroTransporte({
  titulo,
  subtitulo,
  cta,
  hrefCta,
  imagen,
}: HeroTransporteProps) {
  return (
    <section
      aria-labelledby="transporte-hero-heading"
      className="relative isolate flex min-h-[520px] items-center justify-center overflow-hidden bg-pine-950"
    >
      {imagen && (
        <Image
          src={imagen}
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
        <TituloHero id="transporte-hero-heading" texto={titulo} />
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
          {subtitulo}
        </p>
        <PillLink
          href={hrefCta}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8"
        >
          {cta}
        </PillLink>
      </div>
    </section>
  );
}
