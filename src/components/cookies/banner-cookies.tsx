"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { X } from "lucide-react";
import { PillButton } from "@/components/ui/pill";
import { useConsentimientoCookies } from "@/lib/hooks/use-consentimiento-cookies";
import { useModalScope } from "@/lib/hooks/use-modal-scope";
import {
  EVENTO_ABRIR_PREFERENCIAS,
  type CategoriaOpcional,
} from "@/lib/consentimiento-cookies";

/**
 * Detección de hidratación sin setState en efectos (regla del React
 * Compiler): false en servidor y durante la hidratación, true después.
 * Así el banner nunca está en el HTML prerenderizado, ni siquiera un frame
 * para quien ya decidió sus cookies.
 */
const suscribirNada = () => () => {};
const obtenerVerdadero = () => true;
const obtenerFalso = () => false;

type Borrador = Record<CategoriaOpcional, boolean>;

const BORRADOR_INICIAL: Borrador = { analiticas: false, marketing: false };

/** Categorías opt-in del panel; "Necesarias" se renderiza aparte (no negociable). */
const CATEGORIAS_OPCIONALES: {
  key: CategoriaOpcional;
  titulo: string;
  descripcion: string;
}[] = [
  {
    key: "analiticas",
    titulo: "Analíticas",
    descripcion:
      "Medición anónima del uso del sitio. Hoy no hay ninguna activa; si las instalamos, solo se activarán con tu permiso.",
  },
  {
    key: "marketing",
    titulo: "Marketing",
    descripcion:
      "Publicidad y remarcado de terceros. Hoy no hay ninguna activa; si las instalamos, solo se activarán con tu permiso.",
  },
];

function conCategoria(
  borrador: Borrador,
  key: CategoriaOpcional,
  valor: boolean,
): Borrador {
  return { ...borrador, [key]: valor } as Borrador;
}

/**
 * Aviso de cookies global (montado en el layout raíz, hijo directo de <body>
 * para que useModalScope pueda inertizar a sus hermanos).
 *
 * El prerender no puede leer localStorage, así que el HTML del servidor nunca
 * trae el banner: aparece justo tras la hidratación si el usuario aún no
 * decide. El panel de preferencias reutiliza useModalScope (trampa de Tab,
 * Escape, inert y scroll-lock, igual que el lightbox y el drawer).
 */
