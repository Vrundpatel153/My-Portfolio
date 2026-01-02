import { ScrollReveal, StaggerContainer, StaggerItem } from "../animations/ScrollReveal";
import { StarIcon } from "../icons/IconShapes";

const testimonials = [
  {
    stars: 5,
    title: "Exceptional work quality!",
    content: "Alex delivered beyond our expectations. The attention to detail and creative solutions transformed our product. Communication was seamless throughout the entire project.",
    author: "Sarah Chen",
    role: "CEO, TechStart",
  },
  {
    stars: 5,
    title: "A true professional.",
    content: "Working with Alex was an absolute pleasure. They understood our vision immediately and translated it into a beautiful, functional application. Highly recommend!",
    author: "Michael Rodriguez",
    role: "Product Manager, InnovateCo",
  },
  {
    stars: 5,
    title: "Outstanding developer!",
    content: "Alex's technical skills are matched only by their design sensibility. Our website performance improved dramatically, and the UI is stunning. Will definitely work together again.",
    author: "Emily Watson",
    role: "Founder, DesignLab",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-bg-dark py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <p className="text-accent-lime text-sm uppercase tracking-wider mb-2">Testimonials</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-panel-cream">
              What Clients Say
            </h2>
          </ScrollReveal>
        </div>

        {/* Testimonials Grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={testimonial.author}>
              <div className="bg-panel-cream rounded-[24px] p-8 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      filled={i < testimonial.stars}
                      className={`w-5 h-5 ${i < testimonial.stars ? 'text-icon-yellow' : 'text-text-black/20'}`}
                    />
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-text-black mb-4">
                  {testimonial.title}
                </h3>

                {/* Content */}
                <p className="text-text-black/70 flex-1 mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-periwinkle to-accent-orange" />
                  <div>
                    <p className="font-bold text-text-black">{testimonial.author}</p>
                    <p className="text-sm text-text-black/50">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default TestimonialsSection;
