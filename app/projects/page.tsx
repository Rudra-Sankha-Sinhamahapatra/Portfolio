"use client";

import Projects from "@/components/sections/Projects";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative container mx-auto max-w-7xl px-6 pt-24 pb-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">My Projects</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my work, featuring full-stack applications, AI integrations, and innovative solutions.
          </p>
        </div>

        <Projects />
      </div>
    </main>
  );
}
