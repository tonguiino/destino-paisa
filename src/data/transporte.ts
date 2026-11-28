/**
 * Contenido curado de la vista /transporte.
 *
 * Mismo criterio que src/data/lugares.ts: un único punto de edición del copy
 * del servicio. Los mensajes de WhatsApp se convierten en enlaces con
 * enlaceWhatsapp() (lib/contacto.ts); cada sección lleva el suyo para poder
 * distinguir las conversaciones que llegan.
 *
 * Las imágenes siguen el contrato de ImagenLugar (string | null): con null se
 * muestra el tile "Foto próximamente".
 */

import type { ImagenMosaico } from "@/types/colombia";

export type OpcionContratacion = {
  /** Clave estable de la opción: "trayecto" | "horas" | "personalizado". */
  id: string;
  titulo: string;
  descripcion: string;
};

export type ContenidoTransporte = {
  hero: {
    titulo: string;
    subtitulo: string;
    cta: string;
    mensajeWhatsapp: string;
    /**
     * Foto de fondo temporal mientras llega la del vehículo. Misma imagen de
     * la home: "Valley of Medellín - skyline" (dominio público, Wikimedia
     * Commons). Pendiente: reemplazar por la foto del carro del servicio.
     */
    imagen: string | null;
  };
  servicio: {
    heading: string;
    bajada: string;
    parrafos: string[];
    /** Foto del vehículo: null hasta que el propietario la entregue. */
    imagen: string | null;
    imagenAlt: string;
    etiquetaImagen: string;
  };
  opciones: {
    heading: string;
    bajada: string;
    items: OpcionContratacion[];
  };
  beneficios: {
    heading: string;
    items: string[];
    cta: string;
    mensajeWhatsapp: string;
    /** Mosaico 2×2 de destinos que conectamos (guía §4.6). */
    mosaico: ImagenMosaico[];
    /** Pie de foto del mosaico; también es el nombre accesible del visor. */
    etiquetaMosaico: string;
  };
  traslados: {
    heading: string;
    parrafos: string[];
    items: string[];
    cta: string;
    mensajeWhatsapp: string;
  };
  ctaFinal: {
    heading: string;
    parrafo: string;
    cta: string;
    mensajeWhatsapp: string;
  };
};

export const TRANSPORTE: ContenidoTransporte = {
  hero: {
    titulo: "Transporte turístico a tu medida",
    subtitulo:
      "Viaja con comodidad y seguridad por toda Antioquia, con conductor experto y vehículo privado.",
    cta: "Reserva ahora",
    mensajeWhatsapp: "Hola, quiero reservar el servicio de transporte turístico",
    imagen: "/images/hero-medellin.jpg",
  },
  servicio: {
    heading: "Descubre la comodidad de viajar",
    bajada: "Recorridos turísticos por Antioquia en vehículo privado",
    parrafos: [
      "Te recogemos donde tú gustes y te llevamos a tu destino: recorridos por Medellín y las zonas turísticas de Antioquia, con flexibilidad total de horarios y rutas.",
      "El servicio incluye guía básica de turismo, para que cada trayecto también sea parte de la experiencia.",
      "Nuestro vehículo es un Chevrolet Sail LTZ con aire acondicionado: espacioso, con amplio espacio en la maleta, cómodo y seguro.",
      "Tu conductor cuenta con amplia experiencia en transporte y conoce las vías y los destinos de la región.",
    ],
    imagen: "/images/chevrolet_sail.jpeg",
    imagenAlt: "Chevrolet Sail LTZ del servicio de transporte",
    etiquetaImagen: "Foto del vehículo próximamente",
  },
  opciones: {
    heading: "Opciones de contratación",
    bajada: "Elige cómo contratar el servicio: por trayecto, por horas o a tu medida.",
    items: [
      {
        id: "trayecto",
        titulo: "Servicio por trayecto",
        descripcion:
          "Una ruta puntual: te recogemos en el punto que elijas y te llevamos directo a tu destino.",
      },
      {
        id: "horas",
        titulo: "Reserva por horas",
        descripcion:
          "Vehículo y conductor a tu disposición durante el tiempo que dure tu plan del día, con paradas cuando quieras.",
      },
      {
        id: "personalizado",
        titulo: "Servicio personalizado",
        descripcion:
          "Diseñamos el recorrido contigo: itinerario, horarios y paradas a la medida de tu viaje.",
      },
    ],
  },
  beneficios: {
    heading: "Por qué elegirnos",
    items: [
      "Conductor con amplia experiencia en transporte",
      "Vehículo cómodo y seguro",
      "Espacio amplio en la maleta",
      "Aire acondicionado",
      "Guía básica de turismo incluida",
      "Recogida donde tú gustes",
    ],
    cta: "Solicitar tu trayecto",
    mensajeWhatsapp:
      "Hola, quiero solicitar un trayecto con el servicio de transporte turístico",
    mosaico: [
      {
        src: "/images/lugares/parque-arvi/metrocable.jpg",
        alt: "Metrocable del Parque Arví",
      },
      {
        src: "/images/lugares/guatape/represa-aerea.jpg",
        alt: "Represa de Guatapé",
      },
      {
        src: "/images/lugares/comuna-13/comuna-13.jpg",
        alt: "Comuna 13 de Medellín",
      },
      {
        src: "/images/lugares/santa-fe-antioquia/puente-de-occidente-3.jpg",
        alt: "Puente de Occidente, Santa Fe de Antioquia",
      },
    ],
    etiquetaMosaico: "Destinos que conectamos por toda Antioquia",
  },
  traslados: {
    heading: "Traslados al aeropuerto",
    parrafos: [
      "Traslado puntual al aeropuerto, de ida o de regreso: te recogemos donde estés y coordinamos la salida con la hora de tu vuelo.",
      "Salimos con margen de tiempo para los imprevistos del camino, para que llegues con tranquilidad.",
    ],
    items: [
      "Recogida donde tú gustes",
      "Horario coordinado con tu vuelo",
      "Margen para imprevistos en el camino",
      "Espacio amplio para maletas",
    ],
    cta: "Reservar traslado",
    mensajeWhatsapp: "Hola, quiero reservar un traslado al aeropuerto",
  },
  ctaFinal: {
    heading: "¿Listo para viajar?",
    parrafo:
      "Cuéntanos tu plan y te respondemos con la propuesta y la cotización de tu recorrido.",
    cta: "Reserva ahora",
    mensajeWhatsapp:
      "Hola, quiero información y cotización del servicio de transporte turístico",
  },
};
