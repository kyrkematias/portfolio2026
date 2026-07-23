import { FaAward, FaLaptopCode, FaBullhorn, FaBrain } from "react-icons/fa";

export function getCertifications(lang = "es") {
  if (lang === "en") {
    return [
      {
        title: "UX/UI & Product Design",
        issuer: "Google - Coursera",
        icon: <FaAward />,
        description:
          "End-to-end UX/UI design certification: user research, wireframing, interaction design, interactive Figma prototypes, and usability testing.",
      },
      {
        title: "Frontend Web Development",
        issuer: "ONE Oracle Next Education",
        icon: <FaLaptopCode />,
        description:
          "Intensive web development program: JavaScript fundamentals, semantic structuring with HTML5, CSS3 styling, and responsive layout best practices.",
      },
      {
        title: "Digital Marketing Fundamentals",
        issuer: "Google Learn",
        icon: <FaBullhorn />,
        description:
          "Validation of core digital marketing skills, search engine optimization strategies (SEO/SEM), web analytics, social media, and online advertising.",
      },
      {
        title: "Prompt Engineering for Developers",
        issuer: "DeepLearning.ai",
        icon: <FaBrain />,
        description:
          "Advanced training for interacting with Large Language Models (LLMs). Structured prompt engineering, task automation, and AI-powered app development.",
      },
    ];
  }

  return [
    {
      title: "UX/UI & Product Design",
      issuer: "Google - Coursera",
      icon: <FaAward />,
      description:
        "Certificación centrada en el diseño UX/UI de principio a fin: investigación de usuarios, wireframes, diseño de interacción, prototipos en Figma y evaluación de usabilidad.",
    },
    {
      title: "Desarrollo Web Frontend",
      issuer: "ONE Oracle Next Education",
      icon: <FaLaptopCode />,
      description:
        "Programa intensivo de desarrollo web: fundamentos de programación en JavaScript, estructuración semántica con HTML5, estilado con CSS3 y mejores prácticas de maquetación responsiva.",
    },
    {
      title: "Fundamentos de Marketing Digital",
      issuer: "Google Learn",
      icon: <FaBullhorn />,
      description:
        "Validación de conocimientos esenciales de marketing digital, estrategias de optimización en motores de búsqueda (SEO/SEM), analítica web, redes sociales y publicidad online.",
    },
    {
      title: "Prompt Engineering for Developers",
      issuer: "DeepLearning.ai",
      icon: <FaBrain />,
      description:
        "Capacitación avanzada para interactuar con Modelos de Lenguaje (LLMs). Desarrollo de prompts estructurados, automatización de tareas y desarrollo de aplicaciones impulsadas por IA.",
    },
  ];
}

const certifications = getCertifications("es");
export default certifications;
