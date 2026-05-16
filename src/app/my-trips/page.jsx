"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Tag, Eye, XCircle, Clock, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import CancelTrip from "@/components/CancelTrip";
import { toast } from "sonner"; // Assuming you use sonner for notifications

const MyTrips = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 1. FIX: Added the missing state
  const [selectedTrip, setSelectedTrip] = useState(null);

  const openCancelModal = (booking) => {
    setSelectedTrip(booking);
    setIsModalOpen(true);
  };

  const handleConfirmCancel = async () => {
    if (!selectedTrip) return;

    try {
      const res = await fetch(
        `http://localhost:5000/bookings/${selectedTrip._id}`,
        {
          method: "DELETE",
        },
      );

      if (res.ok) {
        // Remove the deleted trip from the UI state
        setBookings(bookings.filter((b) => b._id !== selectedTrip._id));
        toast.success("Booking cancelled successfully");
      } else {
        toast.error("Failed to cancel booking");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred");
    } finally {
      setIsModalOpen(false);
      setSelectedTrip(null);
    }
  };

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch("http://localhost:5000/bookings", {
          cache: "no-store",
        });
        const data = await res.json();
        setBookings(data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  if (loading)
    return (
      <div className="p-20 text-center font-bold">Loading your journeys...</div>
    );

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 mt-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900">My Bookings</h1>
        <p className="text-gray-500 mt-2">
          Manage and view your upcoming travel plans
        </p>
      </div>

      <div className="space-y-6">
        {bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <motion.div
              key={booking._id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-center p-4 gap-6"
            >
              {/* Image */}
              <div className="w-full md:w-72 h-48 flex-shrink-0 relative">
                <img
                  src={
                    booking.imageUrl ||
                    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                  }
                  alt={booking.destinationName}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Info */}
              <div className="flex-1 space-y-3 w-full">
                <span
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${booking.status === "Pending" ? "bg-orange-50 text-orange-600" : "bg-green-50 text-green-600"}`}
                >
                  {booking.status === "Pending" ? (
                    <Clock size={12} />
                  ) : (
                    <CheckCircle2 size={12} />
                  )}
                  {booking.status || "Confirmed"}
                </span>
                <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                  {booking.destinationName}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} /> Departure:{" "}
                    {booking.departureDate || "May 15, 2026"}
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag size={16} /> Booking ID:{" "}
                    {booking._id.slice(-6).toUpperCase()}
                  </div>
                </div>
                <div className="text-2xl font-black text-cyan-600 pt-2">
                  ${booking.price}
                </div>
              </div>

              {/* Actions */}
              <div className="flex md:flex-col gap-3 w-full md:w-auto">
                <button
                  onClick={() => openCancelModal(booking)}
                  className="flex-1 md:w-32 flex items-center justify-center gap-2 border border-red-200 text-red-500 py-2 px-4 rounded-md hover:bg-red-50 transition-colors text-sm font-bold"
                >
                  <XCircle size={16} /> Cancel
                </button>

                <Link href={`/destinations/${booking.destinationId}`}>
                  <button className="flex-1 md:w-32 flex items-center justify-center gap-2 bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-600 transition-colors text-sm font-bold">
                    <Eye size={16} /> View
                  </button>
                </Link>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
            <p className="text-gray-400 font-medium">
              You haven't booked any trips yet.
            </p>
          </div>
        )}
      </div>

      {/* 2. FIX: Moved Modal OUTSIDE the map loop */}
      <CancelTrip
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedTrip(null);
        }}
        onConfirm={handleConfirmCancel}
        tripName={selectedTrip?.destinationName}
      />
    </div>
  );
};

export default MyTrips;
