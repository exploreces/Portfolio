import React from 'react';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      level: 'Graduation',
      degree: 'Bachelor of Computer Science',
      institution: 'Siksha O Anusandhan',
      year: '2021 - 2025',
      grade: 'CGPA: 9.6/10',
      location: 'Odisha, Bhubaneswar',
      icon: GraduationCap,
      color: 'from-blue-500 to-purple-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      level: '12th Grade',
      degree: 'Higher Secondary Education',
      institution: 'Guidance English Medium School',
      year: '2020 - 2021',
      grade: '91%',
      location: 'Odisha, Bhubaneswar',
      icon: Award,
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      level: '10th Grade',
      degree: 'Secondary Education',
      institution: 'St. Thomas Convent School',
      year: '2018 - 2020',
      grade: '96.4%',
      location: 'Odisha, Balasore',
      icon: Award,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey that shaped my foundation in computer science and technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`${edu.bgColor} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group relative overflow-hidden`}
            >
              {/* Background decoration */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${edu.color} opacity-10 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700`}></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${edu.color} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <edu.icon className="w-8 h-8 text-white" />
                </div>

                {/* Level badge */}
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${edu.color} text-white text-sm font-semibold rounded-full mb-4`}>
                  {edu.level}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {edu.degree}
                </h3>

                <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  {edu.institution}
                </h4>

                {/* Location */}
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{edu.location}</span>
                </div>

                {/* Year */}
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span className="font-medium">{edu.year}</span>
                </div>

                {/* Grade */}
                <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${edu.color} bg-opacity-10 text-gray-800 dark:text-gray-200 rounded-full text-sm font-semibold`}>
                  <Award className="mr-1 h-4 w-4" />
                  {edu.grade}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
