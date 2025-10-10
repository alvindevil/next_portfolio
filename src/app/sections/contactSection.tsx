'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function ContactSection() {
  // Variants for form elements with stronger stagger
  const formVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: custom * 0.15,
        duration: 0.7,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className="w-full min-h-screen flex justify-center items-center bg-black text-white py-16">
      <div className="w-[80vw] h-[80vh] flex flex-col md:flex-row overflow-hidden rounded-4xl bg-black">
        
        {/* Left Side - Parallax Image with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, x: -150, scale: 0.9, rotate: -3 }}
          whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="w-full md:w-1/2 h-1/2 md:h-full flex justify-center items-center p-6"
        >
          <motion.img
            src="images/illust/exitDoor.jpg"
            alt="Contact Illustration"
            className="rounded-2xl"
            whileHover={{ scale: 1.03, rotate: 1, y: -5 }}
            transition={{ type: 'spring', stiffness: 80, damping: 12 }}
          />
        </motion.div>

        {/* Right Side - Contact Form with Glassmorphism & animations */}
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.9, rotate: 3 }}
          whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="w-full md:w-1/2 h-auto md:h-full flex justify-self-start items-center bg-black"
        >
          <form className="w-[90%]  md:w-[80%] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 flex flex-col space-y-6 shadow-lg">
            
            <h2 className="text-2xl font-semibold text-white">Contact Me</h2>
            
            {['Your Name', 'Your Email', 'Your Message'].map((placeholder, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={formVariants}
                viewport={{ once: true }}
              >
                {placeholder === 'Your Message' ? (
                  <textarea
                    placeholder={placeholder}
                    rows={4}
                    className="p-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-300 text-white focus:outline-none focus:border-blue-400 transition-all w-full"
                  />
                ) : (
                  <input
                    type={placeholder === 'Your Email' ? 'email' : 'text'}
                    placeholder={placeholder}
                    className="p-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-300 text-white focus:outline-none focus:border-blue-400 transition-all w-full"
                  />
                )}
              </motion.div>
            ))}

            <motion.button
            onClick={() =>  window.alert("Message Sent Successfully")}
              whileHover={{ backgroundColor: "white" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 120, damping: 15 }}
              className="px-6 py-3 bg-white/50 hover:bg-white text-black font-semibold rounded-lg shadow-md transition-all"
            >
                Send Message 
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
