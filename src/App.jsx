import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import BeyondCode from "./components/BeyondCode";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#092328] text-[#F2F4F1] min-h-screen">

      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="resume">
        <Resume />
      </section>

      <section id="projects">
        <Projects />
      </section>

      {/* BEYOND CODE */}
      <section id="beyond-code">
        <BeyondCode />
      </section>

      <section id="contact">
        <Contact />
      </section>

    </div>
  );
}

export default App;