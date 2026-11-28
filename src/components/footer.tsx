import Link from "next/link";
import { cacheLife } from "next/cache";
import { enlaceWhatsapp } from "@/lib/contacto";
import { GRUPOS_ENLACES_FOOTER, REDES_SOCIALES } from "@/lib/enlaces-footer";
import { BotonConfiguracionCookies } from "@/components/cookies/boton-configuracion-cookies";
import {
  LogoFacebook,
  LogoInstagram,
  LogoWhatsapp,
} from "@/components/logos-marca";

/**
 * Año de copyright cacheado. Cache Components (next.config.ts) bloquea
 * `new Date()` durante el prerender: con "use cache" + cacheLife("max") el
 * valor queda horneado en la build (patrón recomendado por Next para el año
 * de copyright) y se actualiza en el siguiente despliegue.
 */
async function obtenerAnioActual() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

const LOGOS_REDES = {
  instagram: LogoInstagram,
  facebook: LogoFacebook,
} as const;

const CLASES_ENLACE =
  "text-sm text-pine-100 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hunter-300";

/**
 * Footer global del sitio (guía §1.1: pine-800 es el color del footer).
 * Server component, sin estado; montado en el layout raíz, aparece en todas
 * las vistas. Sin acento paprika (guía §1.4: máximo un acento cálido por
 * vista).
 */
export async function Footer() {
  const anio = await obtenerAnioActual();

  return (
    <footer aria-labelledby="footer-heading" className="bg-pine-800 text-white">
      <div className="mx-auto w-full max-w-6xl px-4 pt-12 pb-24 md:px-6 md:pt-16 md:pb-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr] md:gap-8">
          {/* Marca + descripción + contacto */}
          <div>
            <h2 id="footer-heading" className="text-lg font-bold">
              Destino Paisa
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-pine-100">
              Conecta viajeros con proveedores de tours, transporte y
              experiencias en Antioquia.
            </p>
            <a
              href={enlaceWhatsapp(
                "Hola, quiero información sobre los servicios de Destino Paisa",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-pine-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hunter-300"
            >
              <LogoWhatsapp className="h-5 w-5" />
              Contactar por WhatsApp
            </a>
          </div>

          {/* Grupos de enlaces (Explorar / Legal) */}
          {GRUPOS_ENLACES_FOOTER.map((grupo) => (
            <nav key={grupo.titulo} aria-label={grupo.titulo}>
              <h3 className="text-sm font-semibold uppercase tracking-wide">
                {grupo.titulo}
              </h3>
              <ul className="mt-4 space-y-3">
                {grupo.enlaces.map((enlace) => (
                  <li key={enlace.href ?? enlace.texto}>
                    {enlace.abrePreferenciasCookies ? (
                      <BotonConfiguracionCookies
                        texto={enlace.texto}
                        apariencia="enlace"
                        className={CLASES_ENLACE}
                      />
                    ) : (
                      <Link href={enlace.href!} className={CLASES_ENLACE}>
                        {enlace.texto}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Barra inferior. El pr-24 en desktop y el pb-24 en móvil reservan el
            espacio del botón flotante de WhatsApp (fixed bottom-5 right-5,
            solo se renderiza en el home) para que no tape el copyright. */}
        <div className="mt-12 flex flex-col items-center gap-6 border-t border-white/15 pt-8 text-sm md:mt-16 md:flex-row md:justify-between md:pr-24">
          <ul className="flex items-center gap-4">
            {REDES_SOCIALES.map((red) => {
              const Logo = LOGOS_REDES[red.logo];
              return (
                <li key={red.nombre}>
                  <a
                    href={red.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${red.nombre} de Destino Paisa`}
                    className="block text-pine-100 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hunter-300"
                  >
                    <Logo className="h-5 w-5" />
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="text-pine-100">
            © {anio} Destino Paisa. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
