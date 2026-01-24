/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "kr"],
    localeDetection: true,
  },
  localePath:
    typeof window === "undefined" ? require("path").resolve("./public/locales") : "/locales",
  reloadOnPrerender: process.env.NODE_ENV === "development",
  ns: ["common", "navigation", "services", "projects", "contact"],
  defaultNS: "common",
};
