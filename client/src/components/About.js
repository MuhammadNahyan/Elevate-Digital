"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 section-glow bg-white/5 dark:bg-white/5 backdrop-blur-md border-y border-white/10">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:items-center">

        {/* Left Side */}
        <div
          // initial={false}
          // animate={{ opacity: 1, x : 0 }}
          // viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400">
            About Us
          </p>

          <h2 className="text-4xl font-bold leading-tight">
            We Create Modern Digital Experiences
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            NovaDigital is a modern full-stack agency focused on building
            scalable web applications, premium frontend systems,
            and performance-driven user experiences.
          </p>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            We combine modern technologies like React, Next.js,
            Node.js, and Tailwind CSS to craft products
            that are both visually stunning and technically strong.
          </p>

        </div>

        {/* Right Side */}
        <div
          // initial={{ opacity: 0, x: 40 }}
          // whileInView={{ opacity: 1, x: 0 }}
          // viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-6"
        >

          <div className="rounded-3xl bg-white dark:bg-gray-900
            border border-gray-200 dark:border-gray-800
            p-6 sm:p-8 shadow-xl
            transition-all duration-300
            hover:-translate-y-2
            hover:border-gray-300 dark:hover:border-gray-600
            hover:shadow-[0_0_25px_rgba(99,102,241,0.12)]"
          >
            <h3 className="text-5xl font-bold">
              5+
            </h3>

            <p className="mt-2 text-gray-300 dark:text-gray-300">
              Projects Built
            </p>
          </div>

          <div className="rounded-3xl bg-white dark:bg-gray-900
            border border-gray-200 dark:border-gray-800
            p-6 sm:p-8 shadow-xl
            transition-all duration-300
            hover:-translate-y-2
            hover:border-gray-300 dark:hover:border-gray-600
            hover:shadow-[0_0_25px_rgba(99,102,241,0.12)]
            "
          >
            <h3 className="text-5xl font-bold">
              3+
            </h3>

            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Technologies Mastered
            </p>
          </div>

          <div className="rounded-3xl bg-white dark:bg-gray-900
            border border-gray-200 dark:border-gray-800
            p-6 sm:p-8 shadow-xl
            transition-all duration-300
            hover:-translate-y-2
            hover:border-gray-300 dark:hover:border-gray-600
            hover:shadow-[0_0_25px_rgba(99,102,241,0.12)]"
          >
            <h3 className="text-5xl font-bold">
              100%
            </h3>

            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Responsive Design
            </p>
          </div>

          <div className="rounded-3xl bg-white dark:bg-gray-900
            border border-gray-200 dark:border-gray-800
            p-6 sm:p-8 shadow-xl
            transition-all duration-300
            hover:-translate-y-2
            hover:border-gray-300 dark:hover:border-gray-600
            hover:shadow-[0_0_25px_rgba(99,102,241,0.12)]"
          >
            <h3 className="text-5xl font-bold">
              24/7
            </h3>

            <p className="mt-2 text-gray-300 dark:text-gray-300">
              Development Passion
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}