import Image from "next/image";
import Link from "next/link";
import { getDictionary, getHref } from "@/i18n/server";

// Intrinsic ratio of public/images/logo.svg (403 x 87)
const LOGO_RATIO = 87 / 403;

type LogoProps = {
  width?: number;
  className?: string;
};

export async function Logo({ width = 122, className }: LogoProps) {
  const { common } = await getDictionary();

  return (
    <Link
      href={await getHref("/")}
      aria-label={common.logoLabel}
      className="block w-fit shrink-0"
    >
      <Image
        src="/images/logo.svg"
        alt="TransferLinkz"
        width={width}
        height={Math.round(width * LOGO_RATIO)}
        priority
        className={className}
      />
    </Link>
  );
}
