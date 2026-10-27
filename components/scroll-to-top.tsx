"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@phosphor-icons/react/ssr";

const RADIUS = 20;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

// Back-to-top button. The ring around it fills as the page is read.
export function ScrollToTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
      setVisible(window.scrollY > 400);
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

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-background text-foreground transition-opacity duration-200 hover:text-brand sm:bottom-8 sm:right-8 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <svg viewBox="0 0 48 48" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden>
        <circle cx="24" cy="24" r={RADIUS} fill="none" strokeWidth="2" className="stroke-border" />
        <circle
          cx="24"
          cy="24"
          r={RADIUS}
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
          className="stroke-brand"
        />
      </svg>
      <ArrowUpIcon className="relative h-5 w-5" weight="bold" />
    </button>
  );
}
