import type { DocumentoLegal } from "@/types/legal";
import {
  AUTORIDAD_CONTROL,
  MARCO_LEGAL,
  RESPONSABLE,
  WHATSAPP_LEGIBLE,
} from "./responsable";

/**
 * Copy de la página /terminos. Modelo actual de la plataforma: informativa,
 * sin pagos ni reservas; la contratación ocurre directamente con el proveedor.
 */
export const TERMINOS: DocumentoLegal = {
  titulo: "Términos y condiciones",
  bajada:
    "Estas condiciones regulan el uso del sitio web de Destino Paisa. Al navegar por él, aceptas lo que encontrarás a continuación.",
  fechaActualizacion: "28 de noviembre de 2026",
  secciones: [
    {
      id: "identificacion",
      titulo: "Identificación del titular de la plataforma",
      parrafos: [
        `El sitio web de Destino Paisa es operado por ${RESPONSABLE.razonSocial}, titular del NIT ${RESPONSABLE.nit}, con domicilio en ${RESPONSABLE.direccion}, ${RESPONSABLE.ciudad}, Colombia.`,
        `Puedes comunicarte con nosotros por WhatsApp al ${WHATSAPP_LEGIBLE} o al correo ${RESPONSABLE.correo}.`,
        "El acceso y la navegación por el sitio implican la aceptación plena de estos términos en su versión vigente. Si no estás de acuerdo, por favor abstente de usar la plataforma.",
      ],
    },
    {
      id: "objeto",
      titulo: "Objeto y naturaleza del servicio",
      parrafos: [
        "Destino Paisa es una plataforma informativa y de difusión cuyo propósito es conectar viajeros con proveedores de experiencias turísticas, tours y servicios de transporte en Antioquia, Colombia.",
        "En concreto, la plataforma:",
      ],
      lista: [
        "Publica información de tours, destinos y servicios de transporte ofrecidos por proveedores turísticos independientes.",
        "Facilita el contacto directo entre el viajero y el proveedor, a través de canales como WhatsApp.",
        "No vende, no cobra, no reserva ni ejecuta los servicios publicados: actúa como intermediario informativo y no es parte del contrato que celebres con el proveedor.",
      ],
      parrafosFinales: [
        "En consecuencia, las obligaciones comerciales, los precios y la ejecución de cada experiencia corresponden exclusivamente al proveedor que la ofrezca.",
      ],
    },
    {
      id: "usuario",
      titulo: "Condición de usuario y capacidad",
      parrafos: [
        "El acceso al sitio es libre y gratuito. Al navegar por él adquieres la condición de usuario y aceptas estos términos en la versión publicada en ese momento.",
        "Para contratar servicios de terceros contactados a través del sitio debes ser mayor de 18 años, o contar con la autorización y supervisión de tus padres o acudiente, conforme a la legislación colombiana.",
        "La sesión de usuario (inicio de sesión con Google) es opcional, personal e intransferible. Eres responsable de la confidencialidad de tu cuenta y de la actividad que ocurra a través de ella.",
      ],
    },
    {
      id: "informacion",
      titulo: "Información publicada y veracidad",
      parrafos: [
        "Las descripciones, fotografías, duraciones, itinerarios y recomendaciones publicados provienen de los proveedores de los servicios o de fuentes públicas, y se presentan con fines informativos.",
        "Esta información puede variar sin previo aviso por clima, disponibilidad, temporadas o cambios de los propios proveedores. Antes de viajar, te recomendamos confirmar los detalles directamente con el proveedor por WhatsApp.",
        "Hacemos esfuerzos razonables por publicar información actualizada y clara, pero no garantizamos que esté libre de errores u omisiones.",
      ],
    },
    {
      id: "condiciones-comerciales",
      titulo: "Condiciones comerciales de los servicios de terceros",
      parrafos: [
        "Cada proveedor define de manera independiente el precio, la disponibilidad, los requisitos de participación (edad, condición física, documentación), los seguros y las políticas de cambios, cancelaciones y reembolsos de su servicio.",
        "El contrato se forma exclusivamente entre tú y el proveedor. Destino Paisa no asume obligaciones ni responde por el cumplimiento de esas relaciones comerciales.",
        "Si tienes una inconformidad con un servicio contratado directamente con un proveedor, debes dirigirte a él. Sin perjuicio de lo anterior, conservas los derechos irrenunciables que te reconoce el " +
          MARCO_LEGAL.consumidor +
          " y puedes acudir ante la " +
          AUTORIDAD_CONTROL +
          ".",
      ],
    },
    {
      id: "pagos",
      titulo: "Ausencia de pagos y reservas a través del sitio",
      parrafos: [
        "Actualmente la plataforma no procesa pagos, no emite reservas, tiquetes ni comprobantes, y no solicita datos de tarjetas ni de otros medios de pago.",
      ],
      nota: "Importante: cualquier persona que te solicite dinero o datos financieros a nombre de Destino Paisa está actuando por fuera de nuestros canales. Repórtalo de inmediato por nuestras vías de contacto oficiales.",
    },
    {
      id: "uso",
      titulo: "Uso de la plataforma y conductas prohibidas",
      parrafos: ["Al usar el sitio, te comprometes a no:"],
      lista: [
        "Emplearlo para fines ilícitos, fraudulentos o lesivos contra otros usuarios, proveedores o terceros.",
        "Intentar acceder a áreas restringidas, interferir con su funcionamiento o alterar su contenido.",
        "Extraer información de forma masiva o automatizada (scraping) sin autorización previa y por escrito.",
        "Suplantar la identidad de otra persona o de un proveedor, o hacerte pasar por un representante de Destino Paisa.",
        "Publicar o transmitir contenido que vulnere derechos de terceros.",
      ],
      parrafosFinales: [
        "El incumplimiento de estas reglas nos faculta para restringir el acceso al sitio de quien incurra en ellas.",
      ],
    },
    {
      id: "propiedad-intelectual",
      titulo: "Propiedad intelectual e industrial",
      parrafos: [
        `La marca, el logotipo, los textos, el diseño y, en general, todos los elementos del sitio son titularidad de ${RESPONSABLE.razonSocial} o de sus licenciantes, y están protegidos por la normativa colombiana de propiedad intelectual.`,
        "Las fotografías de destinos y experiencias se usan con autorización de sus autores o mediante licencias que permiten su uso; se conservan los créditos correspondientes cuando aplican.",
        "No se concede licencia alguna para usar estos contenidos con fines comerciales sin autorización previa y por escrito. Se permite la cita y el uso personal o educativo conforme a la ley.",
      ],
    },
    {
      id: "enlaces",
      titulo: "Enlaces a sitios y servicios de terceros",
      parrafos: [
        "El sitio contiene enlaces y datos de contacto de terceros (WhatsApp, redes sociales y proveedores). Esos contenidos no son controlados por Destino Paisa.",
        "Cada tercero es responsable de sus propios contenidos, servicios y políticas de privacidad. Te recomendamos revisarlas antes de compartir información personal con ellos.",
      ],
    },
    {
      id: "responsabilidad",
      titulo: "Limitación de responsabilidad",
      parrafos: [
        "En la máxima medida permitida por la ley, Destino Paisa no será responsable por la indisponibilidad total o parcial del sitio, por errores u omisiones en los contenidos informativos, ni por los daños derivados de los servicios prestados por los proveedores con quienes decidas contratar.",
        "Lo anterior se entiende sin perjuicio de los derechos irrenunciables de los consumidores reconocidos por el Estatuto del Consumidor y de las responsabilidades que la ley colombiana no permita excluir.",
      ],
    },
    {
      id: "datos",
      titulo: "Protección de datos personales",
      parrafos: [
        `El tratamiento de datos personales se rige por la ${MARCO_LEGAL.datosPersonales}. Al usar el sitio e iniciar sesión, autorizas el tratamiento de tus datos conforme a esa política.`,
        "El detalle sobre qué datos tratamos, para qué y cómo ejercer tus derechos está en nuestra Política de privacidad, y el uso de cookies y almacenamiento local está descrito en la Política de cookies.",
      ],
      enlaces: [
        {
          texto: "Política de privacidad",
          href: "/politica-de-privacidad",
        },
        { texto: "Política de cookies", href: "/cookies" },
      ],
    },
    {
      id: "modificaciones",
      titulo: "Modificaciones de los términos",
      parrafos: [
        "Podemos actualizar estos términos para reflejar cambios en el sitio, en los servicios publicados o en la normativa aplicable.",
        "La publicación de la versión actualizada en esta página constituye notificación suficiente, y la fecha de última actualización indica la versión vigente. Los cambios no aplican de forma retroactiva a relaciones ya celebradas con proveedores.",
      ],
    },
    {
      id: "jurisdiccion",
      titulo: "Legislación aplicable y jurisdicción",
      parrafos: [
        `Estos términos se rigen por las leyes de la República de Colombia, en particular por el ${MARCO_LEGAL.consumidor} y la ${MARCO_LEGAL.comercioElectronico}.`,
        `Para cualquier controversia derivada del uso del sitio, las partes se someten a la jurisdicción de los tribunales competentes de ${RESPONSABLE.ciudad}, Colombia, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.`,
        `La ${AUTORIDAD_CONTROL} ejerce la autoridad de protección y defensa del consumidor y de los datos personales.`,
      ],
    },
  ],
  cierre: {
    titulo: "¿Preguntas sobre estos términos?",
    parrafos: [
      `Escríbenos por WhatsApp al ${WHATSAPP_LEGIBLE} o al correo ${RESPONSABLE.correo}, y con gusto te ayudamos.`,
    ],
  },
};
