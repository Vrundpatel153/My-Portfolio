import { MusicNoteIcon, FilmClapIcon, GhostIcon, ShoppingBagIcon, ShirtIcon } from "./icons/IconShapes";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-bg-dark relative flex flex-col justify-center pt-24 pb-0">
      {/* Main Content */}
      <div className="container mx-auto px-4 text-center flex-1 flex flex-col justify-center">
        <h1 className="hero-headline text-panel-cream mb-8 animate-fade-in-up">
          Your data runs the<br />world
        </h1>
        
        <p className="text-panel-cream/80 text-lg md:text-xl mb-8 max-w-md mx-auto">
          Start earning from it today.
        </p>
        
        {/* CTA Button */}
        <div className="flex justify-center mb-16">
          <button className="bg-accent-lime text-text-black rounded-full px-8 py-4 font-semibold text-lg flex items-center gap-3 hover-lift">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
              <circle cx="12" cy="12" r="10" fill="#FF6A3C" />
              <circle cx="8" cy="10" r="2" fill="#4C86FF" />
              <circle cx="16" cy="10" r="2" fill="#00A85A" />
              <path d="M8 15C8 15 10 17 12 17C14 17 16 15 16 15" stroke="#FFC738" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Download Rewards Extension
          </button>
        </div>
      </div>
      
      {/* Icon Ribbon */}
      <div className="flex justify-center items-end gap-0 -mb-1">
        {/* Music - Circle Periwinkle */}
        <div className="icon-tile icon-tile-circle bg-accent-periwinkle w-[18vw] h-[18vw] max-w-[280px] max-h-[280px] min-w-[120px] min-h-[120px]">
          <MusicNoteIcon className="w-1/2 h-1/2 text-text-black" />
        </div>
        
        {/* Film - Rounded Square Green */}
        <div className="icon-tile icon-tile-square bg-icon-green w-[18vw] h-[18vw] max-w-[280px] max-h-[280px] min-w-[120px] min-h-[120px] -ml-2">
          <svg viewBox="0 0 64 64" fill="none" className="w-1/2 h-1/2">
            <rect x="8" y="20" width="48" height="32" rx="4" fill="hsl(var(--text-black))" />
            <rect x="12" y="24" width="10" height="8" rx="1" fill="hsl(var(--icon-green))" />
            <rect x="27" y="24" width="10" height="8" rx="1" fill="hsl(var(--icon-green))" />
            <rect x="42" y="24" width="10" height="8" rx="1" fill="hsl(var(--icon-green))" />
            <path d="M8 16L16 8H48L56 16H8Z" fill="hsl(var(--text-black))" />
          </svg>
        </div>
        
        {/* Ghost - Hexagon Orange */}
        <div className="relative w-[20vw] h-[20vw] max-w-[300px] max-h-[300px] min-w-[130px] min-h-[130px] -ml-2 flex items-center justify-center">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full absolute">
            <path d="M25 10H75L95 50L75 90H25L5 50L25 10Z" fill="hsl(var(--accent-orange))" />
          </svg>
          <svg viewBox="0 0 64 64" fill="none" className="w-2/5 h-2/5 relative z-10">
            <path
              d="M32 8C20.954 8 12 16.954 12 28V52C12 53.105 13.105 54 14.105 53.316L20 48L26 54L32 48L38 54L44 48L49.895 53.316C50.895 54 52 53.105 52 52V28C52 16.954 43.046 8 32 8Z"
              fill="hsl(var(--text-black))"
            />
            <ellipse cx="24" cy="28" rx="5" ry="6" fill="hsl(var(--accent-orange))" />
            <ellipse cx="40" cy="28" rx="5" ry="6" fill="hsl(var(--accent-orange))" />
          </svg>
        </div>
        
        {/* Bag - Rounded Square Yellow */}
        <div className="icon-tile icon-tile-square bg-icon-yellow w-[18vw] h-[18vw] max-w-[280px] max-h-[280px] min-w-[120px] min-h-[120px] -ml-2">
          <svg viewBox="0 0 64 64" fill="none" className="w-1/2 h-1/2">
            <path d="M16 20H48L52 56H12L16 20Z" fill="hsl(var(--text-black))" />
            <path d="M24 20V16C24 11.582 27.582 8 32 8C36.418 8 40 11.582 40 16V20" stroke="hsl(var(--text-black))" strokeWidth="4" strokeLinecap="round" fill="none" />
          </svg>
        </div>
        
        {/* Shirt - Circle Blue */}
        <div className="icon-tile icon-tile-circle bg-icon-blue w-[18vw] h-[18vw] max-w-[280px] max-h-[280px] min-w-[120px] min-h-[120px] -ml-2">
          <svg viewBox="0 0 64 64" fill="none" className="w-1/2 h-1/2">
            <path d="M22 8L12 16V28L18 26V56H46V26L52 28V16L42 8H22Z" fill="hsl(var(--text-black))" />
            <path d="M26 8C26 8 28 14 32 14C36 14 38 8 38 8" stroke="hsl(var(--icon-blue))" strokeWidth="3" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
