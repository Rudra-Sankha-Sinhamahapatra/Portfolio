"use client";
import Image from "next/image";
import { Experience as Exp, experiences, keywords } from "@/lib/experience";
import React, { useState } from "react";
import { getSkillIcon } from "@/lib/skillUtils";
import { GitPullRequest, ExternalLink, X } from "lucide-react";

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<Exp | null>(null);

  const highlightKeywords = (text: string) => {
    return text.split(/\s+/).map((word, index) => {
      const cleanWord = word.replace(/[^a-zA-Z0-9]/g, "");
      return keywords.includes(cleanWord) ? (
        <span key={index} className="text-blue-600 dark:text-blue-400">{word} </span>
      ) : (
        <span key={index}>{word} </span>
      );
    });
  };

  const openExperienceModal = (exp: Exp) => {
    setSelectedExperience(exp);
  };

  const closeModal = () => {
    setSelectedExperience(null);
  };

  return (
    <>
      <section id="experience">
        <div className="bg-[#141313] backdrop-blur-lg rounded-xl border border-white/10 p-8">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-bold text-white">Professional Experience</h2>
          </div>

          <div className="space-y-4">
            {experiences.map((exp: Exp, index) => (
              <div
                key={index}
                onClick={() => openExperienceModal(exp)}
                className="group cursor-pointer"
              >
                <div className="flex items-center justify-between hover:bg-white/10 p-4 rounded-lg transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    {exp.companyLogo && (
                      <Image
                        src={exp.companyLogo}
                        alt={`${exp.company} logo`}
                        width={40}
                        height={40}
                        className="rounded-full bg-white p-1 object-contain"
                      />
                    )}
                    <div>
                      <h3 className="text-white font-semibold text-lg">{exp.company}</h3>
                      <p className="text-gray-400 text-sm">{exp.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                 <span className="text-gray-500 text-sm">{exp.location}</span>
                  <span className="text-gray-500 text-sm">{exp.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedExperience && (
        <div 
          className="fixed inset-0 z-9999 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="
              rounded-xl max-w-2xl w-full p-8 mt-10 relative bg-[#141313]
              border border-gray-200 dark:border-white/10 
              shadow-2xl z-100
              max-h-[80vh] overflow-y-auto
            "
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="
                absolute top-4 right-4 
                hover:text-gray-500
                transition-colors
                cursor-pointer
                focus:outline-none
              "
            >
              <X />
            </button>

            <div className="flex items-center space-x-4 mb-6">
              {selectedExperience.companyLogo && (
                <Image
                  src={selectedExperience.companyLogo}
                  alt={`${selectedExperience.company} logo`}
                  width={60}
                  height={60}
                  className="rounded-full bg-white p-2 object-contain"
                />
              )}
              <div>
                <h2 className="text-2xl font-bold">{selectedExperience.company}</h2>
                <p className="text-blue-600 dark:text-blue-400 text-lg">{selectedExperience.title}</p>
                <p className="text-sm">{selectedExperience.duration}</p>
                <p className="text-sm">{selectedExperience.location}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/10 dark:bg-[#141313] border border-white/20 dark:border-white/10 text-white transition-all duration-300 py-2 px-4 font-semibold rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold mb-2">Responsibilities</h3>
                <p className="text-sm leading-relaxed">
                  {selectedExperience.description.map((point, i) => (
                    <React.Fragment key={i}>
                      {highlightKeywords(point)}
                      {i < selectedExperience.description.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>

              <div className="bg-white/10 dark:bg-[#141313] border border-white/20 dark:border-white/10 text-white transition-all duration-300 py-2 px-4 font-semibold rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedExperience.techStacks.map((stack, stackIndex) => {
                    const skillIcon = getSkillIcon(stack);
                    return (
                      <span
                        key={stackIndex}
                        className="
                          rounded-full 
                        bg-[#141313] 
                          px-3 py-1 text-sm 
                          text-gray-700 dark:text-gray-300 
                          border border-gray-300 dark:border-white/20
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

              {selectedExperience.prs && selectedExperience.prs.length > 0 && (
                <div className="bg-white/10 dark:bg-[#141313] border text-white border-white/20 dark:border-white/10transition-all duration-300 py-2 px-4 font-semibold rounded-lg p-4 shadow-sm">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <GitPullRequest className="w-5 h-5 text-green-500" />
                    Top Merged Pull Requests
                  </h3>
                  <div className="flex flex-col gap-3">
                    {selectedExperience.prs.map((pr, prIndex) => (
                      <a
                        key={prIndex}
                        href={pr.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          group flex items-center justify-between
                          p-3 rounded-md shadow-sm bg-[#141313]
                          border border-white/20 dark:border-white/10
                          hover:border-blue-500 dark:hover:border-blue-400
                          transition-all duration-200 hover:-translate-y-0.5
                        "
                      >
                        <span className="text-sm font-medium pr-4 line-clamp-2">
                          {pr.title}
                        </span>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 opacity-50 group-hover:opacity-100 transition-all shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
