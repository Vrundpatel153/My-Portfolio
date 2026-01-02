import { ScrollReveal, StaggerContainer, StaggerItem } from "../animations/ScrollReveal";
import { ChevronShape } from "../icons/IconShapes";

const skills = [
  { name: "React", level: 95, color: "bg-icon-blue" },
  { name: "TypeScript", level: 90, color: "bg-accent-periwinkle" },
  { name: "Node.js", level: 85, color: "bg-icon-green" },
  { name: "UI/UX Design", level: 88, color: "bg-accent-orange" },
  { name: "Figma", level: 92, color: "bg-icon-yellow" },
  { name: "Next.js", level: 87, color: "bg-accent-lime" },
];

const technologies = [
  { icon: "⚛️", name: "React", category: "Frontend" },
  { icon: "🔷", name: "TypeScript", category: "Language" },
  { icon: "🟢", name: "Node.js", category: "Backend" },
  { icon: "🎨", name: "Figma", category: "Design" },
  { icon: "🚀", name: "Next.js", category: "Framework" },
  { icon: "🗄️", name: "PostgreSQL", category: "Database" },
  { icon: "☁️", name: "AWS", category: "Cloud" },
  { icon: "🐳", name: "Docker", category: "DevOps" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-panel-cream py-20 md:py-32 relative overflow-hidden">
      {/* Decorative Chevrons */}
      <div className="absolute left-0 top-0 h-full w-32 md:w-48 lg:w-64 pointer-events-none">
        <ChevronShape direction="left" className="absolute -left-16 top-0 w-48 md:w-64 h-auto text-accent-orange" />
        <ChevronShape direction="left" className="absolute -left-8 top-48 w-40 md:w-56 h-auto text-accent-periwinkle" />
        <ChevronShape direction="left" className="absolute -left-16 bottom-48 w-48 md:w-64 h-auto text-icon-yellow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <p className="text-text-black/60 text-sm uppercase tracking-wider mb-2">What I Do</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="section-headline text-text-black">
              Skills &<br />
              <span className="inline-flex items-center gap-4">
                Expertise
                <span className="w-12 h-12 md:w-16 md:h-16 bg-accent-periwinkle rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-1/2 h-1/2 text-text-black" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </span>
              </span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
          {/* Skill Bars */}
          <StaggerContainer className="space-y-6" staggerDelay={0.1}>
            {skills.map((skill) => (
              <StaggerItem key={skill.name}>
                <div className="flex items-center gap-4">
                  <span className="text-text-black font-semibold w-32">{skill.name}</span>
                  <div className="flex-1 h-3 bg-stroke-charcoal/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className="text-text-black/60 text-sm w-12 text-right">{skill.level}%</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Description */}
          <div>
            <ScrollReveal direction="right">
              <p className="text-text-black/80 text-lg mb-6">
                I specialize in building modern web applications with a focus on performance, accessibility, and beautiful design.
              </p>
              <p className="text-text-black/80 text-lg mb-8">
                From concept to deployment, I handle every aspect of the development process, ensuring a seamless experience for both clients and end-users.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Technologies Grid */}
        <ScrollReveal>
          <h3 className="text-2xl md:text-3xl font-bold text-text-black text-center mb-12">Technologies I Work With</h3>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto" staggerDelay={0.05}>
          {technologies.map((tech) => (
            <StaggerItem key={tech.name}>
              <div className="bg-panel-cream border-2 border-stroke-charcoal rounded-2xl p-6 text-center hover-lift cursor-pointer">
                <div className="text-4xl mb-3">{tech.icon}</div>
                <div className="font-bold text-text-black">{tech.name}</div>
                <div className="text-sm text-text-black/50">{tech.category}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default SkillsSection;
