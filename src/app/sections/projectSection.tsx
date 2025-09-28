'use client';

import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    name: 'NotionBlog',
    description: 'A markdown-based blog powered by Notion’s API and MDX.',
    tech: ['Next.js', 'TailwindCSS', 'MDX'],
    github: '#',
    demo: '#',
  },
  {
    name: 'AiDocify',
    description: 'AI-powered PDF summarizer built with GPT-4 and MERN stack.',
    tech: ['React', 'Node.js', 'OpenAI API'],
    github: '#',
    demo: '#',
  },
  {
    name: 'College Marketplace',
    description: 'A peer-to-peer platform for students to buy/sell essentials.',
    tech: ['Firebase', 'React', 'TailwindCSS'],
    github: '#',
    demo: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section className="w-[1200px] bg-black text-white py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-green-400">
        Selected Projects
      </h2>
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group bg-gray-900/60 border border-gray-700 rounded-xl p-6 hover:border-green-400 transition-colors duration-300"
          >
            <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-green-400">
              {project.name}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-800 text-sm text-green-300 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm hover:text-green-400"
              >
                <Github size={16} />
                Code
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm hover:text-green-400"
              >
                <ExternalLink size={16} />
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
