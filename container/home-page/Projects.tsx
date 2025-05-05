import { projectItem } from "@/constants";
import { Heading, ProjectCard, RoundButton, Tags } from "@/components";
import { FeaturesSectionDemo } from "@/components/ui/bentogrid";
import { CompareDemo } from "@/components/compare-drag-demo";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export default function Projects() {
  // Sample data for the two demo sections
  const compareData = [
    {
      name: "Sourcely AI",
      description: "From stealth mode to scaling with over 100 global enterprise clients—powered by AI-driven sourcing tech."
    },
    {
      name: "NewsFlow Media",
      description: "A digital news platform transformed into a monetization powerhouse, growing 5x in just one year."
    }
  ];

  return (
    <section className="w-full text-blue-500 text-center rounded-t-[20px]">
      <Heading
        title="Acquired Companies"
        className="padding-x padding-y pb-[50px] text-blue-500 border-b border-[#21212155]"
      />

      <div className="w-full flex justify-between gap-y-[50px] padding-x padding-y flex-wrap">
        {projectItem.map((item) => (
          <div className="w-[49%] sm:w-full xm:w-full" key={item.id}>
            <div className="flex gap-[10px] items-center pb-[10px]">
              <span className="w-[10px] h-[10px] rounded-full bg-black" />
              <h1 className="small-text uppercase font-medium font-NeueMontreal text-secondry">
                {item.title}
              </h1>
            </div>
            <ProjectCard item={item} />
            <div className="flex items-center gap-[10px] mt-[20px] flex-wrap">
              {item.links.map((link) => (
                <Tags
                  className="hover:text-white"
                  bgcolor="#212121"
                  item={link}
                  key={link.id}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center mt-10">
        <div className="flex items-center justify-between bg-secondry cursor-pointer rounded-full group">
          <RoundButton
            href="/"
            title="Pitch Your Business"
            bgcolor="#000"
            className="bg-blue-400 text-black"
            style={{ color: "#fff" }}
          />
        </div>
      </div>

      <div className="w-full my-32 relative">
        <div className="relative">
          <h3 className="text-4xl md:text-5xl font-semibold text-center mb-16 text-blue-500">
            Scaling Stories: Before & After
          </h3>

          <div className="max-w-6xl mx-auto font-3xl space-y-28 px-4">
            {/* First CompareDemo */}
            <div
              className="relative bg-black backdrop-blur-lg border border-blue-100 rounded-3xl shadow-xl transition-all hover:scale-[1.015] duration-300 hover:shadow-2xl"
            >
              <div className="absolute -top-6 left-1/2 text-4xl transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white md:text-base px-6 py-2 rounded-full shadow-md font-semibold tracking-wide z-10">
                {compareData[0].name}
              </div>

              <div className="p-8 md:p-14 flex flex-col items-center text-center space-y-8">
                <p className="text-base md:text-lg pt-6 text-white max-w-3xl">
                  {compareData[0].description}
                </p>
                <div className="w-full flex justify-center items-center min-h-[520px] md:min-h-[580px] transform scale-[1.1]">
                  <CompareDemo />
                </div>
              </div>
            </div>

            {/* Second CompareDemo */}
            <div
              className="relative bg-black backdrop-blur-lg border border-blue-100 rounded-3xl shadow-xl transition-all hover:scale-[1.015] duration-300 hover:shadow-2xl"
            >
              <div className="absolute -top-6 left-1/2 text-4xl transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white md:text-base px-6 py-2 rounded-full shadow-md font-semibold tracking-wide z-10">
                {compareData[1].name}
              </div>

              <div className="p-8 md:p-14 flex flex-col items-center text-center space-y-8">
                <p className="text-base md:text-lg pt-6 text-white max-w-3xl">
                  {compareData[1].description}
                </p>
                <div className="w-full flex justify-center items-center min-h-[520px] md:min-h-[580px] transform scale-[1.1]">
                  <CompareDemo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20">
        <FeaturesSectionDemo />
      </div>
    </section>
  );
}