import React from "react";
import Link from "next/link";
import Image from "next/image";
import { EditModal } from "@/components/EditModal";
import { DeleteConfirmationModal } from "@/components/DeleteModal";
import BookingButton from "@/components/BookingButton";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

const DestinationDetails = async ({ params }) => {
  const { id } = await params;

  // 1. Fetch session on the server
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  let destination = null;
  let hasBooked = false;

  try {
    // 2. Fetch Destination Data from Node.js
    const res = await fetch(`http://127.0.0.1:5000/destinations/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch destination");
    destination = await res.json();

    // 3. Check if this specific user has already booked this trip
    if (user && destination) {
      const checkRes = await fetch(
        `http://127.0.0.1:5000/bookings/check?userId=${user.id}&destinationId=${id}`,
        { cache: "no-store" },
      );
      const checkData = await checkRes.json();
      hasBooked = checkData.exists;
    }
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-red-500">
        <div className="text-center">
          <p className="text-xl font-bold">Error connecting to server.</p>
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

  // 4. Define dateValue (Fixes your ReferenceError)
  const dateValue = destination.departureDate
    ? new Date(destination.departureDate).toISOString().split("T")[0]
    : "";

  return (
    <div className="bg-white min-h-screen pb-20 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center gap-4">
        <Link
          href="/destinations"
          className="text-gray-600 hover:text-black flex items-center gap-2 font-medium transition-colors"
        >
          ← Back to Destinations
        </Link>
        <div className="flex items-center gap-2">
          <EditModal destination={destination} />
          <DeleteConfirmationModal destination={destination} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative w-full h-[250px] sm:h-[450px]">
          <Image
            src={destination.imageUrl}
            alt={destination.destinationName}
            fill
            priority
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        <div className="lg:col-span-2">
          <div className="border-b pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              {destination.destinationName}
            </h1>
            <p className="text-gray-500 mt-2 text-lg">
              {destination.city}, {destination.country}
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm font-medium">
              <span className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full">
                ⭐ {destination.rating || 4.5}
              </span>
              <span className="text-gray-600">⏱ {destination.duration}</span>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
            <p className="text-gray-600 mt-4 leading-relaxed text-base sm:text-lg">
              {destination.description}
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="lg:sticky lg:top-24 border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-xl bg-white">
            <p className="text-gray-500 text-sm font-medium">Total Price</p>
            <div className="flex items-baseline gap-1 mt-1">
              <h2 className="text-4xl font-black text-blue-600">
                ${destination.price}
              </h2>
              <span className="text-gray-400 font-medium">/person</span>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase">
                  Departure Date
                </label>
                <input
                  type="date"
                  className="w-full mt-1 border border-gray-200 rounded-xl p-3 outline-none"
                  defaultValue={dateValue}
                />
              </div>

              {/* DYNAMIC BUTTON COMPONENT */}
              <BookingButton
                destination={destination}
                user={user}
                initialHasBooked={hasBooked}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
