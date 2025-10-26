
'use client';

import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import ContributionGraphDemo from '@/components/sections/ContributionGraphDemo';
import { MailIcon } from '@/components/icons';

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

        <div className="mt-8 grid grid-cols-1 gap-6">
          <section id="contact">
            <div className="bg-[#141313]/80 backdrop-blur-lg rounded-xl border border-white/10 p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Let&apos;s Work Together</h2>
              <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                I&apos;m always interested in new opportunities and exciting projects.
                Whether you have a project in mind or just want to chat about technology, feel free to reach out!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => window.open('https://cal.com/rudrasankha', '_blank')}
                  className="bg-[#141313] border border-white/20 text-white py-3 px-8 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold transform hover:scale-105 flex items-center gap-2 focus:outline-none"
                >
                  <img
                    src="https://avatars.githubusercontent.com/u/101992909?v=4"
                    alt="GitHub Avatar"
                    className="w-6 h-6 rounded-full"
                  />
                  Book a Call
                </button>
                <button
                  onClick={() => window.location.href = 'mailto:workforrudra24@gmail.com'}
                  className="bg-white/10 border border-white/20 text-white py-3 px-8 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold flex items-center gap-2 focus:outline-none"
                >
                  <MailIcon className="w-5 h-5" />
                  Send Message
                </button>
              </div>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-gray-400 text-sm">
                  © 2025 Rudra Sankha Sinhamahapatra. All rights reserved.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}