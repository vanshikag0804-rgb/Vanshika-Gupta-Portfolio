import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import type { Project } from '../types';
import { Reveal } from './Reveal';
import { scrollToTop } from '../utils/smoothScroll';

interface ProjectDetailPageProps {
  project: Project;
  onBack: () => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ project, onBack }) => {
  useEffect(() => {
    scrollToTop(true);
  }, []);

  const isMyHub = project.id === 'paymob' || project.title.toLowerCase().includes('myhub');

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      <div className="pt-28 sm:pt-36 pb-24 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Reveal className="mb-6 sm:mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 cursor-pointer shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Work
          </button>
        </Reveal>

        {isMyHub ? (
          /* ---------- MyHub Retail: Side-by-Side One-Page Project Summary ---------- */
          <div className="grid lg:grid-cols-[1.02fr_1.18fr] gap-8 lg:gap-14 items-start">
            {/* Left Column: Banner Image Container */}
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-[#00183c]">
                  <img
                    src={project.coverImage || '/images/projects/paymob-cover.jpg'}
                    alt={
                      project.coverImageAlt ||
                      'MYHub Retail mobile app mockups displaying store inventory, point of sale catalog, and incoming customer orders on smartphones'
                    }
                    className="w-full h-auto object-cover object-center block"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between px-2 text-xs text-slate-500 font-mono">
                  <span>MYHub Retail · In-Store POS &amp; Online App</span>
                  <span className="text-emerald-600 font-medium">● 50,000+ Retailers</span>
                </div>
              </Reveal>
            </div>

            {/* Right Column: One-Page Project Summary */}
            <div className="flex flex-col">
              <Reveal>
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-blue-700 uppercase tracking-wider mb-2.5 w-fit">
                  Retail · iOS &amp; Android · Shipped
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                  MyHub Retail
                </h1>

                {/* Headline */}
                <p className="mt-3 text-lg sm:text-xl font-medium text-slate-800 leading-snug">
                  Redesigning how 50,000+ Indian retailers sell in-store and online from one app.
                </p>

                {/* Meta row */}
                <div className="my-5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm font-medium text-slate-700">
                  <div>
                    <span className="text-slate-400 font-mono text-xs uppercase tracking-wider mr-1.5">Role:</span>
                    <span className="font-semibold text-slate-900">Product Designer</span>
                  </div>
                  <span className="text-slate-300 hidden sm:inline">•</span>
                  <div>
                    <span className="text-slate-400 font-mono text-xs uppercase tracking-wider mr-1.5">Timeline:</span>
                    <span className="font-semibold text-slate-900">10 weeks, 2026</span>
                  </div>
                  <span className="text-slate-300 hidden sm:inline">•</span>
                  <div>
                    <span className="text-slate-400 font-mono text-xs uppercase tracking-wider mr-1.5">Platform:</span>
                    <span className="font-semibold text-slate-900">iOS &amp; Android</span>
                  </div>
                  <span className="text-slate-300 hidden sm:inline">•</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-400 font-mono text-xs uppercase tracking-wider mr-0.5">Status:</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* The problem */}
              <Reveal delay={0.06} className="mb-6">
                <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-1.5">
                  The problem
                </h2>
                <p className="text-[15px] sm:text-base text-slate-700 leading-relaxed font-normal">
                  Retailers ran one business across disconnected tools for products, stock, billing and online orders. Stock went wrong between the counter and online, and going online felt like a risk because nobody could tell what was missing.
                </p>
              </Reveal>

              {/* Who it’s for */}
              <Reveal delay={0.1} className="mb-6">
                <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-2">
                  Who it’s for
                </h2>
                <ul className="space-y-1.5 text-[15px] sm:text-base text-slate-700 font-normal">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#1d8fe0] mt-1 font-bold text-xs">✦</span>
                    <span>Independent owners running a single store</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#1d8fe0] mt-1 font-bold text-xs">✦</span>
                    <span>Vendors managing a chain of stores</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#1d8fe0] mt-1 font-bold text-xs">✦</span>
                    <span>Sub-vendors running one store inside that chain</span>
                  </li>
                </ul>
              </Reveal>

              {/* What I did */}
              <Reveal delay={0.14} className="mb-6">
                <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-1.5">
                  What I did
                </h2>
                <p className="text-[15px] sm:text-base text-slate-700 leading-relaxed font-normal">
                  In-store research with retailers, then a redesign around how a store actually runs. I took it from research through to dev handoff, and it shipped in 10 weeks.
                </p>
              </Reveal>

              {/* Key decisions */}
              <Reveal delay={0.18} className="mb-6">
                <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-2.5">
                  Key decisions
                </h2>
                <div className="space-y-2.5 text-slate-700">
                  <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70">
                    <span className="font-bold text-slate-900 block mb-0.5 text-[15px]">
                      Go Live readiness checklist:
                    </span>
                    <span className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                      Owners see what’s ready, what’s blocking and what to fix next, instead of pressing a single toggle on faith.
                    </span>
                  </div>
                  <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70">
                    <span className="font-bold text-slate-900 block mb-0.5 text-[15px]">
                      One product, sellable everywhere:
                    </span>
                    <span className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                      A single record and a single stock count, so a counter sale and an online order update the same number.
                    </span>
                  </div>
                  <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70">
                    <span className="font-bold text-slate-900 block mb-0.5 text-[15px]">
                      Offline-first billing:
                    </span>
                    <span className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                      Bills close without internet and sync later, with clear sync states and conflict handling.
                    </span>
                  </div>
                  <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70">
                    <span className="font-bold text-slate-900 block mb-0.5 text-[15px]">
                      Chain store lifecycle:
                    </span>
                    <span className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                      Create → Pending → Assign Sub-vendor → Active, with clear Vendor and Sub-vendor permissions.
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Outcome */}
              <Reveal delay={0.22} className="mb-7">
                <div className="p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-50/80 to-indigo-50/50 border border-blue-200/70">
                  <h2 className="text-xs font-mono uppercase tracking-widest text-blue-800 font-bold mb-1">
                    Outcome
                  </h2>
                  <p className="text-[15px] sm:text-base text-slate-800 leading-relaxed font-semibold">
                    Shipped to 50,000+ retailers on iOS and Android.
                  </p>
                </div>
              </Reveal>

              {/* Explore the project */}
              <Reveal delay={0.26}>
                <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-3">
                  Explore the project
                </h2>
                <div className="grid sm:grid-cols-3 gap-3">
                  <a
                    href={project.behanceUrl || 'https://www.behance.net/guptavanshika'}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-blue-400 bg-white hover:bg-slate-50 transition-all group flex flex-col justify-between shadow-xs"
                  >
                    <div>
                      <div className="text-[11px] text-blue-600 font-mono uppercase font-bold tracking-wider">Behance</div>
                      <div className="text-sm font-bold text-slate-900 mt-0.5">Full case study</div>
                      <div className="text-xs text-slate-500 mt-1 leading-snug">Process, research and decisions</div>
                    </div>
                    <div className="mt-3 flex items-center justify-end text-slate-400 group-hover:text-blue-600 transition-colors">
                      <span className="text-sm font-bold group-hover:translate-x-0.5 transition-transform">→</span>
                    </div>
                  </a>

                  <a
                    href={project.figmaUrl || 'https://www.figma.com/'}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-blue-400 bg-white hover:bg-slate-50 transition-all group flex flex-col justify-between shadow-xs"
                  >
                    <div>
                      <div className="text-[11px] text-blue-600 font-mono uppercase font-bold tracking-wider">Figma</div>
                      <div className="text-sm font-bold text-slate-900 mt-0.5">Detailed UI</div>
                      <div className="text-xs text-slate-500 mt-1 leading-snug">Screens, components and design system</div>
                    </div>
                    <div className="mt-3 flex items-center justify-end text-slate-400 group-hover:text-blue-600 transition-colors">
                      <span className="text-sm font-bold group-hover:translate-x-0.5 transition-transform">→</span>
                    </div>
                  </a>

                  <a
                    href="https://play.google.com/store/apps"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-blue-400 bg-white hover:bg-slate-50 transition-all group flex flex-col justify-between shadow-xs"
                  >
                    <div>
                      <div className="text-[11px] text-blue-600 font-mono uppercase font-bold tracking-wider">Play Store</div>
                      <div className="text-sm font-bold text-slate-900 mt-0.5">Live app</div>
                      <div className="text-xs text-slate-500 mt-1 leading-snug">Download and try it</div>
                    </div>
                    <div className="mt-3 flex items-center justify-end text-slate-400 group-hover:text-blue-600 transition-colors">
                      <span className="text-sm font-bold group-hover:translate-x-0.5 transition-transform">→</span>
                    </div>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        ) : (
          /* ---------- Default Project Detail View for Other Projects ---------- */
          <div className="max-w-5xl mx-auto">
            {/* Project Header */}
            <Reveal className="mb-10">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#1d8fe0] mb-3 font-semibold">
                <span>{project.category}</span>
                <span>·</span>
                <span>{project.year}</span>
                {project.role && (
                  <>
                    <span>·</span>
                    <span>{project.role}</span>
                  </>
                )}
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
                {project.title}
              </h1>
              <p className="text-base sm:text-xl text-slate-600 max-w-3xl leading-relaxed mb-6 font-normal">
                {project.subtitle || project.tagline}
              </p>

              {/* Deliverables / Tags Pills */}
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-mono-tech bg-slate-100 text-slate-700 border border-slate-200 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Reveal>

            {/* Case Study Image / Graphic Content */}
            {project.caseStudyImage ? (
              <Reveal className="w-full mb-12">
                <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-50 flex justify-center p-2 sm:p-4">
                  <img
                    src={project.caseStudyImage}
                    alt={project.caseStudyImageAlt || `${project.title} case study design presentation and UI screens`}
                    className="max-w-full h-auto object-contain block mx-auto rounded-xl shadow-xs"
                  />
                </div>
              </Reveal>
            ) : (
              /* Default Empty Container if no image provided */
              <Reveal className="w-full min-h-[400px] rounded-3xl border-2 border-dashed border-slate-200 bg-slate-50 flex flex-col items-center justify-center text-center p-8 sm:p-12 shadow-xs mb-12">
                <div className="max-w-md space-y-3">
                  <div className="text-3xl">📂</div>
                  <div className="text-xl font-bold text-slate-900">{project.title} Case Study</div>
                  <p className="text-sm text-slate-500 font-mono-tech leading-relaxed">
                    This project page is clean and ready for your content.
                  </p>
                </div>
              </Reveal>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
