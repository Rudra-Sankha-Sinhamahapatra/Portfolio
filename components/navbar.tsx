"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Moon, Sun, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: "Home", href: "/", isRoute: true },
    { name: "Projects", href: "/projects", isRoute: true },
    { name: "Resume", href: "/resume", isRoute: true }
  ];

  const toggleTheme = () => {
    if (!document.startViewTransition) {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
      return;
    }

    document.startViewTransition(() => {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[1000] bg-[#111010]/80 dark:bg-[#111010]/80 light:bg-[#e6f2ff]/80 backdrop-blur-lg border-b border-white/10 dark:border-white/10 light:border-blue-200/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/" 
              className="text-white dark:text-white light:text-gray-800 text-xl font-display font-semibold tracking-tight hover:text-gray-300 transition-colors focus:outline-none"
            >
              rudrasankha
            </Link>

            <div className="hidden sm:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    text-gray-300 dark:text-gray-300 light:text-gray-600 
                    hover:text-white dark:hover:text-white light:hover:text-gray-900 
                    transition-colors duration-300 
                    text-sm font-display font-medium tracking-tight
                    focus:outline-none hover:ring-0 active:ring-0
                  "
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <div className="sm:hidden flex items-center">
                <button 
                  onClick={toggleDropdown}
                  className="text-gray-300 dark:text-gray-300 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900 transition-colors duration-300 mr-2 focus:outline-none hover:ring-0 active:ring-0"
                  aria-label="Toggle Mobile Menu"
                >
                  {isDropdownOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>

              <button 
                onClick={toggleTheme}
                className="text-gray-300 dark:text-gray-300 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900 transition-colors duration-300 focus:outline-none hover:ring-0 active:ring-0"
                aria-label="Toggle Theme"
              >
                {mounted && resolvedTheme === 'dark' ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 dark:text-gray-300 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900 transition-colors duration-300 focus:outline-none hover:ring-0 active:ring-0"
              >
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div 
            className="
              fixed top-16 left-0 right-0 z-[999] 
              sm:hidden
            "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div 
              className="
                mx-4 
                bg-[#141313] dark:bg-[#141313] light:bg-white 
                rounded-xl 
                shadow-lg 
                overflow-hidden
              "
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsDropdownOpen(false)}
                  className="
                    block w-full text-left 
                    px-4 py-3 
                    text-gray-300 dark:text-gray-300 light:text-gray-600 
                    hover:bg-white/10 
                    transition-colors duration-300 
                    text-sm font-display font-medium tracking-tight
                    border-b border-white/10 last:border-b-0
                    focus:outline-none hover:ring-0 active:ring-0
                  "
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
