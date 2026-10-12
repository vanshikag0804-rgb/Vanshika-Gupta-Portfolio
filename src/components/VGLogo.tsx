import React from 'react';

interface VGLogoProps {
  isLightPage?: boolean;
  className?: string;
}

/**
 * VG Logo Monogram based on the site favicon.
 * - If page is white/light: black background, white text ("VG")
 * - If page is black/dark: white background, black text ("VG")
 */
export const VGLogo: React.FC<VGLogoProps> = ({ isLightPage = false, className = '' }) => {
  const bgFill = isLightPage ? '#000000' : '#ffffff';
  const textFill = isLightPage ? '#ffffff' : '#000000';

  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="VG Logo"
    >
      <rect
        width="512"
        height="512"
        rx="96"
        fill={bgFill}
        className="transition-colors duration-300"
      />
      <path
        d="M187.22 409.00 L134.14 409.00 Q132.21 409.00 132.00 406.86 L71.43 105.71 Q71.00 104.00 73.14 104.00 L122.80 104.00 Q124.51 104.00 124.94 105.71 L160.90 306.48 L196.00 105.71 Q196.43 104.00 198.14 104.00 L247.15 104.00 Q249.51 104.00 248.87 105.71 L189.36 406.86 Q189.15 409.00 187.22 409.00 Z M355.40 413.21 Q331.64 413.21 312.59 401.44 Q293.33 389.66 281.67 369.76 Q270.00 349.85 270.00 325.24 L270.00 186.33 Q270.00 162.36 281.77 142.66 Q293.33 122.76 312.81 110.88 Q332.29 99.00 355.40 99.00 Q379.59 99.00 399.06 110.56 Q418.54 122.33 429.99 142.02 Q441.44 161.71 441.44 186.33 L441.44 206.45 Q441.44 208.16 439.30 208.16 L390.08 208.16 Q388.36 208.16 388.36 206.45 L388.36 189.75 Q388.36 173.06 378.95 162.14 Q369.53 151.23 355.40 151.23 Q342.77 151.23 332.93 161.71 Q323.08 172.20 323.08 186.33 L323.08 325.24 Q323.08 339.58 332.71 349.96 Q342.34 360.34 355.40 360.34 Q369.53 360.34 378.95 350.17 Q388.36 340.01 388.36 325.24 L388.36 303.62 L357.76 303.62 Q355.40 303.62 355.40 301.48 L355.40 252.47 Q355.40 250.32 357.76 250.32 L439.73 250.32 Q441.44 250.32 441.44 252.47 L441.44 325.24 Q441.44 349.85 429.89 369.76 Q418.11 389.66 398.85 401.44 Q379.59 413.21 355.40 413.21 Z"
        fill={textFill}
        className="transition-colors duration-300"
      />
    </svg>
  );
};
