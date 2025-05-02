import Link from "next/link";
import Image from "next/image";
import { LinkHover, TextMask } from "@/animation";
import { footerItems } from "@/constants";


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
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M5.339 21.32l.707 2.573-2.741-.708c-1.121-.289-2.052-.854-2.799-1.6-1.401-1.401-2.172-3.267-2.172-5.252s.771-3.85 2.172-5.252c1.401-1.401 3.267-2.172 5.252-2.172s3.85.771 5.252 2.172c1.401 1.401 2.172 3.267 2.172 5.252s-.771 3.85-2.172 5.252c-.747.747-1.677 1.311-2.799 1.6l-2.741.708.879-2.573z" fill-rule="nonzero"/>
                  </svg>
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
        {/* Logo */}
        <div>
          <Link href="/" className="block transition-opacity duration-300 hover:opacity-80">
            <Image
              src="/pf.png"
              alt="pf logo"
              width={180}
              height={60}
              className="w-auto h-auto"
            />
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