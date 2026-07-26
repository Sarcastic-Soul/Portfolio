import { Skills } from "@/components/sections/skills";
import { Achievements } from "@/components/sections/achievements";
import { CodingProfiles } from "@/components/sections/coding-profiles";
import { Certifications } from "@/components/sections/certifications";

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
