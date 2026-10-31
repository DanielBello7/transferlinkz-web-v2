import type { Metadata } from "next";
import {
  defaultLocale,
  locales,
  openGraphLocale,
  type Locale,
} from "@/i18n/config";
import { localePath } from "@/i18n/locale-path";
import { dictionaryFor } from "@/i18n/server";
import { site } from "@/lib/site";

type PageKey =
  "about" | "solutions" | "contact" | "waitlist" | "privacy" | "terms";

// The page's own address, and where to find it in the other languages. The
// links between them (hreflang) are what let search engines show the right
// language to each visitor.
export function localeAlternates(
  lang: Locale,
  path: string,
): NonNullable<Metadata["alternates"]> {
  return {
    canonical: localePath(lang, path),
    languages: {
      ...Object.fromEntries(locales.map((l) => [l, localePath(l, path)])),
      "x-default": localePath(defaultLocale, path),
    },
  };
}

// A child route's openGraph and twitter replace the layout's rather than
// merging with them, so each page restates the shared parts here, including the
// share image (app/[lang]/opengraph-image.tsx), which would otherwise be lost.
export async function pageMetadata(
  params: Promise<{ lang: string }>,
  page: PageKey,
  path: string,
): Promise<Metadata> {
  const { lang, dict } = dictionaryFor((await params).lang);
  const { title, description } = dict.meta.pages[page];
  const socialTitle = `${title} | ${site.name}`;
  const shareImage = {
    url: localePath(lang, "/opengraph-image"),
    width: 1200,
    height: 630,
    alt: dict.meta.site.ogTitle,
  };

  return {
    title,
    description,
    alternates: localeAlternates(lang, path),
    openGraph: {
      type: "website",
      siteName: site.name,
      title: socialTitle,
      description,
      url: localePath(lang, path),
      locale: openGraphLocale[lang],
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [shareImage],
    },
  };
}
