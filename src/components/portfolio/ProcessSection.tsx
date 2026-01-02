import { ScrollReveal, StaggerContainer, StaggerItem } from "../animations/ScrollReveal";

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
    <section className="bg-panel-cream py-20 md:py-32 px-4 overflow-hidden">
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
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-stroke-charcoal/20 -translate-x-4" />
                )}

                {/* Step Card */}
                <div className={`${step.bg} rounded-[24px] p-8 h-full`}>
                  <span className={`${step.color} text-5xl font-black block mb-4`}>{step.number}</span>
                  <h3 className="text-2xl font-bold text-text-black mb-3">{step.title}</h3>
                  <p className="text-text-black/70">{step.description}</p>
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
