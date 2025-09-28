'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroSectionProps {
  prop: {
    name: string;
    experience: string;
    years: string;
    startEnd: string;
    availability: string;
    title: string;
    quote: string;
    cvLink: string;
    contactLink: string;
  };
}

export default function HeroSection({ prop }: HeroSectionProps) {
  const { scrollY } = useScroll();

  // Text / content transforms
  const textY = useTransform(scrollY, [0, 300], [0, -100]);
  const subTextY = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <section className="w-screen h-screen relative flex items-center justify-center overflow-hidden">
      {/* Gradient Overlay */}
      

      {/* Content Layer */}
      <div className="relative z-20 w-full h-full">
        {/* Top Left Name and Availability */}
        <div className="absolute top-6 left-6 text-white text-sm font-semibold">
          {prop.name}
          <span className="inline-block w-2 h-2 bg-green-400 rounded-full shadow-[0_0_4px_1px_#22c55e] animate-pulse ml-6"></span>
          <span className="text-green-400 ml-2">{prop.availability}</span>
        </div>

        {/* Top Right Links */}
        <div className="absolute top-6 right-6 text-white text-sm space-y-1 text-right">
          <a href={prop.cvLink} className="hover:underline">
            Download CV
          </a>
          <br />
          <a href={prop.contactLink} className="hover:underline">
            Contact Me
          </a>
        </div>

        {/* Center Left Experience Info */}
        <motion.div
          style={{ y: subTextY }}
          className="absolute left-20 top-56 text-green-400 text-lg font-semibold"
        >
          <p>{prop.startEnd}</p>
          <p>{prop.years}</p>
        </motion.div>

        {/* Center Big Name */}
        <motion.h1
          style={{ y: textY }}
          className="text-[155px] w-[800px] text-right leading-[130px] tracking-widest font-extrabold text-gray-400 font-sans absolute left-20 bottom-32"
        >
          {prop.name}
        </motion.h1>

        {/* Bottom Left Title */}
        <motion.p
          style={{ y: subTextY }}
          className="absolute left-20 bottom-10 text-white font-extralight text-sm"
        >
          <span className="font-bold">{prop.title}</span>
        </motion.p>

        {/* Right Quote */}
        <motion.blockquote
          style={{ y: subTextY }}
          className="absolute right-20 top-60 text-white text-xs text-right max-w-xs font-semibold tracking-wide leading-relaxed"
        >
          “ {prop.quote} ”
        </motion.blockquote>

        {/* Bottom Right Scroll Text */}
        <div className="absolute bottom-6 right-6 text-white text-sm">
          Scroll
        </div>
      </div>
    </section>
  );
}
