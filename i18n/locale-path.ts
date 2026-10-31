import { defaultLocale, type Locale } from "./config";

// The URL path of a page in a language: "/about" in English, "/es/about" in
// Spanish. The home page is "/" and "/es". Anchors ("#roles") and external
// links are left for the caller to handle.
export function localePath(locale: Locale, path: string) {
  const clean = path === "/" ? "" : path;
  if (locale === defaultLocale) return clean || "/";
  return `/${locale}${clean}`;
}
