"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable.",
    name: "Michael Chen",
    location: "Singapore",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: 2,
    text: "Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!",
    name: "Sarah Johnson",
    location: "New York, USA",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
  },
];

const TravelarSection = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Header with Navigation */}
      <div className="flex justify-between items-end mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            What Travelers Say
          </h2>
          <p className="text-gray-500 font-medium">
            Real experiences from our happy travelers
          </p>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="hidden md:flex gap-4">
          <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-cyan-500 hover:text-cyan-500 transition-all">
            <ArrowLeft size={20} />
          </button>
          <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-cyan-500 hover:text-cyan-500 transition-all">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white border border-gray-100 p-8 flex flex-col md:flex-row gap-6 items-center md:items-start shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Content Side */}
            <div className="flex-1 order-2 md:order-1">
              <p className="text-gray-800 font-semibold leading-relaxed mb-8 text-lg">
                "{item.text}"
              </p>
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-[2px] bg-cyan-500"></span>
                  <h4 className="text-cyan-600 font-bold">{item.name}</h4>
                </div>
                <p className="text-gray-400 text-xs ml-6 font-medium uppercase tracking-wider mt-1">
                  {item.location}
                </p>
              </div>
            </div>

            {/* Image Side */}
            <div className="w-48 h-56 flex-shrink-0 order-1 md:order-2 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TravelarSection;
