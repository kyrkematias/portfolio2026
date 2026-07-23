import Hero from "./sections/hero/hero";
import Services from "./sections/services/services";
import Techs from "./sections/techs/techs";
import Certifications from "./sections/certifications/certifications";
import Portfolio from "./sections/portfolio/portfolio";
import Contact from "./sections/contact/contact";
import ScrollSection from "./components/scrollSection";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="overflow-hidden bg-[#0e0f1a] text-white">
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
        <Contact lang="es" />
      </ScrollSection>
      <Footer lang="es" />
    </div>
  );
}
