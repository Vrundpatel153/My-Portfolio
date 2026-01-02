import { ScrollReveal, StaggerContainer, StaggerItem } from "../animations/ScrollReveal";
import { Mail, MapPin, Phone, Send, Linkedin, Github, CheckCircle, AlertCircle } from "lucide-react";
import { useState, FormEvent } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // Using mailto as a simple frontend-only solution
      const mailtoLink = `mailto:vrundpatel153@gmail.com?subject=${encodeURIComponent(
        formData.subject || "Portfolio Contact Form"
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
      
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to open email client. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
                  <a href="mailto:vrundpatel153@gmail.com" className="flex items-center gap-4 text-text-black hover:text-accent-orange transition-colors">
                    <div className="w-12 h-12 bg-accent-orange rounded-xl flex items-center justify-center">
                      <Mail className="w-5 h-5 text-text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-text-black/50">Email</p>
                      <p className="font-semibold">vrundpatel153@gmail.com</p>
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
                      <p className="font-semibold">Vadodara, Gujarat, India</p>
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
                      <p className="font-semibold">+91 76989 79593</p>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>

              {/* Social Links */}
              <ScrollReveal delay={0.4}>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/vrund-patel-73a239284"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 bg-stroke-charcoal rounded-xl flex items-center justify-center text-panel-cream hover:bg-accent-lime hover:text-text-black transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/Vrundpatel153"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 bg-stroke-charcoal rounded-xl flex items-center justify-center text-panel-cream hover:bg-accent-lime hover:text-text-black transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right - Contact Form */}
            <ScrollReveal direction="right">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Status Messages */}
                {status === "success" && (
                  <div className="bg-icon-green/20 border-2 border-icon-green rounded-xl p-4 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-icon-green flex-shrink-0" />
                    <p className="text-text-black text-sm">
                      Email client opened! If it didn't open, please email me directly at vrundpatel153@gmail.com
                    </p>
                  </div>
                )}
                
                {status === "error" && (
                  <div className="bg-accent-orange/20 border-2 border-accent-orange rounded-xl p-4 flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-accent-orange flex-shrink-0" />
                    <p className="text-text-black text-sm">{errorMessage}</p>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-text-black font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-stroke-charcoal bg-panel-cream text-text-black focus:border-accent-periwinkle focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-text-black font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-stroke-charcoal bg-panel-cream text-text-black focus:border-accent-periwinkle focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-text-black font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-stroke-charcoal bg-panel-cream text-text-black focus:border-accent-periwinkle focus:outline-none transition-colors"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label className="block text-text-black font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-stroke-charcoal bg-panel-cream text-text-black focus:border-accent-periwinkle focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-accent-lime text-text-black rounded-full py-4 font-bold text-lg flex items-center justify-center gap-2 hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Opening..." : "Send Message"}
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
