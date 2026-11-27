import { PillLink } from "@/components/ui/pill";

/** Página 404 de marca: cubre rutas inexistentes y el notFound() defensivo. */
export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center px-4 py-24">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold text-pine-800 md:text-4xl">
          Página no encontrada
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-800">
          El contenido que buscas no existe o se movió de lugar.
        </p>
        <PillLink href="/" className="mt-8">
          Volver al inicio
        </PillLink>
      </div>
    </main>
  );
}
