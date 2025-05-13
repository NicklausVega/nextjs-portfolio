"use client";
import React from "react";
import Link from "next/link";
import { 
  SectionContainer,
  PersonalInfoCard,
  SummaryCard,
  ExperienceItem,
  SkillTag,
  ProjectItem,
  EducationItem,
  CertificateItem
} from "@/components/about/components";
import {
  personalInfo,
  experienceData,
  educationData,
  certificateData,
  skillsData,
  projectsData
} from "@/components/about/data";

export default function About() {
  return (
    <div className="overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black min-h-screen">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(100,100,100,0.15),transparent_70%)] z-0"></div>
      
      {/* Header */}
      <SectionContainer>
        <div className="text-center mb-12">
          <Link href="/" className="inline-block mb-6 text-blue-300 hover:text-blue-200 transition-colors">
            &larr; Back to Home
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">About Me</h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            A dynamic computer science student and entrepreneur with over 8 years of multifaceted experience in software development and digital project management.
          </p>
        </div>
      </SectionContainer>
      
      {/* Personal Info */}
      <SectionContainer>
        <PersonalInfoCard
          name={personalInfo.name}
          title={personalInfo.title}
          location={personalInfo.location}
          email={personalInfo.email}
          website={personalInfo.website}
        />
      </SectionContainer>
      
      {/* Summary */}
      <SectionContainer>
        <SummaryCard summary={personalInfo.summary} />
      </SectionContainer>
      
      {/* Experience */}
      <SectionContainer title="Work Experience">
        <div className="space-y-6 max-w-4xl mx-auto">
          {experienceData.map((experience, index) => (
            <ExperienceItem key={index} item={experience} />
          ))}
        </div>
      </SectionContainer>
      
      {/* Education */}
      <SectionContainer title="Education">
        {educationData.map((education, index) => (
          <EducationItem key={index} education={education} />
        ))}
      </SectionContainer>
      
      {/* Certificates */}
      <SectionContainer title="Certificates">
        {certificateData.map((certificate, index) => (
          <CertificateItem key={index} certificate={certificate} />
        ))}
      </SectionContainer>
      
      {/* Skills */}
      <SectionContainer title="Skills">
        <div className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 shadow-lg p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skillsData.map((skill, index) => (
              <SkillTag key={index}>{skill}</SkillTag>
            ))}
          </div>
        </div>
      </SectionContainer>
      
      {/* Projects */}
      <SectionContainer title="Notable Projects">
        {projectsData.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </SectionContainer>
      
      {/* Footer/Contact Section */}
      <SectionContainer>
        <div className="text-center">
          <Link href="/" className="px-6 py-3 backdrop-blur-md bg-white/10 hover:bg-white/20 text-white rounded-xl border border-white/10 transition-all shadow-lg hover:shadow-white/20 duration-300 hover:scale-105 inline-block">
            Back to Home
          </Link>
        </div>
      </SectionContainer>
    </div>
  );
}
