import type { Dictionary } from "../types";

export const forms: Dictionary["forms"] = {
  nameRequired: "Ange ditt namn",
  nameTooLong: (max) => `Håll ditt namn under ${max} tecken`,
  emailRequired: "Ange din mejladress",
  emailInvalid: "Ange en giltig mejladress, till exempel du@foretag.se",
  companyTooLong: (max) => `Håll företagsnamnet under ${max} tecken`,
  roleInvalid: "Välj ett av alternativen",
  messageRequired: "Berätta hur vi kan hjälpa dig",
  messageTooLong: (max) => `Håll ditt meddelande under ${max} tecken`,
  waitlistTooMany: (support) =>
    `För många försök. Försök igen senare eller mejla ${support}.`,
  waitlistFailed: (support) =>
    `Något gick fel hos oss. Försök igen om en stund eller mejla ${support}.`,
  contactTooMany: (support) =>
    `För många meddelanden. Försök igen senare eller mejla ${support}.`,
  contactFailed: (support) =>
    `Vi kunde inte skicka ditt meddelande just nu. Försök igen eller mejla oss på ${support}.`,
};
