import { Experience as Exp, keywords } from "@/lib/experience";
import { experiences } from "@/lib/experience";


export default function Experience() {
  return (
    <main>
      <section id="experience" className="min-h-screen py-20">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp: Exp, index) => (
            <div
              key={index}
              className="relative rounded-md border border-[#D14309] p-6 shadow-md text-white w-full mx-auto"
            >
              <h3 className="text-2xl font-bold mb-1">
                {exp.title}{" "}
                <span className="text-[#D14309]">- {exp.company}</span>
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                {exp.duration} | {exp.location}
              </p>
              <ul className="space-y-2">
                {exp.description.map((point, i) => (
                 <li
                    key={i}
                    className="text-base leading-relaxed text-gray-300"
                  >
                    <span className="font-bold text-white"> - </span>
                    {point.split(" ").map((word, idx) => {
                      // Normalize word: remove punctuation and convert to lowercase
                      const cleanWord = word
                        .replace(/[.,!?]/g, "")
                        .toLowerCase();

                      return (
                        <span
                          key={idx}
                          className={
                            keywords
                              .map((k) => k.toLowerCase())
                              .includes(cleanWord)
                              ? "text-white font-semibold"
                              : ""
                          }
                        >
                          {word + " "}
                        </span>
                      );
                    })}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">
                  Tech Stacks:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.techStacks.map((stack, stackIndex) => (
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
