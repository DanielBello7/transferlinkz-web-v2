import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { localePath } from "@/i18n/locale-path";
import { absoluteUrl } from "@/lib/site";

// Add a route here when a page is added. lastModified is left out on purpose:
// there is no honest per-page date to report yet, and a wrong one is worse
// than none. Every page is listed once per language, each pointing at its
// translations.
const ROUTES = [
	"/",
	"/solutions",
	"/waitlist",
	"/about",
	"/contact",
	"/privacy",
	"/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
	return ROUTES.flatMap((path) =>
		locales.map((locale) => ({
			url: absoluteUrl(localePath(locale, path)),
			alternates: {
				languages: Object.fromEntries(
					locales.map((l) => [l, absoluteUrl(localePath(l, path))]),
				),
			},
		})),
	);
}
