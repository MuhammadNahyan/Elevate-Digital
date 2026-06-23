"use client";

import { useEffect } from "react";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  
  useEffect(() => {
  console.log("Services mounted");
  return () => console.log("Services unmounted");
}, []);

  return (
    <div key="services-page">
    <main className="p-10 max-w-6xl mx-auto" suppressHydrationWarning>
      <h1 className="text-4xl font-bold">Our Services</h1>

      <p className="mt-4 text-gray-600">
        We provide full-stack development, UI/UX design, and scalable backend systems.
      </p>

      <div className="mt-10 space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">Frontend Development</h2>
          <p className="text-gray-600">React, Next.js, Tailwind UI systems</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Backend Development</h2>
          <p className="text-gray-600">Node.js, APIs, MongoDB, authentication</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Full-Stack Apps</h2>
          <p className="text-gray-600">Complete SaaS & business systems</p>
        </div>
      </div>
      <Footer />
    </main>
    </div>
  );
}