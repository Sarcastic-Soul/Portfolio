import { CertificateIcon, GithubLogoIcon } from "@phosphor-icons/react/ssr";
import type { Icon } from "@phosphor-icons/react";
import { experiences, openSourceContributions } from "@/lib/data";
import { Section, TechLine, textLink } from "@/components/sections/section";

type Entry = {
  key: string;
  role: string;
  org: string;
  period: string;
  location: string;
  bullets: string[];
  tech: string[];
  link: { label: string; href: string; icon: Icon };
  image?: string;
};

const entries: Entry[] = [
  ...experiences.map((exp) => ({
    key: exp.company,
    role: exp.role,
    org: exp.company,
    period: exp.period,
    location: exp.location,
    bullets: exp.bullets,
    tech: exp.tech,
    link: { label: "Certificate", href: exp.certificate, icon: CertificateIcon },
    image: exp.certificateImage,
  })),
  ...openSourceContributions.map((os) => ({
    key: os.project,
    role: os.role,
    org: os.project,
    period: os.period,
    location: os.location,
    bullets: os.bullets,
    tech: os.tech,
    link: { label: os.repo, href: os.link, icon: GithubLogoIcon },
  })),
];

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-12">
        {entries.map((entry) => (
          <li key={entry.key} className="space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                {entry.role} <span className="text-muted-foreground">at</span> {entry.org}
              </h3>
              <p className="font-mono text-xs text-muted-foreground">{entry.period}</p>
            </div>
            <p className="text-sm text-muted-foreground">{entry.location}</p>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
              <div className="max-w-3xl space-y-3">
                <ul className="list-disc space-y-1.5 pl-5 leading-relaxed text-foreground/90 marker:text-brand">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <TechLine items={entry.tech} />
                <a href={entry.link.href} target="_blank" rel="noopener noreferrer" className={textLink}>
                  <entry.link.icon className="h-4 w-4 text-brand" />
                  {entry.link.label}
                </a>
              </div>
              {entry.image && (
                <a
                  href={entry.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-40 shrink-0 overflow-hidden rounded-md border border-border transition-colors hover:border-brand"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={entry.image}
                    alt={`${entry.org} internship completion certificate`}
                    loading="lazy"
                    width={480}
                    height={340}
                    className="h-auto w-full"
                  />
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
