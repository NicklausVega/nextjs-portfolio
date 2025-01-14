import MainHeader from "@/components/header";
import { projects } from './data';
import Image from "next/image";
import { Badge } from "@/components/ui/badge"
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Projects',
}

export default function Projects() {
    return (
        <div className="bg-black text-white w-screen h-screen overflow-auto">
            {/* Header */}
            <MainHeader />

            <section className="flex flex-col items-center py-8">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mt-5 text-white glow-white animate-fade-in">
                    Projects
                </h1>
                
                {/* Project Cards */}
                <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 animate-fade-in">
                    {projects.map((project) => (
                        <div key={project.id} className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-[1.02]">
                            <div className="flex space-x-2 mb-4">
                                {project.tags.map((tag, index) => (
                                    <Badge key={index} variant="secondary">{tag}</Badge>
                                ))}
                            </div>
                            <div className="flex items-center space-x-2 mb-4">
                                <Image src={project.logo} alt={`${project.companyName} logo`} width={40} height={40} className="rounded-full" />
                                <h2 className="text-xl font-bold"> {project.companyName}</h2>
                            </div>
                            <h3 className="text-lg mb-4">{project.projectName}</h3>
                            {project.link && (
                                <Link className=" mb-4 flex items-center gap-2" href={project.link}>Visit Site <FaLongArrowAltRight /></Link>
                            )}
                            <div className="relative w-full h-64">
                                <Image src={project.image} alt={project.projectName} layout="fill" objectFit="cover" className="rounded-lg" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
