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

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      <div className="pt-28 sm:pt-36 pb-24 max-w-5xl mx-auto px-4 sm:px-8">
        {/* Back Button */}
        <Reveal className="mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 cursor-pointer shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Work
          </button>
        </Reveal>

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
                alt={`${project.title} Full Case Study`}
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
    </div>
  );
};
