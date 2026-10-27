import { CodeIcon, SealCheckIcon, TrophyIcon } from "@phosphor-icons/react/ssr";
import { achievements, certifications, codingProfiles, hackathonWins } from "@/lib/data";
import { Section, textLink } from "@/components/sections/section";

export function Achievements() {
  return (
    <Section id="achievements" title="Achievements">
      <h3 className="mb-4 flex items-baseline gap-2.5 text-lg font-semibold text-foreground">
        <span className="font-mono text-3xl text-brand">{hackathonWins.length}</span>
        hackathon wins
      </h3>
      <ul className="grid gap-3 sm:grid-cols-2">
        {hackathonWins.map((win) => (
          <li key={win.prize + win.event} className="flex gap-3 rounded-md border border-border p-4">
            <TrophyIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" weight="duotone" />
            <div>
              <p className="font-semibold text-foreground">{win.prize}</p>
              <p className="text-sm text-muted-foreground">{win.event}</p>
            </div>
          </li>
        ))}
      </ul>

      <ul className="mt-10 space-y-6">
        {achievements.map((item) => (
          <li key={item.title} className="grid grid-cols-[4.5rem_1fr] gap-4">
            <span className="font-mono text-lg font-semibold text-brand">{item.metric}</span>
            <div>
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 pl-[5.5rem]">
        {codingProfiles.map((profile) => (
          <a key={profile.label} href={profile.href} target="_blank" rel="noopener noreferrer" className={textLink}>
            <CodeIcon className="h-4 w-4 text-brand" />
            {profile.label}
          </a>
        ))}
      </div>

      <h3 className="mb-3 mt-12 text-lg font-semibold text-foreground">Certifications</h3>
      <ul className="divide-y divide-border/70 border-t border-border/70">
        {certifications.map((cert) => (
          <li key={cert.title} className="flex items-center gap-4 py-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cert.badgeImage}
              alt=""
              loading="lazy"
              className="h-12 w-16 shrink-0 object-contain"
            />
            <div className="flex flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="text-sm text-foreground">
                {cert.title} <span className="text-muted-foreground">· {cert.issuer}</span>
              </p>
              <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" className={textLink}>
                <SealCheckIcon className="h-4 w-4 text-brand" />
                Verify
              </a>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
