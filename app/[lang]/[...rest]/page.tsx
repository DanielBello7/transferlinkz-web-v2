import type { Metadata } from "next";
import { NotFoundPage } from "@/features/not-found";
import { dictionaryFor } from "@/i18n/server";

// Every address with no page of its own lands here (the proxy sends them to the
// English routes), so the 404 page is shown in the site's layout and language.
//
// It renders the page rather than calling notFound(): Next builds a not-found
// page from the root layout's not-found file only for its own error path, which
// has no language and shows a blank shell until the scripts have loaded. The
// cost is a 200 status instead of 404; noindex keeps these out of search results.
export async function generateMetadata({
  params,
}: PageProps<"/[lang]/[...rest]">): Promise<Metadata> {
  const { dict } = dictionaryFor((await params).lang);

  return {
    title: dict.meta.pages.notFound.title,
    robots: { index: false, follow: false },
  };
}

export default function UnknownPage() {
  return <NotFoundPage />;
}
