"use client";

import { Card, CardContent } from "@/components/ui/card";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-background/50"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight mb-4 sm:mb-6 text-foreground">
            Certifications & Badges
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-light text-muted-foreground max-w-2xl mx-auto px-4">
            Verified technical certifications, open-source badges, and digital credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {certifications.map((item, index) => (
            <div
              key={item.title}
              className="animate-fade-in-up transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="h-full text-center hover:shadow-xl transition-all duration-300 bg-secondary/50 border-border rounded-2xl flex flex-col justify-between">
                <CardContent className="p-6 sm:p-8 flex flex-col items-center justify-between h-full space-y-4">
                  <div className="w-full flex flex-col items-center space-y-3">
                    {item.badgeImage && (
                      <div className="my-2 flex justify-center">
                        <img
                          src={item.badgeImage}
                          alt={item.title}
                          className="h-24 sm:h-28 object-contain drop-shadow-md hover:scale-105 transition-transform"
                        />
                      </div>
                    )}

                    <span className="inline-block px-3 py-1 text-xs font-medium bg-background text-muted-foreground rounded-full font-mono">
                      {item.category}
                    </span>

                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {item.verifyUrl && (
                    <div className="pt-2">
                      <a
                        href={item.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-primary hover:underline border border-primary/30 px-4 py-2 rounded-full bg-primary/10 transition-colors"
                      >
                        <span>Verify Badge</span>
                        <span>↗</span>
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
