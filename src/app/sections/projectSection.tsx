'use client';

import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    name: 'NotionBlog',
    description: 'A markdown-based blog powered by Notion API and MDX.',
    tech: ['Next.js', 'TailwindCSS', 'MDX'],
    src: "/images/projects/NotionBlog.png",
    github: '#',
    demo: '#',
  },
  {
    name: 'AiDocify',
    description: 'AI-powered PDF summarizer built with GPT-4 and MERN stack.',
    tech: ['React', 'Node.js', 'OpenAI API'],
    src: "/images/projects/AiDocify.png",
    github: '#',
    demo: '#',
  },
  {
    name: 'College Marketplace',
    description: 'A peer-to-peer platform for students to buy/sell essentials.',
    tech: ['Firebase', 'React', 'TailwindCSS'],
    src: "/images/projects/InnovateHub.png",
    github: '#',
    demo: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section className="max-w-[1200px] bg-black text-white py-16 px-6 md:px-12 cursor-pointer relative ">
      {/* Sticky title */}
      <h2 className="sticky top-0 bg-black text-3xl md:text-4xl font-semibold mb-10 text-green-400 z-10">
        Projects
      </h2>

      <div className="flex flex-col gap-10 items-start">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className=" flex flex-col w-[98%] left-0 md:flex-row bg-gray-900/60 border border-gray-700 rounded-xl overflow-hidden hover:border-green-400 transition-colors duration-300 "
          >
            {/* Left: Image */}
            <div className="relative p-2 w-full md:w-1/2 h-[220px] md:h-[280px] overflow-hidden">
              <img
                src={project.src}
                alt={project.name}
                className="w-full rounded-xl  h-full object-cover [object-position:center_12%] transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-90 flex items-center justify-center transition-all duration-500">
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-gray-300 text-center px-4 text-sm md:text-base">
                   Click to See more details 
                </p>
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex flex-col justify-between p-6 md:w-1/2">
              <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-green-400">
                {project.name}
              </h3>

              <p className="text-gray-400 mb-4 hidden md:block">{project.description}</p>

              {/* Tech badges */}
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

              {/* Links */}
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
          </div>
        ))}
      </div>
    </section>
  );
}
