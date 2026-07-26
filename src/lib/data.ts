export const site = {
  name: "Cadence AI",
  tagline: "The operations layer for teams that move fast.",
  description:
    "Cadence turns the repetitive, multi-step work your team does by hand — inbox triage, CRM updates, report prep, follow-ups — into automations that run themselves, without a single line of code.",
  url: "https://cadence-ai.example.com",
  email: "hello@cadence-ai.example.com",
  founderEmail: "palakbubna603@gmail.com",
  linkedin: "https://www.linkedin.com/in/palak-bubna-661a2a380",
};

export const navLinks = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const industries = [
  "Revenue Operations",
  "Customer Support",
  "Finance & Billing",
  "People Operations",
  "Agencies & Consultancies",
  "Founders & Small Teams",
];

export const problems = [
  {
    title: "Work gets stuck between tools",
    description:
      "A lead comes in through a form, someone has to copy it into the CRM, notify sales on Slack, and schedule a follow-up. Every handoff is a place things get dropped.",
  },
  {
    title: "The same steps, every single day",
    description:
      "Weekly reports, invoice reminders, status updates, onboarding checklists — the steps rarely change, but someone still has to do them manually, every time.",
  },
  {
    title: "Automation tools stop at 'if this, then that'",
    description:
      "Most automation breaks the moment a task needs judgment — reading an email, deciding what a customer meant, choosing the right next step. So teams give up and do it by hand.",
  },
];

export const solutionPoints = [
  {
    title: "Understands the task, not just the trigger",
    description:
      "Cadence reads context the way a teammate would — an email thread, a support ticket, a spreadsheet row — and decides what to do next, instead of waiting for a rigid rule to match.",
  },
  {
    title: "Works inside the tools you already use",
    description:
      "No migration, no new inbox, no separate dashboard your team forgets to check. Cadence connects to Gmail, Slack, Notion, Sheets, and your CRM directly.",
  },
  {
    title: "Shows its work",
    description:
      "Every action Cadence takes is logged in plain language, with the option to require approval before anything is sent, updated, or changed.",
  },
];

export type Feature = {
  icon:
    | "Workflow"
    | "MailCheck"
    | "GitBranch"
    | "ShieldCheck"
    | "PlugZap"
    | "LineChart";
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: "Workflow",
    title: "Multi-step automations",
    description:
      "Chain together reading, deciding, and doing — Cadence handles workflows that span several tools and several decisions, not just a single trigger.",
  },
  {
    icon: "MailCheck",
    title: "Inbox & ticket triage",
    description:
      "Incoming messages get read, categorized, and routed — or answered directly using your existing docs and past replies as reference.",
  },
  {
    icon: "GitBranch",
    title: "Conditional logic, in plain English",
    description:
      "Describe the exceptions the way you'd explain them to a new hire. Cadence turns that into a workflow it can actually run.",
  },
  {
    icon: "PlugZap",
    title: "Native integrations",
    description:
      "Gmail, Slack, Notion, Google Sheets, HubSpot, and Airtable connect in minutes. Custom tools connect through a simple webhook.",
  },
  {
    icon: "ShieldCheck",
    title: "Approval checkpoints",
    description:
      "Set which actions run automatically and which ones wait for a human sign-off — per workflow, per step, or per data sensitivity.",
  },
  {
    icon: "LineChart",
    title: "A full audit trail",
    description:
      "Every run is logged with the reasoning behind it, so you can see exactly why a decision was made, not just what happened.",
  },
];

export const steps = [
  {
    label: "Connect",
    title: "Link the tools your team already runs on",
    description:
      "Authorize Cadence to read and act inside Gmail, Slack, your CRM, or your spreadsheets. Access is scoped to exactly what each workflow needs.",
  },
  {
    label: "Describe",
    title: "Tell Cadence the workflow, in your own words",
    description:
      "\"When a demo request comes in, add them to the CRM, tag their industry, and notify the right rep on Slack.\" That's the whole setup.",
  },
  {
    label: "Review",
    title: "Watch it run on real examples first",
    description:
      "Cadence shows you exactly what it would do on past data before it ever touches a live workflow, so you can adjust before turning it on.",
  },
  {
    label: "Automate",
    title: "Let it run, with as much oversight as you want",
    description:
      "Turn on full automation, or keep an approval step for anything sensitive. Either way, you get a clear log of every action taken.",
  },
];

export const benefits = [
  {
    stat: "12+ hrs",
    label: "saved per person, per week",
    description:
      "Teams using Cadence report getting a working day back — time that used to go into copy-pasting between tools and chasing status updates.",
  },
  {
    stat: "< 10 min",
    label: "to launch a first workflow",
    description:
      "No implementation project. Describe the task, review a test run, and turn it on the same afternoon.",
  },
  {
    stat: "100%",
    label: "of actions logged and explainable",
    description:
      "Nothing runs silently. Every automated action comes with a plain-language reason, so trust builds instead of erodes.",
  },
];

