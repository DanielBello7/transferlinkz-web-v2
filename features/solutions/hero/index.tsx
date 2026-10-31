import Link from "next/link";
import { HeroBackground } from "@/components/hero-background";
import { JoinWaitlistButton } from "@/components/join-waitlist-button";
import { Reveal } from "@/components/reveal";
import { getDictionary } from "@/i18n/server";

// Plays its intro on load, like the other heroes.
export async function SolutionsHero() {
  const { solutions } = await getDictionary();
  const t = solutions.hero;

  return (
    <section className="relative overflow-hidden bg-ink-900">
      <HeroBackground />

      <div className="relative mx-auto max-w-[1240px] border-x border-line px-4 pt-24 pb-24 text-center lg:pt-[140px] lg:pb-[110px]">
        <Reveal
          as="p"
          immediate
          className="text-xs leading-5 text-white uppercase"
        >
          {t.eyebrow}
        </Reveal>

        <Reveal
          as="h1"
          immediate
          delay={100}
          className="mt-2.5 text-[34px] leading-[1.2] font-semibold text-balance text-white lg:text-[48px] lg:leading-[58px] lg:text-wrap"
        >
          {t.titleLines[0]}
          <br className="hidden lg:block" /> {t.titleLines[1]}
        </Reveal>

        <Reveal
          as="p"
          immediate
          delay={200}
          className="mx-auto mt-[11px] max-w-[680px] text-base leading-8 font-light text-white"
        >
          {t.intro}
        </Reveal>

        <Reveal
          immediate
          delay={300}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-10"
        >
          <JoinWaitlistButton />
          <Link
            href="#roles"
            className="rounded-lg border border-frame px-3 py-2.5 text-xs whitespace-nowrap text-white btn-lift hover:border-white sm:px-6 sm:py-3 sm:text-sm"
          >
            {t.exploreByRole}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
