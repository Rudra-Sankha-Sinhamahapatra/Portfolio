/* eslint-disable @next/next/no-img-element */
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <main>
      <section
        id="about"
        className="flex min-h-screen flex-col items-center justify-center py-16 px-6 md:px-20 text-center"
      >
        <h1 className="font-semibold text-3xl md:text-4xl text-primary">About Me</h1>

        <div className="mt-8 rounded-full border-4 border-primary border-[#D14309]  bg-[#D14309] shadow-lg">
          <img
            src="https://avatars.githubusercontent.com/u/101992909?v=4"
            alt="Profile"
            className="h-40 w-40 rounded-full object-cover shadow-xl"
          />
        </div>

        <h2 className="mt-8 text-3xl font-semibold text-white">Hey, I&apos;m Rudra Sankha👋</h2>
        <p className="mt-4 max-w-3xl text-muted-foreground text-lg">
          I&apos;m a fullstack developer 🚀, optimist 🌟, and an open-source advocate 🌱. I&apos;m
          currently  learning Web3  & building Projects on it 
          and contributing to multiple open-source projects.
        </p>


        <div className="mt-8 flex gap-6 justify-center">
          <Button variant="outline" size="icon" aria-label="Github" onClick={()=>{
            window.open('https://github.com/Rudra-Sankha-Sinhamahapatra','_blank')
          }}>
            <Github className="h-6 w-6 text-primary hover:text-secondary transition-colors" />
          </Button>
          <Button variant="outline" size="icon" aria-label="Twitter" onClick={()=>{
            window.open('https://x.com/RudraSankha','_blank')
          }}>
            <Twitter className="h-6 w-6 text-primary hover:text-secondary transition-colors" />
          </Button>
          <Button variant="outline" size="icon" aria-label="Linkedin" onClick={()=>{
             window.open('https://www.linkedin.com/in/rudra-sankha-sinhamahapatra-6311aa1bb/','_blank')
          }}>
            <Linkedin className="h-6 w-6 text-primary hover:text-secondary transition-colors" />
          </Button>
        </div>
      </section>
    </main>
  );
}
