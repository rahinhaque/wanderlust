"use client";

import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import { Loader2, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

// We pass initialHasBooked from the server-side check we discussed earlier
const BookingButton = ({ destination, user, initialHasBooked }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isBooked, setIsBooked] = useState(initialHasBooked);

  // Sync state if initialHasBooked changes
  useEffect(() => {
    setIsBooked(initialHasBooked);
  }, [initialHasBooked]);

  const handleBooking = async () => {
    if (!user) {
      toast.error("Please sign in to book this trip.");
      return;
    }

    setIsLoading(true);

    const bookingData = {
      destinationId: destination._id || destination.id,
      destinationName: destination.destinationName,
      price: destination.price,
      userId: user.id,
      userName: user.name,
      userEmail: user.email,
      country: destination.country,
      imageUrl: destination.imageUrl,
      bookingDate: new Date().toISOString(),
      status: "Confirmed", // Default status as seen in your "My Bookings" screenshot
    };

    try {
      const res = await fetch(
        "https://wanderlust-server-4z29.onrender.com/bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        },
      );

      if (res.ok) {
        setIsBooked(true); // Update UI state immediately
        toast.success("Success!", {
          description: `Your trip to ${destination.destinationName} is booked.`,
        });
      } else {
        const errorData = await res.json();
        throw new Error(errorData.message || "Booking failed");
      }
    } catch (error) {
      toast.error("Booking Error", {
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // State: Already Booked
  // If the trip is booked, we change the style and link it to the dashboard
  if (isBooked) {
    return (
      <Link href="/my-trips" className="w-full">
        <button className="w-full bg-green-50 text-green-600 font-bold py-4 rounded-xl border border-green-200 flex items-center justify-center gap-2 hover:bg-green-100 transition-all shadow-sm">
          <CheckCircle size={20} />
          Already Booked — View My Trips
        </button>
      </Link>
    );
  }

  // State: Default/Available to Book
  return (
    <button
      onClick={handleBooking}
      disabled={isLoading}
      className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95 disabled:opacity-70 flex items-center justify-center gap-2"
    >
      {isLoading ? (
        <>
          <Loader2 className="animate-spin" size={20} /> Processing...
        </>
      ) : (
        <>
          Book This Trip <ArrowRight size={18} />
        </>
      )}
    </button>
  );
};

export default BookingButton;
