"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "@phosphor-icons/react/ssr";
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
      title: "Motto copied",
      description: "Quote copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="group card-grain relative block w-full border-l-2 border-brand bg-card/60 py-5 pl-6 pr-12 text-left transition-colors duration-200 hover:bg-card"
      title="Copy motto"
    >
      <span className="absolute right-4 top-5 text-muted-foreground transition-colors group-hover:text-foreground">
        {copied ? <CheckIcon className="h-4 w-4 text-term-ok" /> : <CopyIcon className="h-4 w-4" />}
      </span>
      <span className="block text-base leading-relaxed text-muted-foreground sm:text-lg">
        &ldquo;Jack of all trades, master of none,{" "}
        <span className="text-foreground">though oftentimes better than master of one</span>
        &rdquo;
      </span>
      <span className="block pt-2 text-xs text-muted-foreground">— the full proverb</span>
    </button>
  );
}
