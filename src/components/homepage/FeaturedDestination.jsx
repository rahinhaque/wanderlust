import React from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { MapPin, Calendar, ArrowUpRight, Star } from "lucide-react";

const FeaturedDestination = async () => {
  // Fetch data from your local API
  const res = await fetch(
    "https://wanderlust-server-4z29.onrender.com/destinations",
    {
      cache: "no-store",
    },
  );

  const allDestinations = await res.json();

  // Show only 5 destinations as requested
  const destinations = allDestinations.slice(0, 5);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Featured Destinations
          </h2>
          <p className="text-gray-500 font-medium">
            Handpicked travel experiences for the adventure seekers
          </p>
        </div>

        <Link
          href="/destinations"
          className="flex items-center gap-2 border border-cyan-500 text-cyan-600 px-6 py-2 rounded-md hover:bg-cyan-50 transition-all font-semibold uppercase text-xs tracking-wider"
        >
          All Destinations
          <ArrowUpRight size={16} />
        </Link>
      </div>

      {/* Marquee Slider */}
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        className="pb-10"
      >
        {destinations.map((dest) => (
          <div
            key={dest._id || dest.id}
            className="w-[350px] mx-4 group cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative h-[250px] w-full rounded-2xl overflow-hidden mb-4">
              <img
                src={dest.imageUrl}
                alt={dest.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Rating Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 text-xs font-bold shadow-sm">
                {dest.rating || "4.5"} <Star size={12} className="fill-black" />
              </div>
            </div>

            {/* Card Content */}
            <div className="space-y-2">
              <div className="flex items-center gap-1 text-gray-400 text-xs font-semibold uppercase tracking-widest">
                <MapPin size={14} className="text-gray-400" />
                {dest.location || "Nepal"}
              </div>

              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  {dest.title || "Bali Paradise"}
                </h3>
                <div className="text-right">
                  <span className="text-xl font-bold text-gray-900">
                    ${dest.price || "2700"}
                  </span>
                  <span className="text-gray-400 text-xs font-medium">
                    /Person
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                <Calendar size={16} />
                {dest.duration || "7 Days/6 Nights"}
              </div>

              <button className="flex items-center gap-1 text-cyan-600 font-bold text-xs uppercase tracking-widest pt-2 group-hover:underline transition-all">
                Book Now
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </Marquee>

      {/* Pagination/Controls UI (Decorative as per screenshot) */}
      <div className="flex items-center justify-between mt-6">
        <div className="text-xl font-bold text-gray-900">
          1/5{" "}
          <span className="inline-block w-48 md:w-96 h-[2px] bg-gray-100 ml-4 relative">
            <span className="absolute left-0 top-0 h-full w-1/5 bg-gray-200"></span>
          </span>
        </div>
        <div className="flex gap-4">
          <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ArrowUpRight size={20} className="rotate-[225deg] text-gray-400" />
          </button>
          <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ArrowUpRight size={20} className="rotate-45 text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestination;
