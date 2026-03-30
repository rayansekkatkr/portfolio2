"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FileDown, MapPin, Mail, Phone, ExternalLink, Github } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const STACK = {
  Frontend: ["Next.js", "React", "Astro", "TanStack", "Tailwind", "TypeScript"],
  Backend: ["FastAPI", "NestJS", "Node.js", "REST", "WebSockets", "Redis"],
  "AI / ML": ["LLM (Mistral)", "OCR", "Async workers", "RAG pipelines"],
  Infra: ["Docker", "K8s / K3s", "GitHub Actions", "GitLab CI", "Terraform", "Ansible", "VPS"],
  Data: ["PostgreSQL", "Redis", "MinIO / S3", "Prisma ORM"],
  Payments: ["Stripe Issuing", "Stripe PaymentIntents", "Revolut Business", "Kakao Pay"],
};

const EXPERIENCE = [
  {
    title: "DevOps Engineer",
    company: "STMicroelectronics",
    period: "Jan 2024 — Dec 2024",
    location: "Remote / Korea",
    items: [
      "Automated CI/CD pipelines reducing deployment time by 60%",
      "Managed Kubernetes clusters (K3s) for microservices orchestration",
      "Infrastructure-as-code with Terraform + Ansible across multi-cloud environments",
      "Monitoring & alerting with Prometheus, Grafana, and custom alerting rules",
    ],
  },
  {
    title: "Full-Stack Developer & DevOps",
    company: "UNYC",
    period: "Sep 2020 — Sep 2023",
    location: "France",
    items: [
      "Built and maintained B2B SaaS platform (Next.js + FastAPI + PostgreSQL)",
      "Integrated Stripe billing — subscriptions, invoices, webhook handling",
      "Designed REST + WebSocket API serving 10k+ daily active sessions",
      "Led frontend rewrite from legacy PHP templates to React/TypeScript",
    ],
  },
];

const PROJECTS = [
  {
    name: "Pont Factur-X",
    tagline: "AI B2B SaaS — CEO & Sole Developer",
    accent: "#00D4FF",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "OCR", "Stripe", "Docker"],
    highlights: ["99.9% OCR precision", "Sub-10s processing", "Full GDPR compliance"],
    description:
      "SaaS converting invoices to Factur-X (EN 16931) ahead of France's 2026 e-invoicing mandate. Servers in France, AES-256 encryption, Chorus Pro integration.",
  },
  {
    name: "Pick4Me",
    tagline: "Delivery Marketplace — Lead Backend Dev & Website",
    accent: "#818cf8",
    stack: ["NestJS", "Socket.IO", "Stripe Issuing", "Revolut Business", "Mapbox", "Firebase FCM"],
    highlights: ["<100ms WebSocket latency", "2 payment integrations", "99.9% VPS uptime"],
    description:
      "On-demand delivery platform with real-time chat + GPS tracking, multi-provider payments, push notifications, and Hetzner VPS deployment with Caddy reverse proxy.",
  },
  {
    name: "AI Portfolio",
    tagline: "Personal — Sole Developer",
    accent: "#C9A55C",
    stack: ["Next.js 15", "React 19", "Three.js", "Framer Motion", "Tailwind v4"],
    highlights: ["Lighthouse 100", "i18n (FR/EN/KR)", "3D WebGL hero"],
    description:
      "This portfolio — custom design system, 3D canvas hero, multilingual, dark/light modes, and Framer Motion animations throughout.",
  },
];

