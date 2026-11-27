import { cacheLife, cacheTag } from "next/cache";
import type {
  AntioquiaSummary,
  BlogEntry,
  Department,
  Festival,
  PlatoTipico,
  TouristicAttraction,
} from "@/types/colombia";

const API_URL = "https://api-colombia.com/api/v1";

/**
 * Antioquia es el department id 2 en api-colombia.com
 * (el id 5 es Bogotá, D.C.).
 */
const ANTIOQUIA_ID = 2;

/** Largo máximo del excerpt en las tarjetas del blog (~3 líneas). */
const EXCERPT_MAX = 160;

const TIMEOUT_MS = 8000;

async function fetchJson<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) {
    throw new Error(`api-colombia ${path} → HTTP ${res.status}`);
  }
  return (await res.json()) as T;
}

/** Normaliza espacios y corta por palabra completa, sin partir a media sílaba. */
export function truncate(text: string, max = EXCERPT_MAX): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

/** Primer URL https de la galería, o null si no hay imagen utilizable. */
function pickImage(images: string[] | undefined): string | null {
  return (
    images?.find((url) => typeof url === "string" && url.startsWith("https://")) ??
    null
  );
}

/**
 * Ficha del departamento de Antioquia para el hero de la home.
 * Devuelve null si la API falla (la home no debe romperse); en ese caso
 * la entrada se cachea poco tiempo para reintentar pronto.
 */
export async function getAntioquiaData(): Promise<AntioquiaSummary | null> {
  "use cache";
  cacheTag("colombia-api");
  try {
    const dept = await fetchJson<Department>(`/Department/${ANTIOQUIA_ID}`);
    cacheLife("days");
    return {
      name: dept.name,
      description: dept.description,
      municipalities: dept.municipalities,
      surface: dept.surface,
      population: dept.population,
    };
  } catch (error) {
    console.error("[api-colombia] Department falló:", error);
    cacheLife("minutes");
    return null;
  }
}

/**
 * Lugares turísticos de Antioquia para el blog de la home.
 * Devuelve [] si la API falla (misma estrategia de reintento corto).
 */
export async function getAntioquiaAttractions(): Promise<BlogEntry[]> {
  "use cache";
  cacheTag("colombia-api");
  try {
    const items = await fetchJson<TouristicAttraction[]>(
      `/Department/${ANTIOQUIA_ID}/touristicattractions`,
    );
    cacheLife("days");
    return items
      .filter((item) => typeof item?.name === "string" && item.name.trim().length > 0)
      .map((item) => ({
        id: item.id,
        title: item.name.trim(),
        excerpt: truncate(item.description ?? ""),
        imageUrl: pickImage(item.images),
        city: item.city?.name ?? null,
      }));
  } catch (error) {
    console.error("[api-colombia] touristicattractions falló:", error);
    cacheLife("minutes");
    return [];
  }
}

/**
 * Atracción turística completa por id, para la vista de detalle.
 * Devuelve null si la API falla o el id es inválido.
 */
export async function getAttractionById(
  id: number,
): Promise<TouristicAttraction | null> {
  "use cache";
  cacheTag("colombia-api");
  if (!Number.isInteger(id) || id <= 0) return null;
  try {
    const item = await fetchJson<TouristicAttraction>(
      `/TouristicAttraction/${id}`,
    );
    cacheLife("days");
    return item;
  } catch (error) {
    console.error(`[api-colombia] TouristicAttraction/${id} falló:`, error);
    cacheLife("minutes");
    return null;
  }
}

/** Shape parcial que la API devuelve en /TraditionalFairAndFestival. */
interface FestivalApiResponse {
  id: number;
  name: string;
  month?: string;
  cityId?: number;
  city?: { name?: string } | null;
}

/**
 * Festivales y ferias tradicionales de toda Colombia, en una sola llamada
 * cacheada que comparten las 6 páginas de detalle (se filtra por cityId
 * en la capa de composición, nunca por la ciudad de la atracción).
 */
export async function getFestivales(): Promise<Festival[]> {
  "use cache";
  cacheTag("colombia-api");
  try {
    const items = await fetchJson<FestivalApiResponse[]>(
      "/TraditionalFairAndFestival",
    );
    cacheLife("days");
    return items
      .filter((item) => typeof item?.name === "string" && item.name.trim().length > 0)
      .map((item) => ({
        id: item.id,
        name: item.name.trim(),
        month:
          typeof item.month === "string" && item.month.trim().length > 0
            ? item.month.trim()
            : null,
        city: item.city?.name?.trim() || null,
        cityId: typeof item.cityId === "number" ? item.cityId : null,
      }));
  } catch (error) {
    console.error("[api-colombia] TraditionalFairAndFestival falló:", error);
    cacheLife("minutes");
    return [];
  }
}

/** Shape parcial que la API devuelve en /TypicalDish. */
interface PlatoApiResponse {
  id: number;
  name: string;
  description?: string;
  imageUrl?: string;
  departmentId?: number;
}

/** Largo máximo de la descripción de un plato en las tarjetas pequeñas. */
const PLATO_DESC_MAX = 90;

/**
 * Platos típicos de Antioquia (departmentId 2) con su imagen.
 * Las URLs del blob de la API mezclan espacios crudos y "%20":
 * encodeURI codifica los primeros y deja intactos los segundos.
 */
export async function getPlatosAntioquia(): Promise<PlatoTipico[]> {
  "use cache";
  cacheTag("colombia-api");
  try {
    const items = await fetchJson<PlatoApiResponse[]>("/TypicalDish");
    cacheLife("days");
    return items
      .filter(
        (item) =>
          item?.departmentId === ANTIOQUIA_ID &&
          typeof item?.name === "string" &&
          item.name.trim().length > 0,
      )
      .map((item) => ({
        id: item.id,
        name: item.name.trim(),
        description: truncate(item.description ?? "", PLATO_DESC_MAX),
        imageUrl:
          typeof item.imageUrl === "string" && item.imageUrl.length > 0
            ? encodeURI(item.imageUrl)
            : null,
      }));
  } catch (error) {
    console.error("[api-colombia] TypicalDish falló:", error);
    cacheLife("minutes");
    return [];
  }
}
