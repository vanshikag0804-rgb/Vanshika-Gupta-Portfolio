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
  resumeUrl: 'https://drive.google.com/file/d/11YQYxJlTeUBdZpAg275t550IkQrqlZ4b/view',
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
    role: 'UI/UX DESIGN INTERN',
    duration: '3 Months',
    brandLogo: 'MYHUB',
    bannerBadge: '• FEATURED · CASE 01',
    bannerTitle: 'Store Management & Shopping Case Study',
    bannerSubtitle: 'Designing store management and purchasing flows.',
    bannerGradient: 'from-[#0A192F] via-[#0F2942] to-[#051329]',
    coverImage: '/images/projects/paymob-cover.jpg',
    caseStudyImage: '',
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
    figmaUrl: 'https://www.figma.com/',
    behanceUrl: 'https://www.behance.net/',
    demoUrl: 'https://example.com/',
    deliverables: [
      'KYC Onboarding Architecture',
      'Merchant Analytics Dashboard',
      'Payment Gateway UI Kit',
      'Usability Testing Reports',
    ],
  },
  {
    id: 'aavtor-ai',
    title: 'Aavtor.ai',
    subtitle: 'AI Conversational Agent & Local Services Platform',
    tagline: 'Designing the 0 → 1 conversational agent for booking local services & jobs',
    category: 'AI & ML',
    year: '2026',
    role: 'PRODUCT DESIGNER',
    duration: 'Freelance',
    brandLogo: 'aavtor.ai',
    bannerBadge: '• FEATURED · CASE 02',
    bannerTitle: 'AI Conversational Agent Case Study',
    bannerSubtitle: 'Designing the 0 → 1 conversational agent for local services.',
    bannerGradient: 'from-[#0F172A] via-[#1E293B] to-[#090D16]',
    coverImage: '/images/projects/aavtor-cover.jpg',
    caseStudyImage: '/images/projects/aavtor-cover.jpg',
    fullCover: true,
    mockupType: 'aavtor',
    impactMetrics: [
      { label: 'Search Efficiency', value: '< 10s' },
      { label: 'Booking Conversion', value: '+45%' },
      { label: 'Daily Session Time', value: '12 min' },
    ],
    overview:
      'Designing the core product experience for an AI startup from zero to shipped UI. Turning complex queries into instant local service matches.',
    problem:
      'Finding verified local services and jobs required browsing through multiple cluttered search portals with fragmented communication.',
    solution:
      'Architected a single-prompt conversational interface with predictive search intents and seamless service booking flows.',
    tags: ['AI UX', 'Conversational AI', '0 → 1 Product', 'Mobile App', 'Design System'],
    accentColor: '#3B82F6',
    gradient: 'from-blue-600/20 via-indigo-600/10 to-blue-800/20',
    featured: true,
    figmaUrl: 'https://www.figma.com/',
    behanceUrl: 'https://www.behance.net/',
    demoUrl: 'https://example.com/',
    deliverables: [
      'Conversational AI Flows',
      'Local Services Architecture',
      'Mobile App UI Kit',
      'Interactive Prototypes',
    ],
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
    caseStudyImage: '/images/projects/storybook-cover.jpg',
    fullCover: true,
    mockupType: 'storybook',
    impactMetrics: [
      { label: 'Components Documented', value: '45+' },
      { label: 'Build Time', value: '2 Days' },
    ],
    overview:
      'An interactive sandbox exploring how AI coding tools accelerate component documentation, token validation, and theme switching in real time.',
    problem:
      'Designing components in isolation often leads to missing edge cases in dark modes and responsive breakpoints.',
    solution:
      'Built a real-time component workshop with token state inspectability and instant visual feedback.',
    tags: ['React', 'Storybook', 'AI Pair-Coding', 'Tailwind', 'Micro-interactions'],
    accentColor: '#EA580C',
    gradient: 'from-orange-500/20 to-amber-500/20',
    featured: true,
    figmaUrl: 'https://www.figma.com/',
    behanceUrl: 'https://www.behance.net/',
    demoUrl: 'https://example.com/',
    deliverables: ['Interactive Sandbox', 'Component Spec Sheet', 'Theme Tokens'],
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
    caseStudyImage: '/images/projects/storybook-exp2.jpg',
    fullCover: true,
    mockupType: 'ai-system',
    impactMetrics: [
      { label: 'Tokens Generated', value: '180+' },
      { label: 'WCAG AAA Compliance', value: '100%' },
    ],
    overview:
      'Pushing the limits of generative AI models to generate mathematical type scales, contrast-safe palette pairs, and spring token curves.',
    problem:
      'Manual color ramp calculation and WCAG AA contrast verification takes hours of monotonous spreadsheet math.',
    solution:
      'Created prompt chains that output valid Figma variables and CSS custom properties in seconds.',
    tags: ['Generative AI', 'Design Tokens', 'Figma Variables', 'WCAG AAA'],
    accentColor: '#0891B2',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    featured: true,
    figmaUrl: 'https://www.figma.com/',
    behanceUrl: 'https://www.behance.net/',
    demoUrl: 'https://example.com/',
    deliverables: ['Generative Prompt Chains', 'Figma Tokens Plugin', 'Documentation'],
  },
];

