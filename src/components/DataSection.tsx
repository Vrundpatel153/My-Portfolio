const DataSection = () => {
  return (
    <section className="bg-bg-dark py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed text-panel-cream">
          <span className="inline-flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8 text-accent-lime" fill="currentColor">
              <path d="M12 2L4 6V12C4 16.42 7.58 20.74 12 22C16.42 20.74 20 16.42 20 12V6L12 2Z" />
              <path d="M9 12L11 14L15 10" stroke="hsl(var(--text-black))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            <span className="chip-lime">Your data</span>
          </span>{" "}
          <span className="text-panel-cream">is taken by companies and used to train the next wave of AI models and build the world's top products and services.</span>{" "}
          <span className="text-panel-cream">Yet it often happens without any earnings being distributed back to you.</span>
        </p>
        
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed text-panel-cream mt-12">
          <span className="text-panel-cream/90">It's time for a change.</span>
          <br />
          <span className="text-panel-cream/90">With</span>{" "}
          <span className="chip-orange mx-1">
            Navigate
          </span>{" "}
          <span className="text-panel-cream/90">you join a decentralized intelligence platform that puts the power back in your hands and rewards you for the data you</span>{" "}
          <span className="italic text-panel-cream">contribute.</span>
        </p>
      </div>
    </section>
  );
};

export default DataSection;
