export const SUPPORT_EMAIL = "support@transferlinkz.com";

type MailtoOptions = {
  subject: string;
  // Plain text; line breaks are kept
  body: string;
};

function mailto({ subject, body }: MailtoOptions) {
  return `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// Early access is a form on its own page (the signups go to the database)
export const WAITLIST_HREF = "/waitlist";

// The words of the enterprise enquiry draft (dictionary: home.pricing.enterpriseEmail)
type EnterpriseEmailText = {
  subject: string;
  greeting: string;
  intro: string;
  businessName: string;
  volumes: string;
  destinations: string;
  thanks: string;
};

// Enterprise enquiries are an email to the team, so the draft asks for what
// they need to know: the business, volumes and destinations.
export function enterpriseHref(text: EnterpriseEmailText) {
  return mailto({
    subject: text.subject,
    body: [
      text.greeting,
      "",
      text.intro,
      "",
      text.businessName,
      text.volumes,
      text.destinations,
      "",
      text.thanks,
    ].join("\n"),
  });
}
