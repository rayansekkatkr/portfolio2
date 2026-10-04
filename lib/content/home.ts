// All homepage copy for EN and KO. Facts trace to the 2026 CVs (Backend/Full-Stack
// and DevOps/Platform) and to the live product sites (goodcall.gg, pont-facturx.com,
// pick4me.be, rayanstudios.com).
// `Record<Locale, HomeContent>` makes a missing KO key a type-check failure.
import { type Locale, type Track } from "@/lib/site";

export interface PipelineStep {
  label: string;
  detail: string;
}

export interface Project {
  id: "goodcall" | "facturx" | "pick4me";
  name: string;
  kind: string;
  year: string;
  role: string;
  platforms: string;
  status: string;
  live: boolean;
  summary: string;
  problem: string;
  contributions: string[];
  metrics?: { value: string; label: string }[];
  pipelineTitle: string;
  pipeline: PipelineStep[];
  stack: string[];
  url: string;
  urlLabel: string;
  image?: { src: string; alt: string; width: number; height: number };
}

export interface TrackContent {
  id: Track;
  tab: string;
  title: string;
  summary: string;
  focus: string;
  cvLabel: string;
}

export interface HomeContent {
  meta: { title: string; description: string; ogAlt: string };
  nav: {
    work: string;
    experience: string;
    capabilities: string;
    contact: string;
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    localeSwitcherLabel: string;
    themeToggleToDark: string;
    themeToggleToLight: string;
    themeAnnouncedDark: string;
    themeAnnouncedLight: string;
    homeAriaLabel: string;
    clockLabel: string;
  };
  hero: {
    status: string;
    trackLabel: string;
    tracks: [TrackContent, ...TrackContent[]];
    ctaWork: string;
    photoAlt: string;
    photoCaption: string;
    specHeading: string;
    spec: { label: string; value: string; note?: string }[];
    focusLabel: string;
  };
  proof: {
    heading: string;
    items: { value: string; label: string; source: string }[];
  };
  work: {
    index: string;
    heading: string;
    intro: string;
    problemLabel: string;
    contributionsLabel: string;
    roleLabel: string;
    statusLabel: string;
    platformsLabel: string;
    yearLabel: string;
    stackLabel: string;
    projects: Project[];
  };
  experience: {
    index: string;
    heading: string;
    intro: string;
    jobs: {
      period: string;
      role: string;
      company: string;
      place: string;
      context?: string;
      bullets: string[];
      tags: string[];
      current?: boolean;
    }[];
  };
  capabilities: {
    index: string;
    heading: string;
    intro: string;
    productHeading: string;
    product: string[];
    engineeringHeading: string;
    tiers: { name: string; note: string; items: string[] }[];
  };
  education: {
    heading: string;
    schools: { name: string; detail: string; period: string }[];
    languagesHeading: string;
    languages: { name: string; level: string; bar: number }[];
  };
  contact: {
    index: string;
    heading: string;
    body: string;
    reply: string;
    linkedinLabel: string;
    githubLabel: string;
    cvBackend: string;
    cvDevops: string;
    copyEmail: string;
    copied: string;
  };
  footer: {
    studiosLine: string;
    studiosLinkText: string;
    rights: string;
    built: string;
    backToTop: string;
  };
}

const GOODCALL_STACK = [
  "TypeScript",
  "React Native",
  "Expo",
  "NestJS",
  "PostgreSQL",
  "Prisma",
  "Redis",
  "Docker",
  "GitHub Actions",
  "pnpm",
  "Turborepo",
];
const FACTURX_STACK = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "MinIO",
  "Docker",
  "Stripe",
  "Mistral AI",
];
const PICK4ME_STACK = ["NestJS", "PostgreSQL", "Prisma", "Redis", "Socket.IO", "Stripe", "FCM"];

// Landing-page screenshots of each live product (1512×699).
const shot = (file: string) => ({ src: `/images/${file}`, width: 1512, height: 699 });
const GOODCALL_IMAGE = shot("goodcall.jpg");
const FACTURX_IMAGE = shot("pont-facturx.jpg");
const PICK4ME_IMAGE = shot("pick4me.jpg");

