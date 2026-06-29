"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, techs } from "../../data/techsData";

export default function Techs() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredTechs = selectedCategory === "all"
    ? techs
    : techs.filter((tech) => tech.category === selectedCategory);

  const visibleTechs = filteredTechs.slice(0, visibleCount);

  return (
    <section className="bg-[#0e0f1a] px-6 md:px-20 py-16 md:py-24" id="technologies">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 w-fit">
          TECNOLOGÍAS & HABILIDADES
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl text-sm sm:text-base font-light leading-relaxed">
          Herramientas, metodologías y lenguajes que utilizo para construir aplicaciones web eficientes,
          optimizar el posicionamiento orgánico y diseñar experiencias centradas en el usuario.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mt-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setVisibleCount(9);
              }}
              className={`relative px-4 py-2 text-xs sm:text-sm font-bold tracking-wider rounded-full border transition-all duration-300 cursor-pointer ${
                selectedCategory === cat.id
                  ? "border-transparent text-white"
                  : "border-[#2c2f3a] text-gray-400 hover:text-white hover:border-gray-600"
              }`}
            >
              {selectedCategory === cat.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full z-0"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          <AnimatePresence mode="popLayout">
            {visibleTechs.map((tech) => (
              <motion.div
                layout
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group p-6 rounded-xl border border-[#2c2f3a] bg-[#0e0f1a] overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.15)] flex flex-col justify-between h-full"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div>
                  <div className="flex items-center gap-4">
                    <div className="p-[1px] rounded-lg bg-[#2c2f3a] group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-blue-500 transition-all duration-300">
                      <div className="bg-[#171926] p-3 rounded-lg text-2xl text-blue-400 group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                        {tech.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white tracking-wide group-hover:text-blue-400 transition-colors duration-300">
                      {tech.name}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {tech.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {visibleCount < filteredTechs.length && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 9)}
              className="group relative px-6 py-3 rounded-full border border-[#2c2f3a] text-sm font-bold tracking-wider text-gray-300 hover:text-white transition-all duration-300 hover:border-transparent cursor-pointer overflow-hidden"
            >
              {/* Background gradient transition on hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              <span className="relative z-10">VER MÁS</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}