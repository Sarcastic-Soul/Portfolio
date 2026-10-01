import { GitCommitIcon as GitCommit } from "@phosphor-icons/react/ssr";

const lastUpdated = process.env.NEXT_PUBLIC_LAST_UPDATED;

// Fixed to UTC so the server-rendered text and the browser always agree.
function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function LastUpdated() {
  if (!lastUpdated) return null;

  return (
    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
      <GitCommit className="h-3.5 w-3.5 text-term-ok shrink-0" />
      <span>
        updated <time dateTime={lastUpdated}>{formatDate(lastUpdated)}</time>
      </span>
    </div>
  );
}
