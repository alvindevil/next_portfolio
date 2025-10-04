'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

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

  const [menuOpen, setMenuOpen] = useState(false);

  // ---- Rotating Job Roles ----
  const roles = [prop.title,"Product Designer", "Freelancer", "Full Stack Developer"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000); // change role every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // Text / content transforms
  const textY = useTransform(scrollY, [0, 300], [0, -100]);
  const subTextY = useTransform(scrollY, [0, 300], [0, -50]);
  const textopacity = useTransform(scrollY, [0, 200], [1, 0]);
  const contentOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <section className="w-screen h-screen relative flex items-center justify-center overflow-hidden">
      <div className="relative z-20 w-full h-full">
        {/* Top Left Name and Availability */}
        <div className="absolute top-6 left-6 sm:left-4 text-white text-sm sm:text-xs font-semibold flex items-center gap-2">
          {prop.name}
          <span className="w-2 h-2 bg-blue-600 rounded-full shadow-[0_0_4px_1px_#22c55e] animate-pulse"></span>
          <span className="text-blue-400">{prop.availability}</span>
        </div>

        {/* Top Right Links (Desktop) */}
        <div className="hidden sm:flex absolute top-[10%] right-[5%] text-white text-sm space-y-1 text-right sm:space-y-2 sm:text-xs flex-col">
          <a href={prop.cvLink} className="inline-block hover:underline hover:text-blue-300 hover:scale-125 transition-all duration-200 ease-in-out">Download CV</a>
          <a href={prop.contactLink} className="inline-block hover:underline hover:text-blue-300 hover:scale-125 transition-all duration-200 ease-in-out">Contact Me</a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="sm:hidden absolute top-6 right-6 z-30">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-between w-6 h-6 text-white focus:outline-none"
          >
            <span className={`block h-0.5 w-full bg-white transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-full bg-white transition-opacity ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block h-0.5 w-full bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

          {menuOpen && (
            <div className="absolute w-[100vw] h-[100vh] right-0 mt-2 bg-black/20 backdrop-blur-md pt-40 flex justify-start items-center flex-col gap-2 rounded-md shadow-lg">
              <a href={prop.cvLink} className="text-white cursor-pointer hover:text-blue-300 hover:scale-125">Download CV</a>
              <a href={prop.contactLink} className="text-white cursor-pointer hover:text-blue-300 hover:scale-125">Contact Me</a>
            </div>
          )}
        </div>

        {/* Center Left Experience Info */}
        <motion.div
          style={{ y: subTextY, opacity: contentOpacity }}
          className="absolute left-[5%] sm:left-[5%] top-56 text-white/50 text-lg sm:text-sm font-semibold"
        >
          <p>{prop.startEnd}</p>
          <p>{prop.years}</p>
        </motion.div>

        {/* Rotating Job Role */}
        <motion.p
          style={{ y: subTextY, opacity: contentOpacity }}
          className="absolute left-[5%] top-74 text-white/80 font-extralight text-[20px] sm:text-[30px] sm:text-white/55  "
        >
          <span className="font-bold">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[currentRole]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                {roles[currentRole]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.p>

        {/* Center Big Name */}
        <motion.h1
          style={{ y: textY, opacity: contentOpacity }}
          className="text-[50px] sm:text-[80px] md:text-[90px] sm:w-[30vw] text-left leading-[50px] sm:leading-[90px] tracking-widest font-extrabold text-gray-400 font-sans absolute left-[5%] sm:left-[5%] bottom-32"
        >
          {prop.name}
        </motion.h1>

        {/* Right Quote */}
        <motion.blockquote
          style={{ y: subTextY, opacity: contentOpacity }}
          className="absolute top-[20%] 
             left-[5%] sm:left-auto sm:right-[5%] 
             w-[70%] sm:w-[30%] 
             text-[60%] sm:text-[14px] 
             text-white/65 sm:text-white/55 
             sm:text-right 
             max-w-md sm:max-w-none
             font-semibold tracking-wide leading-relaxed 
             transition-all ease-in-out"
        >
          {prop.quote}
        </motion.blockquote>

        {/* CTA Button */}
        <motion.div style={{ opacity: contentOpacity }}>
          <button 
            onClick={prop.cta.onClick}
            className="font-bold text-[16px] opacity-0 shadow-2xl hover:shadow-white/60 absolute right-[10%] sm:right-[5%] bottom-7% sm:bottom-[10%] cursor-pointer w-fit h-fit px-8 py-2 text-white border rounded-4xl bg-white/20 hover:bg-white/90 hover:text-black"
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
