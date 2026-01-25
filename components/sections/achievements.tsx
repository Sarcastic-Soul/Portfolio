"use client";

import { Card, CardContent } from "@/components/ui/card";
import { achievements } from "@/lib/data";

export function Achievements() {
  return (
    <section
      id="achievements"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-background"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight mb-4 sm:mb-6 text-foreground">
            Achievements
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-light text-muted-foreground max-w-2xl mx-auto px-4">
            Recognition and milestones that highlight my commitment to
            excellence and continuous growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="animate-fade-in-up transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="h-full text-center hover:shadow-xl transition-all duration-300 bg-secondary/50 border-border rounded-2xl">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-4 sm:mb-6 flex justify-center">
                    <div className="p-3 sm:p-4 bg-background rounded-full">
                      <achievement.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="space-y-2">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-background text-muted-foreground rounded-full">
                        {achievement.category}
                      </span>
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                        {achievement.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
