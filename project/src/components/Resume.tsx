import React from 'react';
import { Download, Eye } from 'lucide-react';

const Resume: React.FC = () => {
  const resumeUrl = "https://1drv.ms/b/s!Ahp6JZV9wEVvgqQ5JyLjabqhPKsXvA?e=eWJJCv";

  return (
    <section id="resume" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="glass-card p-8 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Download My Resume
            </h3>
            <p className="text-gray-300 mb-6">
              Get a detailed overview of my experience, skills, and achievements in game development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download PDF</span>
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <Eye className="w-5 h-5" />
                <span>View Online</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Education</h4>
                <div className="space-y-2">
                  <p className="text-gray-300">Bachelor's in Game Development</p>
                  <p className="text-gray-400 text-sm">Specialized in Game Programming</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Experience</h4>
                <div className="space-y-2">
                  <p className="text-gray-300">Game Developer</p>
                  <p className="text-gray-400 text-sm">Creating immersive gaming experiences</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Certifications</h4>
                <div className="space-y-2">
                  <p className="text-gray-300">• Unreal Engine Certified</p>
                  <p className="text-gray-300">• Unity Certified Developer</p>
                  <p className="text-gray-300">• Python Developer</p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Languages</h4>
                <div className="space-y-2">
                  <p className="text-gray-300">• English (Fluent)</p>
                  <p className="text-gray-300">• Hindi (Native)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;