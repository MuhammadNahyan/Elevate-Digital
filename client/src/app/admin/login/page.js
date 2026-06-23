"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

    if (password === correctPassword) {
      localStorage.setItem("admin-auth", "true");
      toast.success("Login successful!");
      router.push("/admin");
    } else {
      toast.error("Invalid password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <form
        onSubmit={handleLogin}
        className="p-8 rounded-xl border w-96 bg-white dark:bg-gray-900"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">
          Admin Login
        </h1>

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded mb-4"
        />

        <button
          type="submit"
          className="w-full bg-black text-white dark:bg-white dark:text-black py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}