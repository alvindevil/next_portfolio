'use client';

import React, { useState } from 'react';
import DynamicHeader from '@/app/components/layout/DynamicHeader';
import Image from 'next/image';
import clsx from 'clsx';

export default function WorkPage() {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#contact', label: 'Contact' },
  ];

  const projects = [
    {
      id: 1,
      title: 'AI Chat Assistant',
      description:
        'A conversational AI built using Next.js and OpenAI APIs. Provides intelligent answers, maintains context, and offers smooth UX.',
      image: '/images/projects/AiDocify.png',
      gallery: [
        '/images/ai-chat-1.jpg',
        '/images/ai-chat-2.jpg',
        '/images/ai-chat-3.jpg',
      ],
      tech: ['Next.js', 'TypeScript', 'OpenAI', 'TailwindCSS'],
    },
    {
      id: 2,
      title: 'E-Commerce Dashboard',
      description:
        'A sleek admin dashboard for managing products, orders, and analytics in real time.',
      image: '/images/projects/InnovateHub.png',
      gallery: ['/images/dashboard-1.jpg', '/images/dashboard-2.jpg'],
      tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description:
        'A fast and elegant personal portfolio built with Next.js, Framer Motion, and Tailwind.',
      image: '/images/projects/NotionBlog.png',
      gallery: ['/images/portfolio-1.jpg'],
      tech: ['Next.js', 'Framer Motion', 'TailwindCSS'],
    },
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center">
      {/* Header */}
      <DynamicHeader links={links} />

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row justify-between w-[90%] h-[90%] bg-gray-800/40 backdrop-blur-md rounded-2xl shadow-xl mt-10 overflow-hidden border border-white/10">
        
        {/* Left Panel */}
        <div className="md:w-[30%] w-full md:border-r border-white/10 overflow-y-auto max-h-[90vh] p-6 space-y-5 hide-scrollbar">
          <h2 className="text-2xl font-semibold mb-4">Work</h2>
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={clsx(
                'p-3 rounded-lg cursor-pointer transition-all duration-300 flex flex-col items-center gap-2 hover:bg-white/10',
                selectedProject.id === project.id ? 'bg-white/10 border-l-4 border-green-400' : ''
              )}
            >
              <img
                src={project.image}
                alt={project.title}
                width={60}
                height={60}
                className="rounded-md object-cover w-full "
              />
              <div>
                <h3 className="text-lg font-medium">{project.title}</h3>
                <p className="text-sm text-gray-400 truncate max-w-[200px]">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Panel */}
        <div className="md:w-[70%] w-full overflow-y-auto p-8">
          <h2 className="text-3xl font-bold mb-3">{selectedProject.title}</h2>
          <p className="text-gray-300 mb-6">{selectedProject.description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {selectedProject.tech.map((t, idx) => (
              <span
                key={idx}
                className="bg-green-400/10 text-green-400 px-3 py-1 rounded-full text-sm"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedProject.gallery.map((img, idx) => (
              <div key={idx} className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image
                  src={img}
                  alt={`${selectedProject.title} image ${idx + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} Shivam Yadav — Built with Next.js & Tailwind
      </footer>
    </div>
  );
}
