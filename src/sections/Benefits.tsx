import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { benefits } from "@/lib/data";

export function Benefits() {
  return (
    <section className="bg-primary py-24 text-white dark:bg-secondary-dark sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why it matters"
          title="Less time spent moving information. More time spent using it."
          align="center"
          className="mx-auto [&_h2]:text-white [&_p]:text-white/60"
        />

        <RevealGroup className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {benefits.map((benefit) => (
            <RevealItem key={benefit.label}>
              <div className="h-full bg-primary p-8 dark:bg-secondary-dark">
                <p className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
                  {benefit.stat}
                </p>
                <p className="mt-2 text-sm font-medium text-white/70">
                  {benefit.label}
                </p>
                <p className="pretty mt-4 text-sm leading-relaxed text-white/50">
                  {benefit.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
