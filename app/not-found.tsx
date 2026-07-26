"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 text-center">
      <div className="space-y-6 max-w-lg animate-fade-in">
        {/* Gruvbox themed badge / code indicator */}
        <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-sm font-semibold tracking-wider">
          404 ERROR
        </div>

        <h1 className="text-6xl sm:text-7xl font-bold font-mono tracking-tight text-foreground">
          Page Not Found
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed font-light">
          The requested page or resource could not be found on this route. You may have typed an incorrect address or the page has moved.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-medium tracking-wide transition-all duration-300 shadow-lg hover:shadow-primary/20"
          >
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Return Home
            </Link>
          </Button>

          <Button
            onClick={() => window.history.back()}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-border text-foreground hover:bg-muted rounded-full px-8 py-6 text-base font-medium tracking-wide transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
