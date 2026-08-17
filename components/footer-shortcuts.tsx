"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { setThemeWithTransition } from "@/lib/theme-transition";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

export function FooterShortcuts() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if input or textarea is focused
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      // Open Shortcuts Modal: Ctrl + /
      if ((e.ctrlKey || e.metaKey) && e.key === "/") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }

      // Toggle Theme: Shift + T
      if (e.shiftKey && e.key.toLowerCase() === "t") {
        e.preventDefault();
        setThemeWithTransition(resolvedTheme === "dark" ? "light" : "dark", setTheme);
      }

      // Navigate to Home: Shift + H
      if (e.shiftKey && e.key.toLowerCase() === "h") {
        e.preventDefault();
        router.push("/");
      }

      // Navigate to Experience: Shift + E
      if (e.shiftKey && e.key.toLowerCase() === "e") {
        e.preventDefault();
        router.push("/experience");
      }

      // Navigate to Projects: Shift + P
      if (e.shiftKey && e.key.toLowerCase() === "p") {
        e.preventDefault();
        router.push("/projects");
      }

      // Navigate to Skills: Shift + S
      if (e.shiftKey && e.key.toLowerCase() === "s") {
        e.preventDefault();
        router.push("/skills");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router, setTheme, resolvedTheme]);

  const shortcuts = [
    { key: "Shift + H", description: "Go to Home" },
    { key: "Shift + E", description: "Go to Experience" },
    { key: "Shift + P", description: "Go to Projects" },
    { key: "Shift + S", description: "Go to Skills" },
    { key: "Shift + T", description: "Toggle Theme" },
    { key: "Ctrl + /", description: "Open Shortcuts" },
    { key: "⌘ + K", description: "Command Palette" },
  ];

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-8 w-8 bg-background border-border hover:bg-muted"
          >
            <HelpCircle className="h-5 w-5" />
            <span className="sr-only">Keyboard Shortcuts</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Keyboard Shortcuts</DialogTitle>
            <DialogDescription>
              Quickly navigate and control the portfolio using these shortcuts.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {shortcuts.map((shortcut) => (
              <div
                key={shortcut.key}
                className="grid grid-cols-2 items-center gap-4"
              >
                <div className="text-sm font-medium">
                  {shortcut.description}
                </div>
                <div className="flex justify-end">
                  <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    <span className="text-xs">{shortcut.key}</span>
                  </kbd>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
