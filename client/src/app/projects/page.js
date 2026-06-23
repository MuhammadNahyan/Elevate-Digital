"use client";

import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { useEffect } from 'react'

export default function ProjectsPage() {

  useEffect(() => {
  console.log("Projects mounted");
  return () => console.log("Projects unmounted");
}, []);

  return (
    <div key="projects-page">
    <main className="p-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold">All Projects</h1>

      <p className="mt-4 text-gray-600">
        A deeper look into our work, architecture, and development process.
      </p>

      <div className="mt-10" suppressHydrationWarning>
        <Projects />
        <Footer />
      </div>
    </main>
    </div>
  );
}