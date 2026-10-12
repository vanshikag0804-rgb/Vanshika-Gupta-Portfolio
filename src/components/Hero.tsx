import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ArrowRight, Heart, MessageSquare, Volume2, VolumeX } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playPopSound, playChimeSound, playClickSound } from '../utils/sound';
import confetti from 'canvas-confetti';
import { scrollToTarget } from '../utils/smoothScroll';

interface HeroProps {
  isMusicOn: boolean;
  onToggleMusic: () => void;
  onCycleTheme: () => void;
  onOpenCommandPalette: () => void;
}

// Swap to the original JPG if the transparent PNG hasn't been generated yet.
// The JPGs have white backgrounds, so multiply-blend them into the page.
const withFallback = (fallback: string) => (e: React.SyntheticEvent<HTMLImageElement>) => {
  const img = e.currentTarget;
  if (img.src.endsWith(fallback)) return;
  img.src = fallback;
  img.classList.add('mix-blend-multiply');
};

const GIANT_NAME = 'Vanshika';

const DotGridIcon: React.FC = () => (
  <svg viewBox="0 0 20 20" className="w-5 h-5" fill="currentColor" aria-hidden="true">
    {[2, 7, 12, 17].flatMap((y, row) =>
      [2, 7, 12, 17].map((x, col) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="1.3" opacity={(row + col) % 2 === 0 ? 1 : 0.45} />
      ))
    )}
  </svg>
);

const MoreDotsIcon: React.FC = () => (
  <svg viewBox="0 0 24 8" className="w-6 h-2" fill="currentColor" aria-hidden="true">
    {[3, 9, 15, 21].map((x) => (
      <rect key={x} x={x - 2} y="2" width="4" height="4" rx="0.8" />
    ))}
  </svg>
);

