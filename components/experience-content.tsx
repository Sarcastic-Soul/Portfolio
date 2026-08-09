"use client";

import { experiences, openSourceContributions } from "@/lib/data";
import { TechIcon, Github } from "@/components/icons";
import { Briefcase, Calendar, MapPin, ExternalLink, GitPullRequest } from "lucide-react";

export function ExperienceContent() {
  return (
    <div className="py-8">
      <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-background/50">
        <div className="container mx-auto max-w-5xl space-y-20">
          
          {/* Work Experience Section */}
          <div className="space-y-12">
            <div className="text-center animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-foreground">
                Work Experience & Internships
              </h2>
            </div>

            <div className="relative border-l-2 border-border ml-3 sm:ml-6 space-y-12">
              {experiences.map((exp) => (
                <div key={exp.company} className="relative pl-6 sm:pl-10 group animate-fade-in-up">
                  {/* Timeline Indicator Dot */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors duration-300 shadow-md" />

                  <div className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md space-y-4 card-grain card-shine">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/50 pb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-foreground flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-primary" />
                          {exp.role}
                        </h3>
                        <div className="text-lg text-primary font-mono mt-1">{exp.company}</div>
                      </div>

                      <div className="flex flex-col sm:items-end text-xs sm:text-sm text-muted-foreground font-mono space-y-1">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2.5 text-sm sm:text-base text-muted-foreground font-light leading-relaxed list-disc list-inside">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="leading-normal">
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono border border-border bg-muted/60 text-foreground rounded-md"
                        >
                          <TechIcon name={t} className="w-3.5 h-3.5" />
                          <span>{t}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Open Source Contributions Section */}
          <div className="space-y-12 pt-8 border-t border-border/60">
            <div className="text-center animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-foreground">
                Open Source Contributions
              </h2>
            </div>

            <div className="relative border-l-2 border-primary/40 ml-3 sm:ml-6 space-y-12">
              {openSourceContributions.map((os) => (
                <div key={os.project} className="relative pl-6 sm:pl-10 group animate-fade-in-up">
                  {/* Timeline Indicator Dot */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-primary shadow-md" />

                  <div className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md space-y-4 card-grain card-shine">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/50 pb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-foreground flex items-center gap-2">
                          <GitPullRequest className="w-5 h-5 text-primary" />
                          {os.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 mt-1">
                          <span className="text-lg text-primary font-mono">{os.project}</span>
                          <span className="text-xs font-mono text-muted-foreground">({os.repo})</span>
                          {os.link && (
                            <a
                              href={os.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono border border-border bg-secondary/50 text-foreground hover:border-primary hover:text-primary transition-colors rounded-full"
                            >
                              <Github className="w-3.5 h-3.5" />
                              <span>View Repository</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col sm:items-end text-xs sm:text-sm text-muted-foreground font-mono space-y-1">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          <span>{os.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{os.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2.5 text-sm sm:text-base text-muted-foreground font-light leading-relaxed list-disc list-inside">
                      {os.bullets.map((bullet, i) => (
                        <li key={i} className="leading-normal">
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {os.tech.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono border border-border bg-muted/60 text-foreground rounded-md"
                        >
                          <TechIcon name={t} className="w-3.5 h-3.5" />
                          <span>{t}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
