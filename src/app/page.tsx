
import Banner from "components/Banner";
import Education from "components/Education/Education";
import NavbarComp from "components/NavbarComp";
import Skills from "components/Skills/Skills";

export default function Home() {
  return (
    <div className="p-5 fonts-sans">
      <NavbarComp />
      <Banner />
      <Education />
      <Skills />
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
