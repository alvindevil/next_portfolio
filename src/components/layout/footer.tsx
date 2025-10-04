'use client';

import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-black  text-gray-400 px-6 md:px-20 py-10  border-t border-gray-800 z-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Branding */}
        <div className="text-sm">
          ©{new Date().getFullYear()} <span className="text-white font-semibold"></span>. All rights reserved.
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm">
          <Link href="#about" className="hover:text-blue-400 transition hover:scale-130">About</Link>
          <Link href="#projects" className="hover:text-blue-400 transition hover:scale-130">Projects</Link>
          <Link href="#exp" className="hover:text-blue-400 transition hover:scale-130">Experience</Link>
          <Link href="#skills" className="hover:text-blue-400 transition hover:scale-130">Skills</Link>
          <Link href="#contact" className="hover:text-blue-400 transition hover:scale-130">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <Link href="https://github.com/alvindevil" target="_blank" aria-label="GitHub">
            <FaGithub className="text-xl hover:text-blue-400 transition hover:scale-180" />
          </Link>
          <Link href="https://www.linkedin.com/in/shivam-yadav-2666ba253/" target="_blank" aria-label="LinkedIn">
            <FaLinkedin className="text-xl hover:text-blue-400 transition hover:scale-180" />
          </Link>
        </div>
      </div>

      {/* Signature */}
      <div className="mt-6 text-center text-xs text-gray-600">
        Made by Shivam Yadav
      </div>
    </footer>
  );
}
