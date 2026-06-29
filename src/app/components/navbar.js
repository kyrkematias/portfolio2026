"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaBehance } from "react-icons/fa";

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
    <header className="bg-[#0e0f1a] text-white w-full fixed top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <p className="text-sm md:text-lg font-semibold tracking-wide">
          PORTAFOLIO DE MARTÍN
        </p>

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
              href="https://github.com/tuusuario"
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
              href="https://behance.net/tuusuario"
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
                href="https://github.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-xl hover:text-blue-400" />
              </a>
              <a
                href="https://behance.net/tuusuario"
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
