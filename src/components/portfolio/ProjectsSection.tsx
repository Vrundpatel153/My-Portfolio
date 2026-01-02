import { ScrollReveal, StaggerContainer, StaggerItem } from "../animations/ScrollReveal";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Fintech Dashboard",
    description: "A comprehensive financial analytics platform with real-time data visualization and AI-powered insights.",
    tags: ["React", "TypeScript", "D3.js", "Node.js"],
    color: "bg-accent-periwinkle",
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack shopping experience with cart management, payment processing, and inventory system.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    color: "bg-icon-green",
    featured: true,
  },
  {
    title: "Health & Wellness App",
    description: "Mobile-first application for tracking fitness goals, nutrition, and mental wellness.",
    tags: ["React Native", "Firebase", "ML Kit"],
    color: "bg-accent-orange",
    featured: false,
  },
  {
    title: "Real Estate Portal",
    description: "Property listing platform with virtual tours, map integration, and smart search filters.",
    tags: ["Vue.js", "Mapbox", "Express"],
    color: "bg-icon-yellow",
    featured: false,
  },
  {
    title: "AI Content Studio",
    description: "Creative platform leveraging AI for content generation, image editing, and brand assets.",
    tags: ["Python", "OpenAI", "React"],
    color: "bg-icon-blue",
    featured: true,
  },
  {
    title: "Team Collaboration Tool",
    description: "Real-time workspace with video conferencing, file sharing, and project management features.",
    tags: ["WebRTC", "Socket.io", "MongoDB"],
    color: "bg-accent-lime",
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-bg-dark py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <p className="text-accent-lime text-sm uppercase tracking-wider mb-2">Portfolio</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="section-headline text-panel-cream">
              Featured<br />
              <span className="text-accent-periwinkle">Projects</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Projects Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {projects.map((project, index) => (
            <StaggerItem key={project.title}>
              <div className={`group relative rounded-[24px] overflow-hidden border-2 border-stroke-charcoal hover-lift ${project.featured ? 'md:col-span-1' : ''}`}>
                {/* Project Preview */}
                <div className={`${project.color} aspect-[4/3] p-6 flex items-end`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Mock Browser Frame */}
                  <div className="w-full bg-panel-cream rounded-lg p-2 relative z-10">
                    <div className="flex gap-1.5 mb-2">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                    <div className="bg-muted rounded h-24 flex items-center justify-center">
                      <div className="w-8 h-8 rounded bg-stroke-charcoal/20" />
                    </div>
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <button className="w-10 h-10 bg-panel-cream rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <ExternalLink className="w-5 h-5 text-text-black" />
                    </button>
                    <button className="w-10 h-10 bg-panel-cream rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <Github className="w-5 h-5 text-text-black" />
                    </button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="bg-bg-dark p-6">
                  <h3 className="text-xl font-bold text-panel-cream mb-2">{project.title}</h3>
                  <p className="text-panel-cream/60 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium text-accent-lime bg-accent-lime/10 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All Button */}
        <ScrollReveal className="text-center mt-12">
          <a href="#" className="btn-lime inline-flex items-center gap-2">
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
