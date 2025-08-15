import { projects } from "@/lib/projects";
import { skills } from "@/lib/skills";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const getSkillIcon = (techName: string) => {
  const normalizedTechName = techName.toLowerCase().trim();
  
  let skill = skills.find(skill => 
    skill.name.toLowerCase() === normalizedTechName
  );
  
  if (!skill) {
    skill = skills.find(skill => {
      const normalizedSkillName = skill.name.toLowerCase();
      const techNameNoDots = normalizedTechName.replace(/\./g, ' ');
      const skillNameNoDots = normalizedSkillName.replace(/\./g, ' ');
      
      return normalizedSkillName.includes(normalizedTechName) || 
             normalizedTechName.includes(normalizedSkillName) ||
             skillNameNoDots.includes(techNameNoDots) ||
             techNameNoDots.includes(skillNameNoDots);
    });
  }
  
  if (!skill) {
    const specialCases: { [key: string]: string | null } = {
      'next.js': 'Next Js',
      'next js': 'Next Js',
      'nextjs': 'Next Js',
      'react.js': 'React Js',
      'react js': 'React Js',
      'reactjs': 'React Js',
      'node.js': 'Node.js',
      'node js': 'Node.js',
      'nodejs': 'Node.js',
      'express.js': 'Express.js',
      'express js': 'Express.js',
      'expressjs': 'Express.js',
      'nest.js': 'Nest.js',
      'nest js': 'Nest.js',
      'nestjs': 'Nest.js',
      'rabbitmq': 'RabbitMQ',
      'tailwind css': 'Tailwind Css',
      'tailwindcss': 'Tailwind Css',
      'mongo db': 'Mongo DB',
      'mongodb': 'Mongo DB',
      'postgresql': 'PostgreSQL',
      'postgres': 'PostgreSQL',
      'gemini': 'Google Gemini',
      'web sockets': 'Websockets',
      'websocket': 'Websockets',
      'turborepo': 'Turborepo',
      'prisma orm': 'Prisma',
      'next auth': null,
      'better auth': null,
      'jspdf': null,
      'pptgenx': null, 
      'nodemailer': null, 
      'wagmi': null,
      'solidity': null,  
      'vector db': null,
      'ethereum': null
    };
    
    const mappedSkillName = specialCases[normalizedTechName];
    if (mappedSkillName) {
      skill = skills.find(s => s.name === mappedSkillName);
    }
  }
  
  return skill ? { icon: skill.icon, width: skill.width, height: skill.height } : null;
};

export default function Projects() {
  return (
    <main>
      <section id="projects" className="min-h-screen my-20">
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
                  {project.techStacks.map((stack, stackIndex) => {
                    const skillIcon = getSkillIcon(stack);
                    return (
                      <span
                        key={stackIndex}
                        className="rounded-full bg-[#D14309] bg-opacity-20 px-3 py-1 text-sm text-white border border-[#D14309] flex items-center gap-2"
                      >
                        {skillIcon && (
                          // eslint-disable-next-line @next/next/no-img-element
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
