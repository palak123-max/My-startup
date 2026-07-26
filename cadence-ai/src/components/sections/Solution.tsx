import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { solutionPoints } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export function Solution() {
  return (
    <section className="bg-secondary py-24 dark:bg-secondary-dark sm:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="The approach"
              title="Automation that understands the task, not just the trigger."
              description="Cadence was built to handle the part of automation everyone else stops short of: the judgment call in the middle."
            />
          </div>

          <div className="flex flex-col gap-10">
            {solutionPoints.map((point, i) => (
              <Reveal key={point.title} delay={i * 0.08}>
                <div className="flex gap-4">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-success"
                  />
                  <div>
                    <h3 className="text-base font-medium text-primary dark:text-primary-dark">
                      {point.title}
                    </h3>
                    <p className="pretty mt-2 text-sm leading-relaxed text-muted dark:text-muted-dark">
                      {point.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
