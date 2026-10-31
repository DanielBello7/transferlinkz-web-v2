import { ROLES } from "../roles";
import { RoleTab } from "./role-tab";

type RoleTabsProps = {
  activeId: string;
  onChange: (id: string) => void;
  // Accessible name of the tab list ("Choose a role")
  label: string;
  // Each tab's text, by role id
  labels: Record<string, string>;
};

export function RoleTabs({ activeId, onChange, label, labels }: RoleTabsProps) {
  return (
    <div
      role="tablist"
      aria-label={label}
      className="mx-auto grid max-w-[688px] grid-cols-2 gap-1.5 rounded-[4px] bg-white p-1.5 lg:flex lg:gap-3"
    >
      {ROLES.map((role) => (
        <RoleTab
          key={role.id}
          label={labels[role.id]}
          tabClass={role.tabClass}
          selected={role.id === activeId}
          onSelect={() => onChange(role.id)}
        />
      ))}
    </div>
  );
}
