"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaBehance, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Servicios", url: "#services" },
    { name: "Tecnologías", url: "#technologies" },
    { name: "Certificaciones", url: "#certifications" },
    { name: "Portafolio", url: "#portfolio" },
    { name: "Contacto", url: "#contact" },
  ];

  return (
    <header className="bg-[#0e0f1a]/95 backdrop-blur-md text-white w-full fixed top-0 z-50 shadow-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-3 flex justify-between items-center">
        {/* Pure Code Logo */}
        <a
          href="#"
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
              POSICIONAMIENTO WEB
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.url}
              className="text-sm font-bold text-white transition-all duration-300
                md:hover:text-transparent md:hover:bg-clip-text
                md:hover:bg-gradient-to-r md:hover:from-pink-500 md:hover:to-purple-500"
            >
              {item.name.toUpperCase()}
            </a>
          ))}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/kyrkematias"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-[2px] rounded-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:scale-110">
                <div className="bg-black rounded-full p-2 text-white text-xl flex items-center justify-center">
                  <FaGithub />
                </div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/martinrodrigomatias/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-[2px] rounded-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:scale-110">
                <div className="bg-black rounded-full p-2 text-white text-xl flex items-center justify-center">
                  <FaLinkedin />
                </div>
              </div>
            </a>
            <a
              href="https://www.behance.net/martinmatias2"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-[2px] rounded-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:scale-110">
                <div className="bg-black rounded-full p-2 text-white text-xl flex items-center justify-center">
                  <FaBehance />
                </div>
              </div>
            </a>
          </div>
        </nav>

        {/* Hamburger button */}
        <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0e0f1a] py-6 shadow-md z-40">
          <div className="max-w-7xl mx-auto px-6 space-y-4 text-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.url}
                className="block text-sm font-bold hover:text-blue-400"
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
              >
                <FaGithub className="text-xl hover:text-blue-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/martinrodrigomatias/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-xl hover:text-blue-400" />
              </a>
              <a
                href="https://www.behance.net/martinmatias2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaBehance className="text-xl hover:text-blue-400" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
