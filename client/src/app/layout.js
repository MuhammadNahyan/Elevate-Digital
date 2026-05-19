import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "NovaDigital Agency",
  description: "Agency Platform"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-black dark:text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
