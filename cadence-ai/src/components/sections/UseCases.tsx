import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useCases } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export function UseCases() {
  return (
    <section id="use-cases" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Use cases"
          title="Built to fit how your team already works."
          description="A few of the workflows teams put on autopilot in their first week."
        />

        <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2">
          {useCases.map((useCase) => (
            <RevealItem key={useCase.title}>
              <div className="group h-full rounded-2xl border border-border p-8 transition-colors hover:border-accent/40 dark:border-border-dark">
                <span className="text-xs font-medium uppercase tracking-[0.1em] text-accent">
                  {useCase.role}
                </span>
                <h3 className="pretty mt-3 text-lg font-medium text-primary dark:text-primary-dark">
                  {useCase.title}
                </h3>
                <p className="pretty mt-3 text-sm leading-relaxed text-muted dark:text-muted-dark">
                  {useCase.description}
                </p>
                <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-success">
                  {useCase.outcome}
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
