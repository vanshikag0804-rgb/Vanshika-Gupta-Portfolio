import React from 'react';
import { Reveal } from './Reveal';
import { HoverStack, type HoverStackCard } from './ui/hover-stack';

const SERVICE_CARDS: HoverStackCard[] = [
  {
    date: "Sep '26 - Present",
    company: 'Tanzcorp',
    role: 'UI-UX Design Intern',
    subtitle: 'Dudestrap- Event and Customised Seller platform',
    location: 'India',
    iconText: 't',
    logoUrl: '/images/logos/tanzcorp.png',
    logoAlt: 'Tanzcorp logo',
    gradient: 'from-slate-700 to-slate-900',
    bullets: [
      {
        text: 'Designing event and customised seller platform experiences on Dudestrap.',
        boldWords: ['Dudestrap', 'customised seller platform'],
      },
      {
        text: 'Building design system tokens and component specs for engineering handoff.',
        boldWords: ['design system tokens', 'component specs'],
      },
    ],
  },
  {
    date: "Jun '26 - Sep '26",
    company: 'My Hub Technologies',
    role: 'UI-UX Design Intern',
    subtitle: 'Multi Sided Platform- My Hub',
    location: 'India',
    iconText: 'm',
    logoUrl: '/images/logos/myhub.png',
    logoAlt: 'My Hub Technologies logo',
    gradient: 'from-emerald-400 to-teal-600',
    bullets: [
      {
        text: 'Redesigned a live retail app for 50,000+ retailers; research to shipped MVP in 10 weeks.',
        boldWords: ['50,000+ retailers', 'shipped MVP in 10 weeks'],
      },
      {
        text: 'Led UX research, IA, user flows, wireframes, prototyping, UI design, and usability testing across the product lifecycle.',
        boldWords: ['UX research', 'user flows', 'usability testing'],
      },
      {
        text: 'Designed differentiated experiences including Go Live, unified product inventory management, omni channel selling, and scalable store operations.',
        boldWords: ['Go Live', 'inventory management', 'omni channel selling'],
      },
      {
        text: 'Delivered developer handoffs with interaction states, and implementation guidelines for seamless product development.',
        boldWords: ['developer handoffs', 'interaction states'],
      },
    ],
  },
  {
    date: "Oct '25 - Jun '26",
    company: 'Aavtor.AI',
    role: 'Product Designer- Freelance',
    subtitle: 'Aavtor.AI',
    location: 'Remote',
    iconText: 'a',
    logoUrl: '/images/logos/aavtor.png',
    logoAlt: 'Aavtor.AI startup logo',
    gradient: 'from-indigo-500 to-purple-600',
    bullets: [
      {
        text: 'Defined task-based UX architecture for AI-assisted service discovery.',
        boldWords: ['task-based UX architecture', 'AI-assisted service discovery'],
      },
      {
        text: 'Designed core experiences including AI Assistant, Active Tasks, Business Matching, Chat, Human Takeover, and task states.',
        boldWords: ['AI Assistant', 'Active Tasks', 'Business Matching', 'Human Takeover'],
      },
      {
        text: 'Used competitor analysis, journey mapping, marketplace research, and AI product benchmarking to identify key UX opportunities.',
        boldWords: ['journey mapping', 'AI product benchmarking'],
      },
      {
        text: 'Iterated from traditional search/results patterns towards intent-driven, contextual matching and AI execution.',
        boldWords: ['intent-driven', 'contextual matching', 'AI execution'],
      },
    ],
  },
  {
    date: "Mar '25 - Jun '25",
    company: 'Tierce',
    role: 'UI Design Intern',
    subtitle: 'Visa Consultancy CRM – Aarya Overseas Education',
    location: 'India',
    iconText: 't',
    logoUrl: '/images/logos/tierce.jpg',
    logoAlt: 'Tierce company logo',
    gradient: 'from-cyan-500 to-blue-600',
    bullets: [
      {
        text: 'Redesigned a multi-tenant CRM SaaS platform for visa consultancies, restructuring the end-to-end flow from enquiry to application completion.',
        boldWords: ['multi-tenant CRM SaaS', 'enquiry to application completion'],
      },
      {
        text: 'Audited the existing product to find usability gaps, fragmented workflows, and inconsistent UI patterns across roles.',
        boldWords: ['usability gaps', 'fragmented workflows', 'inconsistent UI patterns'],
      },
    ],
  },
];

// Work History section placed right after Work
export const WhatIDoSection: React.FC = () => (
  <section id="what-i-do" className="panel panel--white py-16 sm:py-24 border-t border-black/5 overflow-visible">
    <div className="panel-inner max-w-6xl mx-auto px-4 sm:px-6 overflow-visible">
      <Reveal className="mb-8">
        <h2 className="section-title">Work History</h2>
        <p className="section-lede mt-2 text-slate-600 text-base sm:text-lg">
          Internships and freelance roles where I designed consumer platforms, AI agents, and enterprise tools.
        </p>
      </Reveal>
      <Reveal className="mt-12 flex justify-center">
        <HoverStack cards={SERVICE_CARDS} cardWidth={440} cardHeight={370} overlap={145} pushDistance={200} />
      </Reveal>
    </div>
  </section>
);
