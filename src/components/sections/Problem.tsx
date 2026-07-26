import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { problems } from "@/lib/data";

export function Problem() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="The problem"
          title="Manual work doesn't scale with the team."
          description="As teams grow, the number of repetitive handoffs grows faster than headcount ever will."
        />

        <RevealGroup className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border dark:border-border-dark dark:bg-border-dark sm:grid-cols-3">
          {problems.map((problem) => (
            <RevealItem key={problem.title}>
              <div className="h-full bg-background p-8 dark:bg-background-dark">
                <h3 className="text-base font-medium text-primary dark:text-primary-dark">
                  {problem.title}
                </h3>
                <p className="pretty mt-3 text-sm leading-relaxed text-muted dark:text-muted-dark">
                  {problem.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
