
'use client';

import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import ContributionGraphDemo from '@/components/sections/ContributionGraphDemo';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative container mx-auto max-w-4xl px-6 pt-24 pb-8">
        <div className="space-y-8">
          <About />
          <Experience />
          <Skills />
          <ContributionGraphDemo />
        </div>
         <Contact />
      </div>
    </main>
  );
}