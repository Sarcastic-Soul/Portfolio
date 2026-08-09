import type { Metadata } from "next";
import { ExperienceContent } from "@/components/experience-content";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Explore professional engineering experience, research internships at Samsung PRISM R&D, Aparsoft, and open-source contributions to activity-frames.",
  openGraph: {
    title: "Experience | Anish Kumar",
    description:
      "Professional software engineering experience, R&D internships, and open-source contributions.",
  },
};

export default function ExperiencePage() {
  return <ExperienceContent />;
}
