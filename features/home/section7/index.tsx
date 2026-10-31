import { Reveal } from "@/components/reveal";
import { getDictionary, getHref } from "@/i18n/server";
import { WAITLIST_HREF, enterpriseHref } from "@/lib/contact";
import { IncludedFeatures } from "./included-features";
import { PLAN_ACTIONS } from "./plans";
import { PlanCard } from "./plan-card";

export async function Section7() {
  const { home } = await getDictionary();
  const t = home.pricing;

  const hrefs = {
    waitlist: await getHref(WAITLIST_HREF),
    enterprise: enterpriseHref(t.enterpriseEmail),
  };

  return (
    <section className="overflow-hidden border-y border-[#dfe5f3] bg-[#eef4ff]">
      <div className="mx-auto max-w-[1240px] border-x border-[#dfe5f3] px-[29px] pt-14 pb-12 lg:pt-[55px] lg:pb-[49px]">
        <Reveal className="text-center text-navy">
          <p className="text-xs leading-5 font-light uppercase">{t.eyebrow}</p>
          <h2 className="mt-[30px] text-[28px] leading-10 font-semibold text-black lg:text-[40px] lg:leading-[48px]">
            {t.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-sm leading-6 font-light">
            {t.intro}
          </p>
        </Reveal>

        {/* gap-px over a divider-coloured background draws the hairlines
            between cards at every column count, so the grid is revealed as one
            unit (revealing cards one by one would flash that background) */}
        <Reveal
          delay={100}
          className="mt-10 grid gap-px bg-[#dfe5f3] min-[640px]:grid-cols-2 min-[1180px]:mt-[50px] min-[1180px]:grid-cols-4"
        >
          {t.plans.map((plan, index) => (
            <PlanCard
              key={plan.name}
              plan={plan}
              href={hrefs[PLAN_ACTIONS[index]]}
              includedLabel={t.includedEachMonth}
            />
          ))}
        </Reveal>

        <div className="mt-8 min-[1180px]:mt-[50px]">
          <IncludedFeatures heading={t.includedHeading} items={t.included} />
        </div>
      </div>
    </section>
  );
}
