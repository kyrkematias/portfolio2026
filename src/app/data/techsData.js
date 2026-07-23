import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaPython,
  FaGithub,
  FaDocker,
  FaFigma,
  FaSearch,
  FaBullhorn,
  FaAd,
  FaLink,
  FaBrain,
  FaPencilRuler,
  FaSpider,
} from "react-icons/fa";
import {
  SiFirebase,
  SiGraphql,
  SiHasura,
  SiMysql,
  SiGoogle,
  SiGoogleanalytics,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

export function getCategories(lang = "es") {
  if (lang === "en") {
    return [
      { id: "all", name: "ALL" },
      { id: "frontend", name: "WEB DEVELOPMENT" },
      { id: "seo", name: "SEO & MARKETING" },
      { id: "tools", name: "DESIGN & TOOLS" },
    ];
  }

  return [
    { id: "all", name: "TODAS" },
    { id: "frontend", name: "DESARROLLO WEB" },
    { id: "seo", name: "SEO & MARKETING" },
    { id: "tools", name: "DISEÑO & HERRAMIENTAS" },
  ];
}

export function getTechs(lang = "es") {
  if (lang === "en") {
    return [
      // Web Development
      {
        name: "ReactJS",
        category: "frontend",
        icon: <FaReact />,
        description:
          "Dynamic web app development and AI integrations for optimized data workflows.",
      },
      {
        name: "JavaScript",
        category: "frontend",
        icon: <FaJs />,
        description:
          "Client-side interactive business logic and advanced DOM manipulation with ES6+.",
      },
      {
        name: "HTML5",
        category: "frontend",
        icon: <FaHtml5 />,
        description:
          "Accessible semantic structure for users and optimized for search engine indexing.",
      },
      {
        name: "CSS3",
        category: "frontend",
        icon: <FaCss3Alt />,
        description:
          "Modern responsive styling (Flexbox/Grid), fluid animations, and interactive layouts.",
      },
      {
        name: "Python",
        category: "frontend",
        icon: <FaPython />,
        description:
          "Scripting and web scraping application development for data extraction and processing.",
      },
      {
        name: "GraphQL",
        category: "frontend",
        icon: <SiGraphql />,
        description:
          "Optimized and structured API queries, reducing data overhead.",
      },
      {
        name: "Hasura",
        category: "frontend",
        icon: <SiHasura />,
        description:
          "Instant real-time secure GraphQL API generation connected to databases.",
      },
      {
        name: "Firebase",
        category: "frontend",
        icon: <SiFirebase />,
        description:
          "Implementation of secure authentication and real-time NoSQL database storage.",
      },
      {
        name: "MySQL",
        category: "frontend",
        icon: <SiMysql />,
        description:
          "Relational database design, query optimization, and efficient data management.",
      },
      {
        name: "Bootstrap",
        category: "frontend",
        icon: <FaBootstrap />,
        description:
          "CSS framework for rapid prototyping of responsive and adaptable interfaces.",
      },

      // SEO & Marketing
      {
        name: "Technical SEO",
        category: "seo",
        icon: <FaSearch />,
        description:
          "Crawl audits, critical indexation issue resolution, and page speed optimization.",
      },
      {
        name: "Google Search Console",
        category: "seo",
        icon: <SiGoogle />,
        description:
          "Organic performance monitoring, URL inspection, and index coverage control.",
      },
      {
        name: "Google Analytics 4",
        category: "seo",
        icon: <SiGoogleanalytics />,
        description:
          "Detailed user behavior tracking, custom event setup, and conversion funnels.",
      },
      {
        name: "Ahrefs",
        category: "seo",
        icon: <FaLink />,
        description:
          "Competitive backlink research, content gap analysis, and keyword tracking.",
      },
      {
        name: "Screaming Frog",
        category: "seo",
        icon: <FaSpider />,
        description:
          "Technical crawling and on-page auditing to catch redirects, broken links, and metadata.",
      },
      {
        name: "Google Ads & SEM",
        category: "seo",
        icon: <FaAd />,
        description:
          "Creation and optimization of paid search campaigns focused on conversion rate improvement.",
      },
      {
        name: "Digital Marketing",
        category: "seo",
        icon: <FaBullhorn />,
        description:
          "Attraction and inbound marketing strategies geared toward brand positioning.",
      },

      // Design & Tools
      {
        name: "UX & Product Design",
        category: "tools",
        icon: <FaPencilRuler />,
        description:
          "Conception and design of user experiences centered on usability and business goals.",
      },
      {
        name: "Figma",
        category: "tools",
        icon: <FaFigma />,
        description:
          "Wireframe design, interactive prototypes, and design systems for premium UI.",
      },
      {
        name: "GitHub",
        category: "tools",
        icon: <FaGithub />,
        description:
          "Distributed repository management, Git version control, and CI workflows.",
      },
      {
        name: "Prompt Engineering",
        category: "tools",
        icon: <FaBrain />,
        description:
          "Strategic and structured usage of Large Language Models (LLMs) to accelerate workflows.",
      },
      {
        name: "VS Code",
        category: "tools",
        icon: <DiVisualstudio />,
        description:
          "Primary code editor optimized with development extensions and linters.",
      },
    ];
  }

  return [
    // Desarrollo Web (frontend)
    {
      name: "ReactJS",
      category: "frontend",
      icon: <FaReact />,
      description:
        "Desarrollo de aplicaciones web dinámicas e integraciones de IA para flujos de datos optimizados.",
    },
    {
      name: "JavaScript",
      category: "frontend",
      icon: <FaJs />,
      description:
        "Lógica de negocio interactiva en cliente y manipulación avanzada del DOM con ES6+.",
    },
    {
      name: "HTML5",
      category: "frontend",
      icon: <FaHtml5 />,
      description:
        "Estructuración semántica accesible para el usuario y optimizada para indexación SEO.",
    },
    {
      name: "CSS3",
      category: "frontend",
      icon: <FaCss3Alt />,
      description:
        "Estilado responsivo moderno (Flexbox/Grid), animaciones fluidas y layouts interactivos.",
    },
    {
      name: "Python",
      category: "frontend",
      icon: <FaPython />,
      description:
        "Desarrollo de scripts y aplicaciones de scrapping para extracción y procesamiento de datos.",
    },
    {
      name: "GraphQL",
      category: "frontend",
      icon: <SiGraphql />,
      description:
        "Consultas de APIs optimizadas y estructuradas reduciendo la sobrecarga de datos.",
    },
    {
      name: "Hasura",
      category: "frontend",
      icon: <SiHasura />,
      description:
        "Generación instantánea de APIs GraphQL seguras en tiempo real conectadas a bases de datos.",
    },
    {
      name: "Firebase",
      category: "frontend",
      icon: <SiFirebase />,
      description:
        "Implementación de autenticación segura y almacenamiento NoSQL en tiempo real.",
    },
    {
      name: "MySQL",
      category: "frontend",
      icon: <SiMysql />,
      description:
        "Consultas de APIs optimizadas y estructuradas reduciendo la sobrecarga de datos.",
    },
    {
      name: "Bootstrap",
      category: "frontend",
      icon: <FaBootstrap />,
      description:
        "Framework CSS para prototipado rápido de interfaces responsivas y adaptables.",
    },

    // SEO & Marketing
    {
      name: "SEO Técnico",
      category: "seo",
      icon: <FaSearch />,
      description:
        "Auditorías de rastreo, resolución de problemas críticos de indexación y optimización de velocidad de carga.",
    },
    {
      name: "Google Search Console",
      category: "seo",
      icon: <SiGoogle />,
      description:
        "Monitoreo del rendimiento orgánico, inspección de URLs y control de cobertura de indexación.",
    },
    {
      name: "Google Analytics 4",
      category: "seo",
      icon: <SiGoogleanalytics />,
      description:
        "Medición detallada de comportamiento del usuario, eventos personalizados y funnel de conversión.",
    },
    {
      name: "Ahrefs",
      category: "seo",
      icon: <FaLink />,
      description:
        "Investigación competitiva de backlinks, análisis de brecha de contenido y keywords.",
    },
    {
      name: "Screaming Frog",
      category: "seo",
      icon: <FaSpider />,
      description:
        "Rastreo técnico y auditoría on-page para identificación de redirecciones, enlaces rotos y metadatos.",
    },
    {
      name: "Google Ads & SEM",
      category: "seo",
      icon: <FaAd />,
      description:
        "Creación y optimización de campañas de búsqueda pagas con foco en la mejora de la tasa de conversión.",
    },
    {
      name: "Marketing Digital",
      category: "seo",
      icon: <FaBullhorn />,
      description:
        "Estrategias de atracción e inbound marketing orientadas al posicionamiento de marca.",
    },

    // Diseño & Herramientas
    {
      name: "UX & Product Design",
      category: "tools",
      icon: <FaPencilRuler />,
      description:
        "Concepción y diseño de experiencias centradas en la usabilidad y los objetivos del usuario.",
    },
    {
      name: "Figma",
      category: "tools",
      icon: <FaFigma />,
      description:
        "Diseño de wireframes, prototipos interactivos y sistemas de diseño para UI premium.",
    },
    {
      name: "GitHub",
      category: "tools",
      icon: <FaGithub />,
      description:
        "Gestión de repositorios distribuidos, control de versiones Git y flujos de integración continua.",
    },
    {
      name: "Prompt Engineering",
      category: "tools",
      icon: <FaBrain />,
      description:
        "Uso estratégico y estructurado de Modelos de Lenguaje (LLMs) para acelerar flujos de trabajo.",
    },
    {
      name: "VS Code",
      category: "tools",
      icon: <DiVisualstudio />,
      description:
        "Editor de código principal optimizado con extensiones de desarrollo y linters.",
    },
  ];
}

export const categories = getCategories("es");
export const techs = getTechs("es");
