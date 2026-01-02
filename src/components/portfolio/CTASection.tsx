import { ScrollReveal } from "../animations/ScrollReveal";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-bg-dark py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-accent-periwinkle/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent-orange/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <p className="text-accent-lime text-sm uppercase tracking-wider mb-4">Ready to Start?</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-panel-cream mb-6 leading-tight">
            Let's create something{" "}
            <span className="text-accent-periwinkle">amazing</span> together
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-panel-cream/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Whether you need a stunning website, a powerful web app, or a complete digital transformation — I'm here to help bring your vision to life.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-accent-lime text-text-black rounded-full px-8 py-4 font-bold text-lg inline-flex items-center justify-center gap-2 hover-lift"
            >
              Start a Project
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="btn-cream inline-flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </ScrollReveal>

        {/* Stats row */}
        <ScrollReveal delay={0.4} className="mt-16">
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-black text-accent-lime">24h</div>
              <div className="text-sm text-panel-cream/50">Response Time</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-accent-orange">100%</div>
              <div className="text-sm text-panel-cream/50">Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-icon-blue">∞</div>
              <div className="text-sm text-panel-cream/50">Passion</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
