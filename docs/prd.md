# Portfolio AI-Powered Full-Stack Developer Product Requirements Document (PRD)

## Goals and Background Context

### Goals

- Créer un portfolio one-page moderne démontrant l'expertise technique full-stack avec spécialisation IA
- Générer 5-10 leads qualifiés par mois via plateformes freelance (Upwork, LinkedIn, Malt)
- Atteindre des scores Lighthouse 95+ pour prouver la maîtrise de l'optimisation web
- Établir une présence professionnelle trilingue (FR/EN/KR) pour toucher marchés internationaux
- Convertir 20-30% des leads en projets payants grâce à la crédibilité du portfolio
- Positionner comme "AI-Powered Full-Stack Developer" avec différenciation claire
- Générer 3-5K€/mois de revenu freelance d'ici 6 mois

### Background Context

Le marché freelance est saturé de profils génériques. Les clients sur Upwork et LinkedIn recherchent des développeurs capables de démontrer immédiatement leur expertise technique à travers des réalisations concrètes. L'absence de vitrine professionnelle moderne limite les opportunités et rend impossible la justification de tarifs premium.

Ce portfolio servira de CV digital interactif et de démonstration technique vivante. En intégrant l'intelligence artificielle comme différenciateur majeur (LLM, ML, automation), le site lui-même devient la preuve de la maîtrise des technologies et principes proposés aux clients. Le projet pont-facturx.com servira de case study démontrant la capacité de livraison sur des projets réels.

### Change Log

| Date       | Version | Description                                | Author    |
| ---------- | ------- | ------------------------------------------ | --------- |
| 2026-01-24 | 1.0     | Document initial créé depuis Project Brief | John (PM) |

---

## Requirements

### Functional Requirements

**FR1:** The system shall display a modern one-page layout with smooth scroll navigation between sections (Hero, About, Skills, Services, Projects, Blog, Contact)

**FR2:** The hero section shall present the title "AI-Powered Full-Stack Developer" with animated introduction and clear CTAs to contact

**FR3:** The system shall showcase all services including AI integration (LLM, ML, chatbots, automation), site refactoring, backend/API development, SAAS creation, deployment, security, database management, and payment systems

**FR4:** The system shall display a detailed project case study for pont-facturx.com including description, technologies used (Python, React, etc.), and measurable results with live link

**FR5:** The blog section shall display 3-5 initial technical articles with at least one focused on AI/ML topics

**FR6:** The system shall provide language switching between French, English, and Korean with 100% translated content and user choice persistence

**FR7:** The system shall implement dark mode with manual toggle and automatic detection of system theme preference (prefers-color-scheme)

**FR8:** The contact form shall collect name, email, and message with client-side and server-side validation, and successfully send messages via EmailJS or backend API

**FR9:** The system shall display professional profile links to LinkedIn, GitHub, Upwork, and email with appropriate icons

**FR10:** All images shall be optimized with lazy loading and code splitting implemented for performance

**FR11:** The system shall be fully responsive across mobile, tablet, and desktop devices

**FR12:** The system shall include SEO-optimized meta tags, Open Graph tags, semantic HTML structure, and sitemap

### Non-Functional Requirements

**NFR1:** The system shall achieve Lighthouse Performance score of 95+ on all pages

**NFR2:** The system shall achieve Lighthouse Accessibility score of 100

**NFR3:** All Core Web Vitals shall be in the green zone (LCP < 2.5s, FID < 100ms, CLS < 0.1)

**NFR4:** Initial page load time shall be under 1.5 seconds on 4G connection

**NFR5:** The system shall achieve SEO score of 95+ for organic visibility

**NFR6:** The system shall be compatible with the latest 2 versions of Chrome, Firefox, Safari, and Edge, plus iOS and Android mobile browsers

**NFR7:** The system shall be deployed on Vercel with CI/CD automation via GitHub

**NFR8:** The system shall implement HTTPS, CSRF protection, rate limiting on API endpoints, and Content Security Policy headers

**NFR9:** The system shall comply with RGPD regulations including cookie banner and privacy policy

**NFR10:** The contact form submission shall complete within 3 seconds under normal network conditions

**NFR11:** The system shall maintain visual consistency and smooth animations at 60fps across all supported devices

**NFR12:** The multilingual system shall load translation data efficiently without blocking initial render

---

## User Interface Design Goals

### Overall UX Vision

Create a modern, visually striking one-page portfolio that immediately captures attention through fluid animations and professional polish. The experience should feel like a journey through competencies, with each scroll revealing new capabilities. Prioritize smooth transitions, micro-interactions, and a contemporary aesthetic that demonstrates technical excellence. The interface itself becomes proof of expertise—fast, elegant, and meticulously crafted.

Dark mode should feel native and intentional, not an afterthought. Language switching must be seamless without page reload. Every interaction should reinforce the "AI-Powered Full-Stack Developer" positioning through thoughtful design choices.

### Key Interaction Paradigms

- **Smooth scroll navigation** with animated section transitions on scroll reveal
- **Sticky navigation bar** with active section indicators showing current position
- **Card-based layouts** for services and projects with hover effects and depth
- **Typing animation** or dynamic text effects in hero section
- **Toggle switches** for dark/light mode and language selection (FR/EN/KR)
- **Form validation** with real-time feedback and success/error states
- **Lazy loading** with skeleton loaders or fade-in animations for images
- **Click-to-expand** or modal overlays for project case study details
- **CTA buttons** with clear hover states and visual hierarchy

### Core Screens and Views

1. **Hero/Landing Section** - Immediate impact with name, title "AI-Powered Full-Stack Developer", value proposition, and primary CTA
2. **About Section** - Professional background emphasizing AI expertise and development philosophy
3. **Skills & Services Grid** - Visual showcase of all services with focus on AI integration capabilities
4. **Projects/Portfolio Section** - Featured case study for pont-facturx.com with detailed information
5. **Blog/Articles Section** - Grid or list of technical articles with preview cards
6. **Contact Section** - Form with direct contact options and professional profile links

### Accessibility

**WCAG AA** - Ensure sufficient color contrast, keyboard navigation, semantic HTML, proper ARIA labels, focus indicators, and screen reader compatibility. Target Lighthouse Accessibility score of 100.

### Branding

- **Color Palette:** Modern tech aesthetic with vibrant accents for dark and light modes. Primary color should support both themes seamlessly.
- **Typography:** Clean, contemporary sans-serif font stack (e.g., Inter, SF Pro Display) for readability and modern feel
- **Visual Style:** Minimalist with strategic use of gradients, shadows, and animations inspired by referenced portfolios
- **AI Visual Language:** Subtle tech/AI visual cues (geometric patterns, gradient effects) without being clichéd
- **Professional Tone:** Confident, competent, approachable—not overly corporate or too casual

### Target Device and Platforms

**Web Responsive** - Desktop-first design with full mobile/tablet optimization. Must work flawlessly on:

- Desktop browsers (Chrome, Firefox, Safari, Edge - latest 2 versions)
- Mobile iOS Safari and Android Chrome
- Tablet landscape and portrait orientations

Performance and visual quality must be excellent across all devices. No native mobile apps required for MVP.

---

## Technical Assumptions

### Repository Structure: Monorepo

A monorepo using pnpm or yarn workspaces will house the Next.js application with clear separation of concerns (frontend components, API routes, shared utilities, database schema). This approach simplifies dependency management, enables code sharing, and supports the one-page architecture efficiently.

### Service Architecture

**Next.js Hybrid Rendering (SSR/SSG)** - Leverage Next.js App Router for optimal SEO and performance:

- Static Site Generation (SSG) for main portfolio content that rarely changes
- Server-Side Rendering (SSR) for dynamic blog articles if needed
- API Routes for lightweight backend endpoints (contact form submission, analytics)
- Edge Functions via Vercel for global performance optimization

**Optional Backend Services:**

- Node.js + Express for more complex API needs if Next.js API routes insufficient
- Python/FastAPI for AI-related backend services or integrations if required post-MVP

### Testing Requirements

**Unit + Integration Testing** for MVP:

- **Unit tests** for utility functions, components, and API routes using Jest + React Testing Library
- **Integration tests** for critical user flows (contact form submission, language switching, dark mode)
- **Manual testing** on multiple browsers/devices for responsive and visual validation
- **Lighthouse CI** integration for automated performance/accessibility regression testing

Post-MVP consideration: E2E tests with Playwright for full user journey validation

### Additional Technical Assumptions and Requests

**Frontend Stack:**

