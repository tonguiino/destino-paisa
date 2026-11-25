import { PillLink } from "@/components/ui/pill";

interface CtaTouresProps {
  heading: string;
  parrafo: string;
  cta: string;
  /** Enlace ya construido con enlaceWhatsapp(mensaje). */
  hrefCta: string;
}

/** Banda de cierre de conversión del listado de tours. */
export function CtaToures({ heading, parrafo, cta, hrefCta }: CtaTouresProps) {
  return (
    <section
      aria-labelledby="cta-toures-heading"
      className="bg-pine-50 py-12 md:py-16"
    >
      <div className="mx-auto w-full max-w-3xl px-4 text-center md:px-6">
        <h2
          id="cta-toures-heading"
          className="text-2xl font-bold text-pine-800 md:text-4xl"
        >
          {heading}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-800">{parrafo}</p>
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
