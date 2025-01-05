import { skills } from "@/lib/skills"

export const Skills = () => {
    return(
        <main>
             <section id="skills" className="min-h-screen py-20">
          <h2 className="mb-12 text-center text-3xl font-bold">Skills</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div key={skill} className="rounded-lg border border-[#D14309] bg-card p-6 text-card-foreground shadow-sm">
                <h3 className="text-xl font-semibold">{skill}</h3>
              </div>
            ))}
          </div>
        </section>

        </main>
    )
}