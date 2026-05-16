"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plane } from "lucide-react";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-md">
      <div className="relative flex flex-col items-center">
        {/* Animated Plane Path */}
        <motion.div
          animate={{
            x: [-20, 20, -20],
            y: [0, -10, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-cyan-600 mb-4"
        >
          <Plane
            size={48}
            fill="currentColor"
            className="opacity-20 absolute -top-1 -left-1 blur-sm"
          />
          <Plane size={48} />
        </motion.div>

        {/* Pulsing Text */}
        <motion.h2
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="text-2xl font-bold text-gray-900 tracking-tight"
        >
          Preparing your <span className="text-cyan-600">Adventure...</span>
        </motion.h2>

        {/* Progress Bar Background */}
        <div className="mt-6 w-48 h-1.5 bg-gray-100 rounded-full overflow-hidden relative">
          {/* Animated Progress Filler */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-full"
          />
        </div>

        {/* Decorative Compass Lines (Optional) */}
        <div className="absolute -z-10 opacity-5">
          <div className="w-64 h-64 border-2 border-dashed border-cyan-900 rounded-full animate-[spin_20s_linear_infinite]" />
        </div>
      </div>

      <p className="mt-8 text-sm text-gray-400 font-medium uppercase tracking-widest">
        Wanderlust Travel
      </p>
    </div>
  );
};

export default Loading;
