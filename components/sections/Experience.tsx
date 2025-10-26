"use client";
import Image from "next/image";
import { Experience as Exp, experiences, keywords } from "@/lib/experience";
import React, { useState } from "react";
import { getSkillIcon } from "@/lib/skillUtils";

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
        <div className="bg-[#141313]/80 backdrop-blur-lg rounded-xl border border-white/10 p-8">
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
                <div className="flex items-center justify-between hover:bg-white/5 p-4 rounded-lg transition-all duration-300">
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
                  <span className="text-gray-500 text-sm">{exp.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedExperience && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="
              bg-white dark:bg-[#141313] 
              rounded-xl max-w-2xl w-full p-8 relative 
              border border-gray-200 dark:border-white/10 
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="
                absolute top-4 right-4 
                text-gray-700 dark:text-white 
                hover:text-gray-500 dark:hover:text-gray-300 
                transition-colors
                focus:outline-none
              "
            >
              ✕
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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedExperience.company}</h2>
                <p className="text-blue-600 dark:text-blue-400 text-lg">{selectedExperience.title}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-100 dark:bg-[#1E1E1E] rounded-lg p-4">
                <h3 className="text-gray-900 dark:text-white font-semibold mb-2">Responsibilities</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {selectedExperience.description.map((point, i) => (
                    <React.Fragment key={i}>
                      {highlightKeywords(point)}
                      {i < selectedExperience.description.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>

              <div className="bg-gray-100 dark:bg-[#1E1E1E] rounded-lg p-4">
                <h3 className="text-gray-900 dark:text-white font-semibold mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedExperience.techStacks.map((stack, stackIndex) => {
                    const skillIcon = getSkillIcon(stack);
                    return (
                      <span
                        key={stackIndex}
                        className="
                          rounded-full 
                          bg-gray-200 dark:bg-[#141313] 
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
            </div>
          </div>
        </div>
      )}
    </>
  );
}
