import React from 'react';
import { PROJECTS, EXPERIMENT_PROJECTS } from '../data/portfolioData';
import type { Project } from '../types';
import { playClickSound } from '../utils/sound';
import { Reveal } from './Reveal';

interface WorkSectionProps {
  onSelectProject: (project: Project) => void;
}

/* Compact Paymob Phone Mockup */
const PaymobMockup: React.FC<{ compact?: boolean }> = ({ compact }) => (
  <div className={`${compact ? 'w-[105px] sm:w-[120px]' : 'w-[125px] sm:w-[140px]'} aspect-[9/18] rounded-[20px] sm:rounded-[22px] border-[3px] border-black/80 bg-black shadow-xl overflow-hidden relative mx-auto transform group-hover:scale-[1.04] transition-transform duration-500 shrink-0`}>
    {/* Dynamic Island */}
    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-2 bg-black rounded-full z-30 flex items-center justify-end px-1">
      <span className="w-0.5 h-0.5 rounded-full bg-blue-900/60" />
    </div>

    {/* Phone Screen */}
    <div className="w-full h-full bg-[#f8fafc] text-slate-900 pt-4 px-1.5 pb-1.5 flex flex-col justify-between text-[8px] font-sans">
      <div className="flex items-center justify-between text-[6.5px] font-semibold text-slate-500 mb-0.5 px-0.5">
        <span>9:41</span>
        <span>⚡ 100%</span>
      </div>

      <div className="bg-white p-1 rounded shadow-sm border border-slate-100 flex items-center gap-1 mb-0.5">
        <div className="w-3.5 h-3.5 rounded bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-[7px]">
          🏪
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-bold truncate text-[7.5px]">Elsaada Market</div>
          <div className="text-[6px] text-slate-400">Khaled Batt</div>
        </div>
      </div>

      <div className="bg-blue-600 text-white p-1.5 rounded-lg shadow-sm mb-0.5">
        <div className="flex items-center gap-1 mb-0.5 text-[6.5px]">
          <span className="w-2.5 h-2.5 rounded-full bg-white/20 flex items-center justify-center text-[6px] font-bold">4</span>
          <span className="truncate">Complete KYC</span>
        </div>
        <button className="w-full py-0.5 bg-white text-blue-600 font-bold rounded text-[7px]">
          Complete KYC →
        </button>
      </div>

      <div className="bg-white p-1 rounded border border-slate-100 mb-0.5">
        <div className="text-[6.5px] text-slate-400">Available Balance</div>
        <div className="text-[9.5px] font-extrabold text-slate-900">0 EGP 🔒</div>
      </div>

      <div className="bg-white py-0.5 px-1.5 rounded-full border border-slate-200 flex items-center justify-between text-[6px] text-slate-400 font-semibold">
        <span className="text-blue-600 font-bold">Home</span>
        <span>Payments</span>
        <span>More</span>
      </div>
    </div>
  </div>
);

/* Compact Lumina Wealth Mockup */
const LuminaMockup: React.FC<{ compact?: boolean }> = ({ compact }) => (
  <div className={`${compact ? 'w-[105px] sm:w-[120px]' : 'w-[125px] sm:w-[140px]'} aspect-[9/18] rounded-[20px] sm:rounded-[22px] border-[3px] border-black/80 bg-black shadow-xl overflow-hidden relative mx-auto transform group-hover:scale-[1.04] transition-transform duration-500 shrink-0`}>
    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-2 bg-black rounded-full z-30" />
    <div className="w-full h-full bg-[#064e3b] text-white pt-4 px-1.5 pb-1.5 flex flex-col justify-between text-[8px]">
      <div className="text-[6.5px] font-semibold opacity-75">BALANCE</div>
      <div className="text-sm font-black tracking-tight">$1,420,850</div>
      <div className="text-[6.5px] text-emerald-300 font-bold mb-0.5">▲ +14.2%</div>
      <div className="h-10 w-full bg-emerald-950/60 rounded-lg p-0.5 flex items-end gap-0.5 mb-0.5">
        <div className="w-1/6 h-[40%] bg-emerald-500/40 rounded-xs" />
        <div className="w-1/6 h-[55%] bg-emerald-500/50 rounded-xs" />
        <div className="w-1/6 h-[45%] bg-emerald-500/60 rounded-xs" />
        <div className="w-1/6 h-[70%] bg-emerald-500/80 rounded-xs" />
        <div className="w-1/6 h-[85%] bg-emerald-400 rounded-xs" />
        <div className="w-1/6 h-[100%] bg-emerald-300 rounded-xs" />
      </div>
      <div className="grid grid-cols-2 gap-0.5 mb-0.5">
        <div className="bg-emerald-900/60 p-0.5 rounded text-[7px]">
          <div className="text-emerald-300 font-bold">Invest</div>
        </div>
        <div className="bg-emerald-900/60 p-0.5 rounded text-[7px]">
          <div className="text-emerald-300 font-bold">Yield 8.4%</div>
        </div>
      </div>
    </div>
  </div>
);

