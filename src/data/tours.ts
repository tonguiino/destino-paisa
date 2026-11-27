import type { ImagenMosaico } from "@/types/colombia";

/**
 * Curaduría local de los tours del negocio.
 *
 * Mismo criterio que src/data/transporte.ts: un único punto de edición del
 * copy y las condiciones de cada tour. Los slugs son parte de la URL pública
 * (/toures/[slug]) y alimentan generateStaticParams: cambiar uno rompe la
 * URL indexada, así que solo se editan con decisión tomada con el propietario.
 *
 * Los mensajes de WhatsApp se convierten en enlaces con enlaceWhatsapp()
 * (lib/contacto.ts); cada tour lleva el suyo para distinguir las
 * conversaciones que llegan.
 *
 * Sin precios aún (precioDesde null): la vista muestra "Sujeto a
 * cotización". Las imágenes siguen el contrato de ImagenLugar
 * (string | null) y la galería reutiliza ImagenMosaico; los slots sin foto
 * propia renderizan el tile "Foto próximamente".
 */
export type Tour = {
  /** Segmento estable de la URL pública: /toures/[slug]. */
  slug: string;
  /** Nombre comercial: H1, title, og:title y name del JSON-LD. */
  titulo: string;
  /** Lugar de la experiencia para el heading "¿Por qué visitar X?". */
  destino: string;
  /** Ubicación legible para la meta de la tarjeta y el JSON-LD. */
  ubicacion: string;
  /** Subtítulo del hero; también description SEO y texto de la tarjeta. */
  resumen: string;
  /** Párrafos de la sección "¿Por qué visitar X?". */
  porQue: string[];
  duracion: string;
  /** Punto de partida: meta del hero, tarjeta y tripOrigin del JSON-LD. */
  salidaDesde: string;
  dificultad: string;
  edadMinima: string;
  /** Se muestran unidas con comas en "Información adicional". */
  recomendaciones: string[];
  clima: string;
  incluye: string[];
  noIncluye: string[];
  /** Mosaico 2×2 de la vista de detalle; se normaliza a 4 slots. */
  galeria: ImagenMosaico[];
  /** Foto de fondo del hero; con null queda el fondo pine-950 liso. */
  heroImage: string | null;
  /** Vacío cuando heroImage es null. */
  heroAlt: string;
  /** null = sin precio publicado; se muestra "Sujeto a cotización". */
  precioDesde: number | null;
  mensajeWhatsapp: string;
};

