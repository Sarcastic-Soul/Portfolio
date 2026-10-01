"use client";

import { useState } from "react";
import {
  ArrowUpRightIcon,
  DownloadSimpleIcon,
  GithubLogoIcon,
  PlayIcon,
} from "@phosphor-icons/react/ssr";
import { TechIcon } from "@/components/icons";
import { ProjectPreview } from "@/components/project-preview";
import { projects, projectCategories, type Project, type ProjectCategory } from "@/lib/data";

type Filter = "All" | ProjectCategory;

const linkBase =
  "inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm transition-colors duration-200";
const linkPrimary = `${linkBase} bg-foreground text-background hover:bg-brand`;
const linkSecondary = `${linkBase} border border-border text-foreground hover:border-foreground`;

function ProjectLinks({ project }: { project: Project }) {
  const external = { target: "_blank", rel: "noopener noreferrer" } as const;
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2.5">
        {project.download && (
          <a href={project.download.href} {...external} className={linkPrimary}>
            <DownloadSimpleIcon className="h-4 w-4" />
            {project.download.label}
          </a>
        )}
        {project.demo && (
          <a href={project.demo} {...external} className={project.download ? linkSecondary : linkPrimary}>
            <ArrowUpRightIcon className="h-4 w-4" />
            Live demo
          </a>
        )}
        {project.video && (
          <a href={project.video} {...external} className={linkSecondary}>
            <PlayIcon className="h-4 w-4" />
            Demo video
          </a>
        )}
        <a href={project.github} {...external} className={linkSecondary}>
          <GithubLogoIcon className="h-4 w-4" />
          Code
        </a>
      </div>
      {project.demoNote && <p className="text-xs text-muted-foreground">{project.demoNote}</p>}
    </div>
  );
}

function TechList({ items, small }: { items: string[]; small?: boolean }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-2">
      {items.map((tech) => (
        <li
          key={tech}
          className={`inline-flex items-center gap-1.5 text-muted-foreground ${small ? "text-xs" : "text-sm"}`}
        >
          <TechIcon name={tech} className={small ? "h-3.5 w-3.5" : "h-4 w-4"} />
          {tech}
        </li>
      ))}
    </ul>
  );
}

function Meta({ project, index }: { project: Project; index?: number }) {
  return (
    <p className="flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground">
      {index !== undefined && <span className="text-brand">{String(index + 1).padStart(2, "0")}</span>}
      <span>{project.category}</span>
      <span aria-hidden>·</span>
      <span>{project.year}</span>
    </p>
  );
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  return (
    <article
      id={project.slug}
      className="grid scroll-mt-28 grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14"
    >
      <div className={`space-y-6 lg:col-span-5 ${flip ? "lg:order-2" : ""}`}>
        <div className="space-y-3">
          <Meta project={project} index={index} />
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{project.title}</h2>
          <p className="text-lg text-foreground">{project.tagline}</p>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{project.description}</p>
        {project.highlights.length > 0 && (
          <ul className="space-y-2 text-sm text-foreground">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2.5">
                <span className="select-none text-brand" aria-hidden>
                  ›
                </span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
        <TechList items={project.technologies} />
        <ProjectLinks project={project} />
      </div>
      <div className={`lg:col-span-7 ${flip ? "lg:order-1" : ""}`}>
        <ProjectPreview preview={project.preview} />
      </div>
    </article>
  );
}

function CompactProject({ project }: { project: Project }) {
  return (
    <article id={project.slug} className="flex scroll-mt-28 flex-col gap-5">
      <ProjectPreview preview={project.preview} compact />
      <div className="flex flex-1 flex-col gap-4">
        <div className="space-y-2">
          <Meta project={project} />
          <h3 className="text-2xl font-bold tracking-tight text-foreground">{project.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="text-foreground">{project.tagline}</span> {project.description}
          </p>
        </div>
        <TechList items={project.technologies} small />
        <div className="mt-auto">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

export function ProjectsContent() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = projects.filter((p) => filter === "All" || p.category === filter);
  const featured = visible.filter((p) => p.featured);
  const more = visible.filter((p) => !p.featured);
  const countFor = (f: Filter) =>
    f === "All" ? projects.length : projects.filter((p) => p.category === f).length;

  return (
    <section id="projects" className="px-4 pb-24 pt-32 sm:px-6 lg:px-12 lg:pt-40">
      <div className="container mx-auto max-w-7xl">
        <header className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-12 lg:items-end">
          <div className="space-y-4 lg:col-span-7">
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">Projects</h1>
            <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
              Things I have built, most of them from the ground up: a database server, a coding
              agent, scaled backends, AI tools and one offline Android app.
            </p>
          </div>

          <div
            role="group"
            aria-label="Filter projects by category"
            className="flex flex-wrap gap-x-1 gap-y-2 border-b border-border lg:col-span-5 lg:justify-end"
          >
            {(["All", ...projectCategories] as Filter[]).map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(f)}
                  className={`-mb-px border-b-2 px-3 py-3 text-sm transition-colors ${
                    active
                      ? "border-brand text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {f.toLowerCase()} <span className="text-xs text-muted-foreground">{countFor(f)}</span>
                </button>
              );
            })}
          </div>
        </header>

        {featured.length > 0 && (
          <div className="space-y-24 lg:space-y-32">
            {featured.map((project, i) => (
              <FeaturedProject key={project.slug} project={project} index={i} />
            ))}
          </div>
        )}

        {more.length > 0 && (
          <div className={featured.length > 0 ? "mt-28 border-t border-border pt-14 lg:mt-36" : ""}>
            {featured.length > 0 && (
              <h2 className="mb-10 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                More projects
              </h2>
            )}
            <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
              {more.map((project) => (
                <CompactProject key={project.slug} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
