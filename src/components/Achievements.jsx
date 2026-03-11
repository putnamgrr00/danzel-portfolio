import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experienceData } from "../data/mock";

const ExperienceGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-10 lg:py-12 relative" id="experience">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-[26px] sm:text-[28px] lg:text-[32px] font-bold tracking-[0.05em] uppercase leading-[1.1] mb-2 text-center text-[#f5f7fb]"
          >
            {experienceData.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[15px] text-[#a7b0c0] leading-[1.7] max-w-xl mx-auto mb-8 text-center"
          >
            {experienceData.intro}
          </motion.p>
        </div>

        {/* Reveal card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-3.5">
          {experienceData.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-6 lg:p-7 h-full hover-glow relative overflow-hidden">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4f7cff]/0 to-[#4f7cff]/0 group-hover:from-[#4f7cff]/[0.03] group-hover:to-transparent transition-all duration-700 rounded-2xl" />

                <div className="relative z-10">
                  <h3 className="text-[15px] lg:text-[16px] font-semibold text-[#f5f7fb] mb-2 leading-snug uppercase tracking-[0.05em]">
                    {card.title}
                  </h3>
                  <p className="text-[13px] text-[#a7b0c0] leading-[1.7] group-hover:text-[#c0c8d8] transition-colors duration-500">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceGrid;
