import { motion } from "framer-motion";
import { ScrollReveal } from "../animations/ScrollReveal";
import { ChevronShape } from "../icons/IconShapes";
import { Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-bg-dark relative flex flex-col justify-center pt-24 pb-0 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-periwinkle/5 to-transparent pointer-events-none" />

      {/* Top-right decorative chevrons (behind navbar) */}
      <div className="absolute top-0 right-0 pointer-events-none z-0">
        <ChevronShape className="absolute -top-10 -right-6 w-44 md:w-56 h-auto text-accent-orange/60" />
        <ChevronShape className="absolute top-14 -right-16 w-52 md:w-64 h-auto text-accent-periwinkle/70" />
      </div>
      
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
          Hi, I'm Vrund<br />
          <span className="text-accent-periwinkle">Patel</span>
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
          className="flex flex-col sm:flex-row justify-center items-stretch gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <a
            href="https://drive.google.com/drive/folders/1BxqFKCncB7ur_VuDJs0WKVcUASqlawsu?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-lg min-h-[56px] sm:min-w-[210px] bg-accent-lime text-text-black hover-lift"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>

          {/* Mouse indicator (between CTAs on desktop) */}
          <div className="hidden sm:flex items-center justify-center px-2">
            <div className="w-7 h-11 border-2 border-panel-cream/40 rounded-full flex items-start justify-center pt-2">
              <motion.div
                className="w-1.5 h-1.5 bg-panel-cream/70 rounded-full"
                animate={{ y: [0, 14, 0], opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold text-lg min-h-[56px] sm:min-w-[210px] btn-cream"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Icon Ribbon */}
      <div className="flex justify-center items-end gap-0 -mb-1">
        {/* Code - Circle Periwinkle */}
        <motion.div
          className="icon-tile icon-tile-circle bg-accent-periwinkle w-[18vw] h-[18vw] max-w-[280px] max-h-[280px] min-w-[100px] min-h-[100px] cursor-pointer group relative overflow-hidden"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Texture overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent_70%)]" />
          <svg viewBox="0 0 64 64" fill="none" className="w-1/2 h-1/2 relative z-10 group-hover:scale-110 transition-transform duration-300">
            <path d="M24 20L12 32L24 44" stroke="hsl(var(--text-black))" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M40 20L52 32L40 44" stroke="hsl(var(--text-black))" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>

        {/* Design - Rounded Square Green */}
        <motion.div
          className="icon-tile icon-tile-square bg-icon-green w-[18vw] h-[18vw] max-w-[280px] max-h-[280px] min-w-[100px] min-h-[100px] -ml-3 cursor-pointer group relative overflow-hidden"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          whileHover={{ scale: 1.05, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 bg-gradient-to-tl from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_60%)]" />
          <svg viewBox="0 0 64 64" fill="none" className="w-1/2 h-1/2 relative z-10 group-hover:scale-110 transition-transform duration-300">
            <circle cx="32" cy="24" r="8" stroke="hsl(var(--text-black))" strokeWidth="4" fill="none" />
            <path d="M16 52C16 43.163 23.163 36 32 36C40.837 36 48 43.163 48 52" stroke="hsl(var(--text-black))" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </motion.div>

        {/* Creative - Hexagon Orange */}
        <motion.div
          className="relative w-[20vw] h-[20vw] max-w-[300px] max-h-[300px] min-w-[110px] min-h-[110px] -ml-3 flex items-center justify-center cursor-pointer group"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          whileHover={{ scale: 1.08, rotate: 10 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full absolute group-hover:drop-shadow-2xl transition-all duration-300">
            <defs>
              <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--accent-orange))" />
                <stop offset="100%" stopColor="hsl(var(--accent-orange))" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <path d="M25 10H75L95 50L75 90H25L5 50L25 10Z" fill="url(#hexGrad)" />
          </svg>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)] opacity-50" />
          <svg viewBox="0 0 64 64" fill="none" className="w-2/5 h-2/5 relative z-10 group-hover:scale-110 transition-transform duration-300">
            <path d="M32 8L8 20V44L32 56L56 44V20L32 8Z" stroke="hsl(var(--text-black))" strokeWidth="3" fill="none" />
            <circle cx="32" cy="32" r="8" fill="hsl(var(--text-black))" />
          </svg>
        </motion.div>

        {/* Mobile - Rounded Square Yellow */}
        <motion.div
          className="icon-tile icon-tile-square bg-icon-yellow w-[18vw] h-[18vw] max-w-[280px] max-h-[280px] min-w-[100px] min-h-[100px] -ml-3 cursor-pointer group relative overflow-hidden"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.2),transparent_65%)]" />
          <svg viewBox="0 0 64 64" fill="none" className="w-1/2 h-1/2 relative z-10 group-hover:scale-110 transition-transform duration-300">
            <rect x="18" y="8" width="28" height="48" rx="4" stroke="hsl(var(--text-black))" strokeWidth="3" fill="none" />
            <circle cx="32" cy="48" r="3" fill="hsl(var(--text-black))" />
          </svg>
        </motion.div>

        {/* Web - Circle Blue */}
        <motion.div
          className="icon-tile icon-tile-circle bg-icon-blue w-[18vw] h-[18vw] max-w-[280px] max-h-[280px] min-w-[100px] min-h-[100px] -ml-3 cursor-pointer group relative overflow-hidden"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          whileHover={{ scale: 1.05, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 bg-gradient-to-tl from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.15),transparent_70%)]" />
          <svg viewBox="0 0 64 64" fill="none" className="w-1/2 h-1/2 relative z-10 group-hover:scale-110 transition-transform duration-300">
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
