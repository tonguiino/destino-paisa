import { PillLink } from "@/components/ui/pill";
import { ListaChecks } from "@/components/ui/lista-checks";

interface PorQueElegirnosProps {
  heading: string;
  items: string[];
  cta: string;
  /** Enlace ya construido con enlaceWhatsapp(mensaje). */
  hrefCta: string;
}

/** "Por qué elegirnos": checklist de diferenciales con CTA de cierre. */
export function PorQueElegirnos({
  heading,
  items,
  cta,
  hrefCta,
}: PorQueElegirnosProps) {
  return (
    <section
      aria-labelledby="beneficios-heading"
      className="bg-surface py-12 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <h2
          id="beneficios-heading"
          className="text-2xl font-bold text-pine-800 md:text-4xl"
        >
          {heading}
        </h2>
        <div className="mt-8 max-w-xl">
          <ListaChecks items={items} />
        </div>
        <PillLink
          href={hrefCta}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10"
        >
          {cta}
        </PillLink>
      </div>
    </section>
  );
}
