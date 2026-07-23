"use client";
import ServiceCard from "./serviceCard";
import { getDictionary } from "../../data/dictionary";

export default function Services({ lang = "es" }) {
  const dict = getDictionary(lang);

  return (
    <section className="bg-[#0e0f1a] px-6 md:px-20 py-6" id="services">
      <h2 className="text-4xl md:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 w-fit uppercase">
        {dict.servicesSection.tag}
      </h2>

      <ServiceCard lang={lang} />
    </section>
  );
}
