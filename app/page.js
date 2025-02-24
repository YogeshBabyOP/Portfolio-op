"use client";
import StarsCanvas from "./components/Main/StarCanvas";
import Navbar from "./components/Main/Navbar";
import About from "./components/Main/About";
import Skills from "./components/Main/Skills";
import Projects from "./components/Main/Projects";
import Contact from "./components/Main/Contact";
import IntroBanner from "./components/Main/IntroBanner";

export default function Home() {
  return (
    <>
      <StarsCanvas />
      <IntroBanner></IntroBanner>
      <Navbar />
      <section id="about" className="min-h-screen">
        <About />
      </section>
      <section id="skills" className="min-h-screen">
        <Skills />
      </section>
      <section id="projects" className="min-h-screen">
        <Projects />
      </section>
      <section id="connect" className="min-h-screen">
        <Contact />
      </section>
    </>
  );
}
