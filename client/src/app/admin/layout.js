"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-white dark:bg-black text-black dark:text-white">

      {/* SIDEBAR */}
      <aside className="w-64 border-r border-gray-200 dark:border-gray-800 p-6 hidden md:block">
        <h1 className="text-xl font-bold mb-10">Admin Panel</h1>

        <nav className="flex flex-col gap-4 text-gray-600 dark:text-gray-300">
          <Link href="/">Back to Site</Link>
        </nav>
      </aside>

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col">

        {/* TOPBAR */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">

          <h2 className="font-semibold">Dashboard</h2>

          {/* Avatar Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center"
            >
              A
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded shadow-lg">
                <button
                  onClick={() => {
                    localStorage.removeItem("admin-auth");
                    window.location.href = "/admin/login";
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="p-6">{children}</main>

      </div>
    </div>
  );
}