import { getDictionary } from "@/i18n/server";
import { LegalBody } from "./legal-body";
import { LegalHero } from "./legal-hero";
import type { LegalDocumentKey } from "./pages";
import type { LegalDocumentContent } from "./types";

type LegalDocumentProps = {
  content: LegalDocumentContent;
  // Which document this is, so the switcher can mark it as current
  document: LegalDocumentKey;
};

// Shared by the Privacy Policy and Terms of Service pages. The heading and
// page furniture are translated; the document's own text is English only.
export async function LegalDocument({ content, document }: LegalDocumentProps) {
  const { legal } = await getDictionary();

  return (
    <>
      <LegalHero
        title={legal.documents[document]}
        effective={legal.effectiveDateValue}
        current={document}
      />
      <LegalBody
        content={content}
        onThisPage={legal.onThisPage}
        notice={legal.englishOnlyNotice}
      />
    </>
  );
}
