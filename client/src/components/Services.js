"use client";

import { Monitor, Server, Database } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Frontend Development",
    description: "Modern responsive interfaces using React and Next.js.",
    icon: Monitor,
  },

  {
    title: "Backend Development",
    description: "Scalable APIs with Node.js and Express.",
    icon: Server,
  },

  {
    title: "Database Solutions",
    description: "Efficient MongoDB architecture and data handling.",
    icon: Database,
  },
];

export default function Services() {
  return (
    <section className="py-24 section-glow" id="services">

      <div className="mx-auto max-w-6xl px-6">

        <h2 className="text-center text-4xl font-bold">
          Our Services
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {(services ?? []).map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={false}
                animate={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                // viewport={{ once: false, amount: 0.2 }}
                className="rounded-2xl border p-6 sm:p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >

                <div className="mb-4 inline-flex rounded-xl bg-black p-3 text-white">
                  <Icon size={22} />
                </div>

                <h3 className="text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-500">
                  {service.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}