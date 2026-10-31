import { JoinWaitlistButton } from "@/components/join-waitlist-button";
import { Logo } from "@/components/logo";
import { getDictionary, getHref } from "@/i18n/server";
import { AnnouncementBar } from "./announcement-bar";
import { NavLink } from "./nav-link";

export async function Header() {
  const { common } = await getDictionary();

  const navLinks = [
    { label: common.nav.contact, href: await getHref("/contact") },
    { label: common.nav.about, href: await getHref("/about") },
  ];

  return (
    <header>
      <AnnouncementBar />
      <div className="border-b border-line bg-ink-900">
        <div className="mx-auto flex h-[74px] max-w-[1240px] items-center justify-between px-4">
          <Logo width={122} className="h-auto w-[92px] sm:w-[122px]" />

          <nav
            aria-label={common.nav.label}
            className="flex items-center gap-3 sm:gap-12"
          >
            {navLinks.map((link) => (
              <NavLink key={link.href} label={link.label} href={link.href} />
            ))}
            <JoinWaitlistButton />
          </nav>
        </div>
      </div>
    </header>
  );
}
