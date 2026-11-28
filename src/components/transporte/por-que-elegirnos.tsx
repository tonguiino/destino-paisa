import { GaleriaLightbox } from "@/components/ui/galeria-lightbox";
import { PillLink } from "@/components/ui/pill";
import { ListaChecks } from "@/components/ui/lista-checks";
import type { ImagenMosaico } from "@/types/colombia";

interface PorQueElegirnosProps {
  heading: string;
  items: string[];
  cta: string;
  /** Enlace ya construido con enlaceWhatsapp(mensaje). */
  hrefCta: string;
  /** Mosaico 2×2 de destinos que acompaña el checklist (guía §4.6). */
  mosaico: ImagenMosaico[];
  /** Pie de foto del mosaico y nombre accesible del visor. */
  etiquetaMosaico: string;
}

/** "Por qué elegirnos": checklist de diferenciales con mosaico de destinos y CTA de cierre. */
export function PorQueElegirnos({
  heading,
  items,
  cta,
  hrefCta,
  mosaico,
  etiquetaMosaico,
}: PorQueElegirnosProps) {
  return (
    <section
      aria-labelledby="beneficios-heading"
      className="bg-surface py-12 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <div>
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
          <div>
            <GaleriaLightbox
              slots={mosaico}
              contexto="transporte-beneficios"
              label={etiquetaMosaico}
            />
            <p className="mt-3 text-sm text-ink-500">{etiquetaMosaico}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
