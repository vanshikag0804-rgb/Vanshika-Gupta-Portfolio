import type {
  Project,
  ExperienceItem,
  Company,
  Stat,
  Service,
  Experiment,
  ArchiveItem,
  Education,
} from '../types';

/*
 * Everything text-based on the site lives in this file.
 * Anything marked TODO is placeholder copy: swap in your real details.
 */

export const PERSONAL_INFO = {
  name: 'Vanshika Gupta',
  title: 'Product Designer',
  avatar: '/images/portrait.jpg',
  location: 'India · Remote',
  email: 'vanshikag0804@gmail.com',
  resumeUrl: 'https://drive.google.com/file/d/17_h_ZpDaBnOihZV5TO8Q6_rBCdBuLs4L/view?usp=sharing',
  socials: {
    linkedin: 'https://www.linkedin.com/in/vanshika-gupta-3aa750247/',
    behance: 'https://www.behance.net/guptavanshika',
  },
  heroTags: ['Product designer', 'Design Systems'],
};

export const PROJECTS: Project[] = [
  {
    id: 'paymob',
    title: 'MYHub Retail',
    subtitle: 'Omnichannel Store Management & Shopping Platform',
    tagline: 'Designing the store management and consumer purchasing experience.',
    category: 'Retail & e-commerce',
    year: '2026',
    role: 'UI-UX DESIGN INTERN',
    duration: '3 Months',
    brandLogo: 'MYHUB',
    bannerBadge: '• FEATURED · CASE 01',
    bannerTitle: 'Store Management & Shopping Case Study',
    bannerSubtitle: 'Designing store management and purchasing flows.',
    bannerGradient: 'from-[#0A192F] via-[#0F2942] to-[#051329]',
    coverImage: '/images/projects/paymob-cover.jpg',
    coverImageAlt: 'MYHub Retail mobile app mockups displaying store inventory, point of sale catalog, and incoming customer orders on smartphones',
    caseStudyImage: '/images/projects/paymob-cover.jpg',
    caseStudyImageAlt: 'MYHub Retail omnichannel retail management case study presentation displaying mobile interface flows',
    fullCover: true,
    mockupType: 'paymob',
    impactMetrics: [
      { label: 'Weekly Active Merchants', value: '390K+' },
      { label: 'KYC Conversion Rate', value: '+42%' },
      { label: 'Daily Session Time', value: '18 min' },
    ],
    overview:
      'Redesigning how 50,000+ Indian retailers sell in-store and online from one app. One product record, one stock count, and a Go Live flow that shop owners and chain stores can trust.',
    problem:
      'Merchants were struggling to get verified and track daily cash flows across multiple payment channels with high drop-off rates.',
    solution:
      'Designed an intuitive, 4-step progressive KYC onboarding flow and real-time merchant analytics dashboard with instant settlement actions.',
    tags: ['FinTech', 'Payment Gateway', 'KYC Onboarding', 'Mobile App', 'Design System'],
    accentColor: '#0052FF',
    gradient: 'from-blue-600/20 via-indigo-600/10 to-blue-800/20',
    featured: true,
    figmaUrl: 'https://www.figma.com/design/lk3W0nDPo7NQKcXWpFOYfy/Portofolio--Vanshika-Gupta?node-id=588-14492&t=hpULZQogxNMX1SjE-1',
    behanceUrl: 'https://www.behance.net/guptavanshika',
    demoUrl: 'https://play.google.com/store/apps/details?id=com.myhub.vendor&hl=en_IN',
    deliverables: [
      'KYC Onboarding Architecture',
      'Merchant Analytics Dashboard',
      'Payment Gateway UI Kit',
      'Usability Testing Reports',
    ],
    caseStudy: {
      eyebrow: 'Retail · iOS & Android · Shipped',
      headline: 'Redesigning how 50,000+ Indian retailers sell in-store and online from one app.',
      captionLeft: 'MYHub Retail · In-Store POS & Online App',
      badgeLeft: '● 50,000+ Retailers',
      role: 'UI-UX Design Intern',
      timeline: '10 weeks, 2026',
      platform: 'iOS & Android',
      status: 'Live',
      problem:
        'Retailers ran one business across disconnected tools for products, stock, billing and online orders. Stock went wrong between the counter and online, and going online felt like a risk because nobody could tell what was missing.',
      audience: [
        'Independent owners running a single store',
        'Vendors managing a chain of stores',
        'Sub-vendors running one store inside that chain',
      ],
      whatIDid:
        'In-store research with retailers, then a redesign around how a store actually runs. I took it from research through to dev handoff, and it shipped in 10 weeks.',
      keyDecisions: [
        {
          title: 'Go Live readiness checklist:',
          description:
            'Owners see what’s ready, what’s blocking and what to fix next, instead of pressing a single toggle on faith.',
        },
        {
          title: 'One product, sellable everywhere:',
          description:
            'A single record and a single stock count, so a counter sale and an online order update the same number.',
        },
        {
          title: 'Offline-first billing:',
          description:
            'Bills close without internet and sync later, with clear sync states and conflict handling.',
        },
        {
          title: 'Chain store lifecycle:',
          description:
            'Create → Pending → Assign Sub-vendor → Active, with clear Vendor and Sub-vendor permissions.',
        },
      ],
      outcome: 'Shipped to 50,000+ retailers on iOS and Android with a 42% increase in store onboarding completion.',
      links: [
        {
          label: 'Behance',
          title: 'Full case study',
          description: 'Process, research and decisions',
          url: 'https://www.behance.net/guptavanshika',
        },
        {
          label: 'Figma',
          title: 'Detailed UI',
          description: 'Screens, components and design system',
          url: 'https://www.figma.com/design/lk3W0nDPo7NQKcXWpFOYfy/Portofolio--Vanshika-Gupta?node-id=588-14492&t=hpULZQogxNMX1SjE-1',
        },
        {
          label: 'Play Store',
          title: 'Live app',
          description: 'Download and try it',
          url: 'https://play.google.com/store/apps/details?id=com.myhub.vendor&hl=en_IN',
        },
      ],
    },
  },
  {
    id: 'aavtor-ai',
    title: 'Aavtor.ai',
    subtitle: 'AI Conversational Agent & Local Services Platform',
    tagline: 'Designing the 0 → 1 conversational agent for booking local services & jobs',
    category: 'AI & ML',
    year: '2026',
    role: 'PRODUCT DESIGNER (FREELANCE)',
    duration: 'Freelance',
    brandLogo: 'aavtor.ai',
    bannerBadge: '• FEATURED · CASE 02',
    bannerTitle: 'AI Conversational Agent Case Study',
    bannerSubtitle: 'Designing the 0 → 1 conversational agent for local services.',
    bannerGradient: 'from-[#0F172A] via-[#1E293B] to-[#090D16]',
    coverImage: '/images/projects/aavtor-cover.jpg',
    coverImageAlt: 'Aavtor.ai conversational AI interface mockup on a smartphone displaying natural language service booking flow',
    caseStudyImage: '/images/projects/aavtor-cover.jpg',
    caseStudyImageAlt: 'Aavtor.ai conversational AI mobile app user journey, prompt interface, and booking confirmation screens',
    fullCover: true,
    mockupType: 'aavtor',
    impactMetrics: [
      { label: 'Search Efficiency', value: '< 10s' },
      { label: 'Booking Conversion', value: '+45%' },
      { label: 'Daily Session Time', value: '12 min' },
    ],
    overview:
      'Designing the 0 → 1 conversational AI agent that turns vague everyday requests into verified local service bookings in under 10 seconds, cutting search time by 90%.',
    problem:
      'Finding verified local services and jobs required browsing through multiple cluttered search portals with fragmented communication.',
    solution:
      'Architected a single-prompt conversational interface with predictive search intents and seamless service booking flows.',
    tags: ['AI UX', 'Conversational AI', '0 → 1 Product', 'Mobile App', 'Design System'],
    accentColor: '#3B82F6',
    gradient: 'from-blue-600/20 via-indigo-600/10 to-blue-800/20',
    featured: true,
    figmaUrl: 'https://www.figma.com/design/lk3W0nDPo7NQKcXWpFOYfy/Portofolio--Vanshika-Gupta?node-id=40-36&t=hpULZQogxNMX1SjE-1',
    behanceUrl: 'https://www.behance.net/guptavanshika',
    deliverables: [
      'Conversational AI Flows',
      'Local Services Architecture',
      'Mobile App UI Kit',
      'Interactive Prototypes',
    ],
    caseStudy: {
      eyebrow: 'AI & ML · Mobile & Web · 0 → 1 Launch',
      headline: 'Designing a 0 → 1 conversational AI agent that turns vague everyday requests into verified local service bookings.',
      captionLeft: 'Aavtor.ai · AI Conversational Assistant & Booking Flow',
      badgeLeft: '● 0 → 1 Shipped Product',
      role: 'Product Designer (Freelance)',
      timeline: '12 weeks, 2026',
      platform: 'Mobile App & Web',
      status: 'Live Beta',
      problem:
        'Finding trusted local services (plumbers, electricians, cleaners) traditionally forces users through cluttered directory forms, multiple phone calls, and manual quote comparison. Most users abandoned before booking because pricing and availability were opaque.',
      audience: [
        'Homeowners & renters needing immediate local help without endless search filters',
        'Independent service professionals who need clear job scopes without answering repetitive calls',
        'Gig workers seeking verified, fair-paying local jobs in real time',
      ],
      whatIDid:
        'Defined task-based UX architecture for AI-assisted service discovery. Designed core experiences including AI Assistant, Active Tasks, Business Matching, Chat, Human Takeover, transparent quote comparisons, and seamless booking checkout.',
      keyDecisions: [
        {
          title: 'Context-Aware Prompt Suggestions:',
          description:
            'Rather than an empty chat bar, dynamic query chips guide users through scope (e.g. "Pipe leak under sink" vs "Full bathroom fitting") to extract structured job details in one prompt.',
        },
        {
          title: 'Structured Interactive Message Cards:',
          description:
            'Turned raw LLM text into rich interactive cards (date picker, price breakdown, provider credentials) right inside the chat feed so users never context-switch.',
        },
        {
          title: 'Transparent 3-Tier Quote Comparison:',
          description:
            'Side-by-side quote cards displaying verified reviews, estimated arrival times, and transparent pricing with one-tap confirmation.',
        },
        {
          title: 'Dual High-Contrast Theme System:',
          description:
            'Created an accessible, high-contrast dark and light mode with WCAG AAA token ramps tailored for outdoor and low-light mobile usage.',
        },
      ],
      outcome: 'Reduced average booking discovery time from 12 minutes to under 45 seconds, achieving a 45% lift in booking conversion rate during beta trials.',
      links: [
        {
          label: 'Behance',
          title: 'Full case study',
          description: '0 → 1 design process, UX research, and conversational design flows',
          url: 'https://www.behance.net/guptavanshika',
        },
        {
          label: 'Figma',
          title: 'Component Library',
          description: 'Conversational UI components, chat states, and mobile design system',
          url: 'https://www.figma.com/design/lk3W0nDPo7NQKcXWpFOYfy/Portofolio--Vanshika-Gupta?node-id=40-36&t=hpULZQogxNMX1SjE-1',
        },
      ],
    },
  },
];

