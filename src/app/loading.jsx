"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plane, Globe } from "lucide-react";

export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
      <div className="relative flex flex-col items-center">
        {/* The World/Compass Container */}
        <div className="relative w-32 h-32 flex items-center justify-center mb-8">
          {/* Rotating Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-dashed border-cyan-200 rounded-full"
          />

          {/* Pulsing Globe Icon */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-cyan-100"
          >
            <Globe size={64} strokeWidth={1} />
          </motion.div>

          {/* Soaring Plane circling the globe */}
          <motion.div
            style={{ position: "absolute", width: "100%", height: "100%" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Plane
              size={24}
              className="text-cyan-600 fill-cyan-600 absolute -top-2 left-1/2 -translate-x-1/2 rotate-90"
            />
          </motion.div>
        </div>

        {/* Brand Typography */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 tracking-tighter">
            Wanderlust
          </h2>
          <div className="flex items-center justify-center gap-1 mt-2">
            {["L", "O", "A", "D", "I", "N", "G"].map((char, i) => (
              <motion.span
                key={i}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-500"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Subtle Progress Track */}
        <div className="mt-10 w-40 h-[1px] bg-gray-100 relative overflow-hidden">
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-cyan-500 w-1/2"
          />
        </div>
      </div>

      {/* Decorative background element */}
      <div className="absolute bottom-10 text-gray-300 text-[10px] font-medium uppercase tracking-[0.5em] opacity-40">
        Discover the World
      </div>
    </div>
  );
}
