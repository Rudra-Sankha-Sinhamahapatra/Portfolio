import { projects } from "@/lib/projects";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <main>
      <section id="projects" className="min-h-screen mt-20">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          Projects
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative rounded-lg border border-[#D14309] p-6 shadow-md text-white flex flex-col"
            >
              <div className="cursor-pointer" onClick={() => {
                window.open(project.liveLink, "_blank");
              }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.image} alt={project.title} className="w-full h-[200px] object-cover rounded-lg mb-4" />
              </div>
              <h3
                className="text-xl font-semibold underline cursor-pointer mb-2"
                onClick={() => {
                  window.open(project.link, "_blank");
                }}
              >
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-gray-300">{project.description}</p>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">
                  Tech Stacks:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStacks.map((stack, stackIndex) => (
                    <span
                      key={stackIndex}
                      className="rounded-full bg-[#D14309] bg-opacity-20 px-3 py-1 text-sm text-white border border-[#D14309]"
                    >
                      #{stack}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-row gap-2 mt-auto pt-4">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-sm text-white">
                  <FaExternalLinkAlt />
                </a>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm text-white">
                  <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
