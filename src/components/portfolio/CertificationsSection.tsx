import { ScrollReveal, StaggerContainer, StaggerItem } from "../animations/ScrollReveal";
import { ExternalLink, X } from "lucide-react";
import { ChevronShape } from "../icons/IconShapes";
import { useState } from "react";

type CertificateItem = {
  title: string;
  issuer: string;
  description: string;
  date: string;
  color: string;
  href: string;
  imageFile?: string;
  imageAlt?: string;
};

const mediaCandidatesFor = (fileName: string) => {
  const baseUrl = import.meta.env.BASE_URL;
  const candidates = [`${baseUrl}media/${encodeURIComponent(fileName)}`];

  const match = fileName.match(/^(.*)\.(png|jpg|jpeg|webp)$/i);
  if (match) {
    const base = match[1];
    const exts = ["png", "jpg", "jpeg", "webp"];
    for (const ext of exts) {
      candidates.push(`${baseUrl}media/${encodeURIComponent(`${base}.${ext}`)}`);
    }
  }

  return candidates;
};

const certificates: CertificateItem[] = [
  {
    title: "Deloitte Australia – Technology Job Simulation",
    issuer: "Forage (Deloitte)",
    description:
      "Completed a virtual job simulation focused on software development and technology consulting. Produced a dashboard proposal for a real-time manufacturing use case and applied practical problem-solving in a delivery-style workflow.",
    date: "Oct 2025",
    color: "bg-accent-periwinkle",
    href: "#",
    imageFile: "deloitte.png",
    imageAlt: "Deloitte Australia Technology Job Simulation certificate",
  },
  {
    title: "Odoo Hackathon 2025 – 24-Hour Coding Marathon",
    issuer: "Odoo IN Pvt Ltd",
    description:
      "Collaborated in a 24-hour hackathon to design and prototype a rental property management platform, contributing to features such as listings, bookings, payments, and operational workflows under tight time constraints.",
    date: "Aug 2025",
    color: "bg-icon-green",
    href: "#",
    imageFile: "odoo.png",
    imageAlt: "Odoo Hackathon 2025 certificate",
  },
  {
    title: "JavaScript (Intermediate) Certificate",
    issuer: "HackerRank",
    description:
      "Earned the JavaScript (Intermediate) certification by passing a standardized skills assessment covering core language features and practical problem-solving.",
    date: "Apr 2025",
    color: "bg-accent-orange",
    href: "#",
    imageFile: "javascript.png",
    imageAlt: "HackerRank JavaScript (Intermediate) certificate",
  },
  {
    title: "The Nuts and Bolts of Machine Learning",
    issuer: "Google (Coursera)",
    description:
      "Completed course training focused on machine learning fundamentals and practical workflows, including key concepts, model intuition, and evaluation basics.",
    date: "Aug 2025",
    color: "bg-icon-yellow",
    href: "https://coursera.org/verify/4WG3ZK1QUFP9",
    imageFile: "ml.png",
    imageAlt: "The Nuts and Bolts of Machine Learning certificate",
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    description:
      "Completed training covering Generative AI fundamentals, responsible AI, prompt engineering, and practical applications of AI for business and productivity (including Microsoft Copilot concepts).",
    date: "Dec 2024",
    color: "bg-icon-blue",
    href: "#",
    imageFile: "genai.png",
    imageAlt: "Career Essentials in Generative AI certificate",
  },
  {
    title: "150+ LeetCode Problems Solved",
    issuer: "LeetCode",
    description:
      "Consistently practiced data structures and algorithms, reaching 150+ solved problems across core patterns such as arrays, hashing, recursion, dynamic programming, and graphs.",
    date: "Ongoing",
    color: "bg-accent-lime",
    href: "#",
    imageFile: "leetcode.png",
    imageAlt: "LeetCode stats screenshot",
  },
];

const CertificationsSection = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="certificates" className="bg-panel-cream py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute top-0 left-0 pointer-events-none opacity-20">
        <ChevronShape direction="left" className="absolute -top-20 -left-20 w-56 md:w-72 h-auto text-icon-yellow/50" />
        <ChevronShape direction="left" className="absolute top-24 -left-28 w-64 md:w-80 h-auto text-accent-periwinkle/40" />
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <p className="text-text-black/60 text-sm uppercase tracking-wider mb-2">Credentials</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="section-headline text-text-black">
              Certifications &<br />
              <span className="text-accent-periwinkle">Achievements</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Certificates Grid (same sizing style as Projects) */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {certificates.map((cert) => (
            <StaggerItem key={cert.title}>
              <div className="group relative rounded-[24px] overflow-hidden border-2 border-stroke-charcoal hover-lift">
                {/* Preview area (ready for certificate image) */}
                <div className={`${cert.color} aspect-[4/3] p-6 flex items-stretch`}>
                  <div className="w-full h-full bg-panel-cream rounded-lg p-3 relative z-10 flex flex-col">
                    <div className="flex gap-1.5 mb-2">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                    <div className="bg-muted rounded-md flex-1 min-h-[160px] relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-text-black/40 text-sm font-medium">Certificate Preview</div>
                      </div>
                      {cert.imageFile ? (
                        <img
                          src={mediaCandidatesFor(cert.imageFile)[0]}
                          data-attempt="0"
                          alt={cert.imageAlt ?? cert.title}
                          className="absolute inset-0 w-full h-full object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          decoding="async"
                          onClick={() => setSelectedImage({ src: mediaCandidatesFor(cert.imageFile!)[0], alt: cert.imageAlt ?? cert.title })}
                          onError={(e) => {
                            const image = e.currentTarget;
                            const candidates = mediaCandidatesFor(cert.imageFile!);
                            const attempt = Number(image.dataset.attempt ?? "0") + 1;

                            if (attempt >= candidates.length) {
                              image.style.display = "none";
                              return;
                            }

                            image.dataset.attempt = String(attempt);
                            image.src = candidates[attempt];
                          }}
                        />
                      ) : null}
                    </div>
                  </div>

                  {/* Hover Action */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <a
                      href={cert.href}
                      target={cert.href === "#" ? undefined : "_blank"}
                      rel={cert.href === "#" ? undefined : "noreferrer"}
                      className="w-10 h-10 bg-panel-cream rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      aria-label={`Open ${cert.title}`}
                    >
                      <ExternalLink className="w-5 h-5 text-text-black" />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="bg-panel-cream p-6">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="text-xl font-bold text-text-black">{cert.title}</h3>
                    <span className="text-sm font-semibold text-text-black/60">{cert.date}</span>
                  </div>
                  <p className="text-text-black/60 text-sm mb-3">{cert.issuer}</p>
                  <p className="text-text-black/70 text-sm leading-relaxed line-clamp-3">{cert.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-7xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 md:-right-12 md:top-0 w-10 h-10 bg-panel-cream hover:bg-accent-lime rounded-full flex items-center justify-center transition-all hover:scale-110 z-10"
              aria-label="Close certificate preview"
            >
              <X className="w-5 h-5 text-text-black" />
            </button>

            {/* Image */}
            <div className="bg-panel-cream rounded-2xl p-4 shadow-2xl">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificationsSection;
