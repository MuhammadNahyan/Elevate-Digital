// "use client";

// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import Link from "next/link";

// const homeLinks = [
//   { name: "Home", id: "home", path: "#home" },
//   { name: "About", id: "about", path: "#about" },
//   { name: "Services", id: "services", path: "#services" },
//   { name: "Projects", id: "projects", path: "#projects" },
//   { name: "Contact", id: "contact", path: "#contact" },
// ];

// const pageLinks = [
//   { name: "Home", path: "/", id: "home" },
//   { name: "Projects", path: "/projects", id: "projects-page" },
//   { name: "Services", path: "/services", id: "services-page" },
//   { name: "Contact", path: "/contact", id: "contact-page" }
// ];

// export default function Navbar() {

//   const pathname = usePathname();
//   const isHome = pathname === "/";
//   const navLinks = isHome ? homeLinks : pageLinks;

//   const [menuOpen, setMenuOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const [active, setActive] = useState("home");
//   const [scrolled, setScrolled] = useState(false);

//   // ✅ Dark mode toggle (unchanged)
//   const toggleDarkMode = () => {
//     const isDark = document.documentElement.classList.contains("dark");

//     if (isDark) {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("darkMode", "false");
//     } else {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("darkMode", "true");
//     }
//   };

//   // ✅ Scroll spy (ONLY homepage)
//   useEffect(() => {
//     if (!isHome) return;
//     if (typeof window === "undefined") return;

//     let observer;

//     const timeout = setTimeout(() => {
//       const sections = document.querySelectorAll("section[id]");

//       observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               setActive(entry.target.id);
//             }
//           });
//         },
//         { threshold: 0.4 }
//       );

//       sections.forEach((s) => observer.observe(s));
//     }, 0);

//     return () => {
//       clearTimeout(timeout);
//       if (observer) {
//         const sections = document.querySelectorAll("section[id]");
//         sections.forEach((s) => observer.unobserve(s));
//         observer.disconnect();
//       }
//     };
//   }, [isHome, pathname]);

//   // ✅ Scroll state
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // ✅ Reset on route change
//   useEffect(() => {
//     setActive("home");

//     // stop stale observer effects
//     const sections = document.querySelectorAll("section[id]");
//     sections.forEach(sec => sec.getBoundingClientRect()); // forces layout recalculation

//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return (
//     <>
//       {menuOpen && (
//         <div
//           className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
//           onClick={() => setMenuOpen(false)}
//         />
//       )}

//       <nav
//         className={`
//           sticky top-0 z-50
//           flex items-center justify-between
//           px-4 sm:px-6 md:px-8 py-4
//           backdrop-blur-xl
//           bg-white/60 dark:bg-black/40
//           border-b border-white/10
//           ${scrolled
//             ? "bg-white/70 dark:bg-black/50 shadow-lg"
//             : "bg-white/40 dark:bg-black/20"}
//         `}
//       >
//         {/* Logo */}
//         <h1 className="text-2xl font-bold">NovaDigital</h1>

//         {/* Desktop Links */}
//         <div className="hidden md:flex gap-6">
//           {navLinks.map((link) => {
//             const isHash = link.path.startsWith("#");

//             if (isHash) {
//               return (
//                 <a
//                   key={link.path}
//                   href={link.path}
//                   className={`transition ${
//                     active === link.id
//                       ? "text-black dark:text-white font-bold"
//                       : "text-gray-500"
//                   }`}
//                 >
//                   {link.name}
//                 </a>
//               );
//             }

//             return (
//               <Link
//                 key={link.path}
//                 href={link.path}
//                 className={`transition ${
//                   pathname === link.path
//                     ? "text-black dark:text-white font-bold"
//                     : "text-gray-500"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             );
//           })}
//         </div>

//         {/* Controls */}
//         <div className="flex items-center gap-3">

//           <button
//             onClick={toggleDarkMode}
//             className="px-3 py-1 border rounded"
//           >
//             {darkMode ? "☀️" : "🌙"}
//           </button>

