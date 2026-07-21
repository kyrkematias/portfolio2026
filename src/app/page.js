import Image from "next/image";
import Hero from "./sections/hero/hero";
import Services from "./sections/services/services";
import Techs from "./sections/techs/techs";
import Certifications from "./sections/certifications/certifications";
import Portfolio from "./sections/portfolio/portfolio";
import Contact from "./sections/contact/contact";
import ScrollSection from "./components/scrollSection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <ScrollSection>
        <Hero />
      </ScrollSection>
      <ScrollSection>
        <Services />
      </ScrollSection>
      <ScrollSection>
        <Techs />
      </ScrollSection>
      <ScrollSection>
        <Certifications />
      </ScrollSection>
      <ScrollSection>
        <Portfolio />
      </ScrollSection>
      <ScrollSection>
        <Contact />
      </ScrollSection>
    </div>
  );
}
