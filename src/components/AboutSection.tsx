import React from 'react';
import { Reveal } from './Reveal';
import { AnimatedHikeCard } from './ui/card-25';

const aboutCardProps = {
  images: [
    "/images/about/workspace.jpg",
    "/images/about/sculpture.jpg",
    "/images/about/office.jpg",
    "/images/about/presentation.jpg",
    "/images/about/campus.jpg",
    "/images/about/cat.jpg",
  ],
  imageAlts: [
    "Product design workspace with laptop displaying Figma dashboard UI mockups next to an open notebook of wireframe sketches",
    "Vanshika Gupta assembling a scrap-metal dragon sculpture made of bicycle chains, gears, and mechanical parts",
    "Modern My Hub office reception lounge with curved sofa, vertical garden wall, and glass entrance",
    "Design school lecture presentation slide on portfolio preparation and interview questions at SSPAD",
    "Symbiosis International University campus architecture with classical columns and central dome tower",
    "White kitten resting curled up on a black backpack",
  ],
  description: "Curious, detail-obsessed product designer crafting simple, thoughtful experiences.",
  href: "#work",
};

// "My journey so far": personal story and interactive photo deck
export const AboutSection: React.FC = () => (
  <section id="about" className="py-12 sm:py-20 bg-white text-slate-900 overflow-hidden">
    <div className="max-w-[1240px] mx-auto px-4 sm:px-6 grid lg:grid-cols-[1.05fr_1.15fr] gap-10 lg:gap-14 items-center">
      {/* Animated Stacked Image Hike Card */}
      <Reveal className="flex justify-center">
        <AnimatedHikeCard {...aboutCardProps} className="w-full" />
      </Reveal>

      <div className="flex flex-col justify-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            My journey so far
          </h2>
          <p className="mt-3 text-lg sm:text-xl lg:text-[1.35rem] font-semibold text-slate-800 tracking-tight leading-snug">
            Artist at heart, designer by practice, curious by nature.
          </p>
        </Reveal>

        <div className="mt-6 sm:mt-7 space-y-4 sm:space-y-5 text-base sm:text-[17px] lg:text-[18px] leading-[1.75] sm:leading-[1.8] text-slate-600 font-normal">
          <Reveal delay={0.08}>
            <p>
              I’m Vanshika Gupta. I like figuring out how things work, questioning the obvious, and turning ideas into something tangible. Product design lets me bring together my love for creativity, problem-solving, and technology.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <p>
              When I’m not designing, I’m probably making art, writing, learning a new song, or falling down a rabbit hole of random curiosity.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);
