import { ArrowUpRightIcon, MapPinIcon } from "@phosphor-icons/react/ssr";
import { hackathonWins, socialLinks, RESUME_LINK } from "@/lib/data";

const highlights = [
  { value: String(hackathonWins.length), label: "hackathon wins, across Devpost hackathons and Hacktoberfest x DEV" },
  { value: "2", label: "internships, at Samsung PRISM and Aparsoft" },
  { value: "600+", label: "DSA problems solved on LeetCode and Codeforces" },
];

export function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="pb-14 pt-12 sm:pb-20 sm:pt-20">
      <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl space-y-5">
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPinIcon className="h-4 w-4 text-brand" />
            Raipur, India · open to full-time roles
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Anish Kumar
          </h1>
          <p className="text-xl text-foreground sm:text-2xl">
            Backend and full-stack developer.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            B.Tech student at IIIT Naya Raipur. I build backend systems and full-stack apps, from
            APIs and databases to AI agents and the cloud setup they run on. I care about code that
            stays fast and reliable under real load, and most of my work is in Java, TypeScript and
            Python.
          </p>
        </div>

        {/* Pre-scaled copies of /image.png. Letting the browser shrink the
            1792px original in one step made the art look jagged. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/avatar-256.webp"
          srcSet="/avatar-256.webp 256w, /avatar-512.webp 512w"
          sizes="(min-width: 640px) 160px, 112px"
          width={160}
          height={160}
          alt="Portrait of Anish Kumar"
          fetchPriority="high"
          className="h-28 w-28 shrink-0 rounded-full border border-border object-cover sm:h-40 sm:w-40"
        />
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-2.5">
        <a
          href={RESUME_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center gap-2 rounded-md bg-foreground px-4 text-background transition-colors hover:bg-brand"
        >
          View resume
          <ArrowUpRightIcon className="h-4 w-4" />
        </a>
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.label === "Email" ? undefined : "_blank"}
            rel={link.label === "Email" ? undefined : "noopener noreferrer"}
            className="inline-flex h-11 items-center gap-2 rounded-md border border-border px-4 text-sm text-foreground transition-colors hover:border-foreground"
          >
            <link.icon className="h-4 w-4" />
            {link.label}
          </a>
        ))}
      </div>

      <ul className="mt-12 grid gap-6 border-t border-border/70 pt-8 sm:grid-cols-3">
        {highlights.map((item) => (
          <li key={item.label} className="space-y-1">
            <p className="font-mono text-3xl font-semibold text-brand">{item.value}</p>
            <p className="text-sm leading-snug text-muted-foreground">{item.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