- **React 18+** with TypeScript for type safety and modern React features
- **Next.js 14+** with App Router for routing, SSR/SSG, and API routes
- **Tailwind CSS** for utility-first styling with custom theme for dark mode
- **Framer Motion** for smooth animations and scroll effects
- **React-i18next** for internationalization (FR/EN/KR) with DeepL API integration

**Database & ORM:**

- **PostgreSQL** (Vercel Postgres or Supabase free tier) for structured data (blog articles, analytics)
- **Prisma ORM** for type-safe database access and migrations

**Hosting & Infrastructure:**

- **Vercel** for deployment, hosting, and CI/CD automation via GitHub integration
- **GitHub** for version control and repository
- **Cloudflare CDN** (optional) for additional image optimization

**APIs & Integrations:**

- **DeepL API** for automated high-quality translations (FR↔EN↔KR)
- **EmailJS** or **Resend API** for contact form email delivery
- **Google Analytics 4** for visitor tracking and conversion metrics
- **Vercel Analytics** for Core Web Vitals monitoring

**Security & Compliance:**

- HTTPS enforced (automatic via Vercel)
- CSRF protection on all form endpoints
- Rate limiting on API routes to prevent abuse
- Content Security Policy (CSP) headers configured
- RGPD-compliant cookie consent banner
- Input validation on client and server sides

**Browser Support:**

- Latest 2 versions of Chrome, Firefox, Safari, Edge
- iOS Safari (latest 2 versions)
- Android Chrome (latest 2 versions)
- No IE11 support

**Development Tools:**

- **TypeScript** strict mode for type safety
- **ESLint** + **Prettier** for code quality and formatting
- **Husky** + **lint-staged** for pre-commit hooks
- **pnpm** as package manager (faster, more efficient than npm/yarn)

**Performance Optimizations:**

- Image optimization with Next.js Image component
- Lazy loading for images and heavy components
- Code splitting at route level
- Font optimization with next/font
- Static asset caching strategies
- Minimize JavaScript bundle size (<100KB initial load target)

**Deployment Strategy:**

- Automatic deployments to Vercel on push to main branch
- Preview deployments for pull requests
- Environment variables managed via Vercel dashboard
- Database connection pooling for optimal PostgreSQL performance

---

## Epic List

**Epic 1: Foundation & Core Portfolio Structure**

Establish the Next.js project with TypeScript, Tailwind CSS, deploy pipeline to Vercel, and deliver a responsive one-page structure with all main content sections (Hero, About, Skills/Services, Projects, Contact) deployed and accessible.

---

**Epic 2: Multilingual Support & Dark Mode**

Implement comprehensive internationalization (FR/EN/KR) with DeepL API integration, dark mode with system preference detection, and persistent user preferences across sessions.

---

**Epic 3: Interactive Features & Contact System**

Add smooth scroll animations, micro-interactions, contact form with validation and email delivery, professional links integration, and all interactive UI behaviors that enhance user engagement.

---

**Epic 4: Blog System & Content**

Create the blog/articles section with support for technical articles, implement 3-5 initial articles (including AI/ML focused content), and add blog navigation/filtering capabilities.

---

**Epic 5: Performance Optimization & Launch Readiness**

Optimize for Lighthouse 95+ scores across all metrics, implement SEO meta tags, add analytics tracking, ensure RGPD compliance, and prepare for production launch with final polish and cross-browser testing.

---

## Epic 1: Foundation & Core Portfolio Structure

**Epic Goal:** Establish the complete Next.js project infrastructure with TypeScript, Tailwind CSS, PostgreSQL database, and CI/CD deployment to Vercel. Deliver a responsive one-page portfolio website with all main content sections (Hero, About, Skills/Services, Projects, Contact) fully deployed and accessible. The deliverable is a functional, deployed portfolio showcasing Rayan's AI-powered full-stack developer positioning, even if animations and advanced features come in later epics.

### Story 1.1: Initialize Next.js Project with TypeScript and Core Dependencies

As a **developer**,  
I want **a Next.js 14+ project with TypeScript, Tailwind CSS, ESLint, Prettier, and pnpm configured**,  
so that **the project foundation is established with proper tooling and structure**.

**Acceptance Criteria:**

1. Next.js 14+ project created using App Router with TypeScript strict mode enabled
2. Tailwind CSS configured with custom theme support (prepared for dark mode colors)
3. pnpm workspace properly configured with lock file
4. ESLint + Prettier configured with pre-commit hooks via Husky and lint-staged
5. Project structure established: `/app`, `/components`, `/lib`, `/public`, `/styles`
6. README.md includes project setup instructions and tech stack
7. Git repository initialized with proper .gitignore for Next.js
8. Basic layout.tsx and page.tsx render "Hello World" successfully
9. Development server runs without errors on `pnpm dev`
10. TypeScript compilation completes without errors

### Story 1.2: Setup Vercel Deployment Pipeline and Environment Configuration

As a **developer**,  
I want **the project deployed to Vercel with CI/CD automation**,  
so that **changes are automatically deployed and the site is publicly accessible**.

**Acceptance Criteria:**

1. GitHub repository connected to Vercel project
2. Automatic deployment configured for main branch pushes
3. Preview deployments enabled for pull requests
4. Environment variables template created (.env.example)
5. Production environment variables configured in Vercel dashboard
6. Custom domain placeholder documented for future setup
7. Deployment completes successfully and site is accessible via Vercel URL
8. Build logs show no errors or warnings
9. HTTPS is enforced automatically by Vercel
10. Deployment status badge added to README.md (optional but nice)

### Story 1.3: Setup PostgreSQL Database with Prisma ORM

As a **developer**,  
I want **PostgreSQL database configured with Prisma ORM and initial schema**,  
so that **the application can persist data for blog articles and future features**.

**Acceptance Criteria:**

1. PostgreSQL database provisioned (Vercel Postgres or Supabase free tier)
2. Prisma installed and configured with TypeScript support
3. Database connection string configured in environment variables
4. Initial Prisma schema created with at least one model (e.g., BlogPost placeholder)
5. Prisma Client generated and importable in the application
6. Database migrations run successfully (`prisma migrate dev`)
7. Connection pooling configured for optimal performance
8. Prisma Studio accessible for database inspection
9. Seed script created for development data (optional initial articles)
10. Database connection tested with a simple health check API route at `/api/health`

### Story 1.4: Create Responsive One-Page Layout and Navigation

As a **developer**,  
I want **a responsive one-page layout with sticky navigation and section structure**,  
so that **users can navigate between portfolio sections seamlessly**.

**Acceptance Criteria:**

1. Main layout component created with header, main content area, and footer
2. Sticky navigation bar implemented with logo/name and section links (Hero, About, Skills, Projects, Blog, Contact)
3. Navigation is responsive with mobile hamburger menu
4. Section components created as placeholders: HeroSection, AboutSection, SkillsSection, ProjectsSection, BlogSection, ContactSection
5. Each section has unique ID for anchor linking
6. Navigation links scroll to corresponding sections smoothly (native scroll-behavior or basic implementation)
7. Layout is fully responsive on mobile (320px+), tablet (768px+), and desktop (1024px+)
8. Tailwind breakpoints used consistently throughout
9. Basic color scheme applied (can be simple, will be enhanced with dark mode later)
10. Footer includes copyright and basic professional links placeholders

### Story 1.5: Implement Hero Section with Professional Introduction

As a **visitor**,  
I want **an impactful hero section introducing Rayan as an AI-Powered Full-Stack Developer**,  
so that **I immediately understand his expertise and value proposition**.

**Acceptance Criteria:**

1. Hero section spans full viewport height on desktop with appropriate mobile sizing
2. Primary heading displays "Rayan Sekkat" or professional name
3. Subtitle/tagline clearly states "AI-Powered Full-Stack Developer" positioning
4. Brief value proposition text (1-2 sentences) highlighting key services
5. Primary CTA button "Get in Touch" links to Contact section
6. Secondary CTA button "View Projects" links to Projects section
7. Professional profile image or avatar included (placeholder acceptable)
8. Typography hierarchy is clear and readable
9. Section is fully responsive with adjusted layout for mobile
10. Content is semantically structured with proper heading tags (h1, h2)

### Story 1.6: Create About Section with Professional Background

As a **visitor**,  
I want **to read about Rayan's background, expertise, and approach**,  
so that **I understand his qualifications and development philosophy**.

**Acceptance Criteria:**