export const EXPERIMENT_PROJECTS: Project[] = [
  {
    id: 'storybook-exp',
    title: 'My Hub Retail Design System',
    subtitle: 'Figma Components & Token Architecture',
    tagline: 'High-quality Figma components with variables for faster project setup and maintenance.',
    category: 'Design Systems',
    year: '2026',
    role: 'CREATIVE TECHNOLOGIST',
    duration: '1 Month',
    brandLogo: 'MYHUB',
    bannerBadge: '• EXPERIMENT 01',
    bannerTitle: 'My Hub Retail Design System',
    bannerSubtitle: 'High-quality Figma components with variables for faster project setup and maintenance.',
    bannerGradient: 'from-[#0A192F] via-[#0F2942] to-[#051329]',
    coverImage: '/images/projects/storybook-cover.jpg',
    coverImageAlt: 'My Hub Retail Design System documentation showing Figma component tokens, spacing scales, button states, and color swatches',
    caseStudyImage: '/images/projects/storybook-cover.jpg',
    caseStudyImageAlt: 'My Hub Retail design tokens specification sheet and interactive Figma component library',
    fullCover: true,
    mockupType: 'storybook',
    impactMetrics: [
      { label: 'Components Documented', value: '45+' },
      { label: 'Build Time', value: '2 Days' },
    ],
    overview:
      'Building an enterprise token architecture and 45+ accessible Figma components synced with Storybook to eliminate UI inconsistencies and halve feature design time.',
    problem:
      'Designing components in isolation often leads to missing edge cases in dark modes and responsive breakpoints.',
    solution:
      'Built a real-time component workshop with token state inspectability and instant visual feedback.',
    tags: ['React', 'Storybook', 'AI Pair-Coding', 'Tailwind', 'Micro-interactions'],
    accentColor: '#EA580C',
    gradient: 'from-orange-500/20 to-amber-500/20',
    featured: true,
    figmaUrl: 'https://www.figma.com/design/2WMSERRebQtw86KrKE3rfJ/Myhub-Retailer-%E2%80%94-Design-System?node-id=4-43993&t=pqlK5Sn5venrDWsb-1',
    deliverables: ['Interactive Sandbox', 'Component Spec Sheet', 'Theme Tokens'],
    caseStudy: {
      eyebrow: 'Design Systems · Figma Variables & React · Production',
      headline: 'Unifying cross-platform retail interfaces with tokenized variables, accessible states, and live Storybook documentation.',
      captionLeft: 'Design System · Figma Tokens & Storybook Component Workshop',
      badgeLeft: '● 45+ Production Components',
      role: 'Design Systems Designer',
      timeline: '6 weeks, 2026',
      platform: 'Figma & React Web',
      status: 'In Production',
      problem:
        'Rapid feature expansion across in-store POS, merchant web dashboards, and mobile checkout led to duplicate components, mismatched padding scales, and accessibility regressions across development teams.',
      audience: [
        'Product designers needing standardized components with auto-layout and variant properties',
        'Frontend engineers building responsive retail flows with token-driven CSS and React',
        'QA & Accessibility teams auditing contrast compliance (WCAG 2.1 AA/AAA)',
      ],
      whatIDid:
        'Audited 100+ screens to identify redundancies, then engineered a multi-tiered token architecture (global, semantic, component). Built and published 45+ core Figma components with responsive variants, boolean toggles, and integrated Storybook specs.',
      keyDecisions: [
        {
          title: 'Semantic Token Hierarchy:',
          description:
            'Decoupled raw values from semantic usage (--color-surface-elevated rather than #ffffff) to enable instant dark mode and brand theming with zero code rewrites.',
        },
        {
          title: 'Interactive Variant States:',
          description:
            'Structured components with exhaustive states (Default, Hover, Active, Focus-Visible, Disabled, Loading, Error) to prevent edge-case bugs in production.',
        },
        {
          title: 'Density Modes for POS & Mobile:',
          description:
            'Built compact touch targets for barcode-scanner handhelds and generous tap targets for consumer mobile screens within the same component set.',
        },
        {
          title: 'Figma to Code Automated Spec Sheet:',
          description:
            'Documented prop tables, accessibility guidelines, and do\'s/don\'ts directly in Figma and Storybook, shortening developer handoff time by 50%.',
        },
      ],
      outcome: 'Adopted across 4 product modules at My Hub, cutting new screen turnaround time from 4 days to under 48 hours while achieving 100% WCAG AA compliance.',
      links: [
        {
          label: 'Figma',
          title: 'Figma Community Kit',
          description: 'Explore live variants, variables, and auto-layout setup',
          url: 'https://www.figma.com/design/2WMSERRebQtw86KrKE3rfJ/Myhub-Retailer-%E2%80%94-Design-System?node-id=4-43993&t=pqlK5Sn5venrDWsb-1',
        },
      ],
    },
  },
  {
    id: 'ai-tokens-exp',
    title: 'AI Design System',
    subtitle: 'Generative Token & Style Scale Engine',
    tagline: 'Exploring LLMs to automatically produce contrast-safe color ramps and type scales.',
    category: 'Design Systems',
    year: '2025',
    role: 'AI UX RESEARCHER',
    duration: '2 Weeks',
    brandLogo: 'AI TOKENS',
    bannerBadge: '• EXPERIMENT 02',
    bannerTitle: 'Generative AI Token & Style Engine',
    bannerSubtitle: 'Exploring LLMs to automatically produce contrast-safe color ramps and type scales.',
    bannerGradient: 'from-[#0891B2] via-[#0E7490] to-[#164E63]',
    coverImage: '/images/projects/storybook-exp2.jpg',
    coverImageAlt: 'Design system Storybook interface showcasing payment method selection modal states with UPI, Card, and Cash controls',
    caseStudyImage: '/images/projects/storybook-exp2.jpg',
    caseStudyImageAlt: 'Interactive UI component sandbox displaying bottom sheet payment selection states and controls',
    fullCover: true,
    mockupType: 'ai-system',
    impactMetrics: [
      { label: 'Tokens Generated', value: '180+' },
      { label: 'WCAG AAA Compliance', value: '100%' },
    ],
    overview:
      'An experimental generative token engine leveraging LLMs and OKLCH color space math to mathematically generate contrast-verified color ramps and harmonic type scales in seconds.',
    problem:
      'Manual color ramp calculation and WCAG AA contrast verification takes hours of monotonous spreadsheet math.',
    solution:
      'Created prompt chains that output valid Figma variables and CSS custom properties in seconds.',
    tags: ['Generative AI', 'Design Tokens', 'Figma Variables', 'WCAG AAA'],
    accentColor: '#0891B2',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    featured: true,
    demoUrl: 'https://storybookvanshika.vercel.app/',
    deliverables: ['Generative Prompt Chains', 'Figma Tokens Plugin', 'Documentation'],
    caseStudy: {
      eyebrow: 'Experiments · Generative AI & Tokens · Research Lab',
      headline: 'Exploring generative AI prompt engines to automatically synthesize mathematical design tokens and contrast-verified color ramps.',
      captionLeft: 'AI Tokens · Generative Design Scale & Style Engine',
      badgeLeft: '● Experimental Research',
      role: 'AI UX Researcher & Technologist',
      timeline: '3 weeks, 2025',
      platform: 'Web Sandbox & Figma Plugin',
      status: 'Research Prototype',
      problem:
        'Building design token scales manually requires hours of repetitive spreadsheet math, gamut calculations, and manual contrast ratio verification for dark and light theme pairings.',
      audience: [
        'Design systems architects setting up new multi-brand token repositories',
        'Developers needing instant, accessible CSS custom properties from a single brand hex code',
        'Designers experimenting with procedural type scales and easing curves',
      ],
      whatIDid:
        'Designed prompt chains and an interactive web sandbox where designers input a single brand color and desired mood, and the AI engine generates mathematically harmonic ramps, checks APCA & WCAG contrast, and outputs clean tokens.',
      keyDecisions: [
        {
          title: 'Algorithmic Guardrails over Hallucination:',
          description:
            'Paired LLM output with deterministic OKLCH color space math to ensure contrast validity and uniform perceptual lightness across hues.',
        },
        {
          title: 'Instant Token Format Export:',
          description:
            'Generated drop-in exports for Figma Variables (JSON), Style Dictionary, Tailwind config, and CSS custom properties in one click.',
        },
        {
          title: 'Visual Comparison Matrix:',
          description:
            'Built an interactive modal testing panel previewing real UI buttons, alerts, and inputs in real time under synthesized lighting conditions.',
        },
        {
          title: 'Spring Physics Curves Preview:',
          description:
            'Allowed natural language generation of micro-interaction easing tokens with live interactive physics demonstrations.',
        },
      ],
      outcome: 'Generated 180+ WCAG AAA compliant tokens in seconds, reducing initial token setup time from days to minutes with zero contrast calculation errors.',
      links: [
        {
          label: 'Live Storybook',
          title: 'Interactive Component Workshop',
          description: 'Explore live UI components, variants, and interactive documentation',
          url: 'https://storybookvanshika.vercel.app/',
        },
      ],
    },
  },
];

