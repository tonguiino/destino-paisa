import { URL_SITIO } from "@/lib/sitio";
import type { Tour } from "@/data/tours";

/**
 * Datos estructurados del tour (SEO): TouristTrip del servicio y
 * BreadcrumbList de la ruta. URLs absolutas porque los rastreadores no
 * resuelven relativas. Sin `duration`: Trip no tiene esa propiedad en
 * schema.org y la duración vive en la meta visible del hero.
 */
export function JsonLdTour({ tour }: { tour: Tour }) {
  const urlTour = `${URL_SITIO}/toures/${tour.slug}`;

  const trip: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.titulo,
    description: tour.resumen,
    url: urlTour,
    provider: { "@type": "Organization", name: "Destino Paisa", url: URL_SITIO },
    touristType: "Turistas nacionales e internacionales",
    itinerary: { "@type": "Place", name: tour.ubicacion },
    tripOrigin: { "@type": "Place", name: tour.salidaDesde },
  };
  if (tour.heroImage) {
    trip.image = `${URL_SITIO}${tour.heroImage}`;
  }
  if (tour.precioDesde !== null) {
    trip.offers = {
      "@type": "Offer",
      price: tour.precioDesde,
      priceCurrency: "COP",
      url: urlTour,
    };
  }

  const migas = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: URL_SITIO },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tours",
        item: `${URL_SITIO}/toures`,
      },
      { "@type": "ListItem", position: 3, name: tour.titulo, item: urlTour },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trip) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(migas) }}
      />
    </>
  );
}
