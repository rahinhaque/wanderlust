"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { User } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Add Destinations", path: "/add-destination" },
    { name: "Admin", path: "/admin" },
  ];

  const authLinks = [
    { name: "Login", path: "/login" },
    { name: "Sign Up", path: "/signup" },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md px-6 py-4 sticky top-0 left-0 right-0 z-50 border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Navigation */}
        <div className="flex gap-6 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.path}
                href={link.path}
                className={`relative font-medium transition-all duration-300 hover:text-cyan-500 hover:scale-105 ${
                  isActive ? "text-cyan-500" : "text-gray-700"
                }`}
              >
                {link.name}

                {/* Active Underline Animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Brand */}
        <Link
          href="/"
          className="text-3xl font-black bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
        >
          Wanderlust
        </Link>

        {/* Right Navigation */}
        <div className="flex gap-6 items-center">
          {/* Profile */}
          <Link
            href="/profile"
            className={`flex items-center gap-2 font-medium transition-all duration-300 hover:text-cyan-500 hover:scale-105 ${
              pathname === "/profile" ? "text-cyan-500" : "text-gray-700"
            }`}
          >
            <User className="w-5 h-5" />
            Profile
          </Link>

          {/* Auth Links */}
          {authLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.path}
                href={link.path}
                className={`font-medium transition-all duration-300 hover:text-cyan-500 hover:scale-105 ${
                  isActive ? "text-cyan-500" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
