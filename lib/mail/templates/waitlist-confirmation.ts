import type { Locale } from "@/i18n/config";
import { dictionaries } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/locale-path";
import { absoluteUrl, site } from "@/lib/site";
import { escapeHtml, greeting, paragraph, renderEmail } from "./layout";

type WaitlistConfirmationInput = {
  name: string;
  // The language the visitor was using
  lang: Locale;
};

// Sent when someone joins the waitlist
export function waitlistConfirmationEmail({
  name,
  lang,
}: WaitlistConfirmationInput) {
  const { emails } = dictionaries[lang];
  const t = emails.waitlist;
  const hello = greeting(name, emails);
  const privacyUrl = absoluteUrl(localePath(lang, "/privacy"));
  const host = site.url.replace(/^https?:\/\//, "");

  const html = renderEmail({
    lang,
    preheader: t.preheader,
    heading: t.heading,
    bodyHtml: [
      paragraph(escapeHtml(hello)),
      paragraph(escapeHtml(t.intro)),
      paragraph(escapeHtml(t.reply)),
      paragraph(escapeHtml(emails.signoff)),
    ].join("\n"),
    footerHtml: `${escapeHtml(t.footer(host))} <a href="${escapeHtml(privacyUrl)}" style="color:#6a7081;">${escapeHtml(emails.privacyPolicy)}</a>`,
  });

  const text = [
    hello,
    "",
    t.intro,
    "",
    t.reply,
    "",
    emails.signoff,
    "",
    "--",
    t.footer(site.url),
    `${emails.privacyPolicy}: ${privacyUrl}`,
  ].join("\n");

  return { subject: t.subject, html, text };
}
