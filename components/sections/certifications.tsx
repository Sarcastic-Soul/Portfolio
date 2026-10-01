import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import { certifications } from "@/lib/data";
import { SectionHeading } from "@/components/sections/section-heading";

export function Certifications() {
  return (
    <section id="certifications" className="px-4 pb-24 pt-20 sm:px-6 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading command="ls ~/certs" title="Certifications" />

        <ul className="border-t border-border">
          {certifications.map((item) => (
            <li
              key={item.title}
              className="grid grid-cols-[5.5rem_1fr] items-center gap-5 border-b border-border/60 py-6 sm:grid-cols-[8rem_1fr_auto] sm:gap-8"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.badgeImage}
                alt=""
                loading="lazy"
                className="h-16 w-full object-contain sm:h-20"
              />
              <div className="space-y-1.5">
                <p className="text-xs text-muted-foreground">{item.category.toLowerCase()}</p>
                <h3 className="text-base font-bold text-foreground sm:text-lg">{item.title}</h3>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
              {item.verifyUrl && (
                <a
                  href={item.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-start-2 inline-flex w-fit items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm text-foreground transition-colors hover:border-foreground sm:col-start-auto"
                >
                  {item.category === "Internship" ? "View" : "Verify"}
                  <ArrowUpRightIcon className="h-4 w-4" />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
