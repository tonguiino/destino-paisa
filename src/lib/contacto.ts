/**
 * Punto único de contacto del sitio.
 *
 * Si el número cambia, editar SOLO este archivo: todos los botones de
 * WhatsApp (flotante, transporte turístico, y los que se agreguen a futuro)
 * construyen su enlace desde aquí.
 */
export const CONTACTO = {
  /**
   * Número de WhatsApp en formato internacional sin "+", sin espacios ni
   * guiones (Colombia: 57 + 10 dígitos del celular).
   * Pendiente: reemplazar por el número real del propietario.
   */
  whatsapp: "573008166510",
} as const;

/**
 * Enlace directo a conversación de WhatsApp, con mensaje opcional
 * precargado en el chat (codificado para URL).
 */
export function enlaceWhatsapp(mensaje?: string): string {
  const base = `https://wa.me/${CONTACTO.whatsapp}`;
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base;
}
