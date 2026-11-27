import { ImagenLugar } from "@/components/ui/imagen-lugar";

interface IntroServicioProps {
  heading: string;
  bajada: string;
  parrafos: string[];
  /** Foto del vehículo: null mientras el propietario la entrega. */
  imagen: string | null;
  imagenAlt: string;
  etiquetaImagen: string;
}

/**
 * "Descubre la comodidad de viajar": descripción del servicio a dos columnas
 * (texto + foto del vehículo).
 */
export function IntroServicio({
  heading,
  bajada,
  parrafos,
  imagen,
  imagenAlt,
  etiquetaImagen,
}: IntroServicioProps) {
  return (
    <section
      aria-labelledby="servicio-heading"
      className="bg-surface py-12 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h2
              id="servicio-heading"
              className="text-2xl font-bold text-pine-800 md:text-4xl"
            >
              {heading}
            </h2>
            <p className="mt-4 text-base text-ink-500 md:text-lg">{bajada}</p>
            {parrafos.map((parrafo) => (
              <p
                key={parrafo}
                className="mt-4 text-base leading-relaxed text-ink-800"
              >
                {parrafo}
              </p>
            ))}
          </div>
          <ImagenLugar
            src={imagen}
            alt={imagenAlt}
            aspect="aspect-[16/10] md:aspect-[4/3]"
            etiqueta={etiquetaImagen}
          />
        </div>
      </div>
    </section>
  );
}
