import Image from "next/image";
import { PillLink } from "@/components/ui/pill";
import type { AntioquiaSummary } from "@/types/colombia";

/**
 * Foto de fondo: "Valley of Medellín - skyline" — dominio público.
 * Fuente: https://commons.wikimedia.org/wiki/File:Valley_of_Medell%C3%ADn-_skyline.jpg
 * El propietario puede reemplazar el archivo public/images/hero-medellin.jpg
 * por una foto propia sin cambiar código.
 */
const HERO_IMAGE = "/images/hero-medellin.jpg";

const formato = new Intl.NumberFormat("es-CO");

export function Hero({ summary }: { summary: AntioquiaSummary | null }) {
  const subtitle = summary
    ? `${formato.format(summary.municipalities)} municipios, ${formato.format(summary.population)} habitantes y ${formato.format(summary.surface)} km² por descubrir.`
    : "Tours, transporte turístico y experiencias en un solo lugar.";

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[520px] items-center justify-center overflow-hidden bg-pine-950"
    >
      {HERO_IMAGE && (
        <Image
          src={HERO_IMAGE}
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
          id="hero-heading"
          className="text-3xl font-bold text-white md:text-5xl lg:text-[56px] lg:leading-[1.1]"
        >
          Descubre Antioquia
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
          {subtitle}
        </p>
        <PillLink href="#tours" className="mt-8">
          Explora tours
        </PillLink>
      </div>
    </section>
  );
}