export type UseCase = {
  role: string;
  title: string;
  description: string;
  outcome: string;
};

export const useCases: UseCase[] = [
  {
    role: "Sales Operations",
    title: "Lead intake to CRM, without the copy-paste",
    description:
      "New leads from forms, calls, and inbound emails are parsed, enriched, and logged in your CRM with the right owner and priority assigned automatically.",
    outcome: "Rep follow-up time dropped from hours to minutes.",
  },
  {
    role: "Customer Support",
    title: "First response and routing on autopilot",
    description:
      "Incoming tickets are categorized, matched against your help docs for an instant answer, or routed to the right person with full context attached.",
    outcome: "First response time cut by more than half.",
  },
  {
    role: "Finance",
    title: "Invoice follow-ups that send themselves",
    description:
      "Overdue invoices are detected automatically, and reminder emails go out on the schedule you set — with a human review step before anything is sent.",
    outcome: "Days sales outstanding improved within the first month.",
  },
  {
    role: "People Operations",
    title: "Onboarding checklists that actually get done",
    description:
      "New hire paperwork, account provisioning requests, and welcome messages fire on a schedule tied to each person's start date.",
    outcome: "Zero missed onboarding steps since rollout.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "We tried three different automation tools before this. The difference is that Cadence actually reads the email and decides what matters — it doesn't just move data around.",
    name: "Aarav Mehta",
    role: "Head of Revenue Operations",
  },
  {
    quote:
      "Our support queue used to back up every Monday morning. Now tickets are triaged before anyone's even logged in for the day.",
    name: "Sana Kapoor",
    role: "Customer Support Lead",
  },
  {
    quote:
      "I was skeptical about anything touching our invoices without a person double-checking. The approval step is what got our finance team comfortable.",
    name: "Devraj Singh",
    role: "Finance Manager",
  },
  {
    quote:
      "Setup took one afternoon. I described the workflow the way I'd explain it to a new hire, and it just worked on the first test run.",
    name: "Meera Iyer",
    role: "Operations Lead",
  },
];

export type PricingPlan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    description: "For individuals trying Cadence on a single workflow.",
    features: [
      "1 active workflow",
      "2 tool connections",
      "100 automated actions / month",
      "7-day run history",
      "Community support",
    ],
    cta: "Start for free",
  },
  {
    name: "Team",
    price: "$49",
    period: "/user / month",
    description: "For teams automating across departments.",
    features: [
      "Unlimited workflows",
      "All native integrations",
      "10,000 automated actions / month",
      "Unlimited run history",
      "Approval checkpoints",
      "Priority support",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with custom security and scale needs.",
    features: [
      "Everything in Team",
      "SSO & SCIM provisioning",
      "Custom data retention",
      "Dedicated onboarding",
      "SLA-backed support",
      "Private deployment options",
    ],
    cta: "Talk to us",
  },
];

export const faqs = [
  {
    question: "What can Cadence actually automate?",
    answer:
      "Any multi-step task that involves reading information from one place and acting in another — routing leads, triaging tickets, updating records, sending follow-ups, compiling reports. If a human can do it in a consistent way, Cadence can too.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "No. Workflows are described in plain language and refined through a visual review step. Engineering teams can extend workflows with custom webhooks, but it isn't required to get started.",
  },
  {
    question: "What happens if Cadence makes a mistake?",
    answer:
      "You control how much autonomy each workflow has. Sensitive actions — sending an external email, changing a billing record — can require your approval before they run. Every action is logged and explainable.",
  },
  {
    question: "Which tools does Cadence connect to?",
    answer:
      "Gmail, Google Sheets, Slack, Notion, HubSpot, and Airtable are supported natively today, with new integrations added regularly. Any tool with a webhook or API can be connected directly.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Data is encrypted in transit and at rest. Access to each connected tool is scoped to only what a given workflow needs, and you can revoke a connection at any time. Enterprise plans support SOC 2 compliance and data residency requirements.",
  },
  {
    question: "Can I cancel at any time?",
    answer:
      "Yes. There are no long-term contracts on the Starter or Team plans, and you can downgrade or cancel from your account settings whenever you like.",
  },
];

export const founder = {
  name: "Palak Bubna",
  role: "Founder & CEO",
  bio: "Palak founded Cadence AI after spending too many hours watching operations teams do brilliant work slowed down by repetitive, manual busywork. She leads product and design, with a focus on keeping the product joyful to use.",
  email: "palakbubna603@gmail.com",
  linkedin: "https://www.linkedin.com/in/palak-bubna-661a2a380",
  image: "/founder.jpg",
};
