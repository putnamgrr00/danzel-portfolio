import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { workData, trustData } from "../data/mock";
import {
  ArrowUpRight,
  Palette,
  Film,
  FileText,
  Megaphone,
  Rocket,
  Settings2,
  HeartHandshake,
} from "lucide-react";

const BENTO_ICONS = [Palette, Film, FileText, Megaphone, Rocket, Settings2, HeartHandshake];
const BENTO_LAYOUT = [
  "lg:col-span-2 lg:col-start-1 lg:row-start-1",
  "lg:col-span-2 lg:col-start-3 lg:row-start-1",
  "lg:col-span-1 lg:col-start-1 lg:row-start-2",
  "lg:col-span-2 lg:col-start-2 lg:row-start-2",
  "lg:col-span-1 lg:col-start-4 lg:row-start-2",
  "lg:col-span-2 lg:col-start-1 lg:row-start-3",
  "lg:col-span-2 lg:col-start-3 lg:row-start-3",
];

const WorkBento = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [flipped, setFlipped] = useState({});
  const toggleFlip = (i) => setFlipped((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <section className="py-10 lg:py-12 relative" id="work">
      {/* Background accent */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-[#4f7cff]/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-[26px] sm:text-[28px] lg:text-[32px] font-bold tracking-[0.05em] uppercase leading-[1.1] mb-2 text-center text-[#f5f7fb]"
          >
            {workData.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="text-[15px] text-[#a7b0c0] leading-[1.7] max-w-3xl mx-auto mb-8 text-center lg:whitespace-nowrap"
          >
            {workData.intro}
          </motion.p>
        </div>

        {/* Bento grid — 4 cols, 3 rows */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {workData.tiles.map((tile, i) => {
            const gridClass = BENTO_LAYOUT[i] ?? "";
            const IconComponent = BENTO_ICONS[i];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.08 }}
                className={`group ${gridClass}`}
              >
                <div className="glass-card rounded-2xl p-6 lg:p-8 h-full hover-glow relative overflow-hidden">
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4f7cff]/0 to-[#4f7cff]/0 group-hover:from-[#4f7cff]/[0.03] group-hover:to-transparent transition-all duration-700 rounded-2xl" />

                  <div className="relative z-10">
                    <h3 className="text-[16px] lg:text-[18px] font-semibold text-[#f5f7fb] mb-2 uppercase tracking-[0.04em]">
                      {tile.title}
                    </h3>
                    <p className="text-[14px] text-[#a7b0c0] leading-[1.7]">
                      {tile.description}
                    </p>
                  </div>

                  {/* Ghost icon */}
                  <div
                    className="absolute bottom-4 right-4 rounded-full p-4"
                    style={{
                      background: "radial-gradient(circle, rgba(59,127,212,0.12) 0%, transparent 70%)",
                    }}
                  >
                    <IconComponent
                      className="w-28 h-28"
                      style={{ color: "#3b7fd4", opacity: 0.07 }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Portfolio + CV buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mt-8"
        >
          <a
            href="https://drive.google.com/drive/folders/1DKI0iZyt4sNhMMldwLg59v8pf0lUwO4i?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-medium bg-[#3b7fd4] text-white hover:bg-[#4a8ae0] transition-all duration-300"
          >
            See my work portfolio
            <ArrowUpRight size={15} />
          </a>
          <a
            href="https://drive.google.com/drive/folders/1DKI0iZyt4sNhMMldwLg59v8pf0lUwO4i?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-medium border border-[#3b7fd4] text-[#3b7fd4] hover:bg-[#3b7fd4]/10 transition-all duration-300"
          >
            Download my CV
            <ArrowUpRight size={15} />
          </a>
        </motion.div>

        {/* Proof block — flip cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 pt-7 border-t border-white/[0.05]"
        >
          <h3 className="text-[26px] sm:text-[28px] lg:text-[32px] font-bold tracking-[0.05em] uppercase leading-[1.1] mb-4 text-center text-[#f5f7fb]">
            {trustData.title}
          </h3>

          <p className="text-[14px] text-[#a7b0c0] leading-[1.8] mb-6 text-center max-w-2xl mx-auto">
            {trustData.intro}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4" style={{ perspective: "1000px" }}>
            {trustData.cards.map((card, i) => {
              const isFlipped = flipped[i];
              return (
                <div
                  key={i}
                  className="min-h-[320px] cursor-pointer"
                  style={{ perspective: "1000px" }}
                  onClick={() => toggleFlip(i)}
                >
                  <div
                    className="relative w-full h-full min-h-[320px]"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                      transition: "transform 0.5s ease",
                    }}
                  >
                    {/* Front face */}
                    <div
                      className="absolute inset-0 glass-card rounded-2xl p-6 lg:p-8 hover-glow flex flex-col items-center justify-between"
                      style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        backgroundImage: `radial-gradient(circle, rgba(59,127,212,0.15) 1px, transparent 1px)`,
                        backgroundSize: "20px 20px",
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#4f7cff]/0 to-[#4f7cff]/0 rounded-2xl pointer-events-none" />
                      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center">
                        <p className="text-[16px] lg:text-[18px] font-bold text-[#f5f7fb]">
                          {card.client}
                        </p>
                      </div>
                      <p className="text-[12px] text-[#888888] relative z-10">Click to see more</p>
                    </div>

                    {/* Back face */}
                    <div
                      className="absolute inset-0 glass-card rounded-2xl p-6 lg:p-8 hover-glow border-l-2 border-[#3b7fd4]/30"
                      style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        backgroundImage: `repeating-linear-gradient(
    45deg,
    rgba(59,127,212,0.04) 0px,
    rgba(59,127,212,0.04) 1px,
    transparent 1px,
    transparent 12px
  )`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#4f7cff]/0 to-[#4f7cff]/0 rounded-2xl pointer-events-none" />
                      <div className="relative z-10 h-full flex flex-col">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <p className="text-[16px] lg:text-[18px] font-bold text-[#f5f7fb]">
                            {card.client}
                          </p>
                          <a
                            href={card.proofLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex-shrink-0 w-9 h-9 rounded-full bg-[#3b7fd4] hover:bg-[#4a8ae0] flex items-center justify-center transition-colors duration-200"
                            aria-label="Open proof link"
                          >
                            <ArrowUpRight size={16} className="text-white" />
                          </a>
                        </div>
                        <p className="text-[13px] text-[#5a6375] mb-2">{card.tags}</p>
                        <p className="text-[14px] text-[#a7b0c0] leading-[1.7] flex-1">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkBento;
