import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Achievements } from "@/components/sections/achievements";
import { Contact } from "@/components/sections/contact";
import { EMAIL, SITE_URL, experiences, hackathonWins, projects, skillCategories, socialLinks } from "@/lib/data";

// Structured data so search engines and LLM crawlers can read who this is
// without parsing the layout.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: SITE_URL,
  mainEntity: {
    "@type": "Person",
    name: "Anish Kumar",
    url: SITE_URL,
    image: `${SITE_URL}/avatar-512.webp`,
    email: `mailto:${EMAIL}`,
    jobTitle: "Backend & Full-Stack Developer",
    address: { "@type": "PostalAddress", addressLocality: "Raipur", addressCountry: "IN" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "IIIT Naya Raipur" },
    sameAs: socialLinks.filter((l) => l.label !== "Email").map((l) => l.href),
    award: hackathonWins.map((w) => `${w.prize}, ${w.event}`),
    knowsAbout: skillCategories.flatMap((c) => c.skills),
    hasOccupation: experiences.map((exp) => ({
      "@type": "Occupation",
      name: exp.role,
      description: `${exp.role} at ${exp.company}, ${exp.period}`,
    })),
  },
  hasPart: projects.map((p) => ({
    "@type": "SoftwareSourceCode",
    name: p.title,
    description: `${p.tagline} ${p.description}`,
    codeRepository: p.github,
    programmingLanguage: p.technologies,
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
    </>
  );
}
