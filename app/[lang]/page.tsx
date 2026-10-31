import type { Metadata } from "next";
import { Home } from "@/features/home";
import { localeAlternates } from "@/lib/metadata";
import { dictionaryFor } from "@/i18n/server";

// The title, description and share card come from the layout
export async function generateMetadata({
  params,
}: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = dictionaryFor((await params).lang);
  return { alternates: localeAlternates(lang, "/") };
}

export default function HomePage() {
  return <Home />;
}
