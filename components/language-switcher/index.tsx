import { Suspense } from "react";
import {
  CurrentPageMenu,
  LanguageMenu,
  type LanguageSwitcherProps,
} from "./language-menu";

// A globe button that lists the languages, each leading to the same page. A menu
// rather than a row of links so it takes the same room however many languages
// there are. Until the address is known in the browser (pages that aren't built
// ahead, like the 404 page) it leads to the home page.
export function LanguageSwitcher(props: LanguageSwitcherProps) {
  return (
    <Suspense fallback={<LanguageMenu {...props} base="/" />}>
      <CurrentPageMenu {...props} />
    </Suspense>
  );
}
