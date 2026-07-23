import Hero from "../sections/hero/hero";
import Services from "../sections/services/services";
import Techs from "../sections/techs/techs";
import Certifications from "../sections/certifications/certifications";
import Portfolio from "../sections/portfolio/portfolio";
import Contact from "../sections/contact/contact";
import ScrollSection from "../components/scrollSection";
import Footer from "../components/footer";

export const metadata = {
  title: "Web Development & SEO Optimization | Martín Matías",
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
    siteName: "Martín Matías Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function HomeEn() {
  return (
    <div className="overflow-hidden bg-[#0e0f1a] text-white">
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
        <Contact lang="en" />
      </ScrollSection>
      <Footer lang="en" />
    </div>
  );
}
