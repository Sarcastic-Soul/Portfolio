"use client";

import { useEffect, useState } from "react";
import { GitCommit } from "lucide-react";

export function LastUpdated() {
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMetadata() {
      try {
        const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
        const res = await fetch(`${basePath}/metadata.json`);
        if (res.ok) {
          const data = await res.json();
          if (data.lastUpdated) {
            setLastUpdated(formatDate(data.lastUpdated));
          }
        }
      } catch (error) {
        console.error("Failed to fetch metadata:", error);
      }
    }

    fetchMetadata();
  }, []);

  function formatDate(dateStr: string) {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  if (!lastUpdated) return null;

  return (
    <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono bg-muted/50 px-2.5 py-1 rounded-full border border-border/50">
      <GitCommit className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
      <span>Last updated: {lastUpdated}</span>
    </div>
  );
}
