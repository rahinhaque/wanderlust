"use client";

import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center text-white flex flex-col justify-between items-center min-h-[600px] md:min-h-[700px] lg:min-h-[85vh] overflow-hidden mt-20"
      style={{
        // 1. Matches your confirmed filename: Banner.png
        // 2. Added a fallback background color so the section isn't invisible
        backgroundColor: "#020617",
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url('/assets/Banner.png')",
      }}
    >
      {/* 1. Pulse Overlay */}
      <div className="absolute inset-0 bg-cyan-900/10 animate-pulse pointer-events-none"></div>

      {/* 2. Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 mt-16 md:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight transition-all duration-500 hover:scale-[1.02] animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Discover Your <br className="hidden sm:block" />
          <span className="text-cyan-400">Next Adventure</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/destinations"
            className="uppercase bg-cyan-500 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:bg-cyan-600 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/40 active:scale-95 text-center"
          >
            Explore Now
          </Link>

          <Link
            href="/destinations"
            className="uppercase px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg font-bold transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95 text-center"
          >
            View Destinations
          </Link>
        </div>
      </div>

      {/* 3. Bottom Search Bar */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 pb-10">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2 sm:p-3 flex flex-col lg:flex-row items-stretch lg:items-center gap-2 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 flex-1">
            <div className="p-4 hover:bg-white/5 rounded-xl transition-colors cursor-pointer group">
              <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                Location
              </h3>
              <p className="text-sm truncate text-gray-200 group-hover:text-white">
                Where to?
              </p>
            </div>
            <div className="p-4 border-l border-white/10 hover:bg-white/5 rounded-xl transition-colors cursor-pointer group">
              <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                Date
              </h3>
              <p className="text-sm truncate text-gray-200 group-hover:text-white">
                When?
              </p>
            </div>
            <div className="p-4 border-l border-white/10 hover:bg-white/5 rounded-xl transition-colors cursor-pointer group">
              <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                Budget
              </h3>
              <p className="text-sm truncate text-gray-200 group-hover:text-white">
                $500 - $3000
              </p>
            </div>
            <div className="p-4 border-l border-white/10 hover:bg-white/5 rounded-xl transition-colors cursor-pointer group">
              <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                People
              </h3>
              <p className="text-sm truncate text-gray-200 group-hover:text-white">
                2 Adults
              </p>
            </div>
          </div>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 lg:py-0 lg:px-10 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 shadow-lg shadow-cyan-500/20">
            <span className="lg:hidden text-sm uppercase tracking-widest">
              Search Experiences
            </span>
            <span className="hidden lg:block">Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
