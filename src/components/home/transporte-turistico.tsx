import { PillLink } from "@/components/ui/pill";

export function TransporteTuristico() {
  return (
    <section
      id="transporte"
      aria-labelledby="transporte-heading"
      className="bg-pine-50 py-12 md:py-24"
    >
      <div className="mx-auto w-full max-w-3xl px-4 text-center md:px-6">
        <h2
          id="transporte-heading"
          className="text-2xl font-bold text-pine-800 md:text-4xl"
        >
          Transporte turístico
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-800">
          Solicita servicio de transporte para tus recorridos turísticos en
          Medellín y los municipios de Antioquia, con traslados al aeropuerto y
          guía básica de turismo incluida.
        </p>
        <PillLink variant="outline" href="/transporte" className="mt-8">
          Ver servicio de transporte
        </PillLink>
      </div>
    </section>
  );
}
