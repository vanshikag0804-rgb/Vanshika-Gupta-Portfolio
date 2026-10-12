import React from 'react';
import { Reveal, SectionHeading } from './Reveal';
import { AnimatedHikeCard } from './ui/card-25';

const aboutCardProps = {
  images: [
    "/heroimg.png",
    "/images/projects/paymob-cover.jpg",
    "/images/projects/aavtor-cover.jpg",
    "/images/projects/storybook-cover.jpg",
    "/images/projects/storybook-exp2.jpg",
    "/images/portrait.jpg",
  ],
  description: "Curious, detail-obsessed product designer crafting simple, thoughtful experiences.",
  href: "#work",
};

// "Who am I?": clean section featuring AnimatedHikeCard component
export const AboutSection: React.FC = () => (
  <section id="about" className="py-12 sm:py-20 bg-white text-slate-900 overflow-hidden">
    <div className="max-w-[1240px] mx-auto px-4 sm:px-6 grid lg:grid-cols-[1.12fr_0.88fr] gap-10 lg:gap-14 items-center">
      {/* Animated Stacked Image Hike Card */}
      <Reveal className="flex justify-center">
        <AnimatedHikeCard {...aboutCardProps} className="w-full" />
      </Reveal>

      <div>
        <Reveal>
          <SectionHeading eyebrow="About me" title="Who am I?" />
        </Reveal>

        <Reveal delay={0.1} className="mt-4">
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-slate-700 font-normal">
            Good design is mostly listening — my best screens came from asking one more question, not from adding one more feature. Curious, a little obsessive about details, and happiest when a teammate says 'oh, that was easy'. I like building things as much as designing them.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);
