"use client";

import Link from "next/link";
import { ArrowLeftIcon, HouseIcon } from "@phosphor-icons/react/ssr";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center bg-background px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto max-w-7xl animate-fade-in space-y-6">
        <h1 className="text-6xl font-bold tracking-tight text-foreground sm:text-8xl">404</h1>

        <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
          This page does not exist. The link may be old, or the address has a typo.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-background transition-colors duration-200 hover:bg-brand"
          >
            <HouseIcon className="h-5 w-5" />
            Home
          </Link>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-foreground transition-colors duration-200 hover:border-foreground"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}
