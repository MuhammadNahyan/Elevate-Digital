import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-24 flex items-center justify-center">

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

                <li><a href="#home" className="hover:text-black cursor-pointer transition">Home</a></li>
                <li><a href="#services" className="hover:text-black cursor-pointer transition">Services</a></li>
                <li><a href="#projects" className="hover:text-black cursor-pointer transition">Projects</a></li>
                <li><a href="#contact" className="hover:text-black cursor-pointer transition">Contact</a></li>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold">Services</h3>

            <ul className="mt-4 space-y-3 text-gray-600">

              <li className="hover:text-black transition cursor-pointer">
                Frontend Development
              </li>

              <li className="hover:text-black transition cursor-pointer">
                Backend APIs
              </li>

              <li className="hover:text-black transition cursor-pointer">
                Database Design
              </li>

              <li className="hover:text-black transition cursor-pointer">
                UI/UX Design
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">

          <p>
            © {new Date().getFullYear()} NovaDigital. All rights reserved.
          </p>

          <p className="mt-2 md:mt-0">
            Built with React & Next.js
          </p>

        </div>

      </div>

    </footer>
  );
}