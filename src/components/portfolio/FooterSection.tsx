import { ScrollReveal } from "../animations/ScrollReveal";
import { Heart } from "lucide-react";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
                <rect width="40" height="40" rx="8" fill="hsl(var(--accent-orange))" />
                <text x="12" y="28" fill="hsl(var(--text-black))" fontWeight="900" fontSize="20" fontFamily="Poppins">A</text>
              </svg>
              <span className="text-panel-cream font-bold text-xl">Alex Morgan</span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-6 text-panel-cream/60">
              <a href="#about" className="hover:text-accent-lime transition-colors">About</a>
              <a href="#skills" className="hover:text-accent-lime transition-colors">Skills</a>
              <a href="#projects" className="hover:text-accent-lime transition-colors">Projects</a>
              <a href="#experience" className="hover:text-accent-lime transition-colors">Experience</a>
              <a href="#contact" className="hover:text-accent-lime transition-colors">Contact</a>
            </div>

            {/* Copyright */}
            <div className="flex items-center gap-1 text-panel-cream/50 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-accent-orange fill-accent-orange" />
              <span>© {currentYear}</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Decorative line */}
        <div className="mt-8 pt-8 border-t border-panel-cream/10">
          <ScrollReveal delay={0.2}>
            <p className="text-center text-panel-cream/30 text-sm">
              Available for freelance work · Open to remote opportunities worldwide
            </p>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
