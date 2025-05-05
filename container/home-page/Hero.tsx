import { useState, useEffect } from 'react';
import { Globe } from '@/components/ui/globe';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Types for funding rounds
interface FundingRound {
  title: string;
  summary: string;
  askingPrice: string;
  rating: string;
  link: string;
}

interface AnimatedDealsProps {
  fundingRounds: FundingRound[];
  currentStep: number;
}

export default function Hero() {
  const [contentReady, setContentReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);

  // Animation data for funding rounds
  const fundingRounds: FundingRound[] = [
    {
      title: "Round A - Food Delivery SaaS",
      summary: "AI powered B2B SaaS to optimize delivery costs across platforms.",
      askingPrice: "₹15L for 10%",
      rating: "8.4/10",
      link: "https://example.com/round-a",
    },
    {
      title: "Round B - Health Tracker App",
      summary: "Wearable-integrated app tracking 50+ health vitals using ML.",
      askingPrice: "₹25L for 12%",
      rating: "9.1/10",
      link: "https://example.com/round-b",
    },
    {
      title: "Round C - Campus Town",
      summary: "Student life & academic platform integrating clubs, LMS & more.",
      askingPrice: "₹30L for 15%",
      rating: "9.6/10",
      link: "https://example.com/round-c",
    },
  ];

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Content ready after slight delay
    const contentTimer = setTimeout(() => {
      setContentReady(true);
    }, 400);

    // Animation cycle
    const animationInterval = setInterval(() => {
      setAnimationStep(prev => (prev + 1) % fundingRounds.length);
    }, 3000);

    return () => {
      clearTimeout(contentTimer);
      clearInterval(animationInterval);
      window.removeEventListener('resize', checkMobile);
    };
  }, [fundingRounds.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#f8f5f0]">
      {/* Refined gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-[#f8f5f0] via-[#f2efe6] to-[#eae6da] z-0" />

      {/* Subtle paper texture overlay for sophistication */}
      <div className="absolute inset-0 bg-[url('/subtle-paper.png')] opacity-20 z-0" />

      {/* Background gradient overlays */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#eae6da] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#eae6da] to-transparent" />

      {/* Globe with responsive positioning - desktop vs mobile */}
      <motion.div
        className={`absolute inset-0 flex ${isMobile ? 'items-center justify-center' : 'left-[475px] top-[400px] justify-center'}`}
        style={isMobile ? { top: '89%', left: '50%', transform: 'translate(-50%, -50%)' } : {}}
        initial={{ opacity: 0 }}
        animate={{ opacity: contentReady ? 0.4 : 0 }}
        transition={{ duration: 1 }}
      >
        <Globe className={`${isMobile ? 'scale-[4.99]' : 'scale-[3]'}`} />
      </motion.div>

      {/* Investment deals animation overlay */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 bg-white/80 backdrop-blur-sm border border-[#4070FF]/15 rounded-md px-5 py-4 shadow-lg"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: contentReady ? 1 : 0, x: contentReady ? 0 : 100 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <AnimatedDeals
            fundingRounds={fundingRounds}
            currentStep={animationStep}
          />
        </motion.div>
      </div>

      {/* Content with centered text - adjusted positioning */}
      <div className={`relative z-10 flex flex-col items-center justify-center h-full max-w-5xl mx-auto px-6 text-center ${isMobile ? '-mt-16' : '-mt-32'}`}>
        {/* Logo */}
        <motion.div
          className="relative h-24 w-24 mb-2 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: contentReady ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/pf.png"
            alt="Pocket Fund"
            layout="fill"
            objectFit="contain"
          />
        </motion.div>

        {/* Logo text */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: contentReady ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h2 className="text-xl md:text-2xl font-bold tracking-wide text-[#111827]">POCKET FUND</h2>
          <p className="text-sm tracking-widest text-[#374151]">Micro Private Equity Firm</p>
        </motion.div>

        {/* Elegant divider */}
        <motion.div
          className="flex items-center justify-center w-full mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: contentReady ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="h-[1px] w-12 bg-[#4070FF]/50"></div>
          <div className="mx-3">
            <div className="h-1 w-1 rounded-full bg-[#4070FF]/80"></div>
          </div>
          <div className="h-[1px] w-12 bg-[#4070FF]/50"></div>
        </motion.div>

        {/* Main headline with bold text */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#111827] leading-tight tracking-tight mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: contentReady ? 1 : 0,
            y: contentReady ? 0 : 10,
          }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          We Buy, Scale, and Sell <br />
          <span className="text-[#4070FF]">
            Businesses Under $100K
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg md:text-xl font-medium text-[#374151] max-w-2xl mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: contentReady ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          First of its kind Micro Private Equity firm.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: contentReady ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link
            href="https://wa.me/+919820059357?text=Dear%20Dev%20Shah%2C%20I%20hope%20you%20are%20doing%20well.%20I%20am%20interested%20in%20learning%20more%20about%20your%20VC%20firm%20and%20ongoing%20projects.%20Could%20you%20please%20provide%20more%20details%20or%20let%20me%20know%20a%20suitable%20time%20to%20discuss%20further%20on%20my%20company%3F%20Looking%20forward%20to%20your%20response.%20Best%20regards%2C%20Client"
            className="inline-block bg-[#4070FF] hover:bg-[#3060EB] text-white px-10 py-4 rounded-md text-base font-bold transition-colors shadow-md"
          >
            Pitch Your Business
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

// Animated Deals Component
const AnimatedDeals = ({ fundingRounds, currentStep }: AnimatedDealsProps) => {
  const currentDeal = fundingRounds[currentStep];

  return (
    <div className="flex flex-col w-60">
      <div className="text-xs uppercase tracking-wide text-[#6B7280] font-semibold mb-2">🔥 New Deal Found</div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-lg border border-[#4070FF]/20 shadow-sm px-4 py-3"
        >
          <div className="text-2xl font-bold text-[#4070FF]">{currentDeal.askingPrice}</div>
          <div className="mt-1 text-base text-[#111827] font-semibold">{currentDeal.title}</div>
          <div className="mt-1 text-sm text-[#4B5563]">{currentDeal.summary}</div>
          <div className="mt-1 text-sm text-[#9CA3AF]">Rating: {currentDeal.rating}</div>
          <Link href={currentDeal.link} className="text-[#4070FF] mt-2 text-sm hover:underline">View Deal</Link>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};