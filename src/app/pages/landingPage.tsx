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
  const lineOpacity = useTransform(scrollY, [0,2000], [0,0.5]);
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
        className={`fixed top-0 left-0 h-full object-contain  transition-all duration-500 w-full z-0`}
      />

       {/* Gradient Overlay (disappears on scroll) */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="fixed inset-0 bg-gradient-to-r from-black/80 to-gray-950/80 z-10 pointer-events-none"
      />
      <motion.div 
      style={{opacity : lineOpacity}}
      className="w-[2px] h-[800px] bg-gray-500 fixed right-[700px] top-28 z-20">
      </motion.div>
      
      <HeroSection
        prop={{
          name: "SHIVAM YADAV",
          experience: "1+ yrs exp.",
          years: "1+ yrs exp.",
          startEnd: "2024 → 2025",
          availability: "Available for work",
          title: "Full Stack Developer",
          quote:
            "WHETHER IT’S WRITING CODE OR STRUCTURING A LIFE, I AIM FOR CLARITY, CALM AND LONG-TERM IMPACT. I BELIEVE GOOD SYSTEMS ARE BUILT WITH INTENT AND CONSISTENCY",
          cvLink: "/files/cv.pdf",
          contactLink:
            "https://mail.google.com/mail/?view=cm&fs=1&to=yadavs47334@gmail.com",
          cta:{
                type: "Work",
                onClick: ()=>{router.push('/client/works');}
              }
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <AboutSection />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <ExperienceSection />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <ProjectsSection />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SkillsSection />
      </motion.div>
      <ContactSection/>
      <Footer />
    </div>
  );
};

export default LandingPage;
