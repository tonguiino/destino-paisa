import type { DocumentoLegal } from "@/types/legal";
import {
  AUTORIDAD_CONTROL,
  MARCO_LEGAL,
  RESPONSABLE,
  WHATSAPP_LEGIBLE,
} from "./responsable";

/**
 * Copy de la página /politica-de-privacidad, alineado con la Ley 1581 de 2012
 * y el Decreto 1377 de 2013. El sitio hoy no tiene formularios ni bases de
 * datos de leads: los datos entran por la sesión con Google y por WhatsApp.
 */
export const PRIVACIDAD: DocumentoLegal = {
  titulo: "Política de privacidad",
  bajada:
    "Aquí te explicamos qué datos personales tratamos en Destino Paisa, para qué lo hacemos y cómo puedes ejercer tus derechos.",
  fechaActualizacion: "28 de noviembre de 2026",
  secciones: [
    {
      id: "responsable",
      titulo: "Responsable del tratamiento",
      parrafos: [
        `El responsable del tratamiento de tus datos personales es ${RESPONSABLE.razonSocial}, titular del NIT ${RESPONSABLE.nit}, con domicilio en ${RESPONSABLE.direccion}, ${RESPONSABLE.ciudad}, Colombia.`,
        `Canales de contacto: correo ${RESPONSABLE.correo} y WhatsApp ${WHATSAPP_LEGIBLE}.`,
      ],
    },
    {
      id: "marco",
      titulo: "Marco legal aplicable",
      parrafos: [
        `Esta política se rige por la ${MARCO_LEGAL.datosPersonales}, normas que desarrollan el derecho constitucional al habeas data.`,
        `Se aplican, además, el ${MARCO_LEGAL.consumidor} y la ${MARCO_LEGAL.comercioElectronico} en lo pertinente. La ${AUTORIDAD_CONTROL} es la autoridad de vigilancia y control en materia de protección de datos personales.`,
      ],
    },
    {
      id: "alcance",
      titulo: "Alcance de esta política",
      parrafos: [
        "Esta política aplica al sitio web de Destino Paisa y a los datos personales que nos entregas voluntariamente al usarlo.",
        "Importante: hoy el sitio no tiene formularios de contacto ni bases de datos propias de interesados. La conversación comercial ocurre en WhatsApp, una aplicación de terceros ajena a esta plataforma; el tratamiento que ella haga de tus mensajes se rige por sus propias políticas.",
      ],
    },
    {
      id: "datos",
      titulo: "Datos personales que tratamos",
      lista: [
        "Si inicias sesión con Google a través de Supabase: tu nombre, tu correo electrónico y el identificador de tu cuenta de Google, necesarios para crear y mantener tu sesión.",
        "Si nos escribes por WhatsApp o por correo: la información que decidas compartir en la conversación (por ejemplo, tu nombre, tu número de teléfono y tus mensajes).",
      ],
      listaOrdenada: false,
      parrafosFinales: [
        "No recopilamos datos de navegación con fines de seguimiento ni usamos herramientas de analítica. El detalle de cookies y almacenamiento local está en nuestra Política de cookies.",
      ],
      enlaces: [{ texto: "Política de cookies", href: "/cookies" }],
    },
    {
      id: "finalidades",
      titulo: "Finalidades del tratamiento",
      parrafos: ["Tratamos tus datos únicamente para:"],
      lista: [
        "Atender tus consultas y solicitudes de información sobre experiencias y servicios publicados.",
        "Crear, mantener y proteger tu sesión de usuario y la seguridad de tu cuenta.",
        "Mantener la comunicación por el canal que tú elijas (WhatsApp o correo) para la gestión de tu solicitud.",
        "Mejorar los contenidos y la organización del sitio.",
      ],
      parrafosFinales: [
        "No usamos tus datos para publicidad dirigida ni los cedemos a terceros con fines comerciales.",
      ],
    },
    {
      id: "sensibles",
      titulo: "Datos sensibles y datos de menores",
      parrafos: [
        "No te solicitamos datos sensibles (salud, huellas, origen racial o étnico, preferencias políticas, religiosas o de orientación sexual). Te pedimos no enviarlos por nuestros canales; si los recibimos por error, los eliminaremos.",
        "Los servicios publicados por los proveedores pueden tener restricciones de edad. El tratamiento de datos de menores de edad requiere, conforme a la ley, la autorización previa de sus padres o representante legal.",
      ],
    },
    {
      id: "autorizacion",
      titulo: "Autorización del titular",
      parrafos: [
        "Conforme al artículo 9 de la Ley 1581 de 2012, el tratamiento de datos personales requiere tu autorización previa, expresa e informada.",
        "Al iniciar sesión con Google o al contactarnos por los canales publicados, nos autorizas a tratar tus datos para las finalidades descritas en esta política.",
        'Puedes revocar esta autorización en cualquier momento siguiendo el procedimiento de la sección "Procedimiento para ejercer tus derechos". La revocación no afecta los tratamientos ya realizados.',
      ],
    },
    {
      id: "encargados",
      titulo: "Encargados del tratamiento y transferencia internacional",
      parrafos: [
        "Para operar el sitio, terceros tratan datos por nuestra cuenta como encargados:",
      ],
      lista: [
        "Supabase: proveedor de autenticación y almacenamiento de la sesión.",
        "Google: proveedor del inicio de sesión con tu cuenta de Google.",
        "El proveedor de infraestructura y hosting del sitio.",
      ],
      parrafosFinales: [
        "Estos proveedores operan infraestructura que puede estar ubicada fuera de Colombia. La transferencia se realiza bajo los mecanismos previstos por la normativa de datos personales y con finalidades estrictamente ligadas a las descritas en esta política.",
      ],
    },
    {
      id: "derechos",
      titulo: "Derechos del titular",
      parrafos: [
        "Conforme al artículo 8 de la Ley 1581 de 2012, como titular de los datos puedes:",
      ],
      lista: [
        "Conocer, acceder y solicitar prueba de la autorización otorgada.",
        "Actualizar y rectificar tus datos.",
        "Solicitar la supresión de tus datos cuando no exista deber legal de conservarlos.",
        "Revocar la autorización o solicitar la suspensión del tratamiento.",
        `Presentar quejas ante la ${AUTORIDAD_CONTROL}.`,
      ],
    },
    {
      id: "procedimiento",
      titulo: "Procedimiento para ejercer tus derechos",
      parrafos: [
        `Escribe a ${RESPONSABLE.correo} (o contáctanos por WhatsApp al ${WHATSAPP_LEGIBLE}) con el asunto "Protección de datos", indicando tu identificación y la solicitud concreta.`,
      ],
      listaOrdenada: true,
      lista: [
        "Si tu solicitud es una consulta, la atenderemos en un plazo máximo de diez (10) días hábiles, conforme al artículo 15 de la Ley 1581 de 2012.",
        "Si tu solicitud es un reclamo, lo atenderemos dentro de los quince (15) días hábiles siguientes; si requiere más tiempo, te informaremos el motivo y la fecha de respuesta, que no podrá superar ocho (8) días hábiles adicionales.",
        "Podremos pedirte información adicional para verificar tu identidad antes de atender la solicitud.",
      ],
    },
    {
      id: "seguridad",
      titulo: "Seguridad de la información",
      parrafos: [
        "Aplicamos medidas técnicas, humanas y administrativas razonables para proteger la información contra pérdida, acceso no autorizado o uso indebido. Las cookies de sesión llevan el atributo httpOnly: los scripts del navegador no pueden leerlas.",
      ],
      nota: "Importante: evita enviar datos sensibles o documentos de identificación por WhatsApp; es un canal de terceros fuera de nuestro control. Solo los solicitaremos cuando sea estrictamente necesario y por un canal seguro.",
    },
    {
      id: "vigencia",
      titulo: "Vigencia y modificación de esta política",
      parrafos: [
        "Esta política aplica desde su publicación y mientras conservemos tu información o exista una relación con el titular.",
        "Los cambios se publicarán en esta página con una nueva fecha de última actualización. Cuando un cambio sea relevante para tus derechos, procuraremos comunicarlo por los canales disponibles.",
      ],
    },
  ],
  cierre: {
    titulo: "¿Preguntas sobre tus datos personales?",
    parrafos: [
      `Escríbenos al correo ${RESPONSABLE.correo} o por WhatsApp al ${WHATSAPP_LEGIBLE}. También puedes presentar quejas ante la ${AUTORIDAD_CONTROL}.`,
    ],
  },
};
