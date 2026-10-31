import { locales, defaultLocale } from "./config";
import { dictionaries } from "./dictionaries";

// Compares every language with English. The types already catch a missing key,
// but not a list with a different number of items (FAQ, plans, steps), so this
// walks both dictionaries side by side.
//
//   npm run i18n:check
//
// Differences in structure fail the check. A string that is the same as the
// English one is only reported: brand names, prices and "404" are meant to be.

const source = dictionaries[defaultLocale];
const problems: string[] = [];
const sameAsEnglish: string[] = [];

function compare(path: string, english: unknown, other: unknown) {
	if (Array.isArray(english)) {
		if (!Array.isArray(other) || other.length !== english.length) {
			problems.push(
				`${path}: expected a list of ${english.length}, found ${
					Array.isArray(other) ? other.length : typeof other
				}`,
			);
			return;
		}
		english.forEach((item, index) =>
			compare(`${path}[${index}]`, item, other[index]),
		);
		return;
	}

	if (typeof english === "function") {
		if (typeof other !== "function") {
			problems.push(`${path}: expected a function`);
		}
		return;
	}

	if (english && typeof english === "object") {
		if (!other || typeof other !== "object") {
			problems.push(`${path}: expected an object`);
			return;
		}
		const expected = Object.keys(english);
		const found = Object.keys(other);
		for (const key of expected) {
			if (!(key in other)) problems.push(`${path}.${key}: missing`);
		}
		for (const key of found) {
			if (!(key in english)) problems.push(`${path}.${key}: not in English`);
		}
		for (const key of expected) {
			if (key in other) {
				compare(
					path ? `${path}.${key}` : key,
					(english as Record<string, unknown>)[key],
					(other as Record<string, unknown>)[key],
				);
			}
		}
		return;
	}

	if (typeof english === "string") {
		if (typeof other !== "string") {
			problems.push(`${path}: expected a string`);
		} else if (other === english && english !== "") {
			sameAsEnglish.push(path);
		}
	}
}

for (const locale of locales) {
	if (locale === defaultLocale) continue;
	problems.length = 0;
	sameAsEnglish.length = 0;
	compare("", source, dictionaries[locale]);

	// Languages without a translation of the legal documents say so to the reader
	if (!dictionaries[locale].legal.englishOnlyNotice.includes("{email}")) {
		problems.push("legal.englishOnlyNotice: must contain {email}");
	}

	console.log(`\n${locale}: ${problems.length} problem(s)`);
	for (const problem of problems) console.log(`  ✗ ${problem}`);
	if (sameAsEnglish.length > 0) {
		console.log(`  Same as English (check these are meant to be):`);
		for (const path of sameAsEnglish) console.log(`    ${path}`);
	}
	if (problems.length > 0) process.exitCode = 1;
}
