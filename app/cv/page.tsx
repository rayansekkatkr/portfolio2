import { Metadata } from "next";
import CVPage from "@/components/cv/CVPage";

export const metadata: Metadata = {
  title: "CV — Rayan Sekkat",
  description:
    "AI-Powered Full-Stack Developer — SaaS, Payments, DevOps. 4+ years building production platforms.",
  openGraph: {
    title: "CV — Rayan Sekkat",
    description: "AI-Powered Full-Stack Developer — SaaS, Payments, DevOps.",
    url: "https://rayansekkat.com/cv",
  },
  alternates: {
    canonical: "https://rayansekkat.com/cv",
  },
};

export default function CV() {
  return <CVPage />;
}
