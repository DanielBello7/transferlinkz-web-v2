import { about } from "./about";
import { common } from "./common";
import { contact } from "./contact";
import { emails } from "./emails";
import { forms } from "./forms";
import { home } from "./home";
import { legal } from "./legal";
import { meta } from "./meta";
import { notFound } from "./not-found";
import { solutions } from "./solutions";
import { waitlist } from "./waitlist";

// English is the source of truth: the Spanish dictionary is typed against it,
// so a missing or extra string is a compile error.
export const en = {
  meta,
  common,
  home,
  about,
  solutions,
  contact,
  waitlist,
  legal,
  notFound,
  forms,
  emails,
};