export const Hero: React.FC<HeroProps> = ({
  isMusicOn,
  onToggleMusic,
  onCycleTheme,
  onOpenCommandPalette,
}) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [hasLiked, setHasLiked] = useState(false);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll progress through the hero (0 → 1) drives the exit transition in CSS
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = sectionRef.current;
      if (!el) return;
      const progress = Math.min(1, Math.max(0, window.scrollY / el.offsetHeight));
      el.style.setProperty('--exit', progress.toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Parallax on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / 45;
      const y = (e.clientY - innerHeight / 2) / 45;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const parallax = (depth: number) => ({
    transform: `translate3d(${mouseOffset.x * depth}px, ${mouseOffset.y * depth}px, 0)`,
  });

  const handleHeartClick = () => {
    playChimeSound();
    setHasLiked(!hasLiked);
    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.5, x: 0.74 },
      colors: ['#38bdf8', '#3b9cf5', '#818cf8', '#f43f5e'],
    });
  };

  const handleTagClick = (tag: string) => {
    playPopSound();
    setActiveTag(activeTag === tag ? null : tag);
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="hero-stage relative lg:h-[100svh] pt-24 lg:pt-0 pb-10 lg:pb-0 overflow-hidden select-none"
    >
      {/* Stage: giant name, cutout portrait and stickers (a 16:9 composition scaled to fill the screen on desktop) */}
      <div className="hero-comp relative h-[70vh] min-h-[440px]">
        {/* Giant "Vanshika" behind the portrait */}
        <div
          className="absolute inset-x-0 top-[26%] flex justify-center lg:justify-end lg:top-[27.2%] lg:right-[1.6%] lg:left-auto z-0 transition-transform duration-300 ease-out"
          style={parallax(-0.35)}
        >
          <h1 className="hero-giant-title relative whitespace-nowrap" aria-label="Vanshika">
            {GIANT_NAME.split('').map((letter, i) => (
              <span
                key={i}
                aria-hidden="true"
                className="hero-letter"
                style={{ '--d': `${0.35 + (GIANT_NAME.length - 1 - i) * 0.06}s` } as React.CSSProperties}
              >
                {letter}
              </span>
            ))}
          </h1>
        </div>

        {/* Cutout portrait */}
        <div
          className="absolute bottom-0 lg:bottom-[6.5%] left-1/2 lg:left-[52.6%] -translate-x-1/2 h-full lg:h-[84%] z-10 transition-transform duration-200 ease-out"
          style={parallax(0.25)}
        >
          <div className="hero-enter-portrait relative h-full">
            <img
              src="/heroimg.png"
              onError={withFallback('/images/portrait.jpg')}
              alt="Vanshika Gupta - Product Designer"
              className="h-full w-auto max-w-[94vw] lg:max-w-none object-contain object-bottom pointer-events-none"
            />
            {/* Soft ground shadow under the feet */}
            <div className="absolute bottom-[-1%] left-1/2 -translate-x-1/2 w-[70%] h-6 bg-black/15 dark:bg-black/60 rounded-[50%] blur-xl pointer-events-none -z-10" />
          </div>
        </div>

        {/* Sticker: blue heart speech bubble */}
        <div
          className="absolute top-[52%] right-[25%] lg:top-[46.6%] lg:right-auto lg:left-[72.7%] z-20 transition-transform duration-300 ease-out"
          style={parallax(0.8)}
        >
          <div className="hero-enter-pop" style={{ '--d': '1.45s' } as React.CSSProperties}>
            <button
              onClick={handleHeartClick}
              className="heart-bubble animate-float-2"
              title="Leave some love!"
              aria-label="Like"
            >
              <Heart
                className={`w-1/2 h-1/2 transition-colors ${
                  hasLiked ? 'fill-rose-500 text-rose-500' : 'fill-[#3b9cf5] text-[#3b9cf5]'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom-left: statement + tags */}
      <div className="relative z-30 px-5 sm:px-8 mt-8 lg:mt-0 lg:px-0 lg:absolute lg:left-[1.8vw] lg:bottom-[8.5vh] lg:max-w-[44vw]">
        <h2
          className="hero-statement hero-reveal-ltr"
          style={{ '--d': '0.7s' } as React.CSSProperties}
        >
          Curious by nature. Obsessed with details. I design simple, thoughtful products that solve{' '}
          <span className="inline-block bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-300 px-2 py-0.5 rounded-lg">
            real problems
          </span>
          .
        </h2>

        <div className="flex flex-wrap gap-3 lg:gap-[1.5vw] mt-5 lg:mt-[3.4vh]">
          {PERSONAL_INFO.heroTags.slice(0, 2).map((tag, i) => (
            <span
              key={tag}
              className="hero-reveal-ltr"
              style={{ '--d': `${1.15 + i * 0.1}s` } as React.CSSProperties}
            >
              <button
                onClick={() => handleTagClick(tag)}
                className={`hero-tag ${activeTag === tag ? 'is-active' : ''}`}
              >
                {tag}
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom-right: utility icons + ideas ticker */}
      <div className="relative z-30 px-5 sm:px-8 mt-10 lg:mt-0 lg:px-0 lg:absolute lg:right-[2.4vw] lg:bottom-[21vh] flex flex-col items-start lg:items-end">
        <div
          className="flex items-center gap-5 text-[var(--text-secondary)] hero-reveal-rtl"
          style={{ '--d': '0.9s' } as React.CSSProperties}
        >
          <button
            onClick={() => {
              playPopSound();
              onCycleTheme();
            }}
            className="hero-icon-btn"
            title="Change theme"
            aria-label="Change theme"
          >
            <DotGridIcon />
          </button>
          <button
            onClick={onToggleMusic}
            className="hero-icon-btn"
            title={isMusicOn ? 'Pause music' : 'Play music'}
            aria-label={isMusicOn ? 'Pause background music' : 'Play background music'}
            aria-pressed={isMusicOn}
          >
            {isMusicOn ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          </button>
          <button
            onClick={() => {
              playPopSound();
              scrollToTarget(document.getElementById('about') || document.getElementById('footer'));
            }}
            className="hero-icon-btn"
            title="Say hello"
            aria-label="Say hello"
          >
            <MessageSquare className="w-5 h-5" />
          </button>
          <button
            onClick={() => {
              playClickSound();
              onOpenCommandPalette();
            }}
            className="hero-icon-btn"
            title="More (⌘K)"
            aria-label="More"
          >
            <MoreDotsIcon />
          </button>
        </div>

        <div
          className="flex flex-wrap items-center gap-4 mt-6 hero-reveal-rtl"
          style={{ '--d': '1.05s' } as React.CSSProperties}
        >
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              playClickSound();
              scrollToTarget(document.getElementById('work'));
            }}
            className="hero-ideas-pill"
          >
            WORK
            <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.8} />
          </a>
          <span className="hero-mono text-[var(--text-muted)]">3 CASE STUDIES · 0 → 1 PRODUCTS</span>
        </div>

        <button
          onClick={() => {
            playPopSound();
            scrollToTarget(document.getElementById('experiments'));
          }}
          className="hero-mono mt-5 flex items-center gap-3 group hero-reveal-rtl"
          style={{ '--d': '1.2s' } as React.CSSProperties}
        >
          <span className="text-[var(--text-muted)]">LATEST</span>
          <span className="flex items-center gap-2 text-[#1d8fe0] group-hover:underline">
            DESIGN STORYBOOK
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </button>
      </div>
    </section>
  );
};
