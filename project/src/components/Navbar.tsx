import React, { useState, useEffect } from 'react';
import { Home, User, Gamepad2, Wrench, FileText, MessageCircle, Phone, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/80 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-400">
              DL<span className="animate-pulse">|</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="nav-link">
              <Home className="w-4 h-4 mr-2" />
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link">
              <User className="w-4 h-4 mr-2" />
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">
              <Gamepad2 className="w-4 h-4 mr-2" />
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="nav-link">
              <Wrench className="w-4 h-4 mr-2" />
              Skills
            </button>
            <button onClick={() => scrollToSection('resume')} className="nav-link">
              <FileText className="w-4 h-4 mr-2" />
              Resume
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="nav-link">
              <MessageCircle className="w-4 h-4 mr-2" />
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              <Phone className="w-4 h-4 mr-2" />
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a
              href="https://1drv.ms/b/s!Ahp6JZV9wEVvgqQ5JyLjabqhPKsXvA?e=eWJJCv"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;