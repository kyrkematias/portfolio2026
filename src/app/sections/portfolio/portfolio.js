"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { FaExternalLinkAlt } from "react-icons/fa";
import portfolioData from "../../data/portfolioData";

export default function Portfolio() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeProject, setActiveProject] = useState(null);

  // Disable scroll when modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeProject]);

  const getPillColor = (type) => {
    switch (type.toLowerCase()) {
      case "seo":
        return "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
      case "sem":
        return "bg-amber-500/10 text-amber-400 border border-amber-500/20";
      case "desarrollo web":
        return "bg-blue-500/10 text-blue-400 border border-blue-500/20";
      case "ux/ui":
        return "bg-pink-500/10 text-pink-400 border border-pink-500/20";
      default:
        return "bg-gray-500/10 text-gray-400 border border-gray-500/20";
    }
  };

  return (
    <section className="bg-[#0e0f1a] px-6 md:px-20 py-16 md:py-24" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 w-fit">
          MI PORTAFOLIO
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl text-sm sm:text-base font-light leading-relaxed">
          Una recopilación de mis trabajos destacados en desarrollo frontend, optimización SEO técnica, estructuración de bases de datos y campañas de marketing de precisión.
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {portfolioData.slice(0, visibleCount).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setActiveProject(project)}
              className="relative cursor-pointer group p-5 rounded-xl border border-[#2c2f3a] bg-[#0e0f1a] overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.15)] flex flex-col justify-between h-full"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Visual Banner Preview */}
                <div className={`relative h-44 w-full bg-gradient-to-tr ${project.gradient} rounded-lg flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] group-hover:scale-105 transition-transform duration-500" />
                  <span className="relative z-10 text-[10px] font-bold tracking-widest text-white/95 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full uppercase border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-5">
                  <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Bottom Skills & Redirection Link */}
              <div>
                {/* Skill Pills */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-full uppercase ${getPillColor(skill.type)}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>

                {/* Direct link - prevents modal pop */}
                <div className="mt-5 pt-4 border-t border-[#2c2f3a] flex justify-between items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-500 hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                  >
                    VER PROYECTO <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Paginate / Load More */}
        {visibleCount < portfolioData.length && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="group relative px-6 py-3 rounded-full border border-[#2c2f3a] text-sm font-bold tracking-wider text-gray-300 hover:text-white transition-all duration-300 hover:border-transparent cursor-pointer overflow-hidden"
            >
              {/* Background gradient transition on hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              <span className="relative z-10">VER MÁS PROYECTOS</span>
            </button>
          </div>
        )}
      </div>

      {/* Interactive Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Window */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-2xl bg-[#121324] border border-[#2c2f3a] rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
            >
              {/* X Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 bg-black/40 hover:bg-black/80 backdrop-blur-sm border border-white/10 text-white rounded-full p-2 transition-all duration-200 z-20 cursor-pointer"
              >
                <X size={18} />
              </button>

              {/* Scrollable Content */}
              <div className="overflow-y-auto p-6 md:p-8 flex-grow">
                {/* Preview Banner */}
                <div className={`h-48 md:h-56 w-full bg-gradient-to-tr ${activeProject.gradient} rounded-xl flex items-center justify-center relative overflow-hidden mb-6`}>
                  <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
                  <span className="relative z-10 text-xs font-bold tracking-widest text-white/95 bg-black/40 backdrop-blur-md px-3.5 py-2 rounded-full uppercase border border-white/10">
                    {activeProject.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                  {activeProject.title}
                </h3>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {activeProject.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`text-[9px] font-bold tracking-wider px-2.5 py-1 rounded-full uppercase ${getPillColor(skill.type)}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>

                {/* Detail Description */}
                <div className="mt-6">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                    Sobre el Proyecto
                  </h4>
                  <p className="mt-2 text-sm md:text-base text-gray-300 leading-relaxed font-light whitespace-pre-line">
                    {activeProject.fullDescription}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 pt-6 border-t border-[#2c2f3a] flex flex-wrap justify-between items-center gap-4">
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2 rounded-full p-[2px] bg-gradient-to-r from-pink-500 to-blue-500 transition-all duration-300 hover:shadow-[0_0_15px_#ec4899,0_0_15px_#3b82f6] cursor-pointer"
                  >
                    <span className="block rounded-full px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#0e0f1a] transition-all duration-300 group-hover:bg-transparent">
                      VISITAR PROYECTO
                    </span>
                  </a>

                  <button
                    onClick={() => setActiveProject(null)}
                    className="px-5 py-2.5 rounded-full border border-[#2c2f3a] text-xs sm:text-sm font-bold text-gray-400 hover:text-white hover:border-gray-500 transition-all duration-200 cursor-pointer"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
