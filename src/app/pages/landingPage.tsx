"use client";
import React, { useEffect, useState } from "react";
import HeroSection from "../sections/hero";
import ProjectsSection from "../sections/projectSection";
import ExperienceSection from "../sections/expSection";
import SkillsSection from "../sections/skillSection";
import Footer from "../components/layout/footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import AboutSection from "../sections/aboutSection";
import ContactSection from "../sections/contactSection";
//import PersonalBot from "../sections/PersonalBot";
//import { MessageCircle, X } from 'lucide-react';

const LandingPage = () => {
  const { scrollY } = useScroll();
  //const [isLayer, setIsLayer] = useState(true);
  //const [isScroll, setIsScroll] = useState(false);
  const [isBotOpen, setIsBotOpen] = useState(false);

  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [adminError, setAdminError] = useState("");
  const [adminLoading, setAdminLoading] = useState(false);


  const router = useRouter();
  
  // useEffect(() => {
  //   const unsubscribe = scrollY.onChange((latest) => {
  //     setIsScroll(latest >= 200); 
  //   });

  //   return () => unsubscribe();
  // }, [scrollY]);


  useEffect(() => {
  let buffer: string[] = [];
  let timer: ReturnType<typeof setTimeout>;

  const handler = (e: KeyboardEvent) => {
    buffer.push(e.key.toLowerCase());

    clearTimeout(timer);
    timer = setTimeout(() => (buffer = []), 220);

    if (buffer.join("") === "admin") {
      setIsAdminOpen(prev => !prev);
      buffer = [];
    }
  };

  window.addEventListener("keydown", handler);
  return () => window.removeEventListener("keydown", handler);
}, []);


const bgX = useTransform(scrollY, [0, 10], [0, 600]);      
const bgY = useTransform(scrollY, [0, 10], [400, 0]);      
const bgScale = useTransform(scrollY, [0, 10], [2, 0.8]); 
const bgOpacity = useTransform(scrollY, [0, 300], [1, 0.5]); 
const overlayOpacity = useTransform(scrollY, [0, 600], [1, 0]);
const lineOpacity = useTransform(scrollY, [0,4000,5000], [0,0.5,0]);
//const contentOpacity = useTransform(scrollY, [0,1200], [0,1]);


const handleAdminSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();
setAdminLoading(true);
setAdminError("");

const formData = new FormData(e.currentTarget);

try {
  const res = await fetch("/api/admin", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: formData.get("name"),
    password: formData.get("password"),
  }),
  });

  if (!res.ok) throw new Error("Invalid credentials");

  router.push("/client/admin");
  } catch (err: unknown) {
    setAdminError((err as Error).message || "Login failed");
  } finally {
    setAdminLoading(false);
  }
};


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
          cvLink: "https://drive.google.com/uc?export=download&id=1Yn6RBzMhhMMLHrNY_hd96XkMUiFsObuQ",
          contactLink:
            "https://mail.google.com/mail/?view=cm&fs=1&to=yadavs47334@gmail.com",
          cta:{
                type: "Work",
                onClick: ()=>{router.push('/client/works');}
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
      {/* Admin Login Modal */}
{isAdminOpen && (
  <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
    <div className="w-full max-w-sm rounded-lg border border-zinc-700 bg-zinc-900 p-6 shadow-2xl">
      <h2 className="mb-4 text-center text-lg font-semibold text-zinc-100">
        Admin Access
      </h2>

      <form onSubmit={handleAdminSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Admin name"
          required
          className="w-full rounded-md bg-zinc-800 px-3 py-2 text-sm text-zinc-100 ring-1 ring-zinc-700 focus:ring-indigo-500 outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="w-full rounded-md bg-zinc-800 px-3 py-2 text-sm text-zinc-100 ring-1 ring-zinc-700 focus:ring-indigo-500 outline-none"
        />

        {adminError && (
          <p className="text-center text-sm text-red-400">
            {adminError}
          </p>
        )}

        <div className="flex gap-2 pt-2">
          <button
            type="submit"
            disabled={adminLoading}
            className="flex-1 rounded-md bg-indigo-600 py-2 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-50"
          >
            {adminLoading ? "Verifying..." : "Login"}
          </button>

          <button
            type="button"
            onClick={() => setIsAdminOpen(false)}
            className="flex-1 rounded-md bg-zinc-700 py-2 text-sm text-zinc-200 hover:bg-zinc-600"
          >
            Cancel
          </button>
        </div>
      </form>

      <p className="mt-4 text-center text-xs text-zinc-500">
        type &apos;admin&apos; to close
      </p>
    </div>
  </div>
)}

    </div>
  );
};

export default LandingPage;





// chatBot floating when needed AI :---------- 

{/* <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
    {isBotOpen && (
      <div className="relative mb-3 animate-fade-in">
        <PersonalBot />

        <button
          onClick={() => setIsBotOpen(false)}
          className="absolute -right-3 -top-1 cursor-pointer bg-red-400 hover:bg-red-500 text-white rounded-full p-2 shadow-lg transition-all duration-300"
          aria-label="Close chat"
        >
          <X size={10} />
        </button>
      </div>
    )}

    {!isBotOpen && (
      <button
        onClick={() => setIsBotOpen(true)}
        className="bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
        aria-label="Open chat"
      >
        <MessageCircle size={22} />
      </button>
    )}
</div> 
*/}

//--------------