"use client"
/* eslint-disable @next/next/no-img-element */
import { Github, Twitter, Linkedin, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function About() {
  const router = useRouter();
  return (
    <main>
      <section id="about" className="py-16 mt-20">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="https://avatars.githubusercontent.com/u/101992909?v=4"
              alt="Profile"
              className="h-40 w-40 rounded-full object-cover shadow-xl"
            />
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Hey, I&apos;m Rudra Sankha👋
              </h2>
              <p className="mt-4 text-base md:text-lg text-white">
                I&apos;m a fullstack developer 🚀, optimist 🌟, and an open-source advocate 🌱.
                I&apos;m currently learning Python,FastAPI and building fullstack projects on it while contributing
                to multiple open-source projects.
              </p>
            </div>
          </div>

 
          <div className="flex gap-6">
            <Button
              variant="outline"
              size="icon"
              className="transition transform duration-200 active:scale-95 hover:scale-125"
              aria-label="Github"
              onClick={() =>
                window.open('https://github.com/Rudra-Sankha-Sinhamahapatra', '_blank')
              }
            >
              <Github className="h-6 w-6 text-white hover:text-gray-300 transition-colors" />
            </Button>
            <Button
              variant="outline"
              size="icon"
                            className="transition transform duration-200 active:scale-95 hover:scale-125"
              aria-label="Twitter"
              onClick={() => window.open('https://x.com/RudraSankha', '_blank')}
            >
              <Twitter className="h-6 w-6 text-white hover:text-gray-300 transition-colors" />
            </Button>
            <Button
              variant="outline"
              size="icon"
                            className="transition transform duration-200 active:scale-95 hover:scale-125"
              aria-label="Linkedin"
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/rudra-sankha-sinhamahapatra-6311aa1bb/',
                  '_blank'
                )
              }
            >
              <Linkedin className="h-6 w-6 text-white hover:text-gray-300 transition-colors" />
            </Button>
            <Button
              variant="outline"
              size="icon"
                            className="transition transform duration-200 active:scale-95 hover:scale-125"
              aria-label="Resume"
              onClick={() =>
              router.push('/resume.pdf')
              }
            >
              <FileText className="h-6 w-6 text-white hover:text-gray-300 transition-colors" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
