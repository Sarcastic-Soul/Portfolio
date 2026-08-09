"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Github, TechIcon } from "@/components/icons";
import { projects } from "@/lib/data";
import { ProjectImage } from "@/components/project-image";

const categories = ["All", "Full Stack", "Systems & Backend", "AI / RAG"];

export function ProjectsContent() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter(
    (p) => selectedCategory === "All" || p.category === selectedCategory
  );

  return (
    <div>
      <section
        id="projects"
        className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-background"
      >
        <div className="container mx-auto">
          <div className="text-center mb-10 sm:mb-14 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight mb-4 sm:mb-6 text-foreground">
              Projects
            </h2>
            <p className="text-base sm:text-lg lg:text-xl font-light text-muted-foreground max-w-2xl mx-auto px-4 mb-8">
              A curated collection of projects that showcase my approach to
              solving complex problems.
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-mono transition-all duration-300 ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "border-border text-muted-foreground hover:text-foreground bg-transparent"
                  }`}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-16 sm:space-y-24 lg:space-y-32">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center animate-fade-in-up ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div
                  className={`space-y-6 sm:space-y-8 ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="space-y-4">
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-mono border border-primary/40 bg-primary/10 text-primary">
                      {project.category}
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-base sm:text-lg font-light text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-light tracking-wide border border-border bg-secondary/50 text-secondary-foreground rounded-full"
                      >
                        <TechIcon name={tech} className="w-4 h-4 shrink-0" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full font-light tracking-wide bg-transparent"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button
                        size="lg"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-light tracking-wide"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <div
                  className={`${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  } transition-transform duration-300 hover:scale-[1.02]`}
                >
                  <Card className="border-0 shadow-lg overflow-hidden bg-muted rounded-2xl group card-grain card-shine">
                    <CardContent className="p-0">
                      <ProjectImage
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
