import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MessageCircle,
  Mail,
  Linkedin,
  ArrowUp,
  Play,
  Download,
} from "lucide-react";
import { videoSectionData, contactData, footerData } from "../data/mock";

/* ========== VIDEO SECTION (A Quick Hello) ========== */
export const VideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="pt-10 lg:pt-12 pb-16 lg:pb-20 relative" id="video">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#4f7cff]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-[34px] sm:text-[42px] lg:text-[50px] font-bold tracking-[-0.03em] leading-[1.1] mb-5"
          >
            {videoSectionData.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[15px] text-[#a7b0c0] leading-[1.7] mb-5 max-w-3xl mx-auto whitespace-pre-line text-center"
          >
            {videoSectionData.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-3xl mx-auto mb-5"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] aspect-video">
              <iframe
                src="https://www.youtube.com/embed/p9IWM7fmNio?rel=0&modestbranding=1&controls=1&iv_load_policy=3&disablekb=1&fs=0"
                title="Danzel Henson Video Introduction"
                className="absolute inset-0 w-full h-full"
                style={{ borderRadius: '12px', border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[15px] text-[#a7b0c0] mb-3 max-w-xl mx-auto"
          >
            {videoSectionData.belowVideo}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {videoSectionData.buttons.map((btn, i) => {
              const Icon = iconMap[btn.icon];
              return (
                <a
                  key={i}
                  href={btn.url}
                  target={btn.url.startsWith("mailto:") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="group glass-card rounded-xl px-5 py-3.5 flex items-center gap-3 hover:border-[#4f7cff]/20 transition-all duration-400 hover:-translate-y-0.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#4f7cff]/10 flex items-center justify-center group-hover:bg-[#4f7cff]/15 transition-colors duration-300">
                    <Icon size={17} className="text-[#4f7cff]" />
                  </div>
                  <span className="text-[14px] text-[#a7b0c0] group-hover:text-[#f5f7fb] transition-colors duration-300">
                    {btn.label}
                  </span>
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ========== LET'S TALK ========== */
const iconMap = {
  MessageCircle,
  Mail,
  Linkedin,
  Play,
  Download,
};

export const LetsTalk = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-10 lg:py-12 relative" id="contact">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#4f7cff]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className="max-w-3xl mx-auto text-center">
          {/* Final CTA block — title, body, 5 buttons, closing line */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-[34px] sm:text-[42px] lg:text-[50px] font-bold tracking-[-0.03em] leading-[1.1] mb-5"
          >
            {contactData.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[15px] text-[#a7b0c0] mb-3 max-w-3xl mx-auto whitespace-pre-line text-center"
          >
            {contactData.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center mb-4"
          >
            {/* Row 1: WhatsApp · Email · LinkedIn */}
            <div className="flex flex-wrap justify-center gap-3">
              {contactData.buttons.slice(0, 3).map((btn, i) => {
                const Icon = iconMap[btn.icon];
                return (
                  <a
                    key={i}
                    href={btn.url}
                    target={btn.url.startsWith("mailto:") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="group glass-card rounded-xl px-5 py-3.5 flex items-center gap-3 hover:border-[#4f7cff]/20 transition-all duration-400 hover:-translate-y-0.5"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#4f7cff]/10 flex items-center justify-center group-hover:bg-[#4f7cff]/15 transition-colors duration-300">
                      <Icon size={17} className="text-[#4f7cff]" />
                    </div>
                    <span className="text-[14px] text-[#a7b0c0] group-hover:text-[#f5f7fb] transition-colors duration-300">
                      {btn.label}
                    </span>
                  </a>
                );
              })}
            </div>
            {/* Row 2: Watch my intro · Download CV */}
            <div className="flex flex-wrap justify-center gap-3 mt-3">
              {contactData.buttons.slice(3, 5).map((btn, i) => {
                const Icon = iconMap[btn.icon];
                return (
                  <a
                    key={i + 3}
                    href={btn.url}
                    target={btn.url.startsWith("mailto:") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="group glass-card rounded-xl px-5 py-3.5 flex items-center gap-3 hover:border-[#4f7cff]/20 transition-all duration-400 hover:-translate-y-0.5"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#4f7cff]/10 flex items-center justify-center group-hover:bg-[#4f7cff]/15 transition-colors duration-300">
                      <Icon size={17} className="text-[#4f7cff]" />
                    </div>
                    <span className="text-[14px] text-[#a7b0c0] group-hover:text-[#f5f7fb] transition-colors duration-300">
                      {btn.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-[13px] text-[#5a6375] max-w-3xl mx-auto leading-[1.7] text-center"
          >
            {contactData.closingLine}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

/* ========== FOOTER ========== */
export const Footer = () => {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-[14px] font-medium text-[#f5f7fb] mb-1">
              {footerData.name}
            </p>
            <p className="text-[13px] text-[#5a6375]">
              {footerData.tagline}
            </p>
          </div>

          <div className="flex items-center gap-6">
            {footerData.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target={link.url.startsWith("mailto:") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="text-[13px] text-[#5a6375] hover:text-[#4f7cff] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-[13px] text-[#5a6375] hover:text-[#f5f7fb] transition-colors duration-300 flex items-center gap-1.5"
            >
              <ArrowUp size={12} />
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
