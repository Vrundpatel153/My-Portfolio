import PortfolioNavbar from "@/components/portfolio/PortfolioNavbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ServicesSection from "@/components/portfolio/ServicesSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ProcessSection from "@/components/portfolio/ProcessSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import TestimonialsSection from "@/components/portfolio/TestimonialsSection";
import CTASection from "@/components/portfolio/CTASection";
import ContactSection from "@/components/portfolio/ContactSection";
import FooterSection from "@/components/portfolio/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <PortfolioNavbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <ExperienceSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <FooterSection />
    </main>
  );
};

export default Index;
