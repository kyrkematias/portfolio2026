export const dictionary = {
  es: {
    nav: {
      services: "Servicios",
      technologies: "Tecnologías",
      certifications: "Certificaciones",
      portfolio: "Portafolio",
      contact: "Contacto",
      subtitle: "POSICIONAMIENTO WEB",
    },
    hero: {
      badge: "Desarrollador Frontend & Especialista SEO",
      titleStart: "DESARROLLO WEB & ",
      titleHighlight: "OPTIMIZACIÓN SEO",
      description:
        "Soy Martín. Creo interfaces modernas, ultrarrápidos y optimizadas para motores de búsqueda, diseñadas para conectar con tu audiencia y potenciar tu negocio digital.",
      ctaPrimary: "CONTACTAR",
      ctaSecondary: "VER MI TRABAJO",
      highlight1Title: "Frontend",
      highlight1Sub: "Next.js, React & Tailwind",
      highlight2Title: "SEO Técnico",
      highlight2Sub: "Posicionamiento & Speed",
      highlight3Title: "Rendimiento",
      highlight3Sub: "Sitios 100% Optimizados",
      scrollDown: "Descubrir",
    },
    servicesSection: {
      tag: "SERVICIOS",
      title: "Soluciones digitales para potenciar tu negocio",
    },
    techsSection: {
      tag: "TECNOLOGÍAS",
      title: "Stack técnico y herramientas profesionales",
    },
    certificationsSection: {
      tag: "CERTIFICACIONES",
      title: "Validación de conocimientos y habilidades técnicas",
    },
    portfolioSection: {
      tag: "PORTAFOLIO",
      title: "Proyectos destacados y casos de éxito",
      filters: {
        all: "TODOS",
        web: "DESARROLLO WEB",
        seo: "SEO",
        sem: "SEM",
      },
      modal: {
        close: "Cerrar",
        viewSite: "Visitar Sitio Web",
        technologies: "Tecnologías y herramientas:",
      },
    },
    contactSection: {
      tag: "CONTACTO",
      title: "¿Tenés un proyecto en mente? Hablemos.",
      subtitle:
        "Escribime y analicemos cómo potenciar tu sitio web y posicionamiento digital.",
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre o empresa",
      emailLabel: "Email",
      emailPlaceholder: "tu@email.com",
      messageLabel: "Mensaje",
      messagePlaceholder: "¿En qué puedo ayudarte?",
      sendBtn: "Enviar mensaje",
      sending: "Enviando...",
      successMsg: "¡Mensaje enviado con éxito! Te responderé a la brevedad.",
      errorMsg: "Ocurrió un error al enviar el mensaje. Por favor reintenta.",
    },
    footer: {
      tagline: "Desarrollo Web & Posicionamiento SEO",
      rights: "Todos los derechos reservados.",
    },
    metadata: {
      title: "Desarrollo Web & Optimización SEO | Martín Matías",
      description:
        "Especialista en desarrollo web & optimización SEO. Creo sitios web modernos, ultrarrápidos y enfocados en posicionar en Google para potenciar tu negocio.",
    },
  },
  en: {
    nav: {
      services: "Services",
      technologies: "Technologies",
      certifications: "Certifications",
      portfolio: "Portfolio",
      contact: "Contact",
      subtitle: "WEB POSITIONING",
    },
    hero: {
      badge: "Frontend Developer & SEO Specialist",
      titleStart: "WEB DEVELOPMENT & ",
      titleHighlight: "SEO OPTIMIZATION",
      description:
        "I'm Martín. I build modern, lightning-fast, and search-engine-optimized web interfaces designed to engage your audience and scale your digital business.",
      ctaPrimary: "GET IN TOUCH",
      ctaSecondary: "VIEW MY WORK",
      highlight1Title: "Frontend",
      highlight1Sub: "Next.js, React & Tailwind",
      highlight2Title: "Technical SEO",
      highlight2Sub: "Rankings & Speed",
      highlight3Title: "Performance",
      highlight3Sub: "100% Optimized Sites",
      scrollDown: "Discover",
    },
    servicesSection: {
      tag: "SERVICES",
      title: "Digital solutions to empower your business",
    },
    techsSection: {
      tag: "TECHNOLOGIES",
      title: "Technical stack & professional toolset",
    },
    certificationsSection: {
      tag: "CERTIFICATIONS",
      title: "Technical skills & knowledge validation",
    },
    portfolioSection: {
      tag: "PORTFOLIO",
      title: "Featured projects & case studies",
      filters: {
        all: "ALL",
        web: "WEB DEV",
        seo: "SEO",
        sem: "SEM",
      },
      modal: {
        close: "Close",
        viewSite: "Visit Website",
        technologies: "Technologies & tools:",
      },
    },
    contactSection: {
      tag: "CONTACT",
      title: "Have a project in mind? Let's talk.",
      subtitle:
        "Send me a message and let's analyze how to boost your website and digital positioning.",
      nameLabel: "Name",
      namePlaceholder: "Your name or company",
      emailLabel: "Email",
      emailPlaceholder: "you@email.com",
      messageLabel: "Message",
      messagePlaceholder: "How can I help you?",
      sendBtn: "Send Message",
      sending: "Sending...",
      successMsg: "Message sent successfully! I'll get back to you shortly.",
      errorMsg: "An error occurred while sending your message. Please try again.",
    },
    footer: {
      tagline: "Web Development & SEO Positioning",
      rights: "All rights reserved.",
    },
    metadata: {
      title: "Web Development & SEO Optimization | Martín Matías",
      description:
        "Web development & SEO optimization specialist. I build modern, ultra-fast websites designed to rank high on Google and scale your business.",
    },
  },
};

export function getDictionary(lang = "es") {
  return dictionary[lang] || dictionary.es;
}
