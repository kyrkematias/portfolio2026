"use client";
import { motion } from "framer-motion";
import certifications from "../../data/certificationsData";

export default function Certifications() {
  return (
    <section className="bg-[#0e0f1a] px-6 md:px-20 py-16 md:py-24" id="certifications">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 w-fit">
          CERTIFICACIONES
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl text-sm sm:text-base font-light leading-relaxed">
          Validaciones de formación profesional emitidas por instituciones y plataformas líderes en la industria del software, marketing y diseño de producto.
        </p>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative group p-6 rounded-xl border border-[#2c2f3a] bg-[#0e0f1a] overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.15)] flex flex-col justify-between h-full"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                <div className="flex items-start gap-4">
                  {/* Icon Wrapper with Gradient Border on Hover */}
                  <div className="p-[1px] rounded-lg bg-[#2c2f3a] group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-blue-500 transition-all duration-300 flex-shrink-0">
                    <div className="bg-[#171926] p-3 rounded-lg text-2xl text-blue-400 group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                      {cert.icon}
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-xs font-semibold tracking-wider text-pink-500 uppercase">
                      {cert.issuer}
                    </span>
                    <h3 className="text-lg md:text-xl font-semibold text-white tracking-wide mt-1 group-hover:text-blue-400 transition-colors duration-300">
                      {cert.title}
                    </h3>
                  </div>
                </div>
                
                <p className="mt-4 text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
