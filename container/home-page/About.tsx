"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TimelineDemo } from "@/data/data";
import { CompareDemo } from "@/components/compare-drag-demo";
import MacbookScrollDemo from "@/data/data";

const investmentFocus = [
  {
    id: 1,
    title: "SaaS Tools",
    description:
      "$30K–$300K in MRR, these lean, highly profitable SaaS driven by small, efficient teams.",
    image: "/saas.png",
  },
  {
    id: 2,
    title: "Mobile Applications",
    description:
      "Consumer and business applications with established user audiences.",
    image: "/ma.png",
  },
  {
    id: 3,
    title: "Content Sites",
    description:
      "Established websites with quality traffic and monetization strategies.",
    image: "/css.png",
  },
  {
    id: 4,
    title: "Niche Services",
    description:
      "Specialized digital services with loyal customer bases and growth potential.",
    image: "/nc.png",
  },
];

const investmentCriteria = [
  {
    icon: "💰",
    title: "Price",
    description: "Under $5,000",
    color: "from-green-400 to-emerald-600"
  },
  {
    icon: "🎯",
    title: "Niche Value",
    description: "Specific market value",
    color: "from-blue-400 to-indigo-600"
  },
  {
    icon: "🥇",
    title: "Competition",
    description: "Low competitive landscape",
    color: "from-purple-400 to-violet-600"
  },
  {
    icon: "📈",
    title: "Growth",
    description: "Automation & content potential",
    color: "from-orange-400 to-pink-600"
  },
  {
    icon: "⚙️",
    title: "Operations",
    description: "Simple operating structure",
    color: "from-red-400 to-rose-600"
  }
];

const timelineSteps = [
  {
    day: "Days 1-3",
    title: "Initial Evaluation",
    description: "Comprehensive analysis within 48-72 hours"
  },
  {
    day: "Days 4-14",
    title: "Deal Closing",
    description: "Complete transaction in 1-2 weeks"
  },
  {
    day: "Days 15-21",
    title: "Onboarding",
    description: "Transition within 1 week"
  }
];

