"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { PillLink } from "@/components/ui/pill";
import { enlaceWhatsapp } from "@/lib/contacto";
import { ENLACES_NAV, type EnlaceNav } from "@/lib/enlaces-nav";
import { cn } from "@/lib/utils";

/**
 * Navbar global del sitio (guía §4.4): fondo transparente sobre cream-100,
 * logotipo de marca en el enlace a inicio, links en ink-800 15px con hover
 * hunter-700 y hamburguesa móvil pine-800.
 *
 * Cliente por necesidad: usa usePathname (enlace activo) y useState (menú
 * móvil). Montado en el layout raíz, aparece en todas las vistas, igual que
 * el Footer. Sin acento paprika (guía §1.4: máximo un acento cálido por
 * vista).
 */

const CLASES_ENLACE =
  "text-[15px] text-ink-800 transition-colors hover:text-hunter-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hunter-300";

const CLASES_ENLACE_ACTIVO = "text-hunter-700 font-medium";

/** Enlaces apilados del panel móvil: 16px y área táctil generosa. */
const CLASES_ENLACE_MOVIL =
  "block rounded-lg px-3 py-2.5 text-base text-ink-800 transition-colors hover:bg-pine-50 hover:text-hunter-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hunter-300";

/** Coincidencia exacta de ruta; las anclas (/#tours) nunca quedan activas. */
function estaActivo(enlace: EnlaceNav, pathname: string): boolean {
  if (enlace.href.includes("#")) return false;
  return enlace.href === "/" ? pathname === "/" : pathname === enlace.href;
}

/** CTA de contacto: enlace construido desde el punto único de contacto. */
const ENLACE_WHATSAPP = enlaceWhatsapp(
  "Hola, quiero información sobre los servicios de Destino Paisa",
);

export function Navbar() {
  const pathname = usePathname();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header
      className="relative z-40"
      onKeyDown={(evento) => {
        if (evento.key === "Escape") cerrarMenu();
      }}
    >
      <nav
        aria-label="Navegación principal"
        className="mx-auto w-full max-w-6xl px-4 md:px-6"
      >
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logotipo de marca (guía §4.4): arte provisional recortado a su
              contenido (1078×407). 36px de alto en móvil, 44px en desktop;
              priority por ser el LCP de la home. */}
          <Link
            href="/"
            className="rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hunter-300"
          >
            <Image
              src="/images/logo-destino-paisa.png"
              alt="Destino Paisa"
              width={1078}
              height={407}
              priority
              className="h-9 w-auto md:h-11"
            />
          </Link>

          {/* Enlaces desktop */}
          <ul className="hidden items-center gap-6 md:flex">
            {ENLACES_NAV.map((enlace) => (
              <li key={enlace.href}>
                <Link
                  href={enlace.href}
                  aria-current={
                    estaActivo(enlace, pathname) ? "page" : undefined
                  }
                  className={cn(
                    CLASES_ENLACE,
                    estaActivo(enlace, pathname) && CLASES_ENLACE_ACTIVO,
                  )}
                >
                  {enlace.texto}
                </Link>
              </li>
            ))}
          </ul>

          {/* Acciones desktop. Pendiente: reincorporar el botón "Iniciar
              sesión" (PillLink href="/login") cuando el login tenga flujo
              activo; se ocultó porque un botón siempre deshabilitado
              confunde al usuario (guía §3.1). */}
          <div className="hidden items-center gap-3 md:flex">
            <PillLink
              href={ENLACE_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contacto
            </PillLink>
          </div>

          {/* Alternador del menú móvil (guía §4.4: hamburguesa pine-800).
              Íconos Menu/X de lucide-react (guía §8). */}
          <button
            type="button"
            aria-expanded={menuAbierto}
            aria-controls="menu-movil"
            onClick={() => setMenuAbierto((abierto) => !abierto)}
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full text-pine-800 transition-colors hover:bg-pine-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hunter-300 md:hidden"
          >
            <span className="sr-only">
              {menuAbierto ? "Cerrar menú" : "Abrir menú"}
            </span>
            {menuAbierto ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Panel del menú móvil. Sin animación a propósito: no se introduce
            motion/react aquí. El Escape lo cierra vía el onKeyDown del
            header; los enlaces lo cierran al elegir destino. */}
        {menuAbierto && (
          <div
            id="menu-movil"
            className="border-t border-ink-100 bg-surface pb-6 md:hidden"
          >
            <ul className="flex flex-col gap-1 py-2">
              {ENLACES_NAV.map((enlace) => (
                <li key={enlace.href}>
                  <Link
                    href={enlace.href}
                    aria-current={
                      estaActivo(enlace, pathname) ? "page" : undefined
                    }
                    onClick={cerrarMenu}
                    className={cn(
                      CLASES_ENLACE_MOVIL,
                      estaActivo(enlace, pathname) && CLASES_ENLACE_ACTIVO,
                    )}
                  >
                    {enlace.texto}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-3">
              <PillLink
                href={ENLACE_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                onClick={cerrarMenu}
                className="w-full"
              >
                Contacto
              </PillLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
