import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="section-glow py-24 flex items-center justify-center">

      <div className="mx-auto max-w-6xl px-6 py-14">

        <div className="grid gap-8 sm:gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">NovaDigital</h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              We build modern web experiences using clean design,
              scalable architecture, and MERN stack solutions.
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex flex-wrap gap-4 text-gray-600 text-xl">

                <a href="#" className="hover:text-black transition">
                    <FaGithub />
                </a>

                <a href="#" className="hover:text-black transition">
                    <FaLinkedin />
                </a>

                <a href="#" className="hover:text-black transition">
                    <FaTwitter />
                </a>

                <a href="#" className="hover:text-black transition">
                    <FaInstagram />
                </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>

            <ul className="mt-4 space-y-3 text-gray-600 text-sm sm:text-base">

                <li><Link href="/" className="hover:text-black cursor-pointer transition">Home</Link></li>
                {/* <li><a href="/about" className="hover:text-black cursor-pointer transition">About</a></li> */}
                <li><Link href="/services" className="hover:text-black cursor-pointer transition">Services</Link></li>
                <li><Link href="/projects" className="hover:text-black cursor-pointer transition">Projects</Link></li>
                <li><Link href="/contact" className="hover:text-black cursor-pointer transition">Contact</Link></li>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold">Services</h3>

            <ul className="mt-4 space-y-3 text-gray-600">

              <li>
                Frontend Development
              </li>

              <li>
                Backend APIs
              </li>

              <li>
                Database Design
              </li>

              <li>
                UI/UX Design
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-gray-500 text-sm">

          <p>
            © {new Date().getFullYear()} NovaDigital. All rights reserved.
          </p>

          <p className="mt-2 md:mt-0">
            Built with Next.js
          </p>

        </div>

      </div>

    </footer>
  );
}