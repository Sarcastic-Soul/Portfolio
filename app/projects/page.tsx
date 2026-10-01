import type { Metadata } from "next";
import { ProjectsContent } from "@/components/projects-content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Anish Kumar: Radish (a Redis-compatible server in Java), Codemon (a terminal coding agent), a Kubernetes-scaled URL shortener, CropDoc (an offline crop disease app), an agentic support desk, and more.",
  openGraph: {
    title: "Projects | Anish Kumar",
    description:
      "A database server, a terminal coding agent, scaled backends, AI tools and an offline Android app, built by Anish Kumar.",
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
