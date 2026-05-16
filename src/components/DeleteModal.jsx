"use client";

import React, { useState } from "react";
import { TrashBin } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function DeleteConfirmationModal({ destination }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsDeleting(true);

    const toastId = toast.loading("Removing destination...");

    try {
      const res = await fetch(
        `https://wanderlust-server-4z29.onrender.com/destinations/${destination._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (res.ok) {
        toast.success("Destination deleted successfully.", { id: toastId });

        /**
         * CRITICAL FIX:
         * We redirect to the main destinations list BEFORE refreshing.
         * This prevents the current page from trying to re-fetch a deleted ID.
         */
        router.push("/destinations");
        router.refresh();
      } else {
        const errorData = await res.json();
        throw new Error(errorData.message || "Deletion failed");
      }
    } catch (error) {
      toast.error("Failed to delete item", {
        id: toastId,
        description: error.message,
      });
      console.error("Error deleting item:", error);
      setIsDeleting(false); // Reset loading only on error, as success redirects
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <Modal>
        <Modal.Trigger>
          <button className="px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50 transition-all active:scale-95 font-medium">
            Delete
          </button>
        </Modal.Trigger>

        <Modal.Backdrop>
          <Modal.Container>
            {/* Form wraps the content to handle the submit logic */}
            <form onSubmit={onSubmit}>
              <Modal.Dialog className="sm:max-w-[400px]">
                <Modal.Header>
                  <Modal.Icon className="bg-red-100 text-red-600 p-2 rounded-full">
                    <TrashBin className="size-6" />
                  </Modal.Icon>
                  <Modal.Heading className="text-xl font-bold">
                    Confirm Deletion
                  </Modal.Heading>
                </Modal.Header>

                <Modal.Body className="py-4">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Are you sure you want to delete{" "}
                    <span className="font-bold text-gray-900">
                      {destination.destinationName}
                    </span>
                    ? This action is permanent and all data associated with this
                    trip will be removed.
                  </p>
                </Modal.Body>

                <Modal.Footer className="flex gap-3 pt-2">
                  <Button
                    slot="close"
                    variant="secondary"
                    type="button"
                    className="flex-1"
                  >
                    Cancel
                  </Button>

                  <Button
                    color="danger"
                    type="submit"
                    disabled={isDeleting}
                    className="flex-1 font-bold"
                  >
                    {isDeleting ? "Deleting..." : "Confirm Delete"}
                  </Button>
                </Modal.Footer>
              </Modal.Dialog>
            </form>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
}
