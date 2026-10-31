import { About } from "@/features/about";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: PageProps<"/[lang]/about">) {
  return pageMetadata(params, "about", "/about");
}

export default function AboutPage() {
  return <About />;
}
