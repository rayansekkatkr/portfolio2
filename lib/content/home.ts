// All homepage copy for EN and KO. Every fact traces to the 2026 English CV.
// `Record<Locale, HomeContent>` makes a missing KO key a type-check failure.
import { type Locale } from "@/lib/site";

export interface CaseStudyContent {
  name: string;
  positioning: string;
  role: string;
  challenge?: string;
  decisions?: string[];
  stack: string[];
  url?: string;
  ctaLabel?: string;
}

export interface HomeContent {
  meta: {
    title: string;
    description: string;
    ogAlt: string;
  };
  nav: {
    work: string;
    experience: string;
    capabilities: string;
    contact: string;
    cv: string;
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    localeSwitcherLabel: string;
    themeToggleToDark: string;
    themeToggleToLight: string;
    themeAnnouncedDark: string;
    themeAnnouncedLight: string;
    homeAriaLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    value: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  profileCard: {
    heading: string;
    city: string;
    coordinates: string;
    locationLabel: string;
    locationValue: string;
    availabilityLabel: string;
    availabilityValue: string;
    visaLabel: string;
    visaCompact: string;
    visaFull: string;
    languagesLabel: string;
    languages: string[];
    targetRolesLabel: string;
    targetRolesValue: string;
    ctaEyebrow: string;
    cta: string;
  };
  proof: {
    heading: string;
    items: { value: string; label: string }[];
  };
  work: {
    heading: string;
    featuredTag: string;
    roleLabel: string;
    challengeLabel: string;
    decisionsLabel: string;
    stackLabel: string;
    goodcall: CaseStudyContent;
    secondary: CaseStudyContent[];
  };
  experience: {
    heading: string;
    jobs: { role: string; company: string; period: string; bullets: string[] }[];
  };
  capabilities: {
    heading: string;
    groups: { name: string; items: string }[];
  };
  education: {
    heading: string;
    schools: { name: string; detail: string }[];
    languagesHeading: string;
    languages: string[];
  };
  contact: {
    heading: string;
    body: string;
    emailLabel: string;
    linkedinLabel: string;
    cvLabel: string;
    copyEmail: string;
    copied: string;
  };
  footer: {
    studiosLine: string;
    studiosLinkText: string;
    rights: string;
  };
}

export const home: Record<Locale, HomeContent> = {
  en: {
    meta: {
      title: "Rayan Sekkat | Full-Stack Engineer in Seoul",
      description:
        "Full-Stack Engineer based in Seoul, South Korea. 5+ years across backend, cloud and DevOps. Available for full-time roles; H-1 visa, seeking long-term E-7 sponsorship.",
      ogAlt: "Rayan Sekkat · Full-Stack Engineer based in Seoul",
    },
    nav: {
      work: "Work",
      experience: "Experience",
      capabilities: "Capabilities",
      contact: "Contact",
      cv: "Download CV",
      skipToContent: "Skip to main content",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      localeSwitcherLabel: "Language",
      themeToggleToDark: "Switch to dark theme",
      themeToggleToLight: "Switch to light theme",
      themeAnnouncedDark: "Dark theme enabled",
      themeAnnouncedLight: "Light theme enabled",
      homeAriaLabel: "Rayan Sekkat, home",
    },
    hero: {
      eyebrow: "Seoul, South Korea · Available for full-time roles",
      title: "Full-Stack Engineer",
      subtitle: "Backend Engineering · Cloud & DevOps",
      value:
        "I build reliable products end-to-end, from architecture and API design to deployment, observability and production support.",
      ctaPrimary: "View case studies",
      ctaSecondary: "Download CV",
    },
    profileCard: {
      heading: "Based in Seoul",
      city: "Seoul.",
      coordinates: "37.5665° N · 126.9780° E",
      locationLabel: "Current location",
      locationValue: "Seoul, South Korea",
      availabilityLabel: "Availability",
      availabilityValue: "Immediate",
      visaLabel: "Visa",
      visaCompact: "H-1 → E-7",
      visaFull: "H-1 Working Holiday visa, seeking long-term E-7 sponsorship.",
      languagesLabel: "Languages",
      languages: [
        "French (native)",
        "English (fluent, C1)",
        "Korean (elementary, actively improving)",
      ],
      targetRolesLabel: "Target roles",
      targetRolesValue: "Full-Stack · Backend Systems · Cloud & DevOps",
      ctaEyebrow: "Currently",
      cta: "Contact about a role in Korea",
    },
    proof: {
      heading: "Proven in production",
      items: [
        { value: "5+ years", label: "Full-Stack & DevOps experience" },
        { value: "170+", label: "CI/CD pipelines supported per day" },
        { value: "30%", label: "less release time via Kubernetes & Ansible automation" },
        { value: "Seoul", label: "based in Korea, seeking a long-term engineering role" },
      ],
    },
    work: {
      heading: "Selected case studies",
      featuredTag: "Featured",
      roleLabel: "Role",
      challengeLabel: "Challenge",
      decisionsLabel: "Engineering decisions",
      stackLabel: "Stack",
      goodcall: {
        name: "GoodCall",
        positioning:
          "A multilingual esports prediction platform for League of Legends, Valorant, CS2 and Rocket League.",
        role: "Creator & Full-Stack Engineer: mobile and backend architecture, product, and deployment workflows.",
        challenge:
          "Settling predictions against live match data without double-crediting points or corrupting standings when providers resend or correct results.",
        decisions: [
          "Provider ingestion layer normalizing external esports match data.",
          "Versioned scoring engine so rule changes never rewrite past results.",
          "Idempotent match settlement: reprocessing a result is always safe.",
          "Append-only points ledger as the audit trail for every balance.",
          "Global, regional and private-league leaderboards.",
          "CI/CD with feature branches, pull requests, code reviews and GitHub Actions.",
        ],
        stack: [
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
        ],
        url: "https://goodcall.gg/en/",
        ctaLabel: "Visit goodcall.gg",
      },
      secondary: [
        {
          name: "Pick4Me",
          positioning: "Delivery and collaborative-shopping marketplace.",
          role: "Built mission workflows, real-time chat and notifications, helper operations, location tracking and payment flows.",
          stack: ["NestJS", "PostgreSQL", "Prisma", "Redis", "Socket.IO", "Stripe", "FCM"],
          url: "https://pick4me.be",
          ctaLabel: "Visit pick4me.be",
        },
        {
          name: "Pont Factur-X",
          positioning: "AI-powered B2B invoice SaaS.",
          role: "Built document extraction pipelines, API logic, structured e-invoice generation and subscription monetization.",
          stack: ["FastAPI", "PostgreSQL", "Redis", "Docker", "MinIO", "Stripe", "Mistral AI"],
          url: "https://pont-facturx.com",
          ctaLabel: "Visit pont-facturx.com",
        },
      ],
    },
    experience: {
      heading: "Experience",
      jobs: [
        {
          role: "Independent Full-Stack / DevOps Engineer",
          company: "Freelance · Seoul / Remote",
          period: "2025 - Present",
          bullets: [
            "Architect and deliver SaaS products, web/mobile applications and automation workflows from scoping to production.",
            "Backend services with NestJS/FastAPI, PostgreSQL/Prisma, Redis, real-time events and external API integrations.",
            "Own Docker/VPS/AWS deployments, CI/CD, monitoring, security and production incident resolution.",
            "Stripe payment flows: pre-authorization, capture, refunds, subscriptions and webhook processing.",
          ],
        },
        {
          role: "DevOps Engineer",
          company: "STMicroelectronics, via Davidson Consulting",
          period: "Jan 2024 - Dec 2024",
          bullets: [
            "Administered a GitLab CI/CD platform supporting 170+ embedded software pipelines per day.",
            "Automated deployments with Kubernetes and Ansible, reducing release time by 30%.",
            "Infrastructure as code with Terraform across hybrid AWS environments.",
            "Monitoring and observability with Prometheus, Grafana and Alertmanager.",
          ],
        },
        {
          role: "Full-Stack Developer / DevOps Apprentice",
          company: "UNYC",
          period: "Sep 2020 - Sep 2023",
          bullets: [
            "Built internal web platforms centralizing service status, operational data and customer-facing information.",
            "Worked across database modeling, frontend/backend development, automated testing and production delivery.",
            "Implemented CI/CD pipelines, containerized deployments and microservice-based applications.",
          ],
        },
      ],
    },
    capabilities: {
      heading: "Capabilities",
      groups: [
        {
          name: "Backend",
          items:
            "TypeScript · JavaScript · Node.js · NestJS · Express · Python · FastAPI · Django/DRF · REST APIs · WebSockets",
        },
        {
          name: "Frontend & Mobile",
          items: "React · Next.js · React Native · Expo · Vue.js · Nuxt · Angular · Tailwind CSS",
        },
        { name: "Data", items: "PostgreSQL · MongoDB · Prisma · Redis · MinIO/S3" },
        {
          name: "Cloud & DevOps",
          items:
            "Docker · Kubernetes · GitHub Actions · GitLab CI · Terraform · Ansible · AWS · VPS · Nginx · Prometheus · Grafana",
        },
        {
          name: "Integrations",
          items:
            "Stripe · Revolut Business · SendGrid · FCM · third-party APIs · automation workflows",
        },
      ],
    },
    education: {
      heading: "Education",
      schools: [
        {
          name: "EPSI Graduate School",
          detail: "Master's Degree in Computer Science Engineering, 2018 - 2023",
        },
        {
          name: "Yonsei University · Korean Language Institute",
          detail: "Korean Language Program, Seoul, 2025",
        },
      ],
      languagesHeading: "Languages",
      languages: [
        "French (native)",
        "English (fluent, C1)",
        "Korean (elementary, actively improving)",
      ],
    },
    contact: {
      heading: "Looking for my next engineering team in Korea",
      body: "Based in Seoul, available immediately, and looking for a long-term full-time role. If your team needs an engineer who owns products from architecture to production, let's talk.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      cvLabel: "Download CV (PDF)",
      copyEmail: "Copy email address",
      copied: "Email copied",
    },
    footer: {
      studiosLine: "Also available for selected independent projects via",
      studiosLinkText: "Rayan Studios",
      rights: "Rayan Sekkat. All rights reserved.",
    },
  },

  // 한국어 — 배포 전 원어민 검수 필수 (native review required before deploy)
  ko: {
    meta: {
      title: "Rayan Sekkat | 풀스택 엔지니어 · 서울",
      description:
        "대한민국 서울 거주 풀스택 엔지니어. 백엔드, 클라우드, DevOps 분야 5년 이상의 경력. 정규직 포지션 지원 가능, H-1 비자 보유 및 장기 E-7 비자 스폰서십 희망.",
      ogAlt: "Rayan Sekkat · 서울 거주 풀스택 엔지니어",
    },
    nav: {
      work: "프로젝트",
      experience: "경력",
      capabilities: "기술 스택",
      contact: "연락처",
      cv: "영문 이력서 다운로드",
      skipToContent: "본문으로 건너뛰기",
      openMenu: "메뉴 열기",
      closeMenu: "메뉴 닫기",
      localeSwitcherLabel: "언어 선택",
      themeToggleToDark: "다크 테마로 전환",
      themeToggleToLight: "라이트 테마로 전환",
      themeAnnouncedDark: "다크 테마가 적용되었습니다",
      themeAnnouncedLight: "라이트 테마가 적용되었습니다",
      homeAriaLabel: "Rayan Sekkat 홈",
    },
    hero: {
      eyebrow: "대한민국 서울 거주 · 정규직 포지션 지원 가능",
      title: "풀스택 엔지니어",
      subtitle: "백엔드 엔지니어링 · 클라우드 & DevOps",
      value:
        "아키텍처와 API 설계부터 배포, 모니터링, 프로덕션 운영까지 제품 전 과정을 책임지고 개발합니다.",
      ctaPrimary: "케이스 스터디 보기",
      ctaSecondary: "영문 이력서 다운로드",
    },
    profileCard: {
      heading: "서울 기반",
      city: "서울.",
      coordinates: "37.5665° N · 126.9780° E",
      locationLabel: "현재 위치",
      locationValue: "대한민국 서울",
      availabilityLabel: "근무 가능 시기",
      availabilityValue: "즉시 가능",
      visaLabel: "비자",
      visaCompact: "H-1 → E-7",
      visaFull: "H-1 워킹홀리데이 비자 보유, 장기 근무를 위한 E-7 비자 스폰서십을 희망합니다.",
      languagesLabel: "언어",
      languages: ["프랑스어 (원어민)", "영어 (유창, C1)", "한국어 (초급, 꾸준히 학습 중)"],
      targetRolesLabel: "희망 분야",
      targetRolesValue: "풀스택 · 백엔드 시스템 · 클라우드 & DevOps",
      ctaEyebrow: "현재",
      cta: "한국 내 포지션 관련 문의하기",
    },
    proof: {
      heading: "프로덕션에서 검증된 경험",
      items: [
        { value: "5년+", label: "풀스택 & DevOps 경력" },
        { value: "170+", label: "일일 지원 CI/CD 파이프라인 수" },
        { value: "30%", label: "Kubernetes · Ansible 자동화를 통한 릴리스 시간 단축" },
        { value: "서울", label: "한국에서 장기 커리어를 목표로 거주 중" },
      ],
    },
    work: {
      heading: "주요 케이스 스터디",
      featuredTag: "대표 프로젝트",
      roleLabel: "역할",
      challengeLabel: "과제",
      decisionsLabel: "주요 엔지니어링 결정",
      stackLabel: "기술 스택",
      goodcall: {
        name: "GoodCall",
        positioning:
          "League of Legends, Valorant, CS2, Rocket League를 지원하는 다국어 e스포츠 승부 예측 플랫폼입니다.",
        role: "창립자 & 풀스택 엔지니어: 모바일/백엔드 아키텍처, 프로덕트, 배포 워크플로 전반을 담당.",
        challenge:
          "경기 결과가 재전송되거나 정정되는 상황에서도 포인트 중복 지급이나 순위 오류 없이 예측을 정산하는 것.",
        decisions: [
          "외부 e스포츠 경기 데이터를 정규화하는 프로바이더 수집 레이어.",
          "규칙이 변경되어도 과거 결과가 바뀌지 않는 버전 관리형 스코어링 엔진.",
          "멱등성이 보장된 경기 정산: 결과를 재처리해도 항상 안전.",
          "모든 포인트 잔액의 감사 추적이 가능한 append-only 포인트 원장.",
          "글로벌 · 지역별 · 프라이빗 리그 리더보드.",
          "피처 브랜치, 풀 리퀘스트, 코드 리뷰, GitHub Actions 기반 CI/CD.",
        ],
        stack: [
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
        ],
        url: "https://goodcall.gg/en/",
        ctaLabel: "goodcall.gg 방문하기",
      },
      secondary: [
        {
          name: "Pick4Me",
          positioning: "배달 및 공동 쇼핑 마켓플레이스.",
          role: "미션 워크플로, 실시간 채팅 및 알림, 헬퍼 운영, 위치 추적, 결제 플로를 개발.",
          stack: ["NestJS", "PostgreSQL", "Prisma", "Redis", "Socket.IO", "Stripe", "FCM"],
          url: "https://pick4me.be",
          ctaLabel: "pick4me.be 방문하기",
        },
        {
          name: "Pont Factur-X",
          positioning: "AI 기반 B2B 인보이스 SaaS.",
          role: "문서 추출 파이프라인, API 로직, 구조화된 전자 인보이스 생성, 구독 결제 기능을 개발.",
          stack: ["FastAPI", "PostgreSQL", "Redis", "Docker", "MinIO", "Stripe", "Mistral AI"],
          url: "https://pont-facturx.com",
          ctaLabel: "pont-facturx.com 방문하기",
        },
      ],
    },
    experience: {
      heading: "경력",
      jobs: [
        {
          role: "독립 풀스택 / DevOps 엔지니어",
          company: "프리랜서 · 서울 / 원격",
          period: "2025 - 현재",
          bullets: [
            "기획부터 프로덕션까지 SaaS 제품, 웹/모바일 애플리케이션, 자동화 워크플로를 설계하고 딜리버리.",
            "NestJS/FastAPI, PostgreSQL/Prisma, Redis, 실시간 이벤트, 외부 API 연동 기반 백엔드 서비스 개발.",
            "Docker/VPS/AWS 배포, CI/CD, 모니터링, 보안, 프로덕션 장애 대응을 직접 운영.",
            "Stripe 결제 플로 구현: 사전 승인, 캡처, 환불, 구독, 웹훅 처리.",
          ],
        },
        {
          role: "DevOps 엔지니어",
          company: "STMicroelectronics (Davidson Consulting 소속)",
          period: "2024년 1월 - 2024년 12월",
          bullets: [
            "일일 170개 이상의 임베디드 소프트웨어 파이프라인을 지원하는 GitLab CI/CD 플랫폼 운영.",
            "Kubernetes와 Ansible로 배포를 자동화하여 릴리스 시간 30% 단축.",
            "하이브리드 AWS 환경에서 Terraform 기반 Infrastructure as Code 관리.",
            "Prometheus, Grafana, Alertmanager로 모니터링 및 관측성 구축.",
          ],
        },
        {
          role: "풀스택 개발자 / DevOps 견습",
          company: "UNYC",
          period: "2020년 9월 - 2023년 9월",
          bullets: [
            "서비스 상태, 운영 데이터, 고객 대상 정보를 통합하는 사내 웹 플랫폼 구축.",
            "데이터베이스 모델링, 프론트엔드/백엔드 개발, 자동화 테스트, 프로덕션 딜리버리 전반 담당.",
            "CI/CD 파이프라인, 컨테이너 기반 배포, 마이크로서비스 애플리케이션 구현.",
          ],
        },
      ],
    },
    capabilities: {
      heading: "기술 스택",
      groups: [
        {
          name: "백엔드",
          items:
            "TypeScript · JavaScript · Node.js · NestJS · Express · Python · FastAPI · Django/DRF · REST APIs · WebSockets",
        },
        {
          name: "프론트엔드 & 모바일",
          items: "React · Next.js · React Native · Expo · Vue.js · Nuxt · Angular · Tailwind CSS",
        },
        { name: "데이터", items: "PostgreSQL · MongoDB · Prisma · Redis · MinIO/S3" },
        {
          name: "클라우드 & DevOps",
          items:
            "Docker · Kubernetes · GitHub Actions · GitLab CI · Terraform · Ansible · AWS · VPS · Nginx · Prometheus · Grafana",
        },
        {
          name: "연동 및 통합",
          items: "Stripe · Revolut Business · SendGrid · FCM · 외부 API · 자동화 워크플로",
        },
      ],
    },
    education: {
      heading: "학력",
      schools: [
        {
          name: "EPSI Graduate School",
          detail: "컴퓨터공학 석사 (Master's Degree), 2018 - 2023",
        },
        {
          name: "연세대학교 한국어학당",
          detail: "한국어 과정, 서울, 2025",
        },
      ],
      languagesHeading: "언어",
      languages: ["프랑스어 (원어민)", "영어 (유창, C1)", "한국어 (초급, 꾸준히 학습 중)"],
    },
    contact: {
      heading: "한국에서 장기적으로 함께할 엔지니어링 팀을 찾고 있습니다",
      body: "서울에 거주하며 즉시 근무 가능합니다. 아키텍처부터 프로덕션 운영까지 책임지는 엔지니어가 필요하시다면 편하게 연락 주세요.",
      emailLabel: "이메일",
      linkedinLabel: "LinkedIn",
      cvLabel: "영문 이력서 다운로드 (PDF)",
      copyEmail: "이메일 주소 복사",
      copied: "이메일이 복사되었습니다",
    },
    footer: {
      studiosLine: "선별적인 독립 프로젝트는 다음을 통해 진행합니다:",
      studiosLinkText: "Rayan Studios",
      rights: "Rayan Sekkat. All rights reserved.",
    },
  },
};
