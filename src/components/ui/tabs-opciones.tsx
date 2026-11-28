"use client";

import { CalendarDays, Clock, MapPin } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/motion/tabs";
import type { OpcionContratacion } from "@/data/transporte";
import { LABELS_TABS } from "@/lib/labels-es";

/** Íconos del mockup por opción (deuda declarada en la vista): ubicación, reloj y calendario (guía §8). */
const ICONOS: Record<string, typeof MapPin | undefined> = {
  trayecto: MapPin,
  horas: Clock,
  personalizado: CalendarDays,
};

interface TabsOpcionesProps {
  items: OpcionContratacion[];
}

/**
 * Opciones de contratación como pestañas de beUI: el tablist mantiene los
 * títulos siempre visibles y el panel activo renderiza la tarjeta de la
 * marca. Los panels inactivos quedan montados pero hidden, así que las
 * descripciones siguen en el HTML prerenderizado (SEO intacto).
 */
export function TabsOpciones({ items }: TabsOpcionesProps) {
  return (
    <Tabs defaultValue={items[0]?.id} labels={LABELS_TABS}>
      {/* Centrado del tablist: wrapperClassName no sirve aquí porque el
          viewport interno del TabsList es w-full (centrar el root no mueve
          nada). mx-auto sobre el tablist sí lo centra, y al desbordar en
          móvil los márgenes auto colapsan a 0: queda alineado a la
          izquierda y el scroll con flechas sigue funcionando igual. */}
      <TabsList className="mx-auto flex">
        {items.map((item) => {
          const Icono = ICONOS[item.id];
          return (
            <TabsTrigger
              key={item.id}
              value={item.id}
              icon={Icono && <Icono aria-hidden className="h-4 w-4" />}
              className="focus-visible:ring-2 focus-visible:ring-hunter-300"
            >
              {item.titulo}
            </TabsTrigger>
          );
        })}
      </TabsList>
      {items.map((item) => (
        <TabsContent key={item.id} value={item.id} className="mt-8 md:mt-10">
          <article className="mx-auto max-w-2xl rounded-2xl border border-ink-100 bg-surface p-6 text-left">
            <h3 className="text-lg font-semibold text-ink-800 md:text-xl">
              {item.titulo}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink-800">
              {item.descripcion}
            </p>
          </article>
        </TabsContent>
      ))}
    </Tabs>
  );
}
