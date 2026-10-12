"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SquareArrowOutUpRight } from "lucide-react";

function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

export type CardStackItem = {
  id: string | number;
  title: string;
  description?: string;
  imageSrc?: string;
  href?: string;
  ctaLabel?: string;
  tag?: string;
};

export type CardStackProps<T extends CardStackItem> = {
  items: T[];

  /** Selected index on mount */
  initialIndex?: number;

  /** How many cards are visible around the active (odd recommended) */
  maxVisible?: number;

  /** Card sizing */
  cardWidth?: number;
  cardHeight?: number;

  /** How much cards overlap each other (0..0.8). Higher = more overlap */
  overlap?: number;

  /** Total fan angle (deg). Higher = wider arc */
  spreadDeg?: number;

  /** 3D / depth feel */
  perspectivePx?: number;
  depthPx?: number;
  tiltXDeg?: number;

  /** Active emphasis */
  activeLiftPx?: number;
  activeScale?: number;
  inactiveScale?: number;

  /** Motion */
  springStiffness?: number;
  springDamping?: number;

  /** Behavior */
  loop?: boolean;
  autoAdvance?: boolean;
  intervalMs?: number;
  pauseOnHover?: boolean;

  /** UI */
  showDots?: boolean;
  className?: string;

  /** Hooks */
  onChangeIndex?: (index: number, item: T) => void;

  /** Custom renderer (optional) */
  renderCard?: (item: T, state: { active: boolean }) => React.ReactNode;
};

function wrapIndex(n: number, len: number) {
  if (len <= 0) return 0;
  return ((n % len) + len) % len;
}

/** Minimal signed offset from active index to i, with wrapping (for loop behavior). */
function signedOffset(i: number, active: number, len: number, loop: boolean) {
  const raw = i - active;
  if (!loop || len <= 1) return raw;

  // consider wrapped alternative
  const alt = raw > 0 ? raw - len : raw + len;
  return Math.abs(alt) < Math.abs(raw) ? alt : raw;
}

