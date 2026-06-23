"use client";

import { motion } from "framer-motion";


const projects = [
  {
    title: "QR-code based Restaurant Application",
    description:
      "QR-based restaurant management system with digital menus and ordering.",
    image: "/qr-code-restaurant-web-app.png",
    tech: [
        { name: "Node.js", logo: "/node.jpg" },
        { name: "Express.js", logo: "https://tse1.mm.bing.net/th/id/OIP.1ji9NLQl3sOXktSoEYnt3wHaHa?r=0&pid=Api" },
        { name: "React.js", logo: "/react.jpg" },
        { name: "Tailwind CSS", logo: "https://tse4.mm.bing.net/th/id/OIP.pEeKeUoENMqoN-kR8f8XoQHaFj?r=0&cb=thfc1falcon&pid=Api"},
        { name: "MongoDB", logo: "/mongoDB.jpg" }
    ]
  },

  {
    title: "Quiz App",
    description:
      "A frontend quiz app displaying MCQs, tracks user selections, navigates between questions, and shows the final score.",
    image: "/quiz-app.png",
    tech: [
        { name: "JavaScript", logo: "/JS.jpg" },
        { name: "React.js", logo: "/react.jpg" },
    ]
  },

  {
    title: "Agency Portfolio",
    description:
      "Modern responsive digital agency website with premium UI design.",
    image: "/agency-website.png",
    tech: [
        { name: "Next.js", logo: "/next.jpg" },
        { name: "Tailwind CSS", logo: "https://tse4.mm.bing.net/th/id/OIP.pEeKeUoENMqoN-kR8f8XoQHaFj?r=0&cb=thfc1falcon&pid=Api"},
        { name: "Node.js", logo: "/node.jpg" },
        { name: "Express.js", logo: "https://tse1.mm.bing.net/th/id/OIP.1ji9NLQl3sOXktSoEYnt3wHaHa?r=0&pid=Api" },
    ]
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section className="section-glow bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 py-24" id="projects">

      <div className="mx-auto max-w-6xl px-6">

        <h2 className="text-center text-4xl font-bold">
          Featured Projects
        </h2>

        <motion.div
            variants={container}
            initial={false}
            viewport={{ once: true, amount: 0.2 }}
            animate={{ opacity: 1, x: 0 }}
            className="mt-12 grid gap-8 md:grid-cols-3"
        >

          {(projects ?? []).map((project) => (
            <motion.div
                variants={item}
                key={project.title}
                className="
                group overflow-hidden rounded-2xl flex flex-col h-full bg-white dark:bg-gray-900
                border border-gray-200 dark:border-gray-800
                shadow-sm transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl
                hover:border-gray-300 dark:hover:border-gray-600
                hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]"
            >
                
              <div className="h-48 sm:h-52 bg-gray-200 dark:bg-gray-800">
                <img
                    src={project.image}
                    alt={project.title}
                    className="
                     w-full h-full object-cover hover:scale-105
                     transition-transform duration-300
                    "
                />
              </div>

              <div className="p-6 flex flex-col h-full">

                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="mt-5 flex flex-wrap gap-2">

                 {project.tech.map((item) => (
                    <div key={item.name} className="flex items-center gap-2">
                    
                    <img
                        src={item.logo}
                        alt={item.name}
                        className="w-7 h-7 object-contain"
                    />

                    <span className="text-sm text-gray-700 dark:text-gray-300">
                        {item.name}
                    </span>

                    </div>
                ))}

                </div>

              </div>

            </motion.div>
          ))}

        </motion.div>

      </div>

    </section>
  );
}