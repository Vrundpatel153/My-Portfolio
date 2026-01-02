import { ScrollReveal, StaggerContainer, StaggerItem } from "../animations/ScrollReveal";
import { ExternalLink, Github, X } from "lucide-react";
import { ChevronShape } from "../icons/IconShapes";
import { useState } from "react";

const mediaCandidatesFor = (fileName: string) => {
  const baseUrl = import.meta.env.BASE_URL;
  const candidates = [`${baseUrl}media/${encodeURIComponent(fileName)}`];

  const match = fileName.match(/^(.*)\.(png|jpg|jpeg|webp)$/i);
  if (match) {
    const base = match[1];
    const exts = ["png", "jpg", "jpeg", "webp"];
    for (const ext of exts) {
      candidates.push(`${baseUrl}media/${encodeURIComponent(`${base}.${ext}`)}`);
    }
  }

  return candidates;
};

const projects = [
  {
    title: "Virtual AI Assistant with AI Tools",
    description: "Build an AI Assistant platform with 3D models, beautiful animation and unique design. Integrated Chat + Voice assistants using OpenAI and created AI agents for multiple tasks. Leveraged trained models to build efficient agents, history and chat management.",
    tags: ["TypeScript", "React.js", "Tailwind CSS", "Three.js", "Node.js", "Supabase"],
    color: "bg-accent-periwinkle",
    featured: true,
    imageFile: "ai.png",
    imageAlt: "Virtual AI Assistant with AI Tools screenshot",
  },
  {
    title: "Expense Management System @OdooHackathon",
    description: "Smart, auditable expense reimbursement with configurable multi-level approvals. Production-grade MERN + TypeScript implementation — frontend polished to match Excalidraw mocks, backend implements deterministic approval engine, OCR, exchange rates, admin tooling, and audit trails.",
    tags: ["MERN", "TypeScript", "Tailwind CSS", "Tesseract"],
    color: "bg-icon-green",
    featured: true,
    imageFile: "hackathon.png",
    imageAlt: "Expense Management System screenshot",
  },
  {
    title: "Expense Tracker",
    description: "Designed a full stack Expense Tracker with beautiful design and fully responsive structure. Advances tracking expenses using various perspectives of user's expenses along with graph visualization. Multiple features which includes Set reminders, chat with bot, export data, manage history.",
    tags: ["TypeScript", "React.js", "Tailwind CSS", "Three.js", "MongoDB", "Node.js"],
    color: "bg-accent-orange",
    featured: false,
    imageFile: "expense.png",
    imageAlt: "Expense Tracker screenshot",
  },
  {
    title: "Database-Backed Web App",
    description: "Web app with structured data modeling, filtering, and reliable querying for real-world datasets.",
    tags: ["PostgreSQL", "SQL", "TypeScript", "Data"],
    color: "bg-icon-yellow",
    featured: false,
  },
  {
    title: "GenAI Assistant Prototype",
    description: "Prototype exploring LLM-based features like prompt workflows and retrieval patterns using LangChain experiments.",
    tags: ["Generative AI", "LangChain", "Python", "Prompting"],
    color: "bg-icon-blue",
    featured: true,
  },
  {
    title: "Automation Support Toolkit",
    description: "Tools and workflows to triage automation issues faster, improve reliability, and keep operations organized.",
    tags: ["Automation", "Debugging", "Process", "Support"],
    color: "bg-accent-lime",
    featured: false,
  },
];

const ProjectsSection = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="projects" className="bg-bg-dark pt-10 md:pt-12 pb-20 md:pb-32 px-4 relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-30">
        <ChevronShape className="absolute -top-16 -right-10 w-52 md:w-64 h-auto text-accent-periwinkle/40" />
        <ChevronShape className="absolute top-10 -right-24 w-60 md:w-72 h-auto text-accent-orange/30" />
      </div>
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
                <div className={`${project.color} aspect-[4/3] p-6 flex items-stretch`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Mock Browser Frame */}
                  <div className="w-full h-full bg-panel-cream rounded-lg p-3 relative z-10 flex flex-col">
                    <div className="flex gap-1.5 mb-2">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                    <div className="bg-muted rounded-md flex-1 min-h-[160px] relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 rounded bg-stroke-charcoal/20" />
                      </div>
                      {project.imageFile ? (
                        <img
                          src={mediaCandidatesFor(project.imageFile)[0]}
                          data-attempt="0"
                          alt={project.imageAlt ?? project.title}
                          className="absolute inset-0 w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          decoding="async"
                          onClick={() => setSelectedImage({ src: mediaCandidatesFor(project.imageFile!)[0], alt: project.imageAlt ?? project.title })}
                          onError={(e) => {
                            const image = e.currentTarget;
                            const candidates = mediaCandidatesFor(project.imageFile!);
                            const attempt = Number(image.dataset.attempt ?? "0") + 1;

                            if (attempt >= candidates.length) {
                              image.style.display = "none";
                              return;
                            }

                            image.dataset.attempt = String(attempt);
                            image.src = candidates[attempt];
                          }}
                        />
                      ) : null}
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

      {/* Image Preview Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-7xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 md:-right-12 md:top-0 w-10 h-10 bg-panel-cream hover:bg-accent-lime rounded-full flex items-center justify-center transition-all hover:scale-110 z-10"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5 text-text-black" />
            </button>

            {/* Image */}
            <div className="bg-panel-cream rounded-2xl p-4 shadow-2xl">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
