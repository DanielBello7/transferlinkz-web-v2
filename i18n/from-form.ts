import { defaultLocale, isLocale, type Locale } from "./config";

// The language a form was submitted from. Server actions can't read the page's
// language, so each form carries it in a hidden "lang" field. It is checked
// against the list of languages, since anyone can send anything.
export function localeFromForm(formData: FormData): Locale {
  const value = formData.get("lang");
  return typeof value === "string" && isLocale(value) ? value : defaultLocale;
}
