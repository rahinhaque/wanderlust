import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white/90 backdrop-blur-sm px-6 py-4 absolute top-0 left-0 right-0 z-10 transition-all duration-300 hover:bg-white/95 hover:shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Navigation Links */}
        <div className="flex gap-6">
          <a href="/" className="text-cyan-500 font-medium border-b-2 border-cyan-500 pb-1 transition-all duration-300 hover:scale-110 hover:text-cyan-600">Home</a>
          <a href={"/destinations"} className="text-gray-700 hover:text-cyan-500 font-medium transition-all duration-300 hover:scale-110 hover:translate-y-[-2px]">Destinations</a>
          <a href={"/bookings"} className="text-gray-700 hover:text-cyan-500 font-medium transition-all duration-300 hover:scale-110 hover:translate-y-[-2px]">My Bookings</a>
          <a href={"/admin"} className="text-gray-700 hover:text-cyan-500 font-medium transition-all duration-300 hover:scale-110 hover:translate-y-[-2px]">Admin</a>
        </div>

        {/* Brand Name */}
        <div className="text-2xl font-bold text-cyan-500 transition-all duration-300 hover:scale-110 hover:rotate-3 hover:text-cyan-600 cursor-pointer">
          Wanderlast
        </div>

        {/* Right Navigation Links */}
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2 group">
            <svg className="w-5 h-5 text-gray-700 group-hover:text-cyan-500 transition-all duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <a href={"/profile"} className="text-gray-700 hover:text-cyan-500 font-medium transition-all duration-300 hover:scale-110 hover:translate-y-[-2px]">Profile</a>
          </div>
          <a href={"/login"} className="text-gray-700 hover:text-cyan-500 font-medium transition-all duration-300 hover:scale-110 hover:translate-y-[-2px]">Login</a>
          <a href={"/signup"} className="text-gray-700 hover:text-cyan-500 font-medium transition-all duration-300 hover:scale-110 hover:translate-y-[-2px]">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;