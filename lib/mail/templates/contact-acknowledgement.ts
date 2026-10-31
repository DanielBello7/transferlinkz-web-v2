import type { Locale } from "@/i18n/config";
import { dictionaries } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/locale-path";
import { absoluteUrl, site } from "@/lib/site";
import { escapeHtml, greeting, paragraph, renderEmail } from "./layout";

type ContactAcknowledgementInput = {
  name: string;
  // The language the visitor was using
  lang: Locale;
};

// Sent to the person who used the contact form. It deliberately doesn't repeat
// what they wrote: it goes to whatever address was typed into the form.
export function contactAcknowledgementEmail({
  name,
  lang,
}: ContactAcknowledgementInput) {
  const { emails } = dictionaries[lang];
  const t = emails.contact;
  const hello = greeting(name, emails);
  const privacyUrl = absoluteUrl(localePath(lang, "/privacy"));
  const host = site.url.replace(/^https?:\/\//, "");

  const html = renderEmail({
    lang,
    preheader: t.preheader,
    heading: t.heading,
    bodyHtml: [
      paragraph(escapeHtml(hello)),
      paragraph(escapeHtml(t.body)),
      paragraph(escapeHtml(t.extra)),
      paragraph(escapeHtml(emails.signoff)),
    ].join("\n"),
    footerHtml: `${escapeHtml(t.footer(host))} <a href="${escapeHtml(privacyUrl)}" style="color:#6a7081;">${escapeHtml(emails.privacyPolicy)}</a>`,
  });

  const text = [
    hello,
    "",
    t.body,
    "",
    t.extra,
    "",
    emails.signoff,
    "",
    "--",
    t.footer(site.url),
    `${emails.privacyPolicy}: ${privacyUrl}`,
  ].join("\n");

  return { subject: t.subject, html, text };
}
