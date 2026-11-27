import type { LightboxImage } from "@/components/motion/morphing-lightbox";
import type { ImagenMosaico } from "@/types/colombia";

/** Número fijo de slots de las galerías (guía §4.6: grid 2×2). */
export const SLOTS_GALERIA = 4;

/**
 * Dimensiones declaradas para el visor. Los datos de galería no traen
 * dimensiones intrínsecas y beUI las exige para preservar el aspecto durante
 * el morph del thumbnail. Como los tiles son cuadrados (guía §4.6), se
 * declara 1:1.
 *
 * Limitación conocida: si la foto real no es cuadrada, el visor abierto puede
 * mostrar franjas. Solución futura: agregar width/height opcionales a
 * ImagenMosaico y preferirlos aquí sobre la constante.
 */
const DIMENSIONES_VISOR = 1200;

/**
 * Completa la lista hasta los 4 slots fijos de la guía: los faltantes son
 * placeholders "Foto próximamente".
 */
export function completarSlots(slots: ImagenMosaico[]): ImagenMosaico[] {
  const completados = [...slots];
  while (completados.length < SLOTS_GALERIA) {
    completados.push({ src: null, alt: "" });
  }
  return completados;
}

/**
 * Convierte slots de mosaico en imágenes del visor. Los slots sin foto se
 * descartan: el placeholder nunca abre el lightbox. Los ids derivan del
 * índice original del slot con un prefijo de contexto (ej. "tour-guatape"),
 * deterministas para que el HTML del server y el de hidratación coincidan.
 */
export function aLightboxImages(
  slots: ImagenMosaico[],
  contexto: string,
): LightboxImage[] {
  return slots
    .map((slot, index) => ({ slot, index }))
    .filter(({ slot }) => slot.src !== null)
    .map(({ slot, index }) => ({
      id: `${contexto}-${index}`,
      src: slot.src as string,
      alt: slot.alt || contexto,
      width: DIMENSIONES_VISOR,
      height: DIMENSIONES_VISOR,
    }));
}
