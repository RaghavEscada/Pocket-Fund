import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Timeline } from "@/components/ui/timeline";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { LampContainer } from "@/components/ui/lamp";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { BackgroundGradient } from "@/components/ui/background-gradient";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge";

export function AnimatedTestimonialsDemo() {
  const testimonials = [ {
    quote:
      "Medcity International is a leading pan-India institute for IELTS, German, and language training, with expert study abroad and India services.",
    name: "Medcity International Academy",
    designation: "Education",
    src: "/b2.png",
  },
    {
      quote:
        "Soumya Shyam is a renowned celebrity makeup artist, trusted by top names across India for her signature style and flawless artistry.",
      name: "Soumya Shayam",
      designation: "Beauty Artist",
      src: "/b5.png",
    },
    {
      quote:
        "BlackOnyx International LLC recruits talent from India, Oman, and Dubai, supplying top-tier staff to leading hotels and companies in Dubai and Oman, with strong expertise in hospitality and cleaning services.",
      name: "Black Onyx",
      designation: "Recruiting Agency",
      src: "/b4.png",
    },
    {
      quote:
        "Gloria Global Ventures LLP specializes in IELTS, German, and language training, delivering focused, high-quality coaching to help students achieve global language proficiency.",
      name: "Gloria Global Ventures LLP.",
      designation: "Education",
      src: "/b1.png",
    },
    {
      quote:
        "BamBrush specializes in eco-friendly bamboo brushes, supplying sustainable solutions to resorts and exporting globally.",
      name: "Bam Brush",
      designation: "natural product",
      src: "/b3.png",
    },
    
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;

};

export function TimelineDemo() {
  const data = [
    {
      title: "Client Requirements & Discovery",
      content: (
        <div>
          <p className="text-white dark:text-white text-lg md:text-xl font-normal mb-8">
            Before crafting any strategy, we take the time to deeply understand your business, goals, and audience. Our team conducts thorough market research to align our approach with your brand identity.
          </p>
          <div className="flex justify-end gap-4">
            <Image src="/1.jpeg" alt="Discovery Phase" width={250} height={250} layout="intrinsic" />
            
          </div>
        </div>
      ),
    },
    {
      title: "Strategy & Planning",
      content: (
        <div>
          <p className="text-white dark:text-white text-lg md:text-xl font-normal mb-8">
            Our experts map out a strategic plan that includes content, branding, and tech solutions. Every decision is backed by data to ensure maximum impact.
          </p>
          <div className="flex justify-end gap-4">
            <Image src="/2.jpeg" alt="Strategy Session" width={250} height={250} layout="intrinsic" />
           
          </div>
        </div>
      ),
    },
    {
      title: "Execution & Implementation",
      content: (
        <div>
          <p className="text-white dark:text-white text-lg md:text-xl font-normal mb-4">
            Our team launches campaigns, develops websites, and executes branding strategies with precision, ensuring a seamless experience.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-xl">
              𝌞 Content Strategy & Branding
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-xl">
              🖥️ Website & Tech Development
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-xl">
              📱 Social Media & Community Management
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-xl">
              💸 Paid Marketing & Ad Campaigns
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-xl">
              📈 Performance Analytics & Optimization
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <Image src="/3.jpeg" alt="Execution Process" width={250} height={250} layout="intrinsic" />
           
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full bg-gray-900 p-8 rounded-xl">
      <Timeline data={data} />
    </div>
  );
}

export function TextHoverEffectDemo() {
  return (
    <div className="h-[40rem] flex text-9xl items-center justify-center relative">
    <div className="h-[40rem] text-4xl flex items-center justify-center absolute">
      <TextHoverEffect text="REVLIENT." />
    </div>
    <TextHoverEffect text="REVLIENT." />
  </div>


  );
};

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    "title": "Revlient",
    "link": "https://revlient.com",
    "thumbnail": "/b5.png"
  },
  {
    "title": "Revlient",
    "link": "https://revlient.com",
    "thumbnail": "/b3.png"
  },
  {
    "title": "Revlient",
    "link": "https://revlient.com",
    "thumbnail": "/b1.png"
  },
  {
    "title": "Revlient",
    "link": "https://revlient.com",
    "thumbnail": "/b4.png"
  },
  {
    "title": "Revlient",
    "link": "https://revlient.com",
    "thumbnail": "/b5.png"
  },
  {
    "title": "Revlient",
    "link": "https://revlient.com",
    "thumbnail": "/b4.png"
  },
  {
    "title": "Revlient",
    "link": "https://revlient.com",
    "thumbnail": "/revlogo.png"
  },
  {
    "title": "Revlient",
    "link": "https://revlient.com",
    "thumbnail": "/b1.png"
  },
  {
    "title": "Revlient",
    "link": "https://revlient.com",
    "thumbnail": "/b3.png"
  },
  {
    "title": "Revlient",
    "link": "https://revlient.com",
    "thumbnail": "/b1.png"
  },
  {
    "title": "Revlient",
    "link": "https://revlient.com",
    "thumbnail": "/b5.png"
  },
  {
    "title": "Revlient",
    "link": "https://revlient.com",
    "thumbnail": "/b4.png"
  },
  {
    "title": "Revlient",
    "link": "https://revlient.com",
    "thumbnail": "/b3.png"
  },
  {
    "title": "Revlient",
    "link": "https://revlient.com",
    "thumbnail": "/b5.png"
  },
  {
    "title": "Revlient",
    "link": "https://revlient.com",
    "thumbnail": "/b1.png"
  }
];

export function LampDemoCraft() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-[150px] font-medium tracking-tight text-black md:text-7xl"
      >
        WORKS<br />
      </motion.h1>
     <p>scroll to explore</p>
    </LampContainer>
  );
}

export function LampDemoServ() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-[150px] font-medium tracking-tight text-black md:text-7xl"
      >
        TASKS <br />
      </motion.h1>
     <p>scroll to explore</p>
    </LampContainer>
  );
}

export function LampDemoTeam() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-[150px] font-medium tracking-tight text-black md:text-7xl"
      >
        TEAM <br />
      </motion.h1>
     <p>scroll to explore</p>
    </LampContainer>
  );
}

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>
 
            <p className="text-xl mb-4">
  {item.title}
</p>

 
            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}
 
const dummyContent = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
          incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
          fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
          nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
          occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
          officia sint labore. Tempor consectetur excepteur ut fugiat veniam
          commodo et labore dolore commodo pariatur.
        </p>
        <p>
          Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
          veniam in commodo id reprehenderit adipisicing. Proident duis
          exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
        </p>
        <p>
          Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
          reprehenderit deserunt amet laborum consequat adipisicing officia qui
          irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
          Amet culpa officia aliquip deserunt veniam deserunt officia
          adipisicing aliquip proident officia sunt.
        </p>
      </>
    ),
    badge: "React",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function BackgroundGradientDemo() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <img
          src={`/jordans.webp`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Air Jordan 4 Retro Reimagined
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $100
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}










