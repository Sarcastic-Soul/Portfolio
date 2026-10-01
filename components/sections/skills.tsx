"use client";

import { skillCategories } from "@/lib/data";
import { TechIcon } from "@/components/icons";
import { SectionHeading } from "@/components/sections/section-heading";

export function Skills() {
  return (
    <section id="skills" className="px-4 pb-20 pt-32 sm:px-6 lg:px-12 lg:pt-40">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading
          as="h1"
          command="cat skills.txt"
          title="Skills"
          intro="What I reach for, grouped by where it sits in the stack."
        />

        <dl className="border-t border-border">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="grid grid-cols-1 gap-3 border-b border-border/60 py-5 md:grid-cols-12 md:gap-8"
            >
              <dt className="text-sm text-brand md:col-span-3 md:pt-0.5">
                {category.title.toLowerCase()}
              </dt>
              <dd className="md:col-span-9">
                <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
                  {category.skills.map((skill) => (
                    <li key={skill} className="inline-flex items-center gap-2 text-foreground">
                      <TechIcon name={skill} className="h-4 w-4 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
