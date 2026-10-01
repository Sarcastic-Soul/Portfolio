import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/ssr";
import { projects } from "@/lib/data";

export function SelectedWork() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="px-4 pb-24 pt-12 sm:px-6 lg:px-12 lg:pt-16">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 flex items-end justify-between gap-6 border-b border-border pb-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Selected work</h2>
          <Link
            href="/projects"
            className="group inline-flex shrink-0 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            All {projects.length} projects
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <ol>
          {featured.map((project, i) => (
            <li key={project.slug} className="border-b border-border/60">
              <Link
                href={`/projects#${project.slug}`}
                className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 gap-y-1 py-5 sm:grid-cols-[3rem_14rem_1fr_auto]"
              >
                <span className="col-start-1 row-start-1 text-sm text-brand">{String(i + 1).padStart(2, "0")}</span>
                <span className="col-start-2 row-start-1 text-lg font-bold text-foreground transition-colors group-hover:text-brand sm:text-xl">
                  {project.title}
                </span>
                <span className="col-span-2 col-start-2 row-start-2 text-sm text-muted-foreground sm:col-span-1 sm:col-start-3 sm:row-start-1 sm:text-base">
                  {project.tagline}
                </span>
                <span className="col-start-3 row-start-1 text-right text-xs text-muted-foreground sm:col-start-4">
                  {project.category.toLowerCase()}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
