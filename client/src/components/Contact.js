"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent (demo only)");
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-black dark:text-white">
            Get In Touch
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Have a project in mind? Let’s build something amazing.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-12 grid gap-10 md:grid-cols-2">

          {/* LEFT SIDE INFO */}
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-xl font-semibold text-black dark:text-white">
                Let’s talk
              </h3>
              <p className="mt-2">
                I’m available for freelance work, collaborations, and full-stack projects.
              </p>
            </div>

            <div>
              <p><strong>Email:</strong> yourmail@example.com</p>
              <p><strong>Location:</strong> Karachi, Pakistan</p>
            </div>

            <div className="text-sm text-gray-500">
              Typical response time: within 24 hours
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 p-4 sm:p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent p-3 sm:p-4 text-black dark:text-white outline-none focus:border-black dark:focus:border-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent p-3 text-black dark:text-white outline-none focus:border-black dark:focus:border-white"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent p-3 text-black dark:text-white outline-none focus:border-black dark:focus:border-white"
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-black py-3 text-white transition hover:opacity-80 dark:bg-white dark:text-black"
            >
              Send Message
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}