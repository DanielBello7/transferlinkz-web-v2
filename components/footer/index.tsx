import { Logo } from "@/components/logo";
import { Reveal } from "@/components/reveal";
import { getDictionary, getHref } from "@/i18n/server";
import { site } from "@/lib/site";
import { FooterLinks, type FooterLink } from "./footer-links";

export async function Footer() {
  const { common } = await getDictionary();
  const t = common.footer;

  const companyLinks: FooterLink[] = [
    { label: t.about, href: await getHref("/about") },
    { label: t.solutions, href: await getHref("/solutions") },
    { label: t.legal, href: await getHref("/terms") },
  ];

  const socialLinks: FooterLink[] = [
    { label: t.twitter, href: site.socialLinks.x, external: true },
    { label: t.linkedin, href: site.socialLinks.linkedin, external: true },
    { label: t.instagram, href: site.socialLinks.instagram, external: true },
  ];

  return (
    <footer className="bg-ink-900 bg-[url('/images/footer-pattern.svg')] bg-top">
      <div className="mx-auto max-w-[1240px] border-x border-frame/25 px-[19px] pt-12 pb-12 sm:pt-[105px] sm:pb-[99px]">
        <Reveal
          variant="fade"
          className="flex flex-col gap-12 sm:flex-row sm:justify-between"
        >
          <div className="pt-1">
            <Logo width={166} />
            <p className="mt-7 max-w-[290px] text-base leading-8 text-white">
              {t.tagline}
            </p>
          </div>

          <nav aria-label={t.label} className="flex">
            <FooterLinks
              links={companyLinks}
              className="w-[160px] sm:w-[232px]"
            />
            <FooterLinks
              links={socialLinks}
              externalHint={t.opensInNewTab}
              className="sm:w-[107px]"
            />
          </nav>
        </Reveal>
      </div>
    </footer>
  );
}
