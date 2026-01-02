import { ScrollReveal, StaggerContainer, StaggerItem } from "../animations/ScrollReveal";
import { useState } from "react";
import { X } from "lucide-react";

const AboutSection = () => {
  const [showBadge, setShowBadge] = useState(false);
  const profileSrc = `${import.meta.env.BASE_URL}profile.jpg`;
  const badgeGifSrc = `${import.meta.env.BASE_URL}media/2550.gif`;

  const handleProfileImageError: React.ReactEventHandler<HTMLImageElement> = (event) => {
    const image = event.currentTarget;
    const attempt = Number(image.dataset.attempt ?? "0");

    const fallbacks = [
      `${import.meta.env.BASE_URL}profile.jpeg`,
      `${import.meta.env.BASE_URL}profile.png`,
      `${import.meta.env.BASE_URL}placeholder.svg`,
    ];

    if (attempt >= fallbacks.length) return;

    image.dataset.attempt = String(attempt + 1);
    image.src = fallbacks[attempt];
  };

  const stats = [
    { number: "1", label: "Year Experience" },
    { number: "150+", label: "Problems Solved" },
    { number: "50+", label: "Projects Completed" },
    { number: "10+", label: "Happy Clients" },
    { number: "2", label: "Medals Won" },
  ];

  return (
    <section id="about" className="bg-accent-periwinkle py-20 md:py-32 px-4">
      {/* Top Pill */}
      <ScrollReveal className="flex justify-center mb-8">
        <span className="btn-cream text-sm">About Me</span>
      </ScrollReveal>

      {/* Bento Card */}
      <div className="max-w-7xl mx-auto">
        <div className="bento-card">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="bento-headline text-text-black mb-8">
                  Building scalable<br />
                  web products that<br />
                  <span className="text-accent-periwinkle">ship</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-text-black/80 text-base md:text-lg mb-6 max-w-lg text-justify leading-relaxed">
                  I&apos;m a{" "}
                  <span className="font-semibold text-accent-orange">Full-Stack Developer</span>{" "}
                  focused on building{" "}
                  <span className="font-semibold text-accent-lime">scalable web applications</span>, solving problems end-to-end across frontend, backend, and deployment.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-text-black/80 text-base md:text-lg mb-6 max-w-lg text-justify leading-relaxed">
                  I work with{" "}
                  <span className="font-semibold text-accent-periwinkle">React</span>,{" "}
                  <span className="font-semibold text-accent-periwinkle">Next.js</span>,{" "}
                  <span className="font-semibold text-accent-periwinkle">TypeScript</span>, and modern databases, and I&apos;m expanding into{" "}
                  <span className="font-semibold text-accent-orange">AI-powered solutions</span>{" "}
                  using{" "}
                  <span className="font-semibold text-accent-orange">Generative AI</span> and{" "}
                  <span className="font-semibold text-accent-orange">LangChain</span>, supported by cloud and DevOps fundamentals for real-world production systems.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <p className="text-text-black/70 text-base md:text-lg mb-10 max-w-lg text-justify leading-relaxed">
                  Currently in my{" "}
                  <span className="font-semibold text-text-black">3rd year</span> of B.Tech in Computer Engineering at{" "}
                  <span className="font-semibold text-text-black">Charotar University of Science and Technology (CHARUSAT)</span>.
                </p>
              </ScrollReveal>

              {/* Stats */}
              <StaggerContainer className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {stats.map((stat) => (
                  <StaggerItem key={stat.label}>
                    <div className="text-center md:text-left">
                      <div className="text-3xl md:text-4xl font-black text-text-black">{stat.number}</div>
                      <div className="text-sm text-text-black/60">{stat.label}</div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Right - Profile Image Area */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="right">
                <div className="relative">
                  <div className="bg-gradient-to-br from-accent-periwinkle to-accent-orange rounded-[24px] md:rounded-[40px] aspect-[3/4] overflow-hidden border-2 border-stroke-charcoal">
                    <div className="absolute inset-0 p-5 md:p-7">
                      <div className="w-full h-full bg-panel-cream rounded-[18px] border-2 border-stroke-charcoal overflow-hidden flex items-center justify-center relative">
                        <img
                          src={profileSrc}
                          alt="Vrund Patel"
                          className="w-full h-full object-cover scale-[1.06] origin-center object-[center_56%]"
                          loading="lazy"
                          decoding="async"
                          onError={handleProfileImageError}
                        />
                        
                        {/* Floating Badge Button */}
                        <button
                          onClick={() => setShowBadge(true)}
                          className="absolute top-4 left-4 flex items-center gap-2 bg-accent-lime/95 hover:bg-accent-lime text-text-black font-semibold text-xs md:text-sm px-3 md:px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-stroke-charcoal/20 z-10"
                          aria-label="Show LeetCode Badge"
                        >
                          <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5" fill="currentColor">
                            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                          </svg>
                          <span className="font-bold">Show Badge</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-lime rounded-2xl -z-10" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-icon-yellow rounded-full -z-10" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* Badge Modal */}
      {showBadge && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setShowBadge(false)}
        >
          <div 
            className="relative bg-panel-cream rounded-[24px] border-2 border-stroke-charcoal p-6 md:p-8 max-w-2xl w-full animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowBadge(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-accent-orange hover:bg-accent-orange/90 rounded-full flex items-center justify-center transition-all hover:scale-110"
              aria-label="Close badge modal"
            >
              <X className="w-5 h-5 text-text-black" />
            </button>

            {/* Badge Title */}
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-text-black mb-2">
                🏆 LeetCode 50 Day Streak Badge
              </h3>
              <p className="text-text-black/60 text-sm md:text-base">
                50+ Consecutive Days of Problem Solving
              </p>
            </div>

            {/* Badge GIF */}
            <div className="bg-gradient-to-br from-accent-lime to-icon-green rounded-2xl p-4 md:p-6 border-2 border-stroke-charcoal">
              <div className="bg-panel-cream rounded-xl overflow-hidden shadow-xl">
                <img
                  src={badgeGifSrc}
                  alt="LeetCode Badge Animation"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 text-center">
              <p className="text-text-black/70 text-sm">
                Maintaining consistency with daily problem solving
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;
