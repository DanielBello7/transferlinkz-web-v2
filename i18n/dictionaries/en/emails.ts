// The emails sent to visitors. (The message to the team is always in English.)
export const emails = {
  signoff: "The TransferLinkz team",
  privacyPolicy: "Privacy Policy",
  waitlist: {
    subject: "You’re on the TransferLinkz waitlist",
    preheader: "Thanks for joining. We’ll be in touch about early access.",
    heading: "You’re on the list",
    intro:
      "Thanks for joining the TransferLinkz waitlist. We’re onboarding a small group of pilot partners for 2026, and we’ll be in touch about early access.",
    reply:
      "In the meantime, if you have questions about how TransferLinkz could fit your operation, just reply to this email.",
    footer: (site: string) =>
      `You’re receiving this because someone joined the waitlist at ${site} with this address. If that wasn’t you, reply and we’ll remove it.`,
  },
  contact: {
    subject: "We’ve received your message",
    preheader: "We’ll get back to you as soon as possible.",
    heading: "We’ve got your message",
    body: "Thanks for getting in touch. We’ve received your message and we’ll get back to you as soon as possible.",
    extra:
      "If there’s anything you forgot to mention, just reply to this email.",
    footer: (site: string) =>
      `You’re receiving this because someone sent a message through the contact form at ${site} with this address. If that wasn’t you, you can ignore this email.`,
  },
  // "Hi Zoë," when a first name is known, "Hello," when not
  greetingNamed: (name: string) => `Hi ${name},`,
  greetingPlain: "Hello,",
};
