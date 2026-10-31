import Link from "next/link";

export type PlanText = {
  name: string;
  price: string;
  // Shown small next to the price, e.g. "/mo"; empty for custom pricing
  unit: string;
  transfers: string;
  description: string;
  cta: string;
};

type PlanCardProps = {
  plan: PlanText;
  // Where the button goes
  href: string;
  // "Included for each month"
  includedLabel: string;
};

export function PlanCard({ plan, href, includedLabel }: PlanCardProps) {
  return (
    <article className="flex flex-col bg-white px-[30px] pt-8 pb-[29px] text-navy min-[1180px]:min-h-[371px]">
      <p className="text-sm leading-5 font-light uppercase">{plan.name}</p>

      <p className="mt-[15px] flex items-baseline text-[40px] leading-[48px] font-medium text-black">
        {plan.price}
        {plan.unit && (
          <span className="text-sm leading-5 font-light text-navy">
            {plan.unit}
          </span>
        )}
      </p>

      <div className="mt-4 bg-[#eef4ff] px-4 pt-[18px] pb-4">
        <p className="text-xl leading-7 font-medium text-black">
          {plan.transfers}
        </p>
        <p className="mt-3 text-sm leading-6 font-light">{includedLabel}</p>
      </div>

      <p className="mt-2.5 mb-2 text-sm leading-6 font-light">
        {plan.description}
      </p>

      <Link
        href={href}
        className="-mx-px mt-auto block rounded-[4px] border border-[#d0d6e8] bg-white py-3 text-center text-sm leading-5 font-medium transition-colors hover:bg-[#eef4ff]"
      >
        {plan.cta}
      </Link>
    </article>
  );
}
