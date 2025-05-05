"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const images = [
  {
    id: 1,
    src: "/carousel-image-1.jpg",
    alt: "Team meeting with client",
    title: "Strategic Planning",
    description: "Crafting customized growth strategies for sustainable business development."
  },
  {
    id: 2,
    src: "/carousel-image-2.jpg",
    alt: "Business growth chart",
    title: "Growth Analysis",
    description: "Identifying untapped opportunities through comprehensive market analysis."
  },
  {
    id: 3,
    src: "/carousel-image-3.jpg",
    alt: "Digital marketing dashboard",
    title: "Digital Optimization",
    description: "Maximizing ROI through data-driven performance improvements."
  },
  {
    id: 4,
    src: "/carousel-image-4.jpg",
    alt: "Team collaboration",
    title: "Operational Excellence",
    description: "Streamlining processes for greater efficiency and profitability."
  },
];

export default function HorizontalScrollCarousel() {
  const targetRef = useRef(null);
  
  // This container controls the overall height of the scroll section
  // Increasing the height to allow more scroll distance between transitions
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Create distinct stops for each image
  // Each image gets an equal portion of the scroll progress
  const imageCount = images.length;
  
  // The progress values that trigger image transitions
  // For example, with 4 images: [0, 0.2, 0.4, 0.6, 0.8]
  const progressStops = Array.from({ length: imageCount + 1 }, (_, i) => i * (0.8 / imageCount));
  
  // The x position values corresponding to each stop
  // For example: ["0%", "-100%", "-200%", "-300%", "-400%"]
  const positionStops = progressStops.map((_, i) => `-${i * 100}%`);
  
  // Transform using the step-by-step progression
  const x = useTransform(
    scrollYProgress,
    progressStops,
    positionStops
  );
  
  // Then control the "unpinning" in the last 20% of the scroll
  const y = useTransform(
    scrollYProgress,
    [0.8, 1], // Last 20% of the scroll for vertical movement
    ["0vh", "-100vh"] // Move from 0 to -100vh (up and out of view)
  );
  
  // Control opacity for the carousel when unpinning
  const carouselOpacity = useTransform(
    scrollYProgress,
    [0.78, 0.85], // Fade out slightly before unpinning
    [1, 0]
  );
  
  // Control opacity for the "Continue scrolling" indicator
  const scrollIndicatorOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.7, 0.8], // Show at beginning, fade at end
    [1, 1, 1, 0]
  );
  
  // Control opacity for the "Scroll down to continue" prompt that appears near the end
  const continuePromptOpacity = useTransform(
    scrollYProgress,
    [0.7, 0.75, 0.9], // Show near the end, fade as we unpin
    [0, 1, 0]
  );

  return (
    <section 
      ref={targetRef} 
      className="relative h-[500vh]" // Increased height for more controlled scrolling
    >
      {/* Sticky container that holds the carousel */}
      <motion.div 
        style={{ y, opacity: carouselOpacity }} 
        className="sticky top-0 h-screen w-full flex items-center overflow-hidden bg-gradient-to-b from-white to-blue-50"
      >
        <div className="relative w-full h-full flex flex-col justify-center">
          {/* Title that stays fixed while scrolling horizontally */}
          <h3 className="text-4xl md:text-5xl font-semibold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 px-6">
            Our Process in Action
          </h3>
          
          {/* The actual horizontal scrolling container */}
          <div className="relative h-[60vh] flex items-center overflow-hidden">
            <motion.div 
              style={{ x }} 
              className="flex gap-8 px-10 absolute"
            >
              {images.map((image) => (
                <div
                  key={image.id}
                  className="relative w-screen h-[50vh] flex-shrink-0 overflow-hidden rounded-3xl shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70 z-10" />
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                    <h4 className="text-3xl font-bold mb-2">{image.title}</h4>
                    <p className="text-lg text-white/90">{image.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Scroll indicator dots - Modified to show clear active state */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center">
            <div className="flex space-x-4">
              {images.map((_, index) => {
                // Calculate which dot should be active based on scroll position
                const dotProgress = useTransform(
                  scrollYProgress,
                  [
                    index * (0.8 / imageCount),
                    (index + 1) * (0.8 / imageCount)
                  ],
                  [1, 0]
                );
                
                return (
                  <motion.div
                    key={index}
                    className="w-4 h-4 rounded-full bg-blue-600"
                    style={{
                      opacity: dotProgress,
                      scale: dotProgress.get() * 0.5 + 0.75,
                    }}
                  />
                );
              })}
            </div>
          </div>
          
          {/* Page indicator showing current image number */}
          <motion.div 
            className="absolute bottom-20 left-0 right-0 text-center text-blue-800 font-medium"
          >
            {images.map((_, index) => {
              const visibility = useTransform(
                scrollYProgress,
                [
                  index * (0.8 / imageCount),
                  (index + 0.05) * (0.8 / imageCount),
                  (index + 0.95) * (0.8 / imageCount),
                  (index + 1) * (0.8 / imageCount)
                ],
                [0, 1, 1, 0]
              );
              
              return (
                <motion.div 
                  key={index}
                  style={{ opacity: visibility }}
                  className="absolute left-0 right-0"
                >
                  Image {index + 1} of {images.length}
                </motion.div>
              );
            })}
          </motion.div>
          
          {/* "Continue scrolling" text indicator */}
          <motion.div 
            className="absolute bottom-16 left-0 right-0 text-center text-blue-600 font-medium"
            style={{ opacity: scrollIndicatorOpacity }}
          >
            Scroll slowly to view each image
          </motion.div>
        </div>
      </motion.div>
      
      {/* Prompt that appears when reaching the last image */}
      <motion.div
        className="sticky top-1/2 left-0 right-0 text-center -mt-8 z-20 pointer-events-none"
        style={{ opacity: continuePromptOpacity }}
      >
        <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg">
          <div className="flex items-center space-x-2">
            <span>Scroll down to continue</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </motion.div>
    </section>
  );
}