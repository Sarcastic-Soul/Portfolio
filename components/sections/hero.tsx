"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, MapPin } from "lucide-react";
import { socialLinks, RESUME_LINK } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";
import { InteractiveQuote } from "@/components/interactive-quote";

export function Hero() {
  const { toast } = useToast();

  const handleDownloadResume = () => {
    window.open(RESUME_LINK, "_blank", "noopener,noreferrer");
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("anishisbusy@gmail.com");
    toast({
      title: "Email Copied!",
      description: "anishisbusy@gmail.com has been copied to your clipboard.",
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 bg-background py-20 lg:py-0">
      <div className="container mx-auto max-w-7xl animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
          {/* Left Column: Identity & Contact Details */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-8 w-full">
            {/* --- Profile Image Section --- */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56">
              <img
                src={`./image.png`}
                alt="Anish Kumar"
                className="w-full h-full object-cover rounded-full border-4 border-primary shadow-xl"
              />
            </div>

            <div className="space-y-3 w-full">
              <h2 className="text-lg sm:text-xl font-mono tracking-widest text-primary uppercase">
                Full Stack Developer
              </h2>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-none">
                ANISH KUMAR
              </h1>
            </div>

            {/* Location & Email */}
            <div className="space-y-2 pt-2 flex flex-col items-center lg:items-start">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-lg">Raipur, India</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <button
                  onClick={handleCopyEmail}
                  className="text-lg hover:text-primary transition-colors text-center lg:text-left"
                >
                  anishisbusy@gmail.com
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={link.label === "Email" ? handleCopyEmail : undefined}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel={
                    link.label === "Email" ? undefined : "noopener noreferrer"
                  }
                  className="flex items-center space-x-2 px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors duration-300 text-muted-foreground bg-secondary/30"
                >
                  <link.icon className="h-4 w-4" />
                  <span className="text-sm">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: About, Quote & Resume Button */}
          <div className="space-y-10 lg:pl-2">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground border-b border-border pb-2 inline-block">
                About Me
              </h3>
              <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed font-light">
                <p>
                  I&apos;m a dedicated B.Tech student at IIIT Naya Raipur focused on building scalable systems from scratch with minimal third-party dependencies.
                </p>
                <p>
                  I practice pragmatic engineering—building high-performance architectures designed precisely to requirement, avoiding bloated dependencies and unnecessary over-engineering.
                </p>
              </div>
            </div>

            {/* Interactive Motto & Philosophy Quote */}
            <InteractiveQuote />

            <div className="pt-2">
              <Button
                onClick={handleDownloadResume}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-lg font-medium tracking-wide transition-all duration-300 shadow-lg hover:shadow-primary/20"
              >
                <ExternalLink className="mr-3 h-5 w-5" />
                View Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
