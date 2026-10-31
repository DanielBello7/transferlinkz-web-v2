import { Reveal } from "@/components/reveal";

type RolesHeaderProps = {
  eyebrow: string;
  headingLines: string[];
};

export function RolesHeader({ eyebrow, headingLines }: RolesHeaderProps) {
  return (
    <Reveal className="text-center text-white">
      <p className="text-xs leading-5 font-light uppercase">{eyebrow}</p>
      <h2 className="mt-[13px] text-[28px] leading-10 font-semibold lg:text-[40px] lg:leading-[58px]">
        {headingLines[0]}
        <br />
        {headingLines[1]}
      </h2>
    </Reveal>
  );
}