export function BannerCookies() {
  const { estado, decidido, aceptarTodas, rechazarTodo, guardar } =
    useConsentimientoCookies();
  const [panelAbierto, setPanelAbierto] = useState(false);
  const [borrador, setBorrador] = useState<Borrador>(BORRADOR_INICIAL);
  const montado = useSyncExternalStore(
    suscribirNada,
    obtenerVerdadero,
    obtenerFalso,
  );
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // El footer y /cookies son server components: reabren el panel por evento.
  useEffect(() => {
    const abrir = () => {
      setBorrador({
        analiticas: estado?.analiticas ?? false,
        marketing: estado?.marketing ?? false,
      });
      setPanelAbierto(true);
    };
    window.addEventListener(EVENTO_ABRIR_PREFERENCIAS, abrir);
    return () => window.removeEventListener(EVENTO_ABRIR_PREFERENCIAS, abrir);
  }, [estado]);

  useModalScope(panelAbierto, rootRef, panelRef, () => setPanelAbierto(false));

  const visible = montado && !decidido;
  if (!visible && !panelAbierto) return null;

  return (
    <div ref={rootRef}>
      {visible && !panelAbierto && (
        <div
          role="region"
          aria-label="Aviso de cookies"
          className="fixed inset-x-4 bottom-4 z-50 rounded-2xl border border-ink-100 bg-surface p-5 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-300 motion-reduce:animate-none md:inset-x-auto md:left-6 md:max-w-md"
        >
          {/* Abajo-izquierda en desktop: no choca con el WhatsApp flotante
              (fixed bottom-5 right-5). */}
          <h2 className="text-lg font-semibold text-pine-800">
            Tú decides qué cookies usamos
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-800">
            Solo usamos las cookies necesarias para mantener tu sesión: nada de
            analítica ni publicidad. El detalle está en nuestra política de
            cookies.
          </p>
          <Link
            href="/cookies"
            className="mt-2 inline-block text-sm font-medium text-pine-800 underline decoration-hunter-300/60 underline-offset-4 hover:decoration-hunter-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hunter-300"
          >
            Ver la política de cookies
          </Link>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <PillButton
              onClick={aceptarTodas}
              className="w-full justify-center sm:w-auto"
            >
              Aceptar todas
            </PillButton>
            <PillButton
              variant="outline"
              onClick={rechazarTodo}
              className="w-full justify-center sm:w-auto"
            >
              Rechazar
            </PillButton>
            <button
              type="button"
              onClick={() => {
                setBorrador(BORRADOR_INICIAL);
                setPanelAbierto(true);
              }}
              className="text-sm font-medium text-hunter-700 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hunter-300"
            >
              Configurar preferencias
            </button>
          </div>
        </div>
      )}

      {panelAbierto && (
        <div className="fixed inset-0 z-50 bg-pine-950/50">
          <div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-preferencias-cookies"
            aria-describedby="desc-preferencias-cookies"
            className="mx-auto mt-[8vh] max-h-[84vh] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-2xl border border-ink-100 bg-surface p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <h2
                id="titulo-preferencias-cookies"
                className="text-2xl font-bold text-pine-800"
              >
                Preferencias de cookies
              </h2>
              <button
                type="button"
                onClick={() => setPanelAbierto(false)}
                className="rounded-full p-1.5 text-ink-800 transition-colors hover:bg-pine-50 hover:text-pine-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hunter-300"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Cerrar preferencias de cookies</span>
              </button>
            </div>
            <p
              id="desc-preferencias-cookies"
              className="mt-2 text-sm leading-relaxed text-ink-500"
            >
              Elige qué categorías permites. Puedes cambiar tu decisión cuando
              quieras desde el footer o desde la política de cookies.
            </p>

            <div className="mt-6 border-y border-ink-100">
              {/* Necesarias: siempre activas, no son opt-out. */}
              <label className="flex items-start gap-3 py-4 opacity-60">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="mt-0.5 h-5 w-5 shrink-0 accent-pine-800"
                />
                <span>
                  <span className="block text-base font-medium text-ink-800">
                    Necesarias{" "}
                    <span className="text-ink-500">· siempre activas</span>
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-ink-500">
                    Mantienen tu sesión cuando inicias sesión con Google. Sin
                    ellas esa función no funciona.
                  </span>
                </span>
              </label>
              {CATEGORIAS_OPCIONALES.map((categoria) => (
                <label
                  key={categoria.key}
                  className="flex items-start gap-3 border-t border-ink-100 py-4"
                >
                  <input
                    type="checkbox"
                    checked={borrador[categoria.key]}
                    onChange={(evento) =>
                      setBorrador(
                        conCategoria(
                          borrador,
                          categoria.key,
                          evento.target.checked,
                        ),
                      )
                    }
                    className="mt-0.5 h-5 w-5 shrink-0 accent-pine-800"
                  />
                  <span>
                    <span className="block text-base font-medium text-ink-800">
                      {categoria.titulo}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink-500">
                      {categoria.descripcion}
                    </span>
                  </span>
                </label>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <PillButton
                onClick={() => {
                  guardar(borrador);
                  setPanelAbierto(false);
                }}
                className="w-full justify-center sm:w-auto"
              >
                Guardar preferencias
              </PillButton>
              <PillButton
                variant="outline"
                onClick={() => {
                  aceptarTodas();
                  setPanelAbierto(false);
                }}
                className="w-full justify-center sm:w-auto"
              >
                Aceptar todas
              </PillButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
