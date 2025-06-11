import React, { useState } from 'react';
import { ExternalLink, Github, Code, Database, Server, Layers, Star } from 'lucide-react';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Library Management System - Microservices Architecture',
          description: 'A scalable and modular Library Management System built which includes independent services for managing books, users, and library transactions, supported by service discovery and an API gateway.',
          image: 'https://images.pexels.com/photos/6077089/pexels-photo-6077089.jpeg?auto=compress&cs=tinysrgb&w=600',
          technologies: [
            'Java 17',
            'Spring Boot',
            'Eureka Server',
            'Spring Cloud Gateway',
            'Resilience4j',
            'MySQL',
            'Microservices'
          ],
          liveUrl: '#', // replace with actual if hosted
          githubUrl: '#', // replace with GitHub repo URL
          featured: true,
          status: 'Completed',
          category: 'Backend'
        },
    {
          title: 'Mind Ease',
          description: 'Full-stack mental health app offering anxiety and depression assessments based on GAD-7 and PHQ-9 assessments, AI-driven customized strategy recommendations, secure volunteer communication, and geo-based facility discovery using Google Maps integration.',
          image: 'https://images.pexels.com/photos/2938278/pexels-photo-2938278.jpeg?auto=compress&cs=tinysrgb&w=600',
          technologies: ['React', 'JavaScript', 'Spring Boot', 'MongoDB', 'AI Recommendation Engine', 'Google Maps API'],
          liveUrl: '#',
          githubUrl: '#',
          featured: false,
          status: 'Active'
        },
    {
      title: 'Career Explora App',
      description: 'An AI-powered career exploration platform that guides users through role-based self-assessments, AI-generated quizzes, personalized learning tasks, and mock interviews. Tracks progress with a dynamic dashboard to support upskilling and job preparation.',
      image: 'https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: [
        'Spring Boot',
        'Spring AI',
        'MongoDB',
        'CompletableFuture',
        'React',
        'JavaScript'
      ],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      status: 'Completed'
    },
    {
      title: 'Restaurant Management App',
      description: 'A full-stack restaurant platform built with Spring Boot and DynamoDB, enabling dish browsing, table booking, order placement, and waiter-assisted operations. Deployed via Docker and Kubernetes.',
      image: 'https://images.pexels.com/photos/30902628/pexels-photo-30902628/free-photo-of-cozy-provencal-style-interior-dining-room.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: [
        'Java 17',
        'Spring Boot',
        'Spring Security',
        'DynamoDB',
        'Swagger',
        'Docker',
        'Kubernetes'
      ],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      status: 'Production'
    },
    {
      title: 'Payroll Management App',
      description: 'Backend payroll system built with Spring Boot and MySQL. Implements role-based salary computation, tax adjustment logic, and adheres to SOLID principles and design patterns for scalable employee management.',
      image: 'https://images.pexels.com/photos/4386324/pexels-photo-4386324.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'REST API', 'SOLID Principles'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      status: 'Completed'
    },
    {
      title: 'Weather Detection (ML)',
      description: 'Analyzed and compared multiple ML models (SVM, Random Forest, LSTM) for weather prediction using Kaggle datasets. Applied SMOTE for data balancing and improved classification of minority weather classes.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'NumPy', 'Scikit-learn', 'SMOTE', 'LSTM', 'SVM', 'Random Forest'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      status: 'Completed'
    }
  ];

  const getTechnologyIcon = (tech: string) => {
    if (tech.includes('Spring') || tech.includes('Java')) return Code;
    if (tech.includes('MySQL') || tech.includes('JPA')) return Database;
    if (tech.includes('Microservices') || tech.includes('API')) return Server;
    return Layers;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production': return 'bg-green-500 text-white';
      case 'Active': return 'bg-blue-500 text-white';
      case 'Completed': return 'bg-purple-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Backend development and microservices architecture projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image */}
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {project.featured && (
                    <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-bold rounded flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </span>
                  )}
                  <span className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => {
                      const IconComponent = getTechnologyIcon(tech);
                      return (
                        <span
                          key={tech}
                          className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                        >
                          <IconComponent className="mr-1 h-3 w-3" />
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 font-medium rounded-lg transition-colors"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
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