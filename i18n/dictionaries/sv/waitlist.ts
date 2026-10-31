import type { Dictionary } from "../types";

export const waitlist: Dictionary["waitlist"] = {
  hero: {
    eyebrow: "Tidig åtkomst",
    title: "Gå med i väntelistan.",
    intro:
      "Vi tar in en liten grupp pilotpartner inför 2026. Berätta vem du är så hör vi av oss om tidig åtkomst.",
  },
  form: {
    title: "Gå med i väntelistan",
    name: { label: "Fullständigt namn", placeholder: "Anna Andersson" },
    email: { label: "Jobbmejl", placeholder: "du@foretagsmejl.se" },
    company: { label: "Företag (valfritt)", placeholder: "Företagsnamn" },
    noteBefore:
      "Vi använder bara dina uppgifter för att kontakta dig om tidig åtkomst. Läs vår",
    noteLink: "integritetspolicy",
    noteAfter: ".",
    submit: "Gå med i väntelistan",
    joining: "Går med…",
    websiteTrap: "Webbplats",
  },
  success: {
    title: "Du står på listan",
    body: "Tack för att du gick med. Vi hör av oss om tidig åtkomst.",
  },
};
