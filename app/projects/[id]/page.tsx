import { projects } from "@/lib/projects";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { getSkillIcon } from "@/lib/skillUtils";

export default async function ProjectDetailPage({ params }: { params: { id: string } }) {
  const resolvedParams = await params;
  const project = projects.find(p => p.id === parseInt(resolvedParams.id));

  if (!project) {
    return (
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
        <Link href="/projects" className="text-blue-400 hover:text-blue-300">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen bg-gray-50 dark:bg-[#111010]">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative container mx-auto max-w-4xl px-6 pt-24 pb-8">
        <Link 
          href="/projects" 
          className="
            inline-flex items-center gap-2 
            text-gray-600 hover:text-gray-800 
            dark:text-gray-300 dark:hover:text-white
            mb-6 text-sm
            transition-colors duration-300
          "
        >
          <FaArrowLeft /> Back to Projects
        </Link>

        <div className="bg-white dark:bg-[#1C1C1C] rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-[#2E2E2E] flex flex-col">
          <div className="relative group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[400px] object-cover group-hover:brightness-90 transition-all duration-300"
            />
            
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-6">
              <h1 className="text-3xl font-bold text-[#ffffff]">{project.title}</h1>
            </div>
          </div>

          <div className="p-6 border-t border-gray-200 dark:border-[#2E2E2E]">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">About the Project</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
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
                  text-gray-600 hover:text-gray-800 
                  dark:text-gray-300 dark:hover:text-white
                  transition-colors duration-300
                "
              >
                <FaGithub /> Source Code
              </a>
            </div>

            {/* Tech Stack */}
            <div>
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3 text-center">Tech Stack</h2>
              <div className="flex flex-wrap gap-2 justify-center">
                {project.techStacks.map((stack, stackIndex) => {
                  const skillIcon = getSkillIcon(stack);
                  return (
                    <span
                      key={stackIndex}
                      className="
                        rounded-full 
                        bg-gray-100 
                        dark:bg-[#2E2E2E]
                        px-3 py-1 
                        text-sm text-gray-700 
                        dark:text-gray-300
                        border border-gray-300
                        dark:border-[#3E3E3E]
                        flex items-center gap-2
                      "
                    >
                      {skillIcon && (
                        <img
                          src={skillIcon.icon}
                          alt={`${stack} icon`}
                          className="w-4 h-4"
                          style={{
                            width: '16px',
                            height: '16px'
                          }}
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
