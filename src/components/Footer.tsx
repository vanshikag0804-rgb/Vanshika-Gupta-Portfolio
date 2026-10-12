import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { scrollToTarget } from '../utils/smoothScroll';

// Footer: compact dark mode layout with avatar, email, social links, resume, copyright
export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="panel panel--night border-t border-white/10 bg-[#0B0D17] text-white py-12 sm:py-16 !pb-8">
      <div id="contact" className="panel-inner max-w-6xl mx-auto px-4 sm:px-6">
        {/* 3-Column Footer Grid with Legible Big Text */}
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10 sm:gap-12">
          <div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-white/10 border border-white/20 shrink-0 shadow-md">
                <img
                  src={PERSONAL_INFO.avatar}
                  onError={(e) => {
                    if (!e.currentTarget.src.endsWith('/images/portrait.jpg')) e.currentTarget.src = '/images/portrait.jpg';
                  }}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{PERSONAL_INFO.name}</div>
                <div className="text-sm sm:text-base text-slate-300 font-medium mt-0.5">{PERSONAL_INFO.title}</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-slate-300 leading-relaxed text-base sm:text-lg font-normal">
              Designing products and experiences that make life simpler.
            </p>

            {/* CTAs shifted directly below Vanshika Gupta Product Designer section */}
            <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3 sm:gap-3.5">
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Hiring%20Opportunity%20-%20Vanshika%20Gupta`}
                className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-slate-950 font-bold text-sm sm:text-base hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-md"
              >
                Hire Me
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Discuss%20Work%20-%20Vanshika%20Gupta`}
                className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/10 text-white border border-white/20 font-bold text-sm sm:text-base hover:bg-white/20 hover:border-white/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Discuss My Work
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs sm:text-sm font-mono-tech uppercase font-bold tracking-wider text-cyan-400 mb-4">
              Contact
            </div>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:text-cyan-400 transition-colors font-semibold break-all text-base sm:text-lg block">
              {PERSONAL_INFO.email}
            </a>
            <div className="mt-2.5 text-sm sm:text-base text-slate-400">{PERSONAL_INFO.location}</div>
          </div>

          <div>
            <div className="text-xs sm:text-sm font-mono-tech uppercase font-bold tracking-wider text-cyan-400 mb-4">
              Elsewhere
            </div>
            <ul className="space-y-3 text-base sm:text-lg">
              <li>
                <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-200 hover:text-cyan-400 transition-colors font-medium inline-flex items-center gap-1.5">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href={PERSONAL_INFO.socials.behance} target="_blank" rel="noreferrer" className="text-slate-200 hover:text-cyan-400 transition-colors font-medium inline-flex items-center gap-1.5">
                  Behance ↗
                </a>
              </li>
              <li>
                <a href={PERSONAL_INFO.resumeUrl} target="_blank" rel="noreferrer" className="text-slate-200 hover:text-cyan-400 transition-colors font-medium inline-flex items-center gap-1.5">
                  Resume ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Giant name background banner */}
        <div className="footer-giant opacity-10 my-4 sm:my-6 select-none pointer-events-none" aria-hidden="true">
          {PERSONAL_INFO.name.split(' ')[0]}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/10 font-mono-tech text-sm sm:text-base text-slate-400">
          <span>
            © {year} {PERSONAL_INFO.name}. All rights reserved.
          </span>
          <button onClick={() => scrollToTarget(0)} className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-medium cursor-pointer">
            Back to top <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
