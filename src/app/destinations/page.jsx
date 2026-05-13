import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLocationDot, FaArrowRight, FaStar } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";

const AllDestinations = async () => {
  const res = await fetch("http://localhost:5000/destinations", {
    cache: "no-store",
  });

  const destinations = await res.json();

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold text-black mb-3">
          Explore All Destinations
        </h1>

        <p className="text-gray-500 text-lg">
          Find your perfect travel experience from our curated collection
        </p>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <select className="border border-gray-300 px-4 py-3 outline-none text-gray-600">
          <option>CATEGORY</option>
          <option>Beach</option>
          <option>Mountain</option>
          <option>City</option>
          <option>Nature</option>
        </select>

        <select className="border border-gray-300 px-4 py-3 outline-none text-gray-600">
          <option>PRICE RANGE</option>
          <option>Below $1000</option>
          <option>$1000 - $2000</option>
          <option>$2000+</option>
        </select>

        <select className="border border-gray-300 px-4 py-3 outline-none text-gray-600">
          <option>SORT BY</option>
          <option>Lowest Price</option>
          <option>Highest Price</option>
          <option>Newest</option>
        </select>
      </div>

      {/* Count */}
      <p className="text-gray-500 mb-8">
        Showing {destinations.length} destinations
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination) => (
          <div key={destination._id} className="group bg-white overflow-hidden">
            {/* Image */}
            <div className="relative overflow-hidden">
              <Image
                src={destination.imageUrl}
                alt={destination.destinationName}
                width={500}
                height={300}
                className="w-full h-[230px] object-cover"
              />
              {/* Rating */}
              <div className="absolute top-3 right-3 bg-white px-2 py-1 flex items-center gap-1 text-sm font-semibold">
                4.5 <FaStar className="text-black text-xs" />
              </div>
            </div>

            {/* Content */}
            <div className="pt-4">
              {/* Country */}
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                <FaLocationDot />
                <span>{destination.country}</span>
              </div>

              {/* Title + Price */}
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-2xl font-semibold text-black">
                  {destination.destinationName}
                </h2>

                <div className="text-right">
                  <p className="text-2xl font-bold text-black">
                    ${destination.price}
                  </p>

                  <span className="text-gray-400 text-sm">/Person</span>
                </div>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                <MdOutlineDateRange />
                <span>{destination.duration}</span>
              </div>

              {/* Button */}
              <Link
                href={`/destinations/${destination._id}`}
                className="flex items-center gap-2 text-sky-500 font-medium uppercase tracking-wide hover:gap-3 duration-300"
              >
                Book Now
                <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllDestinations;
