import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { CardGlow } from "@/components/card-glow";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { locales, openGraphLocale } from "@/i18n/config";
import { localePath } from "@/i18n/locale-path";
import { dictionaryFor, getDictionary, getLocale } from "@/i18n/server";
import { absoluteUrl, site } from "@/lib/site";
import "../globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
	variable: "--font-plus-jakarta-sans",
	subsets: ["latin"],
});

// One static copy of every page per language
export function generateStaticParams() {
	return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
	params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
	const { lang, dict } = dictionaryFor((await params).lang);
	const meta = dict.meta.site;

	return {
		metadataBase: new URL(site.url),
		title: { default: meta.title, template: `%s | ${site.name}` },
		description: meta.description,
		keywords: [...meta.keywords],
		applicationName: site.name,
		openGraph: {
			type: "website",
			siteName: site.name,
			title: meta.ogTitle,
			description: meta.ogDescription,
			url: localePath(lang, "/"),
			locale: openGraphLocale[lang],
		},
		twitter: {
			card: "summary_large_image",
			title: meta.ogTitle,
			description: meta.ogDescription,
		},
		// Indexing is the default; only the Google-specific extra is set here, so a
		// page's own noindex (the 404) is not contradicted
		robots: {
			googleBot: { "max-image-preview": "large" },
		},
	};
}

export const viewport: Viewport = {
	themeColor: site.themeColor,
};

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
	const lang = await getLocale();
	const { site: meta } = (await getDictionary()).meta;

	// Tells search engines who runs the site; the Organization is referenced by id
	const structuredData = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Organization",
				"@id": absoluteUrl("/#organization"),
				name: site.name,
				url: site.url,
				email: site.email,
				logo: absoluteUrl("/icon.svg"),
				description: meta.description,
				...(site.socials.length > 0 ? { sameAs: site.socials } : {}),
			},
			{
				"@type": "WebSite",
				"@id": absoluteUrl("/#website"),
				name: site.name,
				url: site.url,
				inLanguage: lang,
				publisher: { "@id": absoluteUrl("/#organization") },
			},
		],
	};

	return (
		<html
			lang={lang}
			className={`${plusJakartaSans.variable} h-full antialiased`}>
			<body className="min-h-full flex flex-col">
				{/* Scroll-reveal content starts hidden; without JS, show it as is */}
				<noscript>
					<style>
						{".reveal-hidden{opacity:1!important;translate:none!important}"}
					</style>
				</noscript>
				<Header />
				<main className="flex-1">{children}</main>
				<Footer />
				<JsonLd data={structuredData} />
				<CardGlow />
			</body>
		</html>
	);
}
