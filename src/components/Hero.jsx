import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { heroData, heroStats } from "../data/mock";

const PORTRAIT_URL = "https://customer-assets.emergentagent.com/job_danzel-portfolio/artifacts/py4ib4yz_danzel-henson-hero.png";

/* Stat chip positions — orbiting portrait, not grid-aligned */
const chipPositions = [
  { top: "-6%", left: "58%", delay: 0.6 },
  { top: "15%", right: "-32%", delay: 0.8 },
  { top: "55%", right: "-24%", delay: 1.0 },
  { bottom: "6%", left: "-26%", delay: 1.2 },
  { top: "32%", left: "-34%", delay: 1.4 },
];

const floatClasses = [
  "animate-float",
  "animate-float-slow animate-float-delay-1",
  "animate-float animate-float-delay-2",
  "animate-float-slow animate-float-delay-3",
  "animate-float animate-float-delay-4",
];

const Hero = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const chipsY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="flex items-center relative pt-24 pb-12 lg:pt-28 lg:pb-16"
      id="hero"
    >
      {/* Faint grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Background glow — parallax layer 1 */}
      <motion.div
        style={{ y: glowY }}
        className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-[#4f7cff]/[0.04] rounded-full blur-[180px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Portrait + Floating Stats — parallax layer 2 & 3 */}
          <motion.div
            style={{ y: portraitY }}
            className="relative order-2 lg:order-1 flex justify-center lg:justify-start min-w-0"
          >
            <div className="relative">
              {/* Navy glow behind portrait */}
              <div className="absolute inset-0 -inset-x-12 -inset-y-12 bg-[#4f7cff]/[0.07] rounded-3xl blur-[80px] pointer-events-none" />

              {/* Portrait frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-[280px] h-[373px] sm:w-[320px] sm:h-[427px] lg:w-[370px] lg:h-[493px] max-w-full rounded-2xl overflow-hidden"
              >
                <img
                  src={PORTRAIT_URL}
                  alt="Danzel Henson"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                {/* Subtle bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0f1115] to-transparent" />
                {/* Border overlay */}
                <div className="absolute inset-0 rounded-2xl border border-white/[0.08]" />
              </motion.div>

              {/* Floating Stat Chips — parallax layer 3 */}
              <motion.div style={{ y: chipsY }} className="absolute inset-0 pointer-events-none">
                {heroStats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: chipPositions[i].delay }}
                    className={`absolute hidden xl:block pointer-events-auto ${floatClasses[i]}`}
                    style={{
                      top: chipPositions[i].top,
                      bottom: chipPositions[i].bottom,
                      left: chipPositions[i].left,
                      right: chipPositions[i].right,
                      zIndex: 20,
                    }}
                  >
                    <div className="glass-card rounded-xl px-4 py-3 min-w-[130px] hover-glow">
                      <p className="text-[16px] font-bold text-[#f5f7fb] leading-tight">
                        {stat.value}
                      </p>
                      <p className="text-[10px] text-[#a7b0c0] mt-0.5 leading-snug">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Text Stack */}
          <div ref={textRef} className="order-1 lg:order-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[13px] text-[#a7b0c0] tracking-[0.15em] uppercase mb-3"
            >
              {heroData.label}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-[38px] sm:text-[46px] lg:text-[54px] font-bold leading-[1.08] tracking-[-0.03em] text-[#f5f7fb] mb-4 whitespace-pre-line"
            >
              {heroData.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-[15px] lg:text-[16px] text-[#a7b0c0] leading-[1.7] mb-6 max-w-[500px]"
            >
              {heroData.subtext}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-3"
            >
              <button
                onClick={() => scrollTo("#contact")}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#4f7cff] text-white text-[14px] font-medium rounded-xl hover:bg-[#6590ff] transition-colors duration-300"
              >
                Talk to me
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={() => scrollTo("#work")}
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-[14px] text-[#a7b0c0] hover:text-[#f5f7fb] transition-colors duration-300"
              >
                See the work
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="text-[13px] text-[#5a6375] mt-4"
            >
              {heroData.locationLine}
            </motion.p>

            {/* Mobile stat chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="xl:hidden mt-8 flex flex-wrap justify-center gap-2"
            >
              {heroStats.map((stat, i) => (
                <div key={i} className="glass-card rounded-lg px-3 py-2">
                  <span className="text-sm font-bold text-[#f5f7fb]">{stat.value}</span>
                  <span className="text-[10px] text-[#a7b0c0] ml-1.5">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
