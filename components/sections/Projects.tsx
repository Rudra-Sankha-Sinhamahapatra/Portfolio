import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <main>
      <section id="projects" className="min-h-screen">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          Projects
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative rounded-lg border border-[#D14309]  p-6 shadow-md text-white"
            >
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
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
