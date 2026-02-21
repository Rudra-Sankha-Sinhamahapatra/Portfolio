import { projects } from "@/lib/projects";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="
            rounded-xl 
            overflow-hidden 
            shadow-lg 
            border border-gray-200 
            dark:border-[#2E2E2E]
            transition-all 
            duration-300 
            hover:scale-[1.02] 
            hover:shadow-xl
            flex 
            flex-col
          "
        >
          <div className="relative group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[250px] object-cover group-hover:brightness-90 transition-all duration-300"
            />
            
            <div className="absolute bottom-0 w-full p-3 bg-linear-to-t from-black/80 via-black/40 to-transparent">
              <h3 className="font-bold text-[#ffffff] text-sm sm:text-base m-0 line-clamp-1 wrap-break-word">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="p-4 text-center grow flex flex-col justify-center">
            <Link 
              href={`/projects/${project.id}`}
              className="
                w-full
                dark:border-[#3E3E3E] 
                px-4 sm:px-5 
                py-3 sm:py-4 
                 bg-white/10 dark:bg-[#141313] border border-white/20 text-white hover:bg-white/20 transition-all duration-300 rounded-lg font-semibold hover:scale-105
                text-sm sm:text-base 
                text-center 
                flex 
                items-center 
                justify-center 
                gap-2
              "
            >
              More Info <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
