import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import { ThemeToggle } from "@/components/theme-toggle";
import { NavLinks } from "@/components/nav-links";
import { RESUME_LINK } from "@/lib/data";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background">
      <nav
        aria-label="Main"
        className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6"
      >
        <a href="#top" className="font-mono text-sm font-medium text-foreground">
          <span className="text-brand">~/</span>anish-kumar
        </a>

        <div className="flex items-center gap-1 sm:gap-5">
          <NavLinks />
          <a
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center gap-1.5 rounded-md bg-foreground px-3 text-sm text-background transition-colors hover:bg-brand"
          >
            Resume
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
