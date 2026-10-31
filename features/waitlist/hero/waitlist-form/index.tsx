"use client";

import Link from "next/link";
import { useActionState } from "react";
import { FormField } from "@/components/form-field";
import { CONTROL_CLASS } from "@/components/form-field/styles";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/types";
import { joinWaitlist } from "../../actions";
import { INITIAL_WAITLIST_STATE } from "../../state";
import { WaitlistSuccess } from "./waitlist-success";

const CARD_CLASS =
  "rounded bg-white px-5 py-8 min-[1180px]:px-[30px] min-[1180px]:py-[38px]";

type WaitlistFormProps = {
  // The page's language: sent with the form so the replies come back in it
  lang: Locale;
  // The form's words (dictionary: waitlist.form and waitlist.success)
  t: Dictionary["waitlist"]["form"];
  success: Dictionary["waitlist"]["success"];
  homeHref: string;
  privacyHref: string;
  backToHome: string;
};

export function WaitlistForm({
  lang,
  t,
  success,
  homeHref,
  privacyHref,
  backToHome,
}: WaitlistFormProps) {
  const [state, formAction, pending] = useActionState(
    joinWaitlist,
    INITIAL_WAITLIST_STATE,
  );

  if (state.status === "success") {
    return (
      <div className={CARD_CLASS}>
        <WaitlistSuccess
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
      : { name: "", email: "", company: "" };
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
          htmlFor="waitlist-name"
          error={errors.name}
        >
          <input
            id="waitlist-name"
            name="name"
            type="text"
            required
            maxLength={120}
            autoComplete="name"
            placeholder={t.name.placeholder}
            defaultValue={values.name}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "waitlist-name-error" : undefined}
            className={`${CONTROL_CLASS} h-[37px]`}
          />
        </FormField>

        <FormField
          label={t.email.label}
          htmlFor="waitlist-email"
          error={errors.email}
        >
          <input
            id="waitlist-email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            placeholder={t.email.placeholder}
            defaultValue={values.email}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "waitlist-email-error" : undefined}
            className={`${CONTROL_CLASS} h-[37px]`}
          />
        </FormField>

        <FormField
          label={t.company.label}
          htmlFor="waitlist-company"
          error={errors.company}
          className="min-[640px]:col-span-2"
        >
          <input
            id="waitlist-company"
            name="company"
            type="text"
            maxLength={160}
            autoComplete="organization"
            placeholder={t.company.placeholder}
            defaultValue={values.company}
            aria-invalid={errors.company ? true : undefined}
            aria-describedby={
              errors.company ? "waitlist-company-error" : undefined
            }
            className={`${CONTROL_CLASS} h-[37px]`}
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

      <p className="mt-6 text-xs leading-4 text-navy">
        {t.noteBefore}{" "}
        <Link href={privacyHref} className="underline underline-offset-2">
          {t.noteLink}
        </Link>
        {t.noteAfter}
      </p>

      <button
        type="submit"
        disabled={pending}
        className="mt-6 h-[43px] w-full btn-lift btn-lift-brand cursor-pointer rounded-lg bg-brand text-sm text-white hover:bg-brand-hover disabled:cursor-wait disabled:opacity-70"
      >
        {pending ? t.joining : t.submit}
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
