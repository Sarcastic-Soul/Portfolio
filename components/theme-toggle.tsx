"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon as Moon, SunIcon as Sun } from "@phosphor-icons/react/ssr";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted sm:h-9 sm:w-9"
      aria-label={mounted && isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {/* The resolved theme is unknown until mount, so hold the space to keep
          the icon from popping in at a different size after hydration. */}
      {!mounted ? (
        <span className="h-4 w-4" />
      ) : isDark ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}
