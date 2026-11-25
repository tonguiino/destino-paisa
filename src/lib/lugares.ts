import { LUGAR_POR_ID } from "@/data/lugares";
import {
  getAntioquiaAttractions,
  getAttractionById,
  getFestivales,
  getPlatosAntioquia,
  truncate,
} from "@/lib/api-colombia";
import type {
  BlogEntry,
  ImagenMosaico,
  LugarDetalle,
} from "@/types/colombia";

/** Slots del mosaico de la vista de detalle (guía §4.6: grid 2×2). */
const MOSAICO_SLOTS = 4;

/** Máximo de festivales y platos mostrados por vista de detalle. */
const FESTIVALES_MAX = 3;
const PLATOS_MAX = 3;

/** Largo máximo de la descripción de la API en el detalle (~2 párrafos). */
const DESCRIPTION_MAX = 600;

/**
 * Entradas del blog de la home con la curaduría local aplicada:
 * nombres corregidos, ciudad mostrada coherente e imagen local verificada
 * (la imagen de la API está rota en 4 de los 6 lugares).
 */
export async function getEntradasBlog(): Promise<BlogEntry[]> {
  const entradas = await getAntioquiaAttractions();
  return entradas.map((entrada) => {
    const curado = LUGAR_POR_ID.get(entrada.id);
    if (!curado) return entrada;
    return {
      ...entrada,
      title: curado.nombre,
      city: curado.ciudad,
      imageUrl: curado.heroImage,
    };
  });
}

/**
 * View model completo de la vista de detalle: curaduría local + datos vivos
 * de api-colombia (descripción, festivales por municipio y platos típicos).
 * Devuelve null para ids fuera de la curaduría (la página hace notFound()).
 */
export async function getLugarDetalle(id: number): Promise<LugarDetalle | null> {
  const curado = LUGAR_POR_ID.get(id);
  if (!curado) return null;

  const [atraccion, festivalesTodas, platos] = await Promise.all([
    getAttractionById(id),
    getFestivales(),
    getPlatosAntioquia(),
  ]);

  // El cityId curado es autoritativo: la API asocia la atracción "Guatapé"
  // a Medellín, así que filtrar por atraccion.city.id mezclaría municipios.
  const festivales = festivalesTodas
    .filter((festival) => festival.cityId === curado.cityId)
    .slice(0, FESTIVALES_MAX);

  // Mosaico de exactamente 4 slots: hero + extras curadas + placeholders.
  const mosaic: ImagenMosaico[] = [
    { src: curado.heroImage, alt: curado.heroAlt },
    ...curado.mosaico,
  ].slice(0, MOSAICO_SLOTS);
  while (mosaic.length < MOSAICO_SLOTS) {
    mosaic.push({ src: null, alt: "" });
  }

  return {
    id: curado.id,
    title: curado.nombre,
    city: curado.ciudad,
    intro: curado.intro,
    description: atraccion?.description
      ? truncate(atraccion.description, DESCRIPTION_MAX)
      : null,
    heroImage: curado.heroImage,
    heroAlt: curado.heroAlt,
    mosaic,
    actividades: curado.actividades,
    festivales,
    platos: platos.slice(0, PLATOS_MAX),
  };
}
