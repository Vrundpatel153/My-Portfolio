import { MusicNoteIcon, GhostIcon, ShoppingBagIcon, ShirtIcon } from "./icons/IconShapes";
import { ChevronShape } from "./icons/IconShapes";

const FeaturesSection = () => {
  return (
    <section className="bg-panel-cream py-20 md:py-32 relative overflow-hidden">
      {/* Decorative Chevrons */}
      <div className="absolute left-0 top-0 h-full w-32 md:w-48 lg:w-64 pointer-events-none">
        <ChevronShape direction="left" className="absolute -left-16 top-0 w-48 md:w-64 h-auto text-accent-orange" />
        <ChevronShape direction="left" className="absolute -left-8 top-32 w-40 md:w-56 h-auto text-accent-periwinkle" />
        <ChevronShape direction="left" className="absolute -left-16 bottom-32 w-48 md:w-64 h-auto text-icon-yellow" />
        <ChevronShape direction="left" className="absolute -left-8 bottom-0 w-40 md:w-56 h-auto text-accent-periwinkle" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Intro Text */}
        <div className="text-center mb-12">
          <p className="text-text-black/70 text-sm md:text-base mb-2">Here's a fun fact:</p>
          <p className="text-text-black/70 text-sm md:text-base">Today, you are the product</p>
        </div>
        
        {/* Main Headline with Inline Icons */}
        <div className="max-w-5xl mx-auto">
          <h2 className="section-headline text-text-black text-center leading-tight">
            Your favorite{" "}
            <span className="inline-flex align-middle mx-1">
              <span className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-accent-periwinkle rounded-full flex items-center justify-center">
                <MusicNoteIcon className="w-1/2 h-1/2 text-text-black" />
              </span>
            </span>
            {" "}songs.
            <br />
            That{" "}
            <span className="inline-flex align-middle mx-1">
              <span className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-icon-green rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 64 64" fill="none" className="w-1/2 h-1/2">
                  <rect x="8" y="20" width="48" height="32" rx="4" fill="hsl(var(--text-black))" />
                  <rect x="12" y="24" width="10" height="8" rx="1" fill="hsl(var(--icon-green))" />
                  <rect x="27" y="24" width="10" height="8" rx="1" fill="hsl(var(--icon-green))" />
                  <rect x="42" y="24" width="10" height="8" rx="1" fill="hsl(var(--icon-green))" />
                </svg>
              </span>
            </span>
            {" "}must-see movie.
            <br />
            Your top{" "}
            <span className="inline-flex align-middle mx-1">
              <span className="relative w-14 h-12 md:w-20 md:h-16 lg:w-24 lg:h-20">
                <svg viewBox="0 0 100 80" fill="none" className="w-full h-full absolute">
                  <path d="M20 0H80L100 40L80 80H20L0 40L20 0Z" fill="hsl(var(--accent-orange))" />
                </svg>
                <svg viewBox="0 0 64 64" fill="none" className="w-3/5 h-3/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <path d="M32 8C20.954 8 12 16.954 12 28V52C12 53.105 13.105 54 14.105 53.316L20 48L26 54L32 48L38 54L44 48L49.895 53.316C50.895 54 52 53.105 52 52V28C52 16.954 43.046 8 32 8Z" fill="hsl(var(--text-black))" />
                  <ellipse cx="24" cy="28" rx="5" ry="6" fill="hsl(var(--accent-orange))" />
                  <ellipse cx="40" cy="28" rx="5" ry="6" fill="hsl(var(--accent-orange))" />
                </svg>
              </span>
            </span>
            {" "}interests and
            <br />
            all your shopping{" "}
            <span className="inline-flex align-middle mx-1">
              <span className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-icon-yellow rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 64 64" fill="none" className="w-1/2 h-1/2">
                  <path d="M16 20H48L52 56H12L16 20Z" fill="hsl(var(--text-black))" />
                  <path d="M24 20V16C24 11.582 27.582 8 32 8C36.418 8 40 11.582 40 16V20" stroke="hsl(var(--text-black))" strokeWidth="4" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </span>
            <span className="inline-flex align-middle mx-1">
              <span className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-icon-blue rounded-full flex items-center justify-center">
                <svg viewBox="0 0 64 64" fill="none" className="w-1/2 h-1/2">
                  <path d="M22 8L12 16V28L18 26V56H46V26L52 28V16L42 8H22Z" fill="hsl(var(--text-black))" />
                  <path d="M26 8C26 8 28 14 32 14C36 14 38 8 38 8" stroke="hsl(var(--icon-blue))" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </span>
            {" "}habits.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
