'use client';

import React, { JSX } from 'react';
import { FaLaptopCode, FaPalette, FaTools, FaRobot, FaUsers } from 'react-icons/fa';

// Define fixed skill categories for TypeScript
type SkillCategory =
  | 'Web Development'
  | 'Design & User Experience'
  | 'Development Tools & Workflow'
  | 'AI & System Integration'
  | 'Deployment & DevOps'
  | 'Professional Skills';

// Skills object
const skills: Record<SkillCategory, string[]> = {
  'Web Development': [
    'HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js',
    'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase',
  ],
  'Development Tools & Workflow': [
    'Git', 'GitHub', 'VS Code', 'Postman', 'Tailwind CSS',
    'Chakra UI', 'REST APIs', 'Custom APIs', 'Framer Motion', 'SEO',
  ],
  'AI & System Integration': ['OpenAI API', 'AI Web Apps', 'GPT-based Features'],
  'Deployment & DevOps': [
    'Vercel', 'Netlify', 'Docker', 'CI/CD Pipelines', 'AWS', 'Azure', 'Heroku',
    'Server Management', 'Performance Optimization', 'Load Balancing',
  ],
  'Design & User Experience': [
    'Figma', 'Framer', 'Product Design',
    'UI/UX Design', 'Wireframing', 'Prototyping',
  ],
  'Professional Skills': [
    'Project Management', 'Communication', 'Leadership', 'Client Collaboration',
  ],
};

// Category icons
const categoryIcons: Record<SkillCategory, JSX.Element> = {
  'Web Development': <FaLaptopCode className="inline mr-2 text-blue-400" />,
  'Development Tools & Workflow': <FaTools className="inline mr-2 text-blue-400" />,
  'AI & System Integration': <FaRobot className="inline mr-2 text-blue-400" />,
  'Deployment & DevOps': <FaTools className="inline mr-2 text-blue-400" />,
  'Design & User Experience': <FaPalette className="inline mr-2 text-blue-400" />,
  'Professional Skills': <FaUsers className="inline mr-2 text-blue-400" />,
};


export default function SkillsSection() {
  return (
    <section className="sm:w-[900px] w-full  bg-black text-white py-16 px-6 md:px-12 z-20">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-white">
        Skills & Tools
      </h2>

      <div className="grid md:grid-cols-1 gap-10">
        {Object.entries(skills).map(([category, items]) => {
          const key = category as SkillCategory; // Type assertion for TS
          return (
            <div
              key={key}
              className="bg-white/4 p-6 w-[90%] rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                {categoryIcons[key]} {key}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <li
                    key={i}
                    className="bg-gray-800 text-white text-sm px-4 py-1 rounded-full shadow-sm hover:bg-blue-400 hover:text-black transition-all duration-300 cursor-pointer"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
