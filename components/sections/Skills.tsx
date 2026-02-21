"use client";

 
import { skills } from "@/lib/skills";
import LogoLoop from "@/components/ui/LogoLoop";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Skills = () => {
  const { resolvedTheme } = useTheme();
  const [fadeOutColor, setFadeOutColor] = useState('#111010');
  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFadeOutColor(resolvedTheme === 'light' ? '#ffffff' : '#111010');
  }, [resolvedTheme]);
  
  const logoItems = skills
    .filter((skill) => skill.visibility)
    .map((skill) => ({
      src: skill.icon,
      alt: `${skill.name} logo`,
      title: skill.name,
      width: skill.width === "5" ? 40 : skill.width === "6" ? 48 : 40,
      height: skill.height === "5" ? 40 : skill.height === "6" ? 48 : 40,
    }));

  return (
    <section id="skills">
      <div className="bg-[#141313] backdrop-blur-lg rounded-xl border border-white/10 dark:border-white/10 light:border-blue-100/20 p-8">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-800">Tech Stacks</h2>
        </div>

        <div className="relative">
          <LogoLoop
            logos={logoItems}
            speed={60}
            direction="left"
            logoHeight={48}
            gap={32}
            pauseOnHover={true}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor={fadeOutColor}
            ariaLabel="Technology stack"
            className="py-4"
          />
        </div>
      </div>
    </section>
  );
};
