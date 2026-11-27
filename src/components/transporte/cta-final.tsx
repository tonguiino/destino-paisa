import { PillLink } from "@/components/ui/pill";

interface CtaFinalProps {
  heading: string;
  parrafo: string;
  cta: string;
  /** Enlace ya construido con enlaceWhatsapp(mensaje). */
  hrefCta: string;
}

/** Banda de cierre de conversión de la vista de transporte. */
export function CtaFinal({ heading, parrafo, cta, hrefCta }: CtaFinalProps) {
  return (
    <section
      aria-labelledby="cta-final-heading"
      className="bg-surface py-12 md:py-16"
    >
      <div className="mx-auto w-full max-w-3xl px-4 text-center md:px-6">
        <h2
          id="cta-final-heading"
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
