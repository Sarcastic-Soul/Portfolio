import { flushSync } from "react-dom";

type Theme = "light" | "dark";

/**
 * Swaps the theme inside a View Transition so the page cross-fades as a whole
 * instead of every element animating its own colors. Falls back to an instant
 * swap where the API is missing or the user asked for reduced motion.
 */
export function setThemeWithTransition(
  next: Theme,
  setTheme: (theme: string) => void,
) {
  const startViewTransition = document.startViewTransition?.bind(document);
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (!startViewTransition || prefersReducedMotion) {
    setTheme(next);
    return;
  }

  startViewTransition(() => {
    // flushSync forces next-themes to apply the class before the snapshot is
    // taken; without it React may batch the update past the transition.
    flushSync(() => setTheme(next));
    document.documentElement.classList.toggle("dark", next === "dark");
  });
}
