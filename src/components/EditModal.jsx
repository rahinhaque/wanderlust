"use client";

import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

export function EditModal({ destination }) {
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

    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());
    // console.log(destination)

    try {
      const res = await fetch(
        ` https://wanderlust-server-4z29.onrender.com/destinations/${_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(destination),
        },
      );

      const data = await res.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Modal>
      <Modal.Trigger>
        <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50">
          Edit
        </button>
      </Modal.Trigger>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-2xl w-full">
            <Modal.CloseTrigger />

            {/* HEADER */}
            <Modal.Header>
              <Modal.Heading>Update Travel Package</Modal.Heading>
              <p className="mt-1 text-sm text-muted">
                Make changes to the travel package details below
              </p>
            </Modal.Header>

            {/* BODY */}
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-5">
                  <TextField
                    defaultValue={destinationName}
                    name="destinationName"
                  >
                    <Label>Destination Name</Label>
                    <Input placeholder="Bali Paradise" />
                  </TextField>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <TextField defaultValue={country} name="country">
                      <Label>Country</Label>
                      <Input placeholder="Indonesia" />
                    </TextField>

                    <TextField defaultValue={category} name="category">
                      <Label>Category</Label>
                      <Input placeholder="Beach, Adventure, City" />
                    </TextField>

                    <TextField defaultValue={price} name="price">
                      <Label>Price (USD)</Label>
                      <Input type="number" placeholder="1299" />
                    </TextField>

                    <TextField defaultValue={duration} name="duration">
                      <Label>Duration</Label>
                      <Input placeholder="7 Days / 6 Nights" />
                    </TextField>
                  </div>

                  <TextField defaultValue={departureDate} name="departureDate">
                    <Label>Departure Date</Label>
                    <Input type="date" />
                  </TextField>

                  <TextField defaultValue={imageUrl} name="imageUrl">
                    <Label>Image URL</Label>
                    <Input placeholder="https://example.com/image.jpg" />
                  </TextField>

                  <TextField defaultValue={description} name="description">
                    <Label>Description</Label>
                    <Input placeholder="Describe the travel experience..." />
                  </TextField>

                  {/* Submit button */}
                  <Button type="submit" className="bg-blue-600 text-white">
                    Save Changes
                  </Button>
                </form>
              </Surface>
            </Modal.Body>

            {/* FOOTER */}
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
