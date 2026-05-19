"use client";

import { motion } from "framer-motion";


const projects = [
  {
    title: "QR-code based Restaurant Platform",
    description:
      "QR-based restaurant management system with digital menus and ordering.",
    image: "/QR-Code Restaurant Web App.png",
    tech: [
        { name: "Node.js", logo: "/node.jpg" },
        { name: "Express.js", logo: "https://tse1.mm.bing.net/th/id/OIP.1ji9NLQl3sOXktSoEYnt3wHaHa?r=0&pid=Api" },
        { name: "React.js", logo: "/react.jpg" },
        { name: "Tailwind CSS", logo: "https://tse4.mm.bing.net/th/id/OIP.pEeKeUoENMqoN-kR8f8XoQHaFj?r=0&cb=thfc1falcon&pid=Api"},
        { name: "MongoDB", logo: "/mongoDB.jpg" }
    ]
  },

  {
    title: "Chat Application",
    description:
      "A full-stack real-time chat application enabling instant messaging between users with live updates, authentication, and clean UI design.",
    image: "",
    tech: [
        { name: "Node.js", logo: "/node.jpg" },
        { name: "Express.js", logo: "https://tse1.mm.bing.net/th/id/OIP.1ji9NLQl3sOXktSoEYnt3wHaHa?r=0&pid=Api" },
        { name: "React.js", logo: "/react.jpg" },
        { name: "MongoDB", logo: "/mongoDB.jpg" }
    ]
  },

  {
    title: "Agency Portfolio",
    description:
      "Modern responsive digital agency website with premium UI design.",
    image: "/Agency Website.png",
    tech: [
        { name: "Next.js", logo: "/next.jpg" },
        { name: "Tailwind CSS", logo: "https://tse4.mm.bing.net/th/id/OIP.pEeKeUoENMqoN-kR8f8XoQHaFj?r=0&cb=thfc1falcon&pid=Api"}
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
    <section className="bg-white dark:bg-black py-24" id="projects">

      <div className="mx-auto max-w-6xl px-6">

        <h2 className="text-center text-4xl font-bold">
          Featured Projects
        </h2>

        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-12 grid gap-8 md:grid-cols-3"
        >

          {projects.map((project) => (
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
                        className="w-5 h-5 object-contain"
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