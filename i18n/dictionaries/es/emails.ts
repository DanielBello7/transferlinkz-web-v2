import type { Dictionary } from "../types";

export const emails: Dictionary["emails"] = {
  signoff: "El equipo de TransferLinkz",
  privacyPolicy: "Política de privacidad",
  waitlist: {
    subject: "Ya estás en la lista de espera de TransferLinkz",
    preheader:
      "Gracias por unirte. Te escribiremos sobre el acceso anticipado.",
    heading: "Ya estás en la lista",
    intro:
      "Gracias por unirte a la lista de espera de TransferLinkz. Estamos incorporando a un grupo reducido de socios piloto para 2026 y te escribiremos sobre el acceso anticipado.",
    reply:
      "Mientras tanto, si tienes dudas sobre cómo podría encajar TransferLinkz en tu operación, responde a este correo.",
    footer: (site) =>
      `Recibes este correo porque alguien se unió a la lista de espera de ${site} con esta dirección. Si no fuiste tú, responde y la eliminaremos.`,
  },
  contact: {
    subject: "Hemos recibido tu mensaje",
    preheader: "Te responderemos lo antes posible.",
    heading: "Tenemos tu mensaje",
    body: "Gracias por ponerte en contacto. Hemos recibido tu mensaje y te responderemos lo antes posible.",
    extra: "Si se te olvidó mencionar algo, responde a este correo.",
    footer: (site) =>
      `Recibes este correo porque alguien envió un mensaje a través del formulario de contacto de ${site} con esta dirección. Si no fuiste tú, puedes ignorarlo.`,
  },
  greetingNamed: (name) => `Hola, ${name}:`,
  greetingPlain: "Hola:",
};
