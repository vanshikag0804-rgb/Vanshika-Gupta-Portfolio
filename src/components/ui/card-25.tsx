import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Prop types
export interface Stat {
  icon: React.ReactNode;
  label: string;
}

export interface AnimatedHikeCardProps {
  title?: string;
  images: string[];
  stats?: Stat[];
  description?: string;
  href?: string;
  className?: string;
}

export const AnimatedHikeCard = React.forwardRef<
  HTMLAnchorElement,
  AnimatedHikeCardProps
>(({ title, images, stats, description, href, className }, ref) => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [isDeckHovered, setIsDeckHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const check = () => setIsDesktop(typeof window !== "undefined" && window.innerWidth >= 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const total = images.length;
  const center = (total - 1) / 2;
  const restStep = total > 4 ? 34 : 48;
  const hoverStep = total > 4 ? (isDesktop ? 85 : 55) : (isDesktop ? 100 : 70);
  const restMaxRot = total > 4 ? 5 : 4;
  const hoverMaxRot = total > 4 ? 11 : 8;
  const cardWidthClass = total > 4 ? "w-[64%] sm:w-[62%]" : "w-[68%]";
  const isDeckActive = isDeckHovered || hoveredCardIndex !== null;

  return (
    <a
      ref={ref}
      href={href}
      className={cn(
        "group relative block w-full max-w-md sm:max-w-xl lg:max-w-[580px] cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 text-slate-900 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-xl",
        className
      )}
      aria-label={`Learn more about ${title || 'about'}`}
    >
      <div className="flex flex-col">
        {/* Card Header: Title */}
        {title && (
          <div className="mb-5 sm:mb-6 flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">{title}</h2>
          </div>
        )}

        {/* Stacked Large Polaroid Images with Extra-Wide Interactive Fan Animation */}
        <div
          className="relative mb-6 sm:mb-8 h-80 sm:h-[400px] lg:h-[450px]"
          onMouseEnter={() => setIsDeckHovered(true)}
          onMouseLeave={() => {
            setIsDeckHovered(false);
            setHoveredCardIndex(null);
          }}
        >
          {images.map((src, index) => {
            const isHovered = hoveredCardIndex === index;
            const restX = index * restStep;
            const restR = total > 1 ? Number((((index - center) / center) * restMaxRot).toFixed(1)) : 0;
            const hoverX = index * hoverStep;
            const hoverR = total > 1 ? Number((((index - center) / center) * hoverMaxRot).toFixed(1)) : 0;

            // Extra generous clearance around the currently hovered card
            let pushOffset = 0;
            if (hoveredCardIndex !== null && !isHovered) {
              pushOffset = index < hoveredCardIndex ? (isDesktop ? -20 : -10) : (isDesktop ? 30 : 16);
            }

            const currentX = (isDeckActive ? hoverX : restX) + pushOffset;
            const currentR = isHovered ? 0 : (isDeckActive ? hoverR : restR);
            const currentY = isHovered ? -26 : 0;
            const currentScale = isHovered ? 1.09 : 1;
            const zIndex = isHovered ? 50 : (total - index);

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCardIndex(index)}
                onMouseLeave={() => setHoveredCardIndex((prev) => (prev === index ? null : prev))}
                onClick={(e) => {
                  e.stopPropagation();
                  setHoveredCardIndex(index);
                }}
                className={cn(
                  "absolute h-full p-3 pb-10 sm:p-3.5 sm:pb-12 flex flex-col overflow-hidden rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 transition-all duration-300 ease-out cursor-pointer",
                  cardWidthClass,
                  isHovered
                    ? "shadow-[0_25px_50px_rgba(0,0,0,0.28)] border-slate-300 ring-2 ring-slate-900/10"
                    : "shadow-md"
                )}
                style={{
                  transform: `translate3d(${currentX}px, ${currentY}px, 0) rotate(${currentR}deg) scale(${currentScale})`,
                  zIndex,
                  transformOrigin: "center bottom",
                }}
              >
                <div className="w-full h-full overflow-hidden rounded-lg sm:rounded-xl bg-slate-100">
                  <img
                    src={src}
                    alt={`${title || 'Preview'} view ${index + 1}`}
                    className="h-full w-full object-cover object-top pointer-events-none select-none"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        {stats && stats.length > 0 && (
          <div className="mb-4 flex items-center space-x-4 text-sm text-slate-500 font-medium">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-1.5">
                {stat.icon}
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Description */}
        {description && (
          <p className="text-sm sm:text-[15px] leading-relaxed text-slate-600">
            {description}
          </p>
        )}
      </div>
    </a>
  );
});

AnimatedHikeCard.displayName = "AnimatedHikeCard";
