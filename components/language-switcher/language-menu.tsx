"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { locales, type Locale } from "@/i18n/config";
import { localePath } from "@/i18n/locale-path";
import { usePageBase } from "./use-page-base";

export type LanguageSwitcherProps = {
  // The language of the page being shown
  current: Locale;
  // Each language's name, in that language ("English", "Español")
  names: Record<Locale, string>;
  // Accessible name for the button, e.g. "Language"
  label: string;
  className?: string;
};

type LanguageMenuProps = LanguageSwitcherProps & {
  // The page's path without a language ("/about"); where the links lead
  base: string;
};

// A globe button that opens the list of languages, for places too narrow for
// the links side by side
export function LanguageMenu({
  current,
  names,
  label,
  base,
  className,
}: LanguageMenuProps) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      button.current?.focus();
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={root} className={`relative ${className ?? ""}`}>
      <button
        ref={button}
        type="button"
        aria-label={`${label}: ${names[current]}`}
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
        className="grid size-9 cursor-pointer place-items-center rounded-full text-white transition-colors hover:bg-white/10"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" />
        </svg>
      </button>

      {open && (
        <ul
          id={listId}
          className="absolute top-full right-0 z-30 mt-1 text-left min-w-[160px] rounded-lg border border-line bg-ink-900 p-1 shadow-lg"
        >
          {locales.map((locale) => (
            <li key={locale}>
              {locale === current ? (
                <span
                  aria-current="true"
                  className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm text-white"
                >
                  {names[locale]}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m5 12.5 4.5 4.5L19 7.5" />
                  </svg>
                </span>
              ) : (
                <Link
                  href={localePath(locale, base)}
                  lang={locale}
                  hrefLang={locale}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {names[locale]}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// The same menu, leading to the page you are on
export function CurrentPageMenu(props: Omit<LanguageMenuProps, "base">) {
  return <LanguageMenu {...props} base={usePageBase()} />;
}
