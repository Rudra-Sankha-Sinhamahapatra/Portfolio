import Image from "next/image";
import Link from "next/link";
import { FileDown, Briefcase, User, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function ResumePage() {
  return (
    <main className="relative min-h-screen">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative container mx-auto max-w-3xl px-6 pt-32 pb-20">
        {/* Hero Card */}
        <div className="bg-[#141313]/80 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden mb-8">
          <div className="p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
              <div className="flex-shrink-0">
                <Image
                  src={siteConfig.avatar_image}
                  alt="Rudra Sankha Sinhamahapatra"
                  width={140}
                  height={140}
                  className="h-36 w-36 rounded-2xl object-cover shadow-xl border-2 border-white/10"
                  priority
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                  Rudra Sankha Resume
                </h1>
                <p className="text-lg text-gray-400 mb-6">
                  Full Stack Developer skilled in React, Next.js, TypeScript, AWS,
                  Docker, Redis and Node.js. Download my resume to view my
                  experience, skills, and projects.
                </p>
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300 border border-white/20 hover:border-white/30"
                >
                  <FileDown className="w-5 h-5" />
                  Download Resume PDF
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-[#141313]/60 backdrop-blur-lg rounded-2xl border border-white/10 p-8">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-white mb-6">
            <Briefcase className="w-5 h-5 text-blue-400" />
            Quick Links
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/projects"
              className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="block font-medium text-white group-hover:text-blue-400 transition-colors">
                  View Projects
                </span>
                <span className="block text-sm text-gray-500 truncate">
                  Rudra Sankha Projects
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
            </Link>
            <Link
              href="/#about"
              className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <User className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="block font-medium text-white group-hover:text-emerald-400 transition-colors">
                  About Me
                </span>
                <span className="block text-sm text-gray-500 truncate">
                  Experience & Skills
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
            </Link>
            <Link
              href="/#contact"
              className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 sm:col-span-2"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-amber-400" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="block font-medium text-white group-hover:text-amber-400 transition-colors">
                  Get in Touch
                </span>
                <span className="block text-sm text-gray-500 truncate">
                  Contact Rudra Sankha
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