/* Compact Aura Design System Mockup */
const AuraMockup: React.FC<{ compact?: boolean }> = ({ compact }) => (
  <div className={`${compact ? 'w-[105px] sm:w-[120px]' : 'w-[125px] sm:w-[140px]'} aspect-[9/18] rounded-[20px] sm:rounded-[22px] border-[3px] border-black/80 bg-black shadow-xl overflow-hidden relative mx-auto transform group-hover:scale-[1.04] transition-transform duration-500 shrink-0`}>
    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-2 bg-black rounded-full z-30" />
    <div className="w-full h-full bg-[#1e1b4b] text-white pt-4 px-1.5 pb-1.5 flex flex-col justify-between text-[8px]">
      <div className="text-[7px] font-bold text-indigo-300">AURA TOKENS</div>
      <div className="space-y-0.5 mb-0.5">
        <div className="text-[6px] opacity-60">COLOR RAMP</div>
        <div className="grid grid-cols-5 gap-0.5">
          <div className="h-3 rounded bg-indigo-400" />
          <div className="h-3 rounded bg-indigo-500" />
          <div className="h-3 rounded bg-indigo-600" />
          <div className="h-3 rounded bg-purple-500" />
          <div className="h-3 rounded bg-pink-500" />
        </div>
      </div>
      <div className="bg-indigo-950/80 p-1 rounded-lg border border-indigo-500/20 space-y-0.5 mb-0.5">
        <div className="text-[6.5px] text-pink-400 font-mono">--brand-primary</div>
        <button className="w-full py-0.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded text-[7px]">
          Button
        </button>
      </div>
      <div className="bg-indigo-950/80 p-1 rounded-lg border border-indigo-500/20 text-[6.5px] flex justify-between">
        <span>Contrast</span>
        <span className="text-emerald-400 font-bold">14.2:1 (AAA)</span>
      </div>
    </div>
  </div>
);

/* Compact Storybook Mockup */
const StorybookMockup: React.FC<{ compact?: boolean }> = ({ compact }) => (
  <div className={`${compact ? 'w-[105px] sm:w-[120px]' : 'w-[125px] sm:w-[140px]'} aspect-[9/18] rounded-[20px] sm:rounded-[22px] border-[3px] border-black/80 bg-black shadow-xl overflow-hidden relative mx-auto transform group-hover:scale-[1.04] transition-transform duration-500 shrink-0`}>
    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-2 bg-black rounded-full z-30" />
    <div className="w-full h-full bg-[#1c1917] text-white pt-4 px-1.5 pb-1.5 flex flex-col justify-between text-[8px]">
      <div className="flex items-center justify-between text-[7px] text-orange-400 font-bold">
        <span>STORYBOOK</span>
        <span className="bg-orange-500/20 px-1 py-0.2 rounded text-[6px]">v8.4</span>
      </div>
      <div className="bg-stone-900 p-1 rounded-lg border border-stone-700/50 space-y-0.5 mb-0.5 text-[7px]">
        <div className="font-bold text-orange-300">❖ Button</div>
        <div className="opacity-60">❖ Card</div>
        <div className="opacity-60">❖ Modal</div>
      </div>
      <div className="bg-stone-900 p-1 rounded-lg border border-orange-500/30 text-[6.5px]">
        <div className="text-orange-400 font-mono">variant="vibe"</div>
      </div>
    </div>
  </div>
);

