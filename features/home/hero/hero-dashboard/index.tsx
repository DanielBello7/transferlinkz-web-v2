import Image from "next/image";
import { getDictionary } from "@/i18n/server";

export async function HeroDashboard() {
  const { home } = await getDictionary();

  return (
    <Image
      src="/images/hero-dashboard.webp"
      alt={home.hero.dashboardAlt}
      width={1006}
      height={574}
      priority
      unoptimized
      className="mx-auto h-auto w-full max-w-[1006px]"
    />
  );
}
