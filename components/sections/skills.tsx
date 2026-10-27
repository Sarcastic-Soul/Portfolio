import { skillCategories } from "@/lib/data";
import { Section } from "@/components/sections/section";

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="divide-y divide-border/70">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="grid gap-1 py-3 first:pt-0 sm:grid-cols-[12rem_1fr] sm:gap-4"
          >
            <dt className="text-sm font-medium text-foreground">{category.title}</dt>
            <dd className="text-sm leading-relaxed text-muted-foreground">
              {category.skills.join(", ")}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
