import type { Dictionary } from "../types";

export const contact: Dictionary["contact"] = {
  hero: {
    eyebrow: "Kontakta oss",
    title: "Låt oss prata om dina transfers.",
    intro:
      "Berätta om ditt företag, transfervolymer och destinationer. Vi svarar inom en arbetsdag.",
  },
  form: {
    title: "Skicka ett meddelande",
    name: { label: "Fullständigt namn", placeholder: "Andersson" },
    email: { label: "Jobbmejl", placeholder: "du@foretagsmejl.se" },
    company: { label: "Företag", placeholder: "Företagsnamn" },
    role: {
      label: "Jag är",
      options: {
        "tour-operator": "Researrangör",
        "transfer-supplier": "Transferleverantör",
        driver: "Förare",
        "travel-agency": "Resebyrå",
        other: "Annat",
      },
    },
    message: {
      label: "Hur kan vi hjälpa dig?",
      placeholder: "Berätta om din verksamhet",
      hint: "Ange dina transfervolymer, destinationer och eventuella datum du har i åtanke.",
    },
    note: "Vi använder bara dina uppgifter för att svara på ditt meddelande.",
    submit: "Skicka meddelande",
    sending: "Skickar…",
    websiteTrap: "Webbplats",
  },
  success: {
    title: "Meddelandet skickat",
    body: "Tack för att du hörde av dig. Vi återkommer så snart vi kan.",
  },
};
