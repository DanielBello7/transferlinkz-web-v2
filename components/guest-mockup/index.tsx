// The words in the mockup (dictionary: common.guestMockup). It is a picture of
// the product, so it is translated with the rest of the page.
export type GuestMockupText = {
  label: string;
  status: string;
  reference: string;
  title: string;
  pickup: string;
  pickupValue: string;
  driver: string;
  driverValue: string;
  vehicle: string;
  vehicleValue: string;
  arrives: string;
  flight: string;
  landed: string;
  meet: string;
  place: string;
  contactDriver: string;
};

type GuestMockupProps = {
  t: GuestMockupText;
};

// What a guest sees on their trip link, tilted like the other product art.
// Everything is sized in em against the card's own width (1em = 10px at the
// full 414px), so it scales as one piece.
export function GuestMockup({ t }: GuestMockupProps) {
  const stats = [
    { label: t.pickup, value: t.pickupValue },
    { label: t.driver, value: t.driverValue },
    { label: t.vehicle, value: t.vehicleValue },
  ];

  return (
    <div
      role="img"
      aria-label={t.label}
      className="w-full [container-type:inline-size]"
    >
      <div
        className="relative h-[55.8em] w-full"
        style={{ fontSize: "calc(100cqw / 41.4)" }}
      >
        <div className="absolute inset-x-[2.2em] inset-y-[1.4em] flex -rotate-[3.5deg] flex-col rounded-[2.8em] border-[0.4em] border-[#dfe3f2] bg-[#f3f5fb] p-[1.8em] shadow-[0_2em_6em_rgba(124,58,237,0.28)]">
          <div className="rounded-[2em] bg-white p-[1.8em] shadow-[0_0.2em_1em_rgba(49,56,88,0.08)]">
            <span className="inline-block rounded-full border border-[#7c3aed]/50 bg-[#f3edff] px-[1em] py-[0.35em] text-[1.15em] leading-none font-medium text-[#7c3aed]">
              {t.status}
            </span>
            <p className="mt-[1.2em] text-[1.15em] leading-none text-[#9aa0b4]">
              {t.reference}
            </p>
            <p className="mt-[0.5em] text-[1.8em] leading-tight font-semibold text-black">
              {t.title}
            </p>
            <div className="mt-[1.6em] grid grid-cols-3 gap-[1em]">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-[1.1em] leading-none text-[#9aa0b4]">
                    {stat.label}
                  </p>
                  <p className="mt-[0.6em] text-[1.45em] leading-none font-semibold whitespace-nowrap text-black">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-[1.8em] flex flex-1 flex-col rounded-[2.2em] bg-[#2563eb] p-[2em] text-white">
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-[0.8em] text-[1.9em] leading-none font-semibold">
                {t.reference}
                <span className="size-[0.9em] rounded-full bg-[#4ade80] ring-[0.35em] ring-white/30" />
              </p>
              <p className="text-[1.25em] leading-none">{t.arrives}</p>
            </div>

            <p className="mt-[1.8em] text-[1.3em] leading-none">
              {t.flight} <span className="px-[0.3em] text-[#fbbf24]">•</span>{" "}
              {t.landed}
            </p>

            <div className="mt-[1.8em] space-y-[1.2em] text-[1.5em] leading-none">
              <p>{t.meet}</p>
              <p>{t.place}</p>
            </div>

            <div className="mt-auto mb-[2.2em] flex items-center pt-[1.6em]">
              <span className="size-[1.1em] rounded-full bg-white" />
              <span className="h-[0.25em] flex-1 bg-[#f59e0b]" />
              <span className="size-[1.1em] rounded-full bg-[#f59e0b]" />
              <span className="h-[0.25em] flex-1 bg-[#f59e0b]" />
              <span className="size-[1.9em] rounded-full border-[0.45em] border-[#f59e0b]" />
              <span className="h-0 flex-[1.4] border-t-[0.25em] border-dashed border-white/60" />
              <span className="size-[1.1em] rounded-full bg-[#f59e0b]" />
            </div>

            <div className="rounded-full bg-white py-[1.3em] text-center text-[1.8em] leading-none font-medium text-[#2563eb]">
              {t.contactDriver}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
