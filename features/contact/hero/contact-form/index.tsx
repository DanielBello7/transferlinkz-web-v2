"use client";

import { useActionState } from "react";
import { FormField } from "@/components/form-field";
import { CONTROL_CLASS } from "@/components/form-field/styles";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/types";
import { sendContactMessage } from "../../actions";
import { CONTACT_ROLE_IDS } from "../../roles";
import { INITIAL_CONTACT_STATE } from "../../state";
import { ContactSuccess } from "./contact-success";
import { HelpIcon } from "./help-icon";

// Sized like the design on desktop
const CARD_CLASS =
  "rounded bg-white px-5 py-8 min-[1180px]:h-[544px] min-[1180px]:px-[30px] min-[1180px]:pt-[38px] min-[1180px]:pb-0";

type ContactFormProps = {
  // The page's language: sent with the form so the replies come back in it
  lang: Locale;
  // The form's words (dictionary: contact.form and contact.success)
  t: Dictionary["contact"]["form"];
  success: Dictionary["contact"]["success"];
  homeHref: string;
  backToHome: string;
};

export function ContactForm({
  lang,
  t,
  success,
  homeHref,
  backToHome,
}: ContactFormProps) {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    INITIAL_CONTACT_STATE,
  );

  if (state.status === "success") {
    return (
      <div
        className={`${CARD_CLASS} flex items-center justify-center min-[1180px]:py-0`}
      >
        <ContactSuccess
          title={success.title}
          body={success.body}
          homeHref={homeHref}
          backToHome={backToHome}
        />
      </div>
    );
  }

  // After an error React clears the form, so what was typed comes back from
  // the server and is put into the fields as their starting value
  const values =
    state.status === "error"
      ? state.values
      : { name: "", email: "", company: "", role: "", message: "" };
  const errors = state.status === "error" ? (state.fieldErrors ?? {}) : {};

  return (
    <form action={formAction} className={`relative ${CARD_CLASS}`}>
      <input type="hidden" name="lang" value={lang} />
      <h2 className="text-xl leading-7 font-semibold text-black">
        {t.title}
      </h2>

      <div className="mt-9 grid gap-x-5 gap-y-[22px] min-[640px]:grid-cols-2">
        <FormField
          label={t.name.label}
          htmlFor="contact-name"
          error={errors.name}
        >
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            maxLength={120}
            autoComplete="name"
            placeholder={t.name.placeholder}
            defaultValue={values.name}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={`${CONTROL_CLASS} h-[37px]`}
          />
        </FormField>

        <FormField
          label={t.email.label}
          htmlFor="contact-email"
          error={errors.email}
        >
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            placeholder={t.email.placeholder}
            defaultValue={values.email}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={`${CONTROL_CLASS} h-[37px]`}
          />
        </FormField>

        <FormField
          label={t.company.label}
          htmlFor="contact-company"
          error={errors.company}
        >
          <input
            id="contact-company"
            name="company"
            type="text"
            maxLength={160}
            autoComplete="organization"
            placeholder={t.company.placeholder}
            defaultValue={values.company}
            aria-invalid={errors.company ? true : undefined}
            aria-describedby={
              errors.company ? "contact-company-error" : undefined
            }
            className={`${CONTROL_CLASS} h-[37px]`}
          />
        </FormField>

        <FormField
          label={t.role.label}
          htmlFor="contact-role"
          error={errors.role}
        >
          <select
            id="contact-role"
            name="role"
            defaultValue={values.role || CONTACT_ROLE_IDS[0]}
            aria-invalid={errors.role ? true : undefined}
            aria-describedby={errors.role ? "contact-role-error" : undefined}
            className={`${CONTROL_CLASS} h-[37px] appearance-none`}
          >
            {CONTACT_ROLE_IDS.map((id) => (
              <option key={id} value={id}>
                {t.role.options[id]}
              </option>
            ))}
          </select>
        </FormField>

        <FormField
          label={t.message.label}
          htmlFor="contact-message"
          error={errors.message}
          accessory={<HelpIcon hint={t.message.hint} />}
          gapClass="gap-[9px]"
          className="min-[640px]:col-span-2"
        >
          <textarea
            id="contact-message"
            name="message"
            required
            maxLength={4000}
            placeholder={t.message.placeholder}
            defaultValue={values.message}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={
              errors.message ? "contact-message-error" : undefined
            }
            className={`${CONTROL_CLASS} h-[81px] resize-y py-2.5`}
          />
        </FormField>
      </div>

      {/* A trap for bots: people never see or fill this in (see the action) */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label>
          {t.websiteTrap}
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <p className="mt-[38px] text-xs leading-4 text-navy">
        {t.note}
      </p>

      <button
        type="submit"
        disabled={pending}
        className="btn-lift btn-lift-brand mt-[38px] h-[43px] w-full cursor-pointer rounded-lg bg-brand text-sm text-white hover:bg-brand-hover disabled:cursor-wait disabled:opacity-70"
      >
        {pending ? t.sending : t.submit}
      </button>

      <p
        role="status"
        className="mt-3 min-h-4 text-center text-xs leading-4 text-[#d92d20]"
      >
        {state.status === "error" ? state.message : ""}
      </p>
    </form>
  );
}
