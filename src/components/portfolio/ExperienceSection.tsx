import { ScrollReveal, StaggerContainer, StaggerItem } from "../animations/ScrollReveal";

const experiences = [
  {
    period: "2026 - Present",
    role: "Automation Support Team Lead (Assistant)",
    company: "Young Hustler's University (Skool community)",
    description: "Supporting the automation team by triaging issues, improving workflows, and helping deliver reliable process automation for community operations.",
    color: "bg-accent-periwinkle",
  },
  {
    period: "Apr 2025 - Jul 2025",
    role: "Full-Stack Developer Intern",
    company: "Tilak Industries",
    description: "Contributed to a Bank Management System, building full-stack features and improving data flows and UI for day-to-day operations.",
    color: "bg-icon-green",
  },
  {
    period: "2024 - 2025",
    role: "Freelance Developer",
    company: "Self-employed",
    description: "Worked with 10+ clients, delivering responsive websites and web applications end-to-end—from requirements to deployment and iteration.",
    color: "bg-accent-orange",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-panel-cream py-20 md:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <p className="text-text-black/60 text-sm uppercase tracking-wider mb-2">Career Path</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="section-headline text-text-black">
              Work<br />
              <span className="inline-flex items-center gap-4">
                Experience
                <span className="w-12 h-12 md:w-16 md:h-16 bg-icon-green rounded-xl flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-1/2 h-1/2 text-text-black" fill="currentColor">
                    <path d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2 6.89 2 8V19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM10 4H14V6H10V4Z" />
                  </svg>
                </span>
              </span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-stroke-charcoal/20 -translate-x-1/2" />

          <StaggerContainer className="space-y-12" staggerDelay={0.15}>
            {experiences.map((exp, index) => (
              <StaggerItem key={exp.period}>
                <div className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-stroke-charcoal -translate-x-1/2 mt-2" />

                  {/* Content */}
                  <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                    <div className={`${exp.color} inline-block px-4 py-1 rounded-full text-text-black text-sm font-semibold mb-3`}>
                      {exp.period}
                    </div>
                    <h3 className="text-2xl font-bold text-text-black mb-1">{exp.role}</h3>
                    <p className="text-accent-orange font-semibold mb-3">{exp.company}</p>
                    <p className="text-text-black/70">{exp.description}</p>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
