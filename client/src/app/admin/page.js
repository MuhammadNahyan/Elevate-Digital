"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    const res = await fetch("/api/contact", {
        cache: "no-store",
    });

    if (!res.ok) {
        console.error(await res.text()); // DEBUG
        console.error("API Error:", text);
        throw new Error("Failed to fetch content");
    }

    const data = await res.json();
    setMessages(data.messages);
    };

    useEffect(() => {
    fetchMessages();
  }, []);

  const deleteMessage = async (id) => {
    console.log("Deleting ID:", id);
    const confirmed = window.confirm(
        "Are you sure you want to delete this message?"
    );

    if (!confirmed) return;

    try {
        const res = await fetch(
        `/api/contact/delete/${id}`,
        {
            method: "DELETE",
        }
        );

        fetchMessages();

        const data = await res.json();

        if (data.success) {
        setMessages((prev) =>
            prev.filter((msg) => msg._id !== id)
        );
        }
    } catch (err) {
        console.error(err);
    }
  };

  useEffect(() => {
    fetch("/api/contact/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMessages(data.messages || [])
      });
  }, []);

  const router = useRouter();

  useEffect(() => {
    const isAuth = localStorage.getItem("admin-auth");

    if (!isAuth) {
        router.push("/admin/login");
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">

            {/* HEADER */}
            <div className="mb-10">
            <h1 className="text-4xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
                Manage contact submissions in real time
            </p>
            </div>

            {/* STATS CARDS */}
            <div className="grid gap-4 md:grid-cols-3 mb-8">
                <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 bg-white dark:bg-gray-900">
                    <p className="text-sm text-gray-500">Total Messages</p>
                    <h2 className="text-3xl font-bold mt-2">
                    {messages.length}
                    </h2>
                </div>

                <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 bg-white dark:bg-gray-900">
                    <p className="text-sm text-gray-500">Status</p>
                    <h2 className="text-3xl font-bold mt-2 text-green-500">
                    Online
                    </h2>
                </div>

                <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 bg-white dark:bg-gray-900">
                    <p className="text-sm text-gray-500">Latest Submission</p>
                    <h2 className="text-lg font-semibold mt-2">
                    {messages[0]?.name || "No messages"}
                    </h2>
                </div>
            </div>

            {/* MESSAGES GRID */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {messages.map((msg) => (
                <div
                key={msg._id}
                className="
                    p-5 rounded-2xl
                    bg-white dark:bg-gray-900
                    border border-gray-200 dark:border-gray-800
                    shadow-sm
                    hover:shadow-xl hover:-translate-y-1
                    transition-all duration-300
                "
                >

                {/* EMAIL BADGE */}
                <p className="text-xs text-blue-500 mb-2">
                    {msg.email}
                </p>

                {/* NAME */}
                <h2 className="text-xl font-semibold">
                    {msg.name}
                </h2>

                {/* MESSAGE */}
                <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">
                    {msg.message}
                </p>

                {/* FOOTER */}
                <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                        ID: {msg._id.slice(-6)}
                    </span>
                    
                    <button
                        onClick={() => deleteMessage(msg._id)}
                        className="
                            px-3 py-2
                            rounded-lg
                            text-sm
                            bg-red-500
                            text-white
                            hover:bg-red-600
                            transition
                        "
                    >
                        Delete
                    </button>
                </div>

                </div>
            ))}

            </div>

        </div>
    </div>
  );
}

// “I kept the /admin route out of the public navbar because it’s not meant for general users. 
// It’s a protected internal route used only for content management. 
// In real-world applications, admin panels are usually not exposed in navigation to reduce visibility and avoid unnecessary access attempts.
// Instead, access is controlled through authentication, so only users who know the route and have valid credentials can enter.”


// “Hiding it in the UI is not the security layer itself — the actual protection comes from route-based authentication. 
// The navbar decision is just UX and surface-level security, while real protection is handled in the admin login logic and route guards.”