"use client";

import { useEffect } from "react";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ContactPage() {
  
  useEffect(() => {
  console.log("Contact mounted");
  return () => console.log("Contact unmounted");
}, []);

  return (
    <div key="contact-page">
    <main suppressHydrationWarning>
      <Contact />
      <Footer />
    </main>
    </div>
  );
}