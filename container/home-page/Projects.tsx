import { Heading } from "@/components";
import { FeaturesSectionDemo } from "@/components/ui/bentogrid";
import { CompareDemo } from "@/components/compare-drag-demo";
import { motion } from "framer-motion";
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

  // Sample data for acquired companies
  const acquiredCompanies = [
    {
      name: "Sourcely AI",
      image: "/sourcely.png",
      description: "Sourcely is your AI-powered academic search assistant, offering access to over 200 million papers and advanced search filters. It streamlines research by finding credible sources, summarizing them, and exporting citations instantly—helping you save time and improve quality.",
      acquisitionCost: "$4,000",
      year: 2023,
      website: "sourcely.net",
      businessType: "SaaS"
    },
    {
      name: "Jobless",
      image: "/jobless.png",
      description: "Your go-to source for tech jobs, tips, and real stories from builders, hackers, and doers.",
      acquisitionCost: "$12,500",
      year: 2021,
      website: "joblessnews.beehiiv.com",
      businessType: "Newsletter"
    },
    {
      name: "Ana - AI language tutor",
      image: "/ana.png",
      description: "Personalized AI language tutor to practice languages ​​conversationally, receive feedback on your mistakes and improve speaking fluency on WhatsApp.",
      acquisitionCost: "$5,000",
      year: 2024,
      website: "anatutor.com",
      businessType: "WhatsApp Bot"
    },
    {
      name: "The Empire Exchange",
      image: "/jt.jpeg",
      description: "Your bi-weekly dose of all of the best loot from a galaxy far, far away sent straight to your inbox.",
      acquisitionCost: "$3,000",
      year: 2022,
      website: "jeditimes.com",
      businessType: "Newsletter"
    },
    {
      name: "Daily Wisdom",
      image: "/dw.png",
      description: "Newsletter with Quotes that feel like candy for your brain.",
      acquisitionCost: "$5,000",
      year: 2024,
      website: "dailywisdom.so",
      businessType: "Newsletter"
    },
    {
      name: "UCAS Statement Generator",
      image: "/ucas.png",
      description: "Statement Generator SaaS",
      acquisitionCost: "$3,500",
      year: 2024,
      website: "ucasstatementgenerator.com",
      businessType: "SaaS"
    },
  ];

  return (
    <section className="w-full text-blue-500 text-center rounded-t-[20px]">
      <Heading
        title="Acquired Companies"
        className="padding-x padding-y pb-[50px] text-blue-500 border-b border-[#21212155]"
      />

      {/* Acquired Companies Grid */}
      <div className="w-full py-20 px-4 md:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          
          
          <div className="grid grid-cols-2 gap-8">
            {acquiredCompanies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900 to-black border border-blue-500/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative">
                  <img 
                    src={company.image} 
                    alt={company.name} 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-2 rounded-bl-lg font-bold text-lg">
                    {company.acquisitionCost}
                  </div>
                  <div className={`absolute bottom-0 left-0 ${
                    company.businessType === "SaaS" ? "bg-blue-500/80" : 
                    company.businessType === "Newsletter" ? "bg-purple-500/80" : 
                    "bg-green-500/80"
                  } backdrop-blur-sm text-white px-3 py-1 rounded-tr-lg font-medium text-sm`}>
                    {company.businessType}
                  </div>
                </div>
                
                <div className="p-6 text-left">
                  <h4 className="text-2xl font-bold text-white mb-2">{company.name}</h4>
                  <p className="text-gray-300 mb-4">{company.description}</p>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                    </svg>
                    <a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                      {company.website}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
           
          </div>
        </div>
      </div>

      <div className="pt-20">
        <FeaturesSectionDemo />
      </div>
    </section>
  );
}