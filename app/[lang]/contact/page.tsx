import { Contact } from "@/features/contact";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/contact">) {
  return pageMetadata(params, "contact", "/contact");
}

export default function ContactPage() {
  return <Contact />;
}
