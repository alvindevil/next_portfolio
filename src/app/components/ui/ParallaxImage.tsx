'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export default function ParallaxImage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values for tilt
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const translateX = useMotionValue(0);
  const translateY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const { left, top, width, height } = container.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rx = ((y - height / 2) / height) * 15; // max 15deg tilt
    const ry = ((x - width / 2) / width) * -15;

    rotateX.set(rx);
    rotateY.set(ry);

    translateX.set((x - width / 2) / width * 20); // small parallax move
    translateY.set((y - height / 2) / height * 20);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    translateX.set(0);
    translateY.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full h-full cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
    >
      <motion.img
        src="/images/3dCube.png" // <-- hardcoded image
        alt="Parallax Image"
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
        className="w-full h-full object-cover rounded-xl shadow-xl"
      />
    </motion.div>
  );
}
