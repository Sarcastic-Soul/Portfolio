import { FileTextIcon } from "@phosphor-icons/react/ssr";
import { EMAIL, RESUME_LINK, socialLinks } from "@/lib/data";
import { Section, textLink } from "@/components/sections/section";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-xl text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
        Hiring for a software engineering role? I would like to hear about it.
      </p>
      <a
        href={`mailto:${EMAIL}`}
        className="mt-6 inline-block font-mono text-lg text-brand underline decoration-brand/40 underline-offset-4 transition-colors hover:decoration-brand"
      >
        {EMAIL}
      </a>
      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
        {socialLinks
          .filter((link) => link.label !== "Email")
          .map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className={textLink}>
              <link.icon className="h-4 w-4 text-brand" />
              {link.label}
            </a>
          ))}
        <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer" className={textLink}>
          <FileTextIcon className="h-4 w-4 text-brand" />
          Resume (PDF)
        </a>
      </div>
    </Section>
  );
}
