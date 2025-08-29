import React from 'react';
import { Server, Database, Code, Layers, Globe, Cloud, GitBranch, Settings, FileText, Palette } from 'lucide-react';

const About: React.FC = () => {
  const techStack = [
    { name: 'Java', icon: Code, color: 'text-red-600', bg: 'bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30' },
    { name: 'Spring Boot', icon: Layers, color: 'text-green-600', bg: 'bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30' },
    { name: 'MySQL', icon: Database, color: 'text-blue-600', bg: 'bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30' },
    { name: 'Redis', icon: Redis, color: 'text-purple-600', bg: 'bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30' },
    { name: 'Microservices', icon: Server, color: 'text-teal-600', bg: 'bg-gradient-to-br from-teal-100 to-teal-200 dark:from-teal-900/30 dark:to-teal-800/30' },
    { name: 'HTML', icon: Globe, color: 'text-orange-600', bg: 'bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30' },
    { name: 'CSS', icon: Palette, color: 'text-pink-600', bg: 'bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900/30 dark:to-pink-800/30' },
    { name: 'React', icon: Code, color: 'text-cyan-600', bg: 'bg-gradient-to-br from-cyan-100 to-cyan-200 dark:from-cyan-900/30 dark:to-cyan-800/30' },
    { name: 'Jira', icon: Settings, color: 'text-indigo-600', bg: 'bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-900/30 dark:to-indigo-800/30' },
    { name: 'AWS', icon: Cloud, color: 'text-yellow-600', bg: 'bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900/30 dark:to-yellow-800/30' },
    { name: 'Kubernetes', icon: Server, color: 'text-blue-700', bg: 'bg-gradient-to-br from-blue-200 to-blue-300 dark:from-blue-800/30 dark:to-blue-700/30' },
    { name: 'Confluence', icon: FileText, color: 'text-emerald-600', bg: 'bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/30 dark:to-emerald-800/30' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - About Text */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 dark:text-white mb-6">
                About Me
              </h2>
              <div className="w-12 h-0.5 bg-gray-900 dark:bg-white mb-8"></div>
            </div>

            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p className="text-lg leading-relaxed font-light">
                I'm a passionate Software Engineer with expertise in building scalable applications.
                My journey spans from crafting robust backend APIs with Java and Spring Boot and optimizing
                performance with Multi-thread environment.
              </p>

              <p className="text-lg leading-relaxed font-light">
                I thrive on solving complex technical challenges, implementing microservices architecture,
                and optimizing system performance. My experience with cloud platforms like AWS and
                containerization with Kubernetes enables me to deploy scalable solutions.
              </p>
            </div>
          </div>

          {/* Right Side - Tech Stack */}
          <div>
            <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-8">
              Tech Stack
            </h3>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`${tech.bg} p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 group cursor-pointer border border-white/30 dark:border-gray-600/30 animate-pulse hover:animate-none relative overflow-hidden`}
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animationDuration: '2s',
                    animationIterationCount: '1',
                    animationFillMode: 'forwards'
                  }}
                >
                  {/* Animated background shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                  <div className={`${tech.color} mb-3 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 flex justify-center relative z-10`}>
                    <tech.icon size={24} />
                  </div>
                  <h5 className="font-medium text-gray-900 dark:text-white text-sm text-center relative z-10 group-hover:font-semibold transition-all duration-300">
                    {tech.name}
                  </h5>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg group-hover:shadow-2xl"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;