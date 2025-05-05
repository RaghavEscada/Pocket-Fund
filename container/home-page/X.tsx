"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const processSteps = [
  {
    id: 1,
    number: "01",
    title: "Deal Sourcing",
    description: "We discover overlooked digital businesses through proprietary tech, networks, and niche platforms."
  },
  {
    id: 2,
    number: "02",
    title: "Evaluation & Diligence",
    description: "We assess business health, financials, and growth potential using AI-driven workflows and expert insight."
  },
  {
    id: 3,
    number: "03",
    title: "Acquisition",
    description: "We negotiate and acquire high-potential SaaS, MarTech, and niche online businesses at fair, founder-friendly terms."
  },
  {
    id: 4,
    number: "04",
    title: "Operate & Scale",
    description: "We step in post-acquisition to optimize pricing, improve retention, and unlock scale through strategic execution."
  },
];

export default function HorizontalScrollProcess() {
  const targetRef = useRef(null);
  
  // This container controls the overall height of the scroll section
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform the vertical scroll into horizontal movement for first 70% of scroll
  const x = useTransform(
    scrollYProgress,
    [0, 0.7], 
    ["0%", `-${(processSteps.length - 1) * 25}%`]
  );
  
  // Then control the "unpinning" in the last 30% of the scroll
  const y = useTransform(
    scrollYProgress,
    [0.8, 1], 
    ["0vh", "-50vh"]
  );
  
  // Control opacity for the carousel when unpinning
  const carouselOpacity = useTransform(
    scrollYProgress,
    [0.78, 0.80],
    [1, 0]
  );

  return (
    <section 
      ref={targetRef} 
      className="relative h-[1800vh]" // Reduced height for smoother scrolling
    >
      {/* Sticky container that holds the process steps */}
      <motion.div 
        style={{ y, opacity: carouselOpacity }} 
        className="sticky top-0 h-screen w-full flex items-center overflow-hidden bg-gradient-to-br from-gray-900 to-black"
      >
        <div className="relative w-full h-full flex flex-col justify-center">
          {/* Title that stays fixed while scrolling horizontally */}
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 px-6">
            Our Acquisition Process
          </h2>
          
          {/* The actual horizontal scrolling container */}
          <div className="relative h-[70vh] flex items-center overflow-hidden">
            <motion.div 
              style={{ x }} 
              className="flex gap-8 px-10 absolute"
            >
              {processSteps.map((step) => (
                <div
                  key={step.id}
                  className="relative w-screen h-[50vh] flex-shrink-0 flex flex-col justify-center px-8 md:px-24"
                >
                  <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col space-y-6">
                      <div className="flex items-center space-x-4">
                        <span className="text-6xl md:text-8xl font-black text-blue-500/20">{step.number}</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-white">{step.title}</h3>
                      </div>
                      <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                      <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Progress indicator dots */}
          
        </div>
      </motion.div>
    </section>
  );
}