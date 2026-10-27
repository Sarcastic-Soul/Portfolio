import Link from "next/link";
import { ArrowLeftIcon } from "@phosphor-icons/react/ssr";

export default function NotFound() {
  return (
    <section className="space-y-6 py-24 sm:py-32">
      <h1 className="font-mono text-6xl font-semibold text-foreground sm:text-7xl">404</h1>
      <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
        This page does not exist. The link may be old, or the address has a typo.
      </p>
      <Link
        href="/"
        className="inline-flex h-11 items-center gap-2 rounded-md bg-foreground px-4 text-background transition-colors hover:bg-brand"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        Back to the portfolio
      </Link>
    </section>
  );
}
