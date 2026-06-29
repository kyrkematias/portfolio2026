import Image from "next/image";
import Hero from "./sections/hero/hero";
import Services from "./sections/services/services";
import Techs from "./sections/techs/techs";
import Certifications from "./sections/certifications/certifications";
import Portfolio from "./sections/portfolio/portfolio";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Techs />
      <Certifications />
      <Portfolio />
    </div>
  );
}