export const COMPANIES: Company[] = [
  { name: 'Tanzcorp', type: 'Internship', logo: '/images/logos/tanzcorp.png' },
  { name: 'My Hub Technologies', type: 'Internship', logo: '/images/logos/myhub.png' },
  { name: 'Aavtor.AI', type: 'Freelance', logo: '/images/logos/aavtor.png' },
  { name: 'Tierce', type: 'Internship', logo: '/images/logos/tierce.jpg' },
];

export const INTRO = {
  statement:
    "I'm a product designer with 1.5 years of internship and freelance experience. I show the thinking, research and decision behind every project including the calls I made and why.",
};

export const STATS: Stat[] = [
  {
    value: '1.5',
    label: 'Years designing',
    sublabel: 'consumer products, ai agent and education lms',
  },
  {
    value: '50K+',
    label: 'Users',
    sublabel: "reached by the products I've helped ship at My hub",
  },
  {
    value: '2',
    label: '0 → 1 Products shipped',
    sublabel: 'designed from initial sketch to live launch',
  },
];

// TODO: the domains you have worked in
export const DOMAINS = ['AI tools', 'Retail & e-commerce', 'SaaS dashboards', 'Consumer apps'];

export const SERVICES: Service[] = [
  {
    title: 'Product design',
    desc: 'Research, user flows and wireframes that turn a fuzzy problem into a clear product direction.',
    tools: ['User research', 'Flows', 'Wireframes'],
  },
  {
    title: 'UI & visual design',
    desc: 'Polished, accessible interfaces with a visual language that holds up past the first screen.',
    tools: ['Figma', 'Typography', 'Accessibility'],
  },
  {
    title: 'Design systems',
    desc: 'Tokens, components and docs so teams design and ship faster without drifting apart.',
    tools: ['Tokens', 'Components', 'Docs'],
  },
  {
    title: 'Prototyping & vibe coding',
    desc: 'Interactive prototypes and real front-end builds, made quickly with AI coding tools.',
    tools: ['Prototypes', 'React', 'AI tools'],
  },
];

