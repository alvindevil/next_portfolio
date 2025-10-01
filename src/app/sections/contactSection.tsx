'use client';

import React from 'react';
import { motion } from 'framer-motion';
import  ParallaxImage from '@/app/components/ui/ParallaxImage'

export default function ContactSection() {
  return (
    <section className="w-full min-h-screen flex justify-center items-center bg-black text-white py-16 z-20">
      <div className="w-[80vw] h-[80vh] flex flex-col md:flex-row overflow-hidden rounded-4xl">
        
        {/* Left Side - Parallax Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full md:w-1/2 h-1/2 md:h-full flex justify-center items-center p-6"
        >
          <img src="images/illust/exitDoor.jpg" />
        </motion.div>

        {/* Right Side - Contact Form with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full md:w-1/2 h-1/2 md:h-full flex justify-center items-center bg-black"
        >
          <form
            className="w-[90%] md:w-[80%] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 flex flex-col space-y-6 shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-white">Contact Me</h2>
            
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-300 text-white focus:outline-none focus:border-green-400 transition-all"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-300 text-white focus:outline-none focus:border-green-400 transition-all"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="p-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-300 text-white focus:outline-none focus:border-green-400 transition-all"
            ></textarea>

            <motion.button
              whileHover={{ cursor: "pointer" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gray-100 hover:bg-white text-black font-semibold rounded-lg shadow-md transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
