import { Waitlist } from "@/features/waitlist";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/waitlist">) {
  return pageMetadata(params, "waitlist", "/waitlist");
}

export default function WaitlistPage() {
  return <Waitlist />;
}
