"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Search, Cpu, ArrowDown } from "lucide-react";
import { getDictionary } from "../../data/dictionary";

export default function Hero({ lang = "es" }) {
  const dict = getDictionary(lang);
  const h = dict.hero;

  const contactHref = lang === "en" ? "/en#contact" : "#contact";
  const portfolioHref = lang === "en" ? "/en#portfolio" : "#portfolio";
  const servicesHref = lang === "en" ? "/en#services" : "#services";

  return (
    <section className="relative bg-[#0e0f1a] text-white min-h-screen flex items-center justify-center px-6 md:px-20 pt-24 pb-16 overflow-hidden">
      {/* Background Image with Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/heroimg.png"
          alt="Workspace Background"
          fill
          priority
          quality={90}
          className="object-cover object-center opacity-30 select-none pointer-events-none"
        />
        {/* Gradients for smooth blending into dark theme & optimal text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f1a] via-[#0e0f1a]/75 to-[#0e0f1a]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0e0f1a]/60 to-[#0e0f1a]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 text-xs font-mono text-pink-400 tracking-wider uppercase shadow-xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
          </span>
          {h.badge}
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight text-white uppercase"
        >
          {h.titleStart} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400">
            {h.titleHighlight}
          </span>
        </motion.h1>

        {/* Hero Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl font-light leading-relaxed"
        >
          {h.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <a
            href={contactHref}
            className="w-full sm:w-auto text-center inline-block rounded-md px-8 py-3.5 text-sm font-bold text-black bg-white transition-all duration-300 hover:bg-gray-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-[1.02]"
          >
            {h.ctaPrimary}
          </a>

          {/* Secondary CTA */}
          <a
            href={portfolioHref}
            className="w-full sm:w-auto text-center group relative inline-block rounded-md p-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-300 hover:shadow-[0_0_15px_#ec4899,0_0_15px_#8b5cf6] hover:scale-[1.02]"
          >
            <span className="block rounded-[4px] px-8 py-3 text-sm font-bold text-white bg-[#0e0f1a] group-hover:bg-[#0e0f1a]/80 transition-all duration-300">
              {h.ctaSecondary}
            </span>
          </a>
        </motion.div>

        {/* Feature Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10 w-full max-w-3xl"
        >
          <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
            <Code2 className="text-pink-400 w-5 h-5 shrink-0" />
            <div className="text-left">
              <p className="text-xs font-bold text-white uppercase tracking-wider">
                {h.highlight1Title}
              </p>
              <p className="text-[11px] text-gray-400">{h.highlight1Sub}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
            <Search className="text-purple-400 w-5 h-5 shrink-0" />
            <div className="text-left">
              <p className="text-xs font-bold text-white uppercase tracking-wider">
                {h.highlight2Title}
              </p>
              <p className="text-[11px] text-gray-400">{h.highlight2Sub}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
            <Cpu className="text-cyan-400 w-5 h-5 shrink-0" />
            <div className="text-left">
              <p className="text-xs font-bold text-white uppercase tracking-wider">
                {h.highlight3Title}
              </p>
              <p className="text-[11px] text-gray-400">{h.highlight3Sub}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href={servicesHref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors duration-300 group"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase text-gray-500 group-hover:text-gray-300">
          {h.scrollDown}
        </span>
        <ArrowDown className="w-4 h-4 animate-bounce text-pink-500" />
      </motion.a>
    </section>
  );
}
