import type { DocumentoLegal } from "@/types/legal";
import {
  AUTORIDAD_CONTROL,
  MARCO_LEGAL,
  RESPONSABLE,
  WHATSAPP_LEGIBLE,
} from "./responsable";

/**
 * Copy de la página /cookies. El sitio hoy solo usa cookies estrictamente
 * necesarias de sesión (Supabase); las categorías analíticas y de marketing
 * están declaradas como inexistentes y quedan listas para describirse si se
 * instalan. Los nombres de cookie incluyen la referencia del proyecto de
 * Supabase: verificarlos en las DevTools antes de publicar.
 */
export const COOKIES: DocumentoLegal = {
  titulo: "Política de cookies",
  bajada:
    "Te contamos qué cookies y almacenamiento local usa Destino Paisa, y cómo decides sobre ellas.",
  fechaActualizacion: "28 de noviembre de 2026",
  secciones: [
    {
      id: "que-son",
      titulo: "Qué son las cookies",
      parrafos: [
        "Las cookies son pequeños archivos de texto que un sitio guarda en tu navegador para recordar información: mantener una sesión activa, guardar una preferencia o recordar una elección.",
        "Se distinguen del almacenamiento local (localStorage), otra tecnología del navegador con un propósito similar pero que no se envía al servidor en cada visita.",
      ],
    },
    {
      id: "responsable",
      titulo: "Responsable y marco legal",
      parrafos: [
        `El responsable de las cookies de este sitio es ${RESPONSABLE.razonSocial}, titular del NIT ${RESPONSABLE.nit}, con domicilio en ${RESPONSABLE.direccion}, ${RESPONSABLE.ciudad}, Colombia.`,
        `El tratamiento de datos asociado se rige por la ${MARCO_LEGAL.datosPersonales} y por nuestra Política de privacidad. La ${AUTORIDAD_CONTROL} es la autoridad de vigilancia.`,
      ],
      enlaces: [
        {
          texto: "Política de privacidad",
          href: "/politica-de-privacidad",
        },
        { texto: "Términos y condiciones", href: "/terminos" },
      ],
    },
    {
      id: "cookies-actuales",
      titulo: "Cookies que utilizamos actualmente",
      parrafos: [
        "Solo usamos cookies estrictamente necesarias: las que mantienen tu sesión cuando inicias sesión con Google a través de Supabase. Sin ellas, esa función no funcionaría.",
      ],
      tabla: {
        encabezados: ["Cookie", "Proveedor", "Finalidad", "Duración", "Tipo"],
        filas: [
          [
            "sb-<referencia-proyecto>-auth-token",
            "Supabase (primera parte)",
            "Mantiene tu sesión de autenticación después de iniciar sesión con Google.",
            "Hasta que expire el token de sesión o cierres la sesión.",
            "Propia, httpOnly, no publicitaria",
          ],
          [
            "sb-<referencia-proyecto>-auth-token-code-verifier",
            "Supabase (primera parte)",
            "Verificador temporal del flujo de inicio de sesión (PKCE) con Google.",
            "Se elimina al completar el inicio de sesión.",
            "Propia, httpOnly, temporal",
          ],
        ],
      },
      nota: "Importante: el nombre exacto incluye la referencia de nuestro proyecto de Supabase y solo aparece si iniciaste sesión. Son cookies httpOnly: no pueden leerlas los scripts del navegador y no se usan para seguimiento ni publicidad.",
    },
    {
      id: "analiticas",
      titulo: "Cookies analíticas",
      parrafos: [
        "Hoy no utilizamos ninguna cookie analítica (medición de tráfico o estadísticas de uso).",
        "Si en el futuro instalamos una herramienta de este tipo, la describiremos en esta sección y solo se activará si lo autorizas en el panel de preferencias o si la aceptas expresamente.",
      ],
    },
    {
      id: "marketing",
      titulo: "Cookies de marketing",
      parrafos: [
        "Hoy no utilizamos cookies de marketing, publicidad ni remarcado, tampoco píxeles de terceros.",
        "Si en el futuro las incorporamos, aparecerán descritas aquí y solo se activarán con tu consentimiento previo.",
      ],
    },
    {
      id: "preferencia",
      titulo: "Almacenamiento de tu preferencia",
      parrafos: [
        "Tu decisión sobre cookies se guarda en el almacenamiento local del navegador (localStorage), bajo la clave destino-paisa:consentimiento-cookies.",
        "Es una preferencia tuya, no un identificador de seguimiento: no viaja a nuestros servidores ni se comparte con nadie. Si la borras desde tu navegador, el aviso volverá a aparecer en tu próxima visita.",
      ],
    },
    {
      id: "gestionar",
      titulo: "Cómo gestionar o retirar tu consentimiento",
      parrafos: [
        "Puedes cambiar tu decisión en cualquier momento y de dos maneras:",
      ],
      subsecciones: [
        {
          titulo: "Desde el sitio",
          parrafos: [
            'Abre el panel de preferencias con el botón "Configuración de cookies" de esta página, o con el enlace del mismo nombre en el footer de cualquier página.',
          ],
        },
        {
          titulo: "Desde tu navegador",
          parrafos: [
            "Tu navegador permite bloquear o eliminar cookies desde su configuración; consulta la ayuda de Chrome, Safari, Firefox o Edge según el que uses.",
          ],
        },
      ],
      nota: "Importante: bloquear las cookies necesarias puede impedir el inicio de sesión con Google.",
    },
    {
      id: "actualizaciones",
      titulo: "Actualizaciones de esta política",
      parrafos: [
        "Esta política puede actualizarse si incorporamos cookies nuevas o cambiamos los servicios del sitio.",
        "La fecha de última actualización indica la versión vigente. Si agregamos una categoría de cookies nueva, volveremos a pedirte tu consentimiento antes de activarla, aunque ya hubieras decidido antes.",
      ],
    },
    {
      id: "contacto",
      titulo: "Contacto",
      parrafos: [
        `Escríbenos al correo ${RESPONSABLE.correo} o por WhatsApp al ${WHATSAPP_LEGIBLE} para preguntas sobre esta política.`,
        `También puedes presentar quejas ante la ${AUTORIDAD_CONTROL}.`,
      ],
    },
  ],
};
