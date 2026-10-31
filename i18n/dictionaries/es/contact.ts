import type { Dictionary } from "../types";

export const contact: Dictionary["contact"] = {
  hero: {
    eyebrow: "Contacto",
    title: "Hablemos de tus traslados.",
    intro:
      "Cuéntanos sobre tu negocio, el volumen de traslados y los destinos. Respondemos en un día laborable.",
  },
  form: {
    title: "Envíanos un mensaje",
    name: { label: "Nombre completo", placeholder: "García" },
    email: { label: "Correo de trabajo", placeholder: "tu@correoempresa.com" },
    company: { label: "Empresa", placeholder: "Nombre de la empresa" },
    role: {
      label: "Soy",
      options: {
        "tour-operator": "Operador turístico",
        "transfer-supplier": "Proveedor de traslados",
        driver: "Conductor",
        "travel-agency": "Agencia de viajes",
        other: "Otro",
      },
    },
    message: {
      label: "¿En qué podemos ayudarte?",
      placeholder: "Cuéntanos sobre tu operación",
      hint: "Indica el volumen de traslados, los destinos y las fechas que tengas en mente.",
    },
    note: "Solo usaremos tus datos para responder a tu mensaje.",
    submit: "Enviar mensaje",
    sending: "Enviando…",
    websiteTrap: "Sitio web",
  },
  success: {
    title: "Mensaje enviado",
    body: "Gracias por ponerte en contacto. Te responderemos lo antes posible.",
  },
};
