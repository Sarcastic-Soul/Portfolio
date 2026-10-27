import {
  DownloadSimpleIcon,
  GithubLogoIcon,
  GlobeIcon,
  PlayCircleIcon,
} from "@phosphor-icons/react/ssr";
import type { Icon } from "@phosphor-icons/react";
import { projects, type Project } from "@/lib/data";
import { ProjectPreview, smallSrc } from "@/components/project-preview";
import { Section, TechLine, textLink } from "@/components/sections/section";

function ProjectLinks({ project }: { project: Project }) {
  const links = [
    project.download && { label: project.download.label, href: project.download.href, icon: DownloadSimpleIcon },
    project.demo && { label: "Live demo", href: project.demo, icon: GlobeIcon },
    project.video && { label: "Demo video", href: project.video, icon: PlayCircleIcon },
    { label: "Source code", href: project.github, icon: GithubLogoIcon },
  ].filter(Boolean) as { label: string; href: string; icon: Icon }[];

  return (
    <div className="space-y-1">
      <div className="flex flex-wrap gap-x-5 gap-y-2">
        {links.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className={textLink}>
            <link.icon className="h-4 w-4 text-brand" />
            {link.label}
          </a>
        ))}
      </div>
      {project.demoNote && <p className="text-xs text-muted-foreground">{project.demoNote}</p>}
    </div>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article id={project.slug} className="grid scroll-mt-20 gap-6 lg:grid-cols-[1fr_28rem] lg:gap-10">
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
          {project.title}
          <span className="ml-3 font-mono text-xs font-normal text-muted-foreground">
            {project.category} · {project.year}
          </span>
        </h3>
        <p className="text-foreground">{project.tagline}</p>
        <p className="leading-relaxed text-muted-foreground">{project.description}</p>
        {project.highlights.length > 0 && (
          <ul className="list-disc space-y-1 pl-5 text-sm text-foreground/90 marker:text-brand">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}
        <TechLine items={project.technologies} />
        <ProjectLinks project={project} />
      </div>
      <div className="lg:pt-1">
        <ProjectPreview preview={project.preview} compact />
      </div>
    </article>
  );
}

// Small screenshot for the shorter list. Terminal previews are too dense to
// read at this size, so those projects go without one.
function Thumb({ project }: { project: Project }) {
  const { preview } = project;
  const shot =
    preview.kind === "browser" ? preview : preview.kind === "phone" ? preview.srcs[0] : null;
  if (!shot) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={smallSrc(shot.src)}
      alt={shot.alt}
      loading="lazy"
      decoding="async"
      className="h-auto w-full shrink-0 rounded-md border border-border sm:w-44"
    />
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" title="Projects">
      <div className="space-y-14">
        {featured.map((project) => (
          <FeaturedProject key={project.slug} project={project} />
        ))}
      </div>

      {more.length > 0 && (
        <div className="mt-16">
          <h3 className="mb-4 text-lg font-semibold text-foreground">More projects</h3>
          <ul className="divide-y divide-border/70 border-t border-border/70">
            {more.map((project) => (
              <li
                key={project.slug}
                id={project.slug}
                className="flex scroll-mt-20 flex-col-reverse gap-4 py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8"
              >
                <div className="max-w-3xl space-y-2">
                  <p className="text-foreground">
                    <span className="font-semibold">{project.title}</span>
                    <span className="text-muted-foreground"> · {project.tagline}</span>
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  <TechLine items={project.technologies} />
                  <ProjectLinks project={project} />
                </div>
                <Thumb project={project} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}
