import React from 'react';
import { Reveal } from './Reveal';
import { HoverStack, type HoverStackCard } from './ui/hover-stack';

const SERVICE_CARDS: HoverStackCard[] = [
  {
    date: "Mar '25 - Jun '25",
    title: 'UI Design Intern',
    subtitle: 'Tierce India Pvt Ltd',
    location: 'India',
    iconText: 't',
    logoUrl: '/images/logos/tierce.jpg',
    logoAlt: 'Tierce India company logo',
    gradient: 'from-cyan-500 to-blue-600',
    bullets: [
      {
        text: 'Designed dashboard screens and landing pages for web applications.',
        boldWords: ['dashboard screens', 'landing pages'],
      },
      {
        text: 'Built reusable UI component kits in Figma for rapid design handoff.',
        boldWords: ['UI component kits'],
      },
    ],
  },
  {
    date: "Aug '25 - Mar '26",
    title: 'Product Design Intern',
    subtitle: 'Aavtor AI · Freelance',
    location: 'Remote · India',
    iconText: 'a',
    logoUrl: '/images/logos/aavtor.png',
    logoAlt: 'Aavtor AI startup logo',
    gradient: 'from-indigo-500 to-purple-600',
    bullets: [
      {
        text: 'Crafted 0 → 1 conversational AI flows and responsive interface components.',
        boldWords: ['0 → 1 conversational AI flows'],
      },
      {
        text: 'Architected high-contrast UI modes, WCAG AAA color ramps, and fluid micro-interactions.',
        boldWords: ['high-contrast UI modes', 'WCAG AAA'],
      },
    ],
  },
  {
    date: "Jun '26 - Sep '26",
    title: 'UX Designer Intern',
    subtitle: 'My Hub · Internship',
    location: 'India',
    iconText: 'm',
    logoUrl: '/images/logos/myhub.png',
    logoAlt: 'My Hub Retail company logo',
    gradient: 'from-emerald-400 to-teal-600',
    bullets: [
      {
        text: 'Redesigned omnichannel store management and purchasing user journeys.',
        boldWords: ['omnichannel store management'],
      },
      {
        text: 'Ran usability testing sessions and created Figma variable libraries for engineering handoff.',
        boldWords: ['usability testing sessions', 'Figma variable libraries'],
      },
    ],
  },
  {
    date: "Sep '26 - Present",
    title: 'UX Design Intern',
    subtitle: 'Tanzcorp · Internship',
    location: 'India',
    iconText: 't',
    logoUrl: '/images/logos/tanzcorp.png',
    logoAlt: 'Tanzcorp enterprise logo',
    gradient: 'from-slate-700 to-slate-900',
    bullets: [
      {
        text: 'Designing enterprise UX dashboards, interactive prototypes, and landing pages.',
        boldWords: ['enterprise UX dashboards', 'interactive prototypes'],
      },
      {
        text: 'Building design system tokens and component specs for engineering handoff.',
        boldWords: ['design system tokens', 'component specs'],
      },
    ],
  },
];

// "My journey so far" section placed right after Work
export const WhatIDoSection: React.FC = () => (
  <section id="what-i-do" className="panel panel--white py-16 sm:py-24 border-t border-black/5 overflow-visible">
    <div className="panel-inner max-w-6xl mx-auto px-4 sm:px-6 overflow-visible">
      <Reveal className="mb-8">
        <h2 className="section-title">Work Experience</h2>
      </Reveal>
      <Reveal className="mt-12 flex justify-center">
        <HoverStack cards={SERVICE_CARDS} cardWidth={420} cardHeight={310} overlap={140} pushDistance={180} />
      </Reveal>
    </div>
  </section>
);
