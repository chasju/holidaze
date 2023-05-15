import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import createVenue from "@/hooks/create/createVenue";

const schema = yup.object({
  image: yup.array().required("Please upload minimum one image."),
  title: yup.string().required("Please provide a title.").min(3, "Title is too short - must be minimum 3 characters."),
  price: yup.number().required("Please provide price per night."),
  maxGuests: yup.number().required("Minimum 1 guest."),
});

const CreateVenueForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Success message
  const [show, setShow] = useState(false);

  const handleClose = () => {
    reset();
    setShow(false);
  };

  const handleShow = () => setShow(true);

  // Fail message
  const [registerFail, setRegisterFail] = useState(false);
  const [failMessage, setFailMessage] = useState("");

  const handleFail = (message) => {
    setRegisterFail(true);
    setFailMessage(message);
  };

  function onSubmit(data) {
    // createVenue(data, handleShow, handleFail);
    console.log(data);
  }

  // Checking Meta
  const [metaCheck, setMetaCheck] = useState({
    wifi: false,
    parking: false,
    breakfast: false,
    pets: false,
  });

  const handleCheckChange = (item) => {
    setMetaCheck((prevMeta) => ({
      ...prevMeta,
      [item]: !prevMeta[item],
    }));
  };

  console.log(metaCheck);

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)} className="m-auto mt-4 " style={{ maxWidth: 500 }}>
        <Form.Group className="mb-4" controlId="formBasicURL">
          <Form.Label visuallyHidden>Image url</Form.Label>
          <Form.Control type="url" placeholder="Image url" className="border-light shadow py-3 text-primary" />
        </Form.Group>
        {registerFail && (
          <Form.Group className="mb-3">
            <Form.Text className="fw-semibold text-primary bg-lighter p-2 rounded-1">{failMessage}</Form.Text>
          </Form.Group>
        )}
        <Form.Group className="mb-4" controlId="formBasicTitle">
          <Form.Label visuallyHidden>title</Form.Label>
          <Form.Control type="text" placeholder="Title" className="border-light shadow py-3 text-primary" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicTitle">
          <Form.Label visuallyHidden>description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Description" className="border-light shadow py-3 text-primary" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicTitle">
          {["checkbox"].map((type) => (
            <Row key={type} className="mb-3">
              <Col>
                <Form.Check onChange={() => handleCheckChange("wifi")} checked={metaCheck.wifi} inline label="wifi" name="meta" type={type} />
              </Col>
              <Col>
                <Form.Check onChange={() => handleCheckChange("parking")} checked={metaCheck.parking} inline label="parking" name="meta" type={type} />
              </Col>
              <Col>
                <Form.Check onChange={() => handleCheckChange("breakfast")} checked={metaCheck.breakfast} inline label="breakfast" name="meta" type={type} />
              </Col>
              <Col>
                <Form.Check onChange={() => handleCheckChange("pets")} checked={metaCheck.pets} inline label="pets" name="meta" type={type} />
              </Col>
            </Row>
          ))}
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className="mb-4" controlId="formBasicPrice">
              <Form.Label visuallyHidden>price</Form.Label>
              <Form.Control type="number" placeholder="Price per night" className="border-light shadow py-3 text-primary" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicMaxGuests">
              <Form.Label visuallyHidden>max guests</Form.Label>
              <Form.Control type="number" placeholder="Maximum guests" className="border-light shadow py-3 text-primary" />
            </Form.Group>
          </Col>
        </Row>

        <Button onClick={handleShow} variant="primary" type="button" className="w-100 bg-secondary py-3 mt-4 border-0 shadow">
          Create Venue
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body className="rounded-top text-center text-primary fw-bold fs-3 p-5">Venue created!</Modal.Body>
          <div className=" rounded-bottom d-flex justify-content-center pb-5">
            <Button variant="secondary" href="/profile">
              Go to venue
            </Button>
          </div>
        </Modal>
      </Form>
    </div>
  );
};

export default CreateVenueForm;
