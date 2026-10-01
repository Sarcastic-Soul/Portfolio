import { achievements } from "@/lib/data";
import { SectionHeading } from "@/components/sections/section-heading";

export function Achievements() {
  return (
    <section id="achievements" className="px-4 py-20 sm:px-6 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading command="grep -r wins ~/" title="Achievements" />

        <ol className="grid grid-cols-1 border-t border-border md:grid-cols-3">
          {achievements.map((achievement) => (
            <li
              key={achievement.title}
              className="space-y-3 border-b border-border/60 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
            >
              <p className="text-6xl font-bold tracking-tight text-brand sm:text-7xl">
                {achievement.metric}
              </p>
              <h3 className="text-lg font-bold text-foreground">{achievement.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{achievement.description}</p>
              <p className="text-xs text-muted-foreground">{achievement.category.toLowerCase()}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
