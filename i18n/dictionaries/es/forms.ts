import type { Dictionary } from "../types";

export const forms: Dictionary["forms"] = {
  nameRequired: "Escribe tu nombre",
  nameTooLong: (max) => `Usa menos de ${max} caracteres para tu nombre`,
  emailRequired: "Escribe tu correo electrónico",
  emailInvalid: "Escribe un correo válido, como tu@empresa.com",
  companyTooLong: (max) =>
    `Usa menos de ${max} caracteres para el nombre de la empresa`,
  roleInvalid: "Elige una de las opciones",
  messageRequired: "Cuéntanos en qué podemos ayudarte",
  messageTooLong: (max) => `Usa menos de ${max} caracteres en tu mensaje`,
  waitlistTooMany: (support) =>
    `Demasiados intentos. Inténtalo más tarde o escribe a ${support}.`,
  waitlistFailed: (support) =>
    `Algo salió mal por nuestra parte. Inténtalo de nuevo en un momento o escribe a ${support}.`,
  contactTooMany: (support) =>
    `Demasiados mensajes. Inténtalo más tarde o escribe a ${support}.`,
  contactFailed: (support) =>
    `No hemos podido enviar tu mensaje en este momento. Inténtalo de nuevo o escríbenos a ${support}.`,
};