export default function CVPage() {
  const prefersReducedMotion = useReducedMotion();
  const dur = (v: number) => (prefersReducedMotion ? 0 : v);
  const del = (v: number) => (prefersReducedMotion ? 0 : v);

  return (
    <>
      <Header />
      <main
        className="min-h-screen px-6 pt-24 pb-32 lg:px-16"
        style={{ background: "var(--page-bg)" }}
      >
        <div className="mx-auto max-w-4xl">
          {/* ── Hero header ── */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur(0.6), delay: del(0.05) }}
          >
            <p
              className="mb-4 font-mono text-[10px] tracking-[0.25em] uppercase"
              style={{ color: "rgba(0,212,255,0.55)" }}
            >
              {"// curriculum vitae"}
            </p>
            <h1
              className="font-cormorant mb-3 text-5xl leading-tight font-bold sm:text-6xl lg:text-7xl"
              style={{ color: "var(--t-primary)" }}
            >
              Rayan <span style={{ color: "#00D4FF" }}>Sekkat</span>
            </h1>
            <p
              className="mb-6 font-mono text-sm tracking-[0.12em] uppercase"
              style={{ color: "var(--t-secondary)" }}
            >
              AI-Powered Full-Stack Developer · SaaS · Payments · DevOps
            </p>

            <div className="flex flex-wrap gap-4 text-sm" style={{ color: "var(--t-secondary)" }}>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" style={{ color: "rgba(0,212,255,0.6)" }} />
                Seoul, South Korea — Open to Remote
              </span>
              <a
                href="mailto:rayan.sekkat@gmail.com"
                className="flex items-center gap-1.5 transition-colors hover:text-[#00D4FF]"
              >
                <Mail className="h-3.5 w-3.5" style={{ color: "rgba(0,212,255,0.6)" }} />
                rayan.sekkat@gmail.com
              </a>
              <span className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5" style={{ color: "rgba(0,212,255,0.6)" }} />
                +82 010 2438 4499
              </span>
              <a
                href="https://github.com/rayansekkatkr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-[#00D4FF]"
              >
                <Github className="h-3.5 w-3.5" style={{ color: "rgba(0,212,255,0.6)" }} />
                github.com/rayansekkatkr
              </a>
              <a
                href="https://rayansekkat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-[#00D4FF]"
              >
                <ExternalLink className="h-3.5 w-3.5" style={{ color: "rgba(0,212,255,0.6)" }} />
                rayansekkat.com
              </a>
            </div>
          </motion.div>

          {/* ── Divider ── */}
          <div className="mb-14 h-px w-full" style={{ background: "var(--section-line)" }} />

          {/* ── Summary ── */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur(0.5), delay: del(0.15) }}
          >
            <SectionLabel>{"// summary"}</SectionLabel>
            <p className="text-base leading-relaxed" style={{ color: "var(--t-secondary)" }}>
              Full-stack SaaS engineer with 4+ years shipping production software — from
              architecture to the first paying user. TypeScript/Next.js on the frontend,
              Python/FastAPI or NestJS on the backend, deployed on K8s or Vercel. Comfortable with
              LLMs, real-time systems, and payment integrations. I work end-to-end and own the
              outcome.
            </p>
          </motion.section>

          {/* ── Core Stack ── */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur(0.5), delay: del(0.2) }}
          >
            <SectionLabel>{"// core stack"}</SectionLabel>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(STACK).map(([category, techs]) => (
                <div
                  key={category}
                  className="rounded-xl border p-4"
                  style={{
                    borderColor: "var(--card-border)",
                    background: "var(--card-bg)",
                  }}
                >
                  <p
                    className="mb-3 font-mono text-[9px] tracking-[0.2em] uppercase"
                    style={{ color: "rgba(0,212,255,0.5)" }}
                  >
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {techs.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full px-2.5 py-1 font-mono text-[10px]"
                        style={{
                          background: "rgba(0,212,255,0.06)",
                          color: "var(--t-secondary)",
                          border: "1px solid rgba(0,212,255,0.12)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* ── Projects ── */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur(0.5), delay: del(0.25) }}
          >
            <SectionLabel>{"// projects"}</SectionLabel>
            <div className="space-y-5">
              {PROJECTS.map((project) => (
                <div
                  key={project.name}
                  className="rounded-xl border p-6"
                  style={{
                    borderColor: "var(--card-border)",
                    background: "var(--card-bg)",
                    borderLeftColor: project.accent,
                    borderLeftWidth: "2px",
                  }}
                >
                  <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3
                        className="font-cormorant text-xl font-bold"
                        style={{ color: "var(--t-primary)" }}
                      >
                        {project.name}
                      </h3>
                      <p
                        className="mt-0.5 font-mono text-[9px] tracking-[0.15em] uppercase"
                        style={{ color: "var(--t-muted)" }}
                      >
                        {project.tagline}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.highlights.map((h) => (
                        <span
                          key={h}
                          className="rounded-full px-2.5 py-1 font-mono text-[9px]"
                          style={{
                            background: `${project.accent}10`,
                            color: project.accent,
                            border: `1px solid ${project.accent}30`,
                          }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p
                    className="mb-4 text-sm leading-relaxed"
                    style={{ color: "var(--t-secondary)" }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full px-2 py-0.5 font-mono text-[9px]"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          color: "var(--t-muted)",
                          border: "1px solid var(--card-border)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* ── Experience ── */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur(0.5), delay: del(0.3) }}
          >
            <SectionLabel>{"// experience"}</SectionLabel>
            <div className="relative space-y-0">
              {/* Vertical line */}
              <div
                className="absolute top-3 bottom-3 left-[7px] w-px"
                style={{ background: "rgba(0,212,255,0.15)" }}
              />
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="relative pb-10 pl-8 last:pb-0">
                  {/* Dot */}
                  <div
                    className="absolute top-1 left-0 h-3.5 w-3.5 rounded-full border-2"
                    style={{
                      borderColor: "#00D4FF",
                      background: "var(--page-bg)",
                    }}
                  />
                  <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3
                      className="font-cormorant text-xl font-bold"
                      style={{ color: "var(--t-primary)" }}
                    >
                      {exp.title}
                    </h3>
                    <span
                      className="font-mono text-[10px] tracking-wide"
                      style={{ color: "rgba(0,212,255,0.7)" }}
                    >
                      {exp.company}
                    </span>
                  </div>
                  <div
                    className="mb-3 flex gap-4 font-mono text-[9px] tracking-[0.15em] uppercase"
                    style={{ color: "var(--t-muted)" }}
                  >
                    <span>{exp.period}</span>
                    <span>{exp.location}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm leading-relaxed"
                        style={{ color: "var(--t-secondary)" }}
                      >
                        <span
                          className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full"
                          style={{ background: "rgba(0,212,255,0.5)" }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          {/* ── Education & Languages ── */}
          <motion.section
            className="mb-16 grid gap-8 sm:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur(0.5), delay: del(0.35) }}
          >
            <div>
              <SectionLabel>{"// education"}</SectionLabel>
              <div
                className="rounded-xl border p-5"
                style={{ borderColor: "var(--card-border)", background: "var(--card-bg)" }}
              >
                <h3
                  className="font-cormorant mb-1 text-lg font-bold"
                  style={{ color: "var(--t-primary)" }}
                >
                  Master&apos;s in Software Engineering
                </h3>
                <p
                  className="mb-2 font-mono text-[10px] tracking-wide"
                  style={{ color: "rgba(0,212,255,0.7)" }}
                >
                  EPSI · 2018 — 2023
                </p>
                <p className="text-sm" style={{ color: "var(--t-secondary)" }}>
                  5-year program covering software architecture, DevOps, project management, and
                  full-stack development.
                </p>
              </div>
            </div>

            <div>
              <SectionLabel>{"// languages & learning"}</SectionLabel>
              <div
                className="rounded-xl border p-5"
                style={{ borderColor: "var(--card-border)", background: "var(--card-bg)" }}
              >
                <div className="mb-4 space-y-2">
                  {[
                    { lang: "French", level: "Native" },
                    { lang: "English", level: "C1 — Professional" },
                    { lang: "Korean", level: "Basic" },
                  ].map(({ lang, level }) => (
                    <div key={lang} className="flex items-center justify-between">
                      <span className="text-sm" style={{ color: "var(--t-secondary)" }}>
                        {lang}
                      </span>
                      <span
                        className="font-mono text-[9px] tracking-[0.1em]"
                        style={{ color: "var(--t-muted)" }}
                      >
                        {level}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-3" style={{ borderColor: "var(--card-border)" }}>
                  <p
                    className="mb-2 font-mono text-[9px] tracking-[0.15em] uppercase"
                    style={{ color: "rgba(0,212,255,0.45)" }}
                  >
                    Currently learning
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Rust", "Bun", "Advanced LLM tooling"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full px-2.5 py-1 font-mono text-[9px]"
                        style={{
                          background: "rgba(201,165,92,0.08)",
                          color: "#C9A55C",
                          border: "1px solid rgba(201,165,92,0.2)",
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── Download button ── */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur(0.5), delay: del(0.45) }}
          >
            <a
              href="/Rayan_Sekkat_CV_EN_2026.pdf"
              download
              className="group inline-flex items-center gap-3 rounded-full px-8 py-4 font-mono text-[11px] tracking-[0.2em] uppercase transition-all duration-200"
              style={{
                background: "rgba(0,212,255,0.08)",
                border: "1px solid rgba(0,212,255,0.25)",
                color: "#00D4FF",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0,212,255,0.15)";
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0,212,255,0.08)";
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.25)";
              }}
            >
              <FileDown className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
              Download CV (PDF)
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div className="h-px w-6" style={{ background: "rgba(0,212,255,0.4)" }} />
      <p
        className="font-mono text-[10px] tracking-[0.25em] uppercase"
        style={{ color: "rgba(0,212,255,0.55)" }}
      >
        {children}
      </p>
    </div>
  );
}
