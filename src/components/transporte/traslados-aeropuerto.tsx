import { PillLink } from "@/components/ui/pill";
import { ListaChecks } from "@/components/ui/lista-checks";

interface TrasladosAeropuertoProps {
  heading: string;
  parrafos: string[];
  items: string[];
  cta: string;
  /** Enlace ya construido con enlaceWhatsapp(mensaje). */
  hrefCta: string;
}

/** Traslados al aeropuerto: descripción centrada, checklist y CTA propio. */
export function TrasladosAeropuerto({
  heading,
  parrafos,
  items,
  cta,
  hrefCta,
}: TrasladosAeropuertoProps) {
  return (
    <section
      aria-labelledby="traslados-heading"
      className="bg-pine-50 py-12 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 text-center md:px-6">
        <h2
          id="traslados-heading"
          className="text-2xl font-bold text-pine-800 md:text-4xl"
        >
          {heading}
        </h2>
        {parrafos.map((parrafo) => (
          <p
            key={parrafo}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-800"
          >
            {parrafo}
          </p>
        ))}
        <div className="mx-auto mt-8 max-w-md text-left">
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
