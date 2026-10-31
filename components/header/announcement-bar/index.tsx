import { LanguageSwitcher } from "@/components/language-switcher";
import { getDictionary, getLocale } from "@/i18n/server";

// The language menu sits at the end of this bar on every screen: the header
// itself has no room for it on a phone.
export async function AnnouncementBar() {
  const { common } = await getDictionary();
  const lang = await getLocale();
  const { label, ...names } = common.language;

  return (
    <div className="border-b border-hairline bg-ink-950 text-xs text-white sm:text-sm">
      <div className="relative mx-auto max-w-[1240px] py-[11px] pr-10 pl-4 text-center text-balance md:px-10">
        {common.announcement}
        <div className="absolute inset-y-0 right-1 flex items-center md:right-2">
          <LanguageSwitcher current={lang} names={names} label={label} />
        </div>
      </div>
    </div>
  );
}
