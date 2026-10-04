// Smoke test for the localized homepage. Requires a running server:
//   pnpm build && pnpm start &  then  node scripts/smoke.mjs [baseUrl]
const BASE = process.argv[2] ?? "http://localhost:3000";

let failures = 0;
const ok = (label) => console.log(`  ok: ${label}`);
const fail = (label) => {
  failures++;
  console.error(`FAIL: ${label}`);
};
const check = (cond, label) => (cond ? ok(label) : fail(label));

async function fetchManual(path) {
  return fetch(`${BASE}${path}`, { redirect: "manual" });
}

// Redirects
for (const [path, dest] of [
  ["/", "/en"],
  ["/fr", "/en"],
]) {
  const res = await fetchManual(path);
  check(
    [301, 308].includes(res.status) && res.headers.get("location")?.endsWith(dest),
    `${path} permanently redirects to ${dest} (got ${res.status} → ${res.headers.get("location")})`
  );
}

// Unknown locale must 404
{
  const res = await fetchManual("/de");
  check(res.status === 404, `/de returns 404 (got ${res.status})`);
}

// Locale pages
const CV_BACKEND = "Rayan_Sekkat_CV_Backend_FullStack_EN.pdf";
const CV_DEVOPS = "Rayan_Sekkat_CV_DevOps_Platform_EN.pdf";

const expectations = {
  en: [
    'lang="en"',
    "Rayan",
    "Backend / Full-Stack",
    "DevOps / Platform",
    "170+",
    "5+",
    "30%",
    "GoodCall",
    "Pick4Me",
    "Pont Factur-X",
    "https://goodcall.gg/en/",
    "https://www.linkedin.com/in/rayan-sekkat-3911a9294",
    "https://www.rayanstudios.com/",
    "H-1",
    "E-7",
    CV_BACKEND,
    CV_DEVOPS,
    'hreflang="ko"',
    'hreflang="x-default"',
  ],
  ko: [
    'lang="ko"',
    "백엔드 / 풀스택",
    "170+",
    "30%",
    "GoodCall",
    "E-7",
    "이력서",
    CV_BACKEND,
    CV_DEVOPS,
    'hreflang="en"',
  ],
};

for (const [locale, needles] of Object.entries(expectations)) {
  const res = await fetch(`${BASE}/${locale}`);
  check(res.status === 200, `/${locale} returns 200 (got ${res.status})`);
  const html = await res.text();
  for (const needle of needles) {
    // Next serializes some attributes camelCase (hrefLang) — match case-insensitively
    check(
      html.toLowerCase().includes(needle.toLowerCase()),
      `/${locale} contains ${JSON.stringify(needle)}`
    );
  }
  check(!html.includes(">0<"), `/${locale} has no zero-rendered metric`);
  check(!/href="#"[^>]*>/.test(html), `/${locale} has no dead "#" links`);
  check(!html.includes("rayansekkat.com"), `/${locale} does not reference the dead domain`);
}

// KO page must not leak untranslated English UI chrome
{
  const res = await fetch(`${BASE}/ko`);
  const html = await res.text();
  for (const englishChrome of ["Download CV", "See the work", "Hiring in Korea"]) {
    check(
      !html.includes(englishChrome),
      `/ko has no English UI string ${JSON.stringify(englishChrome)}`
    );
  }
}

// Assets and preserved routes
for (const path of [`/${CV_BACKEND}`, `/${CV_DEVOPS}`, "/blog", "/privacy", "/terms", "/cv"]) {
  const res = await fetch(`${BASE}${path}`);
  check(res.status === 200, `${path} returns 200 (got ${res.status})`);
}

// Health route responds (503 accepted locally: it reports DB connectivity, env-dependent)
{
  const res = await fetch(`${BASE}/api/health`);
  check(
    [200, 503].includes(res.status),
    `/api/health responds with a health payload (got ${res.status})`
  );
}

console.log(failures === 0 ? "\nSMOKE PASS" : `\nSMOKE FAIL — ${failures} failure(s)`);
process.exit(failures === 0 ? 0 : 1);