export const TOURS: Tour[] = [
  {
    slug: "guatape-piedra-del-penol",
    titulo: "Tour Guatapé y Piedra del Peñol",
    destino: "Guatapé",
    ubicacion: "Guatapé, Antioquia",
    resumen:
      "Descubre uno de los paisajes más icónicos de Colombia: el embalse, el pueblo de los zócalos y la subida a la Piedra del Peñol en un solo día.",
    porQue: [
      "Un recorrido perfecto para conectar con la naturaleza: conocerás uno de los pueblos más coloridos del mundo y subirás los escalones de la Piedra del Peñol para disfrutar de una vista inolvidable sobre el embalse.",
      "Ideal para escaparse un día completo desde Medellín sin renunciar a la comodidad: transporte redondo, guía certificado y tiempo libre para recorrer el malecón y probar la gastronomía local.",
    ],
    duracion: "10 a 12 horas",
    salidaDesde: "Medellín",
    dificultad: "Baja – media",
    edadMinima: "5 años",
    recomendaciones: ["Bloqueador", "Ropa cómoda", "Hidratación"],
    clima: "Templado – cálido",
    incluye: [
      "Transporte ida y regreso",
      "Guía turístico certificado",
      "Recorrido por Guatapé",
      "Visita a la Piedra del Peñol",
      "Seguro de viaje",
    ],
    noIncluye: [
      "Alimentación",
      "Ingreso a la Piedra del Peñol (tiquete opcional, se paga en el lugar)",
    ],
    galeria: [
      {
        src: "/images/lugares/guatape/piedra-vista-cerca.jpg",
        alt: "Escalera en zigzag de la Piedra del Peñol vista desde la base",
      },
      {
        src: "/images/lugares/guatape/Sombrillas_guatape.jpg",
        alt: "Calle de los Sombrillas en Guatapé: sombrillas de colores sobre el empedrado",
      },
      {
        src: "/images/lugares/guatape/tiendas_guatape.jpg",
        alt: "Calle comercial de Guatapé con fachadas y zócalos de colores",
      },
      {
        src: "/images/lugares/guatape/represa-aerea.jpg",
        alt: "Vista aérea del embalse de Peñol-Guatapé entre nubes",
      },
    ],
    heroImage: "/images/lugares/guatape/hero-tour-guatape.jpg",
    heroAlt:
      "Vista panorámica del embalse de Peñol-Guatapé con el pueblo entre las montañas",
    precioDesde: null,
    mensajeWhatsapp: "Hola, quiero reservar el Tour Guatapé y Piedra del Peñol",
  },
  {
    slug: "comuna-13",
    titulo: "Tour Comuna 13",
    destino: "la Comuna 13",
    ubicacion: "Medellín, Antioquia",
    resumen:
      "Recorre el barrio que se convirtió en símbolo de transformación: grafitis gigantes, escaleras eléctricas e historias reales contadas por quienes vivieron el cambio.",
    porQue: [
      "La Comuna 13 pasó de ser uno de los barrios más golpeados por la violencia a un escenario de arte y memoria: cada grafiti cuenta un pedazo de la historia más conmovedora de Medellín.",
      "El recorrido lo lideran guías locales que vivieron la transformación del barrio San Javier, con paradas en los puntos clave y tiempo para las artesanías y cafés del sector.",
    ],
    duracion: "3 horas",
    salidaDesde: "Medellín",
    dificultad: "Baja",
    edadMinima: "Todas las edades",
    recomendaciones: ["Bloqueador", "Zapatos cómodos", "Efectivo para artesanías"],
    clima: "Templado",
    incluye: [
      "Guía local certificado",
      "Recorrido por los grafitis del barrio San Javier",
      "Uso de las escaleras eléctricas",
      "Seguro de viaje",
    ],
    noIncluye: [
      "Transporte hasta el punto de encuentro",
      "Alimentación",
      "Propinas",
    ],
    galeria: [],
    heroImage: "/images/hero-medellin.jpg",
    heroAlt: "Vista panorámica del valle de Medellín al atardecer",
    precioDesde: null,
    mensajeWhatsapp: "Hola, quiero reservar el Tour Comuna 13",
  },
  {
    slug: "discotecas-medellin",
    titulo: "Tour de Discotecas",
    destino: "Medellín",
    ubicacion: "Medellín, Antioquia",
    resumen:
      "Una noche completa por los mejores sectores rumberos de Medellín: transporte redondo, entradas incluidas y anfitrión que guía la ruta de principio a fin.",
    porQue: [
      "Medellín tiene una de las vidas nocturnas más vibrantes de Colombia: la Zona Rosa de El Poblado, La 70 y los barrios tradicionales ofrecen ambientes para todos los gustos en una sola salida.",
      "Sin preocuparte por conducir ni por las listas de entrada: la ruta, el transporte y el acompañamiento van incluidos para que la noche sea solo disfrutar.",
    ],
    duracion: "6 a 8 horas",
    salidaDesde: "Medellín",
    dificultad: "Baja",
    edadMinima: "18 años",
    recomendaciones: ["Documento de identidad", "Vestimenta para salir", "Efectivo para consumos"],
    clima: "Templado – cálido",
    incluye: [
      "Transporte ida y regreso",
      "Anfitrión durante toda la ruta",
      "Entrada a las discotecas seleccionadas",
      "Seguro de viaje",
    ],
    noIncluye: [
      "Consumos dentro de las discotecas",
      "Alimentación",
    ],
    galeria: [],
    heroImage: null,
    heroAlt: "",
    precioDesde: null,
    mensajeWhatsapp: "Hola, quiero reservar el Tour de Discotecas",
  },
];

export const TOUR_POR_SLUG: ReadonlyMap<string, Tour> = new Map(
  TOURS.map((tour) => [tour.slug, tour]),
);

export const TOURS_SLUGS: readonly string[] = TOURS.map((tour) => tour.slug);
