"use client";
import React, { useEffect, useState } from "react";
import HeroSection from "../sections/hero";
import ProjectsSection from "../sections/projectSection";
import ExperienceSection from "../sections/expSection";
import SkillsSection from "../sections/skillSection";
import Footer from "../components/layout/footer";
import DynamicHeader from "../components/layout/DynamicHeader";
import { motion, useScroll, useTransform } from "framer-motion";

const LandingPage = () => {
  const { scrollY } = useScroll();
  const [isLayer, setIsLayer] = useState(true);
  
  useEffect(() => {
    
    return () => {
      
    };
  }, [scrollY, isLayer]);


  const bgX = useTransform(scrollY, [0, 600], [0, 600]);      
  const bgY = useTransform(scrollY, [0, 600], [400, 0]);      
  const bgScale = useTransform(scrollY, [0, 600], [2, 0.8]); 
  const bgOpacity = useTransform(scrollY, [0, 300], [1, 0.5]); 
  const overlayOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <div className="relative overflow-x-hidden bg-black">
      {/* Fixed Background Image */}
      <motion.img
        src="/images/hero_3.png"
        alt="Hero Background"
        style={{
          x: bgX,
          y:bgY,
          scale: bgScale,
          opacity: bgOpacity,
        }}
        className="fixed top-0 left-0 w-full h-full object-contain z-10"
      />

       {/* Gradient Overlay (disappears on scroll) */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="fixed inset-0 bg-gradient-to-r from-black/80 to-gray-950/80 z-10 pointer-events-none"
      />
      {/* <div className="w-[2px] h-[500px] bg-white fixed right-[700px] top-28 z-20"></div> */}
      {/* Foreground Sections */}
      <HeroSection
        prop={{
          name: "PANTOMATH",
          experience: "2+ yrs exp.",
          years: "2+ yrs exp.",
          startEnd: "2023 → 2025",
          availability: "Available for work",
          title: "Tech Entrepreneur",
          quote:
            "WHETHER IT’S WRITING CODE OR STRUCTURING A LIFE, I AIM FOR CLARITY, CALM AND LONG-TERM IMPACT. I BELIEVE GOOD SYSTEMS ARE BUILT WITH INTENT AND CONSISTENCY",
          cvLink: "/files/cv.pdf",
          contactLink:
            "https://mail.google.com/mail/?view=cm&fs=1&to=yadavs47334@gmail.com",
        }}
      />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
