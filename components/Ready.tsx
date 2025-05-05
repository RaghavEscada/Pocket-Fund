"use client";
import Link from "next/link";
import { useRef } from "react";
import { TextMask } from "@/animation";
import { ArrowUpRight } from "lucide-react";
import { Rounded } from "@/components";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Ready() {
	const container = useRef(null);
	const phrase = ["We are","Geared up", "for the next", "acquisition"];


	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});
	const mq = useTransform(scrollYProgress, [0, 1], [0, -700]);

	return (
		<section
			className="w-full text-black relative z-30 min-h-screen sm:h-screen xm:h-screen bg-secondary padding-y rounded-t-[20px] mt-[-20px]"
			ref={container}>
			<div className="w-full h-full flex justify-center gap-[50px] items-center flex-col">
				<div className="flex flex-col gap-[10px]">
					<h1 className="text-[290px] leading-[230px] lg:text-[220px] lg:leading-[170px] md:text-[180px] md:leading-[140px] sm:text-[120px] sm:leading-[90px] xm:text-[80px] xm:leading-[60px] tracking-[-2.5px] text-center font-bold font-FoundersGrotesk text-black uppercase pointer-events-none">
						<TextMask>{phrase}</TextMask>
					</h1>
				</div>
				<div className="flex flex-col  items-center gap-[10px]">
					<div className="flex items-center justify-between bg-black cursor-pointer rounded-full group">
						
					</div>
				
					<div className="flex items-center justify-between bg-transparent cursor-pointer rounded-full group border border-[#212121]">
						<Link
							className="xl:text-[18px] xl:leading-[28px] text-[14px] leading-[24px] uppercase font-normal font-NeueMontreal"
							href="https://wa.me/+919820059357?text=Dear%20Dev%20Shah%2C%20I%20hope%20you%20are%20doing%20well.%20I%20am%20interested%20in%20learning%20more%20about%20your%20VC%20firm%20and%20ongoing%20projects.%20Could%20you%20please%20provide%20more%20details%20or%20let%20me%20know%20a%20suitable%20time%20to%20discuss%20further%3F%20Looking%20forward%20to%20your%20response.%20Best%20regards%2C%20Client">
							<Rounded
								className="py-[6px]"
								backgroundColor="#212121">
								<p className="z-10 px-[10px] ml-[15px] py-[6px] group-hover:text-white text-black">
								maildevshah15@gmail.com 

								</p>
								<div className="bg-green-400 group-hover:bg-white text-black p-[10px] rounded-full scale-[0.3] mr-[10px] group-hover:scale-[0.9] transition-all z-10 transform duration-[0.3s] ease-[.215,.61,.355,1]">
									<ArrowUpRight
										strokeWidth={1.5}
										size={30}
										className="scale-[0] group-hover:scale-[1]"
									/>
								</div>
							</Rounded>
						</Link>
					</div>
				</div>
			</div>
			<motion.div
				className="w-full absolute top-[50%] transform translate-y-[-50%] gap-[30px] flex items-center justify-center"
				style={{ y : mq }}>
				
			</motion.div>
		</section>
	);
}
