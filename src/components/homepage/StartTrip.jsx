"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const StartTrip = () => {
  return (
    <section className="relative w-full bg-[#111111] py-24 px-6 overflow-hidden">
      {/* Background Image Container with Overlay */}
      <div className="absolute top-0 left-0 w-full h-[350px] z-0">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80"
          alt="Plane flying over island"
          className="w-full h-full object-cover opacity-40 grayscale-[0.5]"
        />
        {/* Gradient Overlay to blend with dark background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111111]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mt-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
        >
          Ready To Start Your Journey?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-gray-300 text-lg md:text-xl mb-10 font-medium"
        >
          Join thousands of travelers who have discovered the world with us
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/destinations"
            className="inline-flex items-center gap-3 bg-white text-black font-bold py-4 px-8 rounded-sm hover:bg-gray-200 transition-all group uppercase text-sm tracking-widest"
          >
            Book Your Trip Today
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default StartTrip;
