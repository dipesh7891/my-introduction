import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90, color: "bg-yellow-400" },
        { name: "JavaScript", level: 85, color: "bg-blue-400" },
        { name: "C++", level: 80, color: "bg-purple-400" },
        { name: "C#", level: 75, color: "bg-green-400" }
      ]
    },
    {
      title: "Game Development",
      skills: [
        { name: "Unreal Engine", level: 85, color: "bg-blue-400" },
        { name: "Unity", level: 80, color: "bg-purple-400" },
        { name: "Blender", level: 75, color: "bg-orange-400" },
        { name: "Game Design", level: 90, color: "bg-pink-400" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 85, color: "bg-red-400" },
        { name: "Streamlit", level: 80, color: "bg-green-400" },
        { name: "3D Modeling", level: 70, color: "bg-cyan-400" },
        { name: "UI/UX Design", level: 75, color: "bg-indigo-400" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-6">
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;