export function CardStack<T extends CardStackItem>({
  items,
  initialIndex = 0,
  maxVisible = 7,

  cardWidth = 350,
  cardHeight = 310,

  overlap = 0.48,
  spreadDeg = 48,

  perspectivePx = 1100,
  depthPx = 140,
  tiltXDeg = 12,

  activeLiftPx = 22,
  activeScale = 1.03,
  inactiveScale = 0.94,

  springStiffness = 280,
  springDamping = 28,

  loop = true,
  autoAdvance = false,
  intervalMs = 2800,
  pauseOnHover = true,

  showDots = true,
  className,

  onChangeIndex,
  renderCard,
}: CardStackProps<T>) {
  const reduceMotion = useReducedMotion();
  const len = items.length;

  const [active, setActive] = React.useState(() =>
    wrapIndex(initialIndex, len),
  );
  const [hovering, setHovering] = React.useState(false);

  // keep active in bounds if items change
  React.useEffect(() => {
    setActive((a) => wrapIndex(a, len));
  }, [len]);

  React.useEffect(() => {
    if (!len) return;
    onChangeIndex?.(active, items[active]!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const maxOffset = Math.max(0, Math.floor(maxVisible / 2));

  const cardSpacing = Math.max(10, Math.round(cardWidth * (1 - overlap)));
  const stepDeg = maxOffset > 0 ? spreadDeg / maxOffset : 0;

  const canGoPrev = loop || active > 0;
  const canGoNext = loop || active < len - 1;

  const prev = React.useCallback(() => {
    if (!len) return;
    if (!canGoPrev) return;
    setActive((a) => wrapIndex(a - 1, len));
  }, [canGoPrev, len]);

  const next = React.useCallback(() => {
    if (!len) return;
    if (!canGoNext) return;
    setActive((a) => wrapIndex(a + 1, len));
  }, [canGoNext, len]);

  // keyboard navigation (when container focused)
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  // autoplay
  React.useEffect(() => {
    if (!autoAdvance) return;
    if (reduceMotion) return;
    if (!len) return;
    if (pauseOnHover && hovering) return;

    const id = window.setInterval(
      () => {
        if (loop || active < len - 1) next();
      },
      Math.max(700, intervalMs),
    );

    return () => window.clearInterval(id);
  }, [
    autoAdvance,
    intervalMs,
    hovering,
    pauseOnHover,
    reduceMotion,
    len,
    loop,
    active,
    next,
  ]);

  if (!len) return null;

  const activeItem = items[active]!;

  return (
    <div
      className={cn("w-full overflow-hidden py-2", className)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Stage */}
      <div
        className="relative w-full"
        style={{ height: Math.max(370, cardHeight + 60) }}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        {/* background wash / spotlight */}
        <div
          className="pointer-events-none absolute inset-x-0 top-6 mx-auto h-40 w-[70%] rounded-full bg-amber-500/5 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-32 w-[76%] rounded-full bg-black/5 blur-3xl"
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 flex items-center justify-center pt-4"
          style={{
            perspective: `${perspectivePx}px`,
          }}
        >
          <AnimatePresence initial={false}>
            {items.map((item, i) => {
              const off = signedOffset(i, active, len, loop);
              const abs = Math.abs(off);
              const visible = abs <= maxOffset;

              if (!visible) return null;

              const rotateZ = off * stepDeg;
              const x = off * cardSpacing;
              const y = abs * 10;
              const z = -abs * depthPx;

              const isActive = off === 0;

              const scale = isActive ? activeScale : inactiveScale;
              const lift = isActive ? -activeLiftPx : 0;

              const rotateX = isActive ? 0 : tiltXDeg;

              const zIndex = 100 - abs;

              const dragProps = isActive
                ? {
                    drag: "x" as const,
                    dragConstraints: { left: 0, right: 0 },
                    dragElastic: 0.18,
                    onDragEnd: (
                      _e: any,
                      info: { offset: { x: number }; velocity: { x: number } },
                    ) => {
                      if (reduceMotion) return;
                      const travel = info.offset.x;
                      const v = info.velocity.x;
                      const threshold = Math.min(160, cardWidth * 0.22);

                      if (travel > threshold || v > 650) prev();
                      else if (travel < -threshold || v < -650) next();
                    },
                  }
                : {};

              return (
                <motion.div
                  key={item.id}
                  className={cn(
                    "absolute rounded-[22px] border border-slate-100 bg-white shadow-[0_20px_45px_-12px_rgba(0,0,0,0.1),0_8px_16px_-8px_rgba(0,0,0,0.04)]",
                    "will-change-transform select-none overflow-visible",
                    isActive
                      ? "cursor-grab active:cursor-grabbing"
                      : "cursor-pointer",
                  )}
                  style={{
                    width: Math.min(cardWidth, window.innerWidth - 32),
                    height: cardHeight,
                    zIndex,
                    transformStyle: "preserve-3d",
                  }}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: y + 40,
                          x,
                          rotateZ,
                          rotateX,
                          scale,
                        }
                  }
                  animate={{
                    opacity: 1,
                    x,
                    y: y + lift,
                    rotateZ,
                    rotateX,
                    scale,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: springStiffness,
                    damping: springDamping,
                  }}
                  onClick={() => setActive(i)}
                  {...dragProps}
                >
                  <div
                    className="h-full w-full overflow-visible"
                    style={{
                      transform: `translateZ(${z}px)`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {renderCard ? (
                      renderCard(item, { active: isActive })
                    ) : (
                      <DefaultFanCard item={item} active={isActive} index={i} />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Dots navigation centered at bottom */}
      {showDots ? (
        <div className="mt-4 flex items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            {items.map((it, idx) => {
              const on = idx === active;
              return (
                <button
                  key={it.id}
                  onClick={() => setActive(idx)}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all duration-300",
                    on
                      ? "bg-slate-900 scale-125"
                      : "bg-slate-300 hover:bg-slate-400",
                  )}
                  aria-label={`Go to item ${idx + 1}`}
                />
              );
            })}
          </div>
          {activeItem.href ? (
            <a
              href={activeItem.href}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-slate-900 transition"
              aria-label="Open link"
            >
              <SquareArrowOutUpRight className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function PushPin() {
  return (
    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 pointer-events-none filter drop-shadow-[0_6px_8px_rgba(0,0,0,0.2)]">
      <svg
        width="34"
        height="38"
        viewBox="0 0 40 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient
            id="red-pin-head"
            cx="35%"
            cy="30%"
            r="65%"
            fx="30%"
            fy="25%"
          >
            <stop offset="0%" stopColor="#FF6E6E" />
            <stop offset="35%" stopColor="#E50914" />
            <stop offset="75%" stopColor="#B30006" />
            <stop offset="100%" stopColor="#660004" />
          </radialGradient>
          <linearGradient
            id="red-pin-body"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#D90429" />
            <stop offset="50%" stopColor="#900C3F" />
            <stop offset="100%" stopColor="#4A0009" />
          </linearGradient>
          <linearGradient
            id="pin-metal"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#71717A" />
            <stop offset="50%" stopColor="#D4D4D8" />
            <stop offset="100%" stopColor="#52525B" />
          </linearGradient>
        </defs>

        {/* Cast shadow on card surface */}
        <ellipse cx="16" cy="39" rx="10" ry="3.5" fill="#000000" fillOpacity="0.25" />

        {/* Metal pin stem pointing into paper */}
        <path d="M20 28 L20 40" stroke="url(#pin-metal)" strokeWidth="2.5" strokeLinecap="round" />

        {/* Lower metallic rim / base flange */}
        <ellipse cx="20" cy="28" rx="6.5" ry="2.5" fill="#7A0003" />
        <ellipse cx="20" cy="27" rx="6" ry="2" fill="#D90429" />

        {/* Tapered middle body */}
        <path
          d="M14.5 16.5 C14.5 16.5, 15.5 25.5, 20 27 C24.5 25.5, 25.5 16.5, 25.5 16.5 Z"
          fill="url(#red-pin-body)"
        />

        {/* Main top round head */}
        <circle cx="20" cy="14" r="11.5" fill="url(#red-pin-head)" />

        {/* Specular glare / highlight */}
        <ellipse
          cx="16"
          cy="10.5"
          rx="4.5"
          ry="2.8"
          fill="#FFFFFF"
          fillOpacity="0.65"
          transform="rotate(-30 16 10.5)"
        />
        <circle cx="14.5" cy="9" r="1.2" fill="#FFFFFF" fillOpacity="0.85" />
      </svg>
    </div>
  );
}

const PASTEL_THEMES = [
  { bg: "bg-[#FFFDF4]", border: "border-[#F4ECE0]" }, // 01 Soft Warm Vanilla
  { bg: "bg-[#F3F8F4]", border: "border-[#DCEBE0]" }, // 02 Soft Mint Sage
  { bg: "bg-[#F2F7FD]", border: "border-[#D8E6F8]" }, // 03 Soft Powder Sky
  { bg: "bg-[#F8F4FD]", border: "border-[#EADBFA]" }, // 04 Soft Lavender Lilac
  { bg: "bg-[#FFF5F2]", border: "border-[#FADCD5]" }, // 05 Soft Peach Rose
];

export function DefaultFanCard({
  item,
  index = 0,
}: {
  item: CardStackItem;
  active?: boolean;
  index?: number;
}) {
  const itemIndex =
    typeof index === "number"
      ? index
      : typeof item.id === "number"
      ? item.id - 1
      : 0;

  const formattedIndex = String(itemIndex + 1).padStart(2, "0");
  const theme = PASTEL_THEMES[Math.abs(itemIndex) % PASTEL_THEMES.length]!;

  return (
    <div className="relative h-full w-full bg-white rounded-[20px] p-2.5 sm:p-3 flex flex-col select-none overflow-visible">
      {/* 3D Red Pushpin centered at top edge */}
      <PushPin />

      {/* Top area: Mono Index */}
      <div className="pt-0.5 pb-1.5 px-1">
        <span className="font-mono text-sm sm:text-base font-bold text-[#3B3B3B] tracking-wider">
          {formattedIndex}
        </span>
      </div>

      {/* Inner Pastel Box matching reference layout snugly without excess whitespace */}
      <div
        className={cn(
          "w-full rounded-[15px] border p-4 sm:p-4.5 flex-1 flex flex-col justify-start transition-colors duration-300",
          theme.bg,
          theme.border,
        )}
      >
        <h3 className="text-[#111111] font-extrabold text-base sm:text-[1.15rem] leading-snug tracking-tight">
          {item.title}
        </h3>
        {item.description && (
          <p className="mt-2.5 text-[#5A5A5A] font-normal text-xs sm:text-[0.875rem] leading-relaxed">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
}

export default CardStack;
