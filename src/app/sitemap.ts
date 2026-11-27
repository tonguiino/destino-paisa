import type { MetadataRoute } from "next";
import { URL_SITIO } from "@/lib/sitio";
import { TOURS_SLUGS } from "@/data/tours";
import { LUGARES_IDS } from "@/data/lugares";

/**
 * Mapa del sitio público. Sin lastModified a propósito: cacheComponents
 * bloquea new Date() durante el prerender y con caché el valor quedaría
 * congelado hasta el próximo deploy.
 * Excluidas: /login y /mi-cuenta (privadas, sin valor de indexación).
 */
function ruta(path: string, priority: number): MetadataRoute.Sitemap[number] {
  return { url: `${URL_SITIO}${path}`, priority };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ruta("/", 1),
    ruta("/toures", 0.9),
    ruta("/transporte", 0.8),
    ...TOURS_SLUGS.map((slug) => ruta(`/toures/${slug}`, 0.7)),
    ...LUGARES_IDS.map((id) => ruta(`/lugares/${id}`, 0.6)),
  ];
}
