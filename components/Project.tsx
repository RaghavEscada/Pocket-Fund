"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Project({ item }: { item: any }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <section className="w-full bg-neutral-900 rounded-t-lg py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Project Card */}
        <div className="mb-16">
          {/* Project Title */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-white" />
            <h2 className="text-lg font-medium uppercase text-white">
              {item.title}
            </h2>
          </div>
          
          {/* Project Image */}
          <div 
            className="relative overflow-hidden rounded-lg cursor-pointer group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Image
              src={item.src}
              alt={`${item.title} project`}
              className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            
            {/* Animated Title Overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden z-10 opacity-0 group-hover:opacity-80 transition-opacity duration-500">
              {item.title.split("").map((letter: string, i: number) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%" }}
                  animate={hovered ? { y: 0 } : { y: "100%" }}
                  transition={{
                    delay: i * 0.04,
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="text-7xl md:text-8xl font-bold inline-block uppercase text-white/90"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>
          
          {/* Project Links */}
          <div className="flex flex-wrap gap-3 mt-4">
            {item.links.map((link: any) => (
              <Link
                key={link.id}
                href={link.href}
                className="px-5 py-2 bg-transparent border border-white/40 rounded-full text-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        
        {/* View All Button */}
        <div className="flex justify-center">
          <Link
            href="/presentation"
            className="group flex items-center gap-2 bg-neutral-800 hover:bg-white px-6 py-3 rounded-full transition-colors duration-300"
          >
            <span className="text-white group-hover:text-black uppercase font-medium">
              View all case studies
            </span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black group-hover:bg-black group-hover:text-white transition-all duration-300">
              <ArrowUpRight size={20} strokeWidth={2} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}