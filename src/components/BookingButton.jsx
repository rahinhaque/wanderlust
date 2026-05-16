"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { image } from "framer-motion/client";

const BookingButton = ({ destination, user }) => {
  const [isLoading, setIsLoading] = useState(false);

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
    }; 
    console.log(bookingData)

    try {
      // Sending data to your Node.js Backend
      const res = await fetch("http://127.0.0.1:5000/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (res.ok) {
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
        "Book This Trip →"
      )}
    </button>
  );
};

export default BookingButton;
