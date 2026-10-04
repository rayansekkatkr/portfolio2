export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-rayan-sekkat.vercel.app";

export const LINKS = {
  email: "rayan.sekkat@gmail.com",
  linkedin: "https://www.linkedin.com/in/rayan-sekkat-3911a9294",
  github: "https://github.com/rayansekkatkr",
  goodcall: "https://goodcall.gg/en/",
  pick4me: "https://pick4me.be",
  pontFacturX: "https://www.pont-facturx.com",
  rayanStudios: "https://www.rayanstudios.com/",
} as const;

// Two CV tracks, matching the two roles I apply for.
export const CV = {
  backend: "/Rayan_Sekkat_CV_Backend_FullStack_EN.pdf",
  devops: "/Rayan_Sekkat_CV_DevOps_Platform_EN.pdf",
} as const;
export type Track = keyof typeof CV;

// Default CV (kept for /cv redirect and legacy links)
export const CV_PATH = CV.backend;

export const LOCALES = ["en", "ko"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
