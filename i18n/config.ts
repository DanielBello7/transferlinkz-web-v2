// The languages the site is available in. English is the default: its pages
// live at the root (/about), and every other language under its code (/es/about).
export const locales = ["en", "es", "sv"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// For Open Graph (how a link preview describes the page's language)
export const openGraphLocale: Record<Locale, string> = {
  en: "en_GB",
  es: "es_ES",
  sv: "sv_SE",
};