// TODO: real roles, dates and highlights
export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'tanzcorp',
    company: 'Tanzcorp',
    role: 'UI-UX Design Intern',
    type: 'Internship',
    location: 'India',
    period: 'September 2026 — Present',
    description: 'Dudestrap — Event and Customised Seller platform',
    highlights: [
      'Designing event and customised seller platform experiences on Dudestrap.',
      'Building design system tokens and component specs for engineering handoff.',
    ],
    skills: ['Event Platform', 'Customised Seller UX', 'Design System Tokens', 'Dashboards'],
  },
  {
    id: 'myhub',
    company: 'My Hub Technologies',
    role: 'UI-UX Design Intern',
    type: 'Internship',
    location: 'India',
    period: 'June 2026 — September 2026',
    description: 'Multi Sided Platform — My Hub',
    highlights: [
      'Redesigned a live retail app for 50,000+ retailers; research to shipped MVP in 10 weeks.',
      'Led UX research, IA, user flows, wireframes, prototyping, UI design, and usability testing across the product lifecycle.',
      'Designed differentiated experiences including Go Live, unified product inventory management, omni channel selling, and scalable store operations.',
      'Delivered developer handoffs with interaction states, and implementation guidelines for seamless product development.',
    ],
    skills: ['Retail App', 'Omnichannel Selling', 'Store Operations', 'Usability Testing', 'Figma Tokens'],
  },
  {
    id: 'aavtor',
    company: 'Aavtor.AI',
    role: 'Product Designer- Freelance',
    type: 'Freelance',
    location: 'Remote',
    period: 'October 2025 — June 2026',
    description: 'Aavtor.AI — Conversational AI Agent & Local Services Platform',
    highlights: [
      'Defined task-based UX architecture for AI-assisted service discovery.',
      'Designed core experiences including AI Assistant, Active Tasks, Business Matching, Chat, Human Takeover, and task states.',
      'Used competitor analysis, journey mapping, marketplace research, and AI product benchmarking to identify key UX opportunities.',
      'Iterated from traditional search/results patterns towards intent-driven, contextual matching and AI execution.',
    ],
    skills: ['Conversational AI', 'AI Assistant', 'Task Architecture', '0 → 1 Product'],
  },
  {
    id: 'tierce',
    company: 'Tierce',
    role: 'UI Design Intern',
    type: 'Internship',
    location: 'India',
    period: 'March 2025 — June 2025',
    description: 'Visa Consultancy CRM — Aarya Overseas Education',
    highlights: [
      'Redesigned a multi-tenant CRM SaaS platform for visa consultancies, restructuring the end-to-end flow from enquiry to application completion.',
      'Audited the existing product to find usability gaps, fragmented workflows, and inconsistent UI patterns across roles.',
    ],
    skills: ['CRM SaaS', 'Enterprise Dashboards', 'Figma UI Kit', 'Usability Audit'],
  },
];

