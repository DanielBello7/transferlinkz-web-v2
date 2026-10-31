import type { Dictionary } from "../types";

export const waitlist: Dictionary["waitlist"] = {
  hero: {
    eyebrow: "Acceso anticipado",
    title: "Únete a la lista de espera.",
    intro:
      "Estamos incorporando a un grupo reducido de socios piloto para 2026. Cuéntanos quién eres y te escribiremos sobre el acceso anticipado.",
  },
  form: {
    title: "Únete a la lista de espera",
    name: { label: "Nombre completo", placeholder: "Ana García" },
    email: { label: "Correo de trabajo", placeholder: "tu@correoempresa.com" },
    company: {
      label: "Empresa (opcional)",
      placeholder: "Nombre de la empresa",
    },
    noteBefore:
      "Solo usaremos tus datos para contactarte sobre el acceso anticipado. Lee nuestra",
    noteLink: "Política de privacidad",
    noteAfter: ".",
    submit: "Unirme a la lista de espera",
    joining: "Uniéndote…",
    websiteTrap: "Sitio web",
  },
  success: {
    title: "Ya estás en la lista",
    body: "Gracias por unirte. Te escribiremos sobre el acceso anticipado.",
  },
};
