import { cacheLife, cacheTag } from "next/cache";
import type {
  AntioquiaSummary,
  BlogEntry,
  Department,
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
function truncate(text: string, max = EXCERPT_MAX): string {
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