1. About section created with clear heading "About Me" or similar
2. Professional biography text (2-3 paragraphs) emphasizing AI integration expertise, full-stack capabilities, and development philosophy
3. Key statistics or highlights displayed (e.g., "5+ years experience", "10+ projects delivered") with visual styling
4. Technology icons or badges showing core stack (React, TypeScript, Node.js, Python, Docker, AWS, PostgreSQL)
5. Content emphasizes the AI-powered differentiator throughout
6. Section uses two-column layout on desktop (text + visual element) and stacks on mobile
7. Visual element could be illustration, additional image, or tech stack visualization
8. Typography is scannable with appropriate spacing
9. Section is visually distinct from Hero section
10. Content is production-ready (not lorem ipsum) in French language

### Story 1.7: Build Skills & Services Showcase Grid

As a **visitor**,  
I want **to see all services offered with clear descriptions and visual hierarchy**,  
so that **I can quickly identify if Rayan's skills match my project needs**.

**Acceptance Criteria:**

1. Skills/Services section created with heading "Services" or "What I Do"
2. Grid layout displaying all service categories (minimum 8 services from brief)
3. Each service card includes: icon/visual, title, brief description (2-3 sentences)
4. Services prominently include: AI Integration (LLM, ML, Chatbots, Automation), Site Refactoring, Backend/API Development, SAAS Creation, Database Management, Payment Systems, Deployment, Security
5. AI Integration service is visually emphasized as primary differentiator
6. Grid is responsive: 3-4 columns desktop, 2 columns tablet, 1 column mobile
7. Icons are consistent in style (use icon library like Lucide React or Heroicons)
8. Cards have subtle hover effects (shadow, transform, or color change)
9. Typography hierarchy distinguishes service titles from descriptions
10. Section maintains visual consistency with overall design system

### Story 1.8: Create Projects Section with pont-facturx.com Case Study

As a **visitor**,  
I want **to see a detailed case study of pont-facturx.com project**,  
so that **I can evaluate Rayan's work quality and technical capabilities**.

**Acceptance Criteria:**

1. Projects section created with heading "Featured Project" or "Portfolio"
2. Project card for pont-facturx.com includes: project name, tagline, detailed description
3. Technologies used section lists: Python, React, and other relevant technologies with visual badges
4. Key features or challenges overcome are highlighted (3-5 bullet points)
5. Measurable results or outcomes displayed if available (e.g., "Reduced processing time by 40%")
6. Project includes thumbnail or screenshot image (optimized with Next.js Image)
7. "View Live Site" button/link included (opens in new tab)
8. Optional "View Code" link to GitHub if project is open source
9. Card layout is responsive with image and content adapting to screen size
10. Content tells a compelling story about the project delivery and impact

### Story 1.9: Implement Contact Section with Form Structure

As a **visitor**,  
I want **a contact form to send messages to Rayan**,  
so that **I can inquire about services or start a conversation**.

**Acceptance Criteria:**

1. Contact section created with heading "Get in Touch" or similar
2. Form includes fields: Name (text input), Email (email input), Message (textarea)
3. All form fields have proper labels and placeholder text
4. Form layout is clean and user-friendly
5. Basic client-side HTML5 validation applied (required fields, email format)
6. Submit button is clearly visible with appropriate text ("Send Message")
7. Form is fully responsive and usable on mobile devices
8. Professional links displayed: LinkedIn, GitHub, Upwork, Email with icons
9. Icons link to actual profiles/contact methods (use placeholder URLs if needed)
10. Form structure is ready for backend integration (Epic 3) but shows "Coming soon" message or is visually disabled for now

### Story 1.10: Add Footer with Professional Information

As a **visitor**,  
I want **a footer with copyright, professional links, and site information**,  
so that **I can access additional contact methods and legal information**.

**Acceptance Criteria:**

1. Footer component spans full width at bottom of page
2. Copyright notice includes current year and Rayan's name
3. Professional links repeated (LinkedIn, GitHub, Upwork, Email) with icons
4. Links to Privacy Policy and Terms (placeholder pages for now, needed for RGPD)
5. Optional: "Built with Next.js, TypeScript, Tailwind CSS" tech attribution
6. Footer design complements overall aesthetic
7. Footer is responsive with layout adjusting for mobile (stack vs row)
8. All links use proper accessibility attributes (aria-labels where needed)
9. Footer visually separates from Contact section with border or background color
10. Footer remains at bottom of page regardless of content height

### Story 1.11: Implement Responsive Design Testing and Cross-Browser Validation

As a **developer**,  
I want **the portfolio validated across devices and browsers**,  
so that **all users have an excellent experience regardless of their platform**.

**Acceptance Criteria:**

1. Site tested on mobile devices: iPhone (Safari), Android (Chrome) - actual devices or emulators
2. Site tested on tablet: iPad (Safari) and Android tablet (Chrome) - landscape and portrait
3. Site tested on desktop browsers: Chrome, Firefox, Safari, Edge (latest 2 versions)
4. All sections are properly visible and functional across all tested devices/browsers
5. Images load correctly and are appropriately sized on all devices
6. Typography is readable on all screen sizes (minimum 16px base font size on mobile)
7. Touch targets are appropriately sized for mobile (minimum 44x44px)
8. No horizontal scrolling occurs on any device
9. Navigation menu works correctly on mobile (hamburger menu functional)
10. Documented list of tested devices/browsers added to project documentation

### Story 1.12: Optimize Initial Performance and Deploy Epic 1 Completion

As a **developer**,  
I want **the site optimized for performance and deployed**,  
so that **Epic 1 delivers a production-ready, deployed portfolio**.

**Acceptance Criteria:**

1. All images optimized using Next.js Image component with appropriate sizes and formats
2. Fonts optimized using next/font for performance
3. Unused CSS purged by Tailwind's production build
4. Initial JavaScript bundle size < 150KB (target, measured in production build)
5. Lighthouse Performance score > 85 (will reach 95+ in Epic 5, but should be good now)
6. Lighthouse Accessibility score > 90
7. No console errors or warnings in browser
8. All environment variables properly configured for production
9. Final deployment to Vercel successful with all sections visible
10. Site URL shared and verified accessible from external network

---

## Epic 2: Multilingual Support & Dark Mode

**Epic Goal:** Implement comprehensive internationalization supporting French, English, and Korean with DeepL API integration for high-quality translations, and add intelligent dark mode with system preference detection and manual toggle. User language and theme preferences persist across sessions. This epic transforms the portfolio into a truly global tool that adapts to user preferences, significantly expanding market reach.

### Story 2.1: Setup i18next and Multilingual Infrastructure

As a **developer**,  
I want **react-i18next configured with language detection and switching capability**,  
so that **the application can support multiple languages dynamically**.

**Acceptance Criteria:**

1. react-i18next and next-i18next installed and configured
2. Language configuration supports FR (French), EN (English), KR (Korean)
3. Default language set to French (FR) as primary
4. Language detection middleware configured to check: URL parameter, localStorage, browser preference
5. Translation files structure created: `/public/locales/{fr,en,kr}/common.json`
6. i18next configuration includes namespaces for different sections (common, navigation, services, etc.)
7. HOC or hook pattern established for easy translation usage in components (`useTranslation`)
8. Language switching function created and exportable
9. Current language state managed properly (Context API or similar)
10. Console shows no i18next errors or missing translation warnings

### Story 2.2: Create French Base Translations for All Content

As a **content creator**,  
I want **all portfolio content translated into French (native language)**,  
so that **French-speaking visitors have complete, natural-sounding content**.

**Acceptance Criteria:**

1. All Hero section content translated: name, title, tagline, CTA buttons
2. All About section content translated: biography, statistics, technology labels
3. All Services section content translated: service titles and descriptions (all 8+ services)
4. Projects section content translated: project title, description, technologies, outcomes
5. Blog section placeholders translated: section heading, coming soon messages
6. Contact section translated: form labels, placeholders, button text, professional links labels
7. Navigation menu translated: all section links
8. Footer content translated: copyright, links, legal placeholders
9. All translations stored in `/public/locales/fr/common.json` with proper nesting
10. Site displays entirely in French when FR language is selected

### Story 2.3: Integrate DeepL API for English and Korean Translations

As a **developer**,  
I want **DeepL API integrated to automatically translate French content to English and Korean**,  
so that **high-quality translations are generated without manual translation work**.

**Acceptance Criteria:**

1. DeepL API key configured in environment variables
2. Translation script created to call DeepL API for batch translation
3. Script accepts source language (FR) and target languages (EN, KR)
4. All French translations automatically translated to English and saved to `/public/locales/en/common.json`
5. All French translations automatically translated to Korean and saved to `/public/locales/kr/common.json`
6. Translation preserves JSON structure and keys exactly
7. Special terms (React, TypeScript, etc.) are handled appropriately (not translated or transliterated correctly)
8. Script includes error handling and retry logic for API failures
9. Translation script can be re-run when French content updates
10. Manual review notes added for technical terms that may need adjustment

