"use client";
import React from "react";
import { 
  SectionContainer, 
  ProjectHeader, 
  ProjectGrid 
} from "@/components/projects/components";
import { projectsData } from "@/components/projects/data";

export default function Projects() {
  return (
    <div className="overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black min-h-screen">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(100,100,100,0.15),transparent_70%)] z-0"></div>
      
      {/* Header */}
      <SectionContainer>
        <ProjectHeader />
      </SectionContainer>
      
      {/* Projects Grid */}
      <SectionContainer>
        <ProjectGrid projects={projectsData} />
      </SectionContainer>
      
      {/* Back to Top Button */}
      <SectionContainer>
        <div className="text-center">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-6 py-3 backdrop-blur-md bg-white/10 hover:bg-white/20 text-white rounded-xl border border-white/10 transition-all shadow-lg hover:shadow-white/20 duration-300 hover:scale-105 inline-block"
          >
            Back to Top
          </button>
        </div>
      </SectionContainer>
    </div>
  );
}
