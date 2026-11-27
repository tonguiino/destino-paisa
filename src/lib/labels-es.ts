import type { ImageViewerMessages } from "@/components/motion/morphing-lightbox";
import type { TabsMessages } from "@/components/motion/tabs";

/**
 * Etiquetas en español para los componentes beUI con mensajes internos.
 * Se pasan por el prop `labels` de cada instancia (los valores son datos
 * serializables, así que cruzan la frontera server -> client sin envolver
 * el layout raíz en un LocaleProvider).
 */

/** Mensajes del visor de imágenes (morphing-lightbox). */
export const LABELS_VISOR: Partial<ImageViewerMessages> = {
  label: "Galería de imágenes",
  open: "Abrir {alt}",
  counter: "{current} / {total}",
  close: "Cerrar visor",
  previous: "Imagen anterior",
  next: "Imagen siguiente",
  loadError: "No se pudo cargar esta imagen.",
  zoomIn: "Acercar",
  zoomOut: "Alejar",
  panHelp:
    "Con la imagen ampliada, arrástrala para moverla, o mantén el foco en este control y usa las flechas del teclado.",
};

/** Mensajes de accesibilidad de la lista de pestañas (tabs). */
export const LABELS_TABS: Partial<TabsMessages> = {
  scrollLeft: "Desplazar pestañas a la izquierda",
  scrollRight: "Desplazar pestañas a la derecha",
};