/* Compact AI Tokens Mockup */
const AITokensMockup: React.FC<{ compact?: boolean }> = ({ compact }) => (
  <div className={`${compact ? 'w-[105px] sm:w-[120px]' : 'w-[125px] sm:w-[140px]'} aspect-[9/18] rounded-[20px] sm:rounded-[22px] border-[3px] border-black/80 bg-black shadow-xl overflow-hidden relative mx-auto transform group-hover:scale-[1.04] transition-transform duration-500 shrink-0`}>
    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-2 bg-black rounded-full z-30" />
    <div className="w-full h-full bg-[#0e7490] text-white pt-4 px-1.5 pb-1.5 flex flex-col justify-between text-[8px]">
      <div className="text-[7px] font-bold text-cyan-200">AI TOKENS</div>
      <div className="bg-cyan-950/80 p-1 rounded-lg text-[6.5px] italic text-cyan-100 mb-0.5">
        "Generate dark mode tokens"
      </div>
      <div className="bg-cyan-950/80 p-1 rounded-lg space-y-0.5 mb-0.5 font-mono text-[6px] text-cyan-200">
        <div>--bg-primary: #090a0f</div>
        <div>--accent: #0891b2</div>
      </div>
      <div className="bg-cyan-400 text-cyan-950 p-0.5 rounded font-bold text-[6.5px] text-center">
        ✓ Exported to Figma
      </div>
    </div>
  </div>
);

