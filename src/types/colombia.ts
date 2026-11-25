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
