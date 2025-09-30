'use client';

import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-black  text-gray-400 px-6 md:px-20 py-10 mt-20 border-t border-gray-800 z-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Branding */}
        <div className="text-sm">
          © {new Date().getFullYear()} <span className="text-white font-semibold">PANTOMATH</span>. All rights reserved.
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm">
          <Link href="#projects" className="hover:text-green-400 transition">Projects</Link>
          <Link href="#experience" className="hover:text-green-400 transition">Experience</Link>
          <Link href="#skills" className="hover:text-green-400 transition">Skills</Link>
          <Link href="#contact" className="hover:text-green-400 transition">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <Link href="https://github.com/yourusername" target="_blank" aria-label="GitHub">
            <FaGithub className="text-xl hover:text-green-400 transition" />
          </Link>
          <Link href="https://linkedin.com/in/yourusername" target="_blank" aria-label="LinkedIn">
            <FaLinkedin className="text-xl hover:text-green-400 transition" />
          </Link>
          <Link href="https://twitter.com/yourusername" target="_blank" aria-label="Twitter">
            <FaTwitter className="text-xl hover:text-green-400 transition" />
          </Link>
        </div>
      </div>

      {/* Signature */}
      <div className="mt-6 text-center text-xs text-gray-600">
        Made with ❤️ by Shivam Yadav
      </div>
    </footer>
  );
}
