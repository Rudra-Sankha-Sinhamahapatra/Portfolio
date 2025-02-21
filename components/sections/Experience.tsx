"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Experience as Exp, experiences, keywords } from "@/lib/experience";

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const highlightKeywords = (text: string) => {
    return text.split(" ").map((word, index) =>
      keywords.includes(word.replace(/[^a-zA-Z0-9]/g, "")) ? (
        <span key={index} className="text-[#D14309] font-semibold">{word} </span>
      ) : (
        word + " "
      )
    );
  };

  return (
    <main>
      <section id="experience" className="pt-20">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          Work Experience
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {experiences.map((exp: Exp, index) => (
            <div
              key={index}
              className="group relative flex flex-col gap-4 p-6 border-none rounded-md shadow-md text-white w-full mx-auto cursor-pointer"
              onClick={() => toggleOpen(index)}
            >
  
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
        
                  {exp.companyLogo && (
                    <div className="relative w-12 h-12 flex-shrink-0">
                    <Image
                      src={exp.companyLogo}
                      alt={`${exp.company} logo`}
                      width={48}
                      height={48}
                      className="rounded-full bg-white p-1 object-contain"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold">{exp.company} <span className=" font-bold group-hover:opacity-100 opacity-0 transition-opacity duration-300 ml-3">{">"}</span></h3>
                    <p className="text-sm text-gray-300">{exp.title}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400">{exp.duration}</p>
              </div>

              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className={`overflow-hidden mt-2 ${openIndex === index ? "pt-4" : ""}`}
              >
                <ul className="space-y-2 text-gray-300 list-disc list-inside">
                  {exp.description.map((point, i) => (
                    <li key={i} className="leading-relaxed">{highlightKeywords(point)}</li>
                  ))}
                </ul>

                <div className="mt-3">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Tech Stack:</h4>
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
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
