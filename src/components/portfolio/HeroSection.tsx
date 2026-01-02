import { motion } from "framer-motion";
import { ScrollReveal } from "../animations/ScrollReveal";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-bg-dark relative flex flex-col justify-center pt-24 pb-0 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-periwinkle/5 to-transparent pointer-events-none" />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 text-center flex-1 flex flex-col justify-center relative z-10">
        <motion.p
          className="text-accent-lime text-sm md:text-base font-semibold tracking-wider uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Creative Developer & Designer
        </motion.p>

        <motion.h1
          className="hero-headline text-panel-cream mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Hi, I'm Alex<br />
          <span className="text-accent-periwinkle">Morgan</span>
        </motion.h1>

        <motion.p
          className="text-panel-cream/80 text-lg md:text-xl mb-8 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          I craft bold digital experiences that blend stunning visuals with seamless functionality.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <a href="#projects" className="bg-accent-lime text-text-black rounded-full px-8 py-4 font-semibold text-lg hover-lift">
            View My Work
          </a>
          <a href="#contact" className="btn-cream">
            Get In Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, delay: 1, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-panel-cream/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-panel-cream/60 rounded-full" />
          </div>
        </motion.div>
      </div>

      {/* Icon Ribbon */}
      <div className="flex justify-center items-end gap-0 -mb-1">
        {/* Code - Circle Periwinkle */}
        <motion.div
          className="icon-tile icon-tile-circle bg-accent-periwinkle w-[18vw] h-[18vw] max-w-[280px] max-h-[280px] min-w-[100px] min-h-[100px]"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <svg viewBox="0 0 64 64" fill="none" className="w-1/2 h-1/2">
            <path d="M24 20L12 32L24 44" stroke="hsl(var(--text-black))" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M40 20L52 32L40 44" stroke="hsl(var(--text-black))" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>

        {/* Design - Rounded Square Green */}
        <motion.div
          className="icon-tile icon-tile-square bg-icon-green w-[18vw] h-[18vw] max-w-[280px] max-h-[280px] min-w-[100px] min-h-[100px] -ml-2"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <svg viewBox="0 0 64 64" fill="none" className="w-1/2 h-1/2">
            <circle cx="32" cy="24" r="8" stroke="hsl(var(--text-black))" strokeWidth="4" fill="none" />
            <path d="M16 52C16 43.163 23.163 36 32 36C40.837 36 48 43.163 48 52" stroke="hsl(var(--text-black))" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </motion.div>

        {/* Creative - Hexagon Orange */}
        <motion.div
          className="relative w-[20vw] h-[20vw] max-w-[300px] max-h-[300px] min-w-[110px] min-h-[110px] -ml-2 flex items-center justify-center"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full absolute">
            <path d="M25 10H75L95 50L75 90H25L5 50L25 10Z" fill="hsl(var(--accent-orange))" />
          </svg>
          <svg viewBox="0 0 64 64" fill="none" className="w-2/5 h-2/5 relative z-10">
            <path d="M32 8L8 20V44L32 56L56 44V20L32 8Z" stroke="hsl(var(--text-black))" strokeWidth="3" fill="none" />
            <circle cx="32" cy="32" r="8" fill="hsl(var(--text-black))" />
          </svg>
        </motion.div>

        {/* Mobile - Rounded Square Yellow */}
        <motion.div
          className="icon-tile icon-tile-square bg-icon-yellow w-[18vw] h-[18vw] max-w-[280px] max-h-[280px] min-w-[100px] min-h-[100px] -ml-2"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <svg viewBox="0 0 64 64" fill="none" className="w-1/2 h-1/2">
            <rect x="18" y="8" width="28" height="48" rx="4" stroke="hsl(var(--text-black))" strokeWidth="3" fill="none" />
            <circle cx="32" cy="48" r="3" fill="hsl(var(--text-black))" />
          </svg>
        </motion.div>

        {/* Web - Circle Blue */}
        <motion.div
          className="icon-tile icon-tile-circle bg-icon-blue w-[18vw] h-[18vw] max-w-[280px] max-h-[280px] min-w-[100px] min-h-[100px] -ml-2"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <svg viewBox="0 0 64 64" fill="none" className="w-1/2 h-1/2">
            <circle cx="32" cy="32" r="20" stroke="hsl(var(--text-black))" strokeWidth="3" fill="none" />
            <ellipse cx="32" cy="32" rx="8" ry="20" stroke="hsl(var(--text-black))" strokeWidth="3" fill="none" />
            <path d="M12 32H52" stroke="hsl(var(--text-black))" strokeWidth="3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
