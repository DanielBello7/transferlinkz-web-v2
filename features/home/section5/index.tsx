"use client";

import { useState } from "react";
import type { GuestMockupText } from "@/components/guest-mockup";
import { Reveal } from "@/components/reveal";
import { Destinations } from "./destinations";
import { RoleBackground } from "./role-background";
import { RoleDetails } from "./role-details";
import { RoleTabs } from "./role-tabs";
import { RoleVisual } from "./role-visual";
import { RolesHeader } from "./roles-header";
import { ROLES } from "./roles";

type Section5Props = {
  // The words for the whole section (dictionary: home.roles)
  copy: {
    eyebrow: string;
    headingLines: string[];
    tabsLabel: string;
    items: Record<
      string,
      {
        label: string;
        eyebrow: string;
        headingLines: string[];
        paragraph: string;
        bullets: string[];
        alt: string;
      }
    >;
    destinations: {
      eyebrow: string;
      headingLines: string[];
      rows: string[][];
    };
  };
  mockup: GuestMockupText;
};

// Below 1180px the frame is too narrow for the side-by-side layout (text left,
// product right), so everything stacks. Above it, blocks are pinned to the
// frame: text to the left edge, product and chips to the right edge.
export function Section5({ copy, mockup }: Section5Props) {
  const [activeId, setActiveId] = useState(ROLES[0].id);
  const role = ROLES.find((r) => r.id === activeId) ?? ROLES[0];

  return (
    <section
      className="overflow-hidden border-y border-edge transition-colors duration-700"
      style={{ backgroundColor: role.base }}
    >
      <div className="relative mx-auto max-w-[1240px] overflow-hidden border-x border-edge px-[29px] py-16 min-[1180px]:h-[1308px] min-[1180px]:py-0 min-[1180px]:pt-[109px]">
        <RoleBackground activeId={activeId} />

        <div className="relative">
          <RolesHeader
            eyebrow={copy.eyebrow}
            headingLines={copy.headingLines}
          />
          <Reveal delay={100} className="mt-10 min-[1180px]:mt-[62px]">
            <RoleTabs
              activeId={activeId}
              onChange={setActiveId}
              label={copy.tabsLabel}
              labels={Object.fromEntries(
                Object.entries(copy.items).map(([id, item]) => [id, item.label]),
              )}
            />
          </Reveal>
        </div>

        <div
          role="tabpanel"
          className="relative mt-14 min-[1180px]:absolute min-[1180px]:top-[513px] min-[1180px]:left-[29px] min-[1180px]:mt-0"
        >
          <RoleDetails key={role.id} role={role} copy={copy.items[role.id]} />
        </div>

        <div className="relative min-[1180px]:contents">
          <RoleVisual
            key={role.id}
            role={role}
            alt={copy.items[role.id].alt}
            mockup={mockup}
          />
        </div>

        <div className="relative mt-16 min-[1180px]:contents">
          <Destinations {...copy.destinations} />
        </div>
      </div>
    </section>
  );
}
