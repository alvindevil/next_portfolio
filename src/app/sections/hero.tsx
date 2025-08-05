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

  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);
  const textY = useTransform(scrollY, [0, 300], [0, -100]);
  const subTextY = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <motion.div
      style={{
        backgroundImage: `url('/images/hero.png')`,
        scale,
        opacity,
      }}
      className="w-screen h-screen bg-cover bg-[center_12%] bg-no-repeat relative flex items-center justify-center overflow-hidden"
    >
      {/* Gradient Overlay */}
      <div className="absolute  inset-0 bg-gradient-to-r from-black/100 to-gray-700/50 z-0" />

      {/* Top Left Name and Availability */}
      <div className="absolute top-6 left-6 text-white text-sm z-10 font-semibold ">
        {prop.name}  
        <span className="inline-block w-2 h-2  bg-green-400 rounded-full shadow-[0_0_4px_1px_#22c55e] animate-pulse ml-6"></span>

        <span className="text-green-400 ml-2"> {prop.availability}</span>
      </div>

      {/* Top Right Links */}
      <div className="absolute top-6 right-6 text-white text-sm space-y-1 text-right z-10">
        <a href={prop.cvLink} className="hover:underline">Download CV</a>
        <br />
        <a href={prop.contactLink} className="hover:underline">Contact Me</a>
      </div>

      {/* Center Left Experience Info */}
      <motion.div
        style={{ y: subTextY }}
        className="absolute left-20 top-56 text-green-400 text-lg font-semibold z-10"
      >
        <p>{prop.startEnd}</p>
        <p>{prop.years}</p>
      </motion.div>

      {/* Center Big Name */}
     <motion.h1
  style={{ y: textY }}
  className="text-[155px] w-[800px] text-right leading-[130px] tracking-widest font-extrabold text-gray-400 font-sans absolute left-20 bottom-32 z-10"
>
  {prop.name}
</motion.h1>


      {/* Bottom Left Title */}
      <motion.p
        style={{ y: subTextY }}
        className="absolute left-20 bottom-10 text-white font-extralight text-sm   z-10"
      >
        <span className="font-bold">{prop.title}</span>
      </motion.p>

      {/* Right Quote */}
      <motion.blockquote
        style={{ y: subTextY }}
        className="absolute right-20 top-60 text-white text-xs text-right max-w-xs font-semibold tracking-wide leading-relaxed z-10"
      >
        “ {prop.quote} ”
      </motion.blockquote>

      {/* Bottom Right Scroll Text */}
      <div className="absolute bottom-6 right-6 text-white text-sm z-10">
        Scroll
      </div>
    </motion.div>
  );
}
