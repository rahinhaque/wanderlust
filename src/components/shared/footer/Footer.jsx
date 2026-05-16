import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 py-12 md:py-16 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Branding Section */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tighter">
            Wanderlust
          </h1>
          <p className="mt-4 max-w-xl mx-auto md:mx-0 text-sm sm:text-base leading-relaxed">
            Your gateway to extraordinary travel experiences around the world.
            Discover hidden gems and create memories that last a lifetime.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Newsletter - Priority 1 on mobile */}
          <div className="order-first lg:order-none sm:col-span-2 lg:col-span-1">
            <h3 className="text-white font-bold mb-4 tracking-widest text-sm">
              NEWSLETTER
            </h3>
            <p className="mb-4 text-sm">
              Subscribe for exclusive travel deals and inspiration.
            </p>
            <div className="flex items-center bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus-within:border-cyan-500 transition-colors group">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent outline-none flex-1 text-sm text-white placeholder:text-gray-600"
              />
              <button
                aria-label="Subscribe"
                className="text-white hover:text-cyan-400 transition-transform hover:translate-x-1"
              >
                <span className="text-xl">↗</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start">
            <h3 className="text-white font-bold mb-4 tracking-widest text-sm">
              QUICK LINKS
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">
                Home
              </li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">
                Destinations
              </li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">
                My Bookings
              </li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">
                My Profile
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col items-start">
            <h3 className="text-white font-bold mb-4 tracking-widest text-sm">
              SUPPORT
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">
                Help Center
              </li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">
                Terms of Service
              </li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start">
            <h3 className="text-white font-bold mb-4 tracking-widest text-sm">
              CONTACT US
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white transition-colors">
                786 901 1622
              </li>
              <li className="hover:text-white transition-colors">
                info@wanderlust.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} Wanderlust. Crafted for explorers. All
            rights reserved.
          </p>

          {/* Social Icons with Hover Effects */}
          <div className="flex gap-6 text-white text-xl">
            <span className="hover:text-cyan-500 cursor-pointer transition-all hover:-translate-y-1">
              X
            </span>
            <span className="hover:text-cyan-500 cursor-pointer transition-all hover:-translate-y-1">
              in
            </span>
            <span className="hover:text-cyan-500 cursor-pointer transition-all hover:-translate-y-1">
              ◎
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
