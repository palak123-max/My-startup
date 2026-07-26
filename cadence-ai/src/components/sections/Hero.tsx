"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { ArrowRight, Sparkle } from "lucide-react";

const nodes = [
  { x: 40, y: 140, label: "New lead", delay: 0 },
  { x: 220, y: 60, label: "Enrich data", delay: 0.15 },
  { x: 220, y: 220, label: "Check owner", delay: 0.15 },
  { x: 400, y: 140, label: "Notify on Slack", delay: 0.3 },
];

const paths = [
  "M64,140 C120,140 150,90 220,84",
  "M64,140 C120,140 150,196 220,200",
  "M244,84 C300,84 330,120 380,138",
  "M244,200 C300,200 330,150 380,142",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs font-medium text-text dark:border-border-dark dark:bg-secondary-dark/60 dark:text-text-dark"
            >
              <Sparkle size={13} className="text-accent" />
              Now supporting multi-step approvals
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="balance text-[2.6rem] font-medium leading-[1.08] tracking-tight text-primary dark:text-primary-dark sm:text-5xl lg:text-[3.4rem]"
            >
              Your team's busywork,
              <br />
              running on its own.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="pretty mt-6 max-w-lg text-lg leading-relaxed text-muted dark:text-muted-dark"
            >
              Cadence turns the repetitive, multi-step work your team does by
              hand into automations that run themselves — without a single
              line of code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Button href="#contact" variant="primary">
                Get started free
                <ArrowRight size={15} />
              </Button>
              <Button href="#how-it-works" variant="secondary">
                See how it works
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-6 text-xs text-muted dark:text-muted-dark"
            >
              No credit card required · Live in under 10 minutes
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-2xl border border-border bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_24px_48px_-24px_rgba(17,24,39,0.16)] dark:border-border-dark dark:bg-[#111116]"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-medium text-muted dark:text-muted-dark">
                  Workflow · Lead routing
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-[11px] font-medium text-success">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" />
                  Live
                </span>
              </div>

              <svg
                viewBox="0 0 440 260"
                className="h-auto w-full"
                aria-hidden="true"
              >
                {paths.map((d, i) => (
                  <motion.path
                    key={d}
                    d={d}
                    stroke="#5B5BD6"
                    strokeWidth="1.6"
                    strokeDasharray="4 6"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: 1,
                      opacity: 0.55,
                      strokeDashoffset: [0, -20],
                    }}
                    transition={{
                      pathLength: { duration: 1, delay: 0.6 + i * 0.12 },
                      opacity: { duration: 0.6, delay: 0.6 + i * 0.12 },
                      strokeDashoffset: {
                        duration: 1.6,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                  />
                ))}
                {nodes.map((n) => (
                  <g key={n.label}>
                    <motion.circle
                      cx={n.x}
                      cy={n.y}
                      r="22"
                      className="fill-secondary dark:fill-secondary-dark"
                      stroke="#E5E5EA"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.45, delay: n.delay }}
                    />
                    <motion.circle
                      cx={n.x}
                      cy={n.y}
                      r="4"
                      fill="#5B5BD6"
                      initial={{ scale: 0 }}
                      animate={{ scale: [1, 1.35, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: n.delay + 0.8,
                      }}
                    />
                    <text
                      x={n.x}
                      y={n.y + 40}
                      textAnchor="middle"
                      className="fill-text text-[10px] font-medium dark:fill-text-dark"
                    >
                      {n.label}
                    </text>
                  </g>
                ))}
              </svg>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -right-4 -top-4 hidden rounded-xl border border-border bg-white px-4 py-3 shadow-lg dark:border-border-dark dark:bg-[#111116] sm:block"
            >
              <p className="text-[11px] text-muted dark:text-muted-dark">This run</p>
              <p className="text-sm font-medium text-primary dark:text-primary-dark">
                4 steps · 1.2s
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
