import React from "react";
import Link from "next/link";
import Image from "next/image";
import { EditModal } from "@/components/EditModal";

export const dynamic = "force-dynamic";

const DestinationDetails = async ({ params }) => {
  const { id } = await params; // ✅ await params in Next.js 15

  console.log("🚀 DestinationDetails called with ID:", id);

  let destination = null;

  try {
    console.log(
      "📡 Fetching from:",
      `http://127.0.0.1:5000/destinations/${id}`,
    );

    const res = await fetch(`http://127.0.0.1:5000/destinations/${id}`, {
      cache: "no-store",
    });

    console.log("📬 Response status:", res.status);
    console.log("📬 Response ok:", res.ok);

    if (!res.ok) {
      const errorBody = await res.text();
      console.log("❌ Error body from Express:", errorBody);
      throw new Error("Failed to fetch destination");
    }

    destination = await res.json();
    console.log("✅ Destination fetched successfully:", destination);
  } catch (error) {
    console.error("💥 Full fetch error:", error);
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
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
    <div className="bg-white min-h-screen">
      {/* Top bar */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/destinations"
          className="text-gray-600 hover:text-black flex items-center gap-2"
        >
          ← Back to Destinations
        </Link>

        <div className="flex gap-3">
         <EditModal destination={destination}/>
          <Link href="/destinations" className="px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50">
            Cancel
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative w-full h-[420px]">
          <Image
            src={destination.imageUrl}
            alt={destination.destinationName}
            fill
            priority
            className="object-cover rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold">{destination.destinationName}</h1>

          <p className="text-gray-500 mt-2">
            {destination.country} • {destination.city}
          </p>

          <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
            <span>⭐ {destination.rating || 4.5}</span>
            <span>•</span>
            <span>{destination.duration}</span>
          </div>

          <h2 className="text-xl font-semibold mt-8">Overview</h2>
          <p className="text-gray-600 mt-2 leading-relaxed">
            {destination.description}
          </p>

          
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="border rounded-xl p-6 shadow-sm h-fit sticky top-6">
          <p className="text-gray-500 text-sm">Starting from</p>

          <h2 className="text-3xl font-bold text-blue-600">
            ${destination.price}
          </h2>

          <p className="text-sm text-gray-500">per person</p>

          <input
            type="date"
            className="w-full mt-4 border rounded-md p-2"
            defaultValue={dateValue}
          />

          <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Book Now →
          </button>

          <div className="mt-4 space-y-2 text-sm text-gray-600">
            <p>✓ Free cancellation up to 7 days</p>
            <p>✓ Travel insurance included</p>
            <p>✓ 24/7 customer support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
