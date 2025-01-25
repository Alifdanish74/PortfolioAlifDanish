import Image from "next/image";
import HeroSection from "./components/pages/hero-section/HeroSection";
import AboutSection from "./components/pages/about/About";
import Education from "./components/pages/education/Education";
import Experience from "./components/pages/experience/Experience";
import Skills from "./components/pages/skill/Skills";
import Projects from "./components/pages/project/Project";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <Experience/>
      <Skills/>
      <Education/>
      <Projects/>
    </div>
  );
}
