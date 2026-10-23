import React from "react";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Training from "./components/Training";
import Education from "./components/Education";
import Contect from "./components/Contect";

function App() {
  return (
    <div
      className="
        min-h-screen
        bg-slate-100
        text-slate-900
        font-sans

        transition-colors
        duration-300

        dark:bg-slate-950
        dark:text-white
      "
    >
      <Header />

      {/* Dark / Light Mode Button */}
      <div className="fixed right-5 top-5 z-50">
        <ThemeToggle/>
      </div>
      <Skills />
      <Projects />
      <Training />
      <Education />
      <Contect />
    </div>
  );
}

export default App;