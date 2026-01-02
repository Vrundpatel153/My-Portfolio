import { ScrollReveal, StaggerContainer, StaggerItem } from "../animations/ScrollReveal";
import { ChevronShape } from "../icons/IconShapes";

const skillGroups = [
  {
    title: "Programming Languages",
    description: "I work comfortably across frontend, backend, and data-oriented languages.",
    accent: "bg-accent-periwinkle",
    items: [
      {
        name: "JavaScript / TypeScript",
        detail: "core language for modern web applications, APIs, and scalable frontend architectures",
      },
      { name: "Python", detail: "scripting, automation, data handling, and ML experimentation" },
      {
        name: "C / C++",
        detail: "strong foundation in memory, performance, and core programming concepts",
      },
      { name: "SQL", detail: "relational data modeling, querying, and analytics" },
      { name: "HTML5 & CSS3", detail: "semantic markup, responsive layouts, and modern UI patterns" },
    ],
  },
  {
    title: "Frontend & UI Development",
    description: "Focused on building clean, responsive, and user-centric interfaces.",
    accent: "bg-accent-lime",
    items: [
      { name: "React.js", detail: "component-based architecture, hooks, state management" },
      { name: "Next.js", detail: "server-side rendering, routing, SEO-friendly production apps" },
      { name: "Tailwind CSS", detail: "utility-first, scalable design systems" },
      { name: "Bootstrap", detail: "rapid UI prototyping" },
      { name: "Figma", detail: "UI/UX design, wireframing, design-to-code workflows" },
    ],
  },
  {
    title: "Backend, Databases & APIs",
    description: "Experience designing reliable backend systems and data layers.",
    accent: "bg-icon-green",
    items: [
      { name: "PostgreSQL / MySQL", detail: "structured database design and optimization" },
      { name: "Supabase", detail: "authentication, real-time databases, storage" },
      { name: "Firebase", detail: "auth, cloud functions, realtime data (working knowledge)" },
      { name: "REST APIs", detail: "secure data exchange between frontend and backend" },
    ],
  },
  {
    title: "AI, GenAI & Data Technologies",
    description: "Exploring applied AI with a focus on real-world use cases.",
    accent: "bg-accent-orange",
    items: [
      { name: "Generative AI Concepts", detail: "LLMs, embeddings, prompt design" },
      {
        name: "LangChain (learning & experimentation)",
        detail: "chaining LLM calls, tools, and memory",
      },
      { name: "Python for AI/ML", detail: "data preprocessing, experimentation pipelines" },
      { name: "Power BI & Tableau", detail: "data visualization and insights" },
      { name: "Anaconda", detail: "ML environments and dependency management" },
    ],
    footer: "Currently expanding hands-on projects in GenAI and AI-powered web applications.",
  },
  {
    title: "DevOps, Cloud & Deployment",
    description: "Understanding how applications move from local to production.",
    accent: "bg-icon-blue",
    items: [
      { name: "Git & GitHub", detail: "version control, collaboration, code reviews" },
      { name: "Docker (basics)", detail: "containerizing applications for consistent environments" },
      { name: "Google Cloud Platform (GCP)", detail: "cloud fundamentals and deployments" },
      { name: "Neon", detail: "serverless Postgres for modern apps" },
      { name: "CI/CD concepts", detail: "deployment workflows and automation (learning in practice)" },
    ],
  },
  {
    title: "Tools & Professional Workflow",
    description: "Tools I use daily to stay productive and organized.",
    accent: "bg-icon-yellow",
    items: [
      { name: "VS Code / PyCharm", detail: "primary development environments" },
      { name: "JIRA", detail: "task tracking and agile workflows" },
      { name: "MS Office", detail: "documentation and reporting" },
    ],
  },
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

        {/* Skills / Expertise Groups */}
        <div className="max-w-6xl mx-auto">
          <StaggerContainer className="grid lg:grid-cols-2 gap-6" staggerDelay={0.08}>
            {skillGroups.map((group) => (
              <StaggerItem key={group.title}>
                <div className="bg-bg-dark border-2 border-panel-cream/15 rounded-2xl p-6 md:p-8 h-full md:h-[460px] lg:h-[520px] flex flex-col">
                  <div className={`h-1.5 w-12 rounded-full ${group.accent} mb-4`} />

                  <h3 className="text-xl md:text-2xl font-bold text-panel-cream mb-2">{group.title}</h3>
                  <p className="text-panel-cream/70 mb-5">{group.description}</p>

                  <div
                    className={`flex-1 overflow-auto pr-2 ${
                      group.title === "AI, GenAI & Data Technologies" ? "no-scrollbar" : ""
                    }`}
                  >
                    <ul className="space-y-3">
                      {group.items.map((item) => (
                        <li key={item.name} className="flex gap-3">
                          <span className={`mt-2 w-2 h-2 rounded-full ${group.accent} flex-shrink-0`} />
                          <p className="text-panel-cream/85 leading-relaxed">
                            <span className="font-semibold text-panel-cream">{item.name}</span>{" "}
                            <span className="text-panel-cream/70">– {item.detail}</span>
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {group.footer ? <p className="text-panel-cream/70 mt-5">{group.footer}</p> : null}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
