import { en } from "@/i18n/dictionaries/en";

// The options in the form's "I am a" list, by id. The labels are in the
// dictionary (contact.form.role.options); the form submits the id, so the
// server doesn't depend on the language it was shown in.
export const CONTACT_ROLE_IDS = [
  "tour-operator",
  "transfer-supplier",
  "driver",
  "travel-agency",
  "other",
] as const;

export type ContactRoleId = (typeof CONTACT_ROLE_IDS)[number];

export function isContactRole(value: string): value is ContactRoleId {
  return (CONTACT_ROLE_IDS as readonly string[]).includes(value);
}

// The English name of a role, for the email to the team (which is in English)
export function englishRoleLabel(id: ContactRoleId) {
  return en.contact.form.role.options[id];
}
