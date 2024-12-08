
import Banner from "components/Home/Banner/Banner";
import Contact from "components/Home/Contact/Contact";
import Education from "components/Home/Education/Education";
import NavbarComp from "components/Shared/NavbarComp";
import Projects from "components/Home/Projects/Projects";
import Skills from "components/Home/Skills/Skills";
import Footer from "components/Shared/Footer";

export default function Home() {
  return (
    <div className="p-5 fonts-sans">
      <NavbarComp />
      <Banner />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
