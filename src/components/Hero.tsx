import React from 'react';
import { ChevronDown, Mail, Code2 } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-blue-50 to-violet-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 pt-16 relative overflow-hidden">
      {/* Floating animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '1s', animationDuration: '2.5s' }}></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full animate-bounce opacity-50" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
        <div className="absolute top-60 left-1/3 w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s', animationDuration: '2.8s' }}></div>
        <div className="absolute bottom-60 right-1/4 w-4 h-4 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full animate-bounce opacity-55" style={{ animationDelay: '1.5s', animationDuration: '3.2s' }}></div>
        <div className="absolute top-32 right-1/3 w-5 h-5 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full animate-bounce opacity-65" style={{ animationDelay: '2.5s', animationDuration: '2.7s' }}></div>
        
        {/* Floating code symbols */}
        <div className="absolute top-24 right-16 text-2xl text-blue-300 dark:text-blue-500 animate-pulse opacity-40" style={{ animationDelay: '1s' }}>{'{ }'}</div>
        <div className="absolute bottom-32 left-16 text-xl text-purple-300 dark:text-purple-500 animate-pulse opacity-40" style={{ animationDelay: '2s' }}>{'< />'}</div>
        <div className="absolute top-1/2 right-8 text-lg text-teal-300 dark:text-teal-500 animate-pulse opacity-40" style={{ animationDelay: '0.5s' }}>{'@'}</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Picture */}
          <div className="relative flex-shrink-0">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              {/* Multiple animated border rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-400 via-blue-400 to-violet-400 animate-spin-slow opacity-75"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-violet-400 via-teal-400 to-rose-400 animate-spin-slow-reverse opacity-60"></div>
              <div className="absolute inset-1 rounded-full bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 animate-pulse opacity-40"></div>
              
              {/* Profile image container */}
              <div className="absolute inset-4 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute top-8 right-8 w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.2s' }}></div>
              <div className="absolute bottom-8 left-8 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.8s' }}></div>
              <div className="absolute top-1/2 left-4 w-5 h-5 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '1.2s' }}></div>
              <div className="absolute top-1/4 right-4 w-4 h-4 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.6s' }}></div>
              
              {/* Tech icons floating around */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg animate-float">
                <Code2 className="w-5 h-5 text-blue-500" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent animate-gradient">
                  Ayushi Sarkar
                </span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                Software Engineer
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                Passionate about building robust server side applications and solve real time problems with Code ✌️.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
                <div className="ml-2 transform group-hover:translate-x-1 transition-transform">
                  →
                </div>
              </button>
              
              <a
                href="#about"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;