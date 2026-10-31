import { HeroBackground } from "@/components/hero-background";
import { JoinWaitlistButton } from "@/components/join-waitlist-button";
import { Reveal } from "@/components/reveal";
import { SeeFeaturesButton } from "@/components/see-features-button";
import { getDictionary } from "@/i18n/server";
import { HeroDashboard } from "./hero-dashboard";

// The hero plays its intro on load (no scroll needed), top to bottom.
export async function Hero() {
  const { home } = await getDictionary();
  const t = home.hero;

  return (
    <section className="relative overflow-hidden bg-ink-900">
      <HeroBackground />

      <div className="relative mx-auto max-w-[1240px] border-x border-hairline px-4 pt-[76px] pb-[37px] text-center">
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
          className="mt-4 text-[32px] leading-[1.2] font-medium text-balance text-white sm:mt-2.5 sm:text-5xl sm:leading-[58px]"
        >
          {t.titleLines[0]}
          <br className="hidden sm:block" /> {t.titleLines[1]}
        </Reveal>

        <Reveal
          as="p"
          immediate
          delay={200}
          className="mx-auto mt-4 max-w-[720px] text-base leading-8 font-light text-white sm:mt-1"
        >
          {t.intro}
        </Reveal>

        <Reveal
          immediate
          delay={300}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:mt-[39px] sm:gap-10"
        >
          <JoinWaitlistButton />
          <SeeFeaturesButton />
        </Reveal>

        <Reveal immediate delay={450} className="mt-10 sm:mt-[47px]">
          <HeroDashboard />
        </Reveal>
      </div>
    </section>
  );
}
