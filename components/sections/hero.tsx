"use client";

import { ArrowUpRightIcon, EnvelopeSimpleIcon, MapPinIcon } from "@phosphor-icons/react/ssr";
import { socialLinks, RESUME_LINK } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";
import { InteractiveQuote } from "@/components/interactive-quote";

export function Hero() {
  const { toast } = useToast();

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("anishisbusy@gmail.com");
    toast({
      title: "Email copied",
      description: "anishisbusy@gmail.com is on your clipboard.",
    });
  };

  return (
    <section className="flex min-h-screen items-center bg-background px-4 pb-16 pt-28 sm:px-6 lg:px-12 lg:pb-12">
      <div className="container mx-auto max-w-7xl animate-fade-in">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          {/* Identity */}
          <div className="flex w-full flex-col items-start space-y-8 lg:col-span-6">
            <img
              src={`./image.png`}
              alt="Anish Kumar"
              className="h-32 w-32 rounded-md border border-border object-cover sm:h-40 sm:w-40"
            />

            <div className="w-full space-y-4">
              <p className="text-sm text-muted-foreground">
                <span className="text-brand">$</span> whoami
              </p>
              <h1 className="cursor-block text-5xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
                Anish
                <br />
                Kumar
              </h1>
              <p className="text-lg text-foreground sm:text-xl">
                Full stack &amp; systems developer
              </p>
            </div>

            <div className="flex flex-col gap-2 text-muted-foreground">
              <div className="flex items-center gap-3">
                <MapPinIcon className="h-5 w-5 shrink-0 text-brand" />
                <span>Raipur, India</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeSimpleIcon className="h-5 w-5 shrink-0 text-brand" />
                <button
                  onClick={handleCopyEmail}
                  className="text-left underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-brand"
                  title="Copy email"
                >
                  anishisbusy@gmail.com
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={link.label === "Email" ? handleCopyEmail : undefined}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                  className="flex items-center gap-2 rounded-md border border-border px-3.5 py-2 text-sm text-muted-foreground transition-colors duration-200 hover:border-foreground hover:text-foreground"
                >
                  <link.icon className="h-4 w-4" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* About */}
          <div className="space-y-10 lg:col-span-6">
            <div className="space-y-5">
              <h2 className="text-sm font-normal uppercase tracking-widest text-muted-foreground">
                About
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-foreground sm:text-lg">
                <p>
                  B.Tech student at IIIT Naya Raipur. I like building systems from scratch with as
                  few third-party dependencies as I can get away with: a Redis-compatible server in
                  plain Java, a terminal coding agent, backends that autoscale under load.
                </p>
                <p className="text-muted-foreground">
                  I build to the requirement. Fast where it matters, simple everywhere else, and no
                  extra layers nobody asked for.
                </p>
              </div>
            </div>

            <InteractiveQuote />

            <a
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-between rounded-md bg-foreground px-6 py-5 text-lg text-background transition-colors duration-200 hover:bg-brand"
            >
              <span>View resume</span>
              <ArrowUpRightIcon className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
