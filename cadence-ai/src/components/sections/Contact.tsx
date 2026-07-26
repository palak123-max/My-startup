"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/data";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { type FormEvent, useState } from "react";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Cadence AI — message from ${name || "website visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${site.founderEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 rounded-3xl bg-primary p-8 text-white dark:bg-secondary-dark sm:p-12 lg:grid-cols-2 lg:p-16">
          <div>
            <Reveal>
              <h2 className="balance text-3xl font-medium tracking-tight sm:text-4xl">
                Let's automate the first workflow together.
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="pretty mt-4 max-w-md text-white/60">
                Tell us about the task your team repeats most, and we'll show
                you exactly how Cadence would handle it.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-8 flex flex-col gap-4">
                <a
                  href={`mailto:${site.founderEmail}`}
                  className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-white"
                >
                  <Mail size={16} />
                  {site.founderEmail}
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-white"
                >
                  <Linkedin size={16} />
                  Palak Bubna on LinkedIn
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs text-white/60">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs text-white/60">
                    Work email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs text-white/60">
                  What would you like to automate?
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="resize-none rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none"
                  placeholder="Every week, we manually compile a report from four different spreadsheets..."
                />
              </div>
              <Button
                type="submit"
                variant="secondary"
                className="mt-1 justify-center bg-white text-primary hover:bg-white/90"
              >
                Send message
                <ArrowRight size={15} />
              </Button>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
