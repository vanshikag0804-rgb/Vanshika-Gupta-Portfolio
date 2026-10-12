import React, { useEffect, useRef, useState } from 'react';
import { INTRO, STATS, DOMAINS } from '../data/portfolioData';
import { Reveal } from './Reveal';

// Paragraph whose words transition from grey to original color on scroll
const ScrollFillText: React.FC<{ text: string }> = ({ text }) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const words = text.split(' ');
  const [fillProgress, setFillProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when section top enters lower viewport (vh * 0.88), 1 as it scrolls past
      const progress = Math.min(1, Math.max(0, (vh * 0.88 - rect.top) / (rect.height + vh * 0.35)));
      setFillProgress(progress);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <h2
      ref={ref}
      className="intro-statement text-2xl sm:text-3xl lg:text-[2.25rem] font-semibold leading-[1.38] tracking-tight max-w-[46rem]"
    >
      {words.map((word, i) => {
        const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');
        const isHighlight = ['thinking', 'research', 'decision'].includes(cleanWord);
        const wordThreshold = (i / (words.length - 1)) * 0.85;
        const isFilled = fillProgress >= wordThreshold;

        return (
          <span
            key={i}
            aria-hidden="true"
            className={`fill-word ${isHighlight ? 'is-highlight' : ''} ${isFilled ? 'is-filled' : ''}`}
          >
            {word}{' '}
          </span>
        );
      })}
    </h2>
  );
};

// Under the hero: intro statement, stats, domains
export const IntroSection: React.FC = () => (
  <section id="intro" className="panel panel--white py-16 sm:py-24">
    <div className="panel-inner max-w-6xl mx-auto px-4 sm:px-6">
      {/* Statement + Stats (Pushed right) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-start">
        <div className="md:col-span-9 lg:col-span-9 md:col-start-4 lg:col-start-4 xl:col-start-4">
          <Reveal>
            <ScrollFillText text={INTRO.statement} />
          </Reveal>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-12 sm:mt-16 pt-4">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1}>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1d8fe0] tracking-tight mb-2">
                  {stat.value}
                </div>
                <div className="text-base sm:text-lg font-bold text-[#111827] mb-1">
                  {stat.label}
                </div>
                {stat.sublabel && (
                  <p className="text-xs sm:text-sm text-[#6b7280] leading-relaxed max-w-xs">
                    {stat.sublabel}
                  </p>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Domains */}
      <Reveal className="mt-12 flex flex-wrap items-center gap-3">
        <span className="font-cursive text-xl sm:text-2xl lg:text-[1.75rem] font-semibold text-[#1d8fe0] mr-2">
          Domains I've designed for
        </span>
        {DOMAINS.map((domain) => (
          <span key={domain} className="panel-chip">
            {domain}
          </span>
        ))}
      </Reveal>
    </div>
  </section>
);

