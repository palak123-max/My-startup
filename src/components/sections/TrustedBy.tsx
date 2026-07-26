import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { industries } from "@/lib/data";

export function TrustedBy() {
  return (
    <section className="border-y border-border py-12 dark:border-border-dark">
      <Container>
        <Reveal>
          <p className="text-center text-xs font-medium uppercase tracking-[0.14em] text-muted dark:text-muted-dark">
            Built for operations teams across
          </p>
        </Reveal>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {industries.map((name, i) => (
            <Reveal key={name} delay={i * 0.04}>
              <span className="text-sm font-medium text-primary/70 dark:text-primary-dark/70">
                {name}
              </span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
