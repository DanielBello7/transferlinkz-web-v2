import Link from "next/link";
import { getDictionary, getHref } from "@/i18n/server";
import { LEGAL_PAGES, type LegalDocumentKey } from "../../pages";

type LegalSwitchProps = {
  current: LegalDocumentKey;
};

// Links between the legal documents
export async function LegalSwitch({ current }: LegalSwitchProps) {
  const { legal } = await getDictionary();

  return (
    <nav
      aria-label={legal.switchLabel}
      className="inline-flex flex-wrap justify-center gap-3"
    >
      {await Promise.all(
        LEGAL_PAGES.map(async (page) => {
          const isCurrent = page.key === current;
          return (
            <Link
              key={page.key}
              href={await getHref(page.href)}
              aria-current={isCurrent ? "page" : undefined}
              className={`rounded-lg border px-5 py-2.5 text-sm transition-colors ${
                isCurrent
                  ? "border-brand bg-brand text-white"
                  : "border-frame text-white hover:border-white"
              }`}
            >
              {legal.documents[page.key]}
            </Link>
          );
        }),
      )}
    </nav>
  );
}
