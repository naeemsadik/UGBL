export { en } from "./en";
export type { TranslationKey } from "./en";
export { es } from "./es";
export { zh } from "./zh";
export { bn } from "./bn";

import { en } from "./en";
import { es } from "./es";
import { zh } from "./zh";
import { bn } from "./bn";
import type { TranslationKey } from "./en";

export type Locale = "EN" | "ES" | "ZH" | "BN";

export const dictionaries: Record<Locale, Record<TranslationKey, string>> = {
  EN: en,
  ES: es,
  ZH: zh,
  BN: bn,
};
