'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="w-full bg-black text-white py-16 px-6 md:px-12">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold mb-8 text-green-400"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-4xl space-y-6 text-gray-300 leading-relaxed"
      >
        <p>
          I am a <span className="text-green-400 font-semibold">Full Stack Developer</span> and 
          <span className="text-green-400 font-semibold"> Product Designer</span> with a strong foundation 
          in building scalable applications, designing user-centric experiences, and collaborating 
          across teams to deliver impactful digital solutions.
        </p>

        <p>
          My experience spans working as a <span className="text-green-300 font-medium">Full Stack Developer Intern 
          at Northern Railway</span>, where I contributed to building efficient management systems, 
          to being a <span className="text-green-300 font-medium">Product Designer at MoneyFlock</span>, 
          where I led design strategies that improved usability and engagement. 
          Alongside, I founded <span className="text-green-300 font-medium">AeroInk</span> as a freelance 
          consultancy, managing diverse projects and collaborating with teams to deliver 
          high-quality web products.
        </p>

        <p>
          With a versatile skill set in both <span className="text-green-400">engineering</span> and 
          <span className="text-green-400"> product strategy</span>, I thrive in roles that require 
          bridging the gap between technology and user needs. My goal is to grow into a 
          <span className="text-green-300 font-semibold"> Product Manager</span> role where I can leverage 
          my technical expertise, design thinking, and leadership experience to build products 
          that are both innovative and meaningful.
        </p>

        <p>
          Beyond code and design, I enjoy working with motivated teams, solving complex problems, 
          and continuously learning to stay ahead in the fast-evolving tech landscape.
        </p>
      </motion.div>
    </section>
  );
}
