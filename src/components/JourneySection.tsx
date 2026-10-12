import React from 'react';
import { Reveal } from './Reveal';
import { CardStack, type CardStackItem } from './ui/card-stack';

const SKILL_STACK_ITEMS: CardStackItem[] = [
  {
    id: 1,
    title: 'Fees should appear when they become relevant',
    description: 'Showing every fee upfront solved transparency, but risked turning checkout into a pricing table.',
  },
  {
    id: 2,
    title: 'Interfaces should feel effortless and responsive',
    description: 'Polished layouts, typography scales, high-contrast themes & responsive visual language across devices.',
  },
  {
    id: 3,
    title: 'Design systems bridge product vision and engineering',
    description: 'Figma Variables, multi-brand token repositories & automated engineering handoff for scalable products.',
  },
  {
    id: 4,
    title: 'Micro-interactions bring dynamic feedback to life',
    description: 'Interactive touch gestures, subtle state feedback & spring physics animations that delight users.',
  },
  {
    id: 5,
    title: 'Shippable React code turns complex concepts into reality',
    description: 'Architecting modular TypeScript & Tailwind CSS components with AI pair-coding and clean patterns.',
  },
];

export const JourneySection: React.FC = () => (
  <section id="experience" className="panel panel--white py-16 sm:py-24 border-t border-slate-100 overflow-hidden">
    <div className="panel-inner max-w-6xl mx-auto px-4 sm:px-6">
      <Reveal className="mb-8">
        <h2 className="section-title">My core skill stack</h2>
      </Reveal>

      <Reveal className="mt-8 flex justify-center">
        <CardStack
          items={SKILL_STACK_ITEMS}
          initialIndex={0}
          autoAdvance
          intervalMs={3500}
          pauseOnHover
          showDots
          cardWidth={350}
          cardHeight={310}
        />
      </Reveal>
    </div>
  </section>
);
