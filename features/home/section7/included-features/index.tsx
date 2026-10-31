import { Reveal } from "@/components/reveal";
import { IncludedFeature } from "./included-feature";

type IncludedFeaturesProps = {
  heading: string;
  items: string[];
};

export function IncludedFeatures({ heading, items }: IncludedFeaturesProps) {
  return (
    <Reveal className="bg-white px-5 pt-[22px] pb-9">
      <h3 className="text-sm leading-5 font-normal text-navy">{heading}</h3>
      <ul className="mt-7 grid max-w-[1092px] gap-x-0 gap-y-8 pl-4 min-[640px]:grid-cols-2 min-[1180px]:grid-cols-4">
        {items.map((feature, index) => (
          <IncludedFeature
            key={feature}
            label={feature}
            delay={150 + index * 70}
          />
        ))}
      </ul>
    </Reveal>
  );
}
