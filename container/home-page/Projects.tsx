import { projectItem } from "@/constants";
import { Heading, ProjectCard, RoundButton, Tags } from "@/components";
import { FeaturesSectionDemo } from "@/components/ui/bentogrid";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export default function Projects() {
  return (
    <section className="w-full rounded-t-[20px]">
      <Heading
        title="Acquired Companies"
        className="padding-x padding-y pb-[50px] border-b border-[#21212155]"
      />

      <div className="w-full flex justify-between gap-y-[50px] padding-x padding-y flex-wrap">
        {projectItem.map((item) => (
          <div className="w-[49%] sm:w-full xm:w-full" key={item.id}>
            <div className="flex gap-[10px] items-center pb-[10px]">
              <span className="w-[10px] h-[10px] rounded-full bg-black" />
              <h1 className="small-text uppercase font-medium font-NeueMontreal text-secondry">
                {item.title}
              </h1>
            </div>
            <ProjectCard item={item} />
            <div className="flex items-center gap-[10px] mt-[20px] flex-wrap">
              {item.links.map((link) => (
                <Tags
                  className="hover:text-white"
                  bgcolor="#212121"
                  item={link}
                  key={link.id}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center mt-10">
        <div className="flex items-center justify-between bg-secondry cursor-pointer rounded-full group">
          <RoundButton
            href="/presentation"
            title="Pitch Your Business"
            bgcolor="#000"
            className="bg-blue-400 text-black"
            style={{ color: "#fff" }}
          />
        </div>
      </div>

    

      <div className="pt-20">
        <CanvasRevealEffectDemo />
      </div>
	    <div className="pt-20">
        <FeaturesSectionDemo />
      </div>
    </section>
  );
}

export function CanvasRevealEffectDemo() {
  return (
    <div className="py-20 flex flex-row flex-wrap items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
      <Card  title={
          <div className="text-center">
            <p className="text-xl font-semibold text-yellow-500">
              Sourcely AI
            </p>
            <p className="text-lg text-white">
              Before Acq : 500 USD MRR
            </p>
            <p className="text-lg font-bold text-white">
              After Acq : 150K USD in 6 months
            </p>
          </div>
        }  icon={<AceternityIcon />}>
        <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-black" />
      </Card>
      <Card  title={
          <div className="text-center">
            <p className="text-xl font-semibold text-yellow-500">
              Galaxy Loot
            </p>
            <p className="text-lg text-blue-200">
              Before Acq : Audience of over 50,000 across various platforms.

            </p>
            <p className="text-lg font-bold text-white">
              After Acq Aim : Aim to generate $2,500/month in revenue before exit.

            </p>
          </div>
        }  icon={<AceternityIcon />}>
        <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900" />
      </Card>
      
    </div>
  );
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string | React.ReactNode;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem]"
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
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
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
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white"
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