//           <button
//             className="md:hidden text-2xl"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             ☰
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`
//             fixed top-0 right-0 h-full w-72 z-[1000]
//             backdrop-blur-2xl
//             border-l border-white/20 dark:border-gray-700
//             shadow-2xl
//             transform transition-transform duration-300
//             ${menuOpen ? "translate-x-0" : "translate-x-full"}
//           `}
//         >
//           <div
//             onClick={(e) => e.stopPropagation()}
//             className="flex flex-col p-6 gap-6 bg-white/90 dark:bg-black/90 h-full"
//           >
//             <button
//               className="text-4xl"
//               onClick={() => setMenuOpen(false)}
//             >
//               ←
//             </button>

//             {navLinks.map((link) => {
//               const isHash = link.path.startsWith("#");

//               if (isHash) {
//                 return (
//                   <a
//                     key={link.path}
//                     href={link.path}
//                     className={`transition ${
//                       active === link.id
//                         ? "text-black dark:text-white font-bold"
//                         : "text-gray-500"
//                     }`}
//                   >
//                     {link.name}
//                   </a>
//                 );
//               }

//               return (
//                 <Link
//                   key={link.path}
//                   href={link.path}
//                   className={`transition ${
//                     pathname === link.path
//                       ? "text-black dark:text-white font-bold"
//                       : "text-gray-500"
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }





"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const homeLinks = [
  { name: "Home", id: "home", path: "#home" },
  { name: "About", id: "about", path: "#about" },
  { name: "Services", id: "services", path: "#services" },
  { name: "Projects", id: "projects", path: "#projects" },
  { name: "Contact", id: "contact", path: "#contact" },
];

const pageLinks = [
  { name: "Home", path: "/", id: "home" },
  { name: "Projects", path: "/projects", id: "projects" },
  { name: "Services", path: "/services", id: "services" },
  { name: "Contact", path: "/contact", id: "contact" }
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navLinks = isHome ? homeLinks : pageLinks;

  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // 🌙 Dark mode
  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.contains("dark");

    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    }
  };

  // 📜 Scroll state (safe everywhere)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ⚠️ ONLY run scroll spy on homepage
  useEffect(() => {
    if (!isHome) return;

    let observer;

    const init = () => {
      const sections = document.querySelectorAll("section[id]");
      if (!sections.length) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(entry.target.id);
            }
          });
        },
        { threshold: 0.4 }
      );

      sections.forEach((s) => observer.observe(s));
    };

    // delay ensures DOM exists
    const timeout = setTimeout(init, 100);

    return () => {
      clearTimeout(timeout);
      if (observer) observer.disconnect();
    };
  }, [isHome]);

  // reset active on route change
  useEffect(() => {
    setActive("home");
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <nav
        className={`
          sticky top-0 z-50
          flex items-center justify-between
          px-4 sm:px-6 md:px-8 py-4
          backdrop-blur-xl
          border-b border-white/10
          ${scrolled
            ? "bg-white/70 dark:bg-black/50 shadow-lg"
            : "bg-white/40 dark:bg-black/20"}
        `}
      >
        {/* Logo */}
        <h1 className="text-2xl font-bold">NovaDigital</h1>

        {/* Desktop */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => {
            const isHash = link.path.startsWith("#");

            if (isHash) {
              return (
                <a
                  key={link.path}
                  href={link.path}
                  className={active === link.id ? "font-bold" : "text-gray-500"}
                >
                  {link.name}
                </a>
              );
            }

            return (
              <Link
                key={link.path}
                href={link.path}
                className={pathname === link.path ? "font-bold" : "text-gray-500"}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <button onClick={toggleDarkMode} className="px-3 py-1 border rounded">
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile */}
        <div
          className={`
            fixed top-0 right-0 h-full w-72 z-[1000]
            backdrop-blur-2xl
            transition-transform duration-300
            ${menuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="p-6 flex flex-col gap-6">
            <button onClick={() => setMenuOpen(false)}>←</button>

            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}