/* Uniform Visual Card matching exact equal container sizing across all cards */
const VisualCaseStudyCard: React.FC<{ project: Project; onOpen: () => void }> = ({ project, onOpen }) => {
  return (
    <article
      className="work-visual-card group cursor-pointer flex flex-col justify-between h-full w-full"
      onClick={onOpen}
    >
      {/* ---------- Banner Container with Unified Exact Aspect Ratio ---------- */}
      <div className="relative w-full rounded-[18px] sm:rounded-[22px] overflow-hidden shadow-xl bg-slate-900 transition-all duration-500 group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)] shrink-0">
        {project.fullCover && project.coverImage ? (
          <div
            className="w-full relative overflow-hidden flex items-center justify-center bg-[#00183c]"
            style={{ aspectRatio: '1024 / 697' }}
          >
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ) : (
          <div
            className={`p-5 sm:p-6 flex flex-col justify-between h-full bg-gradient-to-br ${
              project.bannerGradient || 'from-blue-600 via-indigo-700 to-blue-900'
            }`}
            style={{ aspectRatio: '1024 / 697' }}
          >
            {/* Top-left Badge Pill */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-xs font-mono tracking-wider text-white uppercase w-fit mb-3 border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              {project.bannerBadge || 'FEATURED · CASE'}
            </div>

            {/* Banner Content Grid */}
            <div className="flex flex-row items-center justify-between gap-4 flex-1">
              {/* Left Text */}
              <div className="flex-1 min-w-0">
                {project.brandLogo && (
                  <div className="text-lg sm:text-xl font-black text-white tracking-tighter mb-1.5 opacity-90 font-mono-tech">
                    {project.brandLogo}
                  </div>
                )}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-2">
                  {project.bannerTitle || project.title}
                </h3>
                <p className="text-white/85 text-sm sm:text-base font-normal leading-relaxed line-clamp-2">
                  {project.bannerSubtitle || project.tagline}
                </p>
              </div>

              {/* Right Phone Mockup */}
              <div className="shrink-0 flex justify-center">
                {project.mockupType === 'paymob' && <PaymobMockup />}
                {project.mockupType === 'lumina' && <LuminaMockup />}
                {project.mockupType === 'aura' && <AuraMockup />}
                {project.mockupType === 'storybook' && <StorybookMockup />}
                {project.mockupType === 'ai-system' && <AITokensMockup />}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ---------- Details Metadata Below Banner (Legible Big Text & Equal Alignment) ---------- */}
      <div className="flex flex-col justify-between flex-1 mt-4 sm:mt-5 px-1">
        <div>
          <h4 className="text-2xl sm:text-3xl font-extrabold text-[var(--panel-ink)] mb-2 group-hover:text-[#1d8fe0] transition-colors leading-tight">
            {project.title}
          </h4>
          <p className="text-[var(--panel-muted)] text-sm sm:text-base leading-relaxed mb-4 line-clamp-3 font-normal">
            {project.overview}
          </p>
        </div>

        <div className="mt-auto">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpen();
            }}
            className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-[var(--panel-ink)] hover:text-[#1d8fe0] underline underline-offset-4 transition-colors mb-4 cursor-pointer"
          >
            {project.bannerBadge?.includes('EXPERIMENT') ? 'View experiment ↗' : 'Read case study ↗'}
          </button>

          {/* Metadata Grid */}
          <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[var(--panel-line)] font-mono-tech">
            <div>
              <div className="text-[var(--panel-muted)] text-[10px] sm:text-xs uppercase tracking-wider font-semibold mb-1">YEAR</div>
              <div className="font-bold text-xs sm:text-sm text-[var(--panel-ink)] truncate">{project.year}</div>
            </div>
            <div>
              <div className="text-[var(--panel-muted)] text-[10px] sm:text-xs uppercase tracking-wider font-semibold mb-1">ROLE</div>
              <div className="font-bold text-xs sm:text-sm text-[var(--panel-ink)] truncate">{project.role}</div>
            </div>
            <div>
              <div className="text-[var(--panel-muted)] text-[10px] sm:text-xs uppercase tracking-wider font-semibold mb-1">SECTOR</div>
              <div className="font-bold text-xs sm:text-sm text-[var(--panel-ink)] truncate">{project.category}</div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export const WorkSection: React.FC<WorkSectionProps> = ({ onSelectProject }) => {
  return (
    <section id="work" className="panel work-section py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        
        {/* Subsection 1: CASE STUDIES */}
        <div className="mb-16 sm:mb-24">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-10">
            <div>
              <div className="section-eyebrow text-xs sm:text-sm">01 / Work - Case Studies</div>
              <h2 className="section-title mt-2">Work- Case studies</h2>
              <p className="section-lede mt-3 text-base sm:text-lg">
                Two products I took from zero to shipped, each with Figma files, Behance write-ups, and live applications.
              </p>
            </div>
            <span className="section-eyebrow text-xs sm:text-sm opacity-60 shrink-0">
              02 Projects
            </span>
          </Reveal>

          {/* 2-column Grid for 2 cards per line with equal stretching */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-stretch">
            {PROJECTS.map((project) => (
              <Reveal key={project.id} className="h-full flex flex-col">
                <VisualCaseStudyCard
                  project={project}
                  onOpen={() => {
                    playClickSound();
                    onSelectProject(project);
                  }}
                />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Subsection 2: EXPERIMENTS */}
        <div id="experiments">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-10 pt-10 border-t border-white/10">
            <div>
              <div className="section-eyebrow text-xs sm:text-sm">02 / Experiments</div>
              <h2 className="section-title mt-2">Experiments</h2>
              <p className="section-lede mt-3 text-base sm:text-lg">
                Two experimental explorations pairing design token systems with generative AI and interactive front-end tools.
              </p>
            </div>
            <span className="section-eyebrow text-xs sm:text-sm opacity-60 shrink-0">
              02 Experiments
            </span>
          </Reveal>

          {/* 2-column Grid for 2 cards per line with equal stretching */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-stretch">
            {EXPERIMENT_PROJECTS.map((experiment) => (
              <Reveal key={experiment.id} className="h-full flex flex-col">
                <VisualCaseStudyCard
                  project={experiment}
                  onOpen={() => {
                    playClickSound();
                    onSelectProject(experiment);
                  }}
                />
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

