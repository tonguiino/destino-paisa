import type { MetadataRoute } from "next";
import { URL_SITIO } from "@/lib/sitio";

/** robots.txt público: todo el sitio indexable + referencia al sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${URL_SITIO}/sitemap.xml`,
  };
}
