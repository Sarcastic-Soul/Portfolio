"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Search, Home, Briefcase, Code2, Menu, X, Trophy, FileText, Terminal, Sparkles } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  projects,
  skillCategories,
  achievements,
  navItems,
  socialLinks,
  RESUME_LINK,
} from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

export function Navigation() {
  const [open, setOpen] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { toast } = useToast();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("keydown", down);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", down);
    };
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  // Breadcrumb Logic
  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs = [
    { name: "~", href: "/" },
    ...segments.map((segment, index) => {
      const href = `/${segments.slice(0, index + 1).join("/")}`;
      return { name: segment, href };
    }),
  ];

  // Flatten skills for search
  const allSkills = React.useMemo(() => {
    return skillCategories.flatMap((cat) =>
      cat.skills.map((skill) => ({ skill, category: cat.title })),
    );
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Left: Breadcrumbs */}
            <div className="flex items-center space-x-2 text-sm sm:text-base font-medium font-mono shrink-0">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={crumb.href}>
                  {index > 0 && (
                    <span className="text-muted-foreground">/</span>
                  )}
                  <Link
                    href={crumb.href}
                    className={`transition-colors duration-200 ${
                      index === breadcrumbs.length - 1
                        ? "text-foreground font-bold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {crumb.name}
                  </Link>
                </React.Fragment>
              ))}
            </div>

            {/* Right Side: Nav Links, Search, Theme, Mobile Menu */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Desktop Nav Links */}
              <div className="hidden md:flex items-center space-x-6 mr-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                      pathname === item.href
                        ? "text-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                className="text-muted-foreground hover:text-foreground border-border bg-transparent hidden sm:flex items-center gap-2 px-3 relative"
                onClick={() => setOpen(true)}
              >
                <Search className="h-4 w-4" />
                <span className="text-xs font-mono">Search...</span>
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-foreground sm:hidden"
                onClick={() => setOpen(true)}
              >
                <Search className="h-5 w-5" />
              </Button>

              <ThemeToggle />

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border p-4 shadow-lg animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-base font-medium transition-colors duration-200 ${
                    pathname === item.href
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Command Palette */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Type a command or search..."
          className="focus:ring-0 focus:border-none border-none ring-0 outline-none focus:outline-none"
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            <CommandItem
              onSelect={() => runCommand(() => router.push("/"))}
              value="Home Page"
            >
              <Home className="mr-2 h-4 w-4" />
              Home
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/experience"))}
              value="Experience Page"
            >
              <Briefcase className="mr-2 h-4 w-4" />
              Experience
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/projects"))}
              value="Projects Page"
            >
              <Briefcase className="mr-2 h-4 w-4" />
              Projects
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/skills"))}
              value="Skills Page"
            >
              <Code2 className="mr-2 h-4 w-4" />
              Skills
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Projects">
            {projects.map((project) => (
              <CommandItem
                key={project.title}
                onSelect={() => runCommand(() => router.push("/projects"))}
                value={`${project.title} Project`}
              >
                <Briefcase className="mr-2 h-4 w-4" />
                {project.title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Skills">
            {allSkills.map(({ skill, category }) => (
              <CommandItem
                key={`${skill}-${category}`}
                onSelect={() => runCommand(() => router.push("/skills"))}
                value={`${skill} ${category}`}
              >
                <Code2 className="mr-2 h-4 w-4" />
                {skill}
                <span className="ml-2 text-xs text-muted-foreground">
                  ({category})
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Achievements">
            {achievements.map((achievement) => (
              <CommandItem
                key={achievement.title}
                onSelect={() => runCommand(() => router.push("/skills"))}
                value={`${achievement.title} Achievement`}
              >
                <Trophy className="mr-2 h-4 w-4" />
                {achievement.title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Quick Links">
            <CommandItem
              onSelect={() => runCommand(() => window.open(RESUME_LINK, "_blank"))}
              value="Resume CV PDF"
            >
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Secret Commands (Easter Eggs)">
            <CommandItem
              onSelect={() =>
                runCommand(() =>
                  toast({
                    title: "⚡ sudo hire-me",
                    description: "Permission Granted! Contact anishisbusy@gmail.com to start building awesome software together.",
                  })
                )
              }
              value="sudo hire-me"
            >
              <Terminal className="mr-2 h-4 w-4 text-green-500" />
              sudo hire-me
            </CommandItem>

            <CommandItem
              onSelect={() =>
                runCommand(() =>
                  toast({
                    title: "📖 cat philosophy.txt",
                    description: "'First make it work, then make it right, then make it fast.' — Kent Beck",
                  })
                )
              }
              value="cat philosophy.txt"
            >
              <Terminal className="mr-2 h-4 w-4 text-yellow-500" />
              cat philosophy.txt
            </CommandItem>

            <CommandItem
              onSelect={() =>
                runCommand(() =>
                  toast({
                    title: "🕶️ matrix mode",
                    description: "You took the green pill! Welcome to the Gruvbox Matrix.",
                  })
                )
              }
              value="matrix"
            >
              <Sparkles className="mr-2 h-4 w-4 text-primary" />
              matrix
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Socials">
            {socialLinks.map((social) => (
              <CommandItem
                key={social.label}
                onSelect={() =>
                  runCommand(() => window.open(social.href, "_blank"))
                }
                value={`${social.label} Social`}
              >
                <social.icon className="mr-2 h-4 w-4" />
                {social.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
