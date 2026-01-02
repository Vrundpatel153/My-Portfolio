import { CompassIcon } from "./icons/IconShapes";

const BentoSection = () => {
  return (
    <section className="bg-accent-periwinkle py-16 md:py-24 px-4">
      {/* Top Pill CTA */}
      <div className="flex justify-center mb-8">
        <button className="btn-cream text-sm">
          Navigate Compass
        </button>
      </div>
      
      {/* Bento Card */}
      <div className="max-w-7xl mx-auto">
        <div className="bento-card">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left Content - 3 cols */}
            <div className="lg:col-span-3">
              <h2 className="bento-headline text-text-black mb-8">
                Cut through the noise,<br />
                know what's real
              </h2>
              
              {/* Product Badge */}
              <div className="flex items-center gap-3 mb-6">
                <CompassIcon className="w-8 h-8" />
                <span className="text-text-black font-bold text-xl">Navigate Compass</span>
              </div>
              
              {/* Description */}
              <p className="text-text-black/80 text-base md:text-lg mb-6 max-w-lg">
                Navigate Compass is a free Chrome Extension that delivers real-time fact-checking of any news article online, powered by AI.
              </p>
              
              <p className="text-text-black/80 text-base md:text-lg mb-6 max-w-lg">
                Get truth scores, section-by-section claim analysis, and the complete picture of the news you read.
              </p>
              
              {/* Numbered List */}
              <ol className="space-y-3 text-text-black">
                <li className="flex gap-3">
                  <span className="font-bold">1.</span>
                  <span><strong>Truth Scores</strong> – See how accurate the article is.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">2.</span>
                  <span><strong>Claim-by-Claim Breakdown</strong> – Navigate Compass highlights each claim.</span>
                </li>
              </ol>
            </div>
            
            {/* Right Content - Media Card - 2 cols */}
            <div className="lg:col-span-2">
              <div className="bg-panel-cream rounded-[20px] md:rounded-[32px] shadow-xl overflow-hidden border border-stroke-charcoal/20">
                {/* Browser Frame */}
                <div className="bg-white p-3 border-b border-stroke-charcoal/10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                {/* Content Placeholder */}
                <div className="bg-bg-dark aspect-video flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 bg-accent-periwinkle rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 text-text-black" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-panel-cream/60 text-sm">Taiwan's epic train ride through 50 tunnels and 77 bridges</p>
                  </div>
                </div>
                {/* Overlay avatar */}
                <div className="absolute bottom-4 right-4 w-16 h-16 rounded-xl bg-panel-cream border-2 border-stroke-charcoal overflow-hidden hidden lg:block">
                  <div className="w-full h-full bg-gradient-to-br from-accent-periwinkle to-accent-orange"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoSection;
