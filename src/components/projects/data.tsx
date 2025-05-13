// Project data type with proper TypeScript typing
export type ProjectItemType = {
  id: number;
  tags: string[];
  logo: string;
  companyName: string;
  projectName: string;
  description?: string;
  image: string;
  link?: string;
};

// Projects data
export const projectsData: ProjectItemType[] = [
  {
    id: 0,
    tags: ["UX/UI Design", "Nuxt.JS", "Web Development"],
    logo: "/fmg.png",
    companyName: "Facing My Giant",
    projectName: "A counseling service dedicated to helping individuals overcome personal challenges",
    description: "Designed and developed a modern, responsive website for a counseling service focused on personal growth and overcoming challenges. The site features an intuitive user interface, appointment scheduling system, and resource library.",
    image: "/fmg-web.png",
    link: "https://facingmygiant.com/"
  },
  {
    id: 1,
    tags: ["UX/UI Design", "Next.JS", "Web Development"],
    logo: "/SeniorSync-logo.png",
    companyName: "Senior Sync",
    projectName: "SeniorSync is a dedicated team of seniors committed to bridging the digital gap within our community.",
    description: "Created a digital platform that helps senior citizens navigate technology with ease. The project features accessibility-focused design, simplified user flows, and educational resources tailored to older adults.",
    image: "/SeniorSync.png"
  },
  {
    id: 2,
    tags: ["UX/UI Design", "Figma", "Web Development"],
    logo: "/rooted-logo.png",
    companyName: "Rooted Expo",
    projectName: "Rooted Expo is Texas' premier CPG trade show, dedicated to empowering local brands.",
    description: "Developed the digital presence for Texas' premier CPG trade show, connecting local brands with buyers, investors, and innovators. The platform includes exhibitor profiles, event scheduling, and networking features.",
    image: "/rooted-web.png"
  },
  {
    id: 4,
    tags: ["UX/UI Design", "Figma", "Web Development"],
    logo: "/Themrgamer-small.png",
    companyName: "E-commerce Store Concept",
    projectName: "This project aims to develop a Proof of Concept for an innovative e-commerce platform.",
    description: "Designed a concept e-commerce platform tailored to the gaming community with modern aesthetics and user experience. Features include product showcases, user reviews, and streamlined checkout process.",
    image: "/ecom-concept.png"
  },
  {
    id: 5,
    tags: ["UX/UI Design", "Web Development"],
    logo: "/Themrgamer-small.png",
    companyName: "Basic Dark Mode Chat Design",
    projectName: "This project aims to provide a simple and elegant dark mode chat design for a modern backend web application.",
    description: "Created a sleek dark mode chat interface for modern web applications, featuring real-time messaging, user status indicators, and media sharing capabilities.",
    image: "/chat-darkmode.png",
    link: "https://chat.mr-gamer.workers.dev/"
  },
  {
    id: 6,
    tags: ["UX/UI Design", "Nuxt.JS", "Web Development"],
    logo: "/werp.png",
    companyName: "West End Roleplay | GTA V Roleplay Community",
    projectName: "West End Roleplay is a GTA V Roleplay community that aims to provide a realistic and immersive roleplay",
    description: "Built a community platform for GTA V roleplay enthusiasts, featuring character profiles, community guidelines, event calendars, and server status information.",
    image: "/westendrp-web.png"
  }
]; 