import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import { isLocale, type Locale } from "./config";
import { dictionaries } from "./dictionaries";
import { localePath } from "./locale-path";

// The language of the page being rendered, read from the URL (the [lang]
// segment). Works in any server component without passing it down. Not
// available in client components or server actions: those get what they need as
// props or form fields.
export async function getLocale(): Promise<Locale> {
	const value = await lang();
	if (!isLocale(value)) notFound();
	return value;
}

// For code that is handed the language directly (generateMetadata receives it
// in `params`: root params don't work there)
export function dictionaryFor(lang: string) {
	if (!isLocale(lang)) notFound();
	return { lang, dict: dictionaries[lang] };
}

export async function getDictionary() {
	return dictionaries[await getLocale()];
}

// A link to a page of this site, in the current language
export async function getHref(path: string) {
	return localePath(await getLocale(), path);
}
