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
const expectations = {
  en: [
    'lang="en"',
    "Rayan",
    "Full-Stack Engineer",
    "170+",
    "5+ years",
    "30%",
    "GoodCall",
    "Pick4Me",
    "Pont Factur-X",
    "https://goodcall.gg/en/",
    "https://www.linkedin.com/in/rayan-sekkat-3911a9294",
    "https://rayanstudios.com/fr",
    "H-1 Working Holiday",
    "Rayan_Sekkat_CV_English_2026.pdf",
    'hreflang="ko"',
    'hreflang="x-default"',
  ],
  ko: [
    'lang="ko"',
    "풀스택 엔지니어",
    "170+",
    "30%",
    "GoodCall",
    "워킹홀리데이",
    "영문 이력서",
    "Rayan_Sekkat_CV_English_2026.pdf",
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
      `/${locale} contains ${JSON.stringify(needle)}`,
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
  for (const englishChrome of ["Download CV", "View case studies", "Based in Seoul"]) {
    check(
      !html.includes(englishChrome),
      `/ko has no English UI string ${JSON.stringify(englishChrome)}`
    );
  }
}

// Assets and preserved routes
for (const path of ["/Rayan_Sekkat_CV_English_2026.pdf", "/blog", "/privacy", "/terms", "/cv"]) {
  const res = await fetch(`${BASE}${path}`);
  check(res.status === 200, `${path} returns 200 (got ${res.status})`);
}

// Health route responds (503 accepted locally: it reports DB connectivity, env-dependent)
{
  const res = await fetch(`${BASE}/api/health`);
  check(
    [200, 503].includes(res.status),
    `/api/health responds with a health payload (got ${res.status})`,
  );
}

console.log(failures === 0 ? "\nSMOKE PASS" : `\nSMOKE FAIL — ${failures} failure(s)`);
process.exit(failures === 0 ? 0 : 1);
