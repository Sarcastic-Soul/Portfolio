"use client";

import { useState } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ProjectImage({ src, alt, className = "" }: ProjectImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative aspect-video w-full bg-secondary/30 overflow-hidden ${className}`}>
      {!isLoaded && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-none bg-muted-foreground/20" />
      )}
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        unoptimized
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
        className={`w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      />
    </div>
  );
}
