"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, AlertTriangle, Trash2, Loader2 } from "lucide-react";



  const CancelTrip = ({ isOpen, onClose, onConfirm, tripName, isLoading }) => {
  if (!isOpen) return null;


 const handleConfirmCancel = async () => {
   if (!selectedTrip) return;

   try {
     const res = await fetch(
       `http://localhost:5000/bookings/${selectedTrip._id}`,
       {
         method: "DELETE",
       },
     );

     const data = await res.json();

     if (data.success) {
       // 1. Remove the deleted trip from the local state (instant UI update)
       setBookings((prev) => prev.filter((b) => b._id !== selectedTrip._id));

       // 2. Close the modal
       setIsModalOpen(false);

       // 3. Show success notification
       toast.success("Trip cancelled successfully");
     } else {
       toast.error("Failed to cancel trip");
     }
   } catch (error) {
     console.error("Delete error:", error);
     toast.error("Something went wrong");
   }
 };


  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Header/Icon Section */}
          <div className="p-6 pb-0 flex justify-between items-start">
            <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-500">
              <AlertTriangle size={24} />
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900">
              Cancel your trip?
            </h3>
            <p className="text-gray-500 mt-2 leading-relaxed">
              Are you sure you want to cancel your booking for{" "}
              <span className="font-semibold text-gray-900">"{tripName}"</span>?
              This action cannot be undone and your spot will be released.
            </p>
          </div>

          {/* Footer Actions */}
          <div className="p-6 bg-gray-50 flex flex-col sm:flex-row gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 text-sm font-bold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all active:scale-95"
            >
              Keep My Trip
            </button>
            <button
              onClick={onConfirm}
              disabled={isLoading} // Add this prop if you want to pass a loading state
              className="flex-1 px-4 py-3 text-sm font-bold text-white bg-red-500 rounded-xl hover:bg-red-600 shadow-lg shadow-red-200 transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" size={16} />
              ) : (
                <>
                  <Trash2 size={16} />
                  Yes, Cancel
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CancelTrip;
