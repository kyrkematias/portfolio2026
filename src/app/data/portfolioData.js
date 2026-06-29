const portfolioData = [
  {
    title: "Metro Real State - Extracción con IA",
    category: "desarrollo web",
    description: "Aplicación híbrida de escritorio y web con integración de IA para parsing y extracción de datos documentales en California.",
    fullDescription: "Lideré la creación y el despliegue de una aplicación de escritorio desarrollada en Python y una plataforma administrativa web en React. La solución integró modelos de Inteligencia Artificial (IA) para automatizar el rastreo, lectura y extracción de datos críticos desde documentos de planificación estatal del gobierno de California. Esto optimizó los tiempos operativos y redujo el procesamiento manual. Todo el ciclo de vida del proyecto fue coordinado mediante metodologías ágiles en un equipo de desarrollo TI.",
    skills: [
      { name: "ReactJS", type: "desarrollo web" },
      { name: "Python", type: "desarrollo web" },
      { name: "Integración de IA", type: "desarrollo web" },
      { name: "Metodologías Ágiles", type: "desarrollo web" }
    ],
    link: "https://github.com/tuusuario/metro-real-state",
    gradient: "from-blue-600 via-indigo-900 to-pink-600"
  },
  {
    title: "Modificación Web en React - Buscador de Alquileres",
    category: "desarrollo web",
    description: "Modificación y finalización de un sitio web para búsqueda de alojamientos y compañeros de cuarto con GraphQL y Hasura.",
    fullDescription: "Desarrollé la finalización y optimización de una plataforma web destinada a la búsqueda de propiedades y alquileres para estudiantes universitarios. Implementé la autenticación segura mediante Firebase y la integración del API de Google Maps. Desarrollé filtros avanzados y un sistema de recomendaciones de roommates basado en intereses comunes, apoyándome en Hasura y consultas GraphQL. El entorno de desarrollo local fue contenedorizado en Docker para garantizar la portabilidad.",
    skills: [
      { name: "ReactJS", type: "desarrollo web" },
      { name: "GraphQL", type: "desarrollo web" },
      { name: "Hasura", type: "desarrollo web" },
      { name: "Firebase", type: "desarrollo web" },
      { name: "Docker", type: "desarrollo web" }
    ],
    link: "https://github.com/tuusuario/roommate-finder",
    gradient: "from-pink-500 via-purple-900 to-indigo-500"
  },
  {
    title: "Servicio SEO - SEM - Posicionamiento Sector Salud",
    category: "seo",
    description: "Estrategias de posicionamiento orgánico (SEO) y campañas SEM optimizadas en Google Ads para el sector de la salud.",
    fullDescription: "Diseñé e implementé estrategias de posicionamiento orgánico (SEO) y campañas publicitarias pagas (SEM) enfocadas en clínicas y profesionales del sector salud. Solucioné problemas graves de indexación técnica y velocidad de carga web. Además, audité y reestructuré campañas de Google Ads reduciendo significativamente el costo de adquisición (CPA) a través del análisis de palabras clave negativas, segmentaciones hiperlocales y mejora del nivel de calidad (Quality Score).",
    skills: [
      { name: "SEO Técnico", type: "seo" },
      { name: "SEM", type: "sem" },
      { name: "Google Ads", type: "sem" },
      { name: "Optimización de Costos", type: "sem" }
    ],
    link: "https://google.com",
    gradient: "from-emerald-600 via-teal-900 to-cyan-600"
  },
  {
    title: "Auditoría UX / UI + SEO Técnico",
    category: "ux/ui",
    description: "Auditoría de usabilidad (UX) y optimización de contenido y palabras clave para mejorar la retención y conversión.",
    fullDescription: "Realicé auditorías exhaustivas de experiencia de usuario (UX) e interfaz (UI), detectando fricciones críticas en embudos de conversión. Elaboré una propuesta de diseño detallada con wireframes interactivos en Figma. El proyecto incluyó la optimización on-page de contenidos y la estructuración interna de títulos (headings) y enlaces, lo cual disparó la visibilidad orgánica en buscadores y el engagement del usuario.",
    skills: [
      { name: "Diseño UX/UI", type: "ux/ui" },
      { name: "Figma", type: "ux/ui" },
      { name: "Auditoría UX", type: "ux/ui" },
      { name: "SEO On-Page", type: "seo" }
    ],
    link: "https://figma.com",
    gradient: "from-pink-600 via-rose-950 to-orange-500"
  },
  {
    title: "Indexación Técnica Web a Gran Escala",
    category: "seo",
    description: "Auditoría de cobertura técnica de URLs no indexadas y ejecución de peticiones mediante Google Search Console.",
    fullDescription: "Llevé a cabo un análisis exhaustivo y diagnóstico de errores en la indexación de páginas web con gran volumen de URLs no rastreadas. Utilicé herramientas automatizadas de rastreo técnico para mapear códigos de estado (404, redirects) y corregir problemas de etiquetas canónicas. Planifiqué y ejecuté solicitudes masivas de indexación y re-rastreo en Google Search Console, restituyendo la presencia y visibilidad en las SERPs de secciones clave del sitio.",
    skills: [
      { name: "SEO Técnico", type: "seo" },
      { name: "Search Console", type: "seo" },
      { name: "Rastreo Técnico", type: "seo" }
    ],
    link: "https://search.google.com",
    gradient: "from-cyan-500 via-sky-950 to-blue-700"
  },
  {
    title: "Optimización de Tiendas Online & SEO en Marketplaces",
    category: "seo",
    description: "Optimización de fichas de producto, mejora de calidad de imágenes y posicionamiento orgánico en marketplaces.",
    fullDescription: "Gestioné tiendas de comercio electrónico, optimizando la creación y actualización constante de listados de productos. Desarrollé estrategias de SEO aplicadas a buscadores internos de marketplaces, escribiendo descripciones de producto ricas en palabras clave comerciales y mejorando la metadata técnica. Implementé el control y sincronización de inventario, asegurando descripciones precisas y alta calidad de imágenes para maximizar la conversión.",
    skills: [
      { name: "SEO Marketplace", type: "seo" },
      { name: "Optimización SEO", type: "seo" },
      { name: "Gestión de Inventario", type: "desarrollo web" }
    ],
    link: "#",
    gradient: "from-amber-600 via-amber-950 to-pink-600"
  },
  {
    title: "Homologación de Datos & SEO en Directorios corporativos",
    category: "desarrollo web",
    description: "Desarrollo de bases de datos relacionales y homologación de perfiles corporativos en directorios web.",
    fullDescription: "Diseñé y construí bases de datos de empresas en múltiples ciudades (Tucumán, La Plata, Madrid, Barcelona). Creé perfiles en línea totalmente estructurados para su representación en un directorio web masivo. Implementé un sistema de homologación de datos y estandarización de fichas de productos para optimizar la recolección, logrando una indexación SEO impecable en buscadores para cada perfil corporativo creado.",
    skills: [
      { name: "MySQL", type: "desarrollo web" },
      { name: "Bases de Datos", type: "desarrollo web" },
      { name: "SEO Directorios", type: "seo" },
      { name: "Data Entry", type: "desarrollo web" }
    ],
    link: "#",
    gradient: "from-purple-600 via-purple-950 to-indigo-700"
  }
];

export default portfolioData;
