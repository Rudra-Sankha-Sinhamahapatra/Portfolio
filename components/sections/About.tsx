"use client"
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Github, Twitter, Linkedin, FileText, MapPin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <section id="about">
      <div className="bg-[#141313]/80 backdrop-blur-lg rounded-xl border border-white/10 p-8">
      <div className="flex flex-col lg:flex-row items-start gap-6">
        <div className="flex-shrink-0">
          <img
            src="https://avatars.githubusercontent.com/u/101992909?v=4"
            alt="Profile"
            className="h-32 w-32 rounded-full object-cover shadow-xl border-4 border-white/10"
          />
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              Rudra Sankha Sinhamahapatra
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-300">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Full Stack Developer
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                localhost:3000
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                Available for work
              </span>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed">
            I&apos;m a passionate fullstack developer who loves turning curiosity into code.
            Technology never fails to amaze me, it&apos;s the constant evolution and magic of building
            that keeps me going. Currently exploring React Native and building fullstack projects while
            contributing to multiple open-source projects. Check out my{' '}
            <Link href="/projects" className="text-blue-400 hover:text-blue-300 hover:underline" title="Rudra Sankha Projects - Portfolio">
              projects
            </Link>
            {' '}— full-stack apps, AI, and web3. View my{' '}
            <Link href="/resume" className="text-blue-400 hover:text-blue-300 hover:underline" title="Rudra Sankha Resume - CV">
              resume
            </Link>
            {' '}for experience and skills.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              size="sm"
              className="bg-[#141313] border-white/10 text-white hover:bg-white/10 transition-all duration-300"
              onClick={() => window.open('https://github.com/Rudra-Sankha-Sinhamahapatra', '_blank')}
            >
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-[#141313] border-white/10 text-white hover:bg-white/10 transition-all duration-300"
              onClick={() => window.open('https://x.com/RudraSankha', '_blank')}
            >
              <Twitter className="h-4 w-4 mr-2" />
              Twitter
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-[#141313] border-white/10 text-white hover:bg-white/10 transition-all duration-300"
              onClick={() => window.open('https://www.linkedin.com/in/rudra-sankha-sinhamahapatra-6311aa1bb/', '_blank')}
            >
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </Button>
            <Link href="/resume" title="Rudra Sankha Resume - Download CV">
              <Button
                variant="outline"
                size="sm"
                className="bg-[#141313] border-white/10 text-white hover:bg-white/10 transition-all duration-300"
              >
                <FileText className="h-4 w-4 mr-2" />
                Resume
              </Button>
            </Link>
        </div>
        </div>
        </div>
      </div>
    </section>
  );
}
