import { HeroBackground } from "@/components/hero-background";
import { Reveal } from "@/components/reveal";
import { getDictionary } from "@/i18n/server";

// Plays its intro on load, like the home hero.
export async function AboutHero() {
	const { about } = await getDictionary();
	const t = about.hero;

	return (
		<section className="relative overflow-hidden bg-ink-900">
			<HeroBackground tone="warm" />

			<div className="relative mx-auto max-w-[1240px] border-x border-line px-4 pt-24 pb-24 text-center lg:h-[635px] lg:pt-[166px] lg:pb-0">
				<Reveal
					as="p"
					immediate
					className="text-xs leading-5 text-white uppercase">
					{t.eyebrow}
				</Reveal>

				<Reveal
					as="h1"
					immediate
					delay={100}
					className="mt-2.5 text-[34px] leading-[1.2] font-semibold text-balance text-white lg:text-[48px] lg:leading-[58px] lg:text-wrap">
					{t.titleLines[0]}
					<br className="hidden lg:block" /> {t.titleLines[1]}
				</Reveal>

				<Reveal
					as="p"
					immediate
					delay={200}
					className="mx-auto mt-[11px] max-w-[680px] text-base leading-8 font-light text-white">
					{t.intro}
				</Reveal>
			</div>
		</section>
	);
}
