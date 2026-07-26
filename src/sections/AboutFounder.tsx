import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { founder } from "@/lib/data";
import { Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export function AboutFounder() {
  return (
    <section id="founder" className="py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-14 rounded-3xl border border-border bg-secondary p-8 dark:border-border-dark dark:bg-secondary-dark sm:p-12 lg:grid-cols-[0.8fr_1.2fr] lg:p-16">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-2xl bg-background dark:bg-background-dark">
              <Image
                src={founder.image}
                alt={`${founder.name}, ${founder.role} of Cadence AI`}
                fill
                sizes="280px"
                className="object-cover"
                priority={false}
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                About the founder
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="balance mt-4 text-3xl font-medium tracking-tight text-primary dark:text-primary-dark sm:text-4xl">
                {founder.name}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-1 text-sm font-medium text-muted dark:text-muted-dark">
                {founder.role}, Cadence AI
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="pretty mt-6 max-w-xl text-base leading-relaxed text-text dark:text-text-dark">
                {founder.bio}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:border-accent hover:text-accent dark:border-border-dark dark:bg-background-dark dark:text-primary-dark"
                >
                  <Linkedin size={15} />
                  Connect on LinkedIn
                </a>
                <a
                  href={`mailto:${founder.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:border-accent hover:text-accent dark:border-border-dark dark:bg-background-dark dark:text-primary-dark"
                >
                  <Mail size={15} />
                  {founder.email}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
