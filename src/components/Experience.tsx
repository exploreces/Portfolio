import React from 'react';
import { Calendar, MapPin, Building2, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'EPAM Systems',
      role: 'Backend Developer Intern',
      duration: 'January 2025 - June 2025',
      location: 'Hyderabad ,Telangana',
      logo: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600',
      responsibilities: [
        'Developed RESTful backend services for a restaurant management system using Spring Boot',
        'Applied SOLID principles and appropriate design patterns in application architecture',
        'Containerized applications using Docker and deployed using Kubernetes on cloud environments',
        'Integrated Spring Security for robust authentication and authorization',
        'Participated in agile development ceremonies and presented sprint demos to the product owner',
        'Engaged in code reviews and technical discussions to ensure code quality and scalability',
        'Attended internal tech seminars on cloud-native architecture and microservices'
      ],
      skills: ['Java', 'Spring Boot','Spring Security', 'AWS Lambda', 'AWS DynamoDB', 'Kubernetes', 'Jira', 'Docker', 'Agile'],
      color: 'from-blue-600 to-indigo-600'
    },
    {
      company: 'SOA University',
      role: 'DevOps Trainee',
      duration: 'June 2023 - July 2023',
      location: 'Bhubaneswar, Odisha',
      logo: 'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=600',
      responsibilities: [
        'Gained practical experience with core DevOps tools and automation pipelines',
        'Gained knowledge on AWS services',
        'Configured Jenkins for continuous integration and deployment workflows',
        'Worked with shell scripting and Linux fundamentals for environment setup',
        'Built CI/CD pipelines from development to deployment stages'
      ],
      skills: ['AWS', 'Jenkins', 'CI/CD Pipelines', 'Bash', 'Linux'],
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I've had the opportunity to work across backend development and DevOps practices,
            gaining hands-on experience in building scalable applications and automating deployments.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Logo & Header */}
                  <div className="flex items-start gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-[200px]">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-700">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="lg:mt-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.company}
                      </h3>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-white text-sm font-semibold bg-gradient-to-r ${exp.color}`}>
                        <Building2 className="mr-1 h-4 w-4" />
                        {exp.role}
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2 sm:mb-0">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span className="font-medium">{exp.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, i) => (
                          <li key={i} className="flex items-start text-gray-600 dark:text-gray-400">
                            <ChevronRight className="mr-2 h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
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

export default Experience;