### Story 2.4: Implement Language Switcher Component

As a **visitor**,  
I want **to switch between French, English, and Korean languages**,  
so that **I can read the portfolio in my preferred language**.

**Acceptance Criteria:**

1. Language switcher component created with dropdown or toggle buttons
2. Switcher displays all three language options: FR, EN, KR with flags or abbreviations
3. Current language is visually indicated (highlighted, checkmark, or similar)
4. Clicking a language immediately updates all content without page reload
5. Language switcher is accessible via keyboard navigation
6. Component is responsive and works on mobile devices
7. Language switcher positioned in header/navigation area (visible on all sections)
8. Selected language is saved to localStorage for persistence
9. Language preference persists across browser sessions
10. URL updates to reflect current language (optional: `/fr`, `/en`, `/kr` routes or query parameter)

### Story 2.5: Setup Tailwind Dark Mode with CSS Variables

As a **developer**,  
I want **Tailwind CSS configured for dark mode with CSS custom properties**,  
so that **theme switching is performant and maintainable**.

**Acceptance Criteria:**

1. Tailwind CSS dark mode strategy configured (class-based: `class` strategy)
2. CSS custom properties defined for all theme colors (background, text, primary, secondary, accent, etc.)
3. Light theme colors defined with appropriate values
4. Dark theme colors defined with appropriate high-contrast values
5. Color variables applied throughout existing components using Tailwind utilities
6. All text remains readable in both themes (WCAG AA contrast ratio minimum)
7. Images and icons adapt appropriately to dark mode (if needed)
8. Tailwind config includes dark mode variants for necessary utilities
9. Theme variables accessible via Tailwind's theme() function
10. No visual glitches when switching between themes

### Story 2.6: Implement Dark Mode Toggle with System Preference Detection

As a **visitor**,  
I want **the site to respect my system theme preference and allow manual override**,  
so that **the interface is comfortable for my viewing preference**.

**Acceptance Criteria:**

1. System theme preference detected using `prefers-color-scheme` media query on initial load
2. Dark mode automatically activated if system preference is dark
3. Manual theme toggle component created (sun/moon icon or similar)
4. Toggle button positioned in header/navigation (near language switcher)
5. Clicking toggle switches between light and dark themes
6. Manual selection overrides system preference
7. Theme preference saved to localStorage for persistence
8. Theme persists across browser sessions
9. Theme application is immediate without flash of unstyled content (FOUC)
10. Toggle button is keyboard accessible and screen reader friendly

### Story 2.7: Apply Dark Mode Styling to All Sections

As a **visitor**,  
I want **all portfolio sections to look excellent in dark mode**,  
so that **I have a cohesive and professional experience in my preferred theme**.

**Acceptance Criteria:**

1. Hero section fully styled for dark mode (background, text, buttons)
2. About section fully styled for dark mode (text, backgrounds, statistics)
3. Skills/Services section cards styled for dark mode (backgrounds, borders, text, icons)
4. Projects section styled for dark mode (cards, images, text)
5. Contact section styled for dark mode (form inputs, labels, buttons)
6. Footer styled for dark mode (background, text, links)
7. Navigation bar styled for dark mode (background, links, mobile menu)
8. All hover states work correctly in both themes
9. Focus indicators are visible in both themes
10. Smooth transition applied between theme changes (0.2-0.3s transition on color properties)

### Story 2.8: Optimize and Test Multilingual Content Quality

As a **content reviewer**,  
I want **all translations reviewed and corrected where needed**,  
so that **content is natural and professional in all three languages**.

**Acceptance Criteria:**

1. English translations reviewed for naturalness and technical accuracy
2. Korean translations reviewed for cultural appropriateness and technical terms
3. Technical terms (React, TypeScript, API, etc.) are consistent across languages
4. "AI-Powered Full-Stack Developer" positioning is clear and impactful in all languages
5. Service descriptions maintain the same value proposition across languages
6. CTA buttons use culturally appropriate action language
7. Professional tone is maintained in all languages
8. Any awkward machine translations are manually corrected
9. Translation corrections saved back to respective locale files
10. All three languages tested for completeness (no missing translations)

### Story 2.9: Test Theme and Language Persistence Across User Journeys

As a **QA tester**,  
I want **theme and language preferences to persist correctly**,  
so that **users don't lose their preferences during navigation or across sessions**.

**Acceptance Criteria:**

1. Language selection persists when scrolling between sections
2. Theme selection persists when scrolling between sections
3. Language preference persists after browser refresh
4. Theme preference persists after browser refresh
5. Language preference persists after closing and reopening browser (new session)
6. Theme preference persists after closing and reopening browser (new session)
7. Switching language does not reset theme preference
8. Switching theme does not reset language preference
9. No flickering or flash of wrong theme/language on page load
10. Preferences work correctly in incognito/private browsing mode (within session)

### Story 2.10: Accessibility Testing for Internationalization and Dark Mode

As a **accessibility specialist**,  
I want **theme and language features to be fully accessible**,  
so that **all users including those with disabilities can use these features**.

**Acceptance Criteria:**

1. Language switcher is keyboard navigable (Tab, Enter, Arrow keys)
2. Theme toggle is keyboard navigable (Tab, Enter/Space)
3. Both controls have proper ARIA labels and roles
4. Screen readers announce current language when changed
5. Screen readers announce current theme when changed
6. All color contrasts meet WCAG AA in both light and dark modes (4.5:1 for text)
7. Focus indicators are visible in both themes
8. Language switcher and theme toggle have descriptive tooltips or labels
9. HTML lang attribute updates when language changes
10. No accessibility regressions from Epic 1 - Lighthouse Accessibility score maintained or improved

### Story 2.11: Performance Testing for Theme and Language Switching

As a **developer**,  
I want **theme and language switching to be performant**,  
so that **user experience remains smooth and responsive**.

**Acceptance Criteria:**

1. Theme switching completes in < 100ms (perceived instantly)
2. Language switching completes in < 200ms (perceived instantly)
3. No layout shift (CLS) when switching themes
4. No layout shift (CLS) when switching languages (test both short and long translations)
5. Initial page load does not include flash of unstyled content (FOUC)
6. Translation files are appropriately sized (< 50KB per language)
7. Only current language translation file is loaded (lazy loading of other languages)
8. Theme transition animations are smooth (60fps)
9. localStorage operations do not block UI thread
10. Lighthouse Performance score from Epic 1 is maintained or improved

### Story 2.12: Deploy Epic 2 with Full Multilingual and Dark Mode Support

As a **project manager**,  
I want **Epic 2 deployed to production with all features tested**,  
so that **the portfolio now supports global audiences with personalized experiences**.

**Acceptance Criteria:**

1. All environment variables (DeepL API key) configured in Vercel production
2. All three language files deployed and accessible
3. Language switcher functional on production site
4. Dark mode toggle functional on production site
5. Theme and language preferences persist on production
6. All three languages tested on production URL
7. Both themes tested on production URL across all sections
8. No console errors related to i18next or theme switching
9. Meta tags update correctly for each language (lang attribute, og:locale)
10. Production site verified on mobile and desktop with both features working

---

## Epic 3: Interactive Features & Contact System

**Epic Goal:** Bring the portfolio to life with smooth scroll animations, engaging micro-interactions, and a fully functional contact form with email delivery. Implement all interactive UI behaviors that enhance user engagement and establish the primary lead generation mechanism. After this epic, visitors can interact meaningfully with the site and send inquiries, converting the portfolio from informational to actionable.

### Story 3.1: Implement Smooth Scroll Navigation and Section Transitions

As a **visitor**,  
I want **smooth scrolling between sections with animated transitions**,  
so that **navigation feels polished and professional**.

**Acceptance Criteria:**

1. Clicking navigation links smoothly scrolls to target sections (not instant jump)
2. Scroll behavior uses easing function for natural feel (ease-in-out or similar)
3. Active section indicator in navigation updates as user scrolls
4. Scroll duration is appropriate (500-800ms, not too slow or fast)
5. Smooth scroll works on all modern browsers
6. Mobile scroll behavior is smooth and responsive
7. URL hash updates when scrolling to sections (supports deep linking)
8. Browser back/forward buttons work correctly with section navigation
9. Scroll offset accounts for sticky header height (section appears below header)
10. Scroll behavior is accessible (keyboard navigation still works, respects reduced-motion preference)

### Story 3.2: Add Framer Motion for Scroll-Triggered Section Animations

As a **visitor**,  
I want **sections to animate into view as I scroll down the page**,  
so that **the experience is engaging and reveals content progressively**.

