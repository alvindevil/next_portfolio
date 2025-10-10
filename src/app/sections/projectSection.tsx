'use client';

import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    name: 'NotionBlog',
    description: 'A full stack web blog application using NextJs and mongoDb , Users can write and share blogs publicly and search and connect to each other , User Auth , Secure  features ',
    tech: ['Next.js', 'TailwindCSS', 'jwt', 'nextJsAuth', 'MDX','typescript','tailwindcss','mongodb'],
    src: "/images/projects/NotionBlog.png",
    github: 'https://github.com/alvindevil/NextJs_Auth',
    demo: 'https://next-js-auth-amber.vercel.app/',
  },
  {
    name: 'AiDocify',
    description: 'AiDocify is an AI-powered tool that automates document creation, organization, and summarization. It extracts key information and generates insights, boosting efficiency and productivity.',
    tech: ['NextJs', 'Node.js', 'OpenAI API', 'Langchain','TypeScript','bullMq', 'Docker', 'Redish','valkey','tailwindcss','mongodb'],
    src: "/images/projects/AiDocify.png",
    github: 'https://github.com/alvindevil/Ai_Docify',
    demo: 'ai-docify-ten.vercel.app',
  },
  {
    name: 'Innovate Hub',
    description: 'Innovate Hub is a startup-focused platform  that connects entrepreneurs, mentors, and investors. It streamlines idea validation, collaboration, and resource sharing to accelerate innovation.',
    tech: ['Express.js', 'NextJsAuth', 'TailwindCSS','NodeJs','vercel','mongodb'],
    src: "/images/projects/InnovateHub.png",
    github: 'https://github.com/alvindevil/founders-hub',
    demo: 'https://github.com/alvindevil/founders-hub',
  },
];

export default function ProjectsSection() {
  return (
    <section className="sm:max-w-[65vw] w-full bg-black text-white py-16 px-6 md:px-12 cursor-pointer relative ">
      {/* Sticky title */}
      <h2 className="sticky top-0 bg-black text-3xl md:text-4xl font-semibold mb-10 text-white  z-10">
        Projects
      </h2>

      <div className="flex flex-col gap-10 items-start">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className=" flex flex-col  sm:w-[98%] w-full left-0 md:flex-row bg-gray-900/60 border border-gray-700 rounded-xl overflow-hidden hover:border-blue-400/50 transition-colors duration-300 "
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
            <div className="flex flex-col justify-between p-6 md:w-1/2 ">
              <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-green-400">
                {project.name}
              </h3>

              <p className="text-gray-400 mb-4  md:block">{project.description}</p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 text-sm text-blue-300 px-3 py-1 rounded-full"
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
