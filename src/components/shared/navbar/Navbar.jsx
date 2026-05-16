"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { User, Menu, X, ChevronRight } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "My trips", path: "/my-trips" },
    { name: "Admin", path: "/add-destination" },
  ];

  const authLinks = [
    { name: "Login", path: "/login" },
    { name: "Sign Up", path: "/signup" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6 text-gray-800" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                W
              </div>
              <span className="text-xl font-bold text-gray-900">
                Wanderlust
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    pathname === link.path
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop Auth */}
            <div className="hidden lg:flex items-center space-x-3">
              {authLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="px-5 py-2 rounded-lg font-medium bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Profile Link */}
            <Link href="/profile" className="lg:hidden p-2">
              <User className="w-6 h-6 text-gray-800" />
            </Link>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU DRAWER - Moved outside <nav> and uses fixed inset-0 */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Content Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-in-out transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b">
              <span className="font-bold text-xl">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto p-5">
              <div className="flex flex-col gap-2">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Navigation
                </p>
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3 rounded-xl font-medium ${
                      pathname === link.path
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-2">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Account
                </p>
                {authLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center p-3 rounded-xl bg-gray-100 text-gray-700 font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-5 border-t bg-gray-50">
              <p className="text-xs text-center text-gray-500">
                © {new Date().getFullYear()} Wanderlust
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
