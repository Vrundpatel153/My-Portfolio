import { ScrollReveal, StaggerContainer, StaggerItem } from "../animations/ScrollReveal";

const AboutSection = () => {
  const stats = [
    { number: "1", label: "Year Experience" },
    { number: "150+", label: "Problems Solved" },
    { number: "50+", label: "Projects Completed" },
    { number: "10+", label: "Happy Clients" },
    { number: "2", label: "Medals Won" },
  ];

  return (
    <section id="about" className="bg-accent-periwinkle py-20 md:py-32 px-4">
      {/* Top Pill */}
      <ScrollReveal className="flex justify-center mb-8">
        <span className="btn-cream text-sm">About Me</span>
      </ScrollReveal>

      {/* Bento Card */}
      <div className="max-w-7xl mx-auto">
        <div className="bento-card">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="bento-headline text-text-black mb-8">
                  Building scalable<br />
                  web products that<br />
                  <span className="text-accent-periwinkle">ship</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-text-black/80 text-base md:text-lg mb-6 max-w-lg text-justify leading-relaxed">
                  I&apos;m a{" "}
                  <span className="font-semibold text-accent-orange">Full-Stack Developer</span>{" "}
                  focused on building{" "}
                  <span className="font-semibold text-accent-lime">scalable web applications</span>, solving problems end-to-end across frontend, backend, and deployment.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-text-black/80 text-base md:text-lg mb-6 max-w-lg text-justify leading-relaxed">
                  I work with{" "}
                  <span className="font-semibold text-accent-periwinkle">React</span>,{" "}
                  <span className="font-semibold text-accent-periwinkle">Next.js</span>,{" "}
                  <span className="font-semibold text-accent-periwinkle">TypeScript</span>, and modern databases, and I&apos;m expanding into{" "}
                  <span className="font-semibold text-accent-orange">AI-powered solutions</span>{" "}
                  using{" "}
                  <span className="font-semibold text-accent-orange">Generative AI</span> and{" "}
                  <span className="font-semibold text-accent-orange">LangChain</span>, supported by cloud and DevOps fundamentals for real-world production systems.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <p className="text-text-black/70 text-base md:text-lg mb-10 max-w-lg text-justify leading-relaxed">
                  Currently in my{" "}
                  <span className="font-semibold text-text-black">3rd year</span> of B.Tech in Computer Engineering at{" "}
                  <span className="font-semibold text-text-black">Charotar University of Science and Technology (CHARUSAT)</span>.
                </p>
              </ScrollReveal>

              {/* Stats */}
              <StaggerContainer className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {stats.map((stat) => (
                  <StaggerItem key={stat.label}>
                    <div className="text-center md:text-left">
                      <div className="text-3xl md:text-4xl font-black text-text-black">{stat.number}</div>
                      <div className="text-sm text-text-black/60">{stat.label}</div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Right - Profile Image Area */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="right">
                <div className="relative">
                  <div className="bg-gradient-to-br from-accent-periwinkle to-accent-orange rounded-[24px] md:rounded-[40px] aspect-[3/4] overflow-hidden border-2 border-stroke-charcoal">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg viewBox="0 0 200 200" className="w-3/4 h-3/4 text-text-black/10">
                        <circle cx="100" cy="70" r="40" fill="currentColor" />
                        <path d="M40 180C40 130 65 100 100 100C135 100 160 130 160 180" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-lime rounded-2xl -z-10" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-icon-yellow rounded-full -z-10" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