**Acceptance Criteria:**

1. Framer Motion library installed and configured
2. Each major section animates on scroll reveal (fade-in, slide-up, or similar)
3. Animations trigger when section enters viewport (intersection observer pattern)
4. Animation timing is staggered appropriately (not all at once)
5. Animations respect user's reduced-motion preference (no animations if prefers-reduced-motion)
6. Animations are smooth and run at 60fps
7. Initial viewport sections (Hero) animate on page load
8. Below-fold sections animate on first scroll reveal only (not on every scroll)
9. Animation duration is appropriate (300-600ms, not distracting)
10. Dark mode theme switching does not trigger re-animation

### Story 3.3: Implement Micro-Interactions for Service Cards and Project Card

As a **visitor**,  
I want **interactive hover effects on service and project cards**,  
so that **the interface feels responsive and polished**.

**Acceptance Criteria:**

1. Service cards have hover effect: subtle scale, shadow elevation, or glow
2. Project card has hover effect on image: zoom, overlay, or brightness change
3. All hover effects use CSS transitions or Framer Motion for smoothness
4. Hover effects work on desktop only (no sticky hover states on mobile)
5. Focus states mirror hover effects for keyboard navigation accessibility
6. Card transitions are fast (150-200ms) for responsive feel
7. Professional link icons in Contact/Footer have hover effects (color change, scale)
8. CTA buttons have engaging hover states (color shift, shadow, or scale)
9. Navigation links have underline or highlight animation on hover
10. All micro-interactions are performant (no jank or frame drops)

### Story 3.4: Add Typing Animation or Dynamic Text Effect to Hero Section

As a **visitor**,  
I want **an eye-catching text animation in the hero section**,  
so that **the portfolio immediately captures my attention**.

**Acceptance Criteria:**

