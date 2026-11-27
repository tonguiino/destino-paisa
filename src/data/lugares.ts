import type { LugarCurado } from "@/types/colombia";

/**
 * Curaduría local de los lugares del blog de la home.
 *
 * Complementa los datos de api-colombia con:
 * - Nombres corregidos (la API trae "Jericó " con espacio, "Hacienda napoles" sin tilde).
 * - cityId autoritativo para consultar festivales: la API asocia mal ciudades
 *   (la atracción "Guatapé" apunta a Medellín, el id real es 62).
 * - Imágenes locales verificadas (ver public/images/lugares/creditos.md) en
 *   lugar de las URLs de la API, varias de ellas rotas.
 * - Intros editoriales y actividades curadas para la sección "Cosas por hacer".
 *
 * El campo `mosaico` lista SOLO los tiles adicionales al hero: con el hero se
 * compone el mosaico de 4 slots de la vista de detalle; los slots faltantes
 * (fotos propias pendientes) quedan como placeholder "Foto próximamente".
 */
export const LUGARES: LugarCurado[] = [
  {
    id: 7,
    nombre: "Guatapé",
    ciudad: "Guatapé",
    cityId: 62,
    intro:
      "El pueblo de los zócalos a orillas del embalse: color, piedra y agua en uno de los destinos más visitados del oriente antioqueño.",
    heroImage: "/images/lugares/guatape/casa_zocalo.jpg",
    heroAlt: "Fachada de Guatapé con zócalos coloridos frente a la calle empedrada",
    mosaico: [
      {
        src: "/images/lugares/guatape/piedra_lejos.jpg",
        alt: "La Piedra del Peñol vista a lo lejos, entre las casas de Guatapé",
      },
      {
        src: "/images/lugares/guatape/represa-aerea.jpg",
        alt: "Vista aérea del embalse de Peñol-Guatapé entre nubes",
      },
      {
        src: "/images/lugares/guatape/Sombrillas_guatape.jpg",
        alt: "Calle de las Sombrillas en Guatapé, un rincón colorido y turístico para recorrer",
      },
    ],
    actividades: [
      {
        titulo: "Subir la Piedra del Peñol",
        descripcion:
          "749 escalones encajados en la grieta del monolito terminan en la vista panorámica más famosa de Antioquia: el embalse completo a los pies.",
      },
      {
        titulo: "Buscar los zócalos",
        descripcion:
          "Los tablares decorados convierten cada fachada en un museo al aire libre; el recorrido a pie por el centro es imperdible.",
      },
      {
        titulo: "Navegar el embalse",
        descripcion:
          "Tour en lancha entre islotes, penínsulas y casas de recreo, con historias del viejo Peñol que quedó bajo el agua.",
      },
      {
        titulo: "Recorrer el malecón",
        descripcion:
          "El paseo junto al agua concentra restaurantes y miradores: el mejor lugar para cerrar el día al atardecer.",
      },
    ],
  },
  {
    id: 36,
    nombre: "Hacienda Nápoles",
    ciudad: "Puerto Triunfo",
    cityId: 88,
    intro:
      "La antigua hacienda de Pablo Escobar transformada en parque temático: safari africano, zona acuática y memoria histórica a orillas del Magdalena Medio.",
    heroImage: "/images/lugares/hacienda-napoles/portico.jpg",
    heroAlt: "Pórtico de entrada de la Hacienda Nápoles con la avioneta montada encima",
    mosaico: [
      {
        src: "/images/lugares/hacienda-napoles/parque-tematico.jpg",
        alt: "Atracciones del Parque Temático Hacienda Nápoles entre la vegetación",
      },
      {
        src: "/images/lugares/hacienda-napoles/lago.jpg",
        alt: "Lago de la Hacienda Nápoles rodeado de árboles",
      },
    ],
    actividades: [
      {
        titulo: "Hacer el safari africano",
        descripcion:
          "El recorrido en jaula transportada cruza la sabana del parque entre jirafas, cebras, antílopes y los famosos hipopótamos.",
      },
      {
        titulo: "Refrescarse en la zona acuática",
        descripcion:
          "Piscinas gigantes y toboganes para el calor del Magdalena Medio; conviene llegar temprano para disfrutarlas completas.",
      },
      {
        titulo: "Recorrer la zona de dinosaurios",
        descripcion:
          "Figuras mecánicas a escala del Triásico repartidas entre la vegetación, la favorita de los niños del parque.",
      },
      {
        titulo: "Conocer la memoria del lugar",
        descripcion:
          "La avioneta del pórtico, las ruinas y los relatos de los guías cuentan la historia de la hacienda y su transformación en parque público.",
      },
      {
        titulo: "Pasear en el tren del parque",
        descripcion:
          "El recorrido sobre rieles rodea la sabana y es el descanso perfecto después de las caminatas del día.",
      },
    ],
  },
  {
    id: 34,
    nombre: "Santa Fe de Antioquia",
    ciudad: "Santa Fe de Antioquia",
    cityId: 125,
    intro:
      "La ciudad patrimonio del Occidente: calles empedradas, casonas coloniales y el río Cauca frente a frente con el Puente de Occidente.",
    heroImage: "/images/lugares/santa-fe-antioquia/puente-de-occidente.jpg",
    heroAlt: "Puente de Occidente colgando sobre el río Cauca en Santa Fe de Antioquia",
    mosaico: [
      {
        src: "/images/lugares/santa-fe-antioquia/puente-de-occidente-2.jpg",
        alt: "Torres y tablas del Puente de Occidente sobre el río Cauca",
      },
    ],
    actividades: [
      {
        titulo: "Cruzar el Puente de Occidente",
        descripcion:
          "El puente colgante construido entre 1885 y 1895 sigue siendo la obra de ingeniería más emblemática de Antioquia; se cruza a pie sobre el río Cauca.",
      },
      {
        titulo: "Recorrer el casco colonial",
        descripcion:
          "Casonas de una sola planta, puertas pesadas y templos como la Catedral Basílica de la Inmaculada Concepción, declarada monumento nacional.",
      },
      {
        titulo: "Visitar los museos",
        descripcion:
          "El museo de arte religioso y la Casa de la Convención guardan la historia de la antigua capital de Antioquia.",
      },
      {
        titulo: "Disfrutar el río Cauca",
        descripcion:
          "Kayak y paseos en bote desde el malecón, con playas fluviales para el remojo en temporada seca.",
      },
      {
        titulo: "Probar los dulces de tamarindo",
        descripcion:
          "El tamarindo de Santa Fe es su sello gastronómico; en los portales del parque principal lo venden en bolsas y piruletes.",
      },
    ],
  },
  {
    id: 39,
    nombre: "Jericó",
    ciudad: "Jericó",
    cityId: 68,
    intro:
      "Pueblo de montaña del suroeste antioqueño, cuna de la Madre Laura y del catálogo de artesanías en fique, con atardeceres que justifican el viaje por sí solos.",
    heroImage: "/images/lugares/jerico/pueblo.jpg",
    heroAlt: "Vista panorámica de Jericó entre las montañas del suroeste antioqueño",
    mosaico: [],
    actividades: [
      {
        titulo: "Subir al mirador de la Virgen de las Nubes",
        descripcion:
          "El santuario en la cima de la colina regala la mejor vista del pueblo y del valle; la subida a pie toma unos 20 minutos.",
      },
      {
        titulo: "Conocer la casa de la Madre Laura",
        descripcion:
          "La casa museo de Laura Montoya, primera santa colombiana, conserva su historia de maestra y misionera entre los indígenas.",
      },
      {
        titulo: "Llevar artesanía en fique",
        descripcion:
          "Bolsos, sombreros y mochilas tejidas en fique son la artesanía insignia del pueblo; los talleres permiten ver el tejido en vivo.",
      },
      {
        titulo: "Visitar el Cristo Rey",
        descripcion:
          "El monumento en el alto ofrece otra perspectiva del pueblo y del cañón del río Cauca, alcanzable por sendero.",
      },
      {
        titulo: "Caminar entre cafetales",
        descripcion:
          "Las fincas del suroeste abren sus senderos para recorrer la cosecha y terminar con una cata de café de montaña.",
      },
    ],
  },
  {
    id: 29,
    nombre: "Parque Arví",
    ciudad: "Medellín",
    cityId: 12,
    intro:
      "Un bosque de niebla comunal entre Medellín y Santa Elena: senderos, mercado campesino y aire de montaña a un metrocable del valle.",
    heroImage: "/images/lugares/parque-arvi/bosque.jpg",
    heroAlt: "Bosque de pinos y helechos en los senderos del Parque Arví",
    mosaico: [
      {
        src: "/images/lugares/parque-arvi/metrocable.jpg",
        alt: "Cabina del Metrocable línea L llegando al Parque Arví",
      },
    ],
    actividades: [
      {
        titulo: "Llegar en Metrocable línea L",
        descripcion:
          "El cable que sale de la estación Santo Domingo cruza el valle del Aburrá y entra al bosque: el trayecto es una atracción por sí mismo.",
      },
      {
        titulo: "Caminar los senderos guiados",
        descripcion:
          "Rutas señalizadas entre pinos, eucaliptos y helechos, con guías comunitarios que cuentan la historia del bosque protector.",
      },
      {
        titulo: "Mercado Arví",
        descripcion:
          "Los fines de semana, campesinos de Santa Elena venden frutas, flores, plantas y artesanías junto a la entrada del parque.",
      },
      {
        titulo: "Avistar aves",
        descripcion:
          "El bosque de niebla es hogar de colibríes, tucanes y decenas de especies de aves; las primeras horas son las mejores.",
      },
      {
        titulo: "Pícnic en las zonas verdes",
        descripcion:
          "Mesas y zonas de descanso para pasar el día completo en aire de montaña, a menos de una hora del centro de Medellín.",
      },
    ],
  },
  {
    id: 18,
    nombre: "Museo El Castillo",
    ciudad: "Medellín",
    cityId: 12,
    intro:
      "Una réplica de castillo gótico medieval levantada en Medellín entre 1930 y 1970, rodeada de jardines franceses y colecciones de arte europeo.",
    heroImage: "/images/lugares/museo-el-castillo/fachada.jpg",
    heroAlt: "Torreón del Museo El Castillo visto a través del arco de flores de sus jardines",
    mosaico: [
      {
        src: "/images/lugares/museo-el-castillo/vista-2.jpg",
        alt: "Vista del Museo El Castillo desde sus jardines en Medellín",
      },
    ],
    actividades: [
      {
        titulo: "Recorrer el castillo",
        descripcion:
          "Salones con vitrales, tapices y porcelana europea recorren las épocas de la familia que levantó la casona entre dos guerras.",
      },
      {
        titulo: "Pasear por los jardines",
        descripcion:
          "Jardines a la francesa con fuentes, setos recortados y flores que enmarcan el torreón; el arco fotográfico es un clásico.",
      },
      {
        titulo: "Ver las colecciones",
        descripcion:
          "Porcelana, cristales, esculturas e instrumentos musicales conforman la colección permanente del museo.",
      },
      {
        titulo: "Programación para niños",
        descripcion:
          "Talleres de marionetas y visitas guiadas en el patio hacen del museo un plan completo para los fines de semana.",
      },
    ],
  },
];

export const LUGAR_POR_ID: ReadonlyMap<number, LugarCurado> = new Map(
  LUGARES.map((lugar) => [lugar.id, lugar]),
);

export const LUGARES_IDS: readonly number[] = LUGARES.map((lugar) => lugar.id);
