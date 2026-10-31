// The words for each role (tab label, heading, bullets...) are in the
// dictionary, under home.roles.items.<id>. This file holds the look: colours,
// images and where the product art sits.

// Product visual. `right` and `y` are px from the top-right of the section
// frame, so the visual stays tied to the right edge when the window narrows.
type VisualBase = { width: number; height: number; right: number; y: number };

export type RoleVisual =
  | (VisualBase & {
      kind: "image";
      src: string;
      // Tailwind classes for the frame around the screenshot
      frameClass?: string;
      // Rotation in degrees (positive = clockwise), as in the design
      tilt?: number;
    })
  | (VisualBase & { kind: "mockup" });

export type Role = {
  id: string;
  // Tailwind background class of the active tab pill
  tabClass: string;
  // Page background for this role's view
  base: string;
  // Colour of the check badges in the bullet list
  iconColor: string;
  // "pattern" = large logo outline pattern, "rays" = rays in `raysColor`
  background: "pattern" | "rays";
  raysColor?: string;
  visual: RoleVisual;
};

export const ROLES: Role[] = [
  {
    id: "operators",
    tabClass: "bg-[#2563eb]",
    base: "#040a1a",
    iconColor: "#6ea4f7",
    background: "pattern",
    visual: {
      kind: "image",
      src: "/images/role-operator.webp",
      frameClass:
        "rounded-[14px] border border-[#d0d6e8] shadow-[0_30px_90px_-25px_rgba(37,99,235,0.55)]",
      tilt: 3,
      width: 600,
      height: 333,
      right: 38,
      y: 568,
    },
  },
  {
    id: "suppliers",
    tabClass: "bg-[#fd520c]",
    base: "#020714",
    iconColor: "#fcc0a8",
    background: "rays",
    raysColor: "#ff5a28",
    visual: {
      kind: "image",
      src: "/images/role-supplier.svg",
      width: 602,
      height: 480,
      right: 29,
      y: 491,
    },
  },
  {
    id: "drivers",
    tabClass: "bg-[#166e38]",
    base: "#020714",
    iconColor: "#fcc0a8",
    background: "rays",
    raysColor: "#19d3e6",
    visual: {
      kind: "image",
      src: "/images/role-driver.webp",
      frameClass:
        "rounded-[26px] border-4 border-[#dfe3f2] shadow-[0_30px_90px_-20px_rgba(25,211,230,0.35)]",
      tilt: -3.5,
      width: 380,
      height: 537,
      right: 168,
      y: 466,
    },
  },
  {
    id: "guests",
    tabClass: "bg-[#7c3aed]",
    base: "#050818",
    iconColor: "#c4b5fd",
    background: "rays",
    raysColor: "#a78bfa",
    visual: {
      kind: "mockup",
      width: 414,
      height: 558,
      right: 150,
      y: 456,
    },
  },
];
