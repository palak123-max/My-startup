import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { steps } from "@/lib/data";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From first connection to first automation, in one sitting."
          align="center"
          className="mx-auto"
        />

        <div className="relative mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div
            className="absolute top-6 hidden h-px w-full bg-border dark:bg-border-dark lg:block"
            aria-hidden="true"
          />
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <div className="relative">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-sm font-medium text-accent dark:border-border-dark dark:bg-background-dark">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="mt-5 text-xs font-medium uppercase tracking-[0.1em] text-accent">
                  {step.label}
                </p>
                <h3 className="pretty mt-2 text-base font-medium text-primary dark:text-primary-dark">
                  {step.title}
                </h3>
                <p className="pretty mt-2.5 text-sm leading-relaxed text-muted dark:text-muted-dark">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
