"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { MapPin } from "lucide-react";

type CSSVars = CSSProperties & Record<string, string | number | undefined>;

export interface BulletItem {
  text: string;
  boldWords: string[];
}

export interface HoverStackCard {
  id?: number;
  date?: string;
  title?: string;
  subtitle?: string;
  location?: string;
  gradient?: string;
  iconText?: string;
  logoUrl?: string;
  logoAlt?: string;
  quote?: string;
  bullets?: BulletItem[];
  tag?: string;
  bg?: string;
  accent?: string;
}

interface PreparedHoverStackCard extends HoverStackCard {
  _rotation: number;
  _baseX: number;
  _baseZ: number;
}

export interface HoverStackProps {
  cards?: HoverStackCard[];
  cardWidth?: number;
  cardHeight?: number;
  overlap?: number;
  hoverLift?: number;
  pushDistance?: number;
  spread?: number;
  rotation?: number;
  duration?: number;
  accentColor?: string;
  className?: string;
}

const PRESET_ROTATIONS = [-6, 3, -2, 4, -3, 5, 2, -4];

const DEFAULT_CARDS: HoverStackCard[] = [
  {
    date: "Dec '23 - Apr '24",
    title: "UI / UX Design Intern",
    subtitle: "Gida Technologies",
    location: "Bengaluru, KA",
    iconText: "g",
    gradient: "from-cyan-500 to-blue-600",
    bullets: [
      {
        text: "Designed key experiences for the HDFC Ergo Here App, simplifying insurance purchase journeys.",
        boldWords: ["HDFC Ergo Here App,"],
      },
      {
        text: "Led end to end design for Here Pets, supporting the launch of pet insurance services.",
        boldWords: ["Here Pets,"],
      },
    ],
  },
  {
    date: "May '24 - Aug '24",
    title: "Product Design Intern",
    subtitle: "Mygate · Product Design",
    location: "Bengaluru, KA",
    iconText: "m",
    gradient: "from-amber-400 to-yellow-500",
    bullets: [
      {
        text: "Designed features and improvements for smart locks and connected device experiences.",
        boldWords: ["smart locks", "connected device"],
      },
      {
        text: "Led design for the Smart Video Doorbell MVP, from early concepts to validation.",
        boldWords: ["Smart Video Doorbell MVP,"],
      },
    ],
  },
  {
    date: "Sep '24 - Nov '24",
    title: "UI & Visual Designer",
    subtitle: "Aavtor AI · Freelance",
    location: "Remote · India",
    iconText: "a",
    gradient: "from-indigo-500 to-purple-600",
    bullets: [
      {
        text: "Crafted polished, accessible interfaces with a visual language that holds up past the first screen.",
        boldWords: ["polished, accessible interfaces"],
      },
      {
        text: "Architected high-contrast UI modes, WCAG AAA color ramps, and fluid motion micro-interactions.",
        boldWords: ["high-contrast UI modes, WCAG AAA"],
      },
    ],
  },
];

// Helper to render bullet text with highlighted bold words matching reference
function RenderBulletText({ text, boldWords }: { text: string; boldWords: string[] }) {
  let parts: Array<{ text: string; isBold: boolean }> = [{ text, isBold: false }];

  boldWords.forEach((word) => {
    const nextParts: Array<{ text: string; isBold: boolean }> = [];
    parts.forEach((part) => {
      if (part.isBold) {
        nextParts.push(part);
        return;
      }
      const idx = part.text.indexOf(word);
      if (idx !== -1) {
        if (idx > 0) nextParts.push({ text: part.text.substring(0, idx), isBold: false });
        nextParts.push({ text: word, isBold: true });
        if (idx + word.length < part.text.length) {
          nextParts.push({ text: part.text.substring(idx + word.length), isBold: false });
        }
      } else {
        nextParts.push(part);
      }
    });
    parts = nextParts;
  });

  return (
    <span>
      {parts.map((p, i) =>
        p.isBold ? (
          <strong key={i} className="font-extrabold text-[#0F172A]">
            {p.text}
          </strong>
        ) : (
          <span key={i}>{p.text}</span>
        )
      )}
    </span>
  );
}

