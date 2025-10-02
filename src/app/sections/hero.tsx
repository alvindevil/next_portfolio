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
    cta: { type: string; onClick: () => void; };
  };
}

export default function HeroSection({ prop }: HeroSectionProps) {
  const { scrollY } = useScroll();

  // Text / content transforms
  const textY = useTransform(scrollY, [0, 300], [0, -100]);
  const subTextY = useTransform(scrollY, [0, 300], [0, -50]);
  const textopacity = useTransform(scrollY, [0, 200], [1, 0]);
  const contentOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <section className="w-screen h-screen relative flex items-center justify-center overflow-hidden">
      {/* Content Layer */}
      <div className="relative z-20 w-full h-full">
        
        {/* Top Left Name and Availability */}
        <div className="absolute top-6 left-6 sm:left-4 text-white text-sm sm:text-xs font-semibold">
          {prop.name}
          <span className="inline-block w-2 h-2 bg-blue-600 rounded-full shadow-[0_0_4px_1px_#22c55e] animate-pulse ml-6"></span>
          <span className="text-blue-400 ml-2">{prop.availability}</span>
        </div>

        {/* Top Right Links */}
        <div className="absolute top-[10%] right-[5%] sm:right-[5%]  text-white text-sm space-y-1 text-right sm:space-y-2 sm:text-xs">
          <a href={prop.cvLink} className="inline-block hover:underline hover:text-blue-300  hover:scale-125 transition-all duration-200 ease-in-out">Download CV</a><br/>
          <a href={prop.contactLink} className="inline-block hover:underline hover:text-blue-300 hover:scale-125 transition-all duration-200 ease-in-out">Contact Me</a>
        </div>

        {/* Center Left Experience Info */}
        <motion.div
          style={{ y: subTextY, opacity: contentOpacity }}
          className="absolute left-[5%] sm:left-[5%] top-56 text-white/50 text-lg sm:text-sm font-semibold"
        >
          <p>{prop.startEnd}</p>
          <p>{prop.years}</p>
        </motion.div>

        

        {/* Center Sub Title */}
        <motion.p
          style={{ y: subTextY, opacity: contentOpacity }}
          className="absolute left-[5%] sm:left-[5%]  top-74 text-white font-extralight text-[20px] sm:text-[14px]"
        >
          <span className="font-bold">{prop.title}</span>
        </motion.p>

        {/* Center Big Name */}
        <motion.h1
          style={{ y: textY, opacity: contentOpacity }}
          className="text-[20px] sm:text-[80px] md:text-[90px] sm:w-[30vw]  text-left leading-[130px] sm:leading-[90px] tracking-widest font-extrabold text-gray-400 font-sans absolute left-[5%] sm:left-[5%] bottom-32"
        >
          {prop.name}
        </motion.h1>

        {/* Right Quote */}
        <motion.blockquote
          style={{ y: subTextY, opacity: contentOpacity }}
          className="absolute right-[2%] sm:right-[5%] top-60 text-white text-[14px] sm:text-[10px] text-right max-w-md w-sm sm:max-w-[80vw] font-semibold tracking-wide leading-relaxed hover:shadow-xl hover:shadow-white/10 transition-all ease-in-out rounded-2xl"
        >
          {prop.quote} 
        </motion.blockquote>

        {/* CTA Button */}
        <motion.div style={{ opacity: contentOpacity }}>
          <button 
            onClick={prop.cta.onClick}
            className="font-bold text-[16px] shadow-2xl hover:shadow-white/60 absolute right-[10%] sm:right-[5%] bottom-7% sm:bottom-[10%] cursor-pointer w-fit h-fit px-8 py-2 text-white border rounded-4xl bg-white/20 hover:bg-white/90 hover:text-black"
          > 
            {prop.cta.type}
          </button>
        </motion.div>

        {/* Bottom Right Scroll Text */}
        <motion.div
          style={{ opacity: textopacity }}
          className="absolute bottom-6 right-6 text-white text-sm sm:text-xs"
        >
          Scroll
        </motion.div>
      </div>
    </section>
  );
}
