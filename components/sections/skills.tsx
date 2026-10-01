"use client";

import { skillCategories } from "@/lib/data";
import { TechIcon } from "@/components/icons";
import { SectionHeading } from "@/components/sections/section-heading";

type Category = (typeof skillCategories)[number];

function CategoryColumn({ category }: { category: Category }) {
  return (
    <div className="flex h-full flex-col space-y-4">
      <h3 className="border-b border-border pb-3 text-xl font-bold tracking-tight text-foreground">
        {category.title}
      </h3>
      <ul className="flex-grow space-y-3">
        {category.skills.map((skill) => (
          <li key={skill} className="flex items-center gap-2.5 text-muted-foreground">
            <TechIcon name={skill} className="h-5 w-5 shrink-0" />
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  const topRow = skillCategories.slice(0, 4);
  const bottomRow = skillCategories.slice(4);

  return (
    <section id="skills" className="px-4 pb-20 pt-32 sm:px-6 lg:px-12 lg:pt-40">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading
          as="h1"
          title="Skills"
          intro="What I reach for, grouped by where it sits in the stack."
        />

        <div className="space-y-12 sm:space-y-16">
          <div className="grid grid-cols-1 items-stretch gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {topRow.map((category) => (
              <CategoryColumn key={category.title} category={category} />
            ))}
          </div>
          <div className="grid grid-cols-1 items-stretch gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {bottomRow.map((category) => (
              <CategoryColumn key={category.title} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
