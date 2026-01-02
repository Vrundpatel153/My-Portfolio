import { motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const PortfolioNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="nav-pill">
        {/* Logo */}
        <a href="#" className="w-10 h-10 flex-shrink-0">
          <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
            <rect width="40" height="40" rx="8" fill="hsl(var(--accent-orange))" />
            <text x="12" y="28" fill="hsl(var(--text-black))" fontWeight="900" fontSize="20" fontFamily="Poppins">A</text>
          </svg>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1 px-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-panel-cream text-sm font-medium hover:bg-panel-cream/10 rounded-full transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a href="#contact" className="btn-lime ml-2 text-sm whitespace-nowrap hidden md:block">
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-2 p-2 text-panel-cream"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 right-0 mt-2 bg-stroke-charcoal rounded-2xl p-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-4 py-3 text-panel-cream font-medium hover:bg-panel-cream/10 rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-lime w-full text-center mt-4 block"
            onClick={() => setMobileOpen(false)}
          >
            Hire Me
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default PortfolioNavbar;
