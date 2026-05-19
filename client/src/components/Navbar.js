"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", id: "home", path: "#home" },
  { name: "About", id: "about", path: "#about"},
  { name: "Services", id: "services", path: "#services" },
  { name: "Projects", id: "projects", path: "#projects" },
  { name: "Contact", id: "contact", path: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [active, setActive] = useState("home");

  // Load dark mode from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;

      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("darkMode", "true");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("darkMode", "false");
      }

      return newMode;
    });
  };

  // Scroll spy
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 border-b bg-white dark:bg-black dark:text-white">

      {/* Logo */}
      <h1 className="text-2xl font-bold">NovaDigital</h1>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6">
        {navLinks.map((link) => {
          const isActive = active === link.path.replace("#", "");

          return (
            <a
              key={link.name}
              href={link.path}
              className={`transition ${
                isActive
                  ? "text-black dark:text-white font-bold"
                  : "text-gray-500"
              }`}
            >
              {link.name}
            </a>
          );
        })}
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3">

        {/* Dark Mode Button */}
        <button
          onClick={toggleDarkMode}
          className="px-3 py-1 border rounded"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="absolute top-16 left-0 w-full border-t 
            bg-white dark:bg-black md:hidden"
          >

            <div className="flex flex-col items-center gap-6 py-6">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg text-gray-700 transition 
                  hover:text-black dark:text-gray-300 dark:hover:text-white"
                >
                  {link.name}
                </a>
              ))}

            </div>

          </motion.div>
        )}

      </AnimatePresence>


      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-72 z-50
          transform transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
          bg-white/20 dark:bg-black/40
          backdrop-blur-xl
          border-l border-white/20 dark:border-gray-700
          shadow-2xl`
        }
      >

        <div 
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col p-6 gap-6"
        >

          <button
            className="flex items-center gap-2 text-4xl font-medium text-black dark:text-white hover:opacity-70 transition"
            onClick={() => setMenuOpen(false)}
          >
            ←
          </button>

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.path}
              onClick={() => {
                setMenuOpen(false);
                setActive(link.id);
              }}
              className={`
                relative text-lg font-medium transition
                ${
                  active === link.id
                    ? "text-black dark:text-white font-bold"
                    : "text-gray-500 dark:text-gray-400"
                }
              `}
            >
              {link.name}
              <span
                className={`
                  absolute left-0 -bottom-1 h-[2px] 
                  bg-black dark:bg-white transition-all duration-300
                  ${active === link.id ? "w-full" : "w-0"}
                `}
              />
            </a>
          ))}

        </div>
      </div>
    </nav>
  );
}