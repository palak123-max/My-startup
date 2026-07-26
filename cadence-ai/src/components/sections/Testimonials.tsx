import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export function Testimonials() {
  return (
    <section className="bg-secondary py-24 dark:bg-secondary-dark sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="From the field"
          title="What operations teams say after switching."
          align="center"
          className="mx-auto"
        />

        <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2">
          {testimonials.map((t) => (
            <RevealItem key={t.name}>
              <figure className="h-full rounded-2xl border border-border bg-background p-8 dark:border-border-dark dark:bg-background-dark">
                <blockquote className="pretty text-[15px] leading-relaxed text-text dark:text-text-dark">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-xs font-medium text-accent dark:bg-accent/15">
                    {initials(t.name)}
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-primary dark:text-primary-dark">
                      {t.name}
                    </span>
                    <span className="block text-xs text-muted dark:text-muted-dark">
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
