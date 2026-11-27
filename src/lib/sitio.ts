/**
 * URL pública del sitio, único punto de verdad para las URLs absolutas:
 * metadataBase del layout, canonical, Open Graph, JSON-LD, sitemap y robots.
 * Configurar NEXT_PUBLIC_SITE_URL en Railway para que las URLs absolutas no
 * apunten a localhost en producción.
 */
export const URL_SITIO =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
