import type { Dictionary } from "@/i18n/dictionaries/types";
import { EMAIL_PATTERN, readText } from "@/lib/validation";
import { isContactRole } from "./roles";
import type { ContactField, ContactValues } from "./state";

const MAX_LENGTH = {
  name: 120,
  email: 254,
  company: 160,
  message: 4000,
} as const;

export type ContactInput = {
  name: string;
  // Lower-cased
  email: string;
  // "" when left blank
  company: string;
  // The role's id, such as "tour-operator"
  role: string;
  message: string;
};

type ValidationResult =
  | { ok: true; input: ContactInput }
  | {
      ok: false;
      fieldErrors: Partial<Record<ContactField, string>>;
      values: ContactValues;
    };

// Checks the submitted form. Runs on the server: the browser's own checks
// are a convenience and can't be trusted.
export function validateContact(
  formData: FormData,
  messages: Dictionary["forms"],
): ValidationResult {
  const values: ContactValues = {
    name: readText(formData, "name"),
    email: readText(formData, "email"),
    company: readText(formData, "company"),
    role: readText(formData, "role"),
    message: readText(formData, "message"),
  };
  const fieldErrors: Partial<Record<ContactField, string>> = {};

  if (!values.name) {
    fieldErrors.name = messages.nameRequired;
  } else if (values.name.length > MAX_LENGTH.name) {
    fieldErrors.name = messages.nameTooLong(MAX_LENGTH.name);
  }

  if (!values.email) {
    fieldErrors.email = messages.emailRequired;
  } else if (
    values.email.length > MAX_LENGTH.email ||
    !EMAIL_PATTERN.test(values.email)
  ) {
    fieldErrors.email = messages.emailInvalid;
  }

  if (values.company.length > MAX_LENGTH.company) {
    fieldErrors.company = messages.companyTooLong(MAX_LENGTH.company);
  }

  if (!isContactRole(values.role)) {
    fieldErrors.role = messages.roleInvalid;
  }

  if (!values.message) {
    fieldErrors.message = messages.messageRequired;
  } else if (values.message.length > MAX_LENGTH.message) {
    fieldErrors.message = messages.messageTooLong(MAX_LENGTH.message);
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, fieldErrors, values };
  }

  return { ok: true, input: { ...values, email: values.email.toLowerCase() } };
}
