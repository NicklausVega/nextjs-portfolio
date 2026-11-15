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

// Personal Info (source: LinkedIn export, Profile.pdf)
export const personalInfo = {
  name: "Nicklaus Vega",
  title: "Financial Technology Lead @ IronClad | Founder @ Rynvo",
  location: "Austin, Texas, United States",
  email: "nick@nicklausvega.tech",
  website: "nicklausvega.tech",
  linkedin: "https://www.linkedin.com/in/nicklaus-vega",
  github: "https://github.com/NicklausVega",
  summary:
    "A hands-on technology leader and software engineer focused on building, securing, and improving the systems businesses rely on."
};

// Experience Data (bullets verbatim from Profile.pdf, trailing periods removed)
export const experienceData: ExperienceItemType[] = [
  {
    title: "IronClad Consulting Services",
    role: "Financial Technology Lead",
    period: "Jul 2025 – Present",
    location: "Austin, Texas, United States",
    description: [
      "Own delivery of internal tools and workflow improvements that support operations and business reporting",
      "Lead core business-systems administration, partnering with stakeholders to define requirements and ship durable solutions",
      "Maintain access governance and security controls across company platforms, aligned with policy and compliance needs",
      "Drive rollouts and process standardization (provisioning, deprovisioning, documentation, and change adoption)",
      "Improve operational resilience by reducing manual work, strengthening controls, and tightening visibility into key metrics"
    ]
  },
  {
    title: "Rynvo",
    role: "Founder",
    period: "Jan 2025 – Present",
    location: "Austin, Texas Metropolitan Area",
    description: [
      "Founded and operate a full-service U.S.-based digital agency delivering tailored web and brand solutions for small to mid-sized clients using Webflow, Shopify, React, and Nuxt.JS",
      "Manage a team of developers and designers, overseeing project lifecycles from client onboarding to deployment, ensuring timely and high-quality delivery",
      "Handle lead generation and sales pipeline using Cloudflare, Pipedream, and CRM tools to convert inbound and outbound opportunities into long-term clients",
      "Direct branding and design strategy for client-facing assets, maintaining creative consistency across visual identities and digital platforms",
      "Contributed to frontend development on client projects using React and Nuxt.JS, delivering optimized and scalable interfaces"
    ]
  },
  {
    title: "IronClad Consulting Services (earlier role)",
    role: "Bookkeeper / Information Technology Consultant",
    period: "Jun 2024 – Jun 2025",
    location: "Austin, Texas, United States",
    description: [
      "Managed full-cycle accounts payable (AP) and accounts receivable (AR) using QuickBooks, Bill.com, and Excel, ensuring timely reconciliation and accurate reporting",
      "Reconciled monthly bank statements and analyzed cost of goods sold (COGS) vs. marketing spend trends to identify budget discrepancies and strategic adjustments",
      "Built and maintained custom data infrastructure to centralize financial and operational reporting through Metabase dashboards",
      "Deployed and managed SCIM bridges, ESSO configurations, and 2FA requirements to enhance data access security and streamline platform authentication",
      "Designed and implemented internal tool integrations for Shopify and QuickBooks, improving workflow automation and data visibility",
      "Led onboarding/offboarding processes, ensuring consistent access control and compliance with internal IT policies",
      "Migrated sensitive access data from spreadsheets to 1Password, strengthening credential management and reducing security risks across teams"
    ]
  },
  {
    title: "Flosk Hosting",
    role: "Founder",
    period: "Mar 2023 – Apr 2024",
    location: "United States",
    description: [
      "Founded and scaled a high-performance hosting company serving over 75 unique customers, generating $5,000+ in revenue within the first year",
      "Designed and maintained cloud-native infrastructure using AWS VPS, Docker containers, and dedicated servers to ensure 99.9% uptime for all hosted services",
      "Developed and deployed secure, scalable backend systems and custom APIs to support user interfaces, authentication services, and client portals",
      "Integrated WHMCS for client billing, support, and service automation, improving customer experience and operational efficiency",
      "Implemented access control networks using Tailscale to enforce security policies across internal and client-facing systems",
      "Built and maintained CDN strategies using Cloudflare and BunnyCDN to enhance global performance and reduce latency",
      "Oversaw daily operations, including managed service maintenance, client success management, and developer team coordination"
    ]
  },
  {
    title: "HostPul",
    role: "Company Owner",
    period: "Jan 2022 – Jul 2022",
    location: "Texas, United States",
    description: [
      "Founded and operated a hosting startup providing affordable VPS and web hosting solutions for small business clients across the U.S.",
      "Managed backend infrastructure using AWS for server deployment and WHMCS for client support, billing, and service automation",
      "Developed and maintained responsive web interfaces using GitHub Pages and custom HTML/CSS to enable client access and onboarding",
      "Oversaw cloud resource allocation, system uptime monitoring, and issue resolution to ensure high availability and client satisfaction"
    ]
  },
  {
    title: "Inspirit AI",
    role: "Inspirit AI Ambassador",
    period: "Sep 2021 – Dec 2021",
    location: "Remote",
    description: [
      "Selected as an Inspirit AI Leadership Fellow and took part in the AI Ambassador program taught by MIT and Stanford graduates",
      "AI Scholars is a pre-collegiate AI education program"
    ]
  }
];

// Education Data
export const educationData: EducationType[] = [
  {
    school: "Austin Community College",
    degree: "Bachelor of Applied Science in Cybersecurity and Computer Science",
    period: "August 2024 – May 2028"
  },
  {
    school: "James Bowie High School, Austin",
    degree: "High school",
    period: "August 2020 – May 2024"
  }
];

// Certificate Data
export const certificateData: CertificateType[] = [
  {
    name: "Introduction to AWS Cloud Careers",
    issuer: "AWS"
  }
];

// Skills Data (LinkedIn top skills first, then tools named in the experience bullets)
export const skillsData = [
  "React.js",
  "Cybersecurity",
  "Identity and access management",
  "Platform engineering",
  "Infrastructure automation",
  "AWS VPS",
  "Docker",
  "Cloudflare",
  "BunnyCDN",
  "Tailscale",
  "SCIM",
  "ESSO",
  "2FA",
  "1Password",
  "WHMCS",
  "Pipedream",
  "Metabase",
  "QuickBooks",
  "Bill.com",
  "Excel",
  "Shopify",
  "Webflow",
  "Nuxt.js",
  "Next.js",
  "Node.js",
  "HTML/CSS",
  "Project management",
  "Graphic design"
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