'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaGlobe } from 'react-icons/fa';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Northern Railway ',
    duration: 'June 2025 – August 2025',
    type: 'InternShip',
    src: '/images/exp/STVT.png',
    social: {
      instagram: 'https://instagram.com',
      website: 'https://stccharbagh.in/',
      linkedin: 'https://linkedin.com',
    },
    description: [
      'Collaborated to develop a full-stack application to manage STC, WTC, and Non-Railway candidates.',
      'Implemented scalable front-end and back-end features, reducing manual processes.',
      'Contributed to maintainable code improving operational efficiency. ',
    ],
  },
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
    role: ' Project Manager ',
    company: 'AeroInk',
    duration: 'Feb 2025 – June 2025',
    type: 'Freelance',
    src: '/images/exp/aeroink.png',
    social: {
      instagram: 'https://instagram.com/aeroink',
      website: 'https://aeroinkservices.com',
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
    <section className="max-w-[65vw] z-1 bg-black text-white py-16 px-6 md:px-12 cursor-pointer">
      <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-white">
        <span className='bg-gray-950 border-b-[0.3px] pb-1 pr-5 border-white/50 text-white'> Experience </span>
      </h2>

      <div className="relative ml-4">
        {/* Vertical Timeline Line */}
        <div className="absolute left-0 top-0 h-full w-[2px] bg-white/40"></div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative flex items-start"
            >
              {/* Dot */}
              
              <motion.div 
              whileHover={{scale: 2}}
              className="absolute -left-[10px] mt-4 mb-3 w-5 h-5 rounded-full bg-white border-[6px] border-black box-border "></motion.div>

              {/* Card */}
              <div className="ml-8  flex flex-row justify-between items-start  pl-6 py-6 bg-gray-900/10 rounded-lg  hover:border-white transition-all ease-in-out  w-full box-border">
                {/* Left Side: Text */}
                <div className="flex-1 pr-6 space-y-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-xl md:text-2xl font-semibold text-white">
                      {exp.role}
                    </h3>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-400/50 text-white border border-white/40">
                      {exp.type}
                    </span>
                  </div>

                  <span className="text-sm text-white font-bold bg-white/20 p-1 mb-4 "> {exp.company} </span>
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
