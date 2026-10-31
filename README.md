<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/brand/logo-on-dark.svg">
  <img src="docs/brand/logo-on-light.svg" alt="TransferLinkz" width="240">
</picture>

<br />

**The marketing site for TransferLinkz**<br />
One connected operation behind every guest journey.

</div>

---

## About

This is the public landing page for **TransferLinkz**, an airport transfer coordination platform for tour operators, transfer suppliers, drivers and guests. It is a single-page Next.js site that presents the product, answers common questions, shows pricing and collects waitlist interest.

The page is built section by section from the design files, top to bottom:

| #   | Section                                                   | Folder                   |
| --- | --------------------------------------------------------- | ------------------------ |
| –   | Announcement bar and header                               | `components/header`      |
| 1   | Hero: headline, calls to action, dashboard                | `features/home/hero`     |
| 3   | "Wave goodbye to…" word ticker                            | `features/home/section3` |
| 4   | "Flexible for the many ways guest journeys begin" cards   | `features/home/section4` |
| 5   | "One operation. The right view for every role." role tabs | `features/home/section5` |
| 6   | FAQ accordion (shared with the About page)                | `components/faq-section` |
| 7   | Pricing                                                   | `features/home/section7` |
| 8   | Closing call to action with illustration (shared)         | `components/cta-section` |
| –   | Footer                                                    | `components/footer`      |

### Other pages

| Route        | Feature              | Status                                                        |
| ------------ | -------------------- | ------------------------------------------------------------- |
| `/`          | `features/home`      | Complete                                                      |
| `/solutions` | `features/solutions` | Complete (copy in `docs/solutions-page-content.md`)           |
| `/waitlist`  | `features/waitlist`  | Complete (saves signups to Postgres, sends a thank-you email) |
| `/about`     | `features/about`     | Complete                                                      |
| `/contact`   | `features/contact`   | Complete (emails the team and replies to the visitor)         |
| `/privacy`   | `features/privacy`   | Complete (have a lawyer review the text)                      |
| `/terms`     | `features/terms`     | Complete (have a lawyer review the text)                      |

### Languages

The site is in English, Spanish and Swedish. English is at the plain address (`/about`); the others sit under their code (`/es/about`, `/sv/about`). Every page lives once, in `app/[lang]`; `proxy.ts` sends each address to the right language.

- **The words** are in `i18n/dictionaries/en` and `i18n/dictionaries/es`, one file per area. The Spanish dictionary is typed against the English one, so a missing string is a compile error. Run `npm run i18n:check` to also compare list lengths (FAQ items, plans, steps).
- **In a page**, server components call `getDictionary()` and `getHref("/about")` from `i18n/server`. Client components get their text as props.
- **The language menu** is a globe button at the end of the announcement bar (`components/language-switcher`), the same on every screen. It lists every language in `i18n/config.ts` and links to the same page in each, so it needs no changes when a language is added.
- **Adding a language**: add it to `i18n/config.ts`, add its name to `common.language` in the English and Spanish dictionaries, copy `dictionaries/es` and translate it, and register it in `dictionaries/index.ts`. The sitemap, links between languages and share images follow from that. Then check the header and announcement bar at phone widths, since translations run longer than English.
- **Not translated**: the Privacy Policy and Terms stay in English, with a notice in Spanish. The screenshots and illustrations contain English text. The message to the team from the contact form is always in English.
- **Unknown addresses** show the 404 page in the visitor's language (`app/[lang]/[...rest]`). It answers with status 200 and `noindex`, because Next can't send a 404 status together with a full page under this layout.
