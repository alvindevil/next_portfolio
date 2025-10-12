'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react'; 
import clsx from 'clsx';

interface HeaderProps {
  title?: string;
  links: { href: string; label: string }[];
}

export default function DynamicHeader({ title, links }: HeaderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-transparent backdrop-blur-md text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
       
        <div className="flex items-center gap-3">
          {/* <Image src="/images/hero.png" alt="Logo" width={36} height={36} /> */}
          <h1 className="text-xl font-semibold">{title}</h1>
        </div>

        
        <nav className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'transition-colors hover:text-green-400',
                pathname === link.href ? 'text-green-400 font-medium' : 'text-gray-300'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-gray-900">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={clsx(
                'block text-lg transition-colors hover:text-green-400',
                pathname === link.href ? 'text-green-400 font-medium' : 'text-gray-300'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
