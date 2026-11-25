import { enlaceWhatsapp } from "@/lib/contacto";
import { LogoWhatsapp } from "@/components/logos-marca";

/**
 * Botón flotante de contacto directo por WhatsApp. Usa el verde oficial de
 * la marca (terceros) para reconocimiento inmediato; no forma parte de la
 * paleta de la guía. Server component: es un enlace, sin estado.
 */
export function BotonWhatsappFlotante() {
  return (
    <a
      href={enlaceWhatsapp("Hola, quiero información sobre los tours de Destino Paisa")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="
        fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center
        rounded-full bg-[#25D366] text-white shadow-sm transition-colors
        hover:bg-[#1DA851]
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hunter-300
      "
    >
      <LogoWhatsapp className="h-7 w-7" />
    </a>
  );
}
