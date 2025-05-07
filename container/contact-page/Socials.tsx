"use client";

import { ArrowUpRight } from "lucide-react";
import { LinkHover, TextMask } from "@/animation";
import { useEffect, useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";


export default function Socials() {
	const [rotate, setRotate] = useState(0);
	const phrase = ["SaaS", "Mobile Apps", "Content Sites", "NIche services"];
	useEffect(() => {
		window.addEventListener("mousemove", (e) => {
			let mouseX = e.clientX;
			let mouseY = e.clientY;

			let deltaX = mouseX - window.innerWidth / 2;
			let deltaY = mouseY - window.innerHeight / 2;

			var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
			setRotate(angle - 280);
		});
	}, []);
	const container = useRef(null);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});

	const mq = useTransform(scrollYProgress, [0, 1], [0, -700]);
	return (
		<section
			className="w-full min-h-screen sm:h-screen  bg-black  xm:h-screen text-white padding-y relative"
			ref={container}>
			<div className="w-full h-full flex justify-center gap-[50px] items-center flex-col">
				<div className="flex  flex-col gap-[10px] pb-[50px]">
					<h1 className="text-[277px] leading-[207px] lg:text-[230px] lg:leading-[170px] md:text-[150px] md:leading-[100px] sm:text-[74px] sm:leading-[68px] xm:text-[64px] xm:leading-[48px] text-center font-bold font-FoundersGrotesk text-secondry uppercase pointer-events-none">
						<TextMask>{phrase}</TextMask>
					</h1>
				</div>
				<div className="w-full border-t border-[#21212155] pt-[20px]">
					<div className="w-full flex sm:flex-col xm:flex-col justify-between gap-y-[20px] padding-x">
						<div className="w-[50%] sm:w-full xm:w-full">
							<h3 className="paragraph font-medium text-white font-NeueMontreal">
								Our contact
							</h3>
						</div>
						<div className="w-[50%] text-white sm:w-full xm:w-full flex sm:flex-col xm:flex-col justify-between gap-y-[20px]">
							<div>
								<h1 className="paragraph font-medium font-NeueMontreal text-white pb-[20px]">
									Studio:
								</h1>
								<div className="flex flex-col gap-y-[10px]">
									<p>Based out of Mumbai</p>
								</div>
							</div>
							<div className="flex w-fit h-fit gap-x-[5px] group">
								<div className="rounded-[50px] border-[2px] border-[#21212155] group-hover:bg-white py-[3px] px-[12px] cursor-pointer">
								<h1 className="paragraph  font-NeueMontreal text-white font-bold">
							Contact Number : 
  <a 
    href="https://wa.me/+919820059357?text=Dear%20Pocket%20Fund%20Team%2C%20I%20am%20interested%20in%20exploring%20potential%20investment%20opportunities%20for%20my%20startup.%20We're%20currently%20in%20our%20seed%20round%20and%20looking%20for%20strategic%20partners.%20Could%20we%20schedule%20a%20call%20to%20discuss%20your%20investment%20thesis%2C%20typical%20check%20size%2C%20and%20how%20my%20venture%20might%20align%20with%20your%20portfolio%3F%20I'd%20be%20happy%20to%20share%20our%20pitch%20deck%20in%20advance.%20Looking%20forward%20to%20connecting.%20Best%20regards." 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-green-600 font-bold underline"
  >
     
	 +91 98200 59357
  </a>
</h1>
								</div>
								<div className="w-[33px] flex items-center justify-center h-[33px] border-[2px] border-[#21212155] rounded-[50px] group-hover:bg-secondry transition-all duration-200 ease-in cursor-pointer sm:hidden xm:hidden">
									<p className="paragraph font-normal text-secondry group-hover:text-background">
										<ArrowUpRight
											size={24}
											strokeWidth={1.25}
										/>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<motion.div
				className="w-full absolute top-[50%] transform translate-y-[-50%] gap-[30px] flex items-center justify-center"
				style={{ y: mq }}>
				
			</motion.div>
		</section>
	);
}
