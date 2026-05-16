"use client";

import React, { useState } from "react";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function EditModal({ destination }) {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const {
    _id,
    destinationName,
    country,
    category,
    price,
    duration,
    departureDate,
    imageUrl,
    description,
  } = destination;

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);

    const formData = new FormData(e.currentTarget);
    const updatedData = Object.fromEntries(formData.entries());

    const toastId = toast.loading("Updating travel package...");

    try {
      const res = await fetch(
        `https://wanderlust-server-4z29.onrender.com/destinations/${_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        },
      );

      if (res.ok) {
        toast.success("Package updated successfully!", { id: toastId });
        router.refresh(); // Syncs the server data with the UI
      } else {
        throw new Error("Update failed");
      }
    } catch (error) {
      toast.error("Failed to update package", { id: toastId });
      console.error("Error submitting form:", error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Modal>
      <Modal.Trigger>
        <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors">
          Edit
        </button>
      </Modal.Trigger>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-2xl w-full">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading>Update Travel Package</Modal.Heading>
              <p className="mt-1 text-sm text-muted">
                Make changes to the travel package details below
              </p>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-5">
                  <TextField
                    defaultValue={destinationName}
                    name="destinationName"
                    isRequired
                  >
                    <Label>Destination Name</Label>
                    <Input placeholder="Bali Paradise" />
                  </TextField>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <TextField defaultValue={country} name="country" isRequired>
                      <Label>Country</Label>
                      <Input placeholder="Indonesia" />
                    </TextField>

                    <TextField
                      defaultValue={category}
                      name="category"
                      isRequired
                    >
                      <Label>Category</Label>
                      <Input placeholder="Beach, Adventure, City" />
                    </TextField>

                    <TextField defaultValue={price} name="price" isRequired>
                      <Label>Price (USD)</Label>
                      <Input type="number" placeholder="1299" />
                    </TextField>

                    <TextField
                      defaultValue={duration}
                      name="duration"
                      isRequired
                    >
                      <Label>Duration</Label>
                      <Input placeholder="7 Days / 6 Nights" />
                    </TextField>
                  </div>

                  <TextField
                    defaultValue={departureDate}
                    name="departureDate"
                    isRequired
                  >
                    <Label>Departure Date</Label>
                    <Input type="date" />
                  </TextField>

                  <TextField defaultValue={imageUrl} name="imageUrl" isRequired>
                    <Label>Image URL</Label>
                    <Input placeholder="https://example.com/image.jpg" />
                  </TextField>

                  <TextField
                    defaultValue={description}
                    name="description"
                    isRequired
                  >
                    <Label>Description</Label>
                    <Input placeholder="Describe the travel experience..." />
                  </TextField>

                  <Button
                    type="submit"
                    className="bg-blue-600 text-white"
                    disabled={isPending}
                    slot="close" // Closes modal after success/click
                  >
                    {isPending ? "Saving..." : "Save Changes"}
                  </Button>
                </form>
              </Surface>
            </Modal.Body>

            <Modal.Footer className="flex justify-end gap-3">
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
