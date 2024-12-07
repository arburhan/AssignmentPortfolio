
import Banner from "components/Banner";
import Education from "components/Education/Education";
import NavbarComp from "components/NavbarComp";

export default function Home() {
  return (
    <div className="p-5 fonts-sans">
      <NavbarComp />
      <Banner />
      <Education />
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
