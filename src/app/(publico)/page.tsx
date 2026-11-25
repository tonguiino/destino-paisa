import type { Metadata } from "next";
import { getAntioquiaAttractions, getAntioquiaData } from "@/lib/api-colombia";
import { Hero } from "@/components/home/hero";
import { ToursPopulares } from "@/components/home/tours-populares";
import { TransporteTuristico } from "@/components/home/transporte-turistico";
import { SeccionBlog } from "@/components/home/seccion-blog";
import { BotonWhatsappFlotante } from "@/components/boton-whatsapp";

export const metadata: Metadata = {
  title: "Destino Paisa | Descubre Antioquia",
  description: "Tours, transporte turístico y experiencias en Antioquia",
};

export default async function Home() {
  const [antioquia, entradas] = await Promise.all([
    getAntioquiaData(),
    getAntioquiaAttractions(),
  ]);

  return (
    <main>
      <Hero summary={antioquia} />
      <ToursPopulares />
      <TransporteTuristico />
      <SeccionBlog entries={entradas} />
      <BotonWhatsappFlotante />
    </main>
  );
}
