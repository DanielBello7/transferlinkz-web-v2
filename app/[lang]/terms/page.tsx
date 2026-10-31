import { Terms } from "@/features/terms";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: PageProps<"/[lang]/terms">) {
  return pageMetadata(params, "terms", "/terms");
}

export default function TermsPage() {
  return <Terms />;
}