export const EXPERIMENTS: Experiment[] = [
  {
    id: 'storybook',
    title: 'Design Storybook',
    kicker: 'Vibe-coded',
    desc: 'A living Storybook of my UI components, built by pairing with AI coding tools. Every component is documented, interactive and themeable.',
    tags: ['React', 'Storybook', 'AI pair-coding'],
    link: 'https://storybookvanshika.vercel.app/',
    visual: 'storybook',
  },
  {
    id: 'ai-design-system',
    title: 'AI-made Design System',
    kicker: 'Experiment',
    desc: 'How far can AI take a design system? Tokens, colour ramps, a type scale and components, generated with AI and then refined by hand.',
    tags: ['Figma', 'Design tokens', 'Generative AI'],
    link: '#', // TODO
    visual: 'design-system',
  },
];

// TODO: your landing pages and explorations
export const ARCHIVE: ArchiveItem[] = [
  { year: '2025', title: 'SaaS product landing page', type: 'Landing page', platform: 'Live', url: '#' },
  { year: '2025', title: 'AI assistant onboarding', type: 'Figma exploration', platform: 'Figma', url: '#' },
  { year: '2025', title: 'Retail app redesign', type: 'Case study', platform: 'Behance', url: 'https://www.behance.net/guptavanshika' },
  { year: '2024', title: 'Fintech dashboard concept', type: 'Figma exploration', platform: 'Figma', url: '#' },
  { year: '2024', title: 'Agency landing page', type: 'Landing page', platform: 'Live', url: '#' },
  { year: '2024', title: 'Poster & visual series', type: 'Visual design', platform: 'Behance', url: 'https://www.behance.net/guptavanshika' },
];

