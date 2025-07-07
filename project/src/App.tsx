import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLoadComplete = () => {
    setLoading(false);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      {loading && <Preloader onLoadComplete={handleLoadComplete} />}
      
      <div className={`bg-gray-900 text-white transition-opacity duration-500 ${
        loading ? 'opacity-0' : 'opacity-100'
      }`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;