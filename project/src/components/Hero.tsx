import React, { useState, useEffect } from 'react';
import { Download, ExternalLink } from 'lucide-react';
import dipeshImg from '../assets/dipesh.png';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Building virtual worlds with code and creativity...';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-icon absolute top-20 left-10 text-blue-400">
          <span className="text-4xl">🐍</span>
        </div>
        <div className="floating-icon absolute top-40 right-20 text-yellow-400" style={{ animationDelay: '2s' }}>
          <span className="text-4xl">JS</span>
        </div>
        <div className="floating-icon absolute bottom-40 left-20 text-purple-400" style={{ animationDelay: '4s' }}>
          <span className="text-4xl">C++</span>
        </div>
        <div className="floating-icon absolute bottom-20 right-10 text-green-400" style={{ animationDelay: '6s' }}>
          <span className="text-4xl">🎮</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl lg:text-7xl font-bold text-white">
              Dipesh Lamba
              <span className="animate-pulse text-blue-400">|</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-blue-400 font-light">
              Game Developer
            </h2>
          </div>
          
          <div className="h-16 flex items-center">
            <p className="text-lg lg:text-xl text-gray-300 font-mono">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button
              onClick={scrollToProjects}
              className="btn-primary flex items-center justify-center space-x-2"
            >
              <ExternalLink className="w-5 h-5" />
              <span>View Projects</span>
            </button>
            <a
              href="https://1drv.ms/b/s!Ahp6JZV9wEVvgqQ5JyLjabqhPKsXvA?e=eWJJCv"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl animate-float">
              <img src={dipeshImg} alt="Dipesh Lamba" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;