/** Card Content Renderer */
function InnerCardContent({ card }: { card: HoverStackCard; index?: number }) {
  return (
    <div className="w-full h-full flex flex-col text-left text-slate-900 font-sans select-none overflow-hidden">
      {/* Header matching reference */}
      <div className="p-5 sm:p-6 pb-4 sm:pb-5 border-b border-slate-100 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          {/* Stamp Icon */}
          <div className="p-0.5 bg-white rounded-lg shadow-xs border border-slate-200 shrink-0">
            <div className="w-10 h-10 rounded-md bg-[#111625] flex items-center justify-center text-[#00E5FF] text-xl font-bold font-sans overflow-hidden">
              {card.logoUrl ? (
                <img
                  src={card.logoUrl}
                  alt={card.logoAlt || `${card.subtitle ? card.subtitle.split('·')[0].trim() : 'Company'} logo`}
                  className="w-full h-full object-contain p-1 bg-white"
                />
              ) : (
                card.iconText || "g"
              )}
            </div>
          </div>
          <div className="min-w-0">
            <h4 className="text-base sm:text-[1.05rem] font-bold text-slate-900 tracking-tight leading-snug truncate">
              {card.title || "UI / UX Design Intern"}
            </h4>
            <p className="text-xs sm:text-sm font-normal text-slate-500 truncate mt-0.5">
              {card.subtitle || "Gida Technologies"}
            </p>
          </div>
        </div>

        {/* Location Pin */}
        {card.location && (
          <div className="flex items-center gap-1 text-slate-600 text-xs sm:text-[13px] font-normal shrink-0 pt-0.5">
            <MapPin className="w-3.5 h-3.5 text-slate-600 fill-slate-400/20" />
            <span className="truncate">{card.location}</span>
          </div>
        )}
      </div>

      {/* Bullets List */}
      <div className="p-5 sm:p-6 pt-4 sm:pt-5 flex-1 overflow-hidden">
        {card.bullets && card.bullets.length > 0 ? (
          <ul className="space-y-3.5 text-slate-700 text-xs sm:text-[0.925rem] leading-[1.6]">
            {card.bullets.map((bullet, bIdx) => (
              <li key={bIdx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E293B] mt-2 shrink-0" />
                <RenderBulletText text={bullet.text} boldWords={bullet.boldWords} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xs text-slate-600 leading-relaxed font-normal">“{card.quote}”</p>
        )}
      </div>
    </div>
  );
}

export function HoverStack({
  cards = DEFAULT_CARDS,
  cardWidth = 440,
  cardHeight = 310,
  overlap = 140,
  hoverLift = 26,
  pushDistance = 320,
  spread = 20,
  rotation = 4,
  duration = 0.5,
  accentColor = "transparent",
  className = "",
}: HoverStackProps) {
  void accentColor;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isTouch, setIsTouch] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false)
  );

  useEffect(() => {
    setHasMounted(true);
    const mq = window.matchMedia("(pointer: coarse)");
    const update = () => setIsTouch(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;

    const onChange = (event: MediaQueryListEvent) => {
      setReduceMotion(event.matches);
      if (event.matches) setActiveIndex(null);
    };

    setReduceMotion(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  const preparedCards: PreparedHoverStackCard[] = useMemo(() => {
    const rotationScale = rotation / 7;

    return cards.map((card, index) => {
      const presetRotation =
        PRESET_ROTATIONS[index % PRESET_ROTATIONS.length] +
        (index % 2 === 0 ? 0 : 1);

      const baseX = index * overlap;

      return {
        ...card,
        _rotation: presetRotation * rotationScale,
        _baseX: baseX,
        _baseZ: index + 1,
      };
    });
  }, [cards, overlap, rotation]);

  const getCardStyle = (card: PreparedHoverStackCard, index: number): CSSVars => {
    const isActive = activeIndex === index;
    const hasActive = activeIndex !== null;

    let x = card._baseX;
    let y = 0;
    let rotate = card._rotation;
    let zIndex = card._baseZ;
    let scale = 1;

    if (reduceMotion) {
      if (isActive) zIndex = 999;

      return {
        "--card-width": `${cardWidth}px`,
        "--card-height": `${cardHeight}px`,
        transform: `translate3d(${x}px, ${y}px, 0) rotate(${rotate}deg) scale(1)`,
        zIndex,
        transition: "none",
        background: card.bg || "#ffffff",
      };
    }

    let boxShadow;

    if (hasActive) {
      if (index < activeIndex) {
        x -= pushDistance;
        y -= spread * 0.4;
      } else if (index > activeIndex) {
        x += pushDistance;
        y += spread * 0.4;
      }

      if (isActive) {
        x = card._baseX;
        y = -hoverLift;
        rotate = 0;
        zIndex = 999;
        scale = 1.025;
        boxShadow = `0 16px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0,0,0,0.04)`;
      }
    }

    const activeMs = Math.max(0, duration) * 1000;
    const transition = isActive
      ? `transform ${activeMs}ms cubic-bezier(0.22, 1.6, 0.32, 1), box-shadow ${activeMs * (900 / 700)}ms cubic-bezier(0.22, 1.6, 0.32, 1)`
      : hasActive
        ? `transform ${activeMs}ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow ${activeMs}ms cubic-bezier(0.22, 1, 0.36, 1)`
        : `transform ${activeMs * (480 / 700)}ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow ${activeMs * (380 / 700)}ms cubic-bezier(0.4, 0, 0.2, 1)`;

    return {
      "--card-width": `${cardWidth}px`,
      "--card-height": `${cardHeight}px`,
      transform: `translate3d(${x}px, ${y}px, 0) rotate(${rotate}deg) scale(${scale})`,
      zIndex,
      transition,
      background: card.bg || "#ffffff",
      boxShadow: boxShadow || "0 8px 25px rgba(0, 0, 0, 0.05)",
    };
  };

  const totalWidth =
    preparedCards.length > 0
      ? preparedCards.at(-1)!._baseX + cardWidth
      : cardWidth;

  if (!hasMounted) {
    return null;
  }

  return (
    <div className={`relative w-full px-[2vw] overflow-x-auto overflow-y-visible no-scrollbar pt-20 sm:pt-24 pb-8 ${className}`}>
      {isTouch ? (
        <div className="flex flex-col gap-16 pt-12">
          {cards.map((card, index) => (
            <div key={card.id ?? index} className="relative w-full">
              {/* Floating Date Pill + Pin Stem */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
                <div className="px-4 py-1.5 rounded-full bg-[#EBF3FE] border border-[#BED7FE] text-[#1E293B] text-xs font-medium shadow-2xs whitespace-nowrap">
                  {card.date || "Dec '23 - Apr '24"}
                </div>
                <div className="w-[1.5px] h-2 bg-[#CBD5E1]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1] border border-[#B0C4DE]" />
                <div className="w-[1.5px] h-2 bg-[#CBD5E1]" />
              </div>

              <div className="relative flex w-full cursor-default select-none flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-md">
                <InnerCardContent card={card} index={index} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          className="relative mx-auto flex justify-center"
          style={{
            "--stack-width": `${totalWidth}px`,
            "--stack-height": `${cardHeight + (reduceMotion ? 0 : hoverLift) + 40}px`,
            width: "var(--stack-width)",
            height: "var(--stack-height)",
          } as CSSVars}
        >
          {preparedCards.map((card, index) => (
            <div
              key={card.id ?? index}
              className="absolute left-0 top-0 flex h-[var(--card-height)] w-[var(--card-width)] origin-[center_center] cursor-pointer select-none flex-col justify-between overflow-visible rounded-2xl border border-slate-200/80 will-change-transform bg-white"
              style={getCardStyle(card, index)}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Floating Date Pill + Pin Stem at top center */}
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none">
                <div className="px-4 py-1.5 rounded-full bg-[#EBF3FE] border border-[#BED7FE] text-[#1E293B] text-xs font-medium shadow-2xs whitespace-nowrap">
                  {card.date || "Dec '23 - Apr '24"}
                </div>
                <div className="w-[1.5px] h-2 bg-[#CBD5E1]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1] border border-[#B0C4DE]" />
                <div className="w-[1.5px] h-2 bg-[#CBD5E1]" />
              </div>

              <InnerCardContent card={card} index={index} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HoverStack;
