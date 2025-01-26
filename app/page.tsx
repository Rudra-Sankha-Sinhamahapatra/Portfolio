
'use client';

import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';



export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="container relative mx-auto max-w-5xl px-6">
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      </div>
    </main>
  );
}