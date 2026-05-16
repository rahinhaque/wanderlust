"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Mail, Lock, User, ArrowRight } from "lucide-react";

const SignUpPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <div className="min-h-screen mt-20 w-full flex items-center justify-center bg-gray-50 lg:bg-white">
      <div className="flex w-full h-screen overflow-hidden">
        {/* LEFT SIDE: Brand & Image (Hidden on mobile) */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-blue-900">
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80"
            alt="Mountain Lake Adventure"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="relative z-10 p-12 flex flex-col justify-between w-full text-white">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center font-bold text-2xl">
                W
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Wanderlust
              </span>
            </Link>

            <div>
              <h2 className="text-4xl font-bold mb-4 leading-tight">
                Adventure awaits <br />
                just a click away.
              </h2>
              <p className="text-blue-100 text-lg max-w-md">
                Join our community of world travelers and get access to custom
                itineraries and member-only pricing.
              </p>
            </div>

            <p className="text-sm text-blue-200/60">
              © 2026 Wanderlust Travel Media
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Signup Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-white overflow-y-auto">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="lg:hidden flex justify-center mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
                  W
                </div>
                <span className="text-xl font-bold text-gray-900 tracking-tight">
                  Wanderlust
                </span>
              </div>
            </div>

            <div className="mb-8 text-center lg:text-left">
              <h1 className="text-3xl font-bold text-gray-900">
                Create Account
              </h1>
              <p className="text-gray-500 mt-2">
                Join us and start planning your dream trip.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all text-sm"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <Mail size={18} />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all text-sm"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <Lock size={18} />
                  </div>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all text-sm"
                  />
                </div>
              </div>

              <p className="text-[11px] text-gray-500 leading-relaxed">
                By creating an account, you agree to our{" "}
                <span className="text-cyan-600 font-bold cursor-pointer">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-cyan-600 font-bold cursor-pointer">
                  Privacy Policy
                </span>
                .
              </p>

              {/* Register Button */}
              <button
                type="submit"
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 group active:scale-[0.98]"
              >
                Create Account
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-100"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-4 text-gray-400 font-medium">
                    Or sign up with
                  </span>
                </div>
              </div>

              {/* Social Logins */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  className="w-full bg-white border border-gray-200 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2 text-sm active:scale-[0.98]"
                >
                  <FaGoogle className="text-red-500" size={16} />
                  Google
                </button>
                <button
                  type="button"
                  className="w-full bg-white border border-gray-200 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2 text-sm active:scale-[0.98]"
                >
                  <FaGithub size={18} />
                  Github
                </button>
              </div>
            </form>

            <p className="mt-8 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-cyan-600 font-bold hover:underline transition-all"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
