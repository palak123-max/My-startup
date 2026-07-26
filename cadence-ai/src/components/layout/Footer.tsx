import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { navLinks, site } from "@/lib/data";
import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const footerColumns = [
  {
    title: "Product",
    links: navLinks,
  },
  {
    title: "Company",
    links: [
      { label: "About the founder", href: "#founder" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary dark:border-border-dark dark:bg-secondary-dark">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2">
            <Logo />
            <p className="pretty mt-4 max-w-xs text-sm leading-relaxed text-muted dark:text-muted-dark">
              {site.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={`mailto:${site.founderEmail}`}
                aria-label="Email Cadence AI"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-primary transition-colors hover:border-accent hover:text-accent dark:border-border-dark dark:text-primary-dark"
              >
                <Mail size={16} />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cadence AI on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-primary transition-colors hover:border-accent hover:text-accent dark:border-border-dark dark:text-primary-dark"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-medium text-primary dark:text-primary-dark">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-accent dark:text-muted-dark"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted dark:border-border-dark dark:text-muted-dark sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} Cadence AI. All rights reserved.</p>
          <p>Built for operations teams who'd rather build than babysit busywork.</p>
        </div>
      </Container>
    </footer>
  );
}
