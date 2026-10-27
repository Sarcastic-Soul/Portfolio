import {
  EMAIL,
  RESUME_LINK,
  SITE_URL,
  achievements,
  hackathonWins,
  certifications,
  experiences,
  openSourceContributions,
  projects,
  skillCategories,
  socialLinks,
} from "@/lib/data";

export const dynamic = "force-static";

// Plain-text copy of the page for LLMs (https://llmstxt.org), built from the
// same data as the site so the two never drift apart.
export function GET() {
  const lines = [
    "# Anish Kumar",
    "",
    "> Backend & full-stack developer. B.Tech student at IIIT Naya Raipur, Raipur, India. Open to full-time software engineering roles.",
    "",
    `Website: ${SITE_URL}`,
    `Email: ${EMAIL}`,
    `Resume: ${RESUME_LINK}`,
    ...socialLinks.filter((l) => l.label !== "Email").map((l) => `${l.label}: ${l.href}`),
    "",
    "## Experience",
    "",
    ...experiences.flatMap((e) => [
      `### ${e.role}, ${e.company} (${e.period})`,
      ...e.bullets.map((b) => `- ${b}`),
      `- Tech: ${e.tech.join(", ")}`,
      "",
    ]),
    ...openSourceContributions.flatMap((o) => [
      `### ${o.role}, ${o.project} (${o.period})`,
      ...o.bullets.map((b) => `- ${b}`),
      `- Repo: ${o.link}`,
      "",
    ]),
    "## Projects",
    "",
    ...projects.flatMap((p) => [
      `### ${p.title} (${p.category}, ${p.year})`,
      `${p.tagline} ${p.description}`,
      ...p.highlights.map((h) => `- ${h}`),
      `- Tech: ${p.technologies.join(", ")}`,
      `- Code: ${p.github}`,
      ...(p.demo ? [`- Demo: ${p.demo}`] : []),
      "",
    ]),
    "## Skills",
    "",
    ...skillCategories.map((c) => `- ${c.title}: ${c.skills.join(", ")}`),
    "",
    "## Achievements",
    "",
    ...hackathonWins.map((w) => `- Hackathon win: ${w.prize}, ${w.event}`),
    ...achievements.map((a) => `- ${a.title}: ${a.description}`),
    ...certifications.map((c) => `- Certification: ${c.title} (${c.issuer})`),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
