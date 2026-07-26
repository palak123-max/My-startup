"use client";

import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { features } from "@/lib/data";
import { motion } from "framer-motion";
import {
  GitBranch,
  LineChart,
  MailCheck,
  PlugZap,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Workflow,
  MailCheck,
  GitBranch,
  ShieldCheck,
  PlugZap,
  LineChart,
};

export function Features() {
  return (
    <section id="product" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Product"
          title="Everything a workflow needs to run itself."
          description="Cadence combines the parts of automation that usually live in five different tools into one system your team can trust."
        />

        <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = icons[feature.icon];
            return (
              <RevealItem key={feature.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="h-full rounded-2xl border border-border bg-background p-7 dark:border-border-dark dark:bg-background-dark"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft dark:bg-accent/15">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <h3 className="mt-5 text-base font-medium text-primary dark:text-primary-dark">
                    {feature.title}
                  </h3>
                  <p className="pretty mt-2.5 text-sm leading-relaxed text-muted dark:text-muted-dark">
                    {feature.description}
                  </p>
                </motion.div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