export const home: Record<Locale, HomeContent> = {
  en: {
    meta: {
      title: "Rayan Sekkat | Backend & DevOps Engineer in Seoul",
      description:
        "Backend / full-stack and DevOps engineer based in Seoul. 5+ years shipping production SaaS, CI/CD platforms (170+ pipelines/day at STMicroelectronics) and cloud infrastructure. Open to full-time roles in Korea.",
      ogAlt: "Rayan Sekkat · Backend & DevOps Engineer based in Seoul",
    },
    nav: {
      work: "Work",
      experience: "Experience",
      capabilities: "Skills",
      contact: "Contact",
      skipToContent: "Skip to main content",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      localeSwitcherLabel: "Language",
      themeToggleToDark: "Switch to dark theme",
      themeToggleToLight: "Switch to light theme",
      themeAnnouncedDark: "Dark theme enabled",
      themeAnnouncedLight: "Light theme enabled",
      homeAriaLabel: "Rayan Sekkat, home",
      clockLabel: "Local time in Seoul",
    },
    hero: {
      status: "Available now · full-time roles in Korea",
      trackLabel: "Hiring for",
      tracks: [
        {
          id: "backend",
          tab: "Backend / Full-Stack",
          title: "I build the backend, and the pipeline that ships it.",
          summary:
            "Software engineer with 5+ years of experience combining product understanding and hands-on backend work. I work directly with clients to scope products, turn requirements into technical solutions and ship them to production: TypeScript/NestJS and Python/FastAPI on PostgreSQL and Redis, Stripe payments, real-time and AI features.",
          focus: "NestJS · FastAPI · PostgreSQL · Redis · Stripe · React / Next.js",
          cvLabel: "Download CV, Backend",
        },
        {
          id: "devops",
          tab: "DevOps / Platform",
          title: "I keep 170 pipelines a day green, and releases boring.",
          summary:
            "Build & release engineer who ran the GitLab CI/CD platform behind STM32Cube 2.0 at STMicroelectronics, shipping every tool flavor to Windows, Linux and macOS. Docker, Kubernetes, Ansible, Terraform, AWS and observability, with a backend engineer's eye.",
          focus: "GitLab CI · Docker · Kubernetes · Terraform · AWS · Prometheus",
          cvLabel: "Download CV, DevOps",
        },
      ],
      ctaWork: "See the work",
      photoAlt: "Portrait of Rayan Sekkat",
      photoCaption: "Seoul, 2026",
      specHeading: "Profile",
      focusLabel: "Focus",
      spec: [
        { label: "Based", value: "Seoul, South Korea", note: "KST · UTC+9" },
        { label: "Start", value: "Immediately" },
        { label: "Visa", value: "H-1, valid to Jan 2027", note: "Seeking E-7 sponsorship" },
        {
          label: "Languages",
          value: "French · English (C1)",
          note: "Korean, studying (Yonsei L2)",
        },
        { label: "Experience", value: "5+ years", note: "France → Korea" },
      ],
    },
    proof: {
      heading: "In numbers",
      items: [
        { value: "5+", label: "years shipping production software", source: "2020 → today" },
        { value: "170+", label: "CI/CD pipelines run per day", source: "STMicroelectronics" },
        {
          value: "−30%",
          label: "release time with Kubernetes & Ansible",
          source: "STMicroelectronics",
        },
        {
          value: "2,200+",
          label: "registered users on a marketplace I built",
          source: "Pick4Me · 1,147 helpers + 1,094 customers",
        },
      ],
    },
    work: {
      index: "01",
      heading: "Selected work",
      intro:
        "Three products, each told the same way: the business problem, what I did about it, and the pipeline at its core.",
      problemLabel: "The problem",
      contributionsLabel: "What I did",
      roleLabel: "Role",
      statusLabel: "Status",
      platformsLabel: "Platforms",
      yearLabel: "Year",
      stackLabel: "Stack",
      projects: [
        {
          id: "goodcall",
          name: "GoodCall",
          kind: "Esports prediction app",
          year: "2025 →",
          role: "Creator · product & full-stack",
          status: "In App Store review, launching soon",
          live: false,
          platforms: "iOS · Android · Web",
          summary:
            "Call the winner and the exact score of pro League of Legends, Valorant and CS2 matches, then climb global, regional and private-league rankings. No betting: points can't be bought or exchanged, only earned.",
          problem:
            "Results come from third-party data providers that resend and correct scores. Points and rankings must stay exact for every player: no double credit, no rewritten history, and rules that feel fair whatever the odds.",
          contributions: [
            "Defined the game rules: +10 for the winner, +15 for the exact score, same for every match, no money involved.",
            "Designed the player journeys: calls before a deadline, private leagues with invite codes, chat and weekly podiums.",
            "Built the mobile app and backend: provider ingestion, idempotent settlement, append-only points ledger, leaderboards.",
            "Set up the monorepo, Docker deploys and GitHub Actions CI; shipped in six languages, Korean included.",
          ],
          pipelineTitle: "Match settlement pipeline",
          pipeline: [
            { label: "Ingest", detail: "Provider match data, normalized" },
            { label: "Lock", detail: "Calls freeze at match start" },
            { label: "Settle", detail: "Idempotent: replays are safe" },
            { label: "Ledger", detail: "Append-only points history" },
            { label: "Rank", detail: "Global, regional, private leagues" },
          ],
          stack: GOODCALL_STACK,
          url: "https://goodcall.gg/en/",
          urlLabel: "goodcall.gg",
          image: {
            ...GOODCALL_IMAGE,
            alt: "GoodCall landing page: esports predictions app on iOS and Android",
          },
        },
        {
          id: "facturx",
          name: "Pont Factur-X",
          kind: "AI B2B e-invoicing SaaS",
          year: "2025 →",
          role: "Creator · product & full-stack",
          status: "Live",
          live: true,
          platforms: "Web · REST API",
          summary:
            "Turns a PDF invoice, or a simple form, into a compliant Factur-X file for France's e-invoicing reform.",
          problem:
            "Since September 2026 every VAT-registered company in France must be able to receive e-invoices, and SMEs must issue them by 2027. Most small businesses still produce plain PDFs from tools they don't want to replace.",
          contributions: [
            "Scoped the product around that constraint: keep your software, convert the PDF it already produces.",
            "Shaped the offer for three audiences (SMEs, accounting firms, software vendors via API) with credit packs or subscriptions.",
            "Built AI field extraction (SIRET, VAT, amounts, IBAN) with a manual review step, then PDF/A-3 + CII XML aligned with EN 16931.",
            "Run the platform: FastAPI, PostgreSQL, Redis, MinIO on Docker, plus a REST API (OpenAPI 3.0) for ERPs.",
          ],
          metrics: [
            { value: "83", label: "registered users since launch" },
            { value: "< 15 s", label: "typical PDF conversion" },
          ],
          pipelineTitle: "Conversion pipeline",
          pipeline: [
            { label: "Upload", detail: "PDF invoice or web form" },
            { label: "Extract", detail: "Mistral AI reads key fields" },
            { label: "Review", detail: "User corrects anything off" },
            { label: "Generate", detail: "PDF/A-3 + CII XML" },
            { label: "Deliver", detail: "Download or via API" },
          ],
          stack: FACTURX_STACK,
          url: "https://www.pont-facturx.com",
          urlLabel: "pont-facturx.com",
          image: {
            ...FACTURX_IMAGE,
            alt: "Pont Factur-X landing page: e-invoicing reform obligations, receive and send",
          },
        },
        {
          id: "pick4me",
          name: "Pick4Me",
          kind: "Two-sided delivery marketplace",
          year: "2025",
          role: "Product & backend engineer · client project",
          status: "Live in Belgium",
          live: true,
          platforms: "iOS · Android · Backend",
          summary:
            "A Belgian marketplace where customers get groceries and parcels delivered by local helpers who earn money on trips they already make.",
          problem:
            "Two sides with different needs have to trust each other: customers want a reliable delivery and a fair charge, helpers want clear missions and guaranteed payment, and money can only move once the job is done.",
          contributions: [
            "Designed the customer and helper journeys of the two-sided marketplace with the client.",
            "Defined the business rules: mission acceptance, order tracking, payment, refunds and cancellations.",
            "Translated those workflows into features and technical specifications.",
            "Built the backend: Stripe pre-authorization, capture and refunds, real-time chat and tracking, push notifications.",
          ],
          metrics: [
            { value: "1,147", label: "registered helpers" },
            { value: "1,094", label: "registered customers" },
          ],
          pipelineTitle: "Mission lifecycle",
          pipeline: [
            { label: "Post", detail: "Customer creates a mission" },
            { label: "Match", detail: "A helper accepts it" },
            { label: "Hold", detail: "Stripe pre-authorizes" },
            { label: "Track", detail: "Live chat and location" },
            { label: "Capture", detail: "Payment settles on delivery" },
          ],
          stack: PICK4ME_STACK,
          url: "https://pick4me.be",
          urlLabel: "pick4me.be",
          image: {
            ...PICK4ME_IMAGE,
            alt: "Pick4Me landing page: collaborative delivery app with live helper tracking",
          },
        },
      ],
    },
    experience: {
      index: "02",
      heading: "Experience",
      intro:
        "From a telecom operator in France to embedded tooling at STMicroelectronics to my own studio.",
      jobs: [
        {
          period: "2025 — now",
          role: "Independent Full-Stack & DevOps Engineer",
          company: "Rayan Studios",
          place: "Freelance · Remote",
          context:
            "SaaS, marketplace and mobile products for French and Belgian clients, from the first workshop to production.",
          bullets: [
            "Work directly with clients: needs analysis, workshops, and prioritizing what ships first.",
            "Turn business requirements into user journeys, functional specs and technical design.",
            "Build the backend (NestJS / FastAPI, PostgreSQL, Redis) and Stripe payment flows end to end.",
            "Run demos and user acceptance, then own deployment (Docker, AWS, GitHub Actions), monitoring and incidents.",
          ],
          tags: ["NestJS", "FastAPI", "PostgreSQL", "Stripe", "Docker", "AWS"],
          current: true,
        },
        {
          period: "Jan 2024 — Dec 2024",
          role: "DevOps / Build & Release Engineer",
          company: "STMicroelectronics",
          place: "Consultant via Davidson Consulting",
          context: "STM32Cube 2.0: the development tools for the STM32 microcontroller ecosystem.",
          bullets: [
            "Ran the GitLab CI/CD platform: 170+ embedded-software pipelines a day, with runners, SonarQube and Artifactory.",
            "Built, tested and published every STM32Cube 2.0 flavor (desktop, cloud, VS Code and Eclipse Theia extensions) for Windows, Linux and macOS.",
            "Shipped Linux Docker images for developer environments and CI; Playwright cross-browser checks and coverage monitoring.",
            "Triaged failures (infrastructure vs. software) and routed each to the owning squad.",
            "Kubernetes + Ansible automation cut release time by 30%; Terraform across hybrid on-prem + AWS; Prometheus, Grafana, Alertmanager.",
          ],
          tags: ["GitLab CI", "Kubernetes", "Ansible", "Terraform", "AWS", "Grafana"],
        },
        {
          period: "Sep 2020 — Sep 2023",
          role: "Full-Stack Developer / DevOps",
          company: "UNYC",
          place: "3-year apprenticeship · France",
          context: "B2B telecom, cloud & IT operator: ~200 employees, 400,000+ end users.",
          bullets: [
            "Built internal platforms centralizing service status and operational data (React, Vue.js, Django/DRF, PostgreSQL).",
            "CI/CD pipelines and containerized deployments with GitLab CI, Docker and Kubernetes.",
            "Microservices, automated testing and production delivery.",
          ],
          tags: ["React", "Vue.js", "Django", "GitLab CI", "Docker"],
        },
      ],
    },
    capabilities: {
      index: "03",
      heading: "Skills",
      intro:
        "Engineering first, ranked by how much I've shipped with it, plus the product work that comes with owning a project end to end.",
      productHeading: "Product & delivery",
      product: [
        "Requirements gathering",
        "Client workshops",
        "Functional scoping",
        "User journeys & workflows",
        "API & system design",
        "Technical specifications",
        "UAT / product validation",
        "Stakeholder communication",
      ],
      engineeringHeading: "Engineering",
      tiers: [
        {
          name: "Primary",
          note: "Daily, in production",
          items: ["TypeScript", "Node.js", "NestJS", "PostgreSQL", "Redis"],
        },
        {
          name: "Strong",
          note: "Shipped and operated",
          items: [
            "React / Next.js",
            "Python / FastAPI",
            "Docker",
            "AWS",
            "GitLab CI / GitHub Actions",
            "Stripe",
            "REST & WebSockets",
          ],
        },
        {
          name: "Working knowledge",
          note: "Used on real projects",
          items: [
            "Kubernetes",
            "Terraform",
            "Ansible",
            "Prometheus / Grafana",
            "React Native / Expo",
            "Vue.js",
            "Django",
          ],
        },
      ],
    },
    education: {
      heading: "Education",
      schools: [
        {
          name: "EPSI Graduate School, France",
          detail: "Master 2 level, Computer Science & Information Systems (RNCP Level 7)",
          period: "2018 — 2023",
        },
        {
          name: "Yonsei University Korean Language Institute",
          detail: "Korean Language Program, Level 2, Seoul",
          period: "2025",
        },
      ],
      languagesHeading: "Languages",
      languages: [
        { name: "French", level: "Native", bar: 100 },
        { name: "English", level: "Fluent (C1), working language", bar: 85 },
        { name: "Korean", level: "Elementary, studying", bar: 25 },
      ],
    },
    contact: {
      index: "04",
      heading: "Hiring in Korea?",
      body: "I'm in Seoul, available now, and looking for a long-term backend or DevOps role. If your team needs someone who owns a service from the first commit to the production dashboard, let's talk.",
      reply: "I reply within one business day.",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      cvBackend: "CV · Backend / Full-Stack",
      cvDevops: "CV · DevOps / Platform",
      copyEmail: "Copy",
      copied: "Copied",
    },
    footer: {
      studiosLine: "Freelance work runs through",
      studiosLinkText: "Rayan Studios",
      rights: "Rayan Sekkat",
      built: "Next.js · self-hosted fonts · deployed on Vercel",
      backToTop: "Back to top",
    },
  },

  // 한국어: 배포 전 원어민 검수 권장 (native review recommended before deploy)
  ko: {
    meta: {
      title: "Rayan Sekkat | 백엔드 & DevOps 엔지니어 · 서울",
      description:
        "서울 거주 백엔드/풀스택 및 DevOps 엔지니어. 프로덕션 SaaS, CI/CD 플랫폼(STMicroelectronics 일 170개 이상 파이프라인), 클라우드 인프라 경력 5년 이상. 한국 내 정규직 포지션 희망.",
      ogAlt: "Rayan Sekkat · 서울 거주 백엔드 & DevOps 엔지니어",
    },
    nav: {
      work: "프로젝트",
      experience: "경력",
      capabilities: "역량",
      contact: "연락",
      skipToContent: "본문으로 건너뛰기",
      openMenu: "메뉴 열기",
      closeMenu: "메뉴 닫기",
      localeSwitcherLabel: "언어 선택",
      themeToggleToDark: "다크 테마로 전환",
      themeToggleToLight: "라이트 테마로 전환",
      themeAnnouncedDark: "다크 테마가 적용되었습니다",
      themeAnnouncedLight: "라이트 테마가 적용되었습니다",
      homeAriaLabel: "Rayan Sekkat 홈",
      clockLabel: "서울 현지 시간",
    },
    hero: {
      status: "즉시 근무 가능 · 한국 내 정규직",
      trackLabel: "지원 분야",
      tracks: [
        {
          id: "backend",
          tab: "백엔드 / 풀스택",
          title: "백엔드를 만들고, 그것을 배포하는 파이프라인까지 책임집니다.",
          summary:
            "제품에 대한 이해와 백엔드 개발 역량을 겸비한 5년 차 소프트웨어 엔지니어입니다. 클라이언트와 직접 제품 범위를 정의하고, 요구사항을 기술 솔루션으로 전환해 프로덕션까지 출시합니다: PostgreSQL·Redis 기반 TypeScript/NestJS, Python/FastAPI, Stripe 결제, 실시간·AI 기능.",
          focus: "NestJS · FastAPI · PostgreSQL · Redis · Stripe · React / Next.js",
          cvLabel: "이력서 다운로드 (백엔드)",
        },
        {
          id: "devops",
          tab: "DevOps / 플랫폼",
          title: "하루 170개의 파이프라인을 안정적으로, 릴리스는 지루할 만큼 예측 가능하게.",
          summary:
            "STMicroelectronics에서 STM32Cube 2.0의 GitLab CI/CD 플랫폼을 운영하며 모든 툴 버전을 Windows, Linux, macOS용으로 빌드·배포했습니다. Docker, Kubernetes, Ansible, Terraform, AWS, 모니터링까지 백엔드 개발자의 시각으로 다룹니다.",
          focus: "GitLab CI · Docker · Kubernetes · Terraform · AWS · Prometheus",
          cvLabel: "이력서 다운로드 (DevOps)",
        },
      ],
      ctaWork: "프로젝트 보기",
      photoAlt: "Rayan Sekkat 프로필 사진",
      photoCaption: "서울, 2026",
      specHeading: "프로필",
      focusLabel: "주요 기술",
      spec: [
        { label: "거주", value: "대한민국 서울", note: "KST · UTC+9" },
        { label: "입사 가능", value: "즉시" },
        { label: "비자", value: "H-1 (2027년 1월까지)", note: "E-7 스폰서십 희망" },
        { label: "언어", value: "프랑스어 · 영어 (C1)", note: "한국어 학습 중 (연세 2급)" },
        { label: "경력", value: "5년 이상", note: "프랑스 → 한국" },
      ],
    },
    proof: {
      heading: "숫자로 보는 경력",
      items: [
        { value: "5+", label: "년간 프로덕션 소프트웨어 개발", source: "2020 → 현재" },
        { value: "170+", label: "일일 CI/CD 파이프라인 운영", source: "STMicroelectronics" },
        {
          value: "−30%",
          label: "Kubernetes·Ansible로 릴리스 시간 단축",
          source: "STMicroelectronics",
        },
        {
          value: "2,200+",
          label: "직접 개발한 마켓플레이스 가입자",
          source: "Pick4Me · 헬퍼 1,147명 + 고객 1,094명",
        },
      ],
    },
    work: {
      index: "01",
      heading: "주요 프로젝트",
      intro:
        "세 가지 서비스를 같은 방식으로 소개합니다: 비즈니스 문제, 제가 한 일, 그리고 핵심 파이프라인.",
      problemLabel: "문제",
      contributionsLabel: "제가 한 일",
      roleLabel: "역할",
      statusLabel: "상태",
      platformsLabel: "플랫폼",
      yearLabel: "연도",
      stackLabel: "기술 스택",
      projects: [
        {
          id: "goodcall",
          name: "GoodCall",
          kind: "e스포츠 승부 예측 앱",
          year: "2025 →",
          role: "창업자 · 프로덕트 & 풀스택",
          status: "App Store 심사 중, 곧 출시",
          live: false,
          platforms: "iOS · Android · Web",
          summary:
            "리그 오브 레전드, 발로란트, CS2 프로 경기의 승자와 정확한 스코어를 예측하고 글로벌·지역·프라이빗 리그 랭킹에 도전하는 앱입니다. 베팅이 아닌 실력 기반: 포인트는 구매하거나 교환할 수 없습니다.",
          problem:
            "경기 결과는 외부 데이터 제공업체에서 오며, 재전송되거나 정정되기도 합니다. 모든 플레이어의 포인트와 순위는 항상 정확해야 합니다: 중복 지급 없이, 과거 기록 변경 없이, 누구에게나 공정한 규칙으로.",
          contributions: [
            "게임 규칙 정의: 승자 적중 +10점, 정확한 스코어 +15점, 모든 경기 동일, 금전 거래 없음.",
            "플레이어 여정 설계: 마감 전 예측, 초대 코드 기반 프라이빗 리그, 채팅, 주간 포디움.",
            "모바일 앱과 백엔드 개발: 데이터 수집, 멱등성 정산, append-only 포인트 원장, 리더보드.",
            "모노레포, Docker 배포, GitHub Actions CI 구축. 한국어 포함 6개 언어로 출시.",
          ],
          pipelineTitle: "경기 정산 파이프라인",
          pipeline: [
            { label: "수집", detail: "외부 경기 데이터 정규화" },
            { label: "마감", detail: "경기 시작 시 예측 잠금" },
            { label: "정산", detail: "멱등성 보장, 재처리 안전" },
            { label: "원장", detail: "append-only 포인트 기록" },
            { label: "랭킹", detail: "글로벌·지역·프라이빗 리그" },
          ],
          stack: GOODCALL_STACK,
          url: "https://goodcall.gg/en/",
          urlLabel: "goodcall.gg",
          image: {
            ...GOODCALL_IMAGE,
            alt: "GoodCall 랜딩 페이지: iOS·Android e스포츠 승부 예측 앱",
          },
        },
        {
          id: "facturx",
          name: "Pont Factur-X",
          kind: "AI 기반 B2B 전자 인보이스 SaaS",
          year: "2025 →",
          role: "창업자 · 프로덕트 & 풀스택",
          status: "운영 중",
          live: true,
          platforms: "Web · REST API",
          summary:
            "PDF 인보이스나 간단한 양식을 프랑스 전자 인보이스 개혁에 맞는 Factur-X 파일로 변환합니다.",
          problem:
            "2026년 9월부터 프랑스의 모든 부가세 과세 기업은 전자 인보이스를 수신할 수 있어야 하며, 중소기업은 2027년까지 발행도 해야 합니다. 대부분의 소규모 기업은 바꾸고 싶지 않은 기존 도구로 일반 PDF를 만들고 있습니다.",
          contributions: [
            "그 제약을 중심으로 제품 범위 설정: 기존 소프트웨어는 그대로, 이미 만드는 PDF를 변환.",
            "세 가지 고객층(중소기업, 회계법인, API를 쓰는 소프트웨어 기업)을 위한 크레딧 팩·구독 모델 설계.",
            "AI 필드 추출(SIRET, VAT, 금액, IBAN)과 수동 검토 단계, EN 16931 기준 PDF/A-3 + CII XML 생성 개발.",
            "플랫폼 운영: Docker 기반 FastAPI, PostgreSQL, Redis, MinIO, ERP 연동용 REST API (OpenAPI 3.0).",
          ],
          metrics: [
            { value: "83", label: "출시 이후 가입자" },
            { value: "< 15초", label: "평균 PDF 변환 시간" },
          ],
          pipelineTitle: "변환 파이프라인",
          pipeline: [
            { label: "업로드", detail: "PDF 인보이스 또는 웹 양식" },
            { label: "추출", detail: "Mistral AI가 주요 필드 인식" },
            { label: "검토", detail: "사용자가 오류 수정" },
            { label: "생성", detail: "PDF/A-3 + CII XML" },
            { label: "전달", detail: "다운로드 또는 API" },
          ],
          stack: FACTURX_STACK,
          url: "https://www.pont-facturx.com",
          urlLabel: "pont-facturx.com",
          image: {
            ...FACTURX_IMAGE,
            alt: "Pont Factur-X 랜딩 페이지: 전자 인보이스 수신·발행 의무 안내",
          },
        },
        {
          id: "pick4me",
          name: "Pick4Me",
          kind: "양면 배달 마켓플레이스",
          year: "2025",
          role: "프로덕트 & 백엔드 엔지니어 · 클라이언트 프로젝트",
          status: "벨기에에서 운영 중",
          live: true,
          platforms: "iOS · Android · Backend",
          summary:
            "고객은 장보기와 택배를 배달받고, 지역 헬퍼는 평소 이동하는 길에 돈을 버는 벨기에 마켓플레이스입니다.",
          problem:
            "요구가 다른 양쪽이 서로 신뢰해야 합니다: 고객은 확실한 배달과 공정한 요금을, 헬퍼는 명확한 미션과 보장된 지급을 원하며, 결제는 일이 끝난 뒤에만 확정되어야 합니다.",
          contributions: [
            "클라이언트와 함께 고객·헬퍼 양측의 사용자 여정 설계.",
            "비즈니스 규칙 정의: 미션 수락, 주문 추적, 결제, 환불, 취소.",
            "워크플로를 기능 및 기술 명세로 전환.",
            "백엔드 개발: Stripe 사전 승인·캡처·환불, 실시간 채팅과 위치 추적, 푸시 알림.",
          ],
          metrics: [
            { value: "1,147", label: "가입 헬퍼" },
            { value: "1,094", label: "가입 고객" },
          ],
          pipelineTitle: "미션 라이프사이클",
          pipeline: [
            { label: "등록", detail: "고객이 미션 생성" },
            { label: "매칭", detail: "헬퍼가 수락" },
            { label: "승인", detail: "Stripe 사전 승인" },
            { label: "추적", detail: "실시간 채팅·위치" },
            { label: "캡처", detail: "완료 시 결제 확정" },
          ],
          stack: PICK4ME_STACK,
          url: "https://pick4me.be",
          urlLabel: "pick4me.be",
          image: {
            ...PICK4ME_IMAGE,
            alt: "Pick4Me 랜딩 페이지: 실시간 헬퍼 추적이 가능한 공동 배달 앱",
          },
        },
      ],
    },
    experience: {
      index: "02",
      heading: "경력",
      intro: "프랑스 통신사에서 STMicroelectronics 임베디드 툴링, 그리고 개인 스튜디오까지.",
      jobs: [
        {
          period: "2025 — 현재",
          role: "독립 풀스택 & DevOps 엔지니어",
          company: "Rayan Studios",
          place: "프리랜서 · 원격",
          context:
            "프랑스·벨기에 고객을 위한 SaaS, 마켓플레이스, 모바일 서비스. 첫 워크숍부터 프로덕션까지.",
          bullets: [
            "클라이언트와 직접 협업: 요구사항 분석, 워크숍, 우선 출시 범위 결정.",
            "비즈니스 요구사항을 사용자 여정, 기능 명세, 기술 설계로 전환.",
            "백엔드(NestJS / FastAPI, PostgreSQL, Redis)와 Stripe 결제 플로 전 과정 개발.",
            "데모와 사용자 인수 테스트 진행 후 배포(Docker, AWS, GitHub Actions), 모니터링, 장애 대응까지 담당.",
          ],
          tags: ["NestJS", "FastAPI", "PostgreSQL", "Stripe", "Docker", "AWS"],
          current: true,
        },
        {
          period: "2024.01 — 2024.12",
          role: "DevOps / 빌드 & 릴리스 엔지니어",
          company: "STMicroelectronics",
          place: "Davidson Consulting 소속 컨설턴트",
          context: "STM32Cube 2.0: STM32 마이크로컨트롤러 생태계를 위한 개발 도구.",
          bullets: [
            "러너, SonarQube, Artifactory를 포함한 GitLab CI/CD 플랫폼 운영: 일 170개 이상의 임베디드 소프트웨어 파이프라인.",
            "STM32Cube 2.0 전 버전(데스크톱, 클라우드, VS Code·Eclipse Theia 확장)을 Windows, Linux, macOS용으로 빌드·테스트·배포.",
            "개발 환경 및 CI용 Linux Docker 이미지 제공, Playwright 크로스 브라우저 검증, 코드 커버리지 모니터링.",
            "빌드/테스트 실패를 인프라·소프트웨어 문제로 분류하여 담당 스쿼드에 전달.",
            "Kubernetes + Ansible 자동화로 릴리스 시간 30% 단축, 하이브리드 온프레미스 + AWS Terraform, Prometheus·Grafana·Alertmanager.",
          ],
          tags: ["GitLab CI", "Kubernetes", "Ansible", "Terraform", "AWS", "Grafana"],
        },
        {
          period: "2020.09 — 2023.09",
          role: "풀스택 개발자 / DevOps",
          company: "UNYC",
          place: "3년 일·학습 병행 과정 · 프랑스",
          context: "B2B 통신·클라우드·IT 사업자: 직원 약 200명, 최종 사용자 40만 명 이상.",
          bullets: [
            "서비스 상태와 운영 데이터를 통합하는 사내 플랫폼 개발 (React, Vue.js, Django/DRF, PostgreSQL).",
            "GitLab CI, Docker, Kubernetes 기반 CI/CD 및 컨테이너 배포.",
            "마이크로서비스, 자동화 테스트, 프로덕션 배포.",
          ],
          tags: ["React", "Vue.js", "Django", "GitLab CI", "Docker"],
        },
      ],
    },
    capabilities: {
      index: "03",
      heading: "역량",
      intro:
        "실제로 얼마나 출시해 봤는지에 따라 정리한 엔지니어링 역량, 그리고 프로젝트를 처음부터 끝까지 맡으며 쌓은 프로덕트 역량입니다.",
      productHeading: "프로덕트 & 딜리버리",
      product: [
        "요구사항 수집",
        "클라이언트 워크숍",
        "기능 범위 설정",
        "사용자 여정 & 워크플로",
        "API & 시스템 설계",
        "기술 명세 작성",
        "UAT / 제품 검증",
        "이해관계자 커뮤니케이션",
      ],
      engineeringHeading: "엔지니어링",
      tiers: [
        {
          name: "주력",
          note: "매일, 프로덕션에서",
          items: ["TypeScript", "Node.js", "NestJS", "PostgreSQL", "Redis"],
        },
        {
          name: "숙련",
          note: "출시 및 운영 경험",
          items: [
            "React / Next.js",
            "Python / FastAPI",
            "Docker",
            "AWS",
            "GitLab CI / GitHub Actions",
            "Stripe",
            "REST & WebSockets",
          ],
        },
        {
          name: "실무 경험",
          note: "실제 프로젝트에서 사용",
          items: [
            "Kubernetes",
            "Terraform",
            "Ansible",
            "Prometheus / Grafana",
            "React Native / Expo",
            "Vue.js",
            "Django",
          ],
        },
      ],
    },
    education: {
      heading: "학력",
      schools: [
        {
          name: "EPSI Graduate School, 프랑스",
          detail: "컴퓨터공학·정보시스템 석사 수준 (Master 2, RNCP Level 7)",
          period: "2018 — 2023",
        },
        { name: "연세대학교 한국어학당", detail: "한국어 과정 2급, 서울", period: "2025" },
      ],
      languagesHeading: "언어",
      languages: [
        { name: "프랑스어", level: "원어민", bar: 100 },
        { name: "영어", level: "유창 (C1), 업무 언어", bar: 85 },
        { name: "한국어", level: "초급, 학습 중", bar: 25 },
      ],
    },
    contact: {
      index: "04",
      heading: "한국에서 함께할 팀을 찾고 있습니다",
      body: "서울에 거주 중이며 즉시 근무 가능합니다. 첫 커밋부터 프로덕션 대시보드까지 서비스를 책임질 백엔드·DevOps 엔지니어가 필요하시다면 편하게 연락 주세요.",
      reply: "영업일 기준 하루 안에 답변드립니다.",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      cvBackend: "이력서 · 백엔드 / 풀스택",
      cvDevops: "이력서 · DevOps / 플랫폼",
      copyEmail: "복사",
      copied: "복사됨",
    },
    footer: {
      studiosLine: "프리랜서 프로젝트:",
      studiosLinkText: "Rayan Studios",
      rights: "Rayan Sekkat",
      built: "Next.js · 자체 호스팅 폰트 · Vercel 배포",
      backToTop: "맨 위로",
    },
  },
};
