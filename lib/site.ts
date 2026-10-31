import { SUPPORT_EMAIL } from "@/lib/contact";

// Profile pages, without the tracking parameters the share links carry
const socialLinks = {
  x: "https://x.com/transferlinkz",
  linkedin: "https://www.linkedin.com/company/transferlinkz",
  instagram: "https://www.instagram.com/transferlinkz",
} as const;

// The site's identity, the same in every language. Page titles and descriptions
// are in the dictionaries (i18n/dictionaries/*/meta.ts).
export const site = {
  name: "TransferLinkz",
  // Set NEXT_PUBLIC_SITE_URL on the host; the fallback is the planned domain
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://transferlinkz.com",
  email: SUPPORT_EMAIL,
  themeColor: "#040a1a",
  socialLinks,
  // Listed in the Organization structured data (sameAs)
  socials: Object.values(socialLinks),
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
