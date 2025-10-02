'use client';

import React from "react";

const sections = [
  { title: "Projects", content: Array.from({ length: 10 }).map((_, i) => `Project ${i+1}`), color: "green-400" },
  { title: "Experience", content: Array.from({ length: 8 }).map((_, i) => `Exp ${i+1}`), color: "blue-400" },
  { title: "Skills", content: Array.from({ length: 6 }).map((_, i) => `Skill ${i+1}`), color: "purple-400" },
];

export default function Page() {
  return (
    <div className="bg-black text-white min-h-screen">
      {sections.map((section, idx) => (
        <section key={idx} className="relative max-w-3xl mx-auto py-20 px-6 border-b border-gray-700">
          <h2 className={`sticky top-0 bg-black z-10 text-3xl md:text-4xl font-bold mb-6 text-${section.color} py-2`}>
            {section.title}
          </h2>
          <div className="space-y-4">
            {section.content.map((item, i) => (
              <div key={i} className="bg-gray-900/60 p-4 rounded-lg border border-gray-700">
                {item}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
