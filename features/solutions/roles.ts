// The words for each role (heading, cards...) are in the dictionary, under
// solutions.roles.<id>. This file holds the look: colours, images and sizes.

export type SolutionVisual =
  | {
      kind: "image";
      src: string;
      width: number;
      height: number;
      // Widest the visual gets inside its panel, in px
      maxWidth: number;
      // Tailwind classes for the frame around the screenshot
      frameClass?: string;
      // Rotation in degrees (positive = clockwise), as on the home page
      tilt?: number;
    }
  | { kind: "mockup"; maxWidth: number };

export type SolutionRole = {
  id: string;
  // Role colour (same as the home page tabs) and its pale tint
  accent: string;
  tint: string;
  visual: SolutionVisual;
};

// The product images are the same ones the home page's role tabs use.
export const SOLUTION_ROLES: SolutionRole[] = [
  {
    id: "operators",
    accent: "#2563eb",
    tint: "#eef4ff",
    visual: {
      kind: "image",
      src: "/images/role-operator.webp",
      width: 600,
      height: 333,
      maxWidth: 560,
      frameClass:
        "rounded-[14px] border border-[#d0d6e8] shadow-[0_24px_60px_-24px_rgba(37,99,235,0.5)]",
      tilt: 3,
    },
  },
  {
    id: "suppliers",
    accent: "#fd520c",
    tint: "#fff0e7",
    visual: {
      kind: "image",
      src: "/images/role-supplier.svg",
      width: 602,
      height: 480,
      maxWidth: 560,
    },
  },
  {
    id: "drivers",
    accent: "#166e38",
    tint: "#e7f5ec",
    visual: {
      kind: "image",
      src: "/images/role-driver.webp",
      width: 380,
      height: 537,
      maxWidth: 300,
      frameClass:
        "rounded-[26px] border-4 border-[#dfe3f2] shadow-[0_24px_60px_-20px_rgba(22,110,56,0.45)]",
      tilt: -3.5,
    },
  },
  {
    id: "guests",
    accent: "#7c3aed",
    tint: "#f3edff",
    visual: {
      kind: "mockup",
      maxWidth: 340,
    },
  },
];
