import "./App.css";
import Contact from "./sections/Contact/Contact";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <>
      <nav className="nav">
        <a href="#hero">Martin Ortiz</a>
        <div className="navLinks">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
