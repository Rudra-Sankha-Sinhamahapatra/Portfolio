/* eslint-disable @next/next/no-img-element */
import { skills } from "@/lib/skills";

export const Skills = () => {
  return (
    <main>
      <section id="skills" className="min-h-[60vh] mt-20">
        <h2 className="mb-12 text-center text-3xl font-bold">Skills</h2>
        <div className="max-w-4xl max-xs2:max-w-[500px] max-xs:max-w-[200px] max-xs2:min-w-[300px] mx-auto grid grid-cols-1 xs:grid-cols-2 xs2:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5  gap-3 px-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center rounded-lg border border-[#D14309] bg-card p-2.5 text-card-foreground shadow-sm"
            >
              <img
                src={skill.icon || ""}
                alt={`${skill.name} icon`}
                className={`w-${skill.width} h-${skill.height} mr-3`}
              />
              <h3 className="text-sm font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
