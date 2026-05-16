import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLocationDot, FaArrowRight, FaStar } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";

const AllDestinations = async () => {
  // Note: Ensure your API endpoint is accessible in your environment
  const res = await fetch(
    "https://wanderlust-server-4z29.onrender.com/destinations",
    {
      cache: "no-store",
    },
  );

  const destinations = await res.json();

  return (
    <section className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      {/* Heading - Responsive text sizes */}
      <div className="mb-8 md:mb-12 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3">
          Explore All Destinations
        </h1>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl">
          Find your perfect travel experience from our curated collection
        </p>
      </div>

      {/* Filters - Stacked on mobile, 3-col on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-8">
        <select className="bg-white border border-gray-200 px-4 py-3 outline-none text-gray-600 rounded-lg appearance-none cursor-pointer focus:border-sky-500 transition-colors">
          <option>CATEGORY</option>
          <option>Beach</option>
          <option>Mountain</option>
          <option>City</option>
          <option>Nature</option>
        </select>

        <select className="bg-white border border-gray-200 px-4 py-3 outline-none text-gray-600 rounded-lg appearance-none cursor-pointer focus:border-sky-500 transition-colors">
          <option>PRICE RANGE</option>
          <option>Below $1000</option>
          <option>$1000 - $2000</option>
          <option>$2000+</option>
        </select>

        {/* This filter spans 2 columns on small tablets but goes back to 1 on desktop */}
        <select className="sm:col-span-2 md:col-span-1 bg-white border border-gray-200 px-4 py-3 outline-none text-gray-600 rounded-lg appearance-none cursor-pointer focus:border-sky-500 transition-colors">
          <option>SORT BY</option>
          <option>Lowest Price</option>
          <option>Highest Price</option>
          <option>Newest</option>
        </select>
      </div>

      {/* Count */}
      <p className="text-gray-500 mb-6 text-sm md:text-base border-b border-gray-100 pb-4">
        Showing{" "}
        <span className="font-semibold text-black">{destinations.length}</span>{" "}
        destinations
      </p>

      {/* Cards - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-12">
        {destinations.map((destination) => (
          <div
            key={destination._id}
            className="group bg-white rounded-2xl overflow-hidden flex flex-col"
          >
            {/* Image Container with Hover Zoom */}
            <div className="relative aspect-[4/3] sm:aspect-video md:aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={destination.imageUrl}
                alt={destination.destinationName}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Rating */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 text-sm font-bold shadow-sm">
                4.5 <FaStar className="text-orange-400 text-xs" />
              </div>
            </div>

            {/* Content - flex-1 helps keep buttons aligned if titles vary in length */}
            <div className="pt-5 flex-1 flex flex-col">
              {/* Country */}
              <div className="flex items-center gap-1.5 text-gray-500 text-xs md:text-sm font-medium uppercase tracking-wider mb-2">
                <FaLocationDot className="text-sky-500" />
                <span>{destination.country}</span>
              </div>

              {/* Title + Price */}
              <div className="flex justify-between items-start mb-3 gap-4">
                <h2 className="text-xl md:text-2xl font-bold text-black group-hover:text-sky-600 transition-colors leading-tight">
                  {destination.destinationName}
                </h2>

                <div className="text-right shrink-0">
                  <p className="text-xl md:text-2xl font-black text-black">
                    ${destination.price}
                  </p>
                  <span className="text-gray-400 text-[10px] md:text-xs uppercase font-bold tracking-tighter">
                    /Person
                  </span>
                </div>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                <MdOutlineDateRange className="text-lg" />
                <span>{destination.duration}</span>
              </div>

              {/* Button - Push to bottom */}
              <div className="mt-auto">
                <Link
                  href={`/destinations/${destination._id}`}
                  className="inline-flex items-center gap-2 text-sky-500 font-bold uppercase text-xs md:text-sm tracking-widest hover:gap-4 transition-all"
                >
                  Book Now
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllDestinations;