// TODO: your education
export const EDUCATION: Education[] = [
  { degree: 'Bachelor of Design', school: 'Your University', period: '2021 — 2025' },
];

export const SKILLS = {
  design: ['Product design', 'UX research', 'Interaction design', 'Design systems', 'Prototyping'],
  tools: ['Figma', 'FigJam', 'Framer', 'Notion', 'Cursor / Claude'],
  code: ['HTML & CSS', 'React basics', 'Tailwind'],
};

// TODO: this is your story, so rewrite it in your own words
export const ABOUT = {
  chapters: [
    {
      title: 'How it started',
      body: 'I used to redesign apps in my head while using them. One day I opened Figma to prove a point, and I never really closed it.',
    },
    {
      title: "What I've learned",
      body: 'Good design is mostly listening. My best screens came from asking one more question, not from adding one more feature.',
    },
    {
      title: 'Who I am',
      body: "Curious, a little obsessive about details, and happiest when a teammate says 'oh, that was easy'. I like building things as much as designing them.",
    },
  ],
  hobbies: [
    { emoji: '🍜', label: 'Ramen hunting' },
    { emoji: '🐈‍⬛', label: 'Cat person' },
    { emoji: '✏️', label: 'Sketching' },
    { emoji: '🎧', label: 'Lo-fi playlists' },
    { emoji: '📚', label: 'Design books' },
    { emoji: '☕', label: 'Café hopping' },
  ],
};
