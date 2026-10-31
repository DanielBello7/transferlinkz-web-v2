import { Reveal } from "@/components/reveal";
import { getDictionary } from "@/i18n/server";
import { FeatureCard } from "./feature-card";

const FEATURES = [
  {
    icon: { src: "/images/icon-organised.svg", width: 25, height: 29 },
    tint: "bg-[#eef4ff]",
  },
  {
    icon: { src: "/images/icon-connected.svg", width: 32, height: 24 },
    tint: "bg-[#fff0e7]",
  },
  {
    icon: { src: "/images/icon-journey.svg", width: 26, height: 29 },
    tint: "bg-[#e3f3f8]",
  },
];

export async function Section4() {
  const { home } = await getDictionary();
  const t = home.features;

  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto max-w-[1240px] border-x border-line-light px-[29px] pt-16 pb-16 lg:pt-[100px] lg:pb-[100px]">
        <Reveal className="mx-auto max-w-[680px] text-center">
          <h2 className="text-[28px] leading-10 font-semibold text-balance text-navy lg:text-[40px] lg:text-wrap lg:leading-[58px]">
            {t.heading}
          </h2>
          <p className="mt-3 text-sm leading-6 font-light text-navy lg:mt-1">
            {t.intro}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:mt-20 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={t.cards[index].title}
              delay={index * 120}
              {...feature}
              {...t.cards[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
