import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { getDictionary } from "@/i18n/server";
import { FaqList } from "./faq-list";

// Shared by the home, About and Solutions pages
export async function FaqSection() {
  const { common } = await getDictionary();
  const { faq } = common;

  // Lets search engines show the questions and answers in results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section className="overflow-hidden bg-white">
      <JsonLd data={faqSchema} />
      <div className="mx-auto max-w-[1240px] border-x border-line-light px-[29px] py-16 lg:pt-[90px] lg:pb-[100px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-0">
          <Reveal className="text-navy lg:mt-4">
            <p className="text-xs leading-5 font-light uppercase">
              {faq.eyebrow}
            </p>
            <h2 className="mt-2 text-[28px] leading-10 font-semibold lg:mt-[9px] lg:text-[40px] lg:leading-[58px]">
              {faq.headingLines[0]}
              <br />
              {faq.headingLines[1]}
            </h2>
          </Reveal>

          <div className="lg:w-[673px] lg:shrink-0">
            <FaqList items={faq.items} />
          </div>
        </div>
      </div>
    </section>
  );
}
