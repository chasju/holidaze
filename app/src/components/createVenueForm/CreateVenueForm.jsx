import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const CreateVenueForm = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    //reset
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <div>
      <Form className="m-auto mt-4" style={{ maxWidth: 500 }}>
        <Form.Group className="mb-4" controlId="formBasicURL">
          <Form.Label visuallyHidden>Image url</Form.Label>
          <Form.Control type="url" placeholder="Image url" className="border-light shadow py-3" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicTitle">
          <Form.Label visuallyHidden>title</Form.Label>
          <Form.Control type="text" placeholder="Title" className="border-light shadow py-3" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicPrice">
          <Form.Label visuallyHidden>price</Form.Label>
          <Form.Control type="number" placeholder="Price" className="border-light shadow py-3" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMaxGuests">
          <Form.Label visuallyHidden>max guests</Form.Label>
          <Form.Control type="number" placeholder="Maximum guests" className="border-light shadow py-3" />
        </Form.Group>
        <Button onClick={handleShow} variant="primary" type="button" className="w-100 bg-secondary py-3 mt-4 border-0 shadow">
          Create Venue
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body className="rounded-top text-center text-primary fw-bold fs-3 p-5">Venue created!</Modal.Body>
          <div className=" rounded-bottom d-flex justify-content-center pb-5">
            <Button variant="secondary" href="/venue">
              Go to venue
            </Button>
          </div>
        </Modal>
      </Form>
    </div>
  );
};

export default CreateVenueForm;
