import { Privacy } from "@/features/privacy";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/privacy">) {
  return pageMetadata(params, "privacy", "/privacy");
}

export default function PrivacyPage() {
  return <Privacy />;
}
