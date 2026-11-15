import {
  experienceData,
  educationData,
  certificateData,
  skillsData,
  personalInfo,
  projectsData as aboutProjects,
} from "@/components/about/data";
import { projectsData as projectSource } from "@/components/projects/data";

export const EMAIL = personalInfo.email;
export const MAILTO = `mailto:${personalInfo.email}`;
export const RYNVO_URL = "https://rynvo.media";
export const BILLING_URL = "https://billing.nicklausvega.tech";
export const LINKEDIN_URL = personalInfo.linkedin;
export const GITHUB_URL = personalInfo.github;

export type ProjectCategory = "client" | "concept" | "personal";

export type Project = {
  slug: string;
  name: string;
  type: string;
  status: "Client work" | "Community" | "Concept" | "Personal project";
  category: ProjectCategory;
  stack: string[];
  image: string;
  imageAlt: string;
  logo?: string;
  logoAlt?: string;
  lede: string;
  description: string;
  link?: string;
  linkLabel?: string;
};

const source = (id: number) => {
  const item = projectSource.find((p) => p.id === id);
  if (!item) throw new Error(`Missing project ${id}`);
  return item;
};

// QR Code Generator facts live in the About data (projectsData there).
const qr = aboutProjects.find((p) => p.title === "QR Code Generator")!;

export const projects: Project[] = [
  {
    slug: "facing-my-giant",
    name: "Facing My Giant",
    type: "Counseling website",
    status: "Client work",
    category: "client",
    stack: ["UX/UI design", "Nuxt.js"],
    image: "/fmg-web.png",
    imageAlt: "Facing My Giant counseling website homepage",
    logo: "/fmg.png",
    logoAlt: "Facing My Giant logo",
    lede: source(0).projectName,
    description: source(0).description ?? "",
    link: source(0).link,
    linkLabel: "Visit facingmygiant.com",
  },
  {
    slug: "senior-sync",
    name: "Senior Sync",
    type: "Digital inclusion platform",
    status: "Client work",
    category: "client",
    stack: ["UX/UI design", "Next.js"],
    image: "/SeniorSync.png",
    imageAlt: "Senior Sync website homepage",
    logo: "/SeniorSync-logo.png",
    logoAlt: "Senior Sync logo",
    lede: source(1).projectName,
    description: source(1).description ?? "",
  },
  {
    slug: "rooted-expo",
    name: "Rooted Expo",
    type: "Trade show website",
    status: "Client work",
    category: "client",
    stack: ["UX/UI design", "Figma"],
    image: "/rooted-web.png",
    imageAlt: "Rooted Expo website homepage",
    logo: "/rooted-logo.png",
    logoAlt: "Rooted Expo logo",
    lede: source(2).projectName,
    description: source(2).description ?? "",
  },
  {
    slug: "west-end-roleplay",
    name: "West End Roleplay",
    type: "GTA V roleplay community site",
    status: "Community",
    category: "client",
    stack: ["UX/UI design", "Nuxt.js"],
    image: "/westendrp-web.png",
    imageAlt: "West End Roleplay community website homepage",
    logo: "/assets/werp-logo.png",
    logoAlt: "West End Roleplay logo",
    lede: source(6).projectName,
    description: source(6).description ?? "",
  },
  {
    slug: "gaming-store-concept",
    name: "Gaming store",
    type: "E-commerce design study in Figma",
    status: "Concept",
    category: "concept",
    stack: ["UX/UI design", "Figma"],
    image: "/ecom-concept.png",
    imageAlt: "Gaming store e-commerce concept design",
    logo: "/assets/themrgamer-logo.png",
    logoAlt: "Mr Gamer logo",
    lede: source(4).projectName,
    description: source(4).description ?? "",
  },
  {
    slug: "dark-mode-chat-concept",
    name: "Dark mode chat",
    type: "Chat interface for a web app",
    status: "Concept",
    category: "concept",
    stack: ["UX/UI design", "Web development"],
    image: "/chat-darkmode.png",
    imageAlt: "Dark mode chat interface concept",
    logo: "/assets/themrgamer-logo.png",
    logoAlt: "Mr Gamer logo",
    lede: source(5).projectName,
    description: source(5).description ?? "",
    link: source(5).link,
    linkLabel: "Open the chat demo",
  },
  {
    slug: "qr-code-generator",
    name: "QR Code Generator",
    type: "Personal project",
    status: "Personal project",
    category: "personal",
    stack: ["Next.js", "Supabase", "Resend"],
    image: "/assets/qrcodegen-cover.webp",
    imageAlt: "QR Code Generator project banner",
    lede: "January 2025 to present.",
    description: qr.description,
    link: "https://www.qrcodegenerator.lol/",
    linkLabel: "Visit qrcodegenerator.lol",
  },
  {
    slug: "mr-gamer",
    name: "Mr.Gamer",
    type: "Personal brand site",
    status: "Personal project",
    category: "personal",
    stack: ["Next.js", "Web development"],
    image: "/assets/mrgamer-web.png",
    imageAlt: "Mr.Gamer website homepage with the headline The scripts. The cinematics.",
    logo: "/assets/themrgamer-logo.png",
    logoAlt: "Mr Gamer logo",
    lede: "The home of my Mr.Gamer brand.",
    description:
      "A site for my GTA 5, FiveM and LSPDFR work: in-engine cinematics, free script releases like MoveThatPed and dotMenu, and links to the YouTube channel and Discord.",
    link: "https://mrgamer.xyz/",
    linkLabel: "Visit mrgamer.xyz",
  },
  {
    slug: "mr-gamer-store",
    name: "Mr.Gamer Store",
    type: "Personal brand storefront",
    status: "Personal project",
    category: "personal",
    stack: ["Next.js", "Web development"],
    image: "/assets/mrgamer-store-web.png",
    imageAlt: "Mr.Gamer Store homepage with the headline The drops live here.",
    logo: "/assets/themrgamer-logo.png",
    logoAlt: "Mr Gamer logo",
    lede: "The official Mr.Gamer storefront.",
    description:
      "A store for FiveM and LSPDFR script licenses and cinematic tools. Keys and downloads are issued the moment payment clears and stay in the buyer's account.",
    link: "https://store.mrgamer.xyz/",
    linkLabel: "Visit store.mrgamer.xyz",
  },
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);

