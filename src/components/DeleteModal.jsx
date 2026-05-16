"use client";
import { TrashBin } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";

// Assuming you pass the ID of the item to delete as a prop
export function DeleteConfirmationModal({ destination }) {
  const onSubmit = async (e) => {
    e.preventDefault();

    // In a delete modal, you usually don't need formData unless
    // you're asking for a "Type DELETE to confirm" input.
    console.log("Deleting item with ID:", destination);

    try {
      const res = await fetch(
        `https://wanderlust-server-4z29.onrender.com/destinations/${destination._id}`,
        {
          method: "DELETE", // Changed from PATCH to DELETE
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (res.ok) {
        const data = await res.json();
        console.log("Deleted successfully:", data);
        // Add logic here to close modal or refresh list (e.g., router.refresh())
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div className="flex max-w-2xl flex-col gap-8">
      <div className="flex flex-col gap-2">
        {/* <h3 className="text-lg font-semibold">Delete Action</h3> */}

        <Modal>
          <Modal.Trigger>
            <button className="px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50">
              Delete
            </button>
          </Modal.Trigger>

          <Modal.Backdrop>
            <Modal.Container>
              {/* Form wraps the content to catch the submit event */}
              <form onSubmit={onSubmit}>
                <Modal.Dialog className="sm:max-w-[360px]">
                  <Modal.Header>
                    <Modal.Icon className="bg-danger-soft text-danger">
                      <TrashBin className="size-5" />
                    </Modal.Icon>
                    <Modal.Heading>Confirm Deletion</Modal.Heading>
                  </Modal.Header>

                  <Modal.Body>
                    <p className="text-sm text-muted">
                      Are you sure you want to delete this item? This action is
                      <strong> permanent</strong> and cannot be undone.
                    </p>
                    {/* If you needed hidden inputs for the form, they would go here */}
                    <input type="hidden" name="id" value={destination} />
                  </Modal.Body>

                  <Modal.Footer>
                    <Button slot="close" variant="secondary" type="button">
                      Cancel
                    </Button>
                    {/* 
                        Note: We keep slot="close" so the modal closes on click, 
                        but we add type="submit" to trigger our logic. 
                    */}
                    <Button slot="close" color="danger" type="submit">
                      Confirm Delete
                    </Button>
                  </Modal.Footer>
                </Modal.Dialog>
              </form>
            </Modal.Container>
          </Modal.Backdrop>
        </Modal>
      </div>
    </div>
  );
}
