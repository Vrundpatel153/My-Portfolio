import { ScrollReveal, StaggerContainer, StaggerItem } from "../animations/ScrollReveal";
import { ChevronShape } from "../icons/IconShapes";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start with a deep dive into your goals, audience, and vision. Understanding your needs is the foundation of great work.",
    color: "text-accent-periwinkle",
    bg: "bg-accent-periwinkle/10",
  },
  {
    number: "02",
    title: "Design",
    description: "Creating wireframes and visual designs that align with your brand. Every pixel is crafted with purpose and intention.",
    color: "text-accent-orange",
    bg: "bg-accent-orange/10",
  },
  {
    number: "03",
    title: "Develop",
    description: "Bringing designs to life with clean, efficient code. I build for performance, accessibility, and scalability.",
    color: "text-icon-green",
    bg: "bg-icon-green/10",
  },
  {
    number: "04",
    title: "Deliver",
    description: "Thorough testing, optimization, and launch support. Your project goes live with confidence and ongoing care.",
    color: "text-accent-lime",
    bg: "bg-accent-lime/10",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-panel-cream py-20 md:py-32 px-4 overflow-hidden relative">
      {/* Subtle background accents */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-15">
        <ChevronShape className="absolute -top-24 -right-20 w-64 md:w-80 h-auto text-accent-orange/60" />
        <ChevronShape className="absolute top-28 -right-28 w-72 md:w-96 h-auto text-accent-periwinkle/50" />
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <p className="text-text-black/60 text-sm uppercase tracking-wider mb-2">How I Work</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="section-headline text-text-black">
              My<br />
              <span className="inline-flex items-center gap-4">
                Process
                <span className="w-12 h-12 md:w-16 md:h-16 bg-accent-orange rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-1/2 h-1/2 text-text-black" fill="currentColor">
                    <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" />
                  </svg>
                </span>
              </span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Process Steps */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.15}>
          {steps.map((step, index) => (
            <StaggerItem key={step.number}>
              <div className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-12 left-full w-full -translate-x-4 items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-panel-cream border-2 border-stroke-charcoal/20" />
                    <div className="flex-1 h-0.5 rounded-full bg-gradient-to-r from-stroke-charcoal/10 via-stroke-charcoal/35 to-stroke-charcoal/10" />
                    <span className="w-3 h-3 rounded-full bg-panel-cream border-2 border-stroke-charcoal/20" />
                  </div>
                )}

                {/* Step Card */}
                <div className={`${step.bg} rounded-[24px] p-8 border-2 border-stroke-charcoal/10 hover:border-stroke-charcoal/20 transition-colors hover-lift h-full md:h-[320px] lg:h-[360px] flex flex-col`}>
                  <div className="flex items-start justify-between mb-5">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-panel-cream border-2 border-stroke-charcoal/10 ${step.color} text-2xl font-black`}>
                      {step.number}
                    </div>
                    <div className="w-3 h-3 rounded-full bg-stroke-charcoal/20" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-black mb-3">{step.title}</h3>
                  <p className="text-text-black/70 leading-relaxed flex-1">{step.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ProcessSection;
