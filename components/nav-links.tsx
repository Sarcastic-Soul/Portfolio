"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";

// Highlights the link for the section currently in view. A section counts as
// current once its top passes a third of the way down the screen.
export function NavLinks() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);

    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight / 3;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let current: string | null = null;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) current = `#${section.id}`;
      }
      // The last section is short and may never reach the line.
      if (atBottom && sections.length) current = `#${sections[sections.length - 1].id}`;
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <ul className="hidden h-14 items-stretch gap-5 text-sm md:flex">
      {navItems.map((item) => {
        const isActive = active === item.href;
        return (
          <li key={item.href}>
            <a
              href={item.href}
              aria-current={isActive ? "location" : undefined}
              className={`relative flex h-full items-center transition-colors ${
                isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.name}
              <span
                aria-hidden
                className={`absolute inset-x-0 -bottom-px h-0.5 origin-center bg-brand transition-transform duration-200 ease-out ${
                  isActive ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
