"use client";

import { use } from "react";
import { projects } from "@/lib/projects";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub, FaArrowLeft } from "react-icons/fa";
import { getSkillIcon } from "@/lib/skillUtils";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProjectDetailPage({
    params
}: {
    params: Promise<{ id: string }>;  
}) {
    const { id } = use(params);  

    const [project, setProject] = useState<typeof projects[0] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        function findProject() {
            const foundProject = projects.find(p => p.id === id);
            setProject(foundProject || null);
            setLoading(false);
        }

        findProject();
    }, [id]);

    if (loading) {
        return (
            <div className="container mx-auto px-6 py-24 text-center">
                <h1 className="text-4xl font-bold text-white mb-4">Loading Project...</h1>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="container mx-auto px-6 py-24 text-center min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-white mb-4 text-center">Project Not Found</h1>
                <Link href="/projects" className="text-blue-400 hover:text-blue-300">
                    Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <main className="relative min-h-screen">
            <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>

            <div className="relative container mx-auto max-w-4xl px-6 pt-24 pb-8">
                <Link 
                    href="/projects" 
                    className="
                        inline-flex items-center gap-2 
                        text-gray-400 hover:text-gray-800 
                        dark:text-gray-300 dark:hover:text-white
                        mb-6 text-sm
                        transition-colors duration-300
                    "
                >
                    <FaArrowLeft /> Back to Projects
                </Link>

                <div className="rounded-xl bg-[#141313] overflow-hidden shadow-lg border border-gray-200 dark:border-[#2E2E2E] flex flex-col">
                    <div className="relative group">
                        <Image
                            src={project.image!}
                            alt={project.title}
                            width={1200}
                            height={400}
                            className="w-full h-[400px] object-cover group-hover:brightness-90 transition-all duration-300 z-10"
                        />
                        
                        <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/60 flex items-end p-6">
                            <h1 className="text-3xl font-bold text-[#ffffff] ">{project.title}</h1>
                        </div>
                    </div>

                    <div className="p-6 border-t border-gray-200">
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold mb-3">About the Project</h2>
                            <p className="leading-relaxed">{project.description}</p>
                        </div>

                        <div className="flex justify-center gap-4 mb-6">
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    flex items-center gap-2 
                                    text-blue-600 hover:text-blue-700 
                                    dark:text-blue-400 dark:hover:text-blue-300
                                    transition-colors duration-300
                                "
                            >
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    flex items-center gap-2 
                                    transition-colors duration-300
                                "
                            >
                                <FaGithub /> Source Code
                            </a>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-3 text-center">Tech Stack</h2>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {project.techStacks.map((stack, stackIndex) => {
                                    const skillIcon = getSkillIcon(stack);
                                    return (
                                        <span
                                            key={stackIndex}
                                            className="
                                             bg-white/10 dark:bg-[#141313] border border-white/20 text-white hover:bg-white/20 transition-all duration-300 py-2 px-4 rounded-lg font-semibold hover:scale-105
                                                flex items-center gap-2
                                            "
                                        >
                                            {skillIcon && (
                                                <Image
                                                    src={skillIcon.icon}
                                                    alt={`${stack} icon`}
                                                    width={16}
                                                    height={16}
                                                    className="w-4 h-4"
                                                />
                                            )}
                                            {stack}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