1. Hero section includes animated text element (typing effect, text reveal, or word rotation)
2. Animation could be: typing "AI-Powered Full-Stack Developer" letter by letter, or rotating through key skills
3. Animation runs on page load automatically
4. Animation timing is natural and not too slow or fast
5. Animation completes and leaves final text visible (doesn't loop indefinitely if typing)
6. Animation respects reduced-motion preference (shows static text if preferred)
7. Animation works in all three languages (FR/EN/KR)
8. Text remains accessible to screen readers (full text available in DOM)
9. Animation is performant and doesn't delay page interaction
10. Animation styling matches overall theme and works in dark mode

### Story 3.5: Create API Route for Contact Form Submission

As a **developer**,  
I want **a secure API endpoint to handle contact form submissions**,  
so that **the backend can process and send contact emails**.

**Acceptance Criteria:**

1. API route created at `/app/api/contact/route.ts` using Next.js App Router
2. Endpoint accepts POST requests with JSON body: `{ name, email, message }`
3. Server-side validation implemented: all fields required, email format validation
4. Validation errors return 400 status with descriptive error messages
5. Rate limiting implemented to prevent spam (max 5 submissions per IP per hour)
6. CSRF protection implemented using tokens or SameSite cookies
7. Sanitization applied to input fields to prevent XSS attacks
8. Successful validation returns 200 status with success message
9. Error handling includes try-catch with appropriate 500 responses for server errors
10. API endpoint logged for monitoring (successful submissions and errors)

### Story 3.6: Integrate Email Service for Contact Form Delivery

As a **site owner**,  
I want **contact form submissions delivered to my email**,  
so that **I can respond to potential client inquiries**.

**Acceptance Criteria:**

1. Email service integrated (EmailJS, Resend, or SendGrid) with API key in environment variables
2. API route sends email on successful form validation
3. Email includes: sender name, sender email (with reply-to), message content, submission timestamp
4. Email subject line clearly indicates "Portfolio Contact Form Submission"
5. Email template is professional and readable (HTML format preferred)
6. Email delivery tested successfully in development and staging
7. Failed email delivery returns appropriate error to user (500 status)
8. Email service has retry logic for transient failures
9. Email sent to Rayan's configured email address (environment variable)
10. BCC or confirmation email sent to submitter (optional but nice)

### Story 3.7: Implement Client-Side Contact Form Validation and UX

As a **visitor**,  
I want **real-time validation and clear feedback when filling the contact form**,  
so that **I know if my submission is correct before sending**.

**Acceptance Criteria:**

1. Client-side validation displays error messages below each field in real-time
2. Name field validates: required, minimum 2 characters
3. Email field validates: required, proper email format
4. Message field validates: required, minimum 10 characters
5. Submit button is disabled until all fields are valid
6. Error messages are clear and actionable (e.g., "Please enter a valid email")
7. Success state shows confirmation message: "Message sent successfully!"
8. Error state shows user-friendly message: "Failed to send message. Please try again."
9. Form is disabled during submission (loading state prevents double-submission)
10. Loading spinner or indicator shows during submission

### Story 3.8: Style Contact Form with Enhanced Visual Design

As a **visitor**,  
I want **a visually appealing contact form that matches the site's premium aesthetic**,  
so that **I feel confident using it to reach out**.

**Acceptance Criteria:**

1. Form inputs have modern styling: borders, focus states, padding
2. Focus states are clearly visible with accent color outline
3. Input labels are well-positioned (floating labels or above-field)
4. Error states have red accent color and error icon
5. Success state has green accent color and success icon/checkmark
6. Submit button is prominent with primary brand color
7. Form layout is clean with appropriate spacing between fields
8. Form is fully responsive on mobile (fields stack, appropriate touch targets)
9. Form works in both light and dark modes with proper contrast
10. Placeholder text provides helpful hints without obscuring labels

### Story 3.9: Add Professional Profile Links with Icons and Accessibility

As a **visitor**,  
I want **easy access to Rayan's professional profiles**,  
so that **I can learn more about him or connect on other platforms**.

**Acceptance Criteria:**

1. Professional links section in Contact and Footer displays: LinkedIn, GitHub, Upwork, Email
2. Each link uses recognizable icon from icon library (Lucide, Heroicons, or similar)
3. Icons are consistent in size and style
4. Each link opens in new tab (target="\_blank") with proper security (rel="noopener noreferrer")
5. Hover effects applied to icons (color change, scale, or rotation)
6. Links have proper aria-labels for accessibility (e.g., "Visit my LinkedIn profile")
7. Email link uses mailto: protocol
8. Icons work in both light and dark themes with appropriate colors
9. Mobile layout displays icons appropriately (grid or horizontal row)
10. Tooltip shows on hover with platform name (optional enhancement)

### Story 3.10: Implement Scroll-to-Top Button

As a **visitor**,  
I want **a button to quickly return to the top of the page**,  
so that **I can easily navigate back after scrolling through content**.

**Acceptance Criteria:**

1. Scroll-to-top button appears after scrolling past first section (Hero)
2. Button is positioned fixed in bottom-right corner (or appropriate position)
3. Button uses clear icon (up arrow or chevron)
4. Clicking button smoothly scrolls to top of page
5. Button has fade-in/out animation when appearing/disappearing
6. Button is accessible via keyboard (Tab to focus, Enter to activate)
7. Button has proper aria-label ("Scroll to top" or similar)
8. Button styling matches site aesthetic and works in both themes
9. Button has hover effect (scale, color change)
10. Button works on mobile with appropriate touch target size (min 44x44px)

### Story 3.11: Add Page Loading Progress Indicator

As a **visitor**,  
I want **visual feedback during page navigation or form submission**,  
so that **I know the application is responding to my actions**.

**Acceptance Criteria:**

1. Top-loading progress bar implemented (similar to YouTube/GitHub style)
2. Progress bar appears during navigation between sections or page state changes
3. Progress bar shows during contact form submission
4. Progress bar uses brand accent color
5. Progress bar is thin (2-3px) and positioned at very top of viewport
6. Animation is smooth and indicates progress realistically
7. Progress bar works in both light and dark modes
8. Progress bar doesn't interfere with content (position: fixed)
9. Progress bar is accessible (appropriate ARIA role if needed)
10. Library used (nprogress or similar) or custom implementation is performant

### Story 3.12: Test All Interactive Features Across Devices and Scenarios

As a **QA tester**,  
I want **all interactive features validated across devices, browsers, and user scenarios**,  
so that **every visitor has a reliable and engaging experience**.

**Acceptance Criteria:**

1. Contact form tested: successful submission, validation errors, server errors, rate limiting
2. Email delivery verified: email received, proper formatting, correct content
3. Smooth scroll tested on all navigation links across browsers
4. Animations tested: trigger correctly, run smoothly, respect reduced-motion
5. Micro-interactions tested: hover states, focus states, transitions
6. All features tested in both light and dark modes
7. All features tested in all three languages (FR/EN/KR)
8. Mobile testing: touch interactions, responsive layouts, form usability
9. Keyboard navigation tested for all interactive elements
10. Performance validated: no regressions, Lighthouse scores maintained

### Story 3.13: Deploy Epic 3 with Full Interactive Features

As a **project manager**,  
I want **Epic 3 deployed to production with lead generation capability**,  
so that **the portfolio can now convert visitors into actual client leads**.

**Acceptance Criteria:**

1. Email service API key configured in Vercel production environment
2. Contact form API endpoint functional on production
3. Test email submission sent and received successfully from production site
4. All animations and micro-interactions working on production
5. Smooth scroll and navigation working across all browsers on production
6. Rate limiting functional on production API endpoint
7. No console errors related to animations or form submission
8. Mobile interactions verified on actual devices
9. Lighthouse Performance score maintained (> 85, targeting 95+ in Epic 5)
10. Production site fully functional for lead generation - ready to share with potential clients

---

## Epic 4: Blog System & Content

**Epic Goal:** Create a comprehensive blog/articles section showcasing technical expertise through 3-5 initial high-quality articles, with at least one focused on AI/ML topics. Implement blog infrastructure supporting markdown content, article metadata, reading time estimation, and basic filtering. This epic positions Rayan as a thought leader, improves SEO through technical content, and demonstrates deep expertise beyond portfolio projects.

### Story 4.1: Design Blog Data Model and Prisma Schema

As a **developer**,  
I want **a database schema for blog articles with metadata**,  
so that **articles can be stored, queried, and managed efficiently**.

**Acceptance Criteria:**

1. Prisma schema updated with BlogPost model including fields: id, slug, title, excerpt, content, publishedAt, updatedAt, author, readingTime, tags, language, published
2. Slug field is unique for URL-friendly article identification
3. Content field stores markdown or rich text (TEXT type)
4. Tags field stores array of strings for categorization
5. Language field supports FR/EN/KR for multilingual articles
6. Published boolean for draft vs published state
7. ReadingTime calculated field (words/200 words per minute)
8. Author field links to user (for now, hardcoded "Rayan Sekkat")
9. Migration created and run successfully
10. Seed data script includes structure for 3-5 sample articles

### Story 4.2: Create Blog Article Components and Layout

As a **developer**,  
I want **reusable components for displaying blog articles**,  
so that **the blog section has consistent, professional presentation**.

**Acceptance Criteria:**

1. BlogCard component created for article preview: thumbnail, title, excerpt, date, reading time, tags
2. BlogList component displays grid of BlogCard components
3. BlogPost component displays full article: header with title/date/author, markdown content, tags
4. Markdown rendering library integrated (react-markdown or similar) with syntax highlighting
5. Article header includes: title, publish date, reading time, author info
6. Tags displayed as clickable badges
7. All components are responsive (card grid adapts to screen size)
8. Components work in both light and dark modes
9. Typography optimized for reading (line-height, font-size, max-width for content)
10. Code blocks in articles have proper syntax highlighting and copy button

### Story 4.3: Implement Blog Section on Homepage

As a **visitor**,  
I want **to see featured blog articles on the homepage**,  
so that **I can discover Rayan's technical writing and expertise**.

**Acceptance Criteria:**

1. Blog section added to homepage between Projects and Contact sections
2. Section heading displays "Latest Articles" or "Technical Blog"
3. Section shows 3 most recent published articles in card grid
4. Each article card includes: thumbnail image, title, excerpt (2-3 lines), publish date, reading time
5. Cards have hover effects consistent with site micro-interactions
6. "View All Articles" CTA button links to dedicated blog page (if implemented) or is placeholder
7. Section is fully responsive with card grid adapting (3 columns desktop, 2 tablet, 1 mobile)
8. Section works in all three languages with translated metadata
9. Section matches overall site aesthetic and theme (light/dark mode)
10. If no articles published, section shows "Coming Soon" message

### Story 4.4: Create Article Page Route and Dynamic Routing

As a **visitor**,  
I want **to read full articles by clicking on article cards**,  
so that **I can learn from Rayan's technical insights**.

**Acceptance Criteria:**

1. Dynamic route created: `/app/blog/[slug]/page.tsx` for individual articles
2. Route fetches article data from database using slug parameter
3. Article content rendered with BlogPost component
4. 404 page shown if article slug doesn't exist
5. Article metadata used for page title and meta tags (SEO)
6. Published articles only are accessible (drafts return 404)
7. Back to blog list navigation provided (breadcrumb or button)
8. Related articles section shown at bottom (based on tags, optional)
9. Page is server-side rendered for SEO benefits
10. Reading progress indicator shown during scroll (optional enhancement)

### Story 4.5: Write and Publish AI/ML Technical Article

As a **content creator**,  
I want **a comprehensive article about AI integration in web development**,  
so that **visitors see concrete evidence of AI expertise**.

**Acceptance Criteria:**

1. Article written with minimum 1000 words on AI/ML topic (e.g., "Integrating LLMs into Modern Web Applications", "Building AI-Powered Features with Python and React", or "Practical Machine Learning for Full-Stack Developers")
2. Article includes: introduction, technical explanation, code examples, practical use cases, conclusion
3. Code examples are production-quality with proper syntax highlighting
4. Article demonstrates real expertise (not superficial overview)
5. Article includes at least 1 diagram or visual (architecture diagram, flow chart)
6. Content is original and showcases unique insights or approaches
7. Article is SEO-optimized with target keywords naturally integrated
8. Article saved to database with proper metadata (title, excerpt, tags: ["AI", "Machine Learning", "Web Development"])
9. Article published in French with translations to EN/KR (via DeepL, reviewed)
10. Article accessible via blog section and direct URL

### Story 4.6: Write and Publish Performance Optimization Article

As a **content creator**,  
I want **a detailed article about web performance optimization**,  
so that **visitors understand the depth of optimization knowledge behind this portfolio**.

**Acceptance Criteria:**

1. Article written with minimum 800 words on performance topic (e.g., "Achieving Lighthouse 100: A Complete Guide", "Next.js Performance Optimization Strategies", or "Core Web Vitals Optimization Techniques")
2. Article references this portfolio as case study or example
3. Article includes: metrics to track, optimization techniques, before/after comparisons, tools and testing
4. Practical tips that developers can immediately apply
5. Article demonstrates expertise that built this high-performing portfolio
6. Article includes screenshots of Lighthouse scores or performance metrics
7. Content is actionable and technical (not just theory)
8. Article saved with metadata (tags: ["Performance", "Next.js", "Web Development", "Lighthouse"])
9. Article published in FR with EN/KR translations reviewed
10. Article linked from portfolio performance claims (meta-reference)

### Story 4.7: Write and Publish Modern Architecture Article

As a **content creator**,  
I want **an article about modern web architecture and tech stack decisions**,  
so that **visitors understand architectural thinking and technology choices**.

**Acceptance Criteria:**

1. Article written with minimum 800 words on architecture topic (e.g., "Choosing the Right Tech Stack in 2026", "Monorepo vs Polyrepo: A Practical Guide", or "Building Scalable Applications with Next.js and PostgreSQL")
2. Article discusses trade-offs and decision-making process
3. Article may reference tech choices made for this portfolio
4. Content demonstrates systems thinking and architectural maturity
5. Article includes: problem statement, options analysis, recommendations, implementation insights
6. Article is practical with real-world examples or scenarios
7. Article appeals to both technical and business audiences
8. Article saved with metadata (tags: ["Architecture", "TypeScript", "System Design"])
9. Article published in FR with EN/KR translations
10. Article establishes authority in technical decision-making

### Story 4.8: Add Blog Tag Filtering and Search (Optional MVP Feature)

As a **visitor**,  
I want **to filter blog articles by tags or search by keyword**,  
so that **I can find articles relevant to my interests**.

**Acceptance Criteria:**

1. Tag filter UI added to blog section showing all available tags
2. Clicking a tag filters articles to show only those with selected tag
3. Multiple tags can be selected (OR logic: show articles matching any selected tag)
4. Active filters are visually indicated
5. Clear filters button resets to show all articles
6. URL updates with selected tags (supports deep linking to filtered view)
7. Filter state persists during navigation within blog section
8. Filter UI is responsive and accessible
9. Search input field added (searches title, excerpt, and tags)
10. Search is client-side for MVP (can be server-side post-MVP for large article count)

### Story 4.9: Implement Blog Article Metadata and Open Graph Tags

As a **SEO specialist**,  
I want **proper meta tags and Open Graph data for each article**,  
so that **articles are shareable and rank well in search engines**.

**Acceptance Criteria:**

1. Each article page includes unique meta title (article title + site name)
2. Each article has meta description (article excerpt, max 160 characters)
3. Open Graph tags include: og:title, og:description, og:image, og:type (article), og:url
4. Twitter Card tags included for Twitter sharing
5. Article structured data (JSON-LD) added for search engines (Article schema)
6. Canonical URL set correctly for each article
7. Article publish date and author in structured data
8. Article thumbnail image optimized for social sharing (1200x630px recommended)
9. Meta tags update dynamically based on article content
10. Test sharing on LinkedIn, Twitter, Facebook - previews display correctly

### Story 4.10: Add Reading Time Calculation and Progress Indicator

As a **visitor**,  
I want **to know how long an article will take to read**,  
so that **I can decide if I have time to read it now**.

**Acceptance Criteria:**

1. Reading time calculated based on article word count (average 200 words/minute)
2. Reading time displayed on article cards in blog list (e.g., "5 min read")
3. Reading time displayed on full article page header
4. Calculation excludes code blocks from word count (optional refinement)
5. Reading progress indicator added to article pages (horizontal bar at top)
6. Progress indicator updates as user scrolls through article
7. Progress indicator uses brand accent color
8. Progress indicator works in both light and dark modes
9. Progress calculation is accurate (0% at start, 100% at end)
10. Progress indicator is subtle and doesn't distract from reading

### Story 4.11: Optimize Blog Content for SEO and Accessibility

As an **SEO/Accessibility specialist**,  
I want **blog content optimized for search engines and screen readers**,  
so that **articles reach wider audiences and are universally accessible**.

**Acceptance Criteria:**

1. All articles use proper semantic HTML: h1 for title, h2-h6 for sections
2. Images in articles have descriptive alt text
3. Links have descriptive text (not "click here")
4. Code blocks have language specified for screen readers
5. Article pages include language meta tag matching content language
6. Heading hierarchy is logical (no skipped levels)
7. Contrast ratios meet WCAG AA for all text in articles
8. Tables (if used) have proper caption and th elements
9. Articles are keyboard navigable (skip to content link provided)
10. Lighthouse Accessibility score for article pages is 95+

### Story 4.12: Test Blog System Across Languages and Devices

As a **QA tester**,  
I want **blog functionality validated across all languages, themes, and devices**,  
so that **all visitors have excellent reading experience regardless of preferences**.

**Acceptance Criteria:**

1. All 3-5 articles accessible in FR, EN, and KR languages
2. Article content displays correctly in all three languages
3. Translations are natural and professional (manually reviewed)
4. Blog section works in both light and dark modes
5. Article pages work in both themes with readable typography
6. Blog cards responsive on mobile, tablet, desktop
7. Full article pages readable on all devices (optimal line length maintained)
8. Code blocks in articles are scrollable on mobile without breaking layout
9. Images in articles are responsive and optimized
10. Navigation between blog list and articles works smoothly on all devices

### Story 4.13: Deploy Epic 4 with Complete Blog System

As a **project manager**,  
I want **Epic 4 deployed with all articles published and functional**,  
so that **the portfolio demonstrates expertise through technical content and improves SEO**.

**Acceptance Criteria:**

1. Database migrations run successfully on production
2. All 3-5 articles seeded into production database
3. Blog section visible on production homepage
4. All article pages accessible via their URLs
5. Article metadata and Open Graph tags working correctly (tested with sharing)
6. Reading time and progress indicators functional
7. Filtering/search working if implemented (Story 4.8)
8. All content reviewed for typos and technical accuracy
9. Articles indexed by search engines (Google Search Console submitted)
10. Blog system ready for ongoing content additions post-MVP

---

## Epic 5: Performance Optimization & Launch Readiness

**Epic Goal:** Transform the portfolio from functional to production-grade by achieving Lighthouse 95+ scores across all metrics, implementing comprehensive SEO strategy, adding analytics tracking, ensuring RGPD compliance, and performing final quality assurance. This epic delivers the polish, optimization, and legal compliance required for professional launch. After this epic, the portfolio is market-ready for sharing with potential clients on Upwork, LinkedIn, and other platforms.

### Story 5.1: Optimize Images and Implement Advanced Image Loading

As a **performance engineer**,  
I want **all images optimized with modern formats and loading strategies**,  
so that **page load times are minimized and Lighthouse performance score is maximized**.

**Acceptance Criteria:**

1. All images converted to modern formats (WebP with JPEG/PNG fallback)
2. Next.js Image component used for all images with proper sizing attributes
3. Responsive image srcsets generated for different viewport sizes
4. Lazy loading implemented for below-fold images
5. Priority loading set for above-fold images (Hero section)
6. Blur placeholder or LQIP (Low Quality Image Placeholder) used during loading
7. Image dimensions explicitly set to prevent layout shift (CLS)
8. Image compression optimized (quality 85-90 balance between quality and size)
9. Unused images removed from public directory
10. Largest Contentful Paint (LCP) < 2.5s with optimized hero image

### Story 5.2: Implement Code Splitting and Bundle Optimization

As a **performance engineer**,  
I want **JavaScript bundle size minimized and code split appropriately**,  
so that **initial page load is fast and Time to Interactive is optimized**.

**Acceptance Criteria:**

1. Dynamic imports used for heavy components (blog markdown renderer, animations library)
2. Route-based code splitting verified for blog pages
3. Unused dependencies removed from package.json
4. Tree-shaking verified for imported libraries (import only what's needed)
5. Bundle analyzer run to identify large dependencies
6. Initial JavaScript bundle < 100KB (gzipped)
7. Third-party scripts (analytics) loaded asynchronously or deferred
8. Critical CSS inlined, remaining CSS loaded asynchronously
9. Font loading optimized with font-display: swap
10. Time to Interactive (TTI) < 3.5s on 4G connection

### Story 5.3: Optimize Core Web Vitals (LCP, FID, CLS)

As a **performance engineer**,  
I want **all Core Web Vitals in the green zone**,  
so that **the site meets Google's performance standards and provides excellent UX**.

**Acceptance Criteria:**

1. Largest Contentful Paint (LCP) < 2.5s measured on production
2. First Input Delay (FID) < 100ms measured with real user interactions
3. Cumulative Layout Shift (CLS) < 0.1 with no unexpected layout shifts
4. Layout shift prevented by: explicit image dimensions, reserved space for dynamic content, stable font loading
5. LCP optimization: optimize hero image, remove render-blocking resources, server-side render critical content
6. FID optimization: minimize JavaScript execution time, use web workers for heavy computation if needed
7. CLS optimization: avoid injecting content above existing content, use transform for animations
8. Core Web Vitals tested in Chrome DevTools and PageSpeed Insights
9. Vercel Analytics configured to monitor real-world Core Web Vitals
10. All three metrics consistently green across multiple page loads and devices

### Story 5.4: Achieve Lighthouse Performance Score 95+

As a **performance engineer**,  
I want **Lighthouse Performance score of 95 or higher**,  
so that **the portfolio demonstrates technical excellence in optimization**.

**Acceptance Criteria:**

1. Lighthouse Performance score ≥ 95 on desktop
2. Lighthouse Performance score ≥ 90 on mobile (mobile is typically lower, 90+ acceptable)
3. All Lighthouse performance opportunities addressed or documented if not feasible
4. First Contentful Paint (FCP) < 1.8s
5. Speed Index < 3.4s
6. Time to Interactive < 3.5s
7. Total Blocking Time < 200ms
8. Server response time (TTFB) < 600ms with Vercel edge functions
9. Lighthouse run in incognito mode to avoid extension interference
10. Score consistent across multiple runs (not one-off lucky score)

### Story 5.5: Achieve Lighthouse Accessibility Score 100

As an **accessibility specialist**,  
I want **perfect Lighthouse Accessibility score**,  
so that **the portfolio is usable by everyone including people with disabilities**.

**Acceptance Criteria:**

1. Lighthouse Accessibility score = 100
2. All images have descriptive alt text (no missing alt attributes)
3. Color contrast ratios meet WCAG AA (4.5:1 for normal text, 3:1 for large text) in both themes
4. Form elements have associated labels
5. All interactive elements have proper ARIA labels where needed
6. Heading hierarchy is logical (no skipped levels)
7. Focus indicators visible on all interactive elements
8. Skip to main content link provided for keyboard users
9. All content accessible via keyboard navigation (no mouse-only interactions)
10. Screen reader tested with NVDA or VoiceOver (manual test)

### Story 5.6: Implement Comprehensive SEO Meta Tags and Structured Data

As an **SEO specialist**,  
I want **complete meta tags and structured data on all pages**,  
so that **search engines properly index and display the portfolio**.

**Acceptance Criteria:**

1. Every page has unique meta title (max 60 characters, includes target keywords)
2. Every page has meta description (max 160 characters, compelling and keyword-rich)
3. Open Graph tags on all pages: og:title, og:description, og:image, og:url, og:type
4. Twitter Card tags on all pages: twitter:card, twitter:title, twitter:description, twitter:image
5. Structured data (JSON-LD) for Person schema with: name, job title, skills, social profiles
6. Structured data for portfolio projects (CreativeWork schema)
7. Structured data for blog articles (Article schema with author, publish date)
8. Canonical URLs set correctly on all pages
9. Robots.txt configured to allow search engine crawling
10. XML sitemap generated and submitted to Google Search Console

### Story 5.7: Achieve Lighthouse SEO Score 95+ and Best Practices 100

As an **SEO specialist**,  
I want **excellent Lighthouse SEO and Best Practices scores**,  
so that **the site follows web standards and is discoverable**.

**Acceptance Criteria:**

1. Lighthouse SEO score ≥ 95
2. Lighthouse Best Practices score = 100
3. Meta viewport tag configured correctly for mobile
4. Document has valid HTML lang attribute (updates with language selection)
5. Links have descriptive text (no "click here")
6. HTTPS enforced (automatic via Vercel)
7. Console has no browser errors or warnings
8. Images have appropriate aspect ratio (no distortion)
9. All external links use rel="noopener" for security
10. CSP (Content Security Policy) headers configured appropriately

### Story 5.8: Integrate Google Analytics 4 and Vercel Analytics

As a **site owner**,  
I want **visitor tracking and conversion metrics**,  
so that **I can measure portfolio effectiveness and optimize for lead generation**.

**Acceptance Criteria:**

1. Google Analytics 4 property created and configured
2. GA4 tracking code added to all pages with appropriate environment gating (not in dev)
3. Custom events tracked: contact form submission, article views, CTA clicks, language changes, theme toggles
4. Conversion goals configured: contact form submission (primary conversion)
5. GA4 tested and verified data is being received
6. Vercel Analytics enabled for real-time Core Web Vitals monitoring
7. Analytics respects RGPD requirements (only loads after cookie consent)
8. Privacy-friendly analytics configuration (anonymize IP where required)
9. Analytics dashboard monitored for first week post-launch
10. Documentation created for interpreting key metrics (traffic sources, conversions, popular content)

### Story 5.9: Implement RGPD Compliance (Cookie Consent and Privacy Policy)

As a **compliance officer**,  
I want **RGPD-compliant cookie consent and privacy documentation**,  
so that **the site meets EU data protection regulations**.

**Acceptance Criteria:**

1. Cookie consent banner implemented that appears on first visit
2. Banner explains cookies used (Analytics, preferences) with clear language
3. Users can accept all, reject optional, or customize cookie preferences
4. Essential cookies (theme, language) explained as necessary
5. Analytics cookies only loaded after explicit user consent
6. Cookie preferences stored and respected across sessions
7. Privacy Policy page created at `/privacy` with comprehensive information
8. Privacy Policy covers: data collected, how it's used, user rights, contact information
9. Legal disclaimer/Terms of Service page created at `/terms`
10. Links to Privacy Policy and Terms in footer and cookie banner

### Story 5.10: Implement Security Headers and Best Practices

As a **security engineer**,  
I want **appropriate security headers and protections configured**,  
so that **the site and users are protected from common vulnerabilities**.

**Acceptance Criteria:**

1. Content Security Policy (CSP) header configured to prevent XSS attacks
2. X-Frame-Options header set to prevent clickjacking
3. X-Content-Type-Options header set to prevent MIME sniffing
4. Strict-Transport-Security (HSTS) header configured for HTTPS enforcement
5. Referrer-Policy header set appropriately
6. Permissions-Policy header configured to restrict browser features
7. Rate limiting on API endpoints (contact form) prevents abuse
8. Environment variables never exposed to client-side code
9. Dependencies audited for vulnerabilities (`pnpm audit`)
10. Security headers tested with securityheaders.com or Mozilla Observatory

### Story 5.11: Cross-Browser and Cross-Device Final Testing

As a **QA tester**,  
I want **comprehensive testing across all target browsers and devices**,  
so that **every user has a flawless experience regardless of their platform**.

**Acceptance Criteria:**

1. Full site tested on Chrome (latest 2 versions): Windows, macOS, Linux
2. Full site tested on Firefox (latest 2 versions): Windows, macOS, Linux
3. Full site tested on Safari (latest 2 versions): macOS, iOS
4. Full site tested on Edge (latest 2 versions): Windows
5. Mobile tested on actual iPhone (iOS Safari) and Android device (Chrome)
6. Tablet tested on iPad (Safari) - portrait and landscape
7. All features verified: navigation, animations, forms, theme switching, language switching
8. Visual regression testing for layout consistency
9. Performance tested on 4G connection (Chrome DevTools throttling)
10. Test matrix documented with pass/fail results for each browser/device/feature combination

### Story 5.12: Polish Visual Design and Micro-Details

As a **designer**,  
I want **final visual polish and attention to micro-details**,  
so that **the portfolio feels premium and meticulously crafted**.

**Acceptance Criteria:**

1. Spacing and alignment reviewed and refined (consistent use of spacing scale)
2. Typography hierarchy reviewed and optimized for readability
3. Color palette refined for both light and dark modes (harmonious, professional)
4. Hover states and transitions are smooth and consistent
5. Loading states have appropriate skeletons or spinners
6. Empty states have friendly messaging (e.g., no articles yet)
7. Error states have clear, helpful messages (404 page, form errors)
8. Favicon created and implemented (multiple sizes for different devices)
9. Browser tab title updates correctly based on current page/section
10. Final design review with checklist: no visual glitches, no placeholder content, consistent branding

### Story 5.13: Create Custom Domain Setup and Configure Production Environment

As a **site owner**,  
I want **a custom domain configured professionally**,  
so that **the portfolio has a memorable, professional URL**.

**Acceptance Criteria:**

1. Domain purchased and ownership verified (rayansekkat.dev, rsekkat.dev, or chosen alternative)
2. Domain DNS configured to point to Vercel
3. Domain added to Vercel project with HTTPS certificate
4. WWW redirect configured (www.domain.com → domain.com or vice versa)
5. All environment variables confirmed in production
6. Production build tested and verified
7. Custom domain accessible and loads portfolio correctly
8. Old Vercel URL redirects to custom domain (optional)
9. Email address configured on custom domain for professional contact
10. Custom domain shared on LinkedIn profile, Upwork, social media

### Story 5.14: Pre-Launch Checklist and Final Quality Assurance

As a **project manager**,  
I want **comprehensive pre-launch checklist completed**,  
so that **nothing is overlooked before the official launch**.

**Acceptance Criteria:**

1. All Lighthouse scores verified: Performance 95+, Accessibility 100, SEO 95+, Best Practices 100
2. All links tested (internal navigation, external links, social profiles)
3. All forms tested (contact form submission, validation, email delivery)
4. All content proofread for typos in all three languages
5. All images display correctly with proper alt text
6. Analytics tracking verified (GA4 receiving data)
7. Cookie consent banner functioning correctly
8. Privacy Policy and Terms pages complete and linked
9. SEO meta tags verified on all pages (use Twitter Card Validator, LinkedIn Inspector)
10. Final backup of database and codebase before launch

### Story 5.15: Official Launch and Post-Launch Monitoring

As a **site owner**,  
I want **the portfolio officially launched and monitored**,  
so that **I can confidently share it with potential clients and track performance**.

**Acceptance Criteria:**

1. Portfolio officially launched on custom domain
2. LinkedIn profile updated with portfolio URL
3. Upwork profile updated with portfolio URL
4. GitHub profile README updated with portfolio link
5. Social media announcement posted (LinkedIn, Twitter) showcasing launch
6. XML sitemap submitted to Google Search Console
7. Portfolio submitted to web directories or showcases (Awwwards, CSS Design Awards, etc.)
8. Analytics dashboard monitored daily for first week
9. Any immediate issues or feedback addressed within 24 hours
10. Post-launch retrospective documented: what worked, what to improve, next features to add

---

## Checklist Results Report

_This section will be populated after executing the PM checklist._

---

## Next Steps

### UX Expert Prompt

_To be populated with prompt for UX Expert to create design architecture using this PRD as input._

### Architect Prompt

_To be populated with prompt for Architect to create technical architecture using this PRD as input._
