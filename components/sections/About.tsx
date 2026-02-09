"use client"
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Github, Twitter, Linkedin, FileText, MapPin, Mail, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <section id="about">
      <div className="bg-[#141313]/80 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden dark:bg-[#141313]/80 dark:border-white/10">
        <div className="h-48 lg:h-64 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative">
          <img
            src="https://pbs.twimg.com/media/HAuqGpNboAAbZSP?format=png&name=900x900"
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-[#141313] px-6 lg:px-8 pb-8 dark:bg-[#141313]">
          <div className="flex justify-between items-start -mt-16 lg:-mt-20 mb-4">
            <img
              src="https://avatars.githubusercontent.com/u/101992909?v=4"
              alt="Profile"
              className="h-32 w-32 lg:h-40 lg:w-40 rounded-full object-cover shadow-xl border-4 border-[#141313] bg-[#141313] dark:border-[#141313] dark:bg-[#141313] relative z-10"
            />
            
            <div className="flex gap-2 mt-24 z-10">
              <Button
                variant="outline"
                size="sm"
                className="bg-white border-gray-300 text-gray-900 hover:bg-gray-100 dark:bg-[#1a1a1a] dark:border-white/10 dark:text-white dark:hover:bg-white/10 transition-all duration-300"
                onClick={() => window.open('https://github.com/Rudra-Sankha-Sinhamahapatra', '_blank')}
              >
                <Github className="h-4 w-4" />
              </Button>
              <Link href="/resume" title="Rudra Sankha Resume - Download CV">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white border-gray-300 text-gray-900 hover:bg-gray-100 dark:bg-[#1a1a1a] dark:border-white/10 dark:text-white dark:hover:bg-white/10 transition-all duration-300"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Resume
                </Button>
              </Link>
            </div>
          </div>

          <div className="space-y-1 mb-3">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl lg:text-3xl font-bold text-white">
                Rudra Sankha Sinhamahapatra
              </h1>
              <BadgeCheck className="h-6 w-6 text-white fill-blue-400" />
            </div>
            <p className="text-gray-400">@RudraSankha</p>
          </div>

          <p className="text-gray-300 leading-relaxed mb-4">
            I&apos;m a passionate fullstack developer who loves turning curiosity into code.
            Technology never fails to amaze me, it&apos;s the constant evolution and magic of building
            that keeps me going. Currently exploring React Native and building fullstack projects while
            contributing to multiple open-source projects.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              localhost:3000
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-4 h-4" />
              Available for work
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Full Stack Developer
            </span>
          </div>

          <div className="flex items-center gap-4 text-sm mb-6">
            <Link 
              href="/projects" 
              className="text-blue-400 hover:text-blue-300 hover:underline" 
              title="Rudra Sankha Projects - Portfolio"
            >
              View Projects
            </Link>
            <Link 
              href="/resume" 
              className="text-blue-400 hover:text-blue-300 hover:underline" 
              title="Rudra Sankha Resume - CV"
            >
              View Resume
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
            <Button
              variant="outline"
              size="sm"
              className="bg-white border-gray-300 text-gray-900 hover:bg-gray-100 dark:bg-[#1a1a1a] dark:border-white/10 dark:text-white dark:hover:bg-white/10 transition-all duration-300"
              onClick={() => window.open('https://github.com/Rudra-Sankha-Sinhamahapatra', '_blank')}
            >
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-white border-gray-300 text-gray-900 hover:bg-gray-100 dark:bg-[#1a1a1a] dark:border-white/10 dark:text-white dark:hover:bg-white/10 transition-all duration-300"
              onClick={() => window.open('https://x.com/RudraSankha', '_blank')}
            >
              <Twitter className="h-4 w-4 mr-2" />
              Twitter
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-white border-gray-300 text-gray-900 hover:bg-gray-100 dark:bg-[#1a1a1a] dark:border-white/10 dark:text-white dark:hover:bg-white/10 transition-all duration-300"
              onClick={() => window.open('https://www.linkedin.com/in/rudra-sankha-sinhamahapatra-6311aa1bb/', '_blank')}
            >
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}