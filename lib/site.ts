export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-rayan-sekkat.vercel.app";

export const LINKS = {
  email: "rayan.sekkat@gmail.com",
  linkedin: "https://www.linkedin.com/in/rayan-sekkat-3911a9294",
  github: "https://github.com/rayansekkatkr",
  goodcall: "https://goodcall.gg/en/",
  pick4me: "https://pick4me.be",
  pontFacturX: "https://pont-facturx.com",
  rayanStudios: "https://rayanstudios.com/fr",
} as const;

export const CV_PATH = "/Rayan_Sekkat_CV_English_2026.pdf";

export const LOCALES = ["en", "ko"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
