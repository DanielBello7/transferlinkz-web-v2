"use server";

import { after } from "next/server";
import { dictionaries } from "@/i18n/dictionaries";
import { localeFromForm } from "@/i18n/from-form";
import { clientIp } from "@/lib/client-ip";
import { SUPPORT_EMAIL } from "@/lib/contact";
import { sendEmail } from "@/lib/mail/send-email";
import { contactAcknowledgementEmail } from "@/lib/mail/templates/contact-acknowledgement";
import { contactNotificationEmail } from "@/lib/mail/templates/contact-notification";
import { allow } from "@/lib/rate-limit";
import { englishRoleLabel, type ContactRoleId } from "./roles";
import type { ContactState } from "./state";
import { validateContact } from "./validate";

const HOUR = 60 * 60 * 1000;

// Emails the team the message, and the visitor a reply saying it arrived. Used
// as the form's action, so it also works before the page's JavaScript loads.
// The form says which language it was shown in, and everything sent back to the
// visitor is in that language.
export async function sendContactMessage(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // A hidden field no person sees or fills in. Bots fill every field, so a
  // value here means a bot: report success and send nothing.
  if (formData.get("website")) {
    return { status: "success" };
  }

  const lang = localeFromForm(formData);
  const { forms } = dictionaries[lang];

  const result = validateContact(formData, forms);
  if (!result.ok) {
    return {
      status: "error",
      fieldErrors: result.fieldErrors,
      values: result.values,
    };
  }

  const input = result.input;
  const { name, email } = input;

  // The form emails whatever address is typed in, so it is limited per visitor
  // and per address to stop it being used to spam someone
  const ip = await clientIp();
  if (
    !allow(`contact:ip:${ip}`, 5, HOUR) ||
    !allow(`contact:to:${email}`, 3, HOUR)
  ) {
    return {
      status: "error",
      message: forms.contactTooMany(SUPPORT_EMAIL),
      values: result.input,
    };
  }

  // The message reaching the team is the point of the form, so this one is
  // waited for, and a failure is shown to the visitor. Replying to the email
  // goes to the visitor. The email to the team is always in English.
  const delivered = await sendEmail({
    to: { email: SUPPORT_EMAIL, name: "TransferLinkz support" },
    replyTo: { email, name },
    ...contactNotificationEmail({
      ...input,
      role: englishRoleLabel(input.role as ContactRoleId),
    }),
    // (the message to the team: no flag, people reply to it)
  });
  if (!delivered.ok) {
    return {
      status: "error",
      message: forms.contactFailed(SUPPORT_EMAIL),
      values: result.input,
    };
  }

  // The reply to the visitor goes out after the response, in their language. If
  // it fails, the team still has the message, so it isn't worth failing the
  // form over.
  after(() =>
    sendEmail({
      to: { email, name },
      replyTo: { email: SUPPORT_EMAIL, name: "TransferLinkz support" },
      ...contactAcknowledgementEmail({ name, lang }),
      automated: true,
    }),
  );

  return { status: "success" };
}
