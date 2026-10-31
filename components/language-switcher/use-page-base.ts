import { usePathname } from "next/navigation";
import { locales } from "@/i18n/config";

// The page's path without a language prefix, whichever form it arrives in
// ("/about", "/es/about", or the internal "/en/about"). Client components only.
export function usePageBase() {
  const pathname = usePathname();
  const first = pathname.split("/")[1];
  const isPrefixed = (locales as readonly string[]).includes(first);
  return isPrefixed ? pathname.slice(first.length + 1) || "/" : pathname;
}
