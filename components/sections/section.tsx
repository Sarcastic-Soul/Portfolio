import type React from "react";

// Every section shares one shape: heading on top, content full width below.
// Keeps the page readable top to bottom.
export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-16 border-t border-border/70 py-14 sm:py-20"
    >
      <h2
        id={`${id}-title`}
        className="mb-8 text-2xl font-semibold tracking-tight text-foreground sm:mb-10 sm:text-3xl"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

export const textLink =
  "inline-flex items-center gap-1 text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-brand";

export function TechLine({ items }: { items: string[] }) {
  return (
    <p className="font-mono text-xs leading-relaxed text-muted-foreground">
      {items.join(" · ")}
    </p>
  );
}
