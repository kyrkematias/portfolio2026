"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { FaGithub, FaBehance, FaLinkedin } from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher";
import { getDictionary } from "../data/dictionary";

export default function Navbar({ lang: propLang }) {
  const pathname = usePathname();
  const isEnPath = pathname ? pathname.startsWith("/en") : false;
  const currentLang = propLang || (isEnPath ? "en" : "es");
  const dict = getDictionary(currentLang);

  const [isOpen, setIsOpen] = useState(false);

  const baseHash = isEnPath ? "/en#" : "#";

  const navItems = [
    { name: dict.nav.services, url: `${baseHash}services` },
    { name: dict.nav.technologies, url: `${baseHash}technologies` },
    { name: dict.nav.certifications, url: `${baseHash}certifications` },
    { name: dict.nav.portfolio, url: `${baseHash}portfolio` },
    { name: dict.nav.contact, url: `${baseHash}contact` },
  ];

  const logoHref = currentLang === "en" ? "/en" : "/";

  return (
    <header className="bg-[#0e0f1a]/95 backdrop-blur-md text-white w-full fixed top-0 z-50 shadow-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-3 flex justify-between items-center">
        {/* Pure Code Logo */}
        <a
          href={logoHref}
          className="flex items-center gap-2.5 sm:gap-3 group select-none transition-transform duration-300 hover:scale-[1.02]"
        >
          {/* Glowing Monogram Emblem */}
          <div className="relative p-[1.5px] rounded-lg bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-400 shadow-[0_0_12px_rgba(236,72,153,0.35)] group-hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] transition-all duration-300">
            <div className="bg-[#0e0f1a] rounded-[6.5px] px-2.5 py-1 flex items-center justify-center">
              <span className="font-extrabold text-xs sm:text-sm tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400">
                MM
              </span>
            </div>
          </div>

          {/* Separator & Typography */}
          <div className="flex items-center gap-2">
            <span className="text-pink-500/80 font-light text-xs sm:text-sm">
              —
            </span>
            <span className="text-xs sm:text-sm font-bold tracking-widest text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-cyan-400 transition-all duration-300">
              {dict.nav.subtitle}
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.url}
              className="text-xs lg:text-sm font-bold text-white transition-all duration-300
                md:hover:text-transparent md:hover:bg-clip-text
                md:hover:bg-gradient-to-r md:hover:from-pink-500 md:hover:to-purple-500"
            >
              {item.name.toUpperCase()}
            </a>
          ))}

          {/* Language Switcher */}
          <LanguageSwitcher currentLang={currentLang} />

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/kyrkematias"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="GitHub"
            >
              <div className="p-[2px] rounded-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:scale-110">
                <div className="bg-black rounded-full p-2 text-white text-lg flex items-center justify-center">
                  <FaGithub />
                </div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/martinrodrigomatias/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="LinkedIn"
            >
              <div className="p-[2px] rounded-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:scale-110">
                <div className="bg-black rounded-full p-2 text-white text-lg flex items-center justify-center">
                  <FaLinkedin />
                </div>
              </div>
            </a>
            <a
              href="https://www.behance.net/martinmatias2"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Behance"
            >
              <div className="p-[2px] rounded-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:scale-110">
                <div className="bg-black rounded-full p-2 text-white text-lg flex items-center justify-center">
                  <FaBehance />
                </div>
              </div>
            </a>
          </div>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher currentLang={currentLang} />
          <button
            className="z-50 p-1 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0e0f1a] py-6 shadow-md z-40 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 space-y-4 text-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.url}
                className="block text-sm font-bold text-gray-200 hover:text-pink-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name.toUpperCase()}
              </a>
            ))}
            <div className="flex justify-center gap-6 pt-4">
              <a
                href="https://github.com/kyrkematias"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl text-gray-300 hover:text-pink-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/martinrodrigomatias/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl text-gray-300 hover:text-pink-400" />
              </a>
              <a
                href="https://www.behance.net/martinmatias2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Behance"
              >
                <FaBehance className="text-xl text-gray-300 hover:text-pink-400" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
