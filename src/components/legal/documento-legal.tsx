import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type {
  DocumentoLegal,
  SeccionLegal,
  SubseccionLegal,
  TablaLegal,
} from "@/types/legal";

type Props = {
  documento: DocumentoLegal;
  /** id del h1, por si la página necesita otro (por defecto "titulo-documento"). */
  tituloId?: string;
  /** Elementos extra bajo la meta del hero, p. ej. el botón de preferencias. */
  acciones?: ReactNode;
};

/**
 * Shell reutilizable de los documentos legales (/terminos,
 * /politica-de-privacidad, /cookies). Server component puro: todo el copy vive
 * en src/data/legal y el prerender lo deja en el HTML (bueno para SEO).
 *
 * Guía de estilos: títulos en pine-800 alineados a la izquierda (contenido tipo
 * documento), cuerpo text-base leading-relaxed en ink-800, prosa max-w-3xl,
 * contenedor max-w-6xl y radios rounded-2xl. Sin emojis y sin SVG manual.
 */
export function DocumentoLegal({
  documento,
  tituloId = "titulo-documento",
  acciones,
}: Props) {
  return (
    <main>
      {/* Hero sin foto (guía §4.3, variante clara): H1 en pine-800 sobre cream-100. */}
      <section aria-labelledby={tituloId} className="bg-cream-100">
        <div className="mx-auto w-full max-w-6xl px-4 pt-12 pb-10 md:px-6 md:pt-16 md:pb-12">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-ink-500">Documento legal</p>
            <h1
              id={tituloId}
              className="mt-2 text-3xl font-bold text-pine-800 md:text-5xl md:leading-[1.1]"
            >
              {documento.titulo}
            </h1>
            {documento.bajada && (
              <p className="mt-4 text-base leading-relaxed text-ink-800">
                {documento.bajada}
              </p>
            )}
            <p className="mt-4 text-sm text-ink-500">
              Última actualización: {documento.fechaActualizacion}
            </p>
            {acciones}
          </div>
        </div>
      </section>

      <section aria-label="Contenido del documento" className="bg-surface">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <div className="max-w-3xl">
            <nav
              aria-label="Índice de contenidos"
              className="rounded-2xl bg-pine-50 p-5"
            >
              <ol className="list-decimal space-y-1 ps-5">
                {documento.secciones.map((seccion) => (
                  <li key={seccion.id}>
                    <Link
                      href={`#${seccion.id}`}
                      className="text-base text-pine-800 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hunter-300"
                    >
                      {seccion.titulo}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>

            {documento.secciones.map((seccion, indice) => (
              <SeccionDocumento
                key={seccion.id}
                seccion={seccion}
                indice={indice}
              />
            ))}

            {documento.cierre && (
              <section aria-labelledby="cierre-documento" className="mt-12">
                <h2
                  id="cierre-documento"
                  className="text-2xl font-bold text-pine-800 md:text-3xl"
                >
                  {documento.cierre.titulo}
                </h2>
                {documento.cierre.parrafos.map((parrafo) => (
                  <p
                    key={parrafo}
                    className="mt-4 text-base leading-relaxed text-ink-800"
                  >
                    {parrafo}
                  </p>
                ))}
              </section>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function SeccionDocumento({
  seccion,
  indice,
}: {
  seccion: SeccionLegal;
  indice: number;
}) {
  return (
    <section
      aria-labelledby={`seccion-${seccion.id}`}
      className="mt-12 scroll-mt-24"
    >
      {/* md:text-3xl: un paso por debajo del H2 de marketing (40px) para que
          un documento de 13 secciones siga siendo legible. */}
      <h2
        id={`seccion-${seccion.id}`}
        className="text-2xl font-bold text-pine-800 md:text-3xl"
      >
        {indice + 1}. {seccion.titulo}
      </h2>
      <ParrafosDocumento parrafos={seccion.parrafos} />
      <ListaDocumento items={seccion.lista} ordenada={seccion.listaOrdenada} />
      {seccion.tabla && <TablaDocumento tabla={seccion.tabla} />}
      <ParrafosDocumento parrafos={seccion.parrafosFinales} />
      {seccion.subsecciones?.map((subseccion) => (
        <SubseccionDocumento key={subseccion.titulo} subseccion={subseccion} />
      ))}
      {seccion.nota && (
        <p className="mt-4 rounded-2xl bg-pine-50 p-4 text-base leading-relaxed text-ink-800">
          {seccion.nota}
        </p>
      )}
      {seccion.enlaces?.length ? (
        <ul className="mt-4 space-y-1">
          {seccion.enlaces.map((enlace) => (
            <li key={enlace.href}>
              <Link
                href={enlace.href}
                className="text-base font-medium text-pine-800 underline decoration-hunter-300/60 underline-offset-4 hover:decoration-hunter-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hunter-300"
              >
                Ver {enlace.texto}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

function SubseccionDocumento({ subseccion }: { subseccion: SubseccionLegal }) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-ink-800">
        {subseccion.titulo}
      </h3>
      <ParrafosDocumento parrafos={subseccion.parrafos} />
      <ListaDocumento
        items={subseccion.lista}
        ordenada={subseccion.listaOrdenada}
      />
    </div>
  );
}

function ParrafosDocumento({ parrafos }: { parrafos?: string[] }) {
  if (!parrafos?.length) return null;
  return (
    <>
      {parrafos.map((parrafo) => (
        <p
          key={parrafo}
          className="mt-4 text-base leading-relaxed text-ink-800"
        >
          {parrafo}
        </p>
      ))}
    </>
  );
}

function ListaDocumento({
  items,
  ordenada,
}: {
  items?: string[];
  ordenada?: boolean;
}) {
  if (!items?.length) return null;
  const clases = cn(
    "mt-4 space-y-2 ps-5 text-base leading-relaxed text-ink-800",
    ordenada ? "list-decimal" : "list-disc",
  );
  return ordenada ? (
    <ol className={clases}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ol>
  ) : (
    <ul className={clases}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function TablaDocumento({ tabla }: { tabla: TablaLegal }) {
  return (
    <div className="mt-6 overflow-x-auto rounded-2xl border border-ink-100">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm leading-relaxed text-ink-800">
        <thead>
          <tr className="bg-pine-50">
            {tabla.encabezados.map((encabezado) => (
              <th
                key={encabezado}
                scope="col"
                className="px-4 py-3 font-semibold text-pine-800"
              >
                {encabezado}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tabla.filas.map((fila) => (
            <tr key={fila[0]} className="border-t border-ink-100 align-top">
              {fila.map((celda, indice) => (
                <td key={indice} className="px-4 py-3">
                  {celda}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
