import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectItemType } from "./data";
import { FaLongArrowAltRight } from "react-icons/fa";

// Section Container Component
export const SectionContainer = ({ 
  children, 
  title,
  className = "" 
}: { 
  children: React.ReactNode; 
  title?: string;
  className?: string;
}) => {
  return (
    <div className={`relative z-10 w-full max-w-[85rem] px-4 mx-auto sm:px-6 lg:px-8 mb-12 ${className}`}>
      {title && <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">{title}</h2>}
      {children}
    </div>
  );
};

// Project Header Component
export const ProjectHeader = () => {
  return (
    <div className="text-center py-12">
      <Link href="/" className="inline-block mb-6 text-blue-300 hover:text-blue-200 transition-colors">
        &larr; Back to Home
      </Link>
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 glow-white animate-fade-in">
        Projects
      </h1>
      <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
        A showcase of my recent work and creative endeavors in web development, UX/UI design, and digital solutions.
      </p>
    </div>
  );
};

// Project Card Component
export const ProjectCard = ({ project }: { project: ProjectItemType }) => {
  return (
    <div className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 shadow-lg overflow-hidden hover:bg-white/10 hover:shadow-white/5 transition-all duration-300 hover:scale-[1.02] relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
      <div className="relative z-10 p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 backdrop-blur-md bg-white/10 text-zinc-200 rounded-full text-sm border border-white/10 hover:bg-white/20 hover:border-white/20 hover:text-white transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Company Info */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="h-10 w-10 relative rounded-full overflow-hidden bg-black/30 backdrop-blur-md">
            <Image 
              src={project.logo} 
              alt={`${project.companyName} logo`} 
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-xl font-bold text-white">{project.companyName}</h2>
        </div>
        
        {/* Project Details */}
        <h3 className="text-lg text-zinc-300 mb-3">{project.projectName}</h3>
        {project.description && (
          <p className="text-zinc-400 mb-4">{project.description}</p>
        )}
        
        {/* Visit Site Link */}
        {project.link && (
          <Link 
            href={project.link}
            className="mb-4 flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Site <FaLongArrowAltRight />
          </Link>
        )}
        
        {/* Project Image */}
        <div className="mt-4 rounded-lg overflow-hidden border border-white/10">
          <div className="relative w-full h-64">
            <Image 
              src={project.image} 
              alt={project.projectName} 
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Project Grid Component
export const ProjectGrid = ({ projects }: { projects: ProjectItemType[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}; 