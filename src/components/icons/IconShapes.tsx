// SVG Icon Components for the portfolio

export const MusicNoteIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className}>
    <path
      d="M44 12V40C44 46.627 38.627 52 32 52C25.373 52 20 46.627 20 40C20 33.373 25.373 28 32 28C34.762 28 37.314 28.895 39.374 30.416L40 30V12H44Z"
      fill="currentColor"
    />
    <path
      d="M40 12L52 8V24L40 28V12Z"
      fill="currentColor"
    />
  </svg>
);

export const FilmClapIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className}>
    <rect x="12" y="24" width="40" height="28" rx="4" fill="currentColor" />
    <rect x="16" y="28" width="8" height="8" rx="1" fill="hsl(var(--icon-green))" />
    <rect x="28" y="28" width="8" height="8" rx="1" fill="hsl(var(--icon-green))" />
    <rect x="40" y="28" width="8" height="8" rx="1" fill="hsl(var(--icon-green))" />
    <path d="M12 20L20 12H44L52 20H12Z" fill="currentColor" />
    <rect x="16" y="14" width="4" height="6" rx="1" fill="hsl(var(--icon-green))" transform="rotate(-15 16 14)" />
    <rect x="28" y="12" width="4" height="6" rx="1" fill="hsl(var(--icon-green))" transform="rotate(-15 28 12)" />
    <rect x="40" y="14" width="4" height="6" rx="1" fill="hsl(var(--icon-green))" transform="rotate(-15 40 14)" />
  </svg>
);

export const GhostIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className}>
    <path
      d="M32 8C20.954 8 12 16.954 12 28V52C12 53.105 13.105 54 14.105 53.316L20 48L26 54L32 48L38 54L44 48L49.895 53.316C50.895 54 52 53.105 52 52V28C52 16.954 43.046 8 32 8Z"
      fill="currentColor"
    />
    <ellipse cx="24" cy="28" rx="5" ry="6" fill="hsl(var(--accent-orange))" />
    <ellipse cx="40" cy="28" rx="5" ry="6" fill="hsl(var(--accent-orange))" />
  </svg>
);

export const ShoppingBagIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className}>
    <path
      d="M16 20H48L52 56H12L16 20Z"
      fill="currentColor"
    />
    <path
      d="M24 20V16C24 11.582 27.582 8 32 8C36.418 8 40 11.582 40 16V20"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="24" cy="20" r="3" fill="hsl(var(--icon-yellow))" />
    <circle cx="40" cy="20" r="3" fill="hsl(var(--icon-yellow))" />
  </svg>
);

export const ShirtIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className}>
    <path
      d="M22 8L12 16V28L18 26V56H46V26L52 28V16L42 8H22Z"
      fill="currentColor"
    />
    <path
      d="M26 8C26 8 28 14 32 14C36 14 38 8 38 8"
      stroke="hsl(var(--icon-blue))"
      strokeWidth="3"
      fill="none"
    />
  </svg>
);

export const NavLogoIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <rect width="40" height="40" rx="8" fill="hsl(var(--accent-orange))" />
    <path
      d="M12 28V12L20 12L28 20V28H20L12 20"
      stroke="hsl(var(--text-black))"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M20 20L28 12"
      stroke="hsl(var(--text-black))"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export const CompassIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className}>
    <rect width="32" height="32" rx="6" fill="hsl(var(--accent-orange))" />
    <circle cx="16" cy="16" r="10" stroke="hsl(var(--text-black))" strokeWidth="2" fill="none" />
    <path
      d="M16 8L18 14L24 16L18 18L16 24L14 18L8 16L14 14L16 8Z"
      fill="hsl(var(--text-black))"
    />
  </svg>
);

export const DiamondIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2L4 8L12 22L20 8L12 2Z"
      fill="currentColor"
    />
    <path
      d="M4 8H20"
      stroke="hsl(var(--bg-dark))"
      strokeWidth="1.5"
    />
    <path
      d="M8 2L6 8L12 22L18 8L16 2"
      stroke="hsl(var(--bg-dark))"
      strokeWidth="1"
    />
  </svg>
);

export const StarIcon = ({ filled = true, className = "" }: { filled?: boolean; className?: string }) => (
  <svg viewBox="0 0 20 20" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M10 1L12.39 6.26L18 7.27L14 11.14L14.76 17L10 14.27L5.24 17L6 11.14L2 7.27L7.61 6.26L10 1Z" />
  </svg>
);

export const ChevronShape = ({ direction = "right", className = "" }: { direction?: "left" | "right"; className?: string }) => (
  <svg viewBox="0 0 120 200" fill="currentColor" className={className} style={{ transform: direction === "left" ? "scaleX(-1)" : undefined }}>
    <path d="M0 0H60C93.137 0 120 26.863 120 60V140C120 173.137 93.137 200 60 200H0L60 100L0 0Z" />
  </svg>
);

export const HexagonShape = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 116" fill="currentColor" className={className}>
    <path d="M25 0H75L100 58L75 116H25L0 58L25 0Z" />
  </svg>
);
