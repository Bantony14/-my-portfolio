import AboutAndSkill from "../components/Home/AboutAndSkill";
import ContactSection from "../components/Home/ContactSection";
import HeroSection from "../components/Home/HeroSection";
import ProjectSection from "../components/Home/ProjectSection";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutAndSkill />
      <ProjectSection />
      <ContactSection />
    </>
  );
}

export default Home;