export const COMPANIES: Company[] = [
  { name: 'Aavtor AI', type: 'Freelance', logo: '/images/logos/aavtor.png' },
  { name: 'My Hub Retail', type: 'Internship', logo: '/images/logos/myhub.png' },
  { name: 'Tanzcorp', type: 'Internship', logo: '/images/logos/tanzcorp.png' },
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
    id: 'tierce',
    company: 'Tierce India Pvt Ltd',
    role: 'UI Design Intern',
    type: 'Internship',
    location: 'India',
    period: 'March 2025 — June 2025',
    description: 'Designed dashboard screens and web landing pages with reusable UI kits.',
    highlights: ['Designed dashboard screens and landing pages', 'Built reusable UI kit in Figma'],
    skills: ['Dashboards', 'Landing pages', 'Figma'],
  },
  {
    id: 'aavtor',
    company: 'Aavtor AI',
    role: 'Product Design Intern',
    type: 'Freelance',
    location: 'Remote',
    period: 'August 2025 — March 2026',
    description: 'Designing the core product experience for an AI startup, from first flows to a shippable UI.',
    highlights: [
      'Crafted 0 → 1 conversational AI flows and interface components',
      'Architected high-contrast UI modes and WCAG AAA color ramps',
    ],
    skills: ['0 → 1', 'AI UX', 'Design system'],
  },
  {
    id: 'myhub',
    company: 'My Hub',
    role: 'UX Designer Intern',
    type: 'Internship',
    location: 'India',
    period: 'June 2026 — September 2026',
    description: 'Worked on omnichannel store-management and purchasing user journeys.',
    highlights: [
      'Redesigned store management and purchasing flows',
      'Ran usability testing sessions and built Figma token libraries',
    ],
    skills: ['E-commerce', 'Usability testing', 'Figma Tokens'],
  },
  {
    id: 'tanzcorp',
    company: 'Tanzcorp',
    role: 'UX Design Intern',
    type: 'Internship',
    location: 'India',
    period: 'September 2026 — Present',
    description: 'Designing enterprise UX dashboards, interactive prototypes, and design system tokens.',
    highlights: [
      'Designing enterprise UX dashboards and interactive prototypes',
      'Building design system tokens and component specs for engineering handoff',
    ],
    skills: ['Enterprise UX', 'Prototypes', 'Design System Tokens'],
  },
];

export const EXPERIMENTS: Experiment[] = [
  {
    id: 'storybook',
    title: 'Design Storybook',
    kicker: 'Vibe-coded',
    desc: 'A living Storybook of my UI components, built by pairing with AI coding tools. Every component is documented, interactive and themeable.',
    tags: ['React', 'Storybook', 'AI pair-coding'],
    link: '#', // TODO
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
  { year: '2025', title: 'Retail app redesign', type: 'Case study', platform: 'Behance', url: '#' },
  { year: '2024', title: 'Fintech dashboard concept', type: 'Figma exploration', platform: 'Figma', url: '#' },
  { year: '2024', title: 'Agency landing page', type: 'Landing page', platform: 'Live', url: '#' },
  { year: '2024', title: 'Poster & visual series', type: 'Visual design', platform: 'Behance', url: '#' },
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
