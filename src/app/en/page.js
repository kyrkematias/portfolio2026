import Hero from "../sections/hero/hero";
import Services from "../sections/services/services";
import Techs from "../sections/techs/techs";
import Certifications from "../sections/certifications/certifications";
import Portfolio from "../sections/portfolio/portfolio";
import BlogSection from "../sections/blog/blogSection";
import Contact from "../sections/contact/contact";
import ScrollSection from "../components/scrollSection";
import Footer from "../components/footer";
import JsonLd from "../components/JsonLd";

export const metadata = {
  title: {
    absolute: "Web Development & SEO Optimization | Martín Matías",
  },
  description:
    "Web development & technical SEO specialist. Building modern, ultra-fast websites designed to rank high on Google and scale digital businesses.",
  alternates: {
    canonical: "/en",
    languages: {
      "es-AR": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "Web Development & SEO Optimization | Martín Matías",
    description:
      "Web development & technical SEO specialist. Building modern, ultra-fast websites designed to rank high on Google and scale digital businesses.",
    url: "https://www.martinmatias.com.ar/en",
    siteName: "Martín Matías",
    locale: "en_US",
    alternateLocale: ["es_AR"],
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Martín Matías - Web Development & SEO Optimization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development & SEO Optimization | Martín Matías",
    description:
      "Web development & technical SEO specialist. Building modern, ultra-fast websites designed to rank high on Google and scale digital businesses.",
    images: ["/og-image.png"],
  },
};

const homeSchemaEn = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Martín Matías - Web Development & SEO",
    "url": "https://www.martinmatias.com.ar/en",
    "inLanguage": ["en-US", "es-AR"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Martín Matías",
    "jobTitle": "Frontend Web Developer & SEO Specialist",
    "url": "https://www.martinmatias.com.ar/en",
    "image": "https://www.martinmatias.com.ar/heroimg.png",
    "knowsAbout": [
      "Web Development",
      "Next.js",
      "React",
      "Technical SEO",
      "UX / UI",
      "Generative Engine Optimization (GEO)",
      "Google Ads",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Martín Matías - Web Development & SEO Optimization",
    "description":
      "Building modern, ultra-fast websites optimized for search engines (SEO) and artificial intelligence engines (GEO).",
    "url": "https://www.martinmatias.com.ar/en",
    "logo": "https://www.martinmatias.com.ar/logo.png",
    "image": "https://www.martinmatias.com.ar/og-image.png",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "25 de Mayo 90",
      "addressLocality": "San Miguel de Tucumán",
      "addressRegion": "Tucumán",
      "postalCode": "T4000",
      "addressCountry": "AR",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -26.8306,
      "longitude": -65.2038,
    },
  },
];

export default function HomeEn() {
  return (
    <div className="overflow-hidden bg-[#0e0f1a] text-white">
      <JsonLd data={homeSchemaEn} />
      <Hero lang="en" />
      <ScrollSection>
        <Services lang="en" />
      </ScrollSection>
      <ScrollSection>
        <Techs lang="en" />
      </ScrollSection>
      <ScrollSection>
        <Certifications lang="en" />
      </ScrollSection>
      <ScrollSection>
        <Portfolio lang="en" />
      </ScrollSection>
      <ScrollSection>
        <BlogSection lang="en" />
      </ScrollSection>
      <ScrollSection>
        <Contact lang="en" />
      </ScrollSection>
      <Footer lang="en" />
    </div>
  );
}
