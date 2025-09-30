'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaGlobe } from 'react-icons/fa';

const experiences = [
  {
    role: 'Product Designer',
    company: 'MoneyFlock',
    duration: 'June 2024 – June 2025',
    type: 'Full-time',
    src: '/images/exp/moneyflock.png',
    social: {
      instagram: 'https://instagram.com/moneyflock',
      website: 'https://moneyflock.com',
      linkedin: 'https://linkedin.com/company/moneyflock',
    },
    description: [
      'Designed and iterated user-centric flows and features, ensuring seamless and intuitive product experiences',
      'Conducted user research, testing, and analytics, identifying pain points and implementing data-driven UI/UX improvements.',
      'Collaborated cross-functionally with development and marketing teams to align design with product goals and user engagement strategies.',
    ],
  },
  {
    role: 'Project Manager',
    company: 'AeroInk',
    duration: 'Feb 2025 – June 2025',
    type: 'Freelance',
    src: '/images/exp/aeroink.png',
    social: {
      instagram: 'https://instagram.com/aeroink',
      website: 'https://aeroink.com',
      linkedin: 'https://linkedin.com/company/aeroink',
    },
    description: [
      'Build and led own freelance agency',
      'Led multiple freelance client projects.',
      'Managed timelines and deliverables effectively.',
      'Collaborated with developers to deliver scalable web products.',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className="w-[1200px] z-1 bg-black text-white py-16 px-6 md:px-12 cursor-pointer">
      <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-green-400">
        Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="border-l-4 flex flex-row justify-between items-start border-green-400 pl-6 py-6 bg-gray-900/60 rounded-lg shadow-md hover:shadow-green-400/50 transform hover:-translate-y-1 transition-all duration-300"
          >
            {/* Left Side: Text */}
            <div className="flex-1 pr-6 space-y-3">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  {exp.role}
                </h3>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-400/20 text-green-300 border border-green-400/40">
                  {exp.type}
                </span>
              </div>

              <p className="text-sm text-green-300 font-medium">{exp.company}</p>
              <p className="text-sm text-gray-400">{exp.duration}</p>

              {/* Bullet List */}
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-2 leading-relaxed font-semibold">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Right Side: Logo + Social Links */}
            <div className="flex flex-col items-center w-[10%] h-fit py-2 gap-y-2">
              <img
                className="w-full h-full object-cover "
                src={exp.src}
                alt={`${exp.company} logo`}
              />
              <div className="flex flex-row space-x-2 cursor-pointer">
                {exp.social.instagram && (
                  <a
                    href={exp.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/65 cursor-pointer  hover:text-white text-lg"
                  >
                    <FaInstagram />
                  </a>
                )}
                {exp.social.website && (
                  <a
                    href={exp.social.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/65 cursor-pointer  hover:text-white text-lg"
                  >
                    <FaGlobe />
                  </a>
                )}
                {exp.social.linkedin && (
                  <a
                    href={exp.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/65 cursor-pointer  hover:text-white text-lg"
                  >
                    <FaLinkedin />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
