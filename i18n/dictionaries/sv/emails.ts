import type { Dictionary } from "../types";

export const emails: Dictionary["emails"] = {
  signoff: "Teamet på TransferLinkz",
  privacyPolicy: "Integritetspolicy",
  waitlist: {
    subject: "Du står på TransferLinkz väntelista",
    preheader: "Tack för att du gick med. Vi hör av oss om tidig åtkomst.",
    heading: "Du står på listan",
    intro:
      "Tack för att du gick med i TransferLinkz väntelista. Vi tar in en liten grupp pilotpartner inför 2026 och hör av oss om tidig åtkomst.",
    reply:
      "Under tiden, om du har frågor om hur TransferLinkz skulle kunna passa din verksamhet, svara bara på det här mejlet.",
    footer: (site) =>
      `Du får det här mejlet eftersom någon gick med i väntelistan på ${site} med den här adressen. Om det inte var du, svara så tar vi bort den.`,
  },
  contact: {
    subject: "Vi har tagit emot ditt meddelande",
    preheader: "Vi återkommer så snart vi kan.",
    heading: "Vi har fått ditt meddelande",
    body: "Tack för att du hörde av dig. Vi har tagit emot ditt meddelande och återkommer så snart vi kan.",
    extra:
      "Om det är något du glömde nämna kan du bara svara på det här mejlet.",
    footer: (site) =>
      `Du får det här mejlet eftersom någon skickade ett meddelande via kontaktformuläret på ${site} med den här adressen. Om det inte var du kan du bortse från mejlet.`,
  },
  greetingNamed: (name) => `Hej ${name},`,
  greetingPlain: "Hej,",
};
