import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { whoIHelpData } from "../data/mock";

const WhoIHelp = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section className="pt-16 lg:pt-20 pb-10 lg:pb-12 relative" id="whoihelp">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={sectionRef}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-[26px] sm:text-[28px] lg:text-[32px] font-bold tracking-[0.05em] uppercase leading-[1.1] mb-2 text-center"
        >
          {whoIHelpData.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="text-[15px] lg:text-[16px] text-[#a7b0c0] leading-[1.7] max-w-2xl mx-auto mb-6 text-center"
        >
          {whoIHelpData.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full"
        >
          {whoIHelpData.cards.map((card, i) => (
            <div
              key={i}
              className="min-h-0 animate-float-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.animationPlayState = "paused";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.animationPlayState = "running";
              }}
              style={{
                animationDelay: `${i * 0.4}s`,
              }}
            >
              <div className="glass-card rounded-2xl p-8 lg:p-9 h-full w-full min-h-[340px] relative overflow-hidden hover-glow transition-all duration-500">
                <h3 className="text-[14px] sm:text-[15px] font-semibold text-[#f5f7fb] mb-3.5 leading-snug uppercase tracking-[0.05em]">
                  {card.title}
                </h3>
                <p className="text-[14px] text-[#a7b0c0] leading-[1.75]">
                  {card.description}
                </p>
                <div
                  className="absolute bottom-4 right-4 rounded-full p-2"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(59,127,212,0.12) 0%, transparent 70%)",
                  }}
                >
                  <span
                    className="text-[96px] font-bold leading-none block"
                    style={{ color: "#3b7fd4", opacity: 0.07 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoIHelp;
