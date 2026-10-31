import Image from "next/image";
import { GuestMockup, type GuestMockupText } from "@/components/guest-mockup";
import { Reveal } from "@/components/reveal";
import type { SolutionVisual } from "../../roles";

type RoleVisualProps = {
  visual: SolutionVisual;
  // Description of the screenshot, for screen readers
  alt: string;
  mockup: GuestMockupText;
  // The panel the product art sits on
  tint: string;
  className?: string;
};

export function RoleVisual({
  visual,
  alt,
  mockup,
  tint,
  className,
}: RoleVisualProps) {
  return (
    <Reveal
      delay={150}
      className={`flex items-center justify-center rounded-[3px] p-6 min-[640px]:p-10 ${className ?? ""}`}
      style={{ backgroundColor: tint }}
    >
      <div className="w-full" style={{ maxWidth: visual.maxWidth }}>
        {visual.kind === "image" ? (
          <Image
            src={visual.src}
            alt={alt}
            width={visual.width}
            height={visual.height}
            unoptimized
            className={`h-auto w-full ${visual.frameClass ?? ""}`}
            style={
              visual.tilt
                ? { transform: `rotate(${visual.tilt}deg)` }
                : undefined
            }
          />
        ) : (
          <GuestMockup t={mockup} />
        )}
      </div>
    </Reveal>
  );
}
