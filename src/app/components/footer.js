"use client";
import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";
import { ArrowUp } from "lucide-react";
import { getDictionary } from "../data/dictionary";

export default function Footer({ lang = "es" }) {
  const dict = getDictionary(lang);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const baseHash = lang === "en" ? "/en#" : "#";

  const navLinks = [
    { name: dict.nav.services, url: `${baseHash}services` },
    { name: dict.nav.technologies, url: `${baseHash}technologies` },
    { name: dict.nav.certifications, url: `${baseHash}certifications` },
    { name: dict.nav.portfolio, url: `${baseHash}portfolio` },
    { name: dict.nav.contact, url: `${baseHash}contact` },
  ];

  return (
    <footer className="relative bg-[#090a12] text-white border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-tr from-pink-500/10 via-purple-500/5 to-cyan-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <a
              href={lang === "en" ? "/en" : "/"}
              className="inline-flex items-center gap-2.5 sm:gap-3 group select-none transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Monogram Emblem */}
              <div className="relative p-[1.5px] rounded-lg bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-400 shadow-[0_0_12px_rgba(236,72,153,0.35)] group-hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] transition-all duration-300">
                <div className="bg-[#0e0f1a] rounded-[6.5px] px-2.5 py-1 flex items-center justify-center">
                  <span className="font-extrabold text-xs sm:text-sm tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400">
                    MM
                  </span>
                </div>
              </div>

              {/* Separator & Text */}
              <div className="flex items-center gap-2">
                <span className="text-pink-500/80 font-light text-xs sm:text-sm">
                  —
                </span>
                <span className="text-xs sm:text-sm font-bold tracking-widest text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-cyan-400 transition-all duration-300">
                  {dict.nav.subtitle}
                </span>
              </div>
            </a>

            <p className="text-gray-400 text-sm font-light leading-relaxed max-w-sm">
              {dict.footer.tagline}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              {lang === "en" ? "Navigation" : "Navegación"}
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-sm text-gray-300 hover:text-pink-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Networks & Contact CTA */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              {lang === "en" ? "Social Media" : "Redes Sociales"}
            </h3>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/kyrkematias"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-pink-500/50 hover:bg-white/10 transition-all duration-300"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/martinrodrigomatias/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.behance.net/martinmatias2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Behance"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300"
              >
                <FaBehance className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-light">
          <p>
            © {new Date().getFullYear()} Martín Matías. {dict.footer.rights}
          </p>

          <button
            onClick={scrollToTop}
            aria-label={lang === "en" ? "Back to top" : "Volver arriba"}
            className="flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors duration-200 cursor-pointer group"
          >
            <span>{lang === "en" ? "Back to top" : "Volver arriba"}</span>
            <div className="p-1.5 rounded-full bg-white/5 border border-white/10 group-hover:border-pink-500/50 transition-colors duration-200">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
