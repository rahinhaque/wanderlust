import React from "react";
import Link from "next/link";
import Image from "next/image";
import { EditModal } from "@/components/EditModal";
import { DeleteConfirmationModal } from "@/components/DeleteModal";

export const dynamic = "force-dynamic";

const DestinationDetails = async ({ params }) => {
  const { id } = await params;

  let destination = null;

  try {
    const res = await fetch(`http://127.0.0.1:5000/destinations/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch destination");
    destination = await res.json();
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-red-500">
        <div className="text-center">
          <p className="text-xl font-bold">Failed to load destination data.</p>
          <p className="text-sm mt-2">{error.message}</p>
        </div>
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Destination not found.
      </div>
    );
  }

  const dateValue = destination.departureDate
    ? new Date(destination.departureDate).toISOString().split("T")[0]
    : "";

  return (
    <div className="bg-white min-h-screen pb-20 mt-20">
      {/* Top bar - Responsive Flex */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Link
          href="/destinations"
          className="text-gray-600 hover:text-black flex items-center gap-2 font-medium transition-colors"
        >
          ← <span className="hidden sm:inline">Back to Destinations</span>
          <span className="sm:hidden">Back</span>
        </Link>

        {/* Action Buttons - Ensuring visibility */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <EditModal destination={destination} />
          <DeleteConfirmationModal destination={destination} />
        </div>
      </div>

      {/* Hero Image - Responsive Height */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px]">
          <Image
            src={destination.imageUrl}
            alt={destination.destinationName}
            fill
            priority
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        {/* LEFT SIDE: Info */}
        <div className="lg:col-span-2">
          <div className="border-b pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              {destination.destinationName}
            </h1>
            <p className="text-gray-500 mt-2 text-lg">
              {destination.city}, {destination.country}
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4 text-sm font-medium">
              <span className="flex items-center gap-1 bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full">
                ⭐ {destination.rating || 4.5}
              </span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-600 flex items-center gap-1">
                ⏱ {destination.duration}
              </span>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
            <p className="text-gray-600 mt-4 leading-relaxed text-base sm:text-lg">
              {destination.description}
            </p>
          </div>
        </div>

        {/* RIGHT SIDEBAR: Booking Card */}
        <div className="relative">
          <div className="lg:sticky lg:top-24 border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-xl shadow-gray-100 bg-white">
            <p className="text-gray-500 text-sm font-medium">Total Price</p>
            <div className="flex items-baseline gap-1 mt-1">
              <h2 className="text-4xl font-black text-blue-600">
                ${destination.price}
              </h2>
              <span className="text-gray-400 font-medium">/person</span>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Departure Date
                </label>
                <input
                  type="date"
                  className="w-full mt-1 border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  defaultValue={dateValue}
                />
              </div>

              <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95">
                Book This Trip →
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-50 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span className="text-green-500">✓</span> Free cancellation
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span className="text-green-500">✓</span> Insurance included
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
