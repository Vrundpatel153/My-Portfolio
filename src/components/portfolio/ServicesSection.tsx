import { ScrollReveal, StaggerContainer, StaggerItem } from "../animations/ScrollReveal";
import { Brain, Code, Database, Layout, Rocket, Server } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Full-Stack Web Apps",
    description: "End-to-end web applications with React/Next.js, TypeScript, and scalable backend patterns—built for real production use.",
    color: "bg-accent-periwinkle",
  },
  {
    icon: Layout,
    title: "Frontend & UI Engineering",
    description: "Responsive, accessible interfaces with clean component architecture, great UX, and performance-focused implementation.",
    color: "bg-accent-orange",
  },
  {
    icon: Server,
    title: "APIs & Backend Systems",
    description: "REST APIs, authentication flows, and reliable server-side logic—designed for maintainability and clean data contracts.",
    color: "bg-icon-green",
  },
  {
    icon: Database,
    title: "Databases & Data Modeling",
    description: "PostgreSQL-focused schemas, querying, and optimization with a practical approach to data integrity and analytics-ready structures.",
    color: "bg-icon-blue",
  },
  {
    icon: Brain,
    title: "GenAI Features (Learning + Build)",
    description: "Adding AI-powered capabilities using Generative AI concepts and LangChain experimentation—grounded in real product workflows.",
    color: "bg-accent-lime",
  },
  {
    icon: Rocket,
    title: "Deployment & DevOps Basics",
    description: "From local to production: Git workflows, Docker fundamentals, cloud deployments, and CI/CD concepts applied in practice.",
    color: "bg-icon-yellow",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-bg-dark py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <p className="text-accent-lime text-sm uppercase tracking-wider mb-2">What I Offer</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="section-headline text-panel-cream">
              Services &<br />
              <span className="text-accent-periwinkle">Solutions</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div className="group bg-panel-cream/5 border-2 border-panel-cream/10 rounded-[24px] p-8 hover:border-accent-lime/50 transition-all duration-300 hover-lift">
                {/* Icon */}
                <div className={`${service.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-text-black" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-panel-cream mb-3">{service.title}</h3>
                <p className="text-panel-cream/60">{service.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <ScrollReveal className="text-center mt-16">
          <p className="text-panel-cream/60 mb-6">Ready to start your project?</p>
          <a href="#contact" className="btn-lime inline-block">
            Let's Talk
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;
