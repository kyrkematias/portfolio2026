import { FaLaptopCode, FaSearch, FaPenNib } from "react-icons/fa";

export function getServices(lang = "es") {
  if (lang === "en") {
    return [
      {
        icon: <FaLaptopCode />,
        title: "Frontend Web Development",
        description:
          "Modern, fast, and responsive interfaces built with React, Tailwind, and JavaScript, designed for optimal performance.",
      },
      {
        icon: <FaSearch />,
        title: "SEO Optimization",
        description:
          "Technical and content strategies to boost search engine rankings, using tools like Ahrefs, Search Console, and more.",
      },
      {
        icon: <FaPenNib />,
        title: "UX/UI Design",
        description:
          "User-centered end-to-end design focusing on functionality and aesthetics. Figma prototyping and usability validation to increase conversions.",
      },
    ];
  }

  return [
    {
      icon: <FaLaptopCode />,
      title: "Desarrollo Web Frontend",
      description:
        "Interfaces modernas, rápidas y responsivas con tecnologías como React, Tailwind y JavaScript, pensadas para un rendimiento óptimo.",
    },
    {
      icon: <FaSearch />,
      title: "Optimización SEO",
      description:
        "Estrategias técnicas y de contenido para mejorar el posicionamiento en buscadores, usando herramientas como Ahrefs, Search Console y más.",
    },
    {
      icon: <FaPenNib />,
      title: "Diseño UX/UI",
      description:
        "Diseño centrado en el usuario con enfoque funcional y estético. Prototipado en Figma y validación de experiencia para mejorar la conversión.",
    },
  ];
}

const services = getServices("es");
export default services;
