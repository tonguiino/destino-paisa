import { Suspense } from "react";
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

/**
 * El id es dato de URL: se lee dentro de <Suspense> para que el App Shell
 * (main con el botón flotante) se comparta entre todos los enlaces al
 * detalle y solo el contenido dependiente del lugar haga streaming.
 */
export default function LugarPage({ params }: PageProps<"/lugares/[id]">) {
  return (
    <main>
      <Suspense fallback={<LugarCargando />}>
        <ContenidoLugar params={params} />
      </Suspense>
      <BotonWhatsappFlotante />
    </main>
  );
}

async function ContenidoLugar({
  params,
}: {
  params: PageProps<"/lugares/[id]">["params"];
}) {
  const { id } = await params;
  const lugar = await getLugarDetalle(Number(id));
  if (!lugar) notFound();

  return (
    <>
      <EncabezadoLugar lugar={lugar} />
      <MosaicoImagenes imagenes={lugar.mosaic} lugarId={lugar.id} />
      <ListaActividades actividades={lugar.actividades} />
      {lugar.festivales.length > 0 && <SeccionFestivales lugar={lugar} />}
      {lugar.platos.length > 0 && <SeccionPlatos lugar={lugar} />}
      <CtaVisita lugar={lugar} />
    </>
  );
}

/** Esqueleto del encabezado: aproxima el layout final para evitar shift. */
function LugarCargando() {
  return (
    <section aria-hidden="true" className="bg-surface py-12 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="h-4 w-28 rounded bg-pine-50" />
        <div className="mt-4 h-9 w-64 rounded bg-pine-50 md:h-12 md:w-96" />
        <div className="mt-2 h-4 w-40 rounded bg-pine-50" />
        <div className="mt-6 aspect-[16/9] w-full rounded-xl bg-pine-50 md:aspect-[21/9]" />
        <div className="mt-6 h-4 w-full max-w-3xl rounded bg-pine-50" />
        <div className="mt-2 h-4 w-full max-w-xl rounded bg-pine-50" />
      </div>
    </section>
  );
}
