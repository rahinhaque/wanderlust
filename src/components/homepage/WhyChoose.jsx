"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Map, Headset } from "lucide-react";

const WhyChoose = () => {
  const features = [
    {
      icon: <ShieldCheck className="text-cyan-500" size={32} />,
      title: "Safe & Secure",
      description:
        "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
    },
    {
      icon: <Map className="text-cyan-500" size={32} />,
      title: "Expert Guides",
      description:
        "Local experts who bring destinations to life with authentic cultural insights.",
    },
    {
      icon: <Headset className="text-cyan-500" size={32} />,
      title: "24/7 Support",
      description:
        "Round-the-clock customer service to assist you wherever your journey takes you.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 px-6 bg-[#f0f9ff]">
      {" "}
      {/* Light cyan background from your image */}
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Why Choose Wanderlust
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 font-medium max-w-2xl mx-auto"
          >
            Your trusted partner for exceptional travel experiences
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white p-10 rounded-sm shadow-sm border border-gray-100 flex flex-col items-start text-left hover:shadow-md transition-shadow"
            >
              <div className="mb-6 p-3 bg-cyan-50 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
