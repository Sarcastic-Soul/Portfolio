import type { Metadata } from "next";
import { ProjectsContent } from "@/components/projects-content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore full-stack applications, in-memory databases, and distributed backend projects built by Anish Kumar, including Radish, SyllabAI, URL Shortener, and BrutShop.",
  openGraph: {
    title: "Projects | Anish Kumar",
    description:
      "Explore full-stack applications, in-memory databases, and distributed backend projects built by Anish Kumar.",
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
