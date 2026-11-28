import Image from "next/image";
import { ChromaticTextReveal } from "@/components/motion/chromatic-text-reveal";
import { EstadisticasHero } from "@/components/home/estadisticas-hero";
import { TituloHero } from "@/components/ui/titulo-hero";
import { PillLink } from "@/components/ui/pill";
import { TOURS } from "@/data/tours";
import type { AntioquiaSummary } from "@/types/colombia";

/**
 * Foto de fondo: panorama aéreo propio de Medellín — material del
 * propietario, sin atribución (ver public/images/lugares/creditos.md).
 * Para cambiarla basta reemplazar el archivo apuntado por HERO_IMAGE.
 */
const HERO_IMAGE = "/images/lugares/medellin/medellin-hero.jpg";

/** Destinos de la curaduría actual; se mantiene sincrónico con los datos. */
const DESTINOS = [...new Set(TOURS.map((tour) => tour.destino))];

/**
 * Paleta de la marca para el barrido cromático (guía §1, sin el arcoíris
 * default de beUI): hunter-300, cream-100 y paprika-500 — el paprika es el
 * único acento cálido de esta vista (§1.4).
 */
const PALETA_CROMATICA = ["#A5C993", "#FFF8E1", "#CF5C36"];

export function Hero({ summary }: { summary: AntioquiaSummary | null }) {
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
        {/* Kicker rotante de destinos: el H1 no rota para no debilitar SEO. */}
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/80">
          <ChromaticTextReveal
            prefix="Tours a"
            words={DESTINOS}
            colors={PALETA_CROMATICA}
            foregroundColor="#ffffff"
          />
        </p>
        <TituloHero id="hero-heading" texto="Descubre Antioquia" />
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
          {summary ? (
            <EstadisticasHero summary={summary} />
          ) : (
            "Tours, transporte turístico y experiencias en un solo lugar."
          )}
        </p>
        <PillLink href="#tours" className="mt-8">
          Explora tours
        </PillLink>
      </div>
    </section>
  );
}