export default function About() {
  return (
    <section className="w-full bg-black text-white py-20 px-6 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-24 relative">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <span className="inline-block px-4 py-1 text-xs text-blue-500 font-semibold tracking-wider uppercase bg-blue-50 rounded-full mb-4">
          Micro Private Equity
        </span>

        <h1 className="text-6xl sm:text-7xl font-bold mt-6 mb-6 bg-clip-text text-transparent bg-white">
          Welcome to <span className="italic text-blue-500"> Pocket Fund.</span>
        </h1>

        <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto leading-relaxed">
          A micro private equity firm that acquires, builds, and sells small online businesses. We focus on transparency, speed, and operational excellence.
        </p>

        <div className="mt-10">
          <a
            href="/submit-business"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full font-medium hover:shadow-lg transition-all transform hover:-translate-y-1"
          >
            Submit Your Business
          </a>
        </div>
      </div>

      <div className="w-full py-12 bg-white rounded-[50px] flex justify-center items-start overflow-hidden">
        <div className="w-full transform border-8 rounded-lg scale-[1.2] p-20 sm:scale-[1.5] md:scale-[2] lg:scale-[2.5] xl:scale-[3]">
          <MacbookScrollDemo />
        </div>
      </div>

      <div className="max-w-3xl mx-auto mb-32 relative">
        <h2 className="text-4xl sm:text-5xl pt-10 font-semibold text-center mb-12 text-blue-500">
          Our Mission
        </h2>
        <div className="bg-gray-900 p-12 rounded-3xl text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"></div>
          <p className="italic text-gray-300 text-xl md:text-2xl leading-relaxed">
            "We're on a mission to democratize online business acquisitions and empower a new generation of digital entrepreneurs through hands-on ownership, transparency, and execution."
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mb-32 px-4">
        <h3 className="text-4xl md:text-5xl font-semibold text-center mb-8 text-blue-500">
          Investment Focus
        </h3>
        <p className="text-center p-7 text-xl md:text-2xl max-w-4xl mx-auto mb-16 text-gray-300">
          We're looking for opportunities priced under $100K that tackle a clear pain point, face minimal competition, and offer strong potential
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {investmentFocus.map((item) => (
            <div
              key={item.id}
              className="group bg-gray-900 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl transform -rotate-3 scale-95 group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative p-2">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={320}
                      className="rounded-xl"
                    />
                  </div>
                </div>
                <h4 className="text-blue-500 font-semibold text-xl mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Investment Criteria - Creative Honeycomb Design */}
      <div className="max-w-6xl mx-auto mb-32 px-4">
        <h3 className="text-4xl md:text-5xl font-semibold text-center mb-8 text-blue-500">
          Basic Criteria
        </h3>
        <p className="text-center text-xl max-w-4xl mx-auto mb-16 text-gray-300">
          Our sweet spot for acquisitions meets these five key criteria
        </p>

        <div className="relative">
          {/* Background effects */}
          <div className="absolute inset-0 bg-blue-500/5 rounded-3xl filter blur-xl"></div>
          
          {/* Creative honeycomb layout */}
          <div className="relative py-12">
            {/* Central blue orb */}
            <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 rounded-full shadow-lg shadow-blue-500/10 z-0"></div>
            
            {/* Criteria display in creative layout */}
            <div className="flex flex-col items-center">
              {/* Top row - 2 items */}
              <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12 mb-8 w-full">
                {investmentCriteria.slice(0, 2).map((criterion, index) => (
                  <div 
                    key={index}
                    className="group relative w-full max-w-sm bg-gray-900/80 backdrop-blur-sm p-1 rounded-2xl overflow-hidden transform transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
                  >
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${criterion.color}`}></div>
                    <div className="relative p-6">
                      <div className="flex items-center">
                        <span className="text-5xl mr-4">{criterion.icon}</span>
                        <div>
                          <h4 className="text-blue-400 font-bold text-lg">{criterion.title}</h4>
                          <p className="text-gray-300 mt-1">{criterion.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Middle row - 1 central item */}
              <div className="flex justify-center mb-8">
                <div 
                  className="group relative w-full max-w-sm bg-gray-900/90 backdrop-blur-sm p-1 rounded-2xl overflow-hidden transform transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 z-10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-blue-600"></div>
                  <div className="relative p-6">
                    <div className="flex items-center">
                      <span className="text-5xl mr-4">{investmentCriteria[2].icon}</span>
                      <div>
                        <h4 className="text-blue-400 font-bold text-lg">{investmentCriteria[2].title}</h4>
                        <p className="text-gray-300 mt-1">{investmentCriteria[2].description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom row - 2 items */}
              <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12 w-full">
                {investmentCriteria.slice(3, 5).map((criterion, index) => (
                  <div 
                    key={index}
                    className="group relative w-full max-w-sm bg-gray-900/80 backdrop-blur-sm p-1 rounded-2xl overflow-hidden transform transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
                  >
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${criterion.color}`}></div>
                    <div className="relative p-6">
                      <div className="flex items-center">
                        <span className="text-5xl mr-4">{criterion.icon}</span>
                        <div>
                          <h4 className="text-blue-400 font-bold text-lg">{criterion.title}</h4>
                          <p className="text-gray-300 mt-1">{criterion.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Connecting lines */}
            <svg className="hidden lg:block absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <line x1="35%" y1="30%" x2="50%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" />
              <line x1="65%" y1="30%" x2="50%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" />
              <line x1="35%" y1="70%" x2="50%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" />
              <line x1="65%" y1="70%" x2="50%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </div>

      {/* Timeline Preview - Creative Dashboard Design */}
      <div className="max-w-6xl mx-auto mb-32 px-4">
        <h3 className="text-4xl md:text-5xl font-semibold text-center mb-8 text-blue-500">
          Deal Speed
        </h3>
        <p className="text-center text-xl max-w-4xl mx-auto mb-12 text-gray-300">
          We move quickly and efficiently through every step of the acquisition process
        </p>

        {/* Dashboard-inspired speed display */}
        <div className="relative bg-gray-900/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl border border-gray-800">
          {/* Top dashboard bar */}
          <div className="bg-gray-800/80 px-6 py-4 border-b border-gray-700 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-gray-400 text-sm">acquisition-process.timeline</div>
            <div className="flex items-center text-gray-400">
              <span className="text-xs bg-gray-700 px-2 py-1 rounded">RAPID</span>
            </div>
          </div>

          {/* Main content area */}
          <div className="p-8 relative">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl"></div>
            
            {/* Speed gauge - decorative */}
            <div className="mb-12 relative flex justify-center">
              <div className="relative w-48 h-24 overflow-hidden">
                <div className="absolute inset-0 bg-gray-800 rounded-t-full"></div>
                <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-blue-500/20 to-purple-500/10 rounded-t-full"></div>
                
                {/* Speed needle */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 origin-bottom rotate-[60deg] w-1 h-20 bg-gradient-to-t from-blue-400 to-blue-500 rounded-full shadow-lg z-10"></div>
                
                {/* Center point */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-lg z-20"></div>
                
                {/* Speed markers */}
                <div className="absolute bottom-2 left-4 text-xs text-gray-400">Slow</div>
                <div className="absolute bottom-2 right-4 text-xs text-gray-400">Fast</div>
              </div>
            </div>
            
            {/* Timeline steps as process blocks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {timelineSteps.map((step, index) => (
                <div 
                  key={index}
                  className="group relative bg-gray-800/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  {/* Progress indicator */}
                  <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 w-full scale-x-0 group-hover:scale-x-100 transform-gpu origin-left transition-transform duration-1000"></div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="flex justify-center items-center w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 font-bold">
                          {index + 1}
                        </div>
                        <span className="ml-3 text-blue-400 font-medium">{step.day}</span>
                      </div>
                      
                      {/* Status indicator */}
                      <div className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                        <span className="text-xs text-green-500">On Track</span>
                      </div>
                    </div>
                    
                    <h4 className="text-white font-semibold text-lg mb-3">{step.title}</h4>
                    
                    <div className="h-px w-full bg-gray-700 mb-3"></div>
                    
                    <p className="text-gray-300 text-sm">{step.description}</p>
                    
                    {/* Decorative code-like element */}
                    <div className="mt-4 text-xs font-mono text-gray-500">
                      <div>process.step({index + 1}).complete();</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full my-32 relative">
        <div className="relative">
          <h3 className="text-4xl md:text-5xl font-semibold text-center mb-16 text-blue-500">
            Acquisition Timeline
          </h3>
          <div className="w-screen bg-transparent">
            <TimelineDemo />
          </div>
        </div>
      </div>
    </section>
  );
}