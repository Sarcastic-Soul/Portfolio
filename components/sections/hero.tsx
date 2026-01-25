"use client";

import { Button } from "@/components/ui/button";
import { Download, Mail, MapPin } from "lucide-react";
import { socialLinks } from "@/lib/data";

export function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = `./Anish_Kumar_Resume.pdf`;
    link.download = "Anish_Kumar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 bg-background py-20 lg:py-0">
      <div className="container mx-auto max-w-7xl animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start lg:items-center">
          {/* Left Column: Identity */}
          <div className="space-y-8">
            {/* --- NEW: Profile Image Section --- */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56">
              <img
                src={`./image.png`}
                alt="Anish Kumar"
                className="w-full h-full object-cover rounded-full border-4 border-primary shadow-xl"
              />
            </div>
            {/* ---------------------------------- */}

            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-mono tracking-widest text-primary uppercase">
                Full Stack Developer
              </h2>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-none">
                ANISH KUMAR
              </h1>
            </div>

            <p className="text-xl sm:text-2xl font-light text-muted-foreground max-w-md leading-relaxed">
              Crafting digital experiences with precision, purpose, and clean
              code.
            </p>

            <div className="pt-4">
              <Button
                onClick={handleDownloadResume}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-lg font-medium tracking-wide transition-all duration-300 shadow-lg hover:shadow-primary/20"
              >
                <Download className="mr-3 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Column: About & Contact Details */}
          <div className="space-y-10 lg:pl-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground border-b border-border pb-2 inline-block">
                About Me
              </h3>
              <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed font-light">
                <p>
                  I&apos;m a dedicated student with over 2 years of experience
                  studying and building web development projects. My journey has
                  been driven by curiosity and a commitment to learning modern
                  technologies.
                </p>
                <p>
                  I focus on writing clean, maintainable code and crafting user
                  experiences that are both intuitive and visually appealing.
                  Each project helps me grow and refine my skills in web
                  development.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-lg">Raipur, India</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href="mailto:anishisbusy@gmail.com"
                    className="text-lg hover:text-primary transition-colors"
                  >
                    anishisbusy@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label === "Email" ? undefined : "_blank"}
                    rel={
                      link.label === "Email" ? undefined : "noopener noreferrer"
                    }
                    className="flex items-center space-x-2 px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors duration-300 text-muted-foreground bg-secondary/30"
                  >
                    <link.icon className="h-5 w-5" />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
