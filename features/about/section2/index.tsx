import { Reveal } from "@/components/reveal";
import { getDictionary } from "@/i18n/server";

export async function Section2() {
  const { about } = await getDictionary();
  const t = about.story;

  return (
    <section className="overflow-hidden border-y border-line-light bg-white">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-10 border-x border-line-light px-[29px] py-16 lg:h-[610px] lg:flex-row lg:justify-between lg:gap-0 lg:py-0 lg:pt-[151px]">
        <Reveal className="text-navy">
          <p className="text-xs leading-5 font-light uppercase">{t.eyebrow}</p>
          <h2 className="mt-[11px] max-w-[460px] text-[34px] leading-[1.2] font-semibold text-black lg:text-[48px] lg:leading-[58px]">
            {t.heading}
          </h2>
        </Reveal>

        <div className="flex flex-col gap-3 text-sm leading-6 font-light text-navy lg:-mt-0.5 lg:w-[550px] lg:shrink-0">
          {t.paragraphs.map((paragraph, index) => (
            <Reveal as="p" key={paragraph} delay={index * 120}>
              {paragraph}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
