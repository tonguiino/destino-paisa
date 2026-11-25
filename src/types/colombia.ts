export interface Department {
  id: number;
  name: string;
  description: string;
  municipalities: number;
  surface: number;
  population: number;
}

export interface City {
  id: number;
  name: string;
  description: string;
  department: string;
}

export interface TouristicAttraction {
  id: number;
  name: string;
  description: string;
  images: string[];
  city?: City | null;
  cityId?: number;
  latitude?: string;
  longitude?: string;
}

/** Resumen del departamento listo para render (view model de api-colombia). */
export interface AntioquiaSummary {
  name: string;
  description: string;
  municipalities: number;
  surface: number;
  population: number;
}

/** Entrada del blog de lugares, ya transformada para las tarjetas. */
export interface BlogEntry {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string | null;
  city: string | null;
}

/** Festival o feria tradicional de api-colombia, saneada para render. */
export interface Festival {
  id: number;
  name: string;
  month: string | null;
  city: string | null;
  cityId: number | null;
}

/** Plato típico de api-colombia, saneado para render. */
export interface PlatoTipico {
  id: number;
  name: string;
  description: string;
  imageUrl: string | null;
}

/** Actividad curada de la sección "Cosas por hacer" de un lugar. */
export interface ActividadLugar {
  titulo: string;
  descripcion: string;
}

/** Slot del mosaico de imágenes: src === null renderiza el tile "Foto próximamente". */
export interface ImagenMosaico {
  src: string | null;
  alt: string;
}

/**
 * Lugar turístico con contenido curado localmente (src/data/lugares.ts).
 * El id corresponde a una TouristicAttraction de api-colombia; el cityId es
 * autoritativo porque la API tiene bugs de asociación (ej. Guatapé → Medellín).
 */
export interface LugarCurado {
  id: number;
  nombre: string;
  ciudad: string;
  cityId: number;
  intro: string;
  heroImage: string;
  heroAlt: string;
  /** Tiles adicionales al hero para completar el mosaico de 4 slots. */
  mosaico: ImagenMosaico[];
  actividades: ActividadLugar[];
}

/** View model completo de la vista de detalle de un lugar. */
export interface LugarDetalle {
  id: number;
  title: string;
  city: string | null;
  intro: string;
  /** Descripción de la API truncada; null si la API falló. */
  description: string | null;
  heroImage: string | null;
  heroAlt: string;
  /** Siempre 4 slots: reales + placeholders. */
  mosaic: ImagenMosaico[];
  actividades: ActividadLugar[];
  festivales: Festival[];
  platos: PlatoTipico[];
}
