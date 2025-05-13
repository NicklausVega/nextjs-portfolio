"use client";
import Link from "next/link";
import Particles from "@/components/Particles";
import React, { useEffect, useState } from "react";


function formatUTCDate(date: Date) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get components of the date
  const dayName = days[date.getUTCDay()];
  const monthName = months[date.getUTCMonth()];
  const day = date.getUTCDate().toString().padStart(2, "0");
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  const seconds = date.getUTCSeconds().toString().padStart(2, "0");
  const year = date.getUTCFullYear();

  // Construct the formatted date string
  return `${dayName} ${monthName} ${day} ${hours}:${minutes}:${seconds} UTC ${year}`;
}

const navigation = [
  { name: "Home", href: "/" },
  { name: "Rynvo (Digital Marketing)", href: "https://rynvo.media" },
  { name: "Billing Portal", href: "https://billing.nicklausvega.tech" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  // { name: "Contact", href: "/contact" },
];

 

export default function Home() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer); // Clean up the timer when the component unmounts
  }, []);
  return (
    <div className="overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black min-h-screen">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(100,100,100,0.15),transparent_70%)] z-0"></div>
      
      {/* First Section */}
      <div className="relative flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black px-4">
        {/* Mobile Navigation */}
        <div className="md:hidden fixed top-0 left-0 right-0 z-50 p-4">
          <button 
            onClick={() => setNavOpen(!navOpen)}
            className="bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/10 shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={navOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
          
          {navOpen && (
            <div className="mt-2 backdrop-blur-md bg-black/80 p-4 rounded-xl border border-white/10 shadow-xl animate-fade-in">
              <ul className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm duration-300 text-zinc-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all block"
                    onClick={() => setNavOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="my-8 sm:my-12 animate-fade-in backdrop-blur-md bg-white/5 p-4 rounded-xl border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300 hidden md:block">
          <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs sm:text-sm duration-300 text-zinc-300 hover:text-white hover:bg-white/10 px-3 py-1 rounded-lg transition-all hover:scale-105"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
        <Particles
          className="pointer-events-none absolute inset-0 z-10 animate-fade-in"
          quantity={500} /* Reduced particle count for performance */
        />
        <h1 className="z-10 text-3xl sm:text-5xl md:text-7xl lg:text-9xl text-transparent duration-10000 bg-white cursor-default text-edge-outline animate-title font-bold whitespace-nowrap bg-clip-text">
          Nicklaus Vega
        </h1>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-black"></div>
      </div>

      {/* Second Section */}
      <div className="relative z-10 w-full max-w-[85rem] px-4 py-6 mx-auto sm:px-6 lg:px-8 my-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Console Section */}
          <div className="terminal p-3 sm:p-6 rounded-xl w-full backdrop-blur-xl bg-black/60 border border-zinc-700/40 shadow-xl hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:border-blue-500/30 transition-all duration-500 group relative">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/30 to-purple-600/30 rounded-xl blur-xl opacity-60 group-hover:opacity-100 animate-pulse transition duration-500"></div>
            
            <div className="relative z-10">
              {/* Terminal header */}
              <div className="flex items-center justify-between mb-2 pb-2 border-b border-zinc-700/50">
                <div className="flex space-x-1.5 sm:space-x-2">
                  <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.7)]" />
                  <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.7)]" />
                  <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.7)]" />
                </div>
                <div className="text-[10px] sm:text-xs text-zinc-400">bash -- 80x24</div>
              </div>
              
              {/* Terminal content */}
              <div className="text-[10px] xs:text-xs sm:text-sm font-mono text-white w-full space-y-0.5 sm:space-y-1 font-medium overflow-x-auto">
                <p className="text-white">
                  Last login: {formatUTCDate(currentDate)} on ttys000
                </p>
                <p className="text-white">
                  <span className="text-green-400">nick@nicklausvega</span>:<span className="text-blue-400">~</span>$ ssh hello@nicklausvega.tech
                </p>
                <p className="text-green-300 opacity-90">
                  Welcome to Ubuntu 20.04.1 LTS (GNU/Linux 5.4.0-42-generic x86_64)
                </p>
                <p className="text-stone-300 hidden xs:block">
                  * Documentation: <span className="text-blue-300 hover:underline cursor-pointer">https://help.ubuntu.com</span>
                </p>
                <p className="text-stone-300 hidden xs:block">
                  * Management: <span className="text-blue-300 hover:underline cursor-pointer">https://landscape.canonical.com</span>
                </p>
                <p className="text-stone-300 hidden xs:block">
                  * Support: <span className="text-blue-300 hover:underline cursor-pointer">https://ubuntu.com/advantage</span>
                </p>
                <p className="text-stone-300">
                  System information as of Sun Mar 31 05:25:37 UTC 2024
                </p>
                <p className="text-white">
                  <span className="text-green-400">hello@nicklausvega.tech</span>:<span className="text-blue-400">~</span>$ ls projects/
                </p>
                <p className="text-gray-200 flex flex-wrap gap-x-3">
                  <span className="text-blue-300">rynvo-media/</span>
                  <span className="text-blue-300">flosk-hosting/</span>
                  <span className="text-blue-300">senior-sync/</span>
                  <span className="text-blue-300">rooted-expo/</span>
                  <span className="text-blue-300">portfolio/</span>
                </p>
                <p className="text-white">
                  <span className="text-green-400">hello@nicklausvega.tech</span>:<span className="text-blue-400">~</span>$ cd projects/portfolio
                </p>
                <p className="text-white">
                  <span className="text-green-400">hello@nicklausvega.tech</span>:<span className="text-blue-400">~/projects/portfolio</span>$ cat tech-stack.json
                </p>
                <div className="text-gray-200 text-[10px] xs:text-xs sm:text-sm max-w-full overflow-x-auto">
                  <pre className="whitespace-pre-wrap break-words">
                  {`{
  "frontend": ["React", "Next.js", "Nuxt.js", "HTML/CSS", "JavaScript"],
  "backend": ["Node.js", "Python", "C#"],
  "devOps": ["Docker", "AWS VPS", "Cloudflare", "SSO"],
  "design": ["Graphic Design", "UI/UX", "Figma"],
  "other": ["Project Management", "Strategic Planning"]
}`}
                  </pre>
                </div>
                <p className="text-white">
                  <span className="text-green-400">hello@nicklausvega.tech</span>:<span className="text-blue-400">~/projects/portfolio</span>$ npm run build
                </p>
                <p className="text-green-400">
                  <span className="text-yellow-300">info</span> - Creating an optimized production build...
                  <br />
                  <span className="text-yellow-300">info</span> - Compiled successfully
                  <br />
                  <span className="text-yellow-300">info</span> - Collecting page data...
                  <br />
                  <span className="text-yellow-300">info</span> - Generating static pages (8/8)
                  <br />
                  <span className="text-yellow-300">info</span> - Finalizing page optimization...
                  <br /><br className="hidden xs:block" />
                  <span className="text-white hidden xs:inline">✓</span> <span className="hidden xs:inline">Route (pages)</span> <span className="hidden xs:inline">Size</span> <span className="hidden xs:inline">First Load</span>
                  <br className="hidden xs:block" />
                  <span className="text-white hidden xs:inline">○</span> <span className="hidden xs:inline">/ </span> <span className="hidden xs:inline">85.1 kB</span> <span className="hidden xs:inline">154 kB</span>
                  <br className="hidden xs:block" />
                  <span className="text-white hidden xs:inline">○</span> <span className="hidden xs:inline">/about</span> <span className="hidden xs:inline">63.4 kB</span> <span className="hidden xs:inline">132 kB</span>
                  <br className="hidden xs:block" />
                  <span className="text-white hidden xs:inline">○</span> <span className="hidden xs:inline">/projects</span> <span className="hidden xs:inline">73.9 kB</span> <span className="hidden xs:inline">143 kB</span>
                  <br className="hidden xs:block" />
                  <span className="text-white">⚡</span> Build completed successfully!
                </p>
                <p className="text-white">
                  <span className="text-green-400">hello@nicklausvega.tech</span>:<span className="text-blue-400">~/projects/portfolio</span>$ npm run deploy
                </p>
                <p className="text-green-400">
                  {"> Deploying to production..."}
                  <br />
                  {"> Successfully deployed to https://nicklausvega.tech"}
                </p>
                <p className="text-white">
                  <span className="text-green-400">hello@nicklausvega.tech</span>:<span className="text-blue-400">~/projects/portfolio</span>$ logout
                </p>
                <p className="text-white">
                  Connection to nicklausvega.tech closed.
                </p>
                <p className="text-white">
                  <span className="text-green-400">nick@nicklausvega</span>:<span className="text-blue-400">~</span>$ <span className="animate-pulse">█</span>
                </p>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="flex flex-col items-center justify-center text-center backdrop-blur-xl bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10 shadow-lg hover:bg-white/10 hover:shadow-white/5 transition-all duration-300">
            <p className="font-normal mt-3 sm:mt-5 text-sm sm:text-base md:text-lg lg:text-2xl text-stone-50">
            I'm <strong>Nicklaus Vega</strong>, a dynamic <strong>entrepreneur</strong> and <strong>computer science student</strong> with over 8 years of multifaceted experience in software development and digital project management. Passionate about leveraging technical acumen and creativity to deliver impactful tech solutions and drive business growth.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="relative z-10 w-full max-w-[85rem] px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">Technical Skills</h2>
        
        <div className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 shadow-lg p-4 sm:p-6 md:p-8 max-w-5xl mx-auto hover:bg-white/10 hover:shadow-white/5 transition-all duration-300 relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-5 flex items-center">
                  <span className="inline-block w-6 h-6 sm:w-8 sm:h-8 mr-2 rounded-lg bg-gradient-to-br from-blue-400/80 to-indigo-600/80 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Frontend
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <SkillBar skill="React" level={90} />
                  <SkillBar skill="Nuxt.js" level={85} />
                  <SkillBar skill="HTML/CSS" level={95} />
                  <SkillBar skill="Javascript" level={92} />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-5 flex items-center">
                  <span className="inline-block w-6 h-6 sm:w-8 sm:h-8 mr-2 rounded-lg bg-gradient-to-br from-purple-400/80 to-pink-600/80 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Backend
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <SkillBar skill="Node.js" level={88} />
                  <SkillBar skill="Python" level={75} />
                  <SkillBar skill="C#" level={65} />
                  <SkillBar skill="Backend Development" level={82} />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-5 flex items-center">
                  <span className="inline-block w-6 h-6 sm:w-8 sm:h-8 mr-2 rounded-lg bg-gradient-to-br from-orange-400/80 to-red-600/80 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                    </svg>
                  </span>
                  DevOps
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <SkillBar skill="Docker" level={78} />
                  <SkillBar skill="AWS VPS" level={80} />
                  <SkillBar skill="Cloudflare" level={85} />
                  <SkillBar skill="SSO Configurations" level={75} />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-5 flex items-center">
                  <span className="inline-block w-6 h-6 sm:w-8 sm:h-8 mr-2 rounded-lg bg-gradient-to-br from-green-400/80 to-teal-600/80 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                  </span>
                  Other
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <SkillBar skill="Graphic Design" level={70} />
                  <SkillBar skill="Project Management" level={88} />
                  <SkillBar skill="Video Editing" level={65} />
                  <SkillBar skill="Strategic Planning" level={85} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="relative z-10 w-full max-w-[85rem] px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">Experience</h2>
        <div className="space-y-4 sm:space-y-8">
          <ExperienceCard 
            title="IronClad Consulting Services"
            role="Bookkeeper / IT Consultant"
            period="Jun 2024 - Present"
            description="Manage financial operations, build custom data infrastructure, and lead implementation of security systems and workflow automation tools."
          />
          <ExperienceCard 
            title="Rynvo"
            role="Founder"
            period="Jan 2025 - Present"
            description="Founded and operate a digital agency delivering web and brand solutions using Webflow, Shopify, React, and Nuxt.JS. Manage development teams and oversee project lifecycles."
          />
          <ExperienceCard 
            title="Flosk Hosting"
            role="Chief Executive Officer (CEO)"
            period="Mar 2023 - Apr 2024"
            description="Founded and scaled a hosting company serving over 75 unique customers, generating $5,000+ in first-year revenue. Designed cloud infrastructure and developed secure backend systems."
          />
        </div>
        <div className="text-center mt-6 sm:mt-8">
          <Link href="/about" className="px-4 sm:px-6 py-2 sm:py-3 backdrop-blur-md bg-white/10 hover:bg-white/20 text-white rounded-xl border border-white/10 transition-all shadow-lg hover:shadow-white/20 duration-300 hover:scale-105 text-sm sm:text-base">
            View Full Resume
          </Link>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="relative z-10 w-full max-w-[85rem] px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">Featured Project</h2>
        <div className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 shadow-lg max-w-4xl mx-auto hover:bg-white/10 hover:shadow-white/5 transition-all duration-300 relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative z-10 bg-black/10 backdrop-blur-xl rounded-xl p-4 sm:p-6 border border-white/10">
            <h3 className="text-xl sm:text-2xl font-bold text-white">Rynvo Media</h3>
            <p className="text-zinc-400 mb-2 sm:mb-4 text-sm sm:text-base">January 2025 - Present</p>
            <p className="text-zinc-300 mb-4 sm:mb-6 text-sm sm:text-base">
              Founded and operate a full-service U.S.-based digital agency delivering tailored web and brand solutions 
              for small to mid-sized clients using Webflow, Shopify, React, and Nuxt.JS. Managed a team of developers 
              and designers, overseeing project lifecycles from client onboarding to deployment, ensuring timely and 
              high-quality delivery.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 backdrop-blur-md bg-white/10 text-zinc-200 rounded-full text-xs sm:text-sm border border-white/10 hover:bg-white/20 hover:border-white/20 hover:text-white transition-all duration-300 hover:scale-105">Webflow</span>
              <span className="px-2 py-1 backdrop-blur-md bg-white/10 text-zinc-200 rounded-full text-xs sm:text-sm border border-white/10 hover:bg-white/20 hover:border-white/20 hover:text-white transition-all duration-300 hover:scale-105">Shopify</span>
              <span className="px-2 py-1 backdrop-blur-md bg-white/10 text-zinc-200 rounded-full text-xs sm:text-sm border border-white/10 hover:bg-white/20 hover:border-white/20 hover:text-white transition-all duration-300 hover:scale-105">React</span>
              <span className="px-2 py-1 backdrop-blur-md bg-white/10 text-zinc-200 rounded-full text-xs sm:text-sm border border-white/10 hover:bg-white/20 hover:border-white/20 hover:text-white transition-all duration-300 hover:scale-105">Nuxt.JS</span>
              <span className="px-2 py-1 backdrop-blur-md bg-white/10 text-zinc-200 rounded-full text-xs sm:text-sm border border-white/10 hover:bg-white/20 hover:border-white/20 hover:text-white transition-all duration-300 hover:scale-105">Web Development</span>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 sm:mt-8">
          <Link href="/projects" className="px-4 sm:px-6 py-2 sm:py-3 backdrop-blur-md bg-white/10 hover:bg-white/20 text-white rounded-xl border border-white/10 transition-all shadow-lg hover:shadow-white/20 duration-300 hover:scale-105 text-sm sm:text-base">
            View All Projects
          </Link>
        </div>
      </div>

      {/* Education Section */}
      <div className="relative z-10 w-full max-w-[85rem] px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">Education</h2>
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6">
          <div className="backdrop-blur-xl bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10 shadow-lg max-w-2xl w-full">
            <h3 className="text-lg sm:text-xl font-bold text-white">Austin Community College</h3>
            <p className="text-zinc-300 text-sm sm:text-base">B.B.A., Computer Science</p>
            <p className="text-zinc-300 text-sm sm:text-base">August 2024 – May 2028</p>
          </div>
          <div className="backdrop-blur-xl bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10 shadow-lg max-w-2xl w-full">
            <h3 className="text-lg sm:text-xl font-bold text-white">Certificates</h3>
            <p className="text-zinc-300 text-sm sm:text-base">Introduction to AWS Cloud Careers | AWS</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative z-10 w-full max-w-[85rem] px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">Contact</h2>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="backdrop-blur-xl bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10 shadow-lg max-w-md w-full hover:bg-white/10 hover:shadow-white/5 transition-all duration-300 relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative z-10 bg-black/10 backdrop-blur-xl rounded-xl p-4 sm:p-6 border border-white/10">
              <div className="mb-4">
                <h3 className="text-base sm:text-lg font-medium text-white mb-2">Location</h3>
                <p className="text-zinc-300 text-sm sm:text-base">Austin, Texas, United States</p>
              </div>
              <div className="mb-4">
                <h3 className="text-base sm:text-lg font-medium text-white mb-2">Email</h3>
                <a href="mailto:nicklaus.vega@rynvo.media" className="text-blue-300 hover:text-blue-200 hover:underline transition-colors hover:scale-105 inline-block text-sm sm:text-base">
                  nicklaus.vega@rynvo.media
                </a>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-white mb-2">Website</h3>
                <a href="https://nicklausvega.tech" className="text-blue-300 hover:text-blue-200 hover:underline transition-colors hover:scale-105 inline-block text-sm sm:text-base" target="_blank" rel="noopener noreferrer">
                  nicklausvega.tech
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}

// Skill Bar Component
const SkillBar = ({ skill, level }: { skill: string; level: number }) => {
  return (
    <div className="group">
      <div className="flex justify-between mb-1">
        <span className="text-xs sm:text-sm text-zinc-300 group-hover:text-white transition-colors duration-300">{skill}</span>
        <span className="text-xs sm:text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300">{level}%</span>
      </div>
      <div className="h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"
          style={{ width: `${level}%`, transform: 'scaleX(1)' }}
        ></div>
      </div>
    </div>
  );
};

// Experience Card Component
const ExperienceCard = ({ title, role, period, description }: { title: string; role: string; period: string; description: string }) => {
  return (
    <div className="backdrop-blur-xl bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10 shadow-lg hover:bg-white/10 hover:shadow-white/5 transition-all duration-300">
      <h3 className="text-lg sm:text-xl font-bold text-white">{title}</h3>
      <p className="text-zinc-300 font-medium text-sm sm:text-base">{role}</p>
      <p className="text-zinc-400 mb-2 sm:mb-3 text-xs sm:text-sm">{period}</p>
      <p className="text-zinc-300 text-sm sm:text-base">{description}</p>
    </div>
  );
};
