import { CONTACTO } from "@/lib/contacto";

/**
 * Datos del responsable del sitio para los documentos legales.
 *
 * ÚNICO archivo a editar cuando se definan los datos reales: los marcadores
 * entre corchetes son texto pendiente de completar y se interpolan en
 * terminos.ts, privacidad.ts y cookies.ts. Ubicarlos de un vistazo:
 *   grep "\[" src/data/legal
 */
export const RESPONSABLE = {
  razonSocial: "[RAZÓN SOCIAL]",
  nit: "[NIT]",
  correo: "[CORREO DE CONTACTO]",
  direccion: "[DIRECCIÓN FÍSICA EN COLOMBIA]",
  ciudad: "[CIUDAD DE DOMICILIO]",
} as const;

/** Autoridad colombiana de control en datos personales y consumidor. */
export const AUTORIDAD_CONTROL =
  "Superintendencia de Industria y Comercio (SIC)";

/** Marco normativo colombiano aplicable al sitio, por materia. */
export const MARCO_LEGAL = {
  datosPersonales: "Ley 1581 de 2012 y el Decreto 1377 de 2013",
  consumidor: "Estatuto del Consumidor, Ley 1480 de 2011",
  comercioElectronico: "Ley 527 de 1999",
} as const;

/**
 * Número de WhatsApp de CONTACTO en formato legible (+57 XXX XXX XXXX) para
 * citarlo dentro de los documentos, sin duplicar el dato fuente.
 */
export const WHATSAPP_LEGIBLE = `+57 ${CONTACTO.whatsapp.slice(2, 5)} ${CONTACTO.whatsapp.slice(5, 8)} ${CONTACTO.whatsapp.slice(8)}`;
