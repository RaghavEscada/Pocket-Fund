"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {AiOutlineMail} from "react-icons/ai";

import { motion } from "framer-motion";

// Define navigation items with icons
const navItems = [
  
  {
    id: 4,
    title: "Contact",
   href:"https://wa.me/+919820059357?text=Dear%20Dev%20Shah%2C%20I%20hope%20you%20are%20doing%20well.%20I%20am%20interested%20in%20learning%20more%20about%20your%20VC%20firm%20and%20ongoing%20projects.%20Could%20you%20please%20provide%20more%20details%20or%20let%20me%20know%20a%20suitable%20time%20to%20discuss%20further%3F%20Looking%20forward%20to%20your%20response.%20Best%20regards%2C%20Client",
    icon: AiOutlineMail
  }
];

export default function MobileNav() {
  const pathname = usePathname();
  
  return (
    <>
      {/* Mobile icon navigation - only visible on small screens (mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-90 backdrop-blur-sm z-50 md:hidden">
        <div className="flex justify-around items-center h-16 px-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const IconComponent = item.icon;
            return (
              <Link
                key={item.id}
                href={item.href}
                className="flex flex-col items-center justify-center relative"
              >
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className={`flex flex-col items-center justify-center p-2 ${
                    isActive ? "text-white" : "text-gray-400"
                  }`}
                >
                  <IconComponent size={24} />
                  <span className="text-xs mt-1">{item.title}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 w-1.5 h-1.5 bg-white rounded-full"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}