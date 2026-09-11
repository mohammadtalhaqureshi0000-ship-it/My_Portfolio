import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Training from './components/Training';
import Education from './components/Education';
import Contect from './components/Contect';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Training />
      <Education />
      <Contect />
    </div>
  );
}

export default App;