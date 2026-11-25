import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LUGARES_IDS, LUGAR_POR_ID } from "@/data/lugares";
import { getLugarDetalle } from "@/lib/lugares";
import { EncabezadoLugar } from "@/components/lugares/encabezado-lugar";
import { MosaicoImagenes } from "@/components/lugares/mosaico-imagenes";
import { ListaActividades } from "@/components/lugares/lista-actividades";
import { SeccionFestivales } from "@/components/lugares/seccion-festivales";
import { SeccionPlatos } from "@/components/lugares/seccion-platos";
import { CtaVisita } from "@/components/lugares/cta-visita";
import { BotonWhatsappFlotante } from "@/components/boton-whatsapp";

/**
 * Solo los ids de la curaduría se prerenderizan: un fallo de la API en build
 * no rompe la generación y los ids desconocidos quedan fuera del catálogo
 * de rutas (con cacheComponents, un param no prerenderizado responde 404).
 */
export function generateStaticParams(): { id: string }[] {
  return LUGARES_IDS.map((id) => ({ id: String(id) }));
}

export async function generateMetadata({
  params,
}: PageProps<"/lugares/[id]">): Promise<Metadata> {
  const { id } = await params;
  const curado = LUGAR_POR_ID.get(Number(id));
  if (!curado) return { title: "Lugar no encontrado" };
  return {
    title: curado.nombre,
    description: curado.intro,
    openGraph: {
      title: curado.nombre,
      description: curado.intro,
      type: "article",
      images: [{ url: curado.heroImage, alt: curado.heroAlt }],
    },
  };
}

export default async function LugarPage({
  params,
}: PageProps<"/lugares/[id]">) {
  const { id } = await params;
  const lugar = await getLugarDetalle(Number(id));
  if (!lugar) notFound();

  return (
    <main>
      <EncabezadoLugar lugar={lugar} />
      <MosaicoImagenes imagenes={lugar.mosaic} />
      <ListaActividades actividades={lugar.actividades} />
      {lugar.festivales.length > 0 && <SeccionFestivales lugar={lugar} />}
      {lugar.platos.length > 0 && <SeccionPlatos lugar={lugar} />}
      <CtaVisita lugar={lugar} />
      <BotonWhatsappFlotante />
    </main>
  );
}
