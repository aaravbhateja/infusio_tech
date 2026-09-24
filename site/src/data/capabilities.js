import {
  Code2, Smartphone, BrainCircuit, MessagesSquare, Cloud, TrendingUp,
  ShoppingBag, Package, Truck, HeartPulse, Building2, GraduationCap, UtensilsCrossed, Rocket,
} from 'lucide-react'

// Service lines, shown on Home, Services, the footer and the contact form. `slug` is the
// anchor on the Services page (/services#slug).
export const PRACTICES = [
  {
    slug: 'digital-engineering', Icon: Code2, tag: 'Engineering',
    title: 'Digital Engineering',
    short: 'Web platforms, portals and custom software engineered for scale, security and speed.',
    text: 'We design and build the web platforms businesses run on: customer-facing websites, e-commerce, portals, dashboards and custom business applications, on modern, maintainable stacks with clean architecture and automated testing.',
    bullets: ['Corporate websites & e-commerce', 'Customer & partner portals', 'Custom business applications & dashboards', 'UX/UI and product design'],
  },
  {
    slug: 'mobile-engineering', Icon: Smartphone, tag: 'Engineering',
    title: 'Mobile App Engineering',
    short: 'iOS, Android and cross-platform apps, from MVP to enterprise-grade products.',
    text: 'Native and cross-platform mobile apps for customers, field teams and operations, built with product thinking, analytics and release pipelines from day one.',
    bullets: ['iOS & Android from a single codebase', 'Customer, loyalty & commerce apps', 'Field-force & operations apps', 'App store release & lifecycle management'],
  },
  {
    slug: 'ai-automation', Icon: BrainCircuit, tag: 'AI',
    title: 'AI & Intelligent Automation',
    short: 'AI agents, LLM integrations and workflow automation that take manual work out of operations.',
    text: 'We apply AI where it moves the numbers: AI agents and copilots, LLM integrations on your data, document processing and end-to-end workflow automation across the tools your teams already use.',
    bullets: ['AI agents & copilots', 'LLM integration on business data', 'Document & data processing', 'Workflow & process automation'],
  },
  {
    slug: 'conversational-ai', Icon: MessagesSquare, tag: 'AI',
    title: 'Conversational & Voice AI',
    short: 'WhatsApp Business, chatbots and voice automation that serve customers around the clock.',
    text: 'Customer engagement on the channels people actually use: WhatsApp Business API solutions, AI chat assistants, IVR and voice automation, and missed-call recovery, connected to your CRM and order systems.',
    bullets: ['WhatsApp Business API solutions', 'AI chat & support assistants', 'IVR, voice bots & call automation', 'Campaign & notification flows'],
  },
  {
    slug: 'cloud-integration', Icon: Cloud, tag: 'Cloud',
    title: 'Cloud, DevOps & Integration',
    short: 'Cloud infrastructure, CI/CD and system integrations that keep platforms reliable.',
    text: 'The foundations under every product we ship: cloud architecture and hosting, CI/CD pipelines, monitoring, and API integrations that connect CRMs, ERPs, payment gateways and third-party services.',
    bullets: ['Cloud architecture & migration', 'CI/CD, monitoring & DevOps', 'API, CRM & ERP integration', 'Application maintenance & support'],
  },
  {
    slug: 'digital-growth', Icon: TrendingUp, tag: 'Growth',
    title: 'Digital Growth & Marketing',
    short: 'Performance marketing, social and analytics that turn digital presence into revenue.',
    text: 'Data-led growth programs across search, social and paid media: strategy, content, campaign management and reporting tied to leads, sales and customer lifetime value.',
    bullets: ['Growth strategy & brand positioning', 'Performance & paid media', 'Social media management & content', 'Analytics, SEO & reporting'],
  },
]

export const INDUSTRIES = [
  { Icon: ShoppingBag, title: 'Retail & E-commerce', text: 'Online storefronts, catalog and order automation, omnichannel customer engagement.' },
  { Icon: Package, title: 'FMCG & D2C Brands', text: 'Brand platforms, distributor portals, campaign automation and growth marketing.' },
  { Icon: Truck, title: 'Mobility & Logistics', text: 'Booking and fleet apps, live tracking, driver and operations tooling.' },
  { Icon: HeartPulse, title: 'Healthcare & Wellness', text: 'Appointment platforms, patient communication and practice automation.' },
  { Icon: Building2, title: 'Real Estate', text: 'Lead management, property portals, CRM automation and virtual engagement.' },
  { Icon: GraduationCap, title: 'Education & EdTech', text: 'Learning platforms, student portals, admissions and communication automation.' },
  { Icon: UtensilsCrossed, title: 'Hospitality & Food Services', text: 'Ordering and reservation systems, loyalty apps and guest messaging.' },
  { Icon: Rocket, title: 'Startups & SaaS', text: 'MVPs to scale-ups: product engineering, cloud and AI features, done right the first time.' },
]

export const ENGAGEMENT_MODELS = [
  { tag: 'Projects', title: 'Fixed-scope delivery', text: 'A defined scope, timeline and price. Best for new platforms, apps and automation programs with clear requirements.' },
  { tag: 'Teams', title: 'Dedicated teams', text: 'Engineers, designers and specialists who work as an extension of your team, scaled up or down as your roadmap changes.' },
  { tag: 'Managed', title: 'Managed services', text: 'Ongoing ownership of your platforms, automations and growth programs under agreed service levels and monthly reporting.' },
]
