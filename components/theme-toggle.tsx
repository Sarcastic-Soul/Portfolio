"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { setThemeWithTransition } from "@/lib/theme-transition";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setThemeWithTransition(isDark ? "light" : "dark", setTheme)}
      className="rounded-full p-2 hover:bg-muted transition-colors"
      aria-label="Toggle Theme"
    >
      {/* The resolved theme is unknown until mount, so hold the space to keep
          the icon from popping in at a different size after hydration. */}
      {!mounted ? (
        <span className="h-4 w-4" />
      ) : isDark ? (
        <Sun className="h-4 w-4 text-foreground" />
      ) : (
        <Moon className="h-4 w-4 text-foreground" />
      )}
    </Button>
  );
}
