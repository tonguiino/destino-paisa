import { TabsOpciones } from "@/components/ui/tabs-opciones";
import type { OpcionContratacion } from "@/data/transporte";

interface OpcionesContratacionProps {
  heading: string;
  bajada: string;
  items: OpcionContratacion[];
}

/**
 * Opciones de contratación como pestañas de beUI sobre pine-50 (guía
 * §4.1/§4.2): el tablist muestra los tres títulos siempre visibles y el
 * panel activo renderiza la tarjeta de la marca. Sin botón por opción: la
 * conversión se resuelve con los CTAs de WhatsApp de las demás secciones.
 */
export function OpcionesContratacion({
  heading,
  bajada,
  items,
}: OpcionesContratacionProps) {
  return (
    <section
      aria-labelledby="opciones-heading"
      className="bg-pine-50 py-12 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <h2
          id="opciones-heading"
          className="text-center text-2xl font-bold text-pine-800 md:text-4xl"
        >
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-ink-800">
          {bajada}
        </p>
        <div className="mt-10 md:mt-12">
          <TabsOpciones items={items} />
        </div>
      </div>
    </section>
  );
}
