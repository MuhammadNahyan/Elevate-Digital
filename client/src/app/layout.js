import "./globals.css";
import Navbar from "@/components/Navbar";
import CursorProvider from "@/components/CursorProvider";
import { Toaster } from "react-hot-toast";
// import PageSync from "@/components/PageSync";
// // import { useEffect } from "react";
// import NavigationSync from "@/components/NavigationSync";

// export const metadata = {
//   title: "ElevateDigital Agency",
//   description: "Agency Platform"
// }


export default function RootLayout({ children }) {

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className="
          text-black dark:text-white
          bg-white
          dark:bg-[linear-gradient(135deg,#020617,#0f172a,#111827,#0f172a,#020617)]
          dark:bg-[length:300%_300%]
          dark:animate-[gradientShift_15s_ease_infinite]
          min-h-screen
          overflow-x-hidden
        "
      >
        {/* <NavigationSync/>
        <PageSync /> */}
          {/* Ambient Background Blobs */}
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

            <div
              className="
              absolute top-[-10rem] left-[-5rem]
              w-[30rem] h-[30rem]
              bg-emerald-500/40
              rounded-full blur-3xl
              "
              style={{
                animation: "blob 12s ease-in-out infinite",
              }}
            />

            <div
              className="
              absolute top-[20rem] right-[-10rem]
              w-[35rem] h-[35rem]
              bg-cyan-500/30
              rounded-full blur-3xl
              "
              style={{
                animation: "blob 14s ease-in-out infinite",
                animationDelay: "2s",
              }}
            />

            <div
              className="
                absolute bottom-[-10rem] left-[30%]
                w-[25rem] h-[25rem]
                bg-indigo-500/40
                rounded-full blur-3xl
                "
              style={{
                animation: "blob 16s ease-in-out infinite",
                animationDelay: "4s",
              }}
            />

          </div>

          

          <Navbar />
          <CursorProvider />
          <div>
            {children}
          </div>
          <Toaster position="top-right" />
          
        
      </body>
    </html>
  );
}
