import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Passionate game developer with a love for creating immersive virtual worlds. 
              I specialize in building engaging gaming experiences using cutting-edge technologies 
              and innovative design principles.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in game development combines technical expertise with creative vision, 
              allowing me to bring unique ideas to life through code and artistry.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="skill-tag">Game Development</span>
              <span className="skill-tag">Virtual Worlds</span>
              <span className="skill-tag">Interactive Design</span>
              <span className="skill-tag">Creative Coding</span>
            </div>
          </div>

          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Development Tools</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">Unreal Engine</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300">Python</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">JavaScript</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <span className="text-gray-300">Unity</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <span className="text-gray-300">Blender</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <span className="text-gray-300">Git</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;