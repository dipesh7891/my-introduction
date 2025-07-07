import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Dipesh Lamba
            </h3>
            <p className="text-gray-400 mb-4">
              Game Developer passionate about creating immersive virtual worlds 
              and bringing creative visions to life through code.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/dipesh7891"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/dipesh-lamba-121660372"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:lambadipesh2005@gmail.com"
                className="social-icon"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2">
              <p className="text-gray-400">lambadipesh2005@gmail.com</p>
              <a
                href="https://1drv.ms/b/s!Ahp6JZV9wEVvgqQ5JyLjabqhPKsXvA?e=eWJJCv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors block"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Dipesh Lamba. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;