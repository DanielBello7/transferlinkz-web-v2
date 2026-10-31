import { Solutions } from "@/features/solutions";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/solutions">) {
  return pageMetadata(params, "solutions", "/solutions");
}

export default function SolutionsPage() {
  return <Solutions />;
}
