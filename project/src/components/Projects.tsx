import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Online Game Budget Predictor",
      description: "A comprehensive Streamlit application that helps game developers estimate budgets for creating online games. Features interactive calculators, cost breakdowns, and industry insights.",
      tools: ["Python", "Streamlit", "Data Analysis"],
      link: "http://localhost:8501",
      image: "https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "3D Adventure Game",
      description: "An immersive 3D adventure game built with Unreal Engine featuring dynamic environments, character progression, and engaging storylines.",
      tools: ["Unreal Engine", "C++", "Blueprint"],
      link: "#",
      image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Indie Game Collection",
      description: "A collection of small indie games showcasing different gameplay mechanics and artistic styles, perfect for demonstrating versatility in game development.",
      tools: ["Unity", "C#", "2D/3D Art"],
      link: "#",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card group">
              <div className="project-card-inner">
                {/* Front Face */}
                <div className="project-card-front">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools.map((tool, toolIndex) => (
                        <span key={toolIndex} className="skill-tag text-xs">
                          {tool}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-400 text-sm">Click to learn more</p>
                  </div>
                </div>

                {/* Back Face */}
                <div className="project-card-back">
                  <div className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                      <p className="text-gray-300 text-sm mb-6">{project.description}</p>
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center space-x-2 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View Project</span>
                      </a>
                      <button className="btn-secondary flex items-center space-x-2 text-sm">
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;