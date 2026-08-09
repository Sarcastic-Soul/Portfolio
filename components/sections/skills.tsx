"use client";

import { skillCategories } from "@/lib/data";
import { TechIcon } from "@/components/icons";

export function Skills() {
  const topRowCategories = skillCategories.slice(0, 4);
  const bottomRowCategories = skillCategories.slice(4, 7);

  return (
    <section
      id="skills"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-background"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight mb-4 sm:mb-6 text-foreground">
            Skills & Expertise
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-light text-muted-foreground max-w-2xl mx-auto px-4">
            A comprehensive toolkit refined through years of hands-on experience.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {/* Top Row: 4 Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 items-stretch">
            {topRowCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="animate-fade-in-up flex flex-col h-full space-y-4"
                style={{ animationDelay: `${categoryIndex * 0.08}s` }}
              >
                <h3 className="text-xl sm:text-2xl font-light tracking-tight border-b border-border pb-3 text-foreground">
                  {category.title}
                </h3>
                <div className="space-y-3 flex-grow">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2.5 text-base font-light text-muted-foreground hover:text-primary transition-colors cursor-default"
                    >
                      <TechIcon name={skill} className="w-5 h-5 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: 3 Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 items-stretch">
            {bottomRowCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="animate-fade-in-up flex flex-col h-full space-y-4"
                style={{ animationDelay: `${(categoryIndex + 4) * 0.08}s` }}
              >
                <h3 className="text-xl sm:text-2xl font-light tracking-tight border-b border-border pb-3 text-foreground">
                  {category.title}
                </h3>
                <div className="space-y-3 flex-grow">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2.5 text-base font-light text-muted-foreground hover:text-primary transition-colors cursor-default"
                    >
                      <TechIcon name={skill} className="w-5 h-5 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
