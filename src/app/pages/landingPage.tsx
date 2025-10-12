"use client";
import React, { useEffect, useState } from "react";
import HeroSection from "../sections/hero";
import ProjectsSection from "../sections/projectSection";
import ExperienceSection from "../sections/expSection";
import SkillsSection from "../sections/skillSection";
import Footer from "../components/layout/footer";
import DynamicHeader from "../components/layout/DynamicHeader";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import AboutSection from "../sections/aboutSection";
import ContactSection from "../sections/contactSection";

const LandingPage = () => {
  const { scrollY } = useScroll();
  const [isLayer, setIsLayer] = useState(true);
   const [isScroll, setIsScroll] = useState(false);

  const router = useRouter();
  
   useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScroll(latest >= 200); 
    });

    return () => unsubscribe();
  }, [scrollY]);


  const bgX = useTransform(scrollY, [0, 10], [0, 600]);      
  const bgY = useTransform(scrollY, [0, 10], [400, 0]);      
  const bgScale = useTransform(scrollY, [0, 10], [2, 0.8]); 
  const bgOpacity = useTransform(scrollY, [0, 300], [1, 0.5]); 
  const overlayOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const lineOpacity = useTransform(scrollY, [0,4000,5000], [0,0.5,0]);
  const contentOpacity = useTransform(scrollY, [0,1200], [0,1]);

  return (
    <div className="flex flex-col overflow-x-hidden bg-black">
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
        className={`fixed top-0 left-0 h-full object-contain  transition-all ease-in-out duration-300 w-full `}
      />

       {/* Gradient Overlay (disappears on scroll) */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="fixed inset-0 bg-gradient-to-r from-black/80 to-gray-950/80 z-10 pointer-events-none"
      />
      {/* middle line */}
      <motion.div 
      style={{opacity : lineOpacity}}
      className="w-[2px] h-[800px] bg-gray-500 fixed right-[30%] top-28 z-20 hidden sm:block">
      </motion.div>
      
      <HeroSection
        prop={{
          name: "SHIVAM YADAV",
          experience: "1+ yrs exp.",
          years: "1+ yrs exp.",
          startEnd: "2024 → 2025",
          availability: "Available for work",
          title: "Tech Entrepreneur",
          quote:
            "WHETHER IT’S WRITING CODE OR STRUCTURING A LIFE, I AIM FOR CLARITY, CALM AND LONG-TERM IMPACT. I BELIEVE GOOD SYSTEMS ARE BUILT WITH INTENT AND CONSISTENCY",
          cvLink: "https://drive.google.com/uc?export=download&id=1YD0fkbzVVyJ3g8ZoCYDFKDJJF_ZKZm75 ",
          contactLink:
            "https://mail.google.com/mail/?view=cm&fs=1&to=yadavs47334@gmail.com",
          cta:{
                type: "Work",
                onClick: ()=>{router.push('#projects');}
              }
        }}
      />
      <motion.div id="about"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <AboutSection />
      </motion.div>
      <motion.div id="exp"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <ExperienceSection />
      </motion.div>
      <motion.div id="projects"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <ProjectsSection />
      </motion.div>
      <motion.div id="skills"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SkillsSection />
      </motion.div>
      <motion.div id="contact" className="bg-black z-20 mt-28 pt-28">
        <ContactSection />
      </motion.div>
      <Footer />
    </div>
  );
};

export default LandingPage;
