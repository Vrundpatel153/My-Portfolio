import { ScrollReveal, StaggerContainer, StaggerItem } from "../animations/ScrollReveal";
import { Code, Palette, Smartphone, Globe, Zap, Shield } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building fast, scalable web applications with modern technologies like React, Next.js, and Node.js.",
    color: "bg-accent-periwinkle",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive, beautiful interfaces that users love. From wireframes to high-fidelity prototypes.",
    color: "bg-accent-orange",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Cross-platform mobile development with React Native for iOS and Android applications.",
    color: "bg-icon-green",
  },
  {
    icon: Globe,
    title: "E-Commerce",
    description: "Full-featured online stores with payment integration, inventory management, and analytics.",
    color: "bg-icon-blue",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Speed optimization, SEO improvements, and Core Web Vitals enhancement for better rankings.",
    color: "bg-accent-lime",
  },
  {
    icon: Shield,
    title: "Consulting",
    description: "Technical consulting, code reviews, and architecture planning for your digital projects.",
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
