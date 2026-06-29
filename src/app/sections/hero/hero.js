"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import avatar from "../../assets/images/avatar.png"; 

const roles = ["Desarrollador Web", "Especialista SEO", "Diseñador UX"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#0e0f1a] mt-18 md:mt-0 text-white min-h-screen flex items-center justify-between px-6 md:px-20">
      <div className="w-full md:max-w-5xl w-full flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-light text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
            <br />
            <span>{roles[index].toUpperCase()}</span>
          </h1>
          <p className="mt-6 text-gray-300 text-lg max-w-lg">
            Soy Martín —{" "}
            <span className="text-blue-400">{roles[index].toLowerCase()}</span>{" "}
            apasionado por crear experiencias de alto rendimiento, accesibles y
            visualmente atractivas.
          </p>
          <div className="mt-8">
            <a
              href="#projects"
              className="group relative inline-block rounded-sm p-[2px] bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300 hover:shadow-[0_0_10px_#ec4899,0_0_10px_#8b5cf6]"
            >
              <span className="block rounded-sm px-6 py-3 text-sm font-semibold text-white bg-black group-hover:bg-black transition-all duration-300">
                VER MI TRABAJO
              </span>
            </a>
          </div>
        </div>

        <div className="w-96 h-96 relative overflow-hidden mr-0">
          <Image
            src={avatar}
            alt="Martín Avatar"
            fill
            className="object-cover object-center"
            priority
            style={{
              maskImage: "linear-gradient(black 80%, transparent)",
              WebkitMaskImage: "linear-gradient(black 80%, transparent)",
              // filter: "drop-shadow(-1px 1px 10px #ec4899)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
