// Messages the forms show after they are submitted. Functions fill in the
// support address or a limit.
export const forms = {
  nameRequired: "Enter your name",
  nameTooLong: (max: number) => `Keep your name under ${max} characters`,
  emailRequired: "Enter your email",
  emailInvalid: "Enter a valid email, like you@company.com",
  companyTooLong: (max: number) =>
    `Keep the company name under ${max} characters`,
  roleInvalid: "Choose one of the options",
  messageRequired: "Tell us how we can help",
  messageTooLong: (max: number) => `Keep your message under ${max} characters`,
  waitlistTooMany: (support: string) =>
    `Too many attempts. Try again later, or email ${support}.`,
  waitlistFailed: (support: string) =>
    `Something went wrong on our side. Try again in a moment, or email ${support}.`,
  contactTooMany: (support: string) =>
    `Too many messages. Try again later, or email ${support}.`,
  contactFailed: (support: string) =>
    `We couldn’t send your message just now. Try again, or email us at ${support}.`,
};
