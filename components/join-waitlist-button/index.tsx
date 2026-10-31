import Link from "next/link";
import { getDictionary, getHref } from "@/i18n/server";
import { WAITLIST_HREF } from "@/lib/contact";

// Goes to the waitlist form
export async function JoinWaitlistButton() {
  const { common } = await getDictionary();

  return (
    <Link
      href={await getHref(WAITLIST_HREF)}
      className="rounded-lg bg-brand px-3 py-2.5 text-xs whitespace-nowrap text-white btn-lift btn-lift-brand hover:bg-brand-hover sm:px-6 sm:py-3 sm:text-sm"
    >
      {common.joinWaitlist}
    </Link>
  );
}
