"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
        id="home"
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true , amount: 0.2 }}
        className=" section-glow flex min-h-screen items-center justify-center px-6"
    >

      <div className="max-w-5xl text-center">

        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">
          Full-Stack Digital Agency
        </p>

        <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          We Build Modern Web Experiences
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500">
          NovaDigital creates scalable MERN applications,
          high-performance frontend systems, and modern digital products.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row w-full sm:w-auto">

            <a href="/projects"
               className="rounded-xl bg-black dark:bg-white px-8 py-4 text-white dark:text-black border border-black dark:border-white transition hover:opacity-80"
            >
                View Projects
            </a>

            <a href="/services"
               className="rounded-xl bg-black dark:bg-white px-8 py-4 text-white dark:text-black border border-black dark:border-white transition hover:opacity-80"
            >
                Explore Services
            </a>

            <a href="/contact"
               className="rounded-xl border border-black dark:border-white px-8 py-4 transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            >
                Contact Us
            </a> 

        </div>

      </div>

    </motion.section>
  );
}