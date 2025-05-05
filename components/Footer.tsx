import Link from "next/link";
import Image from "next/image";
import { LinkHover, TextMask } from "@/animation";
import { footerItems } from "@/constants";
import { FaPhone } from "react-icons/fa";


export default function Footer() {
  const phrase = ["*", "Pocket big", "with us."];
  const phrase1 = ["#PocketFund", ""];
  
  return (
    <footer className="w-full min-h-screen z-30 relative bg-black flex flex-col justify-between rounded-t-3xl pt-16 px-8 md:px-12 lg:px-16 mt-[-20px]">
      {/* Main Content Section */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Main Headline */}
        <div className="flex flex-col justify-between">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold font-FoundersGrotesk text-white uppercase leading-none">
            <TextMask>{phrase}</TextMask>
          </h1>
        </div>
        
        {/* Right Column - Hashtag and Links */}
        <div className="flex flex-col justify-between">
          <div>
            {/* Hashtag */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold font-FoundersGrotesk text-blue-500 uppercase leading-none">
              <TextMask>{phrase1}</TextMask>
            </h1>
            
            {/* Social Links Section */}
            <div className="mt-12">
              <h2 className="text-lg font-medium font-NeueMontreal text-white mb-4">
                Socials:
              </h2>
              <div className="flex flex-col space-y-2">
                {footerItems.map((item) => (
                  <LinkHover
                    key={item.id}
                    title={item.title}
                    href={item.href}
                    className="before:h-[1px] after:h-[1px] w-fit text-lg font-medium text-white capitalize flex flex-col before:bottom-[1px] after:bottom-[1px] hover:text-blue-500 transition-colors duration-300"
                  />
                ))}
              </div>
            </div>
            
            {/* Studio and Navigation Section */}      {/* Studio Info */}
             

            
            {/* Contact Information */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h2 className="text-lg font-medium font-NeueMontreal text-white">
                  Contact Number:
                </h2>
                <a
                  href="https://wa.me/+919820059357?text=Dear%20Dev%20Shah%2C%20I%20hope%20you%20are%20doing%20well.%20I%20am%20interested%20in%20learning%20more%20about%20your%20VC%20firm%20and%20ongoing%20projects.%20Could%20you%20please%20provide%20more%20details%20or%20let%20me%20know%20a%20suitable%20time%20to%20discuss%20further%3F%20Looking%20forward%20to%20your%20response.%20Best%20regards%2C%20Client"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-bold text-lg hover:underline transition-all duration-300 flex items-center space-x-2"
                >
                  <span>+91 98200 59357</span>
                 <FaPhone/>
                </a>
              </div>
              
              <div className="space-y-2">
                <h2 className="text-lg font-medium font-NeueMontreal text-white">
                  Email ID:
                </h2>
                <LinkHover
                  title="maildevshah15@gmail.com
"
                  href="mailto:maildevshah15@gmail.com
"
                  className="before:h-[1px] after:h-[1px] text-lg font-medium text-white before:bottom-[-3px] after:bottom-[-3px] hover:text-blue-500 transition-colors duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Text */}
      <div className="w-full py-24 border-t border-gray-800 relative z-10 mt-16">
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-semibold font-FoundersGrotesk text-white uppercase text-center leading-none tracking-tight">POCKET FUND</h1>
      </div>
      
      {/* Bottom Section - Logo and Legal */}
      <div className="w-full pt-16 pb-8 border-t border-gray-800 grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-20">
        {/* Logo with White Box */}
        <div>
          <Link href="/" className="block transition-opacity duration-300 hover:opacity-80">
            <div className="bg-white p-1 rounded-lg inline-block">
              <Image
                src="/pf.png"
                alt="pf logo"
                width={180}
                height={60}
                className="w-auto h-auto"
              />
            </div>
          </Link>
        </div>
        
        {/* Legal and Credits */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <p className="text-white opacity-40 text-sm">
              © Pocket Fund 2025.
            </p>
            <LinkHover
              title="Legal Terms"
              href="https://legislative.gov.in/legal-glossary/"
              className="before:h-[1px] after:h-[1px] text-sm text-white opacity-40 before:bottom-[-3px] after:bottom-[-3px] hover:opacity-100 transition-all duration-300"
            />
          </div>
          
          <LinkHover
            title="Website by Raghav"
            href="https://raghavkrishnaportfolio.vercel.app/"
            className="before:h-[1px] after:h-[1px] text-sm text-white opacity-40 before:bottom-[-3px] after:bottom-[-3px] hover:opacity-100 transition-all duration-300"
          />
        </div>
      </div>
    </footer>
  );
}