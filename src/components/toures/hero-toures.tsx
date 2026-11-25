import Image from "next/image";
import { PillLink } from "@/components/ui/pill";

interface HeroTouresProps {
  titulo: string;
  subtitulo: string;
  cta: string;
  /** Enlace del CTA: ancla al catálogo o URL externa. */
  hrefCta: string;
  /** Foto de fondo; con null queda solo el fondo pine-950. */
  imagen: string | null;
}

/**
 * Hero del listado de tours, sobre foto con overlay (guía §4.3). Espejo del
 * hero de transporte (components/transporte/hero-transporte.tsx); el CTA
 * baja al catálogo, la conversión la cubren el botón flotante y las tarjetas.
 */
export function HeroToures({
  titulo,
  subtitulo,
  cta,
  hrefCta,
  imagen,
}: HeroTouresProps) {
  return (
    <section
      aria-labelledby="toures-hero-heading"
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
        <h1
          id="toures-hero-heading"
          className="text-3xl font-bold text-white md:text-5xl lg:text-[56px] lg:leading-[1.1]"
        >
          {titulo}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
          {subtitulo}
        </p>
        <PillLink href={hrefCta} className="mt-8">
          {cta}
        </PillLink>
      </div>
    </section>
  );
}
