import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TOUR_POR_SLUG, TOURS_SLUGS } from "@/data/tours";
import { HeroTour } from "@/components/toures/hero-tour";
import { PorQueVisitarTour } from "@/components/toures/por-que-visitar-tour";
import { IncluyeTour } from "@/components/toures/incluye-tour";
import { GaleriaInformacionTour } from "@/components/toures/galeria-informacion-tour";
import { JsonLdTour } from "@/components/toures/json-ld-tour";
import { BotonWhatsappFlotante } from "@/components/boton-whatsapp";

/**
 * Solo los slugs de la curaduría se prerenderizan: el catálogo de tours es
 * cerrado y los slugs desconocidos quedan fuera del listado de rutas (con
 * cacheComponents, un param no prerenderizado responde 404).
 */
export function generateStaticParams(): { slug: string }[] {
  return TOURS_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/toures/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const tour = TOUR_POR_SLUG.get(slug);
  if (!tour) return { title: "Tour no encontrado" };
  return {
    title: tour.titulo,
    description: tour.resumen,
    alternates: { canonical: `/toures/${tour.slug}` },
    openGraph: {
      title: tour.titulo,
      description: tour.resumen,
      type: "article",
      url: `/toures/${tour.slug}`,
      images: tour.heroImage
        ? [{ url: tour.heroImage, alt: tour.heroAlt }]
        : undefined,
    },
  };
}

/**
 * El slug es dato de URL: se lee dentro de <Suspense> para que el App Shell
 * (main con el botón flotante) se comparta entre todos los enlaces al
 * detalle y solo el contenido dependiente del tour haga streaming.
 */
export default function TourPage({ params }: PageProps<"/toures/[slug]">) {
  return (
    <main>
      <Suspense fallback={<TourCargando />}>
        <ContenidoTour params={params} />
      </Suspense>
      <BotonWhatsappFlotante />
    </main>
  );
}

async function ContenidoTour({
  params,
}: {
  params: PageProps<"/toures/[slug]">["params"];
}) {
  const { slug } = await params;
  const tour = TOUR_POR_SLUG.get(slug);
  if (!tour) notFound();

  return (
    <>
      <JsonLdTour tour={tour} />
      <HeroTour tour={tour} />
      <PorQueVisitarTour destino={tour.destino} parrafos={tour.porQue} />
      <IncluyeTour incluye={tour.incluye} noIncluye={tour.noIncluye} />
      <GaleriaInformacionTour tour={tour} />
    </>
  );
}

/** Esqueleto del hero: aproxima el layout final para evitar shift. */
function TourCargando() {
  return (
    <section aria-hidden="true" className="bg-pine-950">
      <div className="mx-auto flex min-h-[520px] max-w-2xl flex-col items-center justify-center px-4 py-16 text-center">
        <div className="h-10 w-72 rounded bg-white/10 md:h-14 md:w-96" />
        <div className="mt-4 h-4 w-full max-w-md rounded bg-white/10" />
        <div className="mt-6 h-4 w-52 rounded bg-white/10" />
        <div className="mt-8 h-12 w-44 rounded-full bg-white/10" />
      </div>
    </section>
  );
}
