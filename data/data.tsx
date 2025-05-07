import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Timeline } from "@/components/ui/timeline";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { LampContainer } from "@/components/ui/lamp";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { MacbookScroll } from "@/components/ui/macbookscroll";



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
      title: "Deal Sourcing",
      content: (
        <div className="flex items-center space-x-8 bg-gray-900 p-6 rounded-xl">
          <div className="flex-1">
            <h2 className="mb-4 text-2xl font-bold text-blue-500">
              📊 Deal Sourcing: The Heart of Business Growth 🚀
            </h2>
            
            <p className="mb-5 text-base text-white">
              The art of finding high-potential investment opportunities, acquisitions, and partnerships that drive growth.
            </p>
            
            <div className="mb-5 border-l-4 border-blue-500 pl-4">
              <h3 className="mb-3 text-xl font-medium text-blue-400">
                Why is Deal Sourcing Important? 🤔
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">💸</span>
                  <span><strong className="text-blue-300">Maximizing Returns:</strong> Identifying high-quality opportunities</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">🌐</span>
                  <span><strong className="text-blue-300">Building Networks:</strong> Expanding connections for new opportunities</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">🏦</span>
                  <span><strong className="text-blue-300">Portfolio Diversification:</strong> Sourcing across multiple sectors</span>
                </li>
              </ul>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="mb-3 text-xl font-medium text-blue-400">
                Key Steps 🔍
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">🔬</span>
                  <span><strong className="text-blue-300">Market Research:</strong> Stay updated on trends</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">🗣️</span>
                  <span><strong className="text-blue-300">Networking:</strong> Build relationships with key players</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">✅</span>
                  <span><strong className="text-blue-300">Screening:</strong> Identify the right opportunities</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">💬</span>
                  <span><strong className="text-blue-300">Negotiation:</strong> Ensure win-win deals</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <img
              src="hand.gif"
              alt="startup template"
              width={500}
              height={500}
              className="w-64 h-64 rounded-lg object-cover shadow-blue-500/50 shadow-lg"
            />
          </div>
        </div>
      ),
    },    
    {
      title: "Investment Analysis",
      content: (
        <div className="flex items-center space-x-8 bg-gray-900 p-6 rounded-xl">
          <div className="flex-1">
            <h2 className="mb-4 text-2xl font-bold text-blue-500">
              🔍 Investment Analysis: From Discovery to Decision 🎯
            </h2>
            
            <p className="mb-5 text-base text-white">
              The systematic process of evaluating potential opportunities to determine their strategic fit and financial viability.
            </p>
            
            <div className="mb-5 border-l-4 border-blue-500 pl-4">
              <h3 className="mb-3 text-xl font-medium text-blue-400">
                Why is Investment Analysis Critical? 💡
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">📈</span>
                  <span><strong className="text-blue-300">Value Assessment:</strong> Identifying true growth potential beyond surface numbers</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">🧩</span>
                  <span><strong className="text-blue-300">Strategic Alignment:</strong> Ensuring opportunities match long-term objectives</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">⚖️</span>
                  <span><strong className="text-blue-300">Risk Management:</strong> Uncovering potential challenges before commitment</span>
                </li>
              </ul>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="mb-3 text-xl font-medium text-blue-400">
                Essential Components 🔍
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">📊</span>
                  <span><strong className="text-blue-300">Financial Examination:</strong> Scrutinize performance metrics and projections</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">🏭</span>
                  <span><strong className="text-blue-300">Operational Review:</strong> Evaluate business processes and efficiencies</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">👥</span>
                  <span><strong className="text-blue-300">Leadership Assessment:</strong> Analyze management team capabilities</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">📜</span>
                  <span><strong className="text-blue-300">Legal Verification:</strong> Confirm compliance and identify liabilities</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <img
              src="st.gif"
              alt="investment analysis"
              width={500}
              height={500}
              className="w-64 h-64 rounded-lg object-cover shadow-blue-500/50 shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Integration Blueprint",
      content: (
        <div className="flex items-center space-x-8 bg-gray-900 p-6 rounded-xl">
          <div className="flex-1">
            <h2 className="mb-4 text-2xl font-bold text-blue-500">
              🤝 Integration Blueprint: Transition to Ownership 📝
            </h2>
            
            <p className="mb-5 text-base text-white">
              The comprehensive roadmap for seamlessly incorporating new acquisitions into existing business infrastructure.
            </p>
            
            <div className="mb-5 border-l-4 border-blue-500 pl-4">
              <h3 className="mb-3 text-xl font-medium text-blue-400">
                Why is Integration Planning Vital? 🌟
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">🔄</span>
                  <span><strong className="text-blue-300">Continuity Assurance:</strong> Minimizing disruption during ownership transfer</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">🤝</span>
                  <span><strong className="text-blue-300">Cultural Cohesion:</strong> Blending organizational values and practices</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">💰</span>
                  <span><strong className="text-blue-300">Synergy Capture:</strong> Realizing projected cost savings and revenue growth</span>
                </li>
              </ul>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="mb-3 text-xl font-medium text-blue-400">
                Critical Phases ⏱️
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">📝</span>
                  <span><strong className="text-blue-300">Documentation:</strong> Securing intellectual property and contractual agreements</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">👋</span>
                  <span><strong className="text-blue-300">Stakeholder Communication:</strong> Managing expectations of all parties</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">🧩</span>
                  <span><strong className="text-blue-300">System Consolidation:</strong> Unifying technology and operational frameworks</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">👥</span>
                  <span><strong className="text-blue-300">Team Alignment:</strong> Restructuring for optimal performance</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <img
              src="bp.gif"
              alt="integration blueprint"
              width={500}
              height={500}
              className="w-64 h-64 rounded-lg object-cover shadow-blue-500/50 shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Growth Acceleration",
      content: (
        <div className="flex items-center space-x-8 bg-gray-900 p-6 rounded-xl">
          <div className="flex-1">
            <h2 className="mb-4 text-2xl font-bold text-blue-500">
              🚀 Growth Acceleration: Transformation & Expansion 📈
            </h2>
            
            <p className="mb-5 text-base text-white">
              The strategic amplification of asset value through optimization, innovation, and market penetration.
            </p>
            
            <div className="mb-5 border-l-4 border-blue-500 pl-4">
              <h3 className="mb-3 text-xl font-medium text-blue-400">
                Why is Growth Acceleration Essential? 🚀
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">📊</span>
                  <span><strong className="text-blue-300">Return Maximization:</strong> Delivering superior investor outcomes</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">🌐</span>
                  <span><strong className="text-blue-300">Market Leadership:</strong> Establishing competitive advantages</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">🔄</span>
                  <span><strong className="text-blue-300">Value Creation Cycle:</strong> Generating resources for future investments</span>
                </li>
              </ul>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="mb-3 text-xl font-medium text-blue-400">
                Strategic Levers 🔧
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">💡</span>
                  <span><strong className="text-blue-300">Innovation Catalyst:</strong> Introducing new products or services</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">🌍</span>
                  <span><strong className="text-blue-300">Market Development:</strong> Expanding into untapped territories</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">⚙️</span>
                  <span><strong className="text-blue-300">Efficiency Engineering:</strong> Streamlining operations for profitability</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">🧠</span>
                  <span><strong className="text-blue-300">Talent Optimization:</strong> Cultivating high-performance teams</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <img
              src="mm.gif"
              alt="growth acceleration"
              width={500}
              height={500}
              className="w-64 h-64 rounded-lg object-cover shadow-blue-500/50 shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
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



export default function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        title={
          <span>
           We curate the finest and most innovative items at <br /> Pocket fund.
          </span>

      
        }
        badge={
          <a href="https://peerlist.io/raghavkrishna">
            <Badge className="h-10 w-10 transform -rotate-12" />
          </a>
        }
        src={`/linear.webp`}
        showGradient={false}
      />
    </div>
  )
}
// Peerlist logo
const Badge = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z"
        fill="#00AA45"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28 54C42.3594 54 54 42.3594 54 28C54 13.6406 42.3594 2 28 2C13.6406 2 2 13.6406 2 28C2 42.3594 13.6406 54 28 54ZM28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
        fill="#219653"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.0769 12H15V46H24.3846V38.8889H27.0769C34.7305 38.8889 41 32.9048 41 25.4444C41 17.984 34.7305 12 27.0769 12ZM24.3846 29.7778V21.1111H27.0769C29.6194 21.1111 31.6154 23.0864 31.6154 25.4444C31.6154 27.8024 29.6194 29.7778 27.0769 29.7778H24.3846Z"
        fill="#24292E"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 11H29.0769C36.2141 11 42 16.5716 42 23.4444C42 30.3173 36.2141 35.8889 29.0769 35.8889H25.3846V43H18V11ZM25.3846 28.7778H29.0769C32.1357 28.7778 34.6154 26.39 34.6154 23.4444C34.6154 20.4989 32.1357 18.1111 29.0769 18.1111H25.3846V28.7778Z"
        fill="white"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17 10H29.0769C36.7305 10 43 15.984 43 23.4444C43 30.9048 36.7305 36.8889 29.0769 36.8889H26.3846V44H17V10ZM19 12V42H24.3846V34.8889H29.0769C35.6978 34.8889 41 29.7298 41 23.4444C41 17.1591 35.6978 12 29.0769 12H19ZM24.3846 17.1111H29.0769C32.6521 17.1111 35.6154 19.9114 35.6154 23.4444C35.6154 26.9775 32.6521 29.7778 29.0769 29.7778H24.3846V17.1111ZM26.3846 19.1111V27.7778H29.0769C31.6194 27.7778 33.6154 25.8024 33.6154 23.4444C33.6154 21.0864 31.6194 19.1111 29.0769 19.1111H26.3846Z"
        fill="#24292E"
      ></path>
    </svg>
  )
}

