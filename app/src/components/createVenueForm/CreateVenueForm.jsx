import { useEffect, useMemo, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import countryList from "react-select-country-list";
import Select from "react-select";
import createVenue from "@/hooks/create/createVenue";

const schema = yup.object({
  images: yup
    .array()
    .required("Please upload minimum one image.")
    .test("imageArray", "Please enter valid URLs", (value) => {
      if (!value) return true;
      return value.every((url) => yup.string().url().isValidSync(url));
    }),
  title: yup.string().required("Please provide a title.").min(3, "Title is too short - must be minimum 3 characters."),
  description: yup.string("Please provide a description").min(3, "Add a few words about your place"),
  price: yup.number().required("Please provide price per night.").min(1, "Please provide price per night."),
  maxGuests: yup.number().required("Minimum 1 guest.").min(1, "Please provide price per night."),
});

const CreateVenueForm = () => {
  const {
    register,
    setValue,
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

  // Country dropdown

  const [country, setCountry] = useState("");
  const options = useMemo(() => countryList().data, []);

  useEffect((item) => setCountry(item), []);

  // Get images

  const [imageArray, setImageArray] = useState([]);

  const handleImageValue = (e) => {
    setImageArray(e.target.value.split(/[ ,]+/).filter(Boolean));
  };

  function onSubmit(data) {
    reset();

    const updated = { ...data, meta: metaCheck, country: country?.label };

    createVenue(updated, handleShow, handleFail);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)} className="m-auto mt-4 " style={{ maxWidth: 500 }}>
        {registerFail && <p className="fw-semibold text-primary bg-lighter p-2 rounded-1">{failMessage}</p>}
        <Form.Group className="mb-4" controlId="formBasicURL">
          <Form.Label visuallyHidden>Image url</Form.Label>
          <Form.Control {...register("images")} onChange={handleImageValue} type="url" placeholder="Image url" className="border-light shadow py-3 text-primary" multiple />

          <Form.Text>{errors.images?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicTitle">
          <Form.Label visuallyHidden>title</Form.Label>
          <Form.Control {...register("title")} type="text" placeholder="Title" className="border-light shadow py-3 text-primary" />
          <Form.Text>{errors.title?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicTitle">
          <Form.Label visuallyHidden>description</Form.Label>
          <Form.Control {...register("description")} as="textarea" rows={3} placeholder="Description" className="border-light shadow py-3 text-primary" />
          <Form.Text>{errors.description?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicTitle">
          <Row className="mb-3">
            <Col>
              <Form.Check onChange={() => handleCheckChange("wifi")} checked={metaCheck.wifi} inline label="wifi" name="meta" />
            </Col>
            <Col>
              <Form.Check onChange={() => handleCheckChange("parking")} checked={metaCheck.parking} inline label="parking" name="meta" />
            </Col>
            <Col>
              <Form.Check onChange={() => handleCheckChange("breakfast")} checked={metaCheck.breakfast} inline label="breakfast" name="meta" />
            </Col>
            <Col>
              <Form.Check onChange={() => handleCheckChange("pets")} checked={metaCheck.pets} inline label="pets" name="meta" />
            </Col>
            <Form.Text>{errors.meta?.message}</Form.Text>
          </Row>
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className="mb-4" controlId="formBasicPrice">
              <Form.Label visuallyHidden>price</Form.Label>
              <Form.Control {...register("price")} type="number" placeholder="Price per night" className="border-light shadow py-3 text-primary" />
              <Form.Text>{errors.price?.message}</Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicMaxGuests">
              <Form.Label visuallyHidden>max guests</Form.Label>
              <Form.Control {...register("maxGuests")} type="number" placeholder="Maximum guests" className="border-light shadow py-3 text-primary" />
              <Form.Text>{errors.maxGuests?.message}</Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Select required instanceId="dropdown" placeholder="Country" options={options} onChange={setCountry} value={country} />
        <Button onClick={() => setValue("images", imageArray)} variant="primary" type="submit" className="w-100 bg-secondary py-3 mt-4 border-0 shadow">
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
