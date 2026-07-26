import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pricingPlans } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Straightforward pricing that scales with you."
          description="Start free on one workflow. Upgrade when your team is ready to automate everywhere."
          align="center"
          className="mx-auto"
        />

        <RevealGroup className="mt-16 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <RevealItem key={plan.name}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-2xl border p-8",
                  plan.highlighted
                    ? "border-accent bg-primary text-white dark:bg-secondary-dark"
                    : "border-border bg-background dark:border-border-dark dark:bg-background-dark"
                )}
              >
                <h3
                  className={cn(
                    "text-sm font-medium",
                    plan.highlighted
                      ? "text-white"
                      : "text-primary dark:text-primary-dark"
                  )}
                >
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span
                    className={cn(
                      "text-4xl font-medium tracking-tight",
                      plan.highlighted
                        ? "text-white"
                        : "text-primary dark:text-primary-dark"
                    )}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={cn(
                      "text-sm",
                      plan.highlighted ? "text-white/60" : "text-muted dark:text-muted-dark"
                    )}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={cn(
                    "pretty mt-3 text-sm leading-relaxed",
                    plan.highlighted ? "text-white/70" : "text-muted dark:text-muted-dark"
                  )}
                >
                  {plan.description}
                </p>

                <ul className="mt-7 flex flex-1 flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check
                        size={16}
                        className={cn(
                          "mt-0.5 shrink-0",
                          plan.highlighted ? "text-white" : "text-success"
                        )}
                      />
                      <span
                        className={
                          plan.highlighted ? "text-white/85" : "text-text dark:text-text-dark"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    href="#contact"
                    variant={plan.highlighted ? "secondary" : "primary"}
                    className={cn(
                      "w-full",
                      plan.highlighted && "bg-white text-primary hover:bg-white/90"
                    )}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
