"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ProjectGrid({ projects }: { projects?: any[] }) {
  // If no projects are provided, use sample data
  const projectsToShow = projects || [
    {
      id: 1,
      title: "Brand Identity",
      src: "/api/placeholder/600/400",
      links: [
        { id: 1, title: "View Case Study", href: "/case-study/1" },
        { id: 2, title: "Visit Website", href: "#" },
      ],
    },
    {
      id: 2,
      title: "E-Commerce",
      src: "/api/placeholder/600/400",
      links: [
        { id: 1, title: "View Case Study", href: "/case-study/2" },
        { id: 2, title: "Visit Website", href: "#" },
      ],
    },
    {
      id: 3,
      title: "Mobile App",
      src: "/api/placeholder/600/400",
      links: [
        { id: 1, title: "View Case Study", href: "/case-study/3" },
      ],
    },
    {
      id: 4,
      title: "Branding",
      src: "/api/placeholder/600/400",
      links: [
        { id: 1, title: "View Case Study", href: "/case-study/4" },
        { id: 2, title: "Visit Website", href: "#" },
      ],
    },
  ];

  return (
    <section className="w-full bg-neutral-900 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projectsToShow.map((project) => (
            <div 
              key={project.id} 
              className="bg-neutral-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.src}
                  alt={`${project.title} project`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  <h3 className="text-lg font-medium text-white">{project.title}</h3>
                </div>
                
                {/* Project Links */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.links.map((link:any) => (
                    <Link
                      key={link.id}
                      href={link.href}
                      className="px-3 py-1 text-sm bg-transparent border border-white/40 rounded-full text-white hover:bg-white hover:text-black transition-colors duration-300"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="flex justify-center">
          <Link
            href="/presentation"
            className="group flex items-center gap-2 bg-neutral-800 hover:bg-white px-6 py-3 rounded-full transition-colors duration-300"
          >
            <span className="text-white group-hover:text-black uppercase font-medium">
              View all case studies
            </span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black group-hover:bg-black group-hover:text-white transition-all duration-300">
              <ArrowUpRight size={20} strokeWidth={2} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}