"use client";

import Image from "next/image";
import { TracingBeamDemo, TimelineDemo} from "@/data/data";


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
    <section className="w-full bg-white text-gray-900 py-20 px-6 sm:px-8 lg:px-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <span className="px-4 py-1 text-xs text-blue-600 font-semibold tracking-wider uppercase border border-blue-100 rounded-full">
          Micro Private Equity
        </span>

        <h1 className="text-7xl sm:text-5xl font-bold mt-6 mb-4">
          Welcome to <span className="text-blue-600">Pocket Fund</span>
        </h1>

        <p className="text-2xl text-gray-600 max-w-xl mx-auto">
          A micro private equity firm that acquires, builds, and sells small online businesses. We focus on transparency, speed, and operational excellence.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/submit-business"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-50 transition"
          >
            Submit Your Business
          </a>
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8">
          Our Mission
        </h2>
        <div className="bg-blue-50 p-12 rounded-xl text-center shadow-lg">
          <p className="italic text-gray-700 text-lg">
            "We're on a mission to democratize online business acquisitions and empower a new generation of digital entrepreneurs through hands-on ownership, transparency, and execution."
          </p>
        </div>
      </div>

      {/* Mission Image */}
      <div className="max-w-6xl mx-auto mb-20 px-4">
        <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 rounded-lg shadow-lg">
          <Image
            src="/buis.png"
            alt="Pocket Fund"
            width={2000}
            height={1000}
            className="rounded-lg w-full h-auto"
          />
        </div>
      </div>

      {/* Investment Focus */}
      <div className="max-w-6xl mx-auto mb-20 px-4">
        <h3 className="text-5xl font-semibold text-center mb-8">
          Investment Focus
        </h3>
        <p className="text-center p-7 text-3xl">
          We're looking for opportunities priced under $100K that tackle a
          clear pain point, face minimal competition, and offer strong potential
          for automation and scalable growth.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {investmentFocus.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={320}
                className="mb-4"
              />
              <h4 className="text-blue-600 font-semibold text-lg mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What We Do */}
      <div className="max-w-6xl mx-auto my-20">
        <h3 className="text-5xl font-semibold text-center mb-8">What We Do</h3>
        <TracingBeamDemo />
      </div>

      {/* Acquisition Timeline */}
      <div className="max-w-6xl mx-auto my-20">
        <h3 className="text-5xl font-semibold text-center mb-8">
  
        </h3>
        <TimelineDemo />
      </div>

      {/* Before & After Comparison */}
   

    </section>
  );
}
