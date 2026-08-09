import type { Metadata } from "next";
import { Skills } from "@/components/sections/skills";
import { Achievements } from "@/components/sections/achievements";
import { CodingProfiles } from "@/components/sections/coding-profiles";
import { Certifications } from "@/components/sections/certifications";

export const metadata: Metadata = {
  title: "Skills & Credentials",
  description:
    "Explore technical skills inventory, competitive coding profile statistics (LeetCode, Codeforces), hackathon achievements, and verified certifications (Oracle, Postman Student Expert).",
  openGraph: {
    title: "Skills & Credentials | Anish Kumar",
    description:
      "Technical skills, coding profile metrics (LeetCode, Codeforces), achievements, and verified certifications.",
  },
};

export default function SkillsPage() {
  return (
    <div>
      <Skills />
      <Achievements />
      <CodingProfiles />
      <Certifications />
    </div>
  );
}
