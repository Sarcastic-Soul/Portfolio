"use client";

import { useEffect, useRef, useState } from "react";
import type { ProjectPreview as Preview, TerminalLine } from "@/lib/data";
import { Skeleton } from "@/components/ui/skeleton";

function WindowBar({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-border bg-card px-3 py-2">
      <div className="flex gap-1.5" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
      </div>
      <span className="truncate text-xs text-muted-foreground">{label}</span>
    </div>
  );
}

function Shot({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  // A cached image can finish loading before hydration attaches onLoad,
  // so check once on mount as well.
  useEffect(() => {
    if (ref.current?.complete) setLoaded(true);
  }, []);

  return (
    <div className={`relative overflow-hidden bg-secondary/40 ${className}`}>
      {!loaded && <Skeleton className="absolute inset-0 rounded-none bg-muted" />}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={ref}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={`h-full w-full object-cover object-top transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

const lineTone: Record<NonNullable<TerminalLine["kind"]>, string> = {
  cmd: "text-foreground",
  out: "text-muted-foreground",
  ok: "text-term-ok",
  dim: "text-term-dim italic",
};

function Terminal({ title, lines, compact }: { title: string; lines: TerminalLine[]; compact?: boolean }) {
  return (
    <div className="flex h-full flex-col">
      <WindowBar label={title} />
      <pre
        className={`flex-1 overflow-x-auto bg-surface font-mono leading-relaxed ${
          compact ? "p-4 text-[11px]" : "p-5 text-xs sm:text-[13px]"
        }`}
      >
        {lines.map((line, i) => (
          <div key={i} className={lineTone[line.kind ?? "out"]}>
            {line.kind === "cmd" && <span className="select-none text-brand">$ </span>}
            {line.text}
          </div>
        ))}
      </pre>
    </div>
  );
}

export function ProjectPreview({ preview, compact = false }: { preview: Preview; compact?: boolean }) {
  const frame = "card-grain overflow-hidden rounded-md border border-border bg-surface";

  if (preview.kind === "terminal") {
    return (
      <div className={`${frame} ${compact ? "aspect-video" : "aspect-video lg:aspect-[16/10]"}`}>
        <Terminal title={preview.title} lines={preview.lines} compact={compact} />
      </div>
    );
  }

  if (preview.kind === "browser") {
    return (
      <div className={frame}>
        <WindowBar label={preview.url} />
        <Shot src={preview.src} alt={preview.alt} className={compact ? "aspect-video" : "aspect-[16/10]"} />
      </div>
    );
  }

  // Phones: one centre screen with the others tucked behind, so a tall
  // screenshot still fits the same landscape slot as the other previews.
  const [first, ...rest] = preview.srcs;
  return (
    <div
      className={`${frame} relative flex items-start justify-center gap-3 px-6 pt-6 ${
        compact ? "aspect-video" : "aspect-video lg:aspect-[16/10]"
      }`}
    >
      {[rest[0], first, rest[1]].filter(Boolean).map((shot, i) => (
        <div
          key={shot.src}
          className={`overflow-hidden rounded-t-[1.1rem] border-x-[5px] border-t-[5px] border-foreground/85 ${
            i === 1 ? "z-10 w-[34%]" : "mt-8 hidden w-[28%] opacity-80 sm:block"
          }`}
        >
          <Shot src={shot.src} alt={shot.alt} className="aspect-[9/16]" />
        </div>
      ))}
    </div>
  );
}
