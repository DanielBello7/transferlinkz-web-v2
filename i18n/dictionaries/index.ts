import type { Locale } from "../config";
import { en } from "./en";
import { es } from "./es";
import { sv } from "./sv";
import type { Dictionary } from "./types";

export const dictionaries: Record<Locale, Dictionary> = { en, es, sv };
