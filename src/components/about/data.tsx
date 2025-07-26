import React from "react";

// Types
export type ExperienceItemType = {
  title: string;
  role: string;
  period: string;
  location: string;
  description: string[];
};

export type ProjectType = {
  title: string;
  period: string;
  description: string;
  tags: string[];
};

export type EducationType = {
  school: string;
  degree: string;
  period: string;
};

export type CertificateType = {
  name: string;
  issuer: string;
};

// Personal Info
export const personalInfo = {
  name: "Nicklaus Vega",
  title: "Aspiring Entrepreneur and Tech Enthusiast",
  location: "Austin, Texas, United States",
  email: "me@nicklausvega.tech",
  website: "nicklausvega.tech",
  summary: "A dynamic computer science student and entrepreneur with over 8 years of multifaceted experience in software development and digital project management. Passionate about leveraging skillful technical acumen and creativity to deliver impactful tech solutions and drive business growth."
};

// Experience Data
export const experienceData: ExperienceItemType[] = [
  {
    title: "IronClad Consulting Services",
    role: "Bookkeeper / Information Technology Consultant",
    period: "Jun 2024 – Present",
    location: "Austin, Texas, United States",
    description: [
      "Manage full-cycle accounts payable and accounts receivable using QuickBooks and Excel, ensuring timely reconciliation and accurate reporting",
      "Reconcile bank statements and analyze cost of goods sold vs. marketing spend trends to identify budget discrepancies",
      "Build and maintain custom data infrastructure using Metabase dashboards for centralized reporting",
      "Deploy and manage SCIM bridges and SSO configurations to enhance data access security",
      "Design and implement internal tool integrations for Shopify and QuickBooks, improving workflow automation",
      "Lead onboarding/offboarding processes, ensuring consistent access control and policy compliance",
      "Migrate sensitive access data to 1Password, reducing security risks across teams"
    ]
  },
  {
    title: "Rynvo",
    role: "Founder",
    period: "Jan 2025 – Present",
    location: "Austin, Texas Metropolitan Area",
    description: [
      "Founded and operate a digital agency delivering web and brand solutions using Webflow, Shopify, React, and Nuxt.JS",
      "Manage a team of developers and designers, overseeing project lifecycles from client onboarding to deployment",
      "Handle lead generation and sales pipeline using Cloudflare, Pipedream, and CRM tools to convert opportunities into long-term clients",
      "Direct branding and design strategy, maintaining creative consistency across visual identities and digital platforms",
      "Contribute to frontend development on client projects using React and Nuxt.JS, delivering optimized and scalable interfaces"
    ]
  },
  {
    title: "Flosk Hosting",
    role: "Chief Executive Officer (CEO)",
    period: "Mar 2023 – Apr 2024",
    location: "United States",
    description: [
      "Founded and scaled a hosting company serving over 75 unique customers, generating $5,000+ in first-year revenue",
      "Designed and maintained cloud infrastructure using AWS VPS and Docker containers for 99.9% uptime",
      "Developed secure backend systems and custom APIs for user interfaces and authentication services",
      "Integrated WHMCS for client billing and support, enhancing customer experience and efficiency",
      "Implemented access control networks using Tailscale to enforce security policies",
      "Built and maintained CDN strategies using Cloudflare and BunnyCDN to enhance performance and reduce latency"
    ]
  },
  {
    title: "ActivHosting",
    role: "Information Technology Officer",
    period: "Feb 2023 – Feb 2023",
    location: "United Kingdom",
    description: [
      "Managed web infrastructure and user interface components using HTML and CSS",
      "Provided strategic input on financial and operational decisions",
      "Utilized WHMCS for support management and backend process coordination"
    ]
  },
  {
    title: "HostPul",
    role: "Company Owner",
    period: "Jan 2022 – Jul 2022",
    location: "Texas, United States",
    description: [
      "Founded a hosting startup providing affordable VPS and web hosting solutions",
      "Managed backend infrastructure using AWS and WHMCS for client support and service automation",
      "Developed web interfaces using GitHub Pages, enabling client access and onboarding",
      "Oversaw resource allocation and system monitoring to ensure uptime and satisfaction"
    ]
  },
  {
    title: "Inspirit AI",
    role: "Inspirit AI Ambassador",
    period: "Sep 2021 – Dec 2021",
    location: "Remote",
    description: [
      "Participated as an Inspirit AI Leadership Fellow in a program taught by MIT and Stanford graduates",
      "Engaged in pre-collegiate AI education, enhancing skills in artificial intelligence"
    ]
  }
];

// Education Data
export const educationData: EducationType[] = [
  {
    school: "Austin Community College",
    degree: "B.B.A., Computer Science",
    period: "August 2024 – May 2028"
  }
];

// Certificate Data
export const certificateData: CertificateType[] = [
  {
    name: "Introduction to AWS Cloud Careers",
    issuer: "AWS"
  }
];

// Skills Data
export const skillsData = [
  "Project Management",
  "Node.js",
  "React",
  "Nuxt.js",
  "Web Development",
  "Backend Development",
  "Frontend Development",
  "Docker",
  "AWS VPS",
  "Cloudflare",
  "QuickBooks",
  "CRM Tools",
  "HTML/CSS",
  "Shopify",
  "1Password",
  "Metabase",
  "SCIM",
  "SSO Configurations",
  "C#",
  "Javascript",
  "Python",
  "LUA",
  "Video Editing",
  "Graphic Design",
  "Strategic Planning"
];

// Projects Data
export const projectsData: ProjectType[] = [
  {
    title: "QR Code Generator",
    period: "January 2025 - Present",
    description: "A QR Code Generator that allows you to generate QR Codes for your business or personal use.",
    tags: ["Next.JS", "Supabase", "Resend", "Web Development"]
  }
]; 