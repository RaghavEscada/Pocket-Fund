"use client";

import Image from "next/image";
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

export default function About() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 text-gray-900 py-20 px-6 sm:px-8 lg:px-12 overflow-hidden">
      {/* Header - More fluid with subtle animation */}
      <div className="max-w-4xl mx-auto text-center mb-24 relative">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        
        <span className="inline-block px-4 py-1 text-xs text-blue-600 font-semibold tracking-wider uppercase bg-blue-50 rounded-full mb-4">
          Micro Private Equity
        </span>

        <h1 className="text-6xl sm:text-7xl font-bold mt-6 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Welcome to Pocket Fund
        </h1>

        

        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
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

      <div className="w-full py-12 bg-[#f8f5f0] rounded-[50px] flex justify-center items-start overflow-hidden">
  <div className="w-full transform  border-8 rounded-lg scale-[1.2] p-20 sm:scale-[1.5] md:scale-[2] lg:scale-[2.5] xl:scale-[3]">
    <MacbookScrollDemo />
  </div>
</div>


      {/* Mission - Curved design with subtle shadows */}
      <div className="max-w-3xl mx-auto mb-32 relative">
        <h2 className="text-4xl sm:text-5xl pt-10 font-semibold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600">
          Our Mission
        </h2>
        <div className="bg-white p-12 rounded-3xl text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"></div>
          <p className="italic text-gray-700 text-xl md:text-2xl leading-relaxed">
            "We're on a mission to democratize online business acquisitions and empower a new generation of digital entrepreneurs through hands-on ownership, transparency, and execution."
          </p>
        </div>
      </div>
      

      

      {/* Mission Image - Organic shape with gradient border */}
    

      {/* Investment Focus - Card layout with hover effects */}
      <div className="max-w-6xl mx-auto mb-32 px-4">
        <h3 className="text-4xl md:text-5xl font-semibold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Investment Focus
        </h3>
        <p className="text-center p-7 text-xl md:text-2xl max-w-4xl mx-auto mb-16 text-gray-700">
          We're looking for opportunities priced under $100K that tackle a
          clear pain point, face minimal competition, and offer strong potential
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {investmentFocus.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
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
                <h4 className="text-blue-600 font-semibold text-xl mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Acquisition Timeline - Full width with subtle background */}
      <div className="w-full my-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white opacity-50"></div>
        <div className="relative">
          <h3 className="text-4xl md:text-5xl font-semibold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Acquisition Timeline
          </h3>
          <div className="w-screen bg-transparent">
            <TimelineDemo />
          </div>
        </div>
      </div>

      

      {/* Before & After Comparison */}
      <div className="w-full my-32 relative">
  {/* Light gradient overlay for depth */}
  <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white opacity-50 pointer-events-none"></div>

  <div className="relative">
    <h3 className="text-7xl md:text-5xl font-NeueMontreal tracking-tight text-center mb-24 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-500 to-purple-600">
      Scaling Stories: Before & After
    </h3>

    <div className="max-w-6xl mx-auto font-3xl space-y-28 px-4">
      {[
        {
          name: "Sourcely AI",
          desc: "From stealth mode to scaling with over 100 global enterprise clients—powered by AI-driven sourcing tech.",
        },
        {
          name: "Jedi Times",
          desc: "A digital news platform transformed into a monetization powerhouse, growing 5x in just one year.",
        },
        {
          name: "QuantLeap",
          desc: "Disrupting institutional analytics—expanded from 2 to 40+ financial clients post Series A support.",
        },
        {
          name: "NeuroNest",
          desc: "Pioneering neurotech in India—scaling from 1 clinic to 70+ centers through operational excellence.",
        },
      ].map((company, index) => (
        <div
          key={index}
          className="relative bg-white/40 backdrop-blur-lg border border-blue-100 rounded-3xl shadow-xl transition-all hover:scale-[1.015] duration-300 hover:shadow-2xl"
        >
          {/* Gradient glowing top label */}
          <div className="absolute -top-6 left-1/2 text-4xl transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white  md:text-base px-6 py-2 rounded-full shadow-md font-semibold tracking-wide z-10">
            {company.name}
          </div>

          {/* Card content */}
          <div className="p-8 md:p-14 flex flex-col items-center text-center space-y-8">
            <p className="text-base md:text-lg pt-6 text-gray-800 max-w-3xl">
              {company.desc}
            </p>

            {/* Enlarged CompareDemo */}
            <div className="w-full flex justify-center items-center min-h-[520px] md:min-h-[580px] transform scale-[1.1]">
              <CompareDemo />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    </section>   
  );
}