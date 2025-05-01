"use client";

import {
  Briefcase,
  Building,
  ChevronRight,
  DollarSign,
} from "lucide-react";
import { TracingBeamDemo } from "@/data/data";
import { BackgroundGradientDemo } from "@/data/data";
import Image from "next/image";

const colors = {
  blue: "#0077FF",
  darkBlue: "#0056cc",
  gray: "#64748B",
};

const investmentFocus = [
  {
    id: 1,
    title: "SaaS Tools",
    description: "Digital tools with recurring revenue models and scalable user bases.",
    image: "/icons/saas.png", // Replace with actual path
  },
  {
    id: 2,
    title: "Mobile Applications",
    description: "Consumer and business applications with established user audiences.",
    image: "/icons/mobile.png",
  },
  {
    id: 3,
    title: "Content Sites",
    description: "Established websites with quality traffic and monetization strategies.",
    image: "/icons/content.png",
  },
  {
    id: 4,
    title: "Niche Services",
    description: "Specialized digital services with loyal customer bases and growth potential.",
    image: "/icons/service.png",
  },
];

export default function About() {
  return (
    <section className="w-full bg-white text-gray-900 py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <span className="px-4 py-1 text-xs text-blue-600 font-semibold tracking-wider uppercase border border-blue-100 rounded-full">
          Micro Private Equity
        </span>

        <h1 className="text-4xl sm:text-5xl font-bold mt-6 mb-4">
          Welcome to <span className="text-blue-600">Pocket Fund</span>
        </h1>

        <p className="text-base text-gray-600 max-w-xl mx-auto">
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

      {/* Company Overview */}
      <div className="max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8">Our Mission</h2>
        <div className="bg-blue-50 p-12 rounded-xl text-center shadow-lg max-w-3xl mx-auto">
          <p className="italic text-gray-700 text-lg">
            "We're on a mission to democratize online business acquisitions and empower a new generation of digital entrepreneurs through hands-on ownership, transparency, and execution."
          </p>
        </div>
      </div>

      {/* Image Below Mission */}
      <div className="max-w-6xl mx-auto mb-20 px-4">
  <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 rounded-lg shadow-lg">
    <Image
      src="/buis.png"
      alt="Pocket Fund"
      width={2000}
      height={1000}
      layout="intrinsic" // Maintains the aspect ratio of the image
      objectFit="contain" // Ensures the image is fully visible
      className="rounded-lg w-full h-auto"
    />
  </div>
</div>

      {/* Investment Focus */}
      <div className="max-w-6xl mx-auto mb-20 px-4">
  <h3 className="text-2xl font-semibold text-center mb-8">Investment Focus</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {investmentFocus.map((item) => (
      <div
        key={item.id}
        className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
      >
        <Image
          src={item.image}
          alt={item.title}
          width={60}
          height={60}
          className="mb-4"
        />
        <h4 className="text-blue-600 font-semibold text-lg mb-2">{item.title}</h4>
        <p className="text-gray-600 text-sm">{item.description}</p>
      </div>
    ))}
  </div>
</div>

      {/* What We Do */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold text-center mb-8">What We Do</h3>
        
         <TracingBeamDemo/>
       
      </div>

    </section>
  );
}
