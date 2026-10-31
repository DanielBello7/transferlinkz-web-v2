// The legal documents, in the order the switcher shows them. Their names are
// in the dictionary (legal.documents).
export const LEGAL_PAGES = [
  { key: "privacy", href: "/privacy" },
  { key: "terms", href: "/terms" },
] as const;

export type LegalDocumentKey = (typeof LEGAL_PAGES)[number]["key"];
