'use client';

import React from 'react';

const experiences = [
  {
    role: 'Product Designer',
    company: 'MoneyFlock',
    duration: 'June 2024 – June 2025',
    description:
      'Designed and enhanced user-centric fintech interfaces with a focus on usability, consistency, and design systems.',
  },
  {
    role: 'Project Manager',
    company: 'Freelance',
    duration: 'Feb 2025 – June 2025',
    description:
      'Led multiple freelance client projects, managed timelines, and collaborated with developers to deliver scalable web products.',
  },
];

export default function ExperienceSection() {
  return (
    <section className="w-[1200px] bg-black text-white py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-green-400">
        Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="border-l-4 border-green-400 pl-6 py-4 bg-gray-900/60 rounded-lg shadow-sm hover:shadow-green-400/10 transition-shadow duration-300"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              {exp.role}
            </h3>
            <p className="text-sm text-green-300">{exp.company}</p>
            <p className="text-sm text-gray-400 mb-2">{exp.duration}</p>
            <p className="text-gray-300 text-sm">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