const ROLE_LABELS: Record<string, { role: string; key: string; start: number; company?: string }> = {
  "IronClad Consulting Services": { role: "Financial Technology Lead", key: "ironclad-lead", start: 202507 },
  Rynvo: { role: "Founder", key: "rynvo", start: 202501 },
  "IronClad Consulting Services (earlier role)": {
    role: "Bookkeeper and IT consultant",
    key: "ironclad-consultant",
    start: 202406,
    company: "IronClad Consulting Services",
  },
  "Flosk Hosting": { role: "Founder", key: "flosk", start: 202303 },
  HostPul: { role: "Company owner", key: "hostpul", start: 202201 },
  "Inspirit AI": { role: "Ambassador", key: "inspirit", start: 202109 },
};

const normalizePeriod = (period: string) => {
  const [from, to] = period.split("–").map((s) => s.trim());
  if (!to) return from;
  if (from === to) return from;
  return `${from} to ${to.toLowerCase() === "present" ? "present" : to}`;
};

export const timeline = experienceData
  .map((item) => {
    const meta = ROLE_LABELS[item.title];
    return {
      key: meta?.key ?? item.title,
      company: meta?.company ?? item.title,
      role: meta?.role ?? item.role,
      period: normalizePeriod(item.period),
      location: item.location,
      bullets: item.description,
      start: meta?.start ?? 0,
    };
  })
  .sort((a, b) => b.start - a.start);

export const education = educationData[0];
export const highSchool = educationData[1];
export const certificate = certificateData[0];
export const skills = skillsData;
