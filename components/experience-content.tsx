"use client";

import { ArrowUpRightIcon, MapPinIcon } from "@phosphor-icons/react/ssr";
import { experiences, openSourceContributions } from "@/lib/data";
import { TechIcon } from "@/components/icons";
import { SectionHeading } from "@/components/sections/section-heading";

type Entry = {
  key: string;
  title: string;
  org: string;
  orgNote?: string;
  link?: string;
  certificate?: string;
  period: string;
  location: string;
  bullets: string[];
  tech: string[];
};

const linkClass =
  "inline-flex items-center gap-1.5 text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-brand";

function Timeline({ entries }: { entries: Entry[] }) {
  return (
    <ol className="border-t border-border">
      {entries.map((entry) => (
        <li
          key={entry.key}
          className="grid grid-cols-1 gap-4 border-b border-border/60 py-10 lg:grid-cols-12 lg:gap-10"
        >
          <div className="space-y-1 text-sm text-muted-foreground lg:col-span-3">
            <p className="text-foreground">{entry.period}</p>
            <p className="flex items-center gap-1.5">
              <MapPinIcon className="h-4 w-4 shrink-0" />
              {entry.location}
            </p>
          </div>

          <div className="space-y-5 lg:col-span-9">
            <div className="space-y-1.5">
              <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{entry.org}</h3>
              <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-brand">
                {entry.title}
                {entry.orgNote && <span className="text-sm text-muted-foreground">{entry.orgNote}</span>}
              </p>
            </div>

            <ul className="max-w-3xl space-y-2.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {entry.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-2.5">
                  <span className="select-none text-brand" aria-hidden>
                    ›
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {entry.tech.map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <TechIcon name={t} className="h-4 w-4" />
                  {t}
                </li>
              ))}
            </ul>

            {(entry.link || entry.certificate) && (
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {entry.link && (
                  <a href={entry.link} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    View repository
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                )}
                {entry.certificate && (
                  <a href={entry.certificate} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    Completion certificate
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                )}
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function ExperienceContent() {
  const work: Entry[] = experiences.map((exp) => ({
    key: exp.company,
    title: exp.role,
    org: exp.company,
    period: exp.period,
    location: exp.location,
    certificate: exp.certificate,
    bullets: exp.bullets,
    tech: exp.tech,
  }));

  const openSource: Entry[] = openSourceContributions.map((os) => ({
    key: os.project,
    title: os.role,
    org: os.project,
    orgNote: os.repo,
    link: os.link,
    period: os.period,
    location: os.location,
    bullets: os.bullets,
    tech: os.tech,
  }));

  return (
    <section id="experience" className="px-4 pb-24 pt-32 sm:px-6 lg:px-12 lg:pt-40">
      <div className="container mx-auto max-w-7xl space-y-24">
        <div>
          <SectionHeading as="h1" title="Experience" />
          <Timeline entries={work} />
        </div>

        <div>
          <SectionHeading title="Open source" />
          <Timeline entries={openSource} />
        </div>
      </div>
    </section>
  );
}
