'use client';

import React from 'react';

const skills = {
  'Web Development': [
    'HTML5',
    'CSS3',
    'JavaScript (ES6+)',
    'TypeScript',
    'React.js',
    'Next.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Firebase',
  ],
  'UI/UX & Design': [
    'Figma',
    'Adobe XD',
    'Framer',
    'Product Design',
    'UI/UX Design',
    'Wireframing',
    'Prototyping',
  ],
  'Tools & Workflow': [
    'Git',
    'GitHub',
    'VS Code',
    'Postman',
    'Tailwind CSS',
    'Chakra UI',
    'REST APIs',
    'Custom APIs',
    'Framer Motion',
    'SEO',
    'Vercel',
    'Netlify',
  ],
  'AI & Integration': ['OpenAI API', 'AI Web Apps', 'GPT-based Features'],
  'Soft Skills': [
    'Project Management',
    'Communication',
    'Leadership',
    'Client Collaboration',
  ],
};

export default function SkillsSection() {
  return (
    <section className="w-full bg-black text-white py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-green-400">
        Skills & Tools
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items], idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold mb-3 text-white">{category}</h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((skill, i) => (
                <li
                  key={i}
                  className="bg-gray-800 text-green-300 text-sm px-4 py-1 rounded-full shadow-sm hover:bg-green-700/20 transition-all"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
