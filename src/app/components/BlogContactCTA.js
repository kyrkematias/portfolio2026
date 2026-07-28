import Link from "next/link";
import { MessageSquare, ArrowRight } from "lucide-react";

export default function BlogContactCTA({ lang = "es" }) {
  const isEn = lang === "en";
  const contactHref = isEn ? "/en#contact" : "/#contact";

  return (
    <div className="relative mt-12 mb-6 p-[1px] rounded-2xl bg-gradient-to-r from-pink-500/40 via-purple-500/40 to-cyan-400/40 shadow-2xl overflow-hidden group">
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-400/10 opacity-50 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />

      <div className="relative bg-[#0e0f1a]/95 rounded-[15px] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4 text-left">
          <div className="p-3 rounded-xl bg-gradient-to-tr from-pink-500/20 to-purple-500/20 border border-pink-500/30 text-pink-400 shrink-0">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {isEn
                ? "Have a project in mind?"
                : "¿Tenés un proyecto en mente?"}
            </h3>
            <p className="mt-1 text-sm text-gray-300 font-light leading-relaxed">
              {isEn
                ? "I build modern, fast, and SEO-optimized web solutions. Let's talk!"
                : "Desarrollo sitios web modernos, rápidos y optimizados para SEO. Hablemos sobre tu idea."}
            </p>
          </div>
        </div>

        <Link
          href={contactHref}
          className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white text-sm font-bold shadow-lg hover:shadow-pink-500/25 hover:scale-[1.02] transition-all duration-300"
        >
          <span>{isEn ? "Go to Contact Form" : "Ir al formulario de contacto"}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
