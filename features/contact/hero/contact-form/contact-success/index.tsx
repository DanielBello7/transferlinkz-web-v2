import Link from "next/link";
import { CheckBadgeIcon } from "@/components/check-badge-icon";

type ContactSuccessProps = {
  title: string;
  body: string;
  homeHref: string;
  backToHome: string;
};

// Replaces the form once the message has been sent
export function ContactSuccess({
  title,
  body,
  homeHref,
  backToHome,
}: ContactSuccessProps) {
  return (
    <div role="status" className="py-6 text-center">
      <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#eef4ff] text-brand">
        <CheckBadgeIcon className="size-6" />
      </div>
      <h2 className="mt-5 text-xl leading-7 font-semibold text-black">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-[340px] text-sm leading-6 font-light text-navy">
        {body}
      </p>
      <Link
        href={homeHref}
        className="btn-lift btn-lift-soft mt-6 inline-block rounded-lg border border-[#d0d6e8] px-6 py-3 text-sm text-navy hover:bg-[#eef1fa]"
      >
        {backToHome}
      </Link>
    </div>
  );
}
