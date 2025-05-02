import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Timeline } from "@/components/ui/timeline";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { LampContainer } from "@/components/ui/lamp";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";



import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";


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
      title: "1. Source: Spot Hidden Winners",
      content: (
        <div>
          <p className="text-white dark:text-white text-lg md:text-xl font-normal mb-8">
            We actively hunt down underpriced digital assets — micro-SaaS, niche content sites, or indie tools under $5,000 — with untapped utility, lean ops, and a clear path to profitability. 
            We're not looking for noise — we're looking for signals that scream: "This can grow."
          </p>
          <div className="flex justify-end gap-4">
            <Image src="/1.jpeg" alt="Deal Sourcing" width={250} height={250} layout="intrinsic" />
          </div>
        </div>
      ),
    },
    {
      title: "2. Evaluate: Analyze Like a Machine, Decide Like a Human",
      content: (
        <div>
          <p className="text-white dark:text-white text-lg md:text-xl font-normal mb-8">
            Within 48–72 hours, we break down product stickiness, user love, monetization mechanics, traffic sources, and growth headroom. 
            We're obsessed with clarity — and only pursue assets with margin for operational alchemy and exponential return.
          </p>
          <div className="flex justify-end gap-4">
            <Image src="/2.jpeg" alt="Due Diligence" width={250} height={250} layout="intrinsic" />
          </div>
        </div>
      ),
    },
    {
      title: "3. Acquire: Move Fast. Stay Clean.",
      content: (
        <div>
          <p className="text-white dark:text-white text-lg md:text-xl font-normal mb-8">
            We present founders with clear, no-fluff offers. No slow negotiations. No red tape. Deals close in 1–2 weeks with founder-friendly terms and complete transparency.
            We're the team founders actually like selling to.
          </p>
          <div className="flex justify-end gap-4">
            <Image src="/3.jpeg" alt="Acquisition" width={250} height={250} layout="intrinsic" />
          </div>
        </div>
      ),
    },
    {
      title: "4. Operate: Rebuild. Automate. Elevate.",
      content: (
        <div>
          <p className="text-white dark:text-white text-lg md:text-xl font-normal mb-8">
            Our team dives in post-transition. We streamline ops, automate busywork, refresh the brand, and inject new life through content engines, UX tweaks, and CRO. 
            Think of it as a lean startup reboot — minus the burn.
          </p>
          <div className="flex justify-end gap-4">
            <Image src="/au.png" alt="Operations" width={250} height={250} layout="intrinsic" />
          </div>
        </div>
      ),
    },
    {
      title: "5. Exit or Scale: ROI Unlocked",
      content: (
        <div>
          <p className="text-white dark:text-white text-lg md:text-xl font-normal mb-4">
            With performance optimized, we choose one of two paths: exit for 2x–10x returns or hold and compound monthly cash flow. Either way, the asset pays back — fast and clean.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-white text-lg md:text-xl">
              🚀 Strategic Exits to Operator-VCs or Marketplaces
            </div>
            <div className="flex gap-2 items-center text-white text-lg md:text-xl">
              💸 Compound Cash Flow for Passive Yield
            </div>
            <div className="flex gap-2 items-center text-white text-lg md:text-xl">
              🔁 Capital Recycled into New Growth Bets
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <Image src="/roi.png" alt="Exit Strategy" width={250} height={250} layout="intrinsic" />
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
    <div className="h-[20rem] flex text-1xl items-center justify-center relative">
    <div className="h-[40rem] text-1xl flex items-center justify-center absolute">
      <TextHoverEffect text="POCKET FUND" />
    </div>
    <TextHoverEffect text="POCKET FUND" />
  </div>
  );
};



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
    title: "Company Acquisition Strategy: Content, Newsletter, and Niche Services-Based Businesses",
    description: (
      <>
        <p>
        We specialize in acquiring businesses valued around $100K USD, particularly those that operate in the realms of content creation, newsletters, and niche services. These businesses typically operate in focused markets with highly engaged audiences and offer specialized services or content that cater to specific needs.


        </p>
       
      </>
    ),
    badge: "Business around $100k",
    image:
    "/tr1.jpg",
  },
  {
    title: "Niche-specific value:",
    description: (
      <>
        <p>
        Niche-specific value refers to a business's unique offering tailored to meet the needs of a specific, often underserved market segment. By focusing on a well-defined niche, businesses can create highly specialized products or services that resonate with a targeted audience. This allows them to build a loyal customer base, command higher prices, and reduce competition from generalist companies. The key is to understand the niche deeply and offer value that addresses specific pain points or desires that mainstream providers might overlook.
        </p>
      </>
    ),
    badge: "Niche Services",
    image:
      "/tr3.jpg",
  },
  {
    title: "Growth potential via automation/content:",
    description: (
      <>
        <p>
        Growth potential via automation/content highlights the opportunity for a business to scale efficiently by leveraging technology and content strategies. Automation can streamline repetitive tasks, improve operational efficiency, and reduce labor costs, freeing up resources to focus on growth. Meanwhile, a strong content strategy (such as blogs, social media, videos, etc.) can drive inbound marketing, increase brand awareness, and attract a larger audience. By combining automation with content marketing, businesses can achieve sustainable growth with fewer manual efforts, increasing their long-term scalability.
        </p>
      </>
    ),
    badge: "Scale",
    image:
      "/tr4.png",
  },
  {
    title: "Simple operating structure:",
    description: (
      <>
        <p>
        A simple operating structure refers to a streamlined, efficient business model that minimizes complexity in daily operations. It involves clear and straightforward processes, fewer layers of management, and easily manageable workflows. This type of structure is ideal for businesses that want to reduce overhead, enhance communication, and adapt quickly to changes. With a simple operating structure, the business is less prone to bureaucratic inefficiencies, and the team can focus on execution and growth rather than navigating a complex organizational hierarchy.
        </p>
      </>
    ),
    badge: "Operations",
    image:
    "/tr6.png",
  },

  {
    title: "Low competition:",
    description: (
      <>
        <p>
        Low competition refers to a market environment where there are few businesses or players offering similar products or services. In such markets, companies can often operate with fewer direct competitors, giving them more room to grow and potentially capture a larger market share. A low-competition landscape often allows for pricing power, brand loyalty, and easier customer acquisition. Businesses in these markets typically benefit from less price sensitivity and the ability to establish themselves as market leaders more easily.
        </p>
      </>
    ),
    badge: "Market Competence",
    image:
    "/tr5.png",
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
        <p className="text-base sm:text-xl text-blue-500 mt-4 mb-2 dark:text-neutral-200">
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

export function CanvasRevealEffectDemo() {
  return (
    <>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card title="Sourcely AI 
        before a" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="Nishajj is Munni" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
       
      </div>
    </>
  );
}
 
const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
 
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
 
      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};
 
const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};
 
export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};


