import { ScrollReveal, StaggerContainer, StaggerItem } from "../animations/ScrollReveal";
import { Mail, MapPin, Phone, Send, Linkedin, Github, Twitter } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-accent-periwinkle py-20 md:py-32 px-4">
      {/* Top Pill */}
      <ScrollReveal className="flex justify-center mb-8">
        <span className="btn-cream text-sm">Get In Touch</span>
      </ScrollReveal>

      <div className="max-w-7xl mx-auto">
        <div className="bento-card">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Contact Info */}
            <div>
              <ScrollReveal>
                <h2 className="text-4xl md:text-5xl font-black text-text-black mb-6">
                  Let's work<br />
                  together<span className="text-accent-periwinkle">.</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-text-black/70 text-lg mb-8">
                  Have a project in mind? I'd love to hear about it. Let's create something amazing together.
                </p>
              </ScrollReveal>

              <StaggerContainer className="space-y-4 mb-8" staggerDelay={0.1}>
                <StaggerItem>
                  <a href="mailto:hello@alexmorgan.dev" className="flex items-center gap-4 text-text-black hover:text-accent-orange transition-colors">
                    <div className="w-12 h-12 bg-accent-orange rounded-xl flex items-center justify-center">
                      <Mail className="w-5 h-5 text-text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-text-black/50">Email</p>
                      <p className="font-semibold">hello@alexmorgan.dev</p>
                    </div>
                  </a>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex items-center gap-4 text-text-black">
                    <div className="w-12 h-12 bg-icon-green rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-text-black/50">Location</p>
                      <p className="font-semibold">San Francisco, CA</p>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex items-center gap-4 text-text-black">
                    <div className="w-12 h-12 bg-icon-blue rounded-xl flex items-center justify-center">
                      <Phone className="w-5 h-5 text-text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-text-black/50">Phone</p>
                      <p className="font-semibold">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>

              {/* Social Links */}
              <ScrollReveal delay={0.4}>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-stroke-charcoal rounded-xl flex items-center justify-center text-panel-cream hover:bg-accent-lime hover:text-text-black transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-stroke-charcoal rounded-xl flex items-center justify-center text-panel-cream hover:bg-accent-lime hover:text-text-black transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-stroke-charcoal rounded-xl flex items-center justify-center text-panel-cream hover:bg-accent-lime hover:text-text-black transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right - Contact Form */}
            <ScrollReveal direction="right">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-text-black font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border-2 border-stroke-charcoal bg-panel-cream text-text-black focus:border-accent-periwinkle focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-text-black font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border-2 border-stroke-charcoal bg-panel-cream text-text-black focus:border-accent-periwinkle focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-text-black font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border-2 border-stroke-charcoal bg-panel-cream text-text-black focus:border-accent-periwinkle focus:outline-none transition-colors"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label className="block text-text-black font-semibold mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-stroke-charcoal bg-panel-cream text-text-black focus:border-accent-periwinkle focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent-lime text-text-black rounded-full py-4 font-bold text-lg flex items-center justify-center gap-2 hover-lift"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
