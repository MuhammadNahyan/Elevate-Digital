"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  
  // const handleMouseMove = (e) => {
  //   const rect = e.currentTarget.getBoundingClientRect();
  //   const x = e.clientX - rect.left;
  //   const y = e.clientY - rect.top;

  //   e.currentTarget.style.setProperty("--x", `${x}px`);
  //   e.currentTarget.style.setProperty("--y", `${y}px`);
  // };
  
  const handleChange = (e) => {
    setFormData({
        ...formData, 
        [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        setLoading(true);
        
        console.log(formData);

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(formData)
        })

        const data = await response.json();

        // if (!response.ok) {
        //   setResponseMessage(data.error || "Request failed");
        //   return;
        // }

        if(data.success) {
          toast.success("Message sent successfully!");
        

          setFormData({
            name: "",
            email: "",
            message: ""
          })

          return;
        } 

        toast.error(data.error || "Something went wrong");

    } catch (err) {
        toast.error(err.message || "Server error");
    } finally {
        setLoading(false);
    }
  };


  return (
    <section id="contact" className="section-glow py-24 bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <div
          // initial={false}
          // animate={{ opacity: 1, x: 0 }}
          // viewport={{ once: true, amount: 0.2}}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-black dark:text-white">
            Get In Touch
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Have a project in mind? Let’s build something amazing.
          </p>
        </div>

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

            <div className="text-sm text-gray-400">
              Typical response time: within 24 hours
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <form
            onSubmit={handleSubmit}
            // initial={{ opacity: 0, y: 20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            className="space-y-4 p-4 sm:p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent p-3 sm:p-4 text-black dark:text-white outline-none focus:border-black dark:focus:border-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent p-3 text-black dark:text-white outline-none focus:border-black dark:focus:border-white"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent p-3 text-black dark:text-white outline-none focus:border-black dark:focus:border-white"
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-black py-3 text-white transition hover:opacity-80 dark:bg-white dark:text-black"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            <p>{responseMessage}</p>
          </form>

        </div>
      </div>
    </section>
  );
}