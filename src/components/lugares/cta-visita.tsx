import { PillLink } from "@/components/ui/pill";
import { enlaceWhatsapp } from "@/lib/contacto";
import type { LugarDetalle } from "@/types/colombia";

/**
 * Cierre de la vista de detalle: llamada a la acción hacia WhatsApp
 * con mensaje precargado personalizado por lugar (número único en
 * src/lib/contacto.ts). Único botón de la vista.
 */
export function CtaVisita({ lugar }: { lugar: LugarDetalle }) {
  return (
    <section className="bg-pine-50 py-12 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <h2 className="text-2xl font-bold text-pine-800 md:text-4xl">
          Planea tu visita a {lugar.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-800">
          Transporte turístico, tours y experiencias a medida para conocer este
          destino con la comodidad de un plan organizado.
        </p>
        <PillLink
          href={enlaceWhatsapp(
            `Hola, quiero información sobre un tour a ${lugar.title}`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8"
        >
          Consulta por este destino
        </PillLink>
      </div>
    </section>
  );
}
