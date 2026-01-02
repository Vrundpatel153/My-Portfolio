import { NavLogoIcon } from "./icons/IconShapes";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="nav-pill">
        {/* Logo */}
        <div className="w-10 h-10 flex-shrink-0">
          <NavLogoIcon className="w-full h-full" />
        </div>
        
        {/* Nav Items */}
        <div className="hidden md:flex items-center gap-1 px-2">
          <a href="#" className="px-4 py-2 text-panel-cream text-sm font-medium hover:bg-panel-cream/10 rounded-full transition-colors">
            Project
          </a>
          <a href="#" className="px-4 py-2 text-panel-cream text-sm font-medium hover:bg-panel-cream/10 rounded-full transition-colors">
            Navigators
          </a>
          <a href="#" className="px-4 py-2 text-panel-cream text-sm font-medium hover:bg-panel-cream/10 rounded-full transition-colors">
            Rewards
          </a>
          <a href="#" className="px-4 py-2 text-panel-cream text-sm font-medium hover:bg-panel-cream/10 rounded-full transition-colors">
            FAQ
          </a>
          <button className="px-4 py-2 text-panel-cream text-sm font-medium hover:bg-panel-cream/10 rounded-full transition-colors flex items-center gap-1">
            Products
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
        
        {/* CTA Button */}
        <button className="btn-lime ml-2 text-sm whitespace-nowrap">
          Launch Game
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
