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
  summary: string;
  highlights: string[];
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
    roleLabel: string;
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
    groups: { name: string; items: string[] }[];
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

const FACTURX_IMAGE = {
  src: "/images/facturx-screenshot.png",
  width: 3002,
  height: 1486,
};

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
      capabilities: "Stack",
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
            "Backend-focused full-stack engineer with 5+ years of production experience. TypeScript/NestJS and Python/FastAPI services on PostgreSQL and Redis, Stripe payments, real-time features, and end-to-end ownership from API design to on-call.",
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
          value: "3",
          label: "products live in production",
          source: "GoodCall · Factur-X · Pick4Me",
        },
      ],
    },
    work: {
      index: "01",
      heading: "Selected work",
      intro:
        "Three products I designed, built and operate, each with its own hard problem. Below each one: the pipeline at its core.",
      roleLabel: "Role",
      platformsLabel: "Platforms",
      yearLabel: "Year",
      stackLabel: "Stack",
      projects: [
        {
          id: "goodcall",
          name: "GoodCall",
          kind: "Esports prediction app",
          year: "2025 →",
          role: "Creator · full-stack engineer",
          platforms: "iOS · Android · Web",
          summary:
            "Call the winner and the exact score of pro League of Legends, Valorant and CS2 matches, then climb global, regional and private-league rankings. No betting: points can't be bought or exchanged, only earned.",
          highlights: [
            "+10 for the right winner, +15 for the exact score, same rules for every match",
            "Covers LCK, LEC, LPL, Worlds, VCT, Majors and more",
            "Six languages, Korean included",
            "pnpm / Turborepo monorepo, Docker deploys, GitHub Actions CI",
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
        },
        {
          id: "facturx",
          name: "Pont Factur-X",
          kind: "AI B2B e-invoicing SaaS",
          year: "2025 →",
          role: "Full-stack · infrastructure",
          platforms: "Web · REST API",
          summary:
            "Turns a PDF invoice, or a simple form, into a compliant Factur-X file for France's e-invoicing reform: receiving becomes mandatory in September 2026, sending follows for SMEs in 2027.",
          highlights: [
            "PDF/A-3 with embedded CII XML, aligned with EN 16931",
            "AI field extraction (SIRET, VAT, amounts, IBAN) with manual review",
            "Typical conversion under 15 seconds",
            "REST API (OpenAPI 3.0) for ERPs; credit packs and subscriptions via Stripe",
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
            alt: "Pont Factur-X landing page: PDF to Factur-X XML conversion",
          },
        },
        {
          id: "pick4me",
          name: "Pick4Me",
          kind: "Delivery & shopping marketplace",
          year: "2025",
          role: "Backend engineer · client project",
          platforms: "Mobile · Backend",
          summary:
            "A Belgian marketplace where people post errands and local helpers pick them up. I built the backend: mission workflows, real-time chat, live location, notifications and the payment flow.",
          highlights: [
            "Stripe pre-authorization, capture and refunds, driven by webhooks",
            "Real-time chat and helper tracking over Socket.IO",
            "Push notifications with FCM",
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
          context: "SaaS, marketplace and mobile products for French and Belgian clients.",
          bullets: [
            "Deliver products from scoping to launch and day-to-day operations.",
            "Backend services with NestJS / FastAPI, PostgreSQL / Prisma and Redis: Socket.IO events, FCM push, SendGrid email.",
            "Stripe end to end: subscriptions, pre-authorization & capture, refunds, webhooks.",
            "Own Docker / VPS / AWS deployments, GitHub Actions CI/CD, monitoring and incident response.",
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
      heading: "Stack",
      groups: [
        {
          name: "Backend",
          items: [
            "TypeScript",
            "Node.js",
            "NestJS",
            "Express",
            "Python",
            "FastAPI",
            "Django/DRF",
            "REST",
            "Socket.IO",
            "JWT · RBAC",
          ],
        },
        {
          name: "CI/CD & release",
          items: [
            "GitLab CI",
            "GitHub Actions",
            "Jenkins",
            "Multi-OS builds",
            "Artifactory",
            "SonarQube",
          ],
        },
        {
          name: "Infra & cloud",
          items: [
            "Docker",
            "Kubernetes",
            "Ansible",
            "Terraform",
            "AWS",
            "Nginx",
            "Linux",
            "MinIO / S3",
          ],
        },
        { name: "Data", items: ["PostgreSQL", "Prisma", "Redis", "MongoDB"] },
        {
          name: "Observability",
          items: ["Prometheus", "Grafana", "Alertmanager", "Runbooks", "Incident response"],
        },
        {
          name: "Frontend & mobile",
          items: [
            "React",
            "Next.js",
            "Vue.js",
            "Nuxt",
            "Angular",
            "React Native",
            "Expo",
            "Tailwind",
          ],
        },
        {
          name: "Integrations",
          items: ["Stripe", "FCM", "SendGrid", "Revolut Business", "Mistral AI"],
        },
        { name: "Quality", items: ["Playwright", "Automated test runs", "Coverage monitoring"] },
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
      capabilities: "기술",
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
            "5년 이상의 프로덕션 경험을 가진 백엔드 중심 풀스택 엔지니어입니다. PostgreSQL·Redis 기반의 TypeScript/NestJS, Python/FastAPI 서비스, Stripe 결제, 실시간 기능을 개발하며 API 설계부터 운영까지 전 과정을 담당합니다.",
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
          value: "3",
          label: "개 서비스 프로덕션 운영 중",
          source: "GoodCall · Factur-X · Pick4Me",
        },
      ],
    },
    work: {
      index: "01",
      heading: "주요 프로젝트",
      intro:
        "직접 설계·개발하고 운영 중인 세 가지 서비스입니다. 각 서비스의 핵심 파이프라인을 함께 소개합니다.",
      roleLabel: "역할",
      platformsLabel: "플랫폼",
      yearLabel: "연도",
      stackLabel: "기술 스택",
      projects: [
        {
          id: "goodcall",
          name: "GoodCall",
          kind: "e스포츠 승부 예측 앱",
          year: "2025 →",
          role: "창업자 · 풀스택 엔지니어",
          platforms: "iOS · Android · Web",
          summary:
            "리그 오브 레전드, 발로란트, CS2 프로 경기의 승자와 정확한 스코어를 예측하고 글로벌·지역·프라이빗 리그 랭킹에 도전하는 앱입니다. 베팅이 아닌 실력 기반: 포인트는 구매하거나 교환할 수 없습니다.",
          highlights: [
            "승자 적중 +10점, 정확한 스코어 +15점, 모든 경기 동일 규칙",
            "LCK, LEC, LPL, Worlds, VCT, Majors 등 지원",
            "한국어 포함 6개 언어 지원",
            "pnpm / Turborepo 모노레포, Docker 배포, GitHub Actions CI",
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
        },
        {
          id: "facturx",
          name: "Pont Factur-X",
          kind: "AI 기반 B2B 전자세금계산서 SaaS",
          year: "2025 →",
          role: "풀스택 · 인프라",
          platforms: "Web · REST API",
          summary:
            "PDF 인보이스나 간단한 양식을 프랑스 전자 인보이스 개혁에 맞는 Factur-X 파일로 변환합니다. 2026년 9월부터 수신 의무화, 2027년부터 중소기업 발행 의무화가 시작됩니다.",
          highlights: [
            "CII XML이 포함된 PDF/A-3, EN 16931 기준 준수",
            "AI 필드 추출 (SIRET, VAT, 금액, IBAN) 및 수동 검토",
            "변환 시간 대부분 15초 이내",
            "ERP 연동용 REST API (OpenAPI 3.0), Stripe 기반 크레딧 팩·구독 결제",
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
          image: { ...FACTURX_IMAGE, alt: "Pont Factur-X 랜딩 페이지: PDF를 Factur-X XML로 변환" },
        },
        {
          id: "pick4me",
          name: "Pick4Me",
          kind: "배달 & 쇼핑 마켓플레이스",
          year: "2025",
          role: "백엔드 엔지니어 · 클라이언트 프로젝트",
          platforms: "Mobile · Backend",
          summary:
            "사용자가 심부름을 등록하면 지역 헬퍼가 수행하는 벨기에 마켓플레이스입니다. 미션 워크플로, 실시간 채팅, 위치 추적, 알림, 결제 플로 등 백엔드를 개발했습니다.",
          highlights: [
            "웹훅 기반 Stripe 사전 승인, 캡처, 환불",
            "Socket.IO 기반 실시간 채팅 및 헬퍼 위치 추적",
            "FCM 푸시 알림",
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
          context: "프랑스·벨기에 고객을 위한 SaaS, 마켓플레이스, 모바일 서비스.",
          bullets: [
            "기획부터 출시, 운영까지 서비스 전 과정을 담당.",
            "NestJS / FastAPI, PostgreSQL / Prisma, Redis 기반 백엔드: Socket.IO 이벤트, FCM 푸시, SendGrid 이메일.",
            "Stripe 결제 전 과정: 구독, 사전 승인 & 캡처, 환불, 웹훅.",
            "Docker / VPS / AWS 배포, GitHub Actions CI/CD, 모니터링, 장애 대응을 직접 운영.",
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
      heading: "기술 스택",
      groups: [
        {
          name: "백엔드",
          items: [
            "TypeScript",
            "Node.js",
            "NestJS",
            "Express",
            "Python",
            "FastAPI",
            "Django/DRF",
            "REST",
            "Socket.IO",
            "JWT · RBAC",
          ],
        },
        {
          name: "CI/CD & 릴리스",
          items: [
            "GitLab CI",
            "GitHub Actions",
            "Jenkins",
            "멀티 OS 빌드",
            "Artifactory",
            "SonarQube",
          ],
        },
        {
          name: "인프라 & 클라우드",
          items: [
            "Docker",
            "Kubernetes",
            "Ansible",
            "Terraform",
            "AWS",
            "Nginx",
            "Linux",
            "MinIO / S3",
          ],
        },
        { name: "데이터", items: ["PostgreSQL", "Prisma", "Redis", "MongoDB"] },
        { name: "모니터링", items: ["Prometheus", "Grafana", "Alertmanager", "런북", "장애 대응"] },
        {
          name: "프론트엔드 & 모바일",
          items: [
            "React",
            "Next.js",
            "Vue.js",
            "Nuxt",
            "Angular",
            "React Native",
            "Expo",
            "Tailwind",
          ],
        },
        { name: "연동", items: ["Stripe", "FCM", "SendGrid", "Revolut Business", "Mistral AI"] },
        { name: "품질", items: ["Playwright", "자동화 테스트", "커버리지 모니터링"] },
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
