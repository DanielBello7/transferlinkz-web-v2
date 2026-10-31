import { HeroBackground } from "@/components/hero-background";
import { Reveal } from "@/components/reveal";
import { getDictionary, getHref, getLocale } from "@/i18n/server";
import { ContactForm } from "./contact-form";

// Plays its intro on load, like the other heroes.
export async function ContactHero() {
  const { contact, common } = await getDictionary();
  const lang = await getLocale();
  const t = contact.hero;

  return (
    <section className="relative overflow-hidden bg-ink-900">
      <HeroBackground tone="warm" />

      <div className="relative mx-auto flex max-w-[1240px] flex-col gap-10 border-x border-line px-4 py-16 min-[1180px]:h-[635px] min-[1180px]:flex-row min-[1180px]:items-center min-[1180px]:justify-between min-[1180px]:gap-0 min-[1180px]:px-[29px] min-[1180px]:py-0">
        <div className="text-white min-[1180px]:pt-1.5">
          <Reveal
            as="p"
            immediate
            className="text-xs leading-5 uppercase min-[1180px]:pl-[17px]"
          >
            {t.eyebrow}
          </Reveal>

          <Reveal
            as="h1"
            immediate
            delay={100}
            className="mt-[11px] text-[34px] leading-[1.2] font-semibold text-balance min-[1180px]:max-w-[500px] min-[1180px]:text-[48px] min-[1180px]:leading-[58px] min-[1180px]:text-wrap"
          >
            {t.title}
          </Reveal>

          <Reveal
            as="p"
            immediate
            delay={200}
            className="mt-3 max-w-[500px] text-base leading-8 font-light"
          >
            {t.intro}
          </Reveal>
        </div>

        <Reveal immediate delay={150} className="min-[1180px]:w-[570px]">
          <ContactForm
            lang={lang}
            t={contact.form}
            success={contact.success}
            homeHref={await getHref("/")}
            backToHome={common.backToHome}
          />
        </Reveal>
      </div>
    </section>
  );
}
