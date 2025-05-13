import React from "react";
import Link from "next/link";
import { 
  ExperienceItemType, 
  ProjectType, 
  EducationType,
  CertificateType 
} from "./data";

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
      {title && <h2 className="text-2xl font-bold text-white mb-6 text-center">{title}</h2>}
      {children}
    </div>
  );
};

// Card Container Component
export const CardContainer = ({ 
  children, 
  className = "",
  withHoverEffect = true,
  withGlow = false
}: { 
  children: React.ReactNode;
  className?: string;
  withHoverEffect?: boolean;
  withGlow?: boolean;
}) => {
  const baseClasses = "backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 shadow-lg relative";
  const hoverClasses = withHoverEffect ? "hover:bg-white/10 hover:shadow-white/5 transition-all duration-300" : "";
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {withGlow && (
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

// Experience Item Component
export const ExperienceItem = ({ item }: { item: ExperienceItemType }) => {
  return (
    <CardContainer className="p-6 group">
      <h3 className="text-xl font-bold text-white">{item.title}</h3>
      <p className="text-zinc-300 font-medium">{item.role}</p>
      <div className="flex flex-wrap justify-between mb-4">
        <p className="text-zinc-400">{item.period}</p>
        <p className="text-zinc-400">{item.location}</p>
      </div>
      <ul className="space-y-2 list-disc list-inside text-zinc-300">
        {item.description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </CardContainer>
  );
};

// Skill Tag Component
export const SkillTag = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-3 py-2 backdrop-blur-md bg-white/10 text-zinc-200 rounded-lg text-sm border border-white/10 hover:bg-white/20 hover:text-white transition-all duration-300 hover:scale-105 text-center">
      {children}
    </div>
  );
};

// Project Item Component
export const ProjectItem = ({ project }: { project: ProjectType }) => {
  return (
    <CardContainer className="p-6 group" withGlow={true}>
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-zinc-400 mb-4">{project.period}</p>
      <p className="text-zinc-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 backdrop-blur-md bg-white/10 text-zinc-200 rounded-full text-sm border border-white/10 hover:bg-white/20 hover:border-white/20 hover:text-white transition-all duration-300">
            {tag}
          </span>
        ))}
      </div>
    </CardContainer>
  );
};

// Education Item Component 
export const EducationItem = ({ education }: { education: EducationType }) => {
  return (
    <CardContainer className="p-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-gradient-to-br from-blue-500/80 to-indigo-600/80 flex-shrink-0 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{education.school}</h3>
          <p className="text-zinc-300">{education.degree}</p>
          <p className="text-zinc-400">{education.period}</p>
        </div>
      </div>
    </CardContainer>
  );
};

// Certificate Item Component
export const CertificateItem = ({ certificate }: { certificate: CertificateType }) => {
  return (
    <CardContainer className="p-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-gradient-to-br from-orange-400/80 to-red-600/80 flex-shrink-0 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{certificate.name}</h3>
          <p className="text-zinc-300">{certificate.issuer}</p>
        </div>
      </div>
    </CardContainer>
  );
};

// Personal Info Component
export const PersonalInfoCard = ({ 
  name, 
  title, 
  location, 
  email, 
  website 
}: { 
  name: string; 
  title: string; 
  location: string; 
  email: string; 
  website: string; 
}) => {
  return (
    <CardContainer className="p-6 md:p-8 group" withGlow={true}>
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-3xl font-bold text-white">
          {name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">{name}</h2>
          <p className="text-zinc-300 mb-1">{title}</p>
          <p className="text-zinc-400 mb-4">{location}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href={`mailto:${email}`} 
              className="px-4 py-2 backdrop-blur-md bg-white/10 hover:bg-white/20 text-zinc-200 rounded-lg border border-white/10 transition-all shadow-md hover:shadow-white/10 duration-300 text-sm flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {email}
            </a>
            <a 
              href={`https://${website}`} 
              className="px-4 py-2 backdrop-blur-md bg-white/10 hover:bg-white/20 text-zinc-200 rounded-lg border border-white/10 transition-all shadow-md hover:shadow-white/10 duration-300 text-sm flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              {website}
            </a>
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

// Summary Component
export const SummaryCard = ({ summary }: { summary: string }) => {
  return (
    <CardContainer className="p-6 md:p-8">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center">
        <span className="inline-block w-8 h-8 mr-2 rounded-lg bg-gradient-to-br from-blue-400/80 to-indigo-600/80 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        </span>
        Summary
      </h2>
      <p className="text-zinc-300 leading-relaxed">{summary}</p>
    </CardContainer>
  );
}; 