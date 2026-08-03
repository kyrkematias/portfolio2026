import Hero from "./sections/hero/hero";
import Services from "./sections/services/services";
import Techs from "./sections/techs/techs";
import Certifications from "./sections/certifications/certifications";
import Portfolio from "./sections/portfolio/portfolio";
import BlogSection from "./sections/blog/blogSection";
import Contact from "./sections/contact/contact";
import ScrollSection from "./components/scrollSection";
import Footer from "./components/footer";
import JsonLd from "./components/JsonLd";

export const metadata = {
  title: "Desarrollo Web & Optimización SEO | Martín Matías",
  description:
    "Especialista en desarrollo web & optimización SEO. Creo sitios web modernos, ultrarrápidos y enfocados en posicionar en Google para potenciar tu negocio.",
  alternates: {
    canonical: "/",
    languages: {
      "es-AR": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "Desarrollo Web & Optimización SEO | Martín Matías",
    description:
      "Especialista en desarrollo web & optimización SEO. Creo sitios web modernos, ultrarrápidos y enfocados en posicionar en Google para potenciar tu negocio.",
    url: "https://www.martinmatias.com.ar",
    siteName: "Martín Matías",
    locale: "es_AR",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Martín Matías - Desarrollo Web & Optimización SEO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo Web & Optimización SEO | Martín Matías",
    description:
      "Especialista en desarrollo web & optimización SEO. Creo sitios web modernos, ultrarrápidos y enfocados en posicionar en Google para potenciar tu negocio.",
    images: ["/og-image.png"],
  },
};

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Martín Matías - Desarrollo Web & SEO",
    "url": "https://www.martinmatias.com.ar",
    "inLanguage": ["es-AR", "en-US"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Martín Matías",
    "jobTitle": "Desarrollador Web Frontend & Especialista SEO",
    "url": "https://www.martinmatias.com.ar",
    "image": "https://www.martinmatias.com.ar/heroimg.png",
    "knowsAbout": [
      "Desarrollo Web",
      "Next.js",
      "React",
      "SEO Técnico",
      "UX / UI",
      "Generative Engine Optimization (GEO)",
      "Google Ads",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Martín Matías - Desarrollo Web & Optimización SEO",
    "description":
      "Creación de sitios web modernos, ultrarrápidos y optimizados para motores de búsqueda (SEO) e inteligencia artificial (GEO).",
    "url": "https://www.martinmatias.com.ar",
    "logo": "https://www.martinmatias.com.ar/logo.png",
    "image": "https://www.martinmatias.com.ar/og-image.png",
    "priceRange": "$$",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden bg-[#0e0f1a] text-white">
      <JsonLd data={homeSchema} />
      <Hero lang="es" />
      <ScrollSection>
        <Services lang="es" />
      </ScrollSection>
      <ScrollSection>
        <Techs lang="es" />
      </ScrollSection>
      <ScrollSection>
        <Certifications lang="es" />
      </ScrollSection>
      <ScrollSection>
        <Portfolio lang="es" />
      </ScrollSection>
      <ScrollSection>
        <BlogSection lang="es" />
      </ScrollSection>
      <ScrollSection>
        <Contact lang="es" />
      </ScrollSection>
      <Footer lang="es" />
    </div>
  );
}
