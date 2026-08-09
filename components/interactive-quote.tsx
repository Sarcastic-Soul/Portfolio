"use client";

import { useState } from "react";
import { Quote, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function InteractiveQuote() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const quoteText =
    '"Jack of all trades, master of none, though oftentimes better than master of one"';

  const handleCopy = () => {
    navigator.clipboard.writeText(quoteText);
    setCopied(true);
    toast({
      title: "Motto Copied!",
      description: "Quote copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={handleCopy}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-card/80 via-secondary/30 to-card/90 p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/15"
    >
      {/* Animated Ambient Glow Backdrop */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-50" />
      <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-accent/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-50" />

      {/* Copied Indicator */}
      {copied && (
        <div className="absolute top-4 right-4 flex items-center gap-1 text-xs font-mono text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30 animate-fade-in">
          <Check className="w-3.5 h-3.5 text-emerald-500" />
          <span>Copied!</span>
        </div>
      )}

      {/* Quote Content */}
      <div className="relative z-10 flex gap-4 items-start">
        <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-primary/40 group-hover:text-primary shrink-0 transition-colors duration-300 -scale-x-100 mt-1" />
        <div className="space-y-2">
          <p className="text-base sm:text-lg lg:text-xl font-light italic leading-relaxed text-foreground tracking-wide">
            &ldquo;Jack of all trades, master of none,{" "}
            <span className="not-italic font-semibold text-primary underline decoration-primary/30 underline-offset-4 group-hover:decoration-primary transition-all">
              though oftentimes better than master of one
            </span>
            &rdquo;
          </p>
          <p className="text-xs font-mono text-muted-foreground pt-1">
            — Traditional Full Proverb
          </p>
        </div>
      </div>
    </div>
  );
}
