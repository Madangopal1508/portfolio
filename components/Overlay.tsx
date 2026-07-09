"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // Section 2: 25% to 50%
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.55], [50, -50]);

  // Section 3: 60% to 90%
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.7, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.6, 0.9], [50, -50]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 h-[500vh] w-full pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center p-8">
        
        {/* Section 1 (0% scroll) */}
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex items-center justify-center text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter drop-shadow-2xl">
            Madana Reddy. <br/> <span className="text-neutral-400">Mechatronics Engineer.</span>
          </h1>
        </motion.div>

        {/* Section 2 (30% scroll) */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex items-center justify-start pl-[10%] md:pl-[15%]"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-lg drop-shadow-2xl">
            I design <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">dynamic control systems.</span>
          </h2>
        </motion.div>

        {/* Section 3 (60% scroll) */}
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex items-center justify-end pr-[10%] md:pr-[15%] text-right"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-lg drop-shadow-2xl">
            Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">software</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">mechanical engineering.</span>